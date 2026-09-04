"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const BENEFITS = [
  "Structured personal and professional development",
  "Career and business exploration",
  "Guided FIRSTS",
  "Student progress tracking",
  "Mentoring",
  "Facilitation",
  "First Leap programming",
  "Career Center resources",
  "Business Center resources",
  "Portfolio development",
  "Institution-wide access",
];

const AUDIENCES = [
  "Your career center",
  "Student affairs",
  "Academic advising",
  "University leadership",
  "Faculty",
  "Entrepreneurship centers",
  "Student success teams",
  "Workforce and experiential-learning offices",
];

export function ISBringToSchool() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
          Want FIRSTS at your school too?
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          You can start independently and still help bring FIRSTS to your
          campus.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Maybe you believe other students at your institution would
          benefit from:
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {BENEFITS.map((b) => (
          <span
            key={b}
            className="rounded-full border border-ink/10 bg-paper-dim px-4 py-2 text-sm font-medium text-ink/70"
          >
            {b}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.15} className="mx-auto mt-8 max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-ink/40">
          You can introduce FIRSTS to
        </p>
        <div className="flex flex-wrap justify-center gap-2.5">
          {AUDIENCES.map((a) => (
            <span
              key={a}
              className="rounded-full border border-ink/10 bg-paper-dim px-4 py-2 text-sm font-medium text-ink/70"
            >
              {a}
            </span>
          ))}
        </div>
        <Link
          href="/request-demo"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Share FIRSTS With My School
        </Link>
      </Reveal>

      <Reveal delay={0.2} className="mx-auto mt-16 max-w-lg border-t border-ink/10 pt-16 text-center">
        <h3 className="font-display text-2xl font-semibold text-ink">
          What changes if my school becomes a partner later?
        </h3>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
          Your journey does not have to start over. FIRSTS is designed so
          your development remains connected to you. If your institution
          later becomes a participating partner, your existing journey,
          portfolio, and progress remain meaningful rather than forcing
          you to begin again.
        </p>
        <p className="mt-3 font-display text-lg font-semibold text-ink">
          Start now. Let the institution catch up later.
        </p>
        <Link
          href="/onboarding/independent"
          className="mt-8 inline-flex rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-ink/5"
        >
          Start Free
        </Link>
      </Reveal>
    </section>
  );
}
