"use client";

import { useEffect, useState } from "react";

export type OutreachMessage = {
  id: string;
  candidateId: string;
  from: "employer" | "candidate";
  body: string;
  createdAt: string;
};

const KEY = "firsts:employer-candidate-messages";
const EVENT_NAME = "firsts:employer-candidate-messages-change";

/**
 * There's no live candidate on the other end of this browser, so a couple
 * of threads are seeded with a starter candidate reply to demonstrate what
 * a real back-and-forth looks like. Every other thread starts empty until
 * the employer sends the first message.
 */
const SEEDED_MESSAGES: OutreachMessage[] = [
  {
    id: "seed-cp-1-1",
    candidateId: "cp-1",
    from: "candidate",
    body: "Thanks for reaching out! I'd love to hear more about the Marketing Analyst role whenever you have time.",
    createdAt: "2026-08-20",
  },
  {
    id: "seed-cp-7-1",
    candidateId: "cp-7",
    from: "candidate",
    body: "Appreciate you taking a look at my portfolio. Happy to jump on a call this week if that works.",
    createdAt: "2026-08-22",
  },
];

function readStored(): OutreachMessage[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as OutreachMessage[]) : [];
  } catch {
    return [];
  }
}

function writeStored(list: OutreachMessage[]) {
  window.localStorage.setItem(KEY, JSON.stringify(list));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function sendOutreachMessage(candidateId: string, body: string) {
  const message: OutreachMessage = {
    id: `msg-${Date.now()}-${Math.round(Math.random() * 1e6)}`,
    candidateId,
    from: "employer",
    body,
    createdAt: new Date().toISOString().slice(0, 10),
  };
  writeStored([...readStored(), message]);
}

export function threadForCandidate(all: OutreachMessage[], candidateId: string): OutreachMessage[] {
  return all
    .filter((m) => m.candidateId === candidateId)
    .sort((a, b) => a.createdAt.localeCompare(b.createdAt));
}

/** All outreach messages: the seeded starter replies plus anything sent this session. */
export function useOutreachMessages(): OutreachMessage[] {
  const [stored, setStored] = useState<OutreachMessage[]>([]);

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

  return [...SEEDED_MESSAGES, ...stored];
}
