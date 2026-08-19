import type { FirstModule, StageId } from "./dashboardData";
import { STAGES, completionStats } from "./dashboardData";

export type HubMode = "reflective" | "research" | "synthesis";

export const HUB_MODE_META: Record<HubMode, { label: string; intro: string }> = {
  reflective: {
    label: "Reflective Socratic Coach",
    intro:
      "I'll ask questions rather than hand you answers. Tell me what's on your mind, or use a quick action below.",
  },
  research: {
    label: "Research Analyst",
    intro:
      "I cross-check sources and cite everything I hand back, the way I do inside Industry Insight or Job Listing Analysis. What are you trying to verify?",
  },
  synthesis: {
    label: "Synthesis Coach",
    intro:
      "I can pull from your completed FIRSTS across every stage. Try \"Summarize my progress\" below, or ask me anything.",
  },
};

const REFLECTIVE_FOLLOW_UPS = [
  "Say more about that. What's the specific moment you're thinking of, not the general pattern?",
  "What would change your mind here? What evidence would tell you this isn't working?",
  "If a friend described this same situation to you, what would you tell them first?",
  "What's the version of this you're avoiding saying out loud?",
];

let reflectiveIndex = 0;

export function genericReflectiveReply(message: string): string {
  if (message.trim().length < 24) {
    return "That's a start, but it's still pretty general. What's one specific detail, a name, a number, a moment, that makes this concrete?";
  }
  const reply = REFLECTIVE_FOLLOW_UPS[reflectiveIndex % REFLECTIVE_FOLLOW_UPS.length];
  reflectiveIndex += 1;
  return reply;
}

export function genericResearchReply(): string {
  return "In Research mode I'd normally cross-check that against 2 to 3 independent sources before handing anything back. Point me at a specific FIRST, like Industry Insight, Salary Benchmarking, or Job Listing Analysis, and open its Coach tab to see that synthesis happen against your real worksheet.";
}

export function summarizeProgress(modules: FirstModule[]): string {
  const overall = completionStats(modules);
  const perStage = STAGES.map((stage) => {
    const stageModules = modules.filter((m) => m.stage === stage.id);
    const stats = completionStats(stageModules);
    return `${stage.shortLabel}: ${stats.complete}/${stats.total}`;
  }).join(", ");

  const inProgress = modules.find((m) => m.status === "in-progress");
  const dueForReview = modules.filter((m) => m.dueForReview).length;

  const parts = [
    `You're at ${overall.complete} of ${overall.total} FIRSTS complete overall (${perStage}).`,
  ];
  if (inProgress) {
    parts.push(`${inProgress.title} (First ${inProgress.code}) is still sitting in progress.`);
  }
  if (dueForReview > 0) {
    parts.push(`${dueForReview} completed FIRST${dueForReview === 1 ? " is" : "s are"} flagged due for review.`);
  }
  parts.push("Want me to suggest what to tackle next?");
  return parts.join(" ");
}

export function suggestNext(modules: FirstModule[]): { module: FirstModule | null; text: string } {
  const next =
    modules.find((m) => m.status === "in-progress") ??
    modules.find((m) => m.status === "available");
  if (!next) {
    return {
      module: null,
      text: "Everything unlocked right now is either done or still locked behind an earlier FIRST. Finish what's in progress and the next one will open up.",
    };
  }
  const stageLabel = STAGES.find((s) => s.id === (next.stage as StageId))?.shortLabel ?? "";
  return {
    module: next,
    text: `First up: ${next.title} (First ${next.code}, ${stageLabel}). It's marked ${next.difficulty.toLowerCase()} difficulty, about ${next.time}.`,
  };
}
