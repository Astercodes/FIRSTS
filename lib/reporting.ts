import { FIRSTS } from "./dashboardData";
import type { Cohort, CohortStudent } from "./cohortData";
import { cohortAvgCompletion, cohortAtRiskCount, categoryWeakSpot, weakestCategory } from "./cohortData";
import { taggedStudents } from "./segmentation";
import { placementCorrelation, overallOfferRate, avgStartingSalary } from "./placementData";
import { contentGapAnalysis } from "./programming";
import type { Workshop } from "./workshopStore";

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

/** The session's "today" for report headers and the year-over-year anchor. */
export const CURRENT_YEAR = 2026;
export const REPORT_GENERATED_ON = "August 26, 2026";

export type CohortSummaryRow = {
  id: string;
  name: string;
  studentCount: number;
  avgCompletionPct: number;
  atRiskCount: number;
};

export type ExecutiveSummary = {
  institution: string;
  totalStudents: number;
  avgCompletionPct: number;
  atRiskCount: number;
  atRiskPct: number;
  offerRatePct: number;
  placementGapPts: number;
  avgStartingSalary: number | null;
  workshopsLoggedCount: number;
  contentGapsFlaggedCount: number;
  topWeakCategory: { label: string; pct: number } | null;
  cohortBreakdown: CohortSummaryRow[];
};

/**
 * Pulls together numbers already computed elsewhere in the advisor tools
 * (cohort completion, at-risk counts, placement correlation, content gaps,
 * logged workshops) into one summary. Nothing here is newly modeled; it is
 * an aggregation of the same figures an advisor could find on the other
 * standalone pages.
 */
export function executiveSummary(cohorts: Cohort[], workshops: Workshop[]): ExecutiveSummary {
  const institution = cohorts[0]?.institution ?? "Unknown institution";
  const allStudents = cohorts.flatMap((c) => c.students);
  const tagged = taggedStudents(cohorts);
  const placement = placementCorrelation(tagged);
  const gaps = contentGapAnalysis(FIRSTS.length).filter((g) => g.completionRatePct < 50);
  const weakRows = categoryWeakSpot(allStudents);

  const cohortBreakdown: CohortSummaryRow[] = cohorts.map((c) => ({
    id: c.id,
    name: c.name,
    studentCount: c.students.length,
    avgCompletionPct: cohortAvgCompletion(c),
    atRiskCount: cohortAtRiskCount(c),
  }));

  const totalStudents = allStudents.length;
  const avgCompletionPct = totalStudents
    ? Math.round(cohortBreakdown.reduce((sum, c) => sum + c.avgCompletionPct * c.studentCount, 0) / totalStudents)
    : 0;
  const atRiskCount = cohortBreakdown.reduce((sum, c) => sum + c.atRiskCount, 0);

  return {
    institution,
    totalStudents,
    avgCompletionPct,
    atRiskCount,
    atRiskPct: totalStudents ? Math.round((atRiskCount / totalStudents) * 100) : 0,
    offerRatePct: overallOfferRate(tagged),
    placementGapPts: placement.gap,
    avgStartingSalary: avgStartingSalary(tagged),
    workshopsLoggedCount: workshops.length,
    contentGapsFlaggedCount: gaps.length,
    topWeakCategory: weakestCategory(weakRows),
    cohortBreakdown,
  };
}

export type YearlyPoint = {
  year: number;
  avgCompletionPct: number;
  offerRatePct: number;
  modeled: boolean;
};

/**
 * This app doesn't retain historical snapshots across years, only this
 * moment's data. Prior years are modeled backward from this year's real
 * completion and offer rates, deterministic per institution so the trend
 * is stable across reloads. Treat the two prior points as illustrative of
 * direction, not a measured record.
 */
export function yearOverYearTrend(
  institution: string,
  currentAvgCompletionPct: number,
  currentOfferRatePct: number
): YearlyPoint[] {
  const years = [CURRENT_YEAR - 2, CURRENT_YEAR - 1, CURRENT_YEAR];
  return years.map((year) => {
    if (year === CURRENT_YEAR) {
      return { year, avgCompletionPct: currentAvgCompletionPct, offerRatePct: currentOfferRatePct, modeled: false };
    }
    const yearsAgo = CURRENT_YEAR - year;
    const completionDrop = seededInt(`${institution}|${year}|completion`, 2, 7) * yearsAgo;
    const offerDrop = seededInt(`${institution}|${year}|offer`, 2, 6) * yearsAgo;
    return {
      year,
      avgCompletionPct: Math.max(10, currentAvgCompletionPct - completionDrop),
      offerRatePct: Math.max(5, currentOfferRatePct - offerDrop),
      modeled: true,
    };
  });
}

export const NACE_COMPETENCIES = [
  "Career & Self-Development",
  "Communication",
  "Critical Thinking",
  "Equity & Inclusion",
  "Leadership",
  "Professionalism",
  "Teamwork",
  "Technology",
] as const;

export type NaceCompetency = (typeof NACE_COMPETENCIES)[number];

/**
 * Our own mapping of FIRSTS categories to NACE's 8 career readiness
 * competencies, not an official NACE crosswalk. Only categories A through O
 * are covered because those are the only ones with cohort-level completion
 * data (Stages One through Four). Teamwork and Equity & Inclusion have no
 * FIRSTS category that maps cleanly and are reported as uncovered rather
 * than assigned a number.
 */
const CATEGORY_TO_NACE: Partial<Record<string, NaceCompetency>> = {
  A: "Career & Self-Development",
  B: "Career & Self-Development",
  C: "Critical Thinking",
  D: "Career & Self-Development",
  E: "Professionalism",
  F: "Professionalism",
  G: "Technology",
  H: "Communication",
  I: "Communication",
  J: "Career & Self-Development",
  K: "Career & Self-Development",
  L: "Communication",
  M: "Professionalism",
  N: "Career & Self-Development",
  O: "Leadership",
};

export type NaceCompetencyRow = {
  competency: NaceCompetency;
  avgCompletionPct: number | null;
  categoryLabels: string[];
};

export function naceCompetencyBreakdown(students: CohortStudent[]): NaceCompetencyRow[] {
  const allCategories = categoryWeakSpot(students).flatMap((r) => r.categories);
  return NACE_COMPETENCIES.map((competency) => {
    const mapped = allCategories.filter((c) => CATEGORY_TO_NACE[c.category] === competency);
    const avgCompletionPct = mapped.length
      ? Math.round(mapped.reduce((sum, c) => sum + c.pct, 0) / mapped.length)
      : null;
    return { competency, avgCompletionPct, categoryLabels: mapped.map((c) => c.label) };
  });
}
