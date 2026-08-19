"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  COHORTS,
  cohortAvgCompletion,
  cohortAtRiskCount,
  allStudentsAcrossCohorts,
} from "@/lib/cohortData";
import { loadAdvisor, ADVISOR_CHANGE_EVENT, MOCK_ADVISOR, type AdvisorProfile } from "@/lib/advisorStore";

export function InstitutionOverview() {
  const [advisor, setAdvisor] = useState<AdvisorProfile | null>(null);

  useEffect(() => {
    const sync = () => setAdvisor(loadAdvisor());
    sync();
    window.addEventListener(ADVISOR_CHANGE_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(ADVISOR_CHANGE_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const institution = advisor?.institution || MOCK_ADVISOR.institution;
  const allStudents = allStudentsAcrossCohorts();
  const totalAtRisk = COHORTS.reduce((sum, c) => sum + cohortAtRiskCount(c), 0);
  const avgCompletion = Math.round(
    COHORTS.reduce((sum, c) => sum + cohortAvgCompletion(c), 0) / COHORTS.length
  );

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Institution-wide view
        </p>
        <h1 className="mt-1.5 font-display text-3xl font-semibold tracking-tight text-ink">
          {institution}
        </h1>
        <p className="mt-1 text-sm text-ink/50">
          Aggregate completion across every cohort at your institution.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Cohorts running" value={String(COHORTS.length)} color="var(--berry-burst)" />
        <StatCard label="Total students" value={String(allStudents.length)} color="var(--juicy-plum)" />
        <StatCard label="Average completion" value={`${avgCompletion}%`} color="var(--neon-pink)" />
        <StatCard label="At-risk, institution-wide" value={String(totalAtRisk)} color="var(--sunshine-orange)" />
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <h2 className="mb-5 font-display text-lg font-semibold text-ink">Completion by cohort</h2>
        <div className="space-y-5">
          {COHORTS.map((c) => {
            const avg = cohortAvgCompletion(c);
            const atRisk = cohortAtRiskCount(c);
            return (
              <div key={c.id}>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <Link href={`/advisor/cohorts/${c.id}`} className="font-medium text-ink hover:text-berry-burst">
                    {c.name}
                  </Link>
                  <span className="text-ink/60">
                    {avg}% avg · {c.students.length} students
                    {atRisk > 0 && (
                      <span className="ml-2 font-semibold text-[var(--sunshine-orange)]">
                        {atRisk} at risk
                      </span>
                    )}
                  </span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-ink/10">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ width: `${avg}%`, background: "var(--berry-burst)" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-paper-dim p-7">
        <p className="text-sm leading-relaxed text-ink/60">
          This view rolls up completion status only, the same privacy rule
          applies at the institution level as it does per cohort: nobody
          outside a student&apos;s own account sees their actual worksheet
          answers unless the student shares them.
        </p>
      </div>
    </div>
  );
}

function StatCard({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="rounded-3xl border border-ink/10 bg-white p-6">
      <p className="font-display text-3xl font-bold" style={{ color }}>
        {value}
      </p>
      <p className="mt-1.5 text-xs leading-snug text-ink/50">{label}</p>
    </div>
  );
}
