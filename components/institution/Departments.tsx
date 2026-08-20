"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  cohortsForInstitution,
  cohortAvgCompletion,
  cohortAtRiskCount,
} from "@/lib/cohortData";
import { loadAdvisor, ADVISOR_CHANGE_EVENT, MOCK_ADVISOR, type AdvisorProfile } from "@/lib/advisorStore";
import { HBarChart } from "@/components/charts/HBarChart";

export function Departments() {
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
  const cohorts = cohortsForInstitution(institution);
  const departments = Array.from(new Set(cohorts.map((c) => c.focus)));

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          {departments.length} departments · {cohorts.length} cohorts
        </p>
        <h1 className="mt-1.5 font-display text-3xl font-semibold tracking-tight text-ink">
          Departments & cohorts
        </h1>
        <p className="mt-1 text-sm text-ink/50">
          Every cohort running FIRSTS at {institution}, grouped by department.
        </p>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <h2 className="mb-1 font-display text-lg font-semibold text-ink">Completion by cohort</h2>
        <p className="mb-6 text-xs text-ink/45">Weighted average across all six stages</p>
        {cohorts.length > 0 ? (
          <HBarChart
            color="var(--berry-burst)"
            data={cohorts.map((c) => ({
              key: c.id,
              label: c.name,
              value: cohortAvgCompletion(c),
              href: `/institution/departments/${c.id}`,
              sublabel: `${c.focus} · ${c.students.length} students`,
            }))}
          />
        ) : (
          <p className="text-sm text-ink/45">No cohorts yet.</p>
        )}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {cohorts.length === 0 ? (
          <div className="rounded-3xl border border-ink/10 bg-paper-dim p-7 text-sm text-ink/50 md:col-span-2">
            No cohorts are running at {institution} yet.
          </div>
        ) : (
          cohorts.map((c) => {
            const avg = cohortAvgCompletion(c);
            const atRisk = cohortAtRiskCount(c);
            return (
              <Link
                key={c.id}
                href={`/institution/departments/${c.id}`}
                className="group rounded-3xl border border-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">{c.focus}</p>
                    <p className="mt-1 font-display text-lg font-semibold text-ink">{c.name}</p>
                    <p className="mt-1 text-sm text-ink/50">{c.students.length} students</p>
                  </div>
                  {atRisk > 0 && (
                    <span className="rounded-full bg-[#c92f3f]/12 px-2.5 py-1 text-xs font-bold text-[#c92f3f]">
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
          })
        )}
      </div>
    </div>
  );
}
