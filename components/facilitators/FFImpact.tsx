"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const METRICS = [
  "Sessions facilitated",
  "Participants reached",
  "Cohorts supported",
  "FIRSTS delivered",
  "Participant feedback",
  "Repeat facilitation",
  "Specializations earned",
  "Training completed",
  "Programs supported",
  "Facilitation hours",
  "Milestones",
  "Development goals",
];

const QUESTIONS = [
  "Who have I served?",
  "What have I learned?",
  "How have I improved?",
  "What am I qualified to lead next?",
];

export function FFImpact() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Make an impact you can actually see.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Your facilitator dashboard may eventually help you understand:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {METRICS.map((m) => (
          <span
            key={m}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {m}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.2} className="mx-auto mt-8 max-w-xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          You should be able to answer:
        </p>
      </Reveal>

      <Reveal delay={0.24} className="mx-auto mt-6 max-w-xl space-y-2">
        {QUESTIONS.map((q) => (
          <p key={q} className="font-display text-base font-semibold text-ink">
            {q}
          </p>
        ))}
      </Reveal>

      <Reveal delay={0.3} className="mt-10 flex justify-center">
        <Link
          href="/facilitator"
          className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore Facilitator Impact
        </Link>
      </Reveal>
    </section>
  );
}
