"use client";

import { Reveal } from "@/components/ui/Reveal";

const MOMENTS = [
  "Create the right conversation",
  "Guide an activity",
  "Help them reflect",
  "Notice when they are stuck",
  "Challenge them to go deeper",
];

export function FFIntro() {
  return (
    <section className="relative bg-paper-dim px-6 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          Sometimes people need someone who can:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-6 flex max-w-xl flex-wrap justify-center gap-2.5">
        {MOMENTS.map((m) => (
          <span
            key={m}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {m}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.16} className="mx-auto mt-8 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          And help them turn insight into action.
        </p>
        <p className="mt-4 font-display text-lg font-semibold text-ink">
          FIRSTS Facilitators help participants engage intentionally with
          their development, one FIRST at a time.
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-ink/60">
          You do not need to arrive knowing how to facilitate every part
          of FIRSTS. We train you, you practice, you observe experienced
          facilitators, you co-lead, and you specialize.
        </p>
      </Reveal>
    </section>
  );
}
