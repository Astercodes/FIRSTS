"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const COHORT_GROUPINGS = [
  "Program",
  "College",
  "Major",
  "Graduating class",
  "Course",
  "Residential community",
  "Athletic team",
  "Student organization",
  "Special initiative",
  "Career pathway",
];

export function FCTools() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Bring students in without creating another administrative
          burden.
        </h2>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-5xl gap-5 lg:grid-cols-3">
        <Reveal>
          <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6">
            <h3 className="font-display text-lg font-semibold text-ink">
              Roster Sync
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">
              Import or synchronize student rosters so participants enter
              the correct institutional environment. No repeated manual
              matching. No spreadsheets every semester.
            </p>
            <Link
              href="/institution/departments"
              className="mt-6 inline-flex justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-ink/85"
            >
              Learn About Roster Sync
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6">
            <h3 className="font-display text-lg font-semibold text-ink">
              Single Sign-On
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">
              Allow students to access FIRSTS using your institution&apos;s
              authentication environment where supported. Reduce password
              friction and help students move directly into the
              experience.
            </p>
            <Link
              href="/institution/settings"
              className="mt-6 inline-flex justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-ink/85"
            >
              Learn About SSO
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6">
            <h3 className="font-display text-lg font-semibold text-ink">
              Cohorts
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              Organize students by:
            </p>
            <div className="mt-3 flex flex-1 flex-wrap gap-1.5">
              {COHORT_GROUPINGS.map((g) => (
                <span
                  key={g}
                  className="rounded-full border border-ink/10 bg-paper-dim px-3 py-1 text-xs font-medium text-ink/60"
                >
                  {g}
                </span>
              ))}
            </div>
            <Link
              href="/advisor"
              className="mt-6 inline-flex justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-ink/85"
            >
              Explore Cohort Management
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
