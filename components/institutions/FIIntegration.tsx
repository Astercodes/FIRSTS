"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const PROGRAMS = [
  "First-year experience",
  "Orientation",
  "Career readiness programs",
  "General education",
  "Academic courses",
  "Advising",
  "Student success",
  "Internship preparation",
  "Experiential learning",
  "Leadership programs",
  "Residence life",
  "Honors programs",
  "Athletics",
  "Student organizations",
  "Entrepreneurship programs",
  "Graduate education",
  "Alumni engagement",
  "Workforce initiatives",
];

export function FIIntegration() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Connect FIRSTS to what your institution already does.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          FIRSTS does not need to become another isolated initiative.
          Integrate it into:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {PROGRAMS.map((p) => (
          <span
            key={p}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {p}
          </span>
        ))}
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
        <Reveal delay={0.14}>
          <div className="h-full rounded-2xl border border-ink/10 bg-white p-5">
            <h3 className="font-display text-sm font-semibold text-ink">
              Before a Career Fair
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
              Complete a professional introduction, employer research,
              and networking preparation First.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="h-full rounded-2xl border border-ink/10 bg-white p-5">
            <h3 className="font-display text-sm font-semibold text-ink">
              During the Career Fair
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
              Take a first professional connection.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.26}>
          <div className="h-full rounded-2xl border border-ink/10 bg-white p-5">
            <h3 className="font-display text-sm font-semibold text-ink">
              After the Career Fair
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
              Complete follow-up, reflection, and relationship-building
              FIRSTS.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.32} className="mx-auto mt-10 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          The event stops being a single afternoon.
        </p>
        <p className="mt-2 font-display text-lg font-semibold text-ink">
          It becomes part of a developmental pathway.
        </p>
        <Link
          href="/advisor/programming"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore Program Integration
        </Link>
      </Reveal>
    </section>
  );
}
