import { FIRSTS, CATEGORY_META, type FirstModule } from "./dashboardData";
import type { Cohort, CohortStudent } from "./cohortData";

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

const DIFFICULTY_BASE_COMPLETION: Record<FirstModule["difficulty"], number> = {
  Easy: 78,
  Moderate: 60,
  Deep: 42,
};

const DIFFICULTY_BASE_ABANDONMENT: Record<FirstModule["difficulty"], number> = {
  Easy: 12,
  Moderate: 22,
  Deep: 32,
};

export type ContentGapRow = {
  id: number;
  code: string;
  title: string;
  stage: string;
  category: string;
  categoryLabel: string;
  completionRatePct: number;
  abandonmentRatePct: number;
};

/**
 * Per-FIRST completion isn't tracked institution-wide in this data, only
 * per-stage aggregates. Each FIRST's completion and abandonment rate here
 * is modeled from its own difficulty rating (a real field on the FIRST
 * itself), deterministic per FIRST so the same worksheets keep flagging on
 * reload instead of shuffling. Harder-rated FIRSTS get a lower baseline,
 * which is the honest, defensible part of the signal; the exact numbers
 * are illustrative.
 */
export function contentGapAnalysis(limit = 10): ContentGapRow[] {
  const rows: ContentGapRow[] = FIRSTS.map((f) => {
    const completionRatePct = Math.max(
      8,
      Math.min(95, DIFFICULTY_BASE_COMPLETION[f.difficulty] + seededInt(`${f.id}|completion`, -14, 14))
    );
    const abandonmentRatePct = Math.max(
      3,
      Math.min(65, DIFFICULTY_BASE_ABANDONMENT[f.difficulty] + seededInt(`${f.id}|abandon`, -15, 20))
    );
    return {
      id: f.id,
      code: f.code,
      title: f.title,
      stage: f.stage,
      category: f.category,
      categoryLabel: CATEGORY_META[f.category].label,
      completionRatePct,
      abandonmentRatePct,
    };
  });
  return rows.sort((a, b) => a.completionRatePct - b.completionRatePct).slice(0, limit);
}

/** Categories that a workshop can realistically target, since that's what the cohort data models. */
export const WORKSHOP_TARGET_CATEGORIES: (keyof typeof CATEGORY_META)[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];

const CATEGORY_STAGE: Record<string, keyof CohortStudent["stagePct"]> = {
  A: "one", B: "one", C: "one", D: "one",
  E: "two", F: "two", G: "two", H: "two", I: "two", J: "two",
  K: "three", L: "three", M: "three",
  N: "four", O: "four",
};

function categoryPctForStudent(s: CohortStudent, category: string): number {
  const stage = CATEGORY_STAGE[category];
  const base = s.stagePct[stage];
  if (base === 0) return 0;
  const jitter = (hashSeed(`${s.id}|${category}`) % 29) - 14;
  return Math.max(0, Math.min(100, base + jitter));
}

/** Current average standing for a category, across a specific set of cohorts (the ones that attended a workshop). */
export function categoryPctForCohorts(cohorts: Cohort[], category: string): number {
  const students = cohorts.flatMap((c) => c.students);
  if (students.length === 0) return 0;
  return Math.round(students.reduce((sum, s) => sum + categoryPctForStudent(s, category), 0) / students.length);
}

export type WorkshopImpact = {
  baselinePct: number;
  projectedLiftPts: number;
  projectedAfterPct: number;
};

/**
 * There's no per-FIRST, dated completion event in this data, so the
 * "after" figure can't be measured from a real before/after window. It's a
 * modeled projected lift, deterministic per workshop, scaled down for
 * categories already close to fully complete (less room to move).
 */
export function projectedWorkshopImpact(workshopId: string, baselinePct: number): WorkshopImpact {
  const headroom = 100 - baselinePct;
  const rawLift = seededInt(`${workshopId}|lift`, 6, 18);
  const projectedLiftPts = Math.round(Math.min(rawLift, headroom * 0.6));
  return {
    baselinePct,
    projectedLiftPts,
    projectedAfterPct: Math.min(100, baselinePct + projectedLiftPts),
  };
}
