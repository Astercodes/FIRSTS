"use client";

import Link from "next/link";
import { CANDIDATE_PORTFOLIOS } from "@/lib/sponsorData";
import { credentialForCandidate, credentialSummary } from "@/lib/credentialData";

export function PortfolioInbox() {
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Shared directly with you
        </p>
        <h1 className="mt-1.5 font-display text-3xl font-semibold tracking-tight text-ink">
          Candidate portfolios
        </h1>
        <p className="mt-2 max-w-xl text-sm text-ink/50">
          Every portfolio here was shared by the candidate themselves as part
          of an application, not pulled from a sponsored cohort&apos;s roster.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {CANDIDATE_PORTFOLIOS.map((c) => {
          const summary = credentialSummary(credentialForCandidate(c));
          return (
            <Link
              key={c.id}
              href={`/employer/portfolios/${c.id}`}
              className="group rounded-3xl border border-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-base font-bold text-white"
                  style={{ background: "linear-gradient(135deg, var(--pink-grapefruit), var(--berry-burst))" }}
                >
                  {c.name.charAt(0)}
                </span>
                <div className="min-w-0">
                  <p className="font-display text-lg font-semibold text-ink">{c.name}</p>
                  <p className="mt-0.5 text-sm text-ink/55">{c.headline}</p>
                  <p className="mt-1 text-xs text-ink/40">{c.school}</p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-4 text-xs text-ink/50">
                <span>{summary.complete} of {summary.total} stages complete</span>
                <span>Shared {c.sharedOn}</span>
              </div>

              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-berry-burst">
                View portfolio
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
