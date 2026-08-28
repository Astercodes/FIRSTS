"use client";

import { useEffect, useState } from "react";

const KEY = "firsts:community-following";
const EVENT_NAME = "firsts:community-following-change";

function readFollowing(): string[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function writeFollowing(handles: string[]) {
  window.localStorage.setItem(KEY, JSON.stringify(handles));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function follow(handle: string) {
  const current = readFollowing();
  if (current.includes(handle)) return;
  writeFollowing([...current, handle]);
}

export function unfollow(handle: string) {
  writeFollowing(readFollowing().filter((h) => h !== handle));
}

export function useFollowing(): string[] {
  const [handles, setHandles] = useState<string[]>([]);

  useEffect(() => {
    function sync() {
      setHandles(readFollowing());
    }
    sync();
    window.addEventListener(EVENT_NAME, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT_NAME, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return handles;
}
