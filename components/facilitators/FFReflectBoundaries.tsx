"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const HELP_THEM = [
  "Slow down.",
  "Think.",
  "Notice patterns.",
  "Ask better questions.",
  "Challenge assumptions.",
  "Connect experiences.",
  "Identify inconsistencies.",
  "Recognize what they still do not know.",
  "Decide what deserves further exploration.",
];

const NOT_AUTOMATICALLY = [
  "Therapist",
  "Counselor",
  "Career advisor",
  "Financial advisor",
  "Attorney",
  "Mental-health professional",
  "Academic advisor",
  "Religious leader",
  "Parent",
  "Manager",
  "Personal decision-maker",
];

export function FFReflectBoundaries() {
  return (
    <>
      <section className="relative bg-paper-dim px-6 py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Help participants reflect, not perform.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
            The goal is not to produce the answer they think you want.
            Some FIRSTS involve personal reflection. Your role is not to
            grade someone&rsquo;s identity, values, dreams, or
            uncertainty. You help them:
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2.5">
          {HELP_THEM.map((h) => (
            <span
              key={h}
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
            >
              {h}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.16} className="mx-auto mt-8 max-w-lg text-center">
          <p className="font-display text-lg font-semibold text-ink">
            Facilitation should create honesty, not performance.
          </p>
        </Reveal>
      </section>

      <section className="relative bg-paper px-6 py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Know where your role ends.
          </h2>
          <p className="mt-5 font-display text-xl font-medium text-ink/80">
            Facilitators support development. They do not become
            everything.
          </p>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
            A facilitator is not automatically a:
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2.5">
          {NOT_AUTOMATICALLY.map((n) => (
            <span
              key={n}
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
            >
              {n}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.18} className="mx-auto mt-8 max-w-lg text-center">
          <p className="text-[15px] leading-relaxed text-ink/60">
            When a participant needs expertise or support beyond your
            role, you should know how to recognize it and connect them
            appropriately. Good facilitation includes knowing:
          </p>
          <p className="mt-3 font-display text-base font-semibold text-ink">
            When to help. When to listen. When to refer. When to
            escalate.
          </p>
          <Link
            href="/facilitator/training"
            className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Learn About Facilitator Boundaries
          </Link>
        </Reveal>
      </section>
    </>
  );
}
