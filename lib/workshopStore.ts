"use client";

import { useEffect, useState } from "react";

export type Workshop = {
  id: string;
  title: string;
  targetCategory: string;
  date: string;
  cohortIds: string[];
};

const KEY = "firsts:advisor-workshops";
const EVENT_NAME = "firsts:workshops-change";

function readAll(): Workshop[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Workshop[]) : [];
  } catch {
    return [];
  }
}

function writeAll(list: Workshop[]) {
  window.localStorage.setItem(KEY, JSON.stringify(list));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function createWorkshop(title: string, targetCategory: string, date: string, cohortIds: string[]): Workshop {
  const workshop: Workshop = {
    id: `workshop-${Date.now()}-${Math.round(Math.random() * 1e6)}`,
    title,
    targetCategory,
    date,
    cohortIds,
  };
  writeAll([workshop, ...readAll()]);
  return workshop;
}

export function deleteWorkshop(id: string) {
  writeAll(readAll().filter((w) => w.id !== id));
}

export function useWorkshops(): Workshop[] {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);

  useEffect(() => {
    function sync() {
      setWorkshops(readAll());
    }
    sync();
    window.addEventListener(EVENT_NAME, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT_NAME, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return workshops;
}
