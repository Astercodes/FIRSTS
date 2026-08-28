"use client";

import { useEffect, useState } from "react";

export type PipelineStage = "watching" | "contacted" | "interviewing" | "offered";

export const PIPELINE_STAGES: { id: PipelineStage; label: string }[] = [
  { id: "watching", label: "Watching" },
  { id: "contacted", label: "Contacted" },
  { id: "interviewing", label: "Interviewing" },
  { id: "offered", label: "Offered" },
];

export type PipelineEntry = {
  candidateId: string;
  stage: PipelineStage;
  addedAt: string;
  note: string;
};

const KEY = "firsts:employer-pipeline";
const EVENT_NAME = "firsts:employer-pipeline-change";

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

function readEntries(): Record<string, PipelineEntry> {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Record<string, PipelineEntry>) : {};
  } catch {
    return {};
  }
}

function writeEntries(entries: Record<string, PipelineEntry>) {
  window.localStorage.setItem(KEY, JSON.stringify(entries));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function addToPipeline(candidateId: string) {
  const entries = readEntries();
  if (entries[candidateId]) return;
  entries[candidateId] = { candidateId, stage: "watching", addedAt: todayIso(), note: "" };
  writeEntries(entries);
}

export function removeFromPipeline(candidateId: string) {
  const entries = readEntries();
  delete entries[candidateId];
  writeEntries(entries);
}

export function setPipelineStage(candidateId: string, stage: PipelineStage) {
  const entries = readEntries();
  if (!entries[candidateId]) return;
  entries[candidateId] = { ...entries[candidateId], stage };
  writeEntries(entries);
}

export function setPipelineNote(candidateId: string, note: string) {
  const entries = readEntries();
  if (!entries[candidateId]) return;
  entries[candidateId] = { ...entries[candidateId], note };
  writeEntries(entries);
}

export function usePipeline(): Record<string, PipelineEntry> {
  const [entries, setEntries] = useState<Record<string, PipelineEntry>>({});

  useEffect(() => {
    function sync() {
      setEntries(readEntries());
    }
    sync();
    window.addEventListener(EVENT_NAME, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT_NAME, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return entries;
}
