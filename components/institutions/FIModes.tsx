"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const GUIDED = [
  "First-year programs",
  "Cohort initiatives",
  "Courses",
  "Student success programs",
  "Career readiness programs",
  "Leadership programs",
  "First Leap cohorts",
  "Institution-wide developmental requirements",
];

const FREE_EXPLORE = [
  "A senior may jump to interview preparation.",
  "A sophomore may explore careers.",
  "A graduate student may work on networking.",
  "A student launching a venture may enter the Business Center.",
  "A student starting an internship may focus on workplace readiness.",
  "A student rethinking their future may return to self-discovery.",
];

export function FIModes() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Let students develop in sequence, or meet the moment.
        </h2>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2">
        <Reveal>
          <h3 className="font-display text-lg font-semibold text-ink">
            Guided Mode
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/60">
            Students can follow a structured progression when they need a
            clear developmental pathway. This works well for:
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {GUIDED.map((g) => (
              <span
                key={g}
                className="rounded-full border border-ink/10 bg-white px-3.5 py-1.5 text-xs font-medium text-ink/70"
              >
                {g}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h3 className="font-display text-lg font-semibold text-ink">
            Free Explore Mode
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/60">
            Students can also move directly to what they need now.
          </p>
          <div className="mt-4 space-y-2">
            {FREE_EXPLORE.map((f) => (
              <p
                key={f}
                className="rounded-xl border border-ink/10 bg-white px-4 py-2.5 text-sm text-ink/70"
              >
                {f}
              </p>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.16} className="mx-auto mt-12 max-w-xl text-center">
        <p className="text-lg font-medium leading-relaxed text-ink">
          Structure when structure helps. Flexibility when relevance
          matters more.
        </p>
        <Link
          href="/development-areas"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore Pathway Design
        </Link>
      </Reveal>
    </section>
  );
}
