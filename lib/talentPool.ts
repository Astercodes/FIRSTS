import { STAGES, type StageId } from "@/lib/dashboardData";
import { SPONSORSHIPS, CANDIDATE_PORTFOLIOS, type CandidatePortfolio } from "@/lib/sponsorData";
import { getCohort, type CohortStudent } from "@/lib/cohortData";
import { credentialForCandidate } from "@/lib/credentialData";

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

const LEGACY_STAGES: StageId[] = ["one", "two", "three", "four"];
const COMPLETE_THRESHOLD = 95;

/**
 * Extends a cohort student's real seeded stagePct (Stages One to Four, the
 * only ones the advisor-side cohort model tracks) with a deterministic
 * estimate for Stages Five through Nine, anchored to the student's own
 * Stage One to Four average and tapering off for later stages since the
 * curriculum is sequential.
 */
function extendedStagePct(student: CohortStudent, cohortId: string): Record<StageId, number> {
  const result = {
    one: student.stagePct.one,
    two: student.stagePct.two,
    three: student.stagePct.three,
    four: student.stagePct.four,
  } as Record<StageId, number>;

  const anchor = (student.stagePct.one + student.stagePct.two + student.stagePct.three + student.stagePct.four) / 4;
  const laterStages = STAGES.filter((s) => !LEGACY_STAGES.includes(s.id));
  laterStages.forEach((s, i) => {
    const seed = `${cohortId}:${student.id}:${s.id}`;
    const decay = Math.max(0, anchor - (i + 1) * 16);
    const jitter = (seededUnit(seed) - 0.5) * 30;
    result[s.id] = Math.round(Math.max(0, Math.min(100, decay + jitter)));
  });
  return result;
}

export type CohortStageMatch = {
  sponsorshipId: string;
  cohortName: string;
  institution: string;
  tier: string;
  totalStudents: number;
  matchCount: number;
  matchPct: number;
};

/**
 * Aggregate-only view of how deep the bench runs in each sponsored cohort
 * against a set of required stages. Never names an individual student, in
 * keeping with this app's existing sponsorship policy (see SponsorshipsView):
 * cohort-level data only, unless a candidate has chosen to share their own
 * portfolio directly.
 */
export function stageMatchBySponsorship(requiredStages: StageId[]): CohortStageMatch[] {
  const rows: CohortStageMatch[] = [];
  for (const sp of SPONSORSHIPS) {
    const cohort = getCohort(sp.cohortId);
    if (!cohort) continue;
    const matchCount =
      requiredStages.length === 0
        ? cohort.students.length
        : cohort.students.filter((student) => {
            const stagePct = extendedStagePct(student, cohort.id);
            return requiredStages.every((stage) => stagePct[stage] >= COMPLETE_THRESHOLD);
          }).length;
    rows.push({
      sponsorshipId: sp.id,
      cohortName: cohort.name,
      institution: cohort.institution,
      tier: sp.tier,
      totalStudents: cohort.students.length,
      matchCount,
      matchPct: cohort.students.length > 0 ? Math.round((matchCount / cohort.students.length) * 100) : 0,
    });
  }
  return rows;
}

export function sponsoredInstitutions(): string[] {
  return Array.from(
    new Set(
      SPONSORSHIPS.map((sp) => getCohort(sp.cohortId)?.institution).filter((x): x is string => Boolean(x))
    )
  ).sort();
}

export function candidateInstitutions(): string[] {
  return Array.from(new Set(CANDIDATE_PORTFOLIOS.map((c) => c.school))).sort();
}

/**
 * Named matches: only candidates who explicitly shared their own portfolio,
 * filtered by institution and by having completed every required stage.
 * This is the one place named individuals are shown, because consent was
 * given directly, not inferred from a sponsored cohort roster.
 */
export function matchingSharedCandidates(
  requiredStages: StageId[],
  institution: string | "all"
): CandidatePortfolio[] {
  return CANDIDATE_PORTFOLIOS.filter((c) => {
    if (institution !== "all" && c.school !== institution) return false;
    if (requiredStages.length === 0) return true;
    const credential = credentialForCandidate(c);
    return requiredStages.every((stage) => credential.find((s) => s.stage === stage)?.status === "complete");
  });
}
