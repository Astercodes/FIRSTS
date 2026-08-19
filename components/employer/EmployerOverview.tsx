"use client";

import Link from "next/link";
import { SPONSORSHIPS, sponsorshipStats, CANDIDATE_PORTFOLIOS } from "@/lib/sponsorData";

export function EmployerOverview() {
  const totalStudents = SPONSORSHIPS.reduce((sum, s) => sum + sponsorshipStats(s).students, 0);
  const avgCompletion = Math.round(
    SPONSORSHIPS.reduce((sum, s) => sum + sponsorshipStats(s).avgCompletion, 0) / SPONSORSHIPS.length
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
        <StatCard label="Students reached" value={String(totalStudents)} color="var(--sunshine-orange)" />
        <StatCard label="Average completion" value={`${avgCompletion}%`} color="var(--juicy-plum)" />
        <StatCard label="Portfolios shared with you" value={String(CANDIDATE_PORTFOLIOS.length)} color="var(--berry-burst)" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-ink/10 bg-white p-7">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="font-display text-lg font-semibold text-ink">Sponsorships</h2>
            <Link href="/employer/sponsorships" className="text-sm font-semibold text-berry-burst">
              See all →
            </Link>
          </div>
          <div className="space-y-4">
            {SPONSORSHIPS.map((s) => {
              const stats = sponsorshipStats(s);
              return (
                <div key={s.id} className="rounded-2xl border border-ink/10 bg-paper-dim p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-ink">{stats.name}</p>
                    <span className="text-xs font-medium text-ink/50">{s.tier}</span>
                  </div>
                  <p className="mt-1 text-xs text-ink/50">
                    {stats.students} students · {stats.avgCompletion}% avg completion
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-3xl border border-ink/10 bg-white p-7">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="font-display text-lg font-semibold text-ink">Recently shared</h2>
            <Link href="/employer/portfolios" className="text-sm font-semibold text-berry-burst">
              See all →
            </Link>
          </div>
          <div className="space-y-3">
            {CANDIDATE_PORTFOLIOS.slice(0, 3).map((c) => (
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
                  <p className="truncate text-xs text-ink/50">{c.headline}</p>
                </div>
                <span className="ml-auto shrink-0 text-xs text-ink/40">{c.sharedOn}</span>
              </Link>
            ))}
          </div>
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
