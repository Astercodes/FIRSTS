"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const CONTRIBUTIONS = [
  "Career conversations",
  "Industry insights",
  "Job shadowing",
  "Projects",
  "Challenges",
  "Simulations",
  "Mentors",
  "Mock interviews",
  "Case studies",
  "Internships",
  "Apprenticeships",
  "Externships",
  "Professional events",
  "Workplace exposure",
];

export function FIEmployers() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Bring employers closer to student development.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Employer engagement can begin before recruiting. Organizations
          can contribute:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {CONTRIBUTIONS.map((c) => (
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
          Eventually, employer involvement can connect learning, practice,
          evidence, experience, and opportunity.
        </p>
        <Link
          href="/for/employers"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore Employer Partnerships
        </Link>
      </Reveal>
    </section>
  );
}
