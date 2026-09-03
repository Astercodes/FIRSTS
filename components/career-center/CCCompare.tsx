"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const FACTORS = [
  "What the work involves",
  "Your interests",
  "Your strengths",
  "Your values",
  "Capabilities required",
  "Education and preparation",
  "Work environments",
  "Career progression",
  "Industry options",
  "Lifestyle considerations",
  "Opportunities for growth",
  "Your experiences so far",
  "What you still need to discover",
];

export function CCCompare() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
          Interested in more than one career? Good.
        </p>
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Compare your possibilities.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          You don&apos;t have to eliminate possibilities too early. Save
          careers you&apos;re interested in and compare them across factors
          that matter to you.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {FACTORS.map((f) => (
          <span
            key={f}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {f}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.15} className="mx-auto mt-10 max-w-xl text-center">
        <p className="font-display text-lg font-semibold text-ink">
          What do I need to experience before I decide?
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/onboarding"
            className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Compare Careers
          </Link>
          <Link
            href="/dashboard/portfolio"
            className="rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-ink/5"
          >
            Saved Careers
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
