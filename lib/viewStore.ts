"use client";

import { useEffect, useState } from "react";

const KEY = "firsts:employer-viewed-candidates";
const EVENT_NAME = "firsts:employer-viewed-candidates-change";

function readViewed(): Record<string, string> {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

function writeViewed(map: Record<string, string>) {
  window.localStorage.setItem(KEY, JSON.stringify(map));
  window.dispatchEvent(new Event(EVENT_NAME));
}

/** Records the first time this employer viewed a candidate's portfolio. Repeat views don't overwrite the original date. */
export function recordCandidateView(candidateId: string) {
  const map = readViewed();
  if (map[candidateId]) return;
  map[candidateId] = new Date().toISOString().slice(0, 10);
  writeViewed(map);
}

export function useViewedCandidates(): Record<string, string> {
  const [map, setMap] = useState<Record<string, string>>({});

  useEffect(() => {
    function sync() {
      setMap(readViewed());
    }
    sync();
    window.addEventListener(EVENT_NAME, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT_NAME, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return map;
}
