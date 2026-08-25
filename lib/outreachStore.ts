"use client";

import { useEffect, useState } from "react";

const KEY = "firsts:advisor-outreach-contacted";
const EVENT_NAME = "firsts:outreach-change";

function readAll(): Record<string, string> {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

function writeAll(map: Record<string, string>) {
  window.localStorage.setItem(KEY, JSON.stringify(map));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function markContacted(studentKey: string) {
  const map = readAll();
  map[studentKey] = new Date().toISOString().slice(0, 10);
  writeAll(map);
}

export function unmarkContacted(studentKey: string) {
  const map = readAll();
  delete map[studentKey];
  writeAll(map);
}

/** studentKey -> the date they were marked contacted, or undefined if never. */
export function useContactedMap(): Record<string, string> {
  const [map, setMap] = useState<Record<string, string>>({});

  useEffect(() => {
    function sync() {
      setMap(readAll());
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
