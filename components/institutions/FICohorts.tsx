"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const COHORTS = [
  "Majors",
  "Academic colleges",
  "Graduating classes",
  "Courses",
  "First-year students",
  "Transfer students",
  "International students",
  "Athletes",
  "Honors students",
  "Residence communities",
  "Leadership programs",
  "Internship programs",
  "Entrepreneurship programs",
  "Student organizations",
  "Workforce initiatives",
  "First Leap programs",
  "Special populations",
];

export function FICohorts() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Create cohort experiences.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          One platform can support many institutional programs. Build
          cohorts around:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {COHORTS.map((c) => (
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
          Then monitor development at the level that is useful to your
          institution.
        </p>
        <Link
          href="/advisor/cohorts"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore Cohort Management
        </Link>
      </Reveal>
    </section>
  );
}
