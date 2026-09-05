"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const OFFICES = [
  "Academic Affairs",
  "Student Affairs",
  "Career Services",
  "Academic Advising",
  "Student Success",
  "Entrepreneurship & Innovation",
  "Experiential Learning",
  "Residence Life",
  "Leadership Development",
  "Alumni Relations",
  "Financial Wellness",
  "International Student Programs",
  "Workforce Development",
  "Faculty",
  "Employers",
];

export function FIPartnerships() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Give different departments a shared language.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Student development does not belong to one office. FIRSTS can
          connect:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {OFFICES.map((o) => (
          <span
            key={o}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {o}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.18} className="mx-auto mt-10 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          Each may contribute something different. FIRSTS provides a
          framework that helps those contributions connect around the
          student.
        </p>
        <Link
          href="/request-demo?for=institutions"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore Campus Partnerships
        </Link>
      </Reveal>
    </section>
  );
}
