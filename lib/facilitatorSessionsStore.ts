"use client";

import { useEffect, useState } from "react";
import type { StageId } from "@/lib/dashboardData";
import { recordSessionImpact } from "@/lib/facilitatorStore";

export type SessionFormat = "Online" | "In-person";
export type SessionStatus = "draft" | "published" | "completed" | "cancelled";

export type SessionReport = {
  attendance: number;
  covered: string;
  concerns: string;
  reflection: string;
  loggedAt: string;
};

export type FacilitatorSession = {
  id: string;
  stageId: StageId;
  format: SessionFormat;
  date: string;
  capacity: number;
  description: string;
  status: SessionStatus;
  registeredCount: number;
  report: SessionReport | null;
};

const KEY = "firsts:facilitator-sessions";
const EVENT_NAME = "firsts:facilitator-sessions-change";

function hashString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function readAll(): FacilitatorSession[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as FacilitatorSession[]) : [];
  } catch {
    return [];
  }
}

function writeAll(sessions: FacilitatorSession[]) {
  window.localStorage.setItem(KEY, JSON.stringify(sessions));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function createSession(input: {
  stageId: StageId;
  format: SessionFormat;
  date: string;
  capacity: number;
  description: string;
}): FacilitatorSession {
  const session: FacilitatorSession = {
    id: `session-${Date.now()}-${Math.round(Math.random() * 1e6)}`,
    ...input,
    status: "draft",
    registeredCount: 0,
    report: null,
  };
  writeAll([session, ...readAll()]);
  return session;
}

export function publishSession(id: string) {
  const all = readAll();
  writeAll(
    all.map((s) => {
      if (s.id !== id) return s;
      const seeded = 2 + (hashString(id) % Math.max(1, s.capacity - 1));
      return { ...s, status: "published" as const, registeredCount: Math.min(seeded, s.capacity) };
    }),
  );
}

export function cancelSession(id: string) {
  const all = readAll();
  writeAll(all.map((s) => (s.id === id ? { ...s, status: "cancelled" as const } : s)));
}

export function logSessionReport(
  id: string,
  report: Omit<SessionReport, "loggedAt">,
  today: Date = new Date(),
) {
  const all = readAll();
  const session = all.find((s) => s.id === id);
  if (!session) return;
  writeAll(
    all.map((s) =>
      s.id === id
        ? { ...s, status: "completed" as const, report: { ...report, loggedAt: today.toISOString().slice(0, 10) } }
        : s,
    ),
  );
  recordSessionImpact(report.attendance);
}

export function useFacilitatorSessions(): FacilitatorSession[] {
  const [sessions, setSessions] = useState<FacilitatorSession[]>([]);

  useEffect(() => {
    function sync() {
      setSessions(readAll());
    }
    sync();
    window.addEventListener(EVENT_NAME, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT_NAME, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return sessions;
}
