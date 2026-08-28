import { SPONSORSHIPS } from "@/lib/sponsorData";
import { getCohort, cohortAvgCompletion, categoryWeakSpot, weakestCategory, type Cohort } from "@/lib/cohortData";

export type InstitutionBenchmark = {
  institution: string;
  cohortCount: number;
  studentCount: number;
  avgCompletion: number;
  weeklyTrend: number[];
  weakestCategory: { label: string; pct: number } | null;
};

/**
 * Readiness benchmarking across the schools this employer sponsors, not
 * every school in the system. Aggregated only from the employer's own
 * sponsorships, the same scope as Overview and Sponsorships, so this never
 * surfaces data about a cohort the employer has no relationship with.
 */
export function institutionBenchmarks(): InstitutionBenchmark[] {
  const byInstitution = new Map<string, Cohort[]>();
  for (const sp of SPONSORSHIPS) {
    const cohort = getCohort(sp.cohortId);
    if (!cohort) continue;
    const existing = byInstitution.get(cohort.institution) ?? [];
    existing.push(cohort);
    byInstitution.set(cohort.institution, existing);
  }

  return Array.from(byInstitution.entries())
    .map(([institution, cohorts]) => {
      const studentCount = cohorts.reduce((sum, c) => sum + c.students.length, 0);
      const avgCompletion = Math.round(
        cohorts.reduce((sum, c) => sum + cohortAvgCompletion(c), 0) / cohorts.length
      );
      const weeks = cohorts[0]?.weeklyTrend.length ?? 0;
      const weeklyTrend = Array.from({ length: weeks }, (_, w) =>
        Math.round(cohorts.reduce((sum, c) => sum + (c.weeklyTrend[w] ?? 0), 0) / cohorts.length)
      );
      const allStudents = cohorts.flatMap((c) => c.students);
      const weakest = weakestCategory(categoryWeakSpot(allStudents));
      return {
        institution,
        cohortCount: cohorts.length,
        studentCount,
        avgCompletion,
        weeklyTrend,
        weakestCategory: weakest,
      };
    })
    .sort((a, b) => b.avgCompletion - a.avgCompletion);
}
