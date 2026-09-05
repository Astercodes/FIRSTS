"use client";

import { Reveal } from "@/components/ui/Reveal";

const SITUATIONS = [
  "Some are still trying to understand themselves.",
  "Some are exploring careers.",
  "Some need help building a professional identity.",
  "Some are preparing for internships.",
  "Some are applying for jobs.",
  "Some have stopped engaging altogether.",
];

export function FCIntro() {
  return (
    <section className="relative bg-paper px-6 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          Career centers are expected to support thousands of students
          through career discovery, professional development, internship
          preparation, job search, and transition into work. But students
          do not all need the same thing at the same time.
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 max-w-2xl">
        <div className="space-y-2.5">
          {SITUATIONS.map((s) => (
            <p
              key={s}
              className="rounded-2xl border border-ink/10 bg-white px-5 py-3.5 text-sm font-medium text-ink/70"
            >
              {s}
            </p>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.14} className="mx-auto mt-10 max-w-xl text-center">
        <p className="text-lg font-medium leading-relaxed text-ink">
          FIRSTS gives career centers a structured student-development
          platform that helps students keep moving while giving your team
          the visibility to know where intervention matters most.
        </p>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          See participation. See progress. See where cohorts are
          stalling. Support students without reading every reflection
          they write.
        </p>
      </Reveal>
    </section>
  );
}
