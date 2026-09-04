"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const FIRSTS = [
  "First Professional Resume",
  "First LinkedIn Profile",
  "First Professional Bio",
  "First Networking Event",
  "First Mentor",
  "First Informational Interview",
  "First Tailored Application",
  "First Professional Interview",
  "First Job Offer",
  "First Salary Negotiation",
  "First Day at Work",
  "First Professional Presentation",
  "First Major Project",
  "First Performance Review",
  "First Professional Failure",
  "First Promotion",
  "First Leadership Responsibility",
  "First Career Pivot",
];

export function EPFirsts() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Build your professional FIRSTS.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Your early career is full of milestones that deserve to be
          recognized.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {FIRSTS.map((f) => (
          <span
            key={f}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {f}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.15} className="mx-auto mt-10 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          Every first becomes part of the evidence that you are
          developing.
        </p>
        <Link
          href="/dashboard/portfolio"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          View My Professional FIRSTS
        </Link>
      </Reveal>
    </section>
  );
}
