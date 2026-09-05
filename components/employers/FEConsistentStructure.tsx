"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const SCAN = [
  "What they have explored",
  "What they have completed",
  "What experiences they have had",
  "What evidence they chose to share",
  "What they are working toward",
  "What questions may be worth asking next",
];

export function FEConsistentStructure() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          A consistent structure without identical candidates.
        </h2>
        <p className="mt-5 font-display text-xl font-medium text-ink/80">
          Compare evidence more easily.
        </p>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          FIRSTS gives participants a shared framework for documenting
          development while still allowing their experiences, goals,
          projects, and reflections to remain individual. That can make
          it easier to scan:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 max-w-2xl space-y-2">
        {SCAN.map((s) => (
          <p
            key={s}
            className="rounded-xl border border-ink/10 bg-white px-4 py-2.5 text-sm font-medium text-ink/70"
          >
            {s}
          </p>
        ))}
      </Reveal>

      <Reveal delay={0.18} className="mx-auto mt-10 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          You are not receiving a standardized personality profile that
          tells you who to hire. You are getting additional context.
        </p>
        <p className="mt-3 font-display text-lg font-semibold text-ink">
          Evidence to investigate, not an automated hiring decision.
        </p>
        <Link
          href="/employer"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore the Employer Experience
        </Link>
      </Reveal>
    </section>
  );
}
