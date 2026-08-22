"use client";

import { useEffect, useState } from "react";
import { FIRSTS, type FirstModule } from "./dashboardData";

const STORAGE_KEY = "firsts:progress-overrides";
const EVENT_NAME = "firsts:progress-change";

/** Each override stores the ISO date (YYYY-MM-DD) the module was marked complete, so live activity feeds the same streak/velocity/time-invested math as the seeded history. */
type Overrides = Record<number, string>;

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function readOverrides(): Overrides {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, unknown>;

    // Older versions of this app stored `true` instead of a completion date.
    // Migrate any such legacy entries in place so stale localStorage from
    // before that change doesn't crash the date-based momentum math.
    let migrated = false;
    const overrides: Overrides = {};
    for (const [id, value] of Object.entries(parsed)) {
      if (typeof value === "string" && ISO_DATE_RE.test(value)) {
        overrides[Number(id)] = value;
      } else {
        overrides[Number(id)] = todayIso();
        migrated = true;
      }
    }
    if (migrated) writeOverrides(overrides);
    return overrides;
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
  overrides[id] = todayIso();
  writeOverrides(overrides);
}

export function markIncomplete(id: number) {
  const overrides = readOverrides();
  delete overrides[id];
  writeOverrides(overrides);
}

function mergeOverrides(overrides: Overrides): FirstModule[] {
  return FIRSTS.map((m) =>
    overrides[m.id]
      ? { ...m, status: "complete" as const, lastUpdated: "just now", completedAt: overrides[m.id] }
      : m
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
