"use client";

import { Reveal } from "@/components/ui/Reveal";

const SETTINGS = [
  "Universities",
  "Schools",
  "Community organizations",
  "Workforce programs",
  "Youth programs",
  "Nonprofits",
  "Professional-development programs",
  "Employer initiatives",
  "Entrepreneurship programs",
  "Online cohorts",
  "First Leap programs",
  "Career centers",
  "Business centers",
  "Independent FIRSTS events",
];

const MODES = [
  "In person",
  "Online",
  "In classrooms",
  "In workshops",
  "In small groups",
  "In large cohorts",
  "In community spaces",
  "Inside organizations",
];

export function FFSettings() {
  return (
    <section className="relative bg-paper-dim px-6 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Different settings. Same developmental purpose.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Facilitators may serve within:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {SETTINGS.map((s) => (
          <span
            key={s}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {s}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.16} className="mx-auto mt-8 max-w-2xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          Sessions may happen:
        </p>
      </Reveal>

      <Reveal delay={0.2} className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-2.5">
        {MODES.map((m) => (
          <span
            key={m}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {m}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.28} className="mx-auto mt-10 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          The setting may change.
        </p>
        <p className="mt-2 font-display text-lg font-semibold text-ink">
          The purpose remains: help people engage intentionally with
          their development.
        </p>
      </Reveal>
    </section>
  );
}
