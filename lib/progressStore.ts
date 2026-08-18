"use client";

import { useEffect, useState } from "react";
import { FIRSTS, type FirstModule } from "./dashboardData";

const STORAGE_KEY = "firsts:progress-overrides";
const EVENT_NAME = "firsts:progress-change";

type Overrides = Record<number, true>;

function readOverrides(): Overrides {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeOverrides(overrides: Overrides) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function markComplete(id: number) {
  const overrides = readOverrides();
  overrides[id] = true;
  writeOverrides(overrides);
}

export function markIncomplete(id: number) {
  const overrides = readOverrides();
  delete overrides[id];
  writeOverrides(overrides);
}

function mergeOverrides(overrides: Overrides): FirstModule[] {
  return FIRSTS.map((m) =>
    overrides[m.id] ? { ...m, status: "complete" as const, lastUpdated: "just now" } : m
  );
}

/** Live Stage One module list, reflecting any "mark as complete" actions taken this session. */
export function useFirstsWithProgress(): FirstModule[] {
  const [modules, setModules] = useState<FirstModule[]>(FIRSTS);

  useEffect(() => {
    const sync = () => setModules(mergeOverrides(readOverrides()));
    sync();
    window.addEventListener(EVENT_NAME, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT_NAME, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return modules;
}

export function useModuleProgress(id: number): FirstModule {
  const modules = useFirstsWithProgress();
  return modules.find((m) => m.id === id) ?? FIRSTS.find((m) => m.id === id)!;
}
