"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const FEEDBACK_FROM = [
  "Participants",
  "Lead facilitators",
  "Observers",
  "Facilitator coaches",
  "Program managers",
  "Institutional partners",
  "Self-reflection",
];

const REVIEW_QUESTIONS = [
  "Did participants understand the purpose?",
  "Did I explain the activity clearly?",
  "Who participated? Who did not?",
  "Did I talk too much?",
  "Did I allow enough reflection?",
  "Did I ask questions or give answers too quickly?",
  "How did I handle disagreement?",
  "Did participants leave with a clear next step?",
  "What would I change next time?",
];

const COMMUNITY_WAYS = [
  "Facilitator communities",
  "Practice labs",
  "Peer observation",
  "Resource sharing",
  "Case discussions",
  "Training sessions",
  "Office hours",
  "Facilitator circles",
  "Coaching",
  "Professional-development events",
  "Specialization communities",
];

export function FFFeedbackCommunity() {
  return (
    <>
      <section className="relative bg-paper-dim px-6 py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Get feedback that helps you improve.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
            Every session should teach the facilitator something too.
            Development can include feedback from:
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2.5">
          {FEEDBACK_FROM.map((f) => (
            <span
              key={f}
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
            >
              {f}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.16} className="mx-auto mt-8 max-w-2xl text-center">
          <p className="text-[15px] leading-relaxed text-ink/60">
            You may review:
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mx-auto mt-6 max-w-2xl space-y-2">
          {REVIEW_QUESTIONS.map((q) => (
            <p
              key={q}
              className="rounded-xl border border-ink/10 bg-white px-4 py-2.5 text-sm font-medium text-ink/70"
            >
              {q}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.3} className="mx-auto mt-8 max-w-lg text-center">
          <p className="font-display text-lg font-semibold text-ink">
            Facilitation gets stronger when reflection becomes part of
            the practice.
          </p>
        </Reveal>
      </section>

      <section className="relative bg-paper px-6 py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Join a facilitator community.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
            You should not have to develop alone. FIRSTS Facilitators can
            learn from other facilitators through:
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
          {COMMUNITY_WAYS.map((c) => (
            <span
              key={c}
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
            >
              {c}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.18} className="mx-auto mt-10 max-w-lg text-center">
          <p className="text-[15px] leading-relaxed text-ink/60">
            The difficult group you encounter next month may be
            something another facilitator has already learned how to
            navigate.
          </p>
          <p className="mt-2 font-display text-lg font-semibold text-ink">
            Build the craft together.
          </p>
          <Link
            href="/facilitator/lounge"
            className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Explore the Facilitator Community
          </Link>
        </Reveal>
      </section>
    </>
  );
}
