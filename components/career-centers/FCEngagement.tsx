"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function FCEngagement() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Know who may need a nudge.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Silence is difficult to support when you cannot see it. When a
          student stops attending workshops, misses an appointment, or
          simply disengages, career centers often discover it late.
          FIRSTS can surface inactivity and stalled progress so your team
          can decide whether outreach is appropriate.
        </p>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-3">
        <Reveal>
          <div className="h-full rounded-2xl border border-ink/10 bg-white p-6 text-center">
            <p className="font-display text-3xl font-bold text-gradient-citrus">
              21 days
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              of no engagement may surface a student for attention.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="h-full rounded-2xl border border-ink/10 bg-white p-6 text-center">
            <p className="font-display text-lg font-semibold text-ink">
              Stalled cohorts
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              A cohort that consistently stalls at the same activity can
              signal a program-design problem.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="h-full rounded-2xl border border-ink/10 bg-white p-6 text-center">
            <p className="font-display text-lg font-semibold text-ink">
              Fast movers
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              Students moving quickly may be ready for a deeper challenge,
              mentor, internship, or next-stage experience.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mx-auto mt-10 max-w-lg text-center">
        <p className="font-display text-lg font-semibold text-ink">
          Don&apos;t wait until senior year to discover who disconnected.
        </p>
        <Link
          href="/advisor/reporting"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          See Student Engagement Tools
        </Link>
      </Reveal>
    </section>
  );
}
