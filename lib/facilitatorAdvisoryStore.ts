"use client";

import { useEffect, useState } from "react";

export type DraftItem = { id: string; title: string; summary: string };

export const DRAFT_ITEMS: DraftItem[] = [
  {
    id: "draft-stage-ten-preview",
    title: "Stage Ten preview: Financial Literacy",
    summary: "An early look at a possible new stage covering budgeting, credit, and negotiating pay.",
  },
  {
    id: "draft-stage-three-script",
    title: "Revised Stage Three interview script",
    summary: "A rewritten facilitator script for the mock interview exercise, tighter timing, new prompts.",
  },
];

export type AdvisoryFeedback = {
  id: string;
  draftId: string;
  strengths: string;
  concerns: string;
  submittedAt: string;
};

const KEY = "firsts:facilitator-advisory-feedback";
const EVENT_NAME = "firsts:facilitator-advisory-feedback-change";

function readAll(): AdvisoryFeedback[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as AdvisoryFeedback[]) : [];
  } catch {
    return [];
  }
}

function writeAll(feedback: AdvisoryFeedback[]) {
  window.localStorage.setItem(KEY, JSON.stringify(feedback));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function submitAdvisoryFeedback(
  draftId: string,
  strengths: string,
  concerns: string,
  today: Date = new Date(),
) {
  const entry: AdvisoryFeedback = {
    id: `advisory-${Date.now()}`,
    draftId,
    strengths,
    concerns,
    submittedAt: today.toISOString().slice(0, 10),
  };
  writeAll([entry, ...readAll()]);
}

export function useAdvisoryFeedback(): AdvisoryFeedback[] {
  const [feedback, setFeedback] = useState<AdvisoryFeedback[]>([]);

  useEffect(() => {
    function sync() {
      setFeedback(readAll());
    }
    sync();
    window.addEventListener(EVENT_NAME, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT_NAME, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return feedback;
}
