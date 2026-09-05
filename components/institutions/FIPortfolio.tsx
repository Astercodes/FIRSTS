"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const CONTENTS = [
  "Reflections",
  "Professional documents",
  "Projects",
  "Plans",
  "Experiences",
  "Skills",
  "Assessments",
  "Career exploration",
  "Business exploration",
  "Achievements",
  "Milestones",
  "Goals",
  "Progress",
];

const USES = [
  "Advising",
  "Mentoring",
  "Internship preparation",
  "Job applications",
  "Interviews",
  "Leadership development",
  "Graduate-school preparation",
  "Business building",
  "Professional development",
];

export function FIPortfolio() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Give every student a portable development portfolio.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Development should leave evidence behind. As students complete
          FIRSTS, they can build a record of:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {CONTENTS.map((c) => (
          <span
            key={c}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {c}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.16} className="mx-auto mt-8 max-w-2xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          This gives students something they can use in:
        </p>
      </Reveal>

      <Reveal delay={0.2} className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {USES.map((u) => (
          <span
            key={u}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {u}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.26} className="mx-auto mt-10 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          The goal is not simply to claim readiness.
        </p>
        <p className="mt-2 font-display text-lg font-semibold text-ink">
          The goal is to build evidence of development.
        </p>
        <Link
          href="/dashboard/portfolio"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore Student Portfolios
        </Link>
      </Reveal>
    </section>
  );
}
