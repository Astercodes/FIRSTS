"use client";

import Link from "next/link";
import type { CandidatePortfolio } from "@/lib/sponsorData";

export function PortfolioDetail({ candidate }: { candidate: CandidatePortfolio }) {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <Link href="/employer/portfolios" className="text-sm font-medium text-ink/45 hover:text-ink">
        ← Candidate portfolios
      </Link>

      <div className="flex items-start gap-5">
        <span
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full font-display text-2xl font-bold text-white"
          style={{ background: "linear-gradient(135deg, var(--pink-grapefruit), var(--berry-burst))" }}
        >
          {candidate.name.charAt(0)}
        </span>
        <div>
          <h1 className="font-display text-2xl font-semibold tracking-tight text-ink">
            {candidate.name}
          </h1>
          <p className="mt-1 text-[15px] text-ink/60">{candidate.headline}</p>
          <p className="mt-1 text-sm text-ink/40">
            {candidate.school} · {candidate.stagesCompleted} of 4 stages complete
          </p>
        </div>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Top values
        </p>
        <div className="flex flex-wrap gap-2">
          {candidate.topValues.map((v) => (
            <span
              key={v}
              className="rounded-full border border-ink/10 bg-paper-dim px-3.5 py-1.5 text-sm text-ink/70"
            >
              {v}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          STAR story
        </p>
        <dl className="space-y-4">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-ink/40">Situation</dt>
            <dd className="mt-1 text-[15px] leading-relaxed text-ink/75">{candidate.starStory.situation}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-ink/40">Task</dt>
            <dd className="mt-1 text-[15px] leading-relaxed text-ink/75">{candidate.starStory.task}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-ink/40">Action</dt>
            <dd className="mt-1 text-[15px] leading-relaxed text-ink/75">{candidate.starStory.action}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-ink/40">Result</dt>
            <dd className="mt-1 text-[15px] leading-relaxed text-ink/75">{candidate.starStory.result}</dd>
          </div>
        </dl>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Stated goal
        </p>
        <p className="text-[15px] leading-relaxed text-ink/75">{candidate.goalHeadline}</p>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-paper-dim p-7">
        <p className="text-sm leading-relaxed text-ink/60">
          This is a summary {candidate.name.split(" ")[0]} chose to share with
          you directly. Treat it as a conversation starter alongside their
          resume and your own interview process, not a replacement for
          either.
        </p>
      </div>
    </div>
  );
}
