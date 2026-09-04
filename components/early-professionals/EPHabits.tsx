"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const FIRST_JOB_FIRSTS = [
  "First professional team",
  "First manager",
  "First performance review",
  "First difficult colleague",
  "First major deadline",
  "First mistake at work",
  "First presentation",
  "First workplace conflict",
  "First project ownership",
  "First piece of critical feedback",
  "First salary negotiation",
  "First promotion conversation",
];

const SYSTEMS = [
  "Time Management",
  "Prioritization",
  "Habit Building",
  "Focus",
  "Goal Setting",
  "Personal Organization",
  "Consistency",
  "Accountability",
  "Self-Management",
  "Reflection",
  "Continuous Learning",
];

const EXAMPLES = [
  { title: "Time Management Matrix", body: "Separate what is urgent from what is important and make more intentional decisions about your time." },
  { title: "Habit Stacking Routine", body: "Build new behaviors into routines you already have instead of relying only on motivation." },
  { title: "Weekly Reflection", body: "Look at what worked, what didn't, what you learned, and what needs to change next." },
];

export function EPHabits() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Your first job is another beginning.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Getting hired doesn&apos;t mean development is finished. The
          first year of professional work introduces an entirely new set
          of firsts. Your:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {FIRST_JOB_FIRSTS.map((f) => (
          <span
            key={f}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {f}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.12} className="mx-auto mt-8 max-w-xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          FIRSTS helps you prepare for the person you need to become after
          the offer letter.
        </p>
      </Reveal>

      <Reveal delay={0.16} className="mx-auto mt-16 max-w-2xl border-t border-ink/10 pt-16 text-center">
        <h3 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Build the habits that make talent sustainable.
        </h3>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
          Knowing what to do and consistently doing it are different
          capabilities. Use FIRSTS to develop systems around:
        </p>
      </Reveal>

      <Reveal delay={0.2} className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {SYSTEMS.map((s) => (
          <span
            key={s}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {s}
          </span>
        ))}
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-3">
        {EXAMPLES.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-ink/10 bg-white p-6">
              <h4 className="font-display text-base font-semibold text-ink">
                {e.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                {e.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.25} className="mt-10 flex justify-center">
        <Link
          href="/dashboard/stage/four"
          className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Build Better Systems
        </Link>
      </Reveal>
    </section>
  );
}
