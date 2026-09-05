"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const CAREER_STEPS = [
  "Understand themselves",
  "Explore careers",
  "Explore industries",
  "Meet professionals",
  "Gain exposure",
  "Try career-related experiences",
  "Reflect",
  "Compare possibilities",
  "Narrow their options",
  "Choose a direction",
  "Build a next-step roadmap",
];

const BUSINESS_STEPS = [
  "Explore themselves as builders",
  "Learn to recognize problems",
  "Investigate opportunities",
  "Explore business paths",
  "Meet entrepreneurs",
  "Understand customers",
  "Generate ideas",
  "Run early experiments",
  "Reflect on evidence",
  "Choose a direction worth pursuing",
  "Build a next-step roadmap",
];

export function FIFirstLeap() {
  return (
    <section className="relative overflow-hidden bg-mesh-dark px-6 py-28 text-paper">
      <div className="noise-layer" aria-hidden />

      <Reveal className="relative mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--lime-zest)]">
          Bring First Leap to your institution
        </p>
        <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Discover direction before demanding a decision.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-paper/65">
          Students are often expected to choose majors, careers, graduate
          programs, or entrepreneurial directions before they have enough
          exposure to make an informed decision. First Leap is the guided
          discovery and development program delivered through FIRSTS, and
          it moves participants through Discover, Explore, Experience,
          Reflect, Decide, and Leap, with support from trained First Leap
          Facilitators and Mentors.
        </p>
      </Reveal>

      <div className="relative mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
            <h3 className="font-display text-lg font-semibold">
              First Leap: Career
            </h3>
            <p className="mt-1.5 text-sm text-paper/60">
              For students exploring professional directions.
            </p>
            <ul className="mt-4 space-y-1.5">
              {CAREER_STEPS.map((s) => (
                <li key={s} className="text-sm text-paper/70">
                  {s}
                </li>
              ))}
            </ul>
            <Link
              href="/first-leap#career"
              className="mt-6 inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-paper/90 backdrop-blur transition-colors hover:border-white/40 hover:bg-white/5"
            >
              Explore First Leap: Career
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="h-full rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
            <h3 className="font-display text-lg font-semibold">
              First Leap: Business
            </h3>
            <p className="mt-1.5 text-sm text-paper/60">
              For students exploring entrepreneurship and possible
              business directions.
            </p>
            <ul className="mt-4 space-y-1.5">
              {BUSINESS_STEPS.map((s) => (
                <li key={s} className="text-sm text-paper/70">
                  {s}
                </li>
              ))}
            </ul>
            <Link
              href="/first-leap#business"
              className="mt-6 inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-paper/90 backdrop-blur transition-colors hover:border-white/40 hover:bg-white/5"
            >
              Explore First Leap: Business
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
