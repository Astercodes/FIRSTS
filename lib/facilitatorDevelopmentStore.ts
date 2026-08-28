"use client";

import { useEffect, useState } from "react";

export type DevelopmentModule = { id: string; title: string; description: string };

/** Optional growth content, doesn't gate certification, purely a perk. */
export const DEVELOPMENT_MODULES: DevelopmentModule[] = [
  {
    id: "public-speaking",
    title: "Public speaking fundamentals",
    description: "Pacing, filler words, and holding a room without notes.",
  },
  {
    id: "coaching-basics",
    title: "Coaching basics",
    description: "Asking instead of telling, the core move behind good facilitation.",
  },
  {
    id: "difficult-conversations",
    title: "Navigating difficult conversations",
    description: "What to do when feedback lands badly or a student pushes back.",
  },
];

const KEY = "firsts:facilitator-development";
const EVENT_NAME = "firsts:facilitator-development-change";

function readAll(): string[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function writeAll(ids: string[]) {
  window.localStorage.setItem(KEY, JSON.stringify(ids));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function toggleDevelopmentModule(id: string) {
  const all = readAll();
  writeAll(all.includes(id) ? all.filter((i) => i !== id) : [...all, id]);
}

export function useCompletedDevelopmentModules(): string[] {
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    function sync() {
      setCompleted(readAll());
    }
    sync();
    window.addEventListener(EVENT_NAME, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT_NAME, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return completed;
}
