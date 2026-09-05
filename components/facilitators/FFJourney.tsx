"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const MILESTONES = [
  "First Facilitation Training",
  "First Observed Session",
  "First Co-Facilitation",
  "First Session Opening",
  "First Difficult Group Moment",
  "First Participant Breakthrough",
  "First Solo Session",
  "First Participant Feedback",
  "First Facilitator Coaching Session",
  "First Stage Certification",
  "First First Leap Cohort",
  "First 100 Participants Reached",
  "First New Facilitator Mentored",
  "First Facilitator Training Delivered",
];

const RECORD_OF = [
  "Training",
  "Specializations",
  "Sessions led",
  "Programs supported",
  "Feedback",
  "Certifications",
  "Experience",
  "Leadership",
  "Impact",
];

export function FFJourney() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Build your own FIRSTS as a facilitator.
        </h2>
        <p className="mt-5 font-display text-xl font-medium text-ink/80">
          Facilitators are developing too.
        </p>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Your journey may include:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {MILESTONES.map((m) => (
          <span
            key={m}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {m}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.18} className="mx-auto mt-8 max-w-2xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          Your facilitator profile can become a record of:
        </p>
      </Reveal>

      <Reveal delay={0.22} className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-2.5">
        {RECORD_OF.map((r) => (
          <span
            key={r}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {r}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.3} className="mx-auto mt-10 max-w-lg text-center">
        <p className="font-display text-lg font-semibold text-ink">
          The people helping others develop should have a visible
          development journey of their own.
        </p>
        <Link
          href="/facilitator/profile"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          View the Facilitator Journey
        </Link>
      </Reveal>
    </section>
  );
}
