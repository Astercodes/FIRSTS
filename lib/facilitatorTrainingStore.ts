"use client";

import { useEffect, useState } from "react";
import { STAGES, type StageId } from "@/lib/dashboardData";
import type { FacilitatorTier } from "@/lib/facilitatorStore";

export type ApprenticeshipStep = "not-started" | "shadowed" | "co-led" | "certified";

export type FundamentalsModule = { id: string; title: string; description: string };

export const FUNDAMENTALS_MODULES: FundamentalsModule[] = [
  {
    id: "group-dynamics",
    title: "Facilitating group discussion",
    description: "Keeping a room talking to each other, not just to you.",
  },
  {
    id: "sensitive-disclosures",
    title: "Handling sensitive disclosures",
    description: "What to do when a student shares something heavier than the exercise called for.",
  },
  {
    id: "time-boxing",
    title: "Time-boxing a workshop",
    description: "Running the clock so the room never feels rushed or dead.",
  },
  {
    id: "session-script",
    title: "Following the session script",
    description: "How much to improvise versus stick to the guide, and when each matters.",
  },
];

export type StageTraining = {
  guideStudied: boolean;
  readinessCheckPassed: boolean;
  apprenticeship: ApprenticeshipStep;
  certifiedAt: string | null;
};

export type TrainingState = {
  fundamentalsComplete: string[];
  stages: Partial<Record<StageId, StageTraining>>;
};

const KEY = "firsts:facilitator-training";
const EVENT_NAME = "firsts:facilitator-training-change";

function defaultStageTraining(): StageTraining {
  return { guideStudied: false, readinessCheckPassed: false, apprenticeship: "not-started", certifiedAt: null };
}

function readState(): TrainingState {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as TrainingState) : { fundamentalsComplete: [], stages: {} };
  } catch {
    return { fundamentalsComplete: [], stages: {} };
  }
}

function writeState(state: TrainingState) {
  window.localStorage.setItem(KEY, JSON.stringify(state));
  window.dispatchEvent(new Event(EVENT_NAME));
}

function getStage(state: TrainingState, stageId: StageId): StageTraining {
  return state.stages[stageId] ?? defaultStageTraining();
}

export function toggleFundamentalsModule(moduleId: string) {
  const state = readState();
  const has = state.fundamentalsComplete.includes(moduleId);
  const fundamentalsComplete = has
    ? state.fundamentalsComplete.filter((id) => id !== moduleId)
    : [...state.fundamentalsComplete, moduleId];
  writeState({ ...state, fundamentalsComplete });
}

export function toggleStageTrainingItem(stageId: StageId, item: "guideStudied" | "readinessCheckPassed") {
  const state = readState();
  const stage = getStage(state, stageId);
  writeState({ ...state, stages: { ...state.stages, [stageId]: { ...stage, [item]: !stage[item] } } });
}

export function advanceApprenticeship(stageId: StageId, today: Date = new Date()) {
  const state = readState();
  const stage = getStage(state, stageId);
  const next: ApprenticeshipStep =
    stage.apprenticeship === "not-started"
      ? "shadowed"
      : stage.apprenticeship === "shadowed"
        ? "co-led"
        : stage.apprenticeship === "co-led"
          ? "certified"
          : "certified";
  const certifiedAt = next === "certified" ? today.toISOString().slice(0, 10) : stage.certifiedAt;
  writeState({ ...state, stages: { ...state.stages, [stageId]: { ...stage, apprenticeship: next, certifiedAt } } });
}

export function recertifyStage(stageId: StageId, today: Date = new Date()) {
  const state = readState();
  const stage = getStage(state, stageId);
  if (stage.apprenticeship !== "certified") return;
  writeState({
    ...state,
    stages: { ...state.stages, [stageId]: { ...stage, certifiedAt: today.toISOString().slice(0, 10) } },
  });
}

export function stageReadyForApprenticeship(state: TrainingState, stageId: StageId): boolean {
  const fundamentalsDone = FUNDAMENTALS_MODULES.every((m) => state.fundamentalsComplete.includes(m.id));
  const stage = getStage(state, stageId);
  return fundamentalsDone && stage.guideStudied && stage.readinessCheckPassed;
}

/** Tier is earned from apprenticeship progress; Tier 3 is admin-granted, never computed here. */
export function computeEarnedTier(state: TrainingState): FacilitatorTier {
  const steps = Object.values(state.stages).map((s) => s?.apprenticeship ?? "not-started");
  if (steps.some((s) => s === "co-led" || s === "certified")) return 2;
  if (steps.some((s) => s === "shadowed" || s === "co-led" || s === "certified")) return 1;
  return 0;
}

export function stageLabel(stageId: StageId): string {
  return STAGES.find((s) => s.id === stageId)?.shortLabel ?? stageId;
}

export function useFacilitatorTraining(): TrainingState {
  const [state, setState] = useState<TrainingState>({ fundamentalsComplete: [], stages: {} });

  useEffect(() => {
    function sync() {
      setState(readState());
    }
    sync();
    window.addEventListener(EVENT_NAME, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT_NAME, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return state;
}
