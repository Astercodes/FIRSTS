import type { Cohort, CohortStudent } from "./cohortData";
import { studentCurrentStage, studentOverallPct } from "./cohortData";
import { CATEGORY_META } from "./dashboardData";

function hashSeed(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function seededBool(seed: string, probability: number): boolean {
  return (hashSeed(seed) % 10000) / 10000 < probability;
}

/** Roughly a fifth of the institution, a believable personal caseload rather than everyone. */
const CASELOAD_SHARE = 0.18;

/**
 * There's no real advisor-to-student assignment in this data. Each
 * student's membership in a given advisor's caseload is deterministic per
 * (advisor email, student id), so the same advisor always sees the same
 * "my students" list rather than a random subset on every reload.
 */
export function isInCaseload(advisorEmail: string, s: CohortStudent): boolean {
  return seededBool(`${advisorEmail}|${s.id}`, CASELOAD_SHARE);
}

export type CaseloadStudent = CohortStudent & {
  cohortId: string;
  cohortName: string;
  currentStage: keyof CohortStudent["stagePct"] | "complete";
  overallPct: number;
};

export function myCaseload(advisorEmail: string, cohorts: Cohort[]): CaseloadStudent[] {
  return cohorts.flatMap((c) =>
    c.students
      .filter((s) => isInCaseload(advisorEmail, s))
      .map((s) => ({
        ...s,
        cohortId: c.id,
        cohortName: c.name,
        currentStage: studentCurrentStage(s),
        overallPct: studentOverallPct(s),
      }))
  );
}

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

export type WeakCategory = { category: string; label: string; pct: number };

/**
 * The one or two categories this individual student is weakest in, among
 * stages they've actually engaged with, for meeting prep. Derived the same
 * deterministic way as the cohort-wide weak-spot heatmap, just per student
 * instead of averaged.
 */
export function weakCategoriesForStudent(s: CohortStudent, count = 2): WeakCategory[] {
  const engagedStages = (Object.keys(s.stagePct) as (keyof CohortStudent["stagePct"])[]).filter(
    (stage) => s.stagePct[stage] > 0
  );
  const categories = (Object.keys(CATEGORY_STAGE) as (keyof typeof CATEGORY_META)[]).filter((cat) =>
    engagedStages.includes(CATEGORY_STAGE[cat])
  );
  return categories
    .map((cat) => ({ category: cat, label: CATEGORY_META[cat].label, pct: categoryPctForStudent(s, cat) }))
    .sort((a, b) => a.pct - b.pct)
    .slice(0, count);
}
