"use client";

import Link from "next/link";
import { SPONSORSHIPS, sponsorshipStats, CANDIDATE_PORTFOLIOS } from "@/lib/sponsorData";
import { getCohort } from "@/lib/cohortData";
import { HBarChart } from "@/components/charts/HBarChart";
import { TrendChart } from "@/components/charts/TrendChart";

const WEEK_LABELS = ["Wk 1", "Wk 2", "Wk 3", "Wk 4", "Wk 5", "Wk 6", "Wk 7", "Wk 8"];

export function EmployerOverview() {
  const totalStudents = SPONSORSHIPS.reduce((sum, s) => sum + sponsorshipStats(s).students, 0);
  const avgCompletion = Math.round(
    SPONSORSHIPS.reduce((sum, s) => sum + sponsorshipStats(s).avgCompletion, 0) / SPONSORSHIPS.length
  );
  const institutions = Array.from(new Set(SPONSORSHIPS.map((s) => sponsorshipStats(s).institution)));

  const pipelineTrend = WEEK_LABELS.map((_, w) =>
    Math.round(
      SPONSORSHIPS.reduce((sum, s) => {
        const cohort = getCohort(s.cohortId);
        return sum + (cohort?.weeklyTrend[w] ?? 0);
      }, 0) / SPONSORSHIPS.length
    )
  );

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Your FIRSTS partnership
        </p>
        <h1 className="mt-1.5 font-display text-3xl font-semibold tracking-tight text-ink">
          Overview
        </h1>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Cohorts sponsored" value={String(SPONSORSHIPS.length)} color="var(--pink-grapefruit)" />
        <StatCard label="Schools reached" value={String(institutions.length)} color="var(--fuchsia-blast)" />
        <StatCard label="Students reached" value={String(totalStudents)} color="var(--sunshine-orange)" />
        <StatCard label="Average completion" value={`${avgCompletion}%`} color="var(--juicy-plum)" />
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="rounded-3xl border border-ink/10 bg-white p-7 lg:col-span-3">
          <h2 className="mb-1 font-display text-lg font-semibold text-ink">Candidate pipeline growth</h2>
          <p className="mb-5 text-xs text-ink/45">Average completion across your sponsored cohorts, last 8 weeks</p>
          <TrendChart values={pipelineTrend} labels={WEEK_LABELS} color="var(--pink-grapefruit)" seriesName="Average completion" />
        </div>

        <div className="rounded-3xl border border-ink/10 bg-white p-7 lg:col-span-2">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="font-display text-lg font-semibold text-ink">Recently shared</h2>
            <Link href="/employer/portfolios" className="text-sm font-semibold text-berry-burst">
              See all →
            </Link>
          </div>
          <div className="space-y-3">
            {CANDIDATE_PORTFOLIOS.slice(0, 4).map((c) => (
              <Link
                key={c.id}
                href={`/employer/portfolios/${c.id}`}
                className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-paper-dim p-4 transition-colors hover:border-ink/20"
              >
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-white"
                  style={{ background: "linear-gradient(135deg, var(--pink-grapefruit), var(--berry-burst))" }}
                >
                  {c.name.charAt(0)}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-ink">{c.name}</p>
                  <p className="truncate text-xs text-ink/50">{c.school}</p>
                </div>
                <span className="ml-auto shrink-0 text-xs text-ink/40">{c.sharedOn}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <div className="mb-1 flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold text-ink">Reach by sponsorship</h2>
          <Link href="/employer/sponsorships" className="text-sm font-semibold text-berry-burst">
            See all →
          </Link>
        </div>
        <p className="mb-6 text-xs text-ink/45">Average completion per sponsored cohort or department</p>
        <HBarChart
          color="var(--pink-grapefruit)"
          data={SPONSORSHIPS.map((s) => {
            const stats = sponsorshipStats(s);
            return {
              key: s.id,
              label: stats.name,
              value: stats.avgCompletion,
              sublabel: `${stats.institution} · ${stats.students} students · ${s.tier}`,
            };
          })}
        />
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
