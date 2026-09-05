"use client";

import { Reveal } from "@/components/ui/Reveal";

const THOUGHT_ON = [
  "Their strengths",
  "Their values",
  "Their professional identity",
  "Their experiences",
  "Their goals",
  "Their communication",
  "Their interview stories",
  "Their career direction",
  "Their workplace readiness",
  "Their development gaps",
];

export function FEIntro() {
  return (
    <section className="relative bg-paper-dim px-6 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          Through FIRSTS, participants complete guided activities,
          projects, reflections, professional preparation, career
          exploration, business exploration, and development milestones
          that can become part of a portable portfolio. That means
          employers can meet candidates who have already spent time
          thinking about:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {THOUGHT_ON.map((t) => (
          <span
            key={t}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {t}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.18} className="mx-auto mt-10 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          and the evidence behind what they say they can do.
        </p>
        <p className="mt-4 font-display text-lg font-semibold text-ink">
          FIRSTS does not replace your hiring process.
        </p>
        <p className="mt-1 text-[15px] leading-relaxed text-ink/60">
          It helps candidates arrive better prepared for it.
        </p>
      </Reveal>
    </section>
  );
}
