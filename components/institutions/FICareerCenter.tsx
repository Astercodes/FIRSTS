"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const OFFERINGS = [
  "Career exploration",
  "Industry exploration",
  "Role discovery",
  "Professional profiles",
  "Career comparisons",
  "Mentorship",
  "Networking",
  "Job shadowing",
  "Projects",
  "Career experiences",
  "Internship preparation",
  "Resume development",
  "LinkedIn development",
  "Portfolio building",
  "Interview preparation",
  "Opportunity readiness",
  "Workplace preparation",
  "Career growth",
];

const QUESTIONS = [
  "What careers exist?",
  "Where might I fit?",
  "How do I prepare?",
  "What should I experience first?",
  "How do I pursue an opportunity?",
  "How do I succeed once I get there?",
];

export function FICareerCenter() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          A Career Center that goes beyond job postings.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Help students explore, prepare, experience, and navigate
          professional life. The FIRSTS Career Center gives students a
          dedicated environment for:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {OFFERINGS.map((o) => (
          <span
            key={o}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {o}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.16} className="mx-auto mt-10 max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/40">
          Students can ask
        </p>
        <div className="mt-4 space-y-2">
          {QUESTIONS.map((q) => (
            <p key={q} className="font-display text-lg font-semibold text-ink">
              {q}
            </p>
          ))}
        </div>
        <Link
          href="/first-leap#career"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore the Career Center
        </Link>
      </Reveal>
    </section>
  );
}
