"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const SIGNALS = [
  "Who has started",
  "Who is active",
  "Who has completed specific FIRSTS",
  "Where students are slowing down",
  "Where cohorts are disengaging",
  "Which stages receive the most engagement",
  "Which areas students return to",
  "Who may need outreach",
  "How participation changes over time",
];

export function FCDashboard() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
          What your career center gets
        </p>
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          A clearer view of student engagement.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Your institutional dashboard helps you understand how students
          and cohorts are progressing without turning FIRSTS into a
          surveillance platform. See:
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {SIGNALS.map((s) => (
          <span
            key={s}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {s}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.15} className="mx-auto mt-10 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          You see the signals needed to support the student. Students
          retain control over the content of their personal work.
        </p>
        <Link
          href="/advisor"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore the Institutional Dashboard
        </Link>
      </Reveal>
    </section>
  );
}
