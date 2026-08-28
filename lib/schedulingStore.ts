"use client";

import { useEffect, useState } from "react";

export type InterviewSlot = {
  id: string;
  candidateId: string;
  proposedAt: string;
  confirmed: boolean;
  createdAt: string;
};

const KEY = "firsts:employer-interview-slots";
const EVENT_NAME = "firsts:employer-interview-slots-change";

function readSlots(): InterviewSlot[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as InterviewSlot[]) : [];
  } catch {
    return [];
  }
}

function writeSlots(slots: InterviewSlot[]) {
  window.localStorage.setItem(KEY, JSON.stringify(slots));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function proposeSlot(candidateId: string, proposedAt: string): InterviewSlot {
  const slot: InterviewSlot = {
    id: `slot-${Date.now()}-${Math.round(Math.random() * 1e6)}`,
    candidateId,
    proposedAt,
    confirmed: false,
    createdAt: new Date().toISOString().slice(0, 10),
  };
  writeSlots([...readSlots(), slot]);
  return slot;
}

/** Confirming a slot un-confirms any other proposed slot for the same candidate, since only one interview actually happens. */
export function confirmSlot(id: string) {
  const slots = readSlots();
  const target = slots.find((s) => s.id === id);
  if (!target) return;
  writeSlots(
    slots.map((s) => (s.candidateId === target.candidateId ? { ...s, confirmed: s.id === id } : s))
  );
}

export function removeSlot(id: string) {
  writeSlots(readSlots().filter((s) => s.id !== id));
}

export function slotsForCandidate(all: InterviewSlot[], candidateId: string): InterviewSlot[] {
  return all.filter((s) => s.candidateId === candidateId).sort((a, b) => a.proposedAt.localeCompare(b.proposedAt));
}

export function useInterviewSlots(): InterviewSlot[] {
  const [slots, setSlots] = useState<InterviewSlot[]>([]);

  useEffect(() => {
    function sync() {
      setSlots(readSlots());
    }
    sync();
    window.addEventListener(EVENT_NAME, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT_NAME, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return slots;
}
