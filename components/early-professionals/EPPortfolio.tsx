"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const ITEMS = [
  "Worksheets",
  "Reflections",
  "Plans",
  "Projects",
  "Professional documents",
  "Goals",
  "Assessments",
  "Experiences",
  "Achievements",
  "Development milestones",
];

export function EPPortfolio() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Your work becomes evidence.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Don&apos;t just say you&apos;re developing. Keep a record of it.
          As you complete FIRSTS, save the outputs that show your
          progress. Your:
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {ITEMS.map((item) => (
          <span
            key={item}
            className="rounded-full border border-ink/10 bg-paper-dim px-4 py-2 text-sm font-medium text-ink/70"
          >
            {item}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.15} className="mx-auto mt-10 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          can become part of your growing FIRSTS portfolio. Over time, you
          build something much stronger than a list of claims.
        </p>
        <p className="mt-3 font-display text-lg font-semibold text-ink">
          You build evidence of becoming.
        </p>
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
