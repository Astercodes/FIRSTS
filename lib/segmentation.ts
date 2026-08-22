import type { Cohort, CohortStudent } from "./cohortData";
import { studentOverallPct, studentCurrentStage, stalledStudents } from "./cohortData";

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

export type StudentTags = {
  major: string;
  gradYear: string;
  firstGen: boolean;
  athlete: boolean;
  international: boolean;
  academicProbation: boolean;
  undeclaredMajor: boolean;
  noEngagementThisYear: boolean;
};

/**
 * The cohort mock data has no demographic or institutional tags per
 * student. Major and grad year are read straight off the cohort's own
 * focus and name; the priority-population tags (first-gen, athlete,
 * international, academic probation, undeclared major, no career-center
 * engagement this year) are deterministic per student, at realistic
 * population rates, so filtering and the at-risk overlay stay stable
 * across reloads without needing real institutional data feeds.
 */
export function studentTags(s: CohortStudent, cohort: Cohort): StudentTags {
  const yearMatch = cohort.name.match(/(\d{4})/);
  return {
    major: cohort.focus,
    gradYear: yearMatch ? yearMatch[1] : "Unknown",
    firstGen: seededBool(`${s.id}|firstgen`, 0.22),
    athlete: seededBool(`${s.id}|athlete`, 0.08),
    international: seededBool(`${s.id}|intl`, 0.13),
    academicProbation: seededBool(`${s.id}|probation`, 0.05),
    undeclaredMajor: seededBool(`${s.id}|undeclared`, 0.09),
    noEngagementThisYear: seededBool(`${s.id}|noengage`, 0.28),
  };
}

export type TaggedStudent = CohortStudent &
  StudentTags & {
    cohortId: string;
    cohortName: string;
    currentStage: keyof CohortStudent["stagePct"] | "complete";
    overallPct: number;
  };

export function taggedStudents(cohorts: Cohort[]): TaggedStudent[] {
  return cohorts.flatMap((c) =>
    c.students.map((s) => ({
      ...s,
      ...studentTags(s, c),
      cohortId: c.id,
      cohortName: c.name,
      currentStage: studentCurrentStage(s),
      overallPct: studentOverallPct(s),
    }))
  );
}

export type SegmentFilters = {
  major: string;
  gradYear: string;
  firstGen: boolean;
  athlete: boolean;
  international: boolean;
  notStartedStage: keyof CohortStudent["stagePct"] | "any";
};

export const DEFAULT_FILTERS: SegmentFilters = {
  major: "all",
  gradYear: "all",
  firstGen: false,
  athlete: false,
  international: false,
  notStartedStage: "any",
};

export function applyFilters(students: TaggedStudent[], filters: SegmentFilters): TaggedStudent[] {
  return students.filter((s) => {
    if (filters.major !== "all" && s.major !== filters.major) return false;
    if (filters.gradYear !== "all" && s.gradYear !== filters.gradYear) return false;
    if (filters.firstGen && !s.firstGen) return false;
    if (filters.athlete && !s.athlete) return false;
    if (filters.international && !s.international) return false;
    if (filters.notStartedStage !== "any" && s.stagePct[filters.notStartedStage] > 0) return false;
    return true;
  });
}

export type PopulationOverlayRow = {
  key: string;
  label: string;
  populationCount: number;
  stalledCount: number;
  stalledPct: number;
};

/**
 * Cross-references the stall flag against populations career centers
 * already prioritize, so the gap between a population's stall rate and
 * the institution-wide baseline reads as an equity signal, not just an
 * engagement one.
 */
export function atRiskPopulationOverlay(cohorts: Cohort[]): {
  baselineStalledPct: number;
  rows: PopulationOverlayRow[];
} {
  const tagged = taggedStudents(cohorts);
  const stalledKeys = new Set(stalledStudents(cohorts).map((s) => `${s.cohortId}-${s.id}`));
  const isStalled = (s: TaggedStudent) => stalledKeys.has(`${s.cohortId}-${s.id}`);

  const baselineStalledPct = tagged.length
    ? Math.round((tagged.filter(isStalled).length / tagged.length) * 100)
    : 0;

  function rowFor(key: string, label: string, predicate: (s: TaggedStudent) => boolean): PopulationOverlayRow {
    const population = tagged.filter(predicate);
    const stalled = population.filter(isStalled);
    return {
      key,
      label,
      populationCount: population.length,
      stalledCount: stalled.length,
      stalledPct: population.length ? Math.round((stalled.length / population.length) * 100) : 0,
    };
  }

  const rows = [
    rowFor("probation", "Academic probation", (s) => s.academicProbation),
    rowFor("undeclared", "Undeclared major", (s) => s.undeclaredMajor),
    rowFor("noengage", "No career center engagement this year", (s) => s.noEngagementThisYear),
    rowFor("firstgen", "First-generation", (s) => s.firstGen),
    rowFor("international", "International students", (s) => s.international),
  ];

  return { baselineStalledPct, rows };
}
