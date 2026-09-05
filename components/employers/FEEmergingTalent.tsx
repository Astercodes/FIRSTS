"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const EVIDENCE_OF = [
  "Problem-solving",
  "Initiative",
  "Communication",
  "Learning",
  "Leadership",
  "Project work",
  "Collaboration",
  "Curiosity",
  "Self-awareness",
  "Professional preparation",
  "Resilience",
];

const POPULATIONS = [
  "Interns",
  "Apprentices",
  "Recent graduates",
  "Entry-level professionals",
  "Career changers",
  "Emerging talent",
];

export function FEEmergingTalent() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Hire for potential with more context.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Early-career candidates often have ability before they have
          years of experience. A student may not yet have five years in
          the field, multiple promotions, a long list of employers, or a
          polished professional network. But they may already have
          evidence of:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {EVIDENCE_OF.map((e) => (
          <span
            key={e}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {e}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.18} className="mx-auto mt-8 max-w-2xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          FIRSTS helps candidates recognize, document, and communicate
          those experiences more intentionally. That can be especially
          useful when hiring:
        </p>
      </Reveal>

      <Reveal delay={0.24} className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-2.5">
        {POPULATIONS.map((p) => (
          <span
            key={p}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {p}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.3} className="mt-10 flex justify-center">
        <Link
          href="/employer/talent-pool"
          className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore Emerging Talent
        </Link>
      </Reveal>
    </section>
  );
}
