"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const CONTRIBUTIONS = [
  "Business cases",
  "Technical challenges",
  "Research questions",
  "Operational problems",
  "Customer problems",
  "Data challenges",
  "Design briefs",
  "Marketing challenges",
  "Process-improvement opportunities",
  "Social-impact problems",
  "Innovation questions",
];

const RESPONSE = [
  "Understand the problem",
  "Ask questions",
  "Research",
  "Collaborate",
  "Develop a response",
  "Present their thinking",
  "Receive professional feedback",
  "Reflect on what they learned",
];

export function FEChallenges() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Bring real problems into development.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Students learn differently when the problem did not come from
          a textbook. Employers can contribute:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {CONTRIBUTIONS.map((c) => (
          <span
            key={c}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {c}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.18} className="mx-auto mt-8 max-w-2xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          Participants can then:
        </p>
      </Reveal>

      <Reveal delay={0.22} className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-2.5">
        {RESPONSE.map((r) => (
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
          Learning becomes closer to work.
        </p>
        <Link
          href="/request-demo?for=employers"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore Employer Challenges
        </Link>
      </Reveal>
    </section>
  );
}
