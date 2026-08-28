"use client";

import { useState } from "react";
import { institutionBenchmarks } from "@/lib/benchmarkData";
import { HBarChart } from "@/components/charts/HBarChart";
import { TrendChart } from "@/components/charts/TrendChart";

const WEEK_LABELS = ["Wk 1", "Wk 2", "Wk 3", "Wk 4", "Wk 5", "Wk 6", "Wk 7", "Wk 8"];

export function BenchmarksView() {
  const benchmarks = institutionBenchmarks();
  const [selected, setSelected] = useState(benchmarks[0]?.institution ?? "");
  const selectedBenchmark = benchmarks.find((b) => b.institution === selected) ?? benchmarks[0];

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Where to spend recruiting budget
        </p>
        <h1 className="mt-1.5 font-display text-3xl font-semibold tracking-tight text-ink">
          School benchmarks
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-ink/50">
          Readiness compared across every school you sponsor, so you can prioritize campus visits and
          req postings toward the schools whose graduating classes are furthest along.
        </p>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <h2 className="mb-1 font-display text-lg font-semibold text-ink">Average completion by school</h2>
        <p className="mb-6 text-xs text-ink/45">Averaged across every cohort you sponsor at that school</p>
        <HBarChart
          color="var(--pink-grapefruit)"
          data={benchmarks.map((b) => ({
            key: b.institution,
            label: b.institution,
            value: b.avgCompletion,
            sublabel: `${b.cohortCount} cohort${b.cohortCount === 1 ? "" : "s"} · ${b.studentCount} students`,
          }))}
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {benchmarks.map((b) => (
          <button
            key={b.institution}
            type="button"
            onClick={() => setSelected(b.institution)}
            className={`rounded-3xl border p-7 text-left transition-colors ${
              selected === b.institution
                ? "border-[var(--pink-grapefruit)] bg-white"
                : "border-ink/10 bg-white hover:border-ink/20"
            }`}
          >
            <p className="font-display text-lg font-semibold text-ink">{b.institution}</p>
            <div className="mt-4 grid grid-cols-3 gap-3 border-t border-ink/10 pt-4">
              <div>
                <p className="font-display text-xl font-bold text-ink">{b.avgCompletion}%</p>
                <p className="text-xs text-ink/50">avg completion</p>
              </div>
              <div>
                <p className="font-display text-xl font-bold text-ink">{b.cohortCount}</p>
                <p className="text-xs text-ink/50">cohort{b.cohortCount === 1 ? "" : "s"}</p>
              </div>
              <div>
                <p className="font-display text-xl font-bold text-ink">{b.studentCount}</p>
                <p className="text-xs text-ink/50">students</p>
              </div>
            </div>
            {b.weakestCategory && (
              <p className="mt-4 text-xs text-ink/45">
                Weakest spot: {b.weakestCategory.label} ({b.weakestCategory.pct}% average)
              </p>
            )}
          </button>
        ))}
      </div>

      {selectedBenchmark && (
        <div className="rounded-3xl border border-ink/10 bg-white p-7">
          <h2 className="mb-1 font-display text-lg font-semibold text-ink">
            {selectedBenchmark.institution}, completion trend
          </h2>
          <p className="mb-5 text-xs text-ink/45">Average completion across sponsored cohorts, last 8 weeks</p>
          <TrendChart
            values={selectedBenchmark.weeklyTrend}
            labels={WEEK_LABELS}
            color="var(--pink-grapefruit)"
            seriesName="Average completion"
          />
        </div>
      )}

      <div className="rounded-3xl border border-ink/10 bg-paper-dim p-7">
        <p className="text-sm leading-relaxed text-ink/60">
          Share this view with a school&apos;s career center. Knowing that employers are watching
          completion rates has moved the needle at other partner schools more than any reminder email
          the center sends on its own.
        </p>
      </div>
    </div>
  );
}
