"use client";

import { Reveal } from "@/components/ui/Reveal";

const FIRSTS = [
  "First Strength Discovery",
  "First Career Conversation",
  "First Industry Exploration",
  "First Mentor Meeting",
  "First Professional Event",
  "First Job Shadow",
  "First Career Experiment",
  "First Business Idea",
  "First Customer Conversation",
  "First Mini Project",
  "First Professional Connection",
  "First Personal Pitch",
  "First Career Decision",
  "First Business Experiment",
];

export function FLFirsts() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Your FIRSTS become part of your journey.
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
          Throughout First Leap, you&apos;ll build a growing record of
          meaningful firsts. Your:
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {FIRSTS.map((f) => (
          <span
            key={f}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {f}
          </span>
        ))}
        <span className="rounded-full px-4 py-2 text-sm font-medium text-ink/40">
          And many more.
        </span>
      </Reveal>

      <Reveal delay={0.15} className="mx-auto mt-10 max-w-xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          Each one may seem small by itself. Together, they tell the story
          of someone who is no longer standing still.
        </p>
      </Reveal>
    </section>
  );
}
