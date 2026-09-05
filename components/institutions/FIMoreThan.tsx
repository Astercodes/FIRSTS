"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const TRAITS = [
  "Know themselves",
  "Communicate",
  "Think",
  "Build relationships",
  "Develop habits",
  "Work with others",
  "Lead",
  "Navigate organizations",
  "Understand money",
  "Explore careers",
  "Explore business",
  "Make decisions",
  "Build evidence",
  "Take initiative",
  "Adapt",
];

export function FIMoreThan() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          More than career readiness.
        </h2>
        <p className="mt-5 font-display text-xl font-medium text-ink/80">
          Build the person behind the outcome.
        </p>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Employability matters. But students need more than the ability
          to submit a resume. They need to:
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {TRAITS.map((t) => (
          <span
            key={t}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {t}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.16} className="mx-auto mt-10 max-w-xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          And continue developing after graduation. FIRSTS gives your
          institution a structured way to support that broader journey.
        </p>
        <Link
          href="/development-areas"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore the FIRSTS Framework
        </Link>
      </Reveal>
    </section>
  );
}
