"use client";

import Link from "next/link";
import {
  COHORTS,
  cohortAvgCompletion,
  cohortAtRiskCount,
  cohortActiveCount,
  allStudentsAcrossCohorts,
} from "@/lib/cohortData";

export function AdvisorOverview() {
  const allStudents = allStudentsAcrossCohorts();
  const totalStudents = allStudents.length;
  const totalAtRisk = COHORTS.reduce((sum, c) => sum + cohortAtRiskCount(c), 0);
  const totalActive = COHORTS.reduce((sum, c) => sum + cohortActiveCount(c), 0);
  const avgCompletion = Math.round(
    COHORTS.reduce((sum, c) => sum + cohortAvgCompletion(c), 0) / COHORTS.length
  );

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Your cohorts at a glance
        </p>
        <h1 className="mt-1.5 font-display text-3xl font-semibold tracking-tight text-ink">
          Overview
        </h1>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Students across your cohorts" value={String(totalStudents)} color="var(--juicy-plum)" />
        <StatCard label="Average completion" value={`${avgCompletion}%`} color="var(--berry-burst)" />
        <StatCard label="Active in the last 7 days" value={String(totalActive)} color="var(--citrus-lime)" />
        <StatCard label="At-risk (21+ days inactive)" value={String(totalAtRisk)} color="var(--sunshine-orange)" />
      </div>

      <div>
        <h2 className="mb-4 font-display text-lg font-semibold text-ink">Cohorts</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {COHORTS.map((c) => {
            const avg = cohortAvgCompletion(c);
            const atRisk = cohortAtRiskCount(c);
            return (
              <Link
                key={c.id}
                href={`/advisor/cohorts/${c.id}`}
                className="group rounded-3xl border border-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-display text-lg font-semibold text-ink">{c.name}</p>
                    <p className="mt-1 text-sm text-ink/50">{c.students.length} students</p>
                  </div>
                  {atRisk > 0 && (
                    <span className="rounded-full bg-[var(--sunshine-orange)]/15 px-2.5 py-1 text-xs font-bold text-[var(--sunshine-orange)]">
                      {atRisk} at risk
                    </span>
                  )}
                </div>

                <div className="mt-5">
                  <div className="mb-1.5 flex justify-between text-xs text-ink/60">
                    <span>Average completion</span>
                    <span className="font-semibold text-ink">{avg}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-ink/10">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ width: `${avg}%`, background: "var(--juicy-plum)" }}
                    />
                  </div>
                </div>

                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-berry-burst">
                  View roster
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
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
