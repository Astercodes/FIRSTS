"use client";

import { useEffect, useState } from "react";

export type Broadcast = {
  id: string;
  subject: string;
  body: string;
  recipientCount: number;
  filterSummary: string;
  sentAt: string;
};

const KEY = "firsts:advisor-broadcasts";
const EVENT_NAME = "firsts:broadcasts-change";

function readAll(): Broadcast[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Broadcast[]) : [];
  } catch {
    return [];
  }
}

function writeAll(list: Broadcast[]) {
  window.localStorage.setItem(KEY, JSON.stringify(list));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function logBroadcast(subject: string, body: string, recipientCount: number, filterSummary: string): Broadcast {
  const broadcast: Broadcast = {
    id: `broadcast-${Date.now()}-${Math.round(Math.random() * 1e6)}`,
    subject,
    body,
    recipientCount,
    filterSummary,
    sentAt: new Date().toISOString(),
  };
  writeAll([broadcast, ...readAll()]);
  return broadcast;
}

export function deleteBroadcast(id: string) {
  writeAll(readAll().filter((b) => b.id !== id));
}

export function useBroadcasts(): Broadcast[] {
  const [broadcasts, setBroadcasts] = useState<Broadcast[]>([]);

  useEffect(() => {
    function sync() {
      setBroadcasts(readAll());
    }
    sync();
    window.addEventListener(EVENT_NAME, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT_NAME, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return broadcasts;
}
