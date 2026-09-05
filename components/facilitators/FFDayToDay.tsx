"use client";

import { Reveal } from "@/components/ui/Reveal";

const ACTIONS = [
  "Prepare for a session.",
  "Review the relevant FIRST.",
  "Set up the environment.",
  "Introduce the purpose of an activity.",
  "Guide participants through exercises.",
  "Ask reflection questions.",
  "Lead group conversations.",
  "Encourage quieter participants to contribute.",
  "Manage dominant voices respectfully.",
  "Help participants connect activities to their own lives.",
  "Clarify instructions.",
  "Notice confusion.",
  "Challenge superficial answers.",
  "Encourage deeper reflection.",
  "Connect participants to relevant FIRSTS.",
  "Help participants identify next actions.",
  "Monitor participation.",
  "Document appropriate session information.",
  "Escalate concerns when necessary.",
  "Gather feedback.",
  "Reflect on their own facilitation.",
  "Continue developing their practice.",
];

export function FFDayToDay() {
  return (
    <section id="day-to-day" className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          What facilitators actually do.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          A facilitator may:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {ACTIONS.map((a) => (
          <span
            key={a}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {a}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.2} className="mx-auto mt-10 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          The activity provides the structure.
        </p>
        <p className="mt-2 font-display text-lg font-semibold text-ink">
          The facilitator helps make the experience meaningful.
        </p>
      </Reveal>
    </section>
  );
}
