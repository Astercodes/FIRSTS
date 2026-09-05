"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { FIRSTS, STAGES } from "@/lib/dashboardData";

const STATS = [
  {
    value: `${FIRSTS.length}`,
    title: "Guided FIRSTS",
    body: "Structured developmental activities, experiences, reflections, tools, and milestones.",
  },
  {
    value: `${STAGES.length}`,
    title: "Development Stages",
    body: "A broad pathway spanning personal, professional, career, workplace, and business development.",
  },
  {
    value: "2",
    title: "Career + Business",
    body: "Support students preparing to enter organizations and students preparing to build something of their own.",
  },
  {
    value: "1",
    title: "One Institutional View",
    body: "Understand engagement, progress, participation, and patterns across programs and cohorts.",
  },
];

export function FIStats() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          One development ecosystem. Every student.
        </h2>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-ink/10 bg-white p-6">
              <p className="font-display text-3xl font-bold text-gradient-citrus">
                {s.value}
              </p>
              <h3 className="mt-3 font-display text-sm font-semibold text-ink">
                {s.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                {s.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-10 flex justify-center">
        <Link
          href="/dashboard"
          className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore the Platform
        </Link>
      </Reveal>
    </section>
  );
}
