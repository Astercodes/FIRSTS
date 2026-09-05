"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const INCLUDES = [
  "Sponsored student access",
  "Career exposure",
  "Mentoring",
  "Employer challenges",
  "First Leap involvement",
  "Projects",
  "Internships",
  "Apprenticeships",
  "Workplace visits",
  "Role-specific preparation",
  "IPFS pathways",
  "Talent discovery",
  "Hiring opportunities",
];

const FLOW = [
  "Awareness",
  "Exposure",
  "Development",
  "Experience",
  "Evidence",
  "Opportunity",
];

export function FEPipeline() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Build a stronger talent pipeline.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Do more than wait for applications. Employers can partner with
          FIRSTS to create a developmental pipeline before recruiting
          begins. A partnership might include:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {INCLUDES.map((i) => (
          <span
            key={i}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {i}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.18} className="mx-auto mt-10 max-w-xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          This creates a longer relationship with potential talent, from:
        </p>
      </Reveal>

      <Reveal delay={0.22} className="mx-auto mt-5 flex max-w-xl flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm font-semibold text-ink">
        {FLOW.map((f, i) => (
          <span key={f} className="flex items-center gap-2">
            <span className="rounded-full border border-ink/10 bg-white px-3.5 py-1.5">
              {f}
            </span>
            {i < FLOW.length - 1 && <span className="text-ink/30">&rarr;</span>}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.3} className="mt-10 flex justify-center">
        <Link
          href="/employer/pipeline"
          className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Build a Talent Pipeline
        </Link>
      </Reveal>
    </section>
  );
}
