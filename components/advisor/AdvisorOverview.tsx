"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  cohortsForInstitution,
  cohortAvgCompletion,
  cohortAtRiskCount,
  cohortActiveCount,
  cohortWatchCount,
  institutionWeeklyTrend,
  stageDistribution,
  stalledStudents,
  categoryWeakSpot,
  weakestCategory,
  appointmentOutcomeComparison,
} from "@/lib/cohortData";
import { loadAdvisor, ADVISOR_CHANGE_EVENT, MOCK_ADVISOR, type AdvisorProfile } from "@/lib/advisorStore";
import { HBarChart } from "@/components/charts/HBarChart";
import { TrendChart } from "@/components/charts/TrendChart";
import { StatusBar } from "@/components/charts/StatusBar";
import { CohortHistogram } from "@/components/charts/CohortHistogram";
import { CohortCategoryHeatmap } from "@/components/charts/CohortCategoryHeatmap";
import { OutcomeComparisonChart } from "@/components/charts/OutcomeComparisonChart";
import { StalledStudentsTable } from "@/components/advisor/StalledStudentsTable";

const WEEK_LABELS = ["Wk 1", "Wk 2", "Wk 3", "Wk 4", "Wk 5", "Wk 6", "Wk 7", "Wk 8"];

export function AdvisorOverview() {
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
  const allStudents = cohorts.flatMap((c) => c.students);
  const totalStudents = allStudents.length;
  const totalAtRisk = cohorts.reduce((sum, c) => sum + cohortAtRiskCount(c), 0);
  const totalWatch = cohorts.reduce((sum, c) => sum + cohortWatchCount(c), 0);
  const totalActive = cohorts.reduce((sum, c) => sum + cohortActiveCount(c), 0);
  const avgCompletion = cohorts.length
    ? Math.round(cohorts.reduce((sum, c) => sum + cohortAvgCompletion(c), 0) / cohorts.length)
    : 0;
  const trend = institutionWeeklyTrend(institution);
  const distribution = stageDistribution(allStudents);
  const bottleneck = distribution
    .filter((d) => d.key !== "complete")
    .reduce((max, d) => (d.count > max.count ? d : max), distribution[0]);
  const bottleneckPct = totalStudents > 0 ? Math.round((bottleneck.count / totalStudents) * 100) : 0;
  const stalled = stalledStudents(cohorts);
  const weakSpotRows = categoryWeakSpot(allStudents);
  const weakest = weakestCategory(weakSpotRows);
  const outcomeComparison = appointmentOutcomeComparison(allStudents);

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          {institution}
        </p>
        <h1 className="mt-1.5 font-display text-3xl font-semibold tracking-tight text-ink">
          Overview
        </h1>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Students across your cohorts" value={String(totalStudents)} color="var(--juicy-plum)" />
        <StatCard label="Average completion" value={`${avgCompletion}%`} color="var(--berry-burst)" />
        <StatCard label="Active in the last 7 days" value={String(totalActive)} color="#1a8f3c" />
        <StatCard label="At-risk (21+ days inactive)" value={String(totalAtRisk)} color="#c92f3f" />
      </div>

      <StalledStudentsTable students={stalled} />

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="rounded-3xl border border-ink/10 bg-white p-7 lg:col-span-3">
          <h2 className="mb-1 font-display text-lg font-semibold text-ink">Engagement trend</h2>
          <p className="mb-5 text-xs text-ink/45">Average completion across your cohorts, last 8 weeks</p>
          {trend.length > 0 ? (
            <TrendChart values={trend} labels={WEEK_LABELS} seriesName="Average completion" />
          ) : (
            <p className="text-sm text-ink/45">No cohorts yet.</p>
          )}
        </div>

        <div className="rounded-3xl border border-ink/10 bg-white p-7 lg:col-span-2">
          <h2 className="mb-1 font-display text-lg font-semibold text-ink">Engagement status</h2>
          <p className="mb-5 text-xs text-ink/45">Every student across your cohorts</p>
          <StatusBar active={totalActive} watch={totalWatch} atRisk={totalAtRisk} />
        </div>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-display text-lg font-semibold text-ink">Cohort distribution</h2>
          {totalStudents > 0 && bottleneck.count > 0 && (
            <span className="rounded-full bg-[color-mix(in_oklab,var(--berry-burst)_12%,white)] px-3 py-1 text-xs font-semibold text-[var(--berry-burst)]">
              {bottleneckPct}% of students are in {bottleneck.label}
            </span>
          )}
        </div>
        <p className="mb-5 text-xs text-ink/45">How many students are in each stage right now, across your cohorts</p>
        {totalStudents > 0 ? (
          <CohortHistogram data={distribution} />
        ) : (
          <p className="text-sm text-ink/45">No students yet.</p>
        )}
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-display text-lg font-semibold text-ink">Category weak spots</h2>
          {weakest && (
            <span className="rounded-full bg-[color-mix(in_oklab,#c92f3f_10%,white)] px-3 py-1 text-xs font-semibold text-[#c92f3f]">
              Weakest: {weakest.label} ({weakest.pct}%)
            </span>
          )}
        </div>
        <p className="mb-5 text-xs text-ink/45">
          Average completion per category, across every student in your cohorts. Useful for
          programming decisions, like where to run a workshop.
        </p>
        {totalStudents > 0 ? (
          <CohortCategoryHeatmap rows={weakSpotRows} />
        ) : (
          <p className="text-sm text-ink/45">No students yet.</p>
        )}
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-display text-lg font-semibold text-ink">Advisor engagement & outcomes</h2>
          {outcomeComparison.engaged.count > 0 && outcomeComparison.notEngaged.count > 0 && (
            <span className="rounded-full bg-[color-mix(in_oklab,#1a8f3c_12%,white)] px-3 py-1 text-xs font-semibold text-[#1a8f3c]">
              {outcomeComparison.completionGap >= 0 ? "+" : ""}
              {outcomeComparison.completionGap} pts completion gap
            </span>
          )}
        </div>
        <p className="mb-5 text-xs text-ink/45">
          There&apos;s no separate appointment record in this data, so this uses whether a
          student has shared at least one reflection with their advisor as the closest proxy
          for an advising relationship. Correlation, not proof that sessions cause the gap.
        </p>
        {totalStudents > 0 ? (
          <OutcomeComparisonChart data={outcomeComparison} />
        ) : (
          <p className="text-sm text-ink/45">No students yet.</p>
        )}
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <h2 className="mb-1 font-display text-lg font-semibold text-ink">Completion by cohort</h2>
        <p className="mb-6 text-xs text-ink/45">Weighted average across all six stages</p>
        {cohorts.length > 0 ? (
          <HBarChart
            data={cohorts.map((c) => ({
              key: c.id,
              label: c.name,
              value: cohortAvgCompletion(c),
              href: `/advisor/cohorts/${c.id}`,
              sublabel: `${c.students.length} students`,
            }))}
          />
        ) : (
          <p className="text-sm text-ink/45">No cohorts yet.</p>
        )}
      </div>

      <div>
        <h2 className="mb-4 font-display text-lg font-semibold text-ink">Cohorts</h2>
        {cohorts.length === 0 ? (
          <div className="rounded-3xl border border-ink/10 bg-paper-dim p-7 text-sm text-ink/50">
            No cohorts are running at {institution} yet.
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {cohorts.map((c) => {
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
            })}
          </div>
        )}
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
