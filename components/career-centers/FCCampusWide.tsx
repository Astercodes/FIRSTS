"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const PARTNERS = [
  "Career Services",
  "Academic Affairs",
  "Student Affairs",
  "Advising",
  "Experiential Learning",
  "Entrepreneurship Centers",
  "Residence Life",
  "Student Success",
  "Alumni Relations",
  "Workforce Programs",
  "Faculty",
  "Employers",
];

export function FCCampusWide() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Give faculty and campus partners a common framework.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Career readiness does not belong only to the career center.
          FIRSTS can create shared language across:
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {PARTNERS.map((p) => (
          <span
            key={p}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {p}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.15} className="mx-auto mt-10 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          Different departments can contribute to the student&apos;s
          development while working within a common framework.
        </p>
        <Link
          href="/for/institutions"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore Campus-Wide FIRSTS
        </Link>
      </Reveal>
    </section>
  );
}
