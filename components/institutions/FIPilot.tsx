"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const PILOT_STARTS = [
  "A first-year seminar",
  "An undecided-student cohort",
  "An internship program",
  "A business school",
  "An engineering program",
  "A graduating class",
  "An entrepreneurship initiative",
  "A residence community",
  "A leadership program",
  "A career-readiness course",
];

export function FIPilot() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Start with 100 students if you need to.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Campus-wide does not have to mean day one. Pilot FIRSTS with:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {PILOT_STARTS.map((p) => (
          <span
            key={p}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {p}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.18} className="mx-auto mt-10 max-w-lg text-center">
        <p className="font-display text-lg font-semibold text-ink">
          Think institution-wide. Implement intelligently.
        </p>
      </Reveal>

      <Reveal delay={0.24} className="mx-auto mt-10 max-w-xl rounded-2xl border border-ink/10 bg-white p-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/40">
          What it could look like
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-ink/60">
          Three programs begin with a combined 240 students. One cohort
          follows a structured first-year pathway. Another uses FIRSTS
          for internship preparation. A third launches First Leap: Career
          for undecided students, while students interested in
          entrepreneurship explore the Business Center, faculty
          incorporate FIRSTS into coursework, advisors use progress
          information before appointments, alumni participate as
          mentors, and employers contribute career conversations and
          projects. The following year, new cohorts are added.
        </p>
        <p className="mt-5 font-display text-base font-semibold text-ink">
          FIRSTS becomes less like another program your institution runs,
          and more like infrastructure connecting the programs you
          already have.
        </p>
      </Reveal>

      <Reveal delay={0.3} className="mt-10 flex justify-center">
        <Link
          href="/request-demo?for=institutions"
          className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Request a Pilot Conversation
        </Link>
      </Reveal>
    </section>
  );
}
