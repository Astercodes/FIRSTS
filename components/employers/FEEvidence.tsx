"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const ADJECTIVES = [
  "Strategic.",
  "Collaborative.",
  "Driven.",
  "Organized.",
  "Adaptable.",
  "Leadership-oriented.",
];

const QUESTIONS = [
  "What did you actually do?",
  "What happened?",
  "What did you learn?",
  "How did you think?",
  "How did you respond?",
  "What evidence supports the claim?",
];

const PORTFOLIO_CONTENTS = [
  "Strength inventories",
  "Values audits",
  "Career exploration",
  "Professional brand narratives",
  "Goal sheets",
  "STAR interview stories",
  "Projects",
  "Reflections",
  "Professional communication exercises",
  "Career comparisons",
  "Business experiments",
  "Leadership development",
  "Workplace-readiness activities",
  "Mentoring experiences",
  "Networking milestones",
];

export function FEEvidence() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Evidence behind the resume.
        </h2>
        <p className="mt-5 font-display text-xl font-medium text-ink/80">
          Go beyond adjectives.
        </p>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Candidates often describe themselves as:
        </p>
      </Reveal>

      <Reveal delay={0.06} className="mx-auto mt-6 flex max-w-xl flex-wrap justify-center gap-2.5">
        {ADJECTIVES.map((a) => (
          <span
            key={a}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium italic text-ink/60"
          >
            {a}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.12} className="mx-auto mt-8 max-w-2xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          But employers still need to understand:
        </p>
      </Reveal>

      <Reveal delay={0.16} className="mx-auto mt-6 max-w-2xl space-y-2">
        {QUESTIONS.map((q) => (
          <p
            key={q}
            className="rounded-xl border border-ink/10 bg-white px-4 py-2.5 text-sm font-medium text-ink/70"
          >
            {q}
          </p>
        ))}
      </Reveal>

      <Reveal delay={0.22} className="mx-auto mt-10 max-w-2xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          FIRSTS helps participants build real artifacts and reflections
          behind their professional story. Depending on what they
          complete, a FIRSTS portfolio may include:
        </p>
      </Reveal>

      <Reveal delay={0.28} className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {PORTFOLIO_CONTENTS.map((p) => (
          <span
            key={p}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {p}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.34} className="mx-auto mt-10 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          The resume makes the claim.
        </p>
        <p className="mt-2 font-display text-lg font-semibold text-ink">
          The portfolio helps start the conversation behind it.
        </p>
        <Link
          href="/employer/portfolios"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Preview a FIRSTS Portfolio
        </Link>
      </Reveal>
    </section>
  );
}
