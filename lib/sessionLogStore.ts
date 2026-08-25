"use client";

import { useEffect, useState } from "react";

export type SessionLog = {
  id: string;
  studentKey: string;
  date: string;
  firstsCovered: string[];
  notes: string;
};

const KEY = "firsts:advisor-session-logs";
const EVENT_NAME = "firsts:session-log-change";

function readAll(): SessionLog[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as SessionLog[]) : [];
  } catch {
    return [];
  }
}

function writeAll(list: SessionLog[]) {
  window.localStorage.setItem(KEY, JSON.stringify(list));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function addSessionLog(studentKey: string, firstsCovered: string[], notes: string): SessionLog {
  const log: SessionLog = {
    id: `session-${Date.now()}-${Math.round(Math.random() * 1e6)}`,
    studentKey,
    date: new Date().toISOString().slice(0, 10),
    firstsCovered,
    notes,
  };
  writeAll([log, ...readAll()]);
  return log;
}

export function deleteSessionLog(id: string) {
  writeAll(readAll().filter((l) => l.id !== id));
}

export function useSessionLogs(): SessionLog[] {
  const [logs, setLogs] = useState<SessionLog[]>([]);

  useEffect(() => {
    function sync() {
      setLogs(readAll());
    }
    sync();
    window.addEventListener(EVENT_NAME, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT_NAME, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return logs;
}
