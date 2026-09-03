"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const ITEMS = [
  "What the industry does",
  "Who it serves",
  "How it creates value",
  "Major problems it solves",
  "Types of organizations within it",
  "How the industry is changing",
  "Careers within the industry",
  "Skills in demand",
  "Emerging opportunities",
  "Professionals working within it",
];

export function CCIndustries() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Explore industries.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          A role tells you what someone does. An industry tells you where
          that work creates value. A Business Analyst in healthcare may
          encounter very different problems from a Business Analyst in
          banking. A Software Engineer working in education technology may
          experience a different environment from one working in aerospace.
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
          Explore industries to understand:
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {ITEMS.map((item) => (
          <span
            key={item}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {item}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.15} className="mt-10 flex justify-center">
        <Link
          href="/onboarding"
          className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore Industries
        </Link>
      </Reveal>
    </section>
  );
}
