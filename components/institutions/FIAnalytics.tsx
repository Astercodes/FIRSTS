"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const SIGNALS = [
  "Who has started",
  "Who is progressing",
  "Who has gone inactive",
  "Where students are stalling",
  "Which stages receive the most engagement",
  "How cohorts compare",
  "How participation changes over time",
  "Which developmental areas students return to",
  "Where additional programming may be needed",
  "Which groups may benefit from targeted outreach",
];

export function FIAnalytics() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          See who is engaging. See where support is needed.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Institutional dashboards turn participation into useful
          signals. Understand:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 max-w-2xl space-y-2">
        {SIGNALS.map((s) => (
          <p
            key={s}
            className="rounded-xl border border-ink/10 bg-white px-4 py-2.5 text-sm font-medium text-ink/70"
          >
            {s}
          </p>
        ))}
      </Reveal>

      <Reveal delay={0.16} className="mx-auto mt-10 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          Your teams can respond more intentionally instead of waiting
          until problems surface at graduation.
        </p>
        <Link
          href="/advisor"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore Institutional Analytics
        </Link>
      </Reveal>
    </section>
  );
}
