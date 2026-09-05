"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const STILL_MATTERS = [
  "Your advisors still matter.",
  "Your employer relationships still matter.",
  "Your workshops still matter.",
  "Your career fairs still matter.",
  "Your alumni still matter.",
  "Your campus relationships still matter.",
];

const START_WITH = [
  "One major",
  "One class year",
  "One academic program",
  "One first-year cohort",
  "One graduating cohort",
  "One internship-preparation initiative",
  "One First Leap cohort",
  "One entrepreneurship initiative",
];

export function FCPartnership() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
          Built for partnership, not replacement
        </p>
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          FIRSTS should strengthen what your career center already does.
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-8 max-w-2xl">
        <div className="space-y-2">
          {STILL_MATTERS.map((s) => (
            <p key={s} className="text-center text-sm text-ink/70">
              {s}
            </p>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.15} className="mx-auto mt-8 max-w-lg text-center">
        <p className="font-display text-lg font-semibold text-ink">
          Your career center brings the expertise.
        </p>
        <p className="mt-1 font-display text-lg font-semibold text-ink">
          FIRSTS helps extend its reach.
        </p>
        <Link
          href="/request-demo?for=career-centers"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Talk to Us About Your Campus
        </Link>
      </Reveal>

      <Reveal delay={0.2} className="mx-auto mt-16 max-w-xl border-t border-ink/10 pt-16 text-center">
        <h3 className="font-display text-2xl font-semibold text-ink">
          Start with one cohort, or think institution-wide.
        </h3>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
          You do not have to begin everywhere. Start with:
        </p>
      </Reveal>

      <Reveal delay={0.25} className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-2.5">
        {START_WITH.map((s) => (
          <span
            key={s}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {s}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.3} className="mx-auto mt-8 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          Then learn. Measure. Improve. Expand.
        </p>
        <Link
          href="/request-demo?for=career-centers"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Request a Demo
        </Link>
      </Reveal>
    </section>
  );
}
