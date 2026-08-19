"use client";

import Link from "next/link";
import { SPONSORSHIPS, sponsorshipStats } from "@/lib/sponsorData";

export function SponsorshipsView() {
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
            Where your sponsorship goes
          </p>
          <h1 className="mt-1.5 font-display text-3xl font-semibold tracking-tight text-ink">
            Sponsorships
          </h1>
        </div>
        <Link
          href="/request-demo?for=employer-sponsor"
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-ink/85"
        >
          Sponsor another cohort
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {SPONSORSHIPS.map((s) => {
          const stats = sponsorshipStats(s);
          return (
            <div key={s.id} className="rounded-3xl border border-ink/10 bg-white p-7">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-display text-lg font-semibold text-ink">{stats.name}</p>
                  <p className="mt-1 text-sm text-ink/50">{stats.institution}</p>
                </div>
                <span className="rounded-full bg-[var(--pink-grapefruit)]/15 px-2.5 py-1 text-xs font-bold text-[var(--pink-grapefruit)]">
                  {s.tier}
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4 border-t border-ink/10 pt-5">
                <div>
                  <p className="font-display text-2xl font-bold text-ink">{stats.students}</p>
                  <p className="text-xs text-ink/50">students reached</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-ink">{stats.avgCompletion}%</p>
                  <p className="text-xs text-ink/50">average completion</p>
                </div>
              </div>

              <p className="mt-4 text-xs text-ink/40">Sponsoring since {s.startedOn}</p>
            </div>
          );
        })}
      </div>

      <div className="rounded-3xl border border-ink/10 bg-paper-dim p-7">
        <p className="text-sm leading-relaxed text-ink/60">
          Sponsorship data is shown at the cohort level only. You won&apos;t
          see individual student names or their worksheet answers here, the
          only way you see a specific candidate is if they choose to share
          their own portfolio with you.
        </p>
      </div>
    </div>
  );
}
