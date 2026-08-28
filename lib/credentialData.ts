import { STAGES, FIRSTS, CATEGORY_META, type StageId } from "@/lib/dashboardData";
import { THOROUGHNESS_LABEL, type ThoroughnessLevel } from "@/lib/depthScore";
import type { CandidatePortfolio } from "@/lib/sponsorData";

function hashString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function seededUnit(seed: string): number {
  return (hashString(seed) % 10000) / 10000;
}

function seededInt(seed: string, min: number, max: number): number {
  return min + Math.floor(seededUnit(seed) * (max - min + 1));
}

function categoriesForStage(stage: StageId): { category: string; label: string }[] {
  const seen: string[] = [];
  for (const m of FIRSTS) {
    if (m.stage !== stage) continue;
    if (!seen.includes(m.category)) seen.push(m.category);
  }
  return seen.map((c) => ({ category: c, label: CATEGORY_META[c as keyof typeof CATEGORY_META].label }));
}

export type CategoryCredential = {
  category: string;
  label: string;
  pct: number;
};

export type StageCredential = {
  stage: StageId;
  label: string;
  shortLabel: string;
  pct: number;
  status: "complete" | "in-progress" | "not-started";
  depth: ThoroughnessLevel | null;
  depthLabel: string | null;
  lastActivity: string | null;
  categories: CategoryCredential[];
};

/**
 * A candidate's employer-facing FIRSTS credential: a per-stage completion,
 * depth, and recency breakdown, deterministically seeded from the candidate's
 * id so it's stable across reloads without a real progress backend behind it.
 * Depth is skewed toward Solid/Thorough since these are candidates who opted
 * to share their portfolio, a self-selected, more-invested group.
 */
export function credentialForCandidate(candidate: CandidatePortfolio, today: Date = new Date()): StageCredential[] {
  const totalStages = STAGES.length;
  const frontier = seededInt(`${candidate.id}:frontier`, 2, totalStages);

  return STAGES.map((stage, i) => {
    const stageSeed = `${candidate.id}:${stage.id}`;
    const categories = categoriesForStage(stage.id);

    if (i >= frontier) {
      return {
        stage: stage.id,
        label: stage.label,
        shortLabel: stage.shortLabel,
        pct: 0,
        status: "not-started" as const,
        depth: null,
        depthLabel: null,
        lastActivity: null,
        categories: categories.map((c) => ({ ...c, pct: 0 })),
      };
    }

    const isComplete = i < frontier - 1;
    const pct = isComplete ? seededInt(`${stageSeed}:pct`, 90, 100) : seededInt(`${stageSeed}:pct`, 25, 80);

    const depthRoll = seededUnit(`${stageSeed}:depth`);
    const depth: ThoroughnessLevel = depthRoll < 0.15 ? 1 : depthRoll < 0.55 ? 2 : 3;

    const daysAgo = Math.max(5, seededInt(`${stageSeed}:recency`, 20, 420) - i * 15);
    const activityDate = new Date(today);
    activityDate.setDate(activityDate.getDate() - daysAgo);

    const categoryPcts = categories.map((c, ci) => {
      if (isComplete) return { ...c, pct: seededInt(`${stageSeed}:${c.category}:cat`, 88, 100) };
      const catFrontier = Math.ceil((pct / 100) * categories.length);
      if (ci < catFrontier - 1) return { ...c, pct: seededInt(`${stageSeed}:${c.category}:cat`, 85, 100) };
      if (ci === catFrontier - 1) return { ...c, pct: seededInt(`${stageSeed}:${c.category}:cat`, 20, 70) };
      return { ...c, pct: 0 };
    });

    return {
      stage: stage.id,
      label: stage.label,
      shortLabel: stage.shortLabel,
      pct,
      status: isComplete ? ("complete" as const) : ("in-progress" as const),
      depth,
      depthLabel: THOROUGHNESS_LABEL[depth],
      lastActivity: activityDate.toISOString().slice(0, 10),
      categories: categoryPcts,
    };
  });
}

/** Reads a plain "how long ago" phrase from an ISO date, e.g. "3 months ago" vs "2 years ago". */
export function formatRecency(iso: string, today: Date = new Date()): string {
  const then = new Date(iso);
  const days = Math.max(0, Math.floor((today.getTime() - then.getTime()) / (1000 * 60 * 60 * 24)));
  if (days < 1) return "today";
  if (days < 30) return `${days} day${days === 1 ? "" : "s"} ago`;
  if (days < 365) {
    const months = Math.round(days / 30);
    return `${months} month${months === 1 ? "" : "s"} ago`;
  }
  const years = Math.round(days / 365);
  return `${years} year${years === 1 ? "" : "s"} ago`;
}

export function credentialSummary(credential: StageCredential[]) {
  const complete = credential.filter((c) => c.status === "complete").length;
  const inProgress = credential.filter((c) => c.status === "in-progress").length;
  const mostRecent = credential
    .filter((c) => c.lastActivity)
    .sort((a, b) => (b.lastActivity! > a.lastActivity! ? 1 : -1))[0];
  return { complete, inProgress, total: credential.length, mostRecent: mostRecent?.lastActivity ?? null };
}
