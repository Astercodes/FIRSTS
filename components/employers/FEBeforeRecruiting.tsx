"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const WAYS = [
  "Career conversations",
  "Industry panels",
  "Professional profiles",
  "Mentoring",
  "Job shadowing",
  "Workplace visits",
  "Case studies",
  "Projects",
  "Challenges",
  "Mock interviews",
  "Career events",
  "Externships",
  "Internships",
  "Apprenticeships",
  "Professional feedback",
];

export function FEBeforeRecruiting() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          FIRSTS can begin long before recruiting.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Build relationships with talent before they submit an
          application. Employers do not have to participate only at the
          hiring stage. Your organization can help students and early
          professionals understand the real world of work through:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {WAYS.map((w) => (
          <span
            key={w}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {w}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.18} className="mx-auto mt-10 max-w-lg text-center">
        <p className="font-display text-lg font-semibold text-ink">
          Employer engagement becomes part of development, not only the
          final transaction.
        </p>
        <Link
          href="/request-demo?for=employer-sponsor"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Become an Employer Partner
        </Link>
      </Reveal>
    </section>
  );
}
