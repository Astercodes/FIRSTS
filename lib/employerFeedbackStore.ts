"use client";

import { useEffect, useState } from "react";
import { CANDIDATE_PORTFOLIOS } from "./sponsorData";

export type EmployerFeedback = {
  id: string;
  candidateId: string;
  candidateName: string;
  company: string;
  hireQuality: number;
  interviewPerformance: number;
  comment: string;
  createdAt: string;
};

const KEY = "firsts:employer-feedback";
const EVENT_NAME = "firsts:employer-feedback-change";

function hashSeed(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function seededInt(seed: string, min: number, max: number): number {
  return min + (hashSeed(seed) % (max - min + 1));
}

/**
 * There's no employer feedback UI in this app yet beyond the form this
 * store backs, so these seed a believable starting sample: candidates who
 * completed more stages get a modestly higher rating range, deterministic
 * per candidate so the numbers don't shift on reload.
 */
export const SEEDED_FEEDBACK: EmployerFeedback[] = CANDIDATE_PORTFOLIOS.map((c, i) => {
  const base = c.stagesCompleted >= 4 ? 3 : 2;
  return {
    id: `seed-fb-${c.id}`,
    candidateId: c.id,
    candidateName: c.name,
    company: ["Northlight Media", "Verdant Analytics", "Ridgeline Consulting", "Cobalt Systems"][i % 4],
    hireQuality: Math.min(5, base + seededInt(`${c.id}|hq`, 0, 2)),
    interviewPerformance: Math.min(5, base + seededInt(`${c.id}|ip`, 0, 2)),
    comment:
      c.stagesCompleted >= 4
        ? "Came in with a clear story and specific examples. Ready for real work from day one."
        : "Good fundamentals, still developing how to talk about impact concretely.",
    createdAt: "2026-06-10",
  };
});

function readStored(): EmployerFeedback[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as EmployerFeedback[]) : [];
  } catch {
    return [];
  }
}

function writeStored(list: EmployerFeedback[]) {
  window.localStorage.setItem(KEY, JSON.stringify(list));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function addEmployerFeedback(input: {
  candidateId: string;
  candidateName: string;
  company: string;
  hireQuality: number;
  interviewPerformance: number;
  comment: string;
}): EmployerFeedback {
  const feedback: EmployerFeedback = {
    id: `fb-${Date.now()}-${Math.round(Math.random() * 1e6)}`,
    createdAt: new Date().toISOString().slice(0, 10),
    ...input,
  };
  writeStored([feedback, ...readStored()]);
  return feedback;
}

export function feedbackForCandidate(all: EmployerFeedback[], candidateId: string): EmployerFeedback[] {
  return all.filter((f) => f.candidateId === candidateId);
}

/** All feedback: the seeded sample plus anything an employer has actually submitted. */
export function useEmployerFeedback(): EmployerFeedback[] {
  const [stored, setStored] = useState<EmployerFeedback[]>([]);

  useEffect(() => {
    function sync() {
      setStored(readStored());
    }
    sync();
    window.addEventListener(EVENT_NAME, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT_NAME, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return [...stored, ...SEEDED_FEEDBACK];
}
