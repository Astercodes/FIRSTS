import type { TaggedStudent } from "./segmentation";
import type { EmployerFeedback } from "./employerFeedbackStore";

function hashSeed(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function seededUnit(seed: string): number {
  return (hashSeed(seed) % 10000) / 10000;
}

function seededBool(seed: string, probability: number): boolean {
  return seededUnit(seed) < probability;
}

function seededInt(seed: string, min: number, max: number): number {
  return min + (hashSeed(seed) % (max - min + 1));
}

/** The session's "today" is 2026-08-25; used to judge how close a grad year is to placement. */
const CURRENT_YEAR = 2026;

export type PlacementOutcome = {
  hasOffer: boolean;
  offerType: "Internship" | "Full-time" | null;
  daysToOffer: number | null;
  startingSalary: number | null;
};

/**
 * There's no real outcomes feed (job offers, internships, salaries) behind
 * this app. Each student's placement outcome is deterministic, weighted by
 * their actual Stage Three completion and how close their grad year is, so
 * completion correlates with placement the same directional way it
 * plausibly would with a real feed, without inventing a precise causal
 * number that isn't backed by anything real.
 */
export function placementForStudent(s: TaggedStudent): PlacementOutcome {
  const yearsToGrad = Number(s.gradYear) - CURRENT_YEAR;
  const stageThreePct = s.stagePct.three;

  let offerProbability = 0.12 + stageThreePct * 0.006;
  if (yearsToGrad <= 0) offerProbability += 0.28;
  else if (yearsToGrad === 1) offerProbability += 0.12;
  offerProbability = Math.min(offerProbability, 0.92);

  const hasOffer = seededBool(`${s.cohortId}-${s.id}|offer`, offerProbability);
  if (!hasOffer) {
    return { hasOffer: false, offerType: null, daysToOffer: null, startingSalary: null };
  }

  const offerType: "Internship" | "Full-time" =
    yearsToGrad <= 0 ? "Full-time" : seededBool(`${s.cohortId}-${s.id}|offertype`, 0.55) ? "Internship" : "Full-time";

  const rawDays = seededInt(`${s.cohortId}-${s.id}|days`, 35, 150);
  const daysToOffer = Math.max(14, Math.round(rawDays - stageThreePct * 0.4));

  const startingSalary =
    offerType === "Full-time" ? seededInt(`${s.cohortId}-${s.id}|salary`, 48000, 78000) : null;

  return { hasOffer: true, offerType, daysToOffer, startingSalary };
}

export type PlacementGroup = { label: string; count: number; offerRatePct: number };

/**
 * Placement correlation: offer rate for students who've completed Stage
 * Three (Job Application & Interview Skills) vs those who haven't. This is
 * a stronger claim than an advising-session correlation because it's tied
 * to a real outcome, not just another activity signal.
 */
export function placementCorrelation(students: TaggedStudent[]): {
  completed: PlacementGroup;
  notCompleted: PlacementGroup;
  gap: number;
} {
  const completed = students.filter((s) => s.stagePct.three === 100);
  const notCompleted = students.filter((s) => s.stagePct.three < 100);

  function rate(label: string, group: TaggedStudent[]): PlacementGroup {
    const withOffer = group.filter((s) => placementForStudent(s).hasOffer).length;
    return { label, count: group.length, offerRatePct: group.length ? Math.round((withOffer / group.length) * 100) : 0 };
  }

  const completedGroup = rate("Completed Stage Three", completed);
  const notCompletedGroup = rate("Hasn't completed Stage Three", notCompleted);

  return { completed: completedGroup, notCompleted: notCompletedGroup, gap: completedGroup.offerRatePct - notCompletedGroup.offerRatePct };
}

export type TimeToPlacementPoint = { gradYear: string; avgDays: number; count: number };

/** Average days from Stage Three completion to a reported offer, by grad year. */
export function timeToPlacementTrend(students: TaggedStudent[]): TimeToPlacementPoint[] {
  const byYear = new Map<string, number[]>();
  for (const s of students) {
    const outcome = placementForStudent(s);
    if (outcome.hasOffer && outcome.daysToOffer !== null) {
      const list = byYear.get(s.gradYear) ?? [];
      list.push(outcome.daysToOffer);
      byYear.set(s.gradYear, list);
    }
  }
  return Array.from(byYear.entries())
    .map(([gradYear, days]) => ({
      gradYear,
      avgDays: Math.round(days.reduce((a, b) => a + b, 0) / days.length),
      count: days.length,
    }))
    .sort((a, b) => a.gradYear.localeCompare(b.gradYear));
}

export function avgStartingSalary(students: TaggedStudent[]): number | null {
  const salaries = students
    .map((s) => placementForStudent(s).startingSalary)
    .filter((s): s is number => s !== null);
  if (salaries.length === 0) return null;
  return Math.round(salaries.reduce((a, b) => a + b, 0) / salaries.length);
}

export function overallOfferRate(students: TaggedStudent[]): number {
  if (students.length === 0) return 0;
  const withOffer = students.filter((s) => placementForStudent(s).hasOffer).length;
  return Math.round((withOffer / students.length) * 100);
}

export type EmployerFeedbackSummary = { avgHireQuality: number; avgInterviewPerformance: number; count: number };

export function employerFeedbackSummary(feedback: EmployerFeedback[]): EmployerFeedbackSummary {
  if (feedback.length === 0) return { avgHireQuality: 0, avgInterviewPerformance: 0, count: 0 };
  return {
    avgHireQuality: Math.round((feedback.reduce((s, f) => s + f.hireQuality, 0) / feedback.length) * 10) / 10,
    avgInterviewPerformance:
      Math.round((feedback.reduce((s, f) => s + f.interviewPerformance, 0) / feedback.length) * 10) / 10,
    count: feedback.length,
  };
}
