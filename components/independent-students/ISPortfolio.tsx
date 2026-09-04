"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const INCLUDES = [
  "Reflections",
  "Assessments",
  "Professional documents",
  "Plans",
  "Projects",
  "Career exploration",
  "Business exploration",
  "Goals",
  "Skills",
  "Experiences",
  "Achievements",
  "FIRSTS completed",
  "Development milestones",
];

const USES = [
  "Internship preparation",
  "Job applications",
  "Interviews",
  "Mentor conversations",
  "Advising conversations",
  "Career planning",
  "Graduate-school preparation",
  "Professional development",
];

export function ISPortfolio() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Build a portfolio that belongs to you.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Your development should not disappear into assignments you
          never see again. As you complete FIRSTS, you can build a
          growing record of the work behind your development. Your
          portfolio may include:
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {INCLUDES.map((item) => (
          <span
            key={item}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {item}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.15} className="mx-auto mt-10 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          Over time, your portfolio becomes more than a collection of
          worksheets.
        </p>
        <p className="mt-2 font-display text-lg font-semibold text-ink">
          It becomes evidence of how you have developed.
        </p>
      </Reveal>

      <Reveal delay={0.2} className="mx-auto mt-8 max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-ink/40">
          Use it in
        </p>
        <div className="flex flex-wrap justify-center gap-2.5">
          {USES.map((u) => (
            <span
              key={u}
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
            >
              {u}
            </span>
          ))}
        </div>
        <Link
          href="/dashboard/portfolio"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          View My Portfolio
        </Link>
      </Reveal>
    </section>
  );
}
