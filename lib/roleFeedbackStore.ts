"use client";

import { useEffect, useState } from "react";

export type RoleFeedback = {
  id: string;
  candidateId: string;
  candidateName: string;
  company: string;
  roleTitle: string;
  strengths: string[];
  gaps: string[];
  note: string;
  createdAt: string;
};

const KEY = "firsts:employer-role-feedback";
const EVENT_NAME = "firsts:employer-role-feedback-change";

function readStored(): RoleFeedback[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as RoleFeedback[]) : [];
  } catch {
    return [];
  }
}

function writeStored(list: RoleFeedback[]) {
  window.localStorage.setItem(KEY, JSON.stringify(list));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function sendRoleFeedback(input: {
  candidateId: string;
  candidateName: string;
  company: string;
  roleTitle: string;
  strengths: string[];
  gaps: string[];
  note: string;
}): RoleFeedback {
  const feedback: RoleFeedback = {
    id: `rf-${Date.now()}-${Math.round(Math.random() * 1e6)}`,
    createdAt: new Date().toISOString().slice(0, 10),
    ...input,
  };
  writeStored([feedback, ...readStored()]);
  return feedback;
}

export function roleFeedbackForCandidate(all: RoleFeedback[], candidateId: string): RoleFeedback[] {
  return all.filter((f) => f.candidateId === candidateId);
}

export function useRoleFeedback(): RoleFeedback[] {
  const [stored, setStored] = useState<RoleFeedback[]>([]);

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

  return stored;
}
