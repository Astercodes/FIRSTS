"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const ADVISOR_SIGNALS = [
  "Completion status",
  "Participation status",
  "Stage progress",
  "Module progress",
  "Cohort activity",
  "Inactivity indicators",
  "Milestone completion",
];

const PRIVATE_TOPICS = [
  "Values",
  "Strengths",
  "Weaknesses",
  "Goals",
  "Confidence",
  "Failures",
  "Personal experiences",
  "Career uncertainty",
  "Relationships",
  "Decision-making",
];

export function FCPrivacy() {
  return (
    <>
      <section className="relative bg-paper px-6 py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            A dashboard, not a firehose.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
            Your team needs useful signals, not hundreds of pages of
            student reflections. By default, advisors see progress
            information such as:
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
          {ADVISOR_SIGNALS.map((s) => (
            <span
              key={s}
              className="rounded-full border border-ink/10 bg-paper-dim px-4 py-2 text-sm font-medium text-ink/70"
            >
              {s}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-10 max-w-xl text-center">
          <p className="text-[15px] leading-relaxed text-ink/60">
            Students decide whether to share the underlying work
            connected to individual activities where sharing is
            available. That means your staff can know{" "}
            <span className="italic">
              &ldquo;This student has not progressed in three
              weeks&rdquo;
            </span>{" "}
            without automatically knowing{" "}
            <span className="italic">
              &ldquo;This is everything the student wrote in a personal
              reflection.&rdquo;
            </span>
          </p>
          <p className="mt-4 font-display text-lg font-semibold text-ink">
            Visibility where support is needed. Privacy where it matters.
          </p>
        </Reveal>
      </section>

      <section className="relative bg-paper-dim px-6 py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Keep student privacy intact.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
            Development requires enough privacy for honest reflection.
            Some FIRSTS ask students to think deeply about:
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
          {PRIVATE_TOPICS.map((t) => (
            <span
              key={t}
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
            >
              {t}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-10 max-w-lg text-center">
          <p className="text-[15px] leading-relaxed text-ink/60">
            Students should not feel that every answer they write becomes
            visible to institutional staff. FIRSTS is designed around a
            simple principle:
          </p>
          <p className="mt-3 font-display text-lg font-semibold text-ink">
            Your institution can support the journey without
            automatically owning the student&apos;s inner work.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
            Advisors receive progress visibility by default. Students
            control deeper sharing of their work where applicable.
          </p>
          <Link
            href="/institution"
            className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Read Our Privacy Approach
          </Link>
        </Reveal>
      </section>
    </>
  );
}
