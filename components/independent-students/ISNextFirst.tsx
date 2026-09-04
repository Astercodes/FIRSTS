"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const NEEDS = [
  "Clarify your values.",
  "Write your first professional bio.",
  "Improve your LinkedIn profile.",
  "Prepare for an internship interview.",
  "Learn the STAR method.",
  "Build a networking plan.",
  "Have your first mentor conversation.",
  "Improve your time management.",
  "Prepare for your first career fair.",
  "Explore a business idea.",
  "Practice professional communication.",
  "Build your first portfolio.",
];

export function ISNextFirst() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          You don&apos;t have to finish everything before something
          becomes useful.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          One FIRST can solve a problem you have today. You might come to
          FIRSTS because you need to:
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {NEEDS.map((n) => (
          <span
            key={n}
            className="rounded-full border border-ink/10 bg-paper-dim px-4 py-2 text-sm font-medium text-ink/70"
          >
            {n}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.15} className="mx-auto mt-10 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          FIRSTS is not only something you &ldquo;complete.&rdquo; It is
          something you can{" "}
          <strong className="text-ink">
            return to whenever your next stage requires something new from
            you.
          </strong>
        </p>
        <Link
          href="/onboarding/independent"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Find My Next FIRST
        </Link>
      </Reveal>
    </section>
  );
}
