"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const FIRSTS = [
  "First Career Assessment",
  "First Career Profile",
  "First Industry Exploration",
  "First Career Comparison",
  "First Career Conversation",
  "First Professional Connection",
  "First Mentor Meeting",
  "First Career Event",
  "First Workplace Visit",
  "First Job Shadow",
  "First Career Challenge",
  "First Professional Project",
  "First Resume",
  "First LinkedIn Profile",
  "First Portfolio",
  "First Informational Interview",
  "First Internship Application",
  "First Interview",
  "First Internship",
  "First Professional Reference",
  "First Job Offer",
];

export function CCFirsts() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Build your Career FIRSTS.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Every career has a beginning. You don&apos;t need to wait until
          your first full-time job to start building professional
          experience. Your career journey can begin with smaller firsts.
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
          Every first gives you something you didn&apos;t have before:
          knowledge, experience, evidence, a relationship, a skill,
          confidence, or greater clarity.
        </p>
        <Link
          href="/dashboard/portfolio"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          View My Career FIRSTS
        </Link>
      </Reveal>
    </section>
  );
}
