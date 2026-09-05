"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const FIRSTS_SESSIONS = [
  "Self-discovery sessions",
  "Career-readiness workshops",
  "Professional-development sessions",
  "Communication activities",
  "Mindset and productivity sessions",
  "Leadership experiences",
  "Business-development activities",
  "Reflection sessions",
  "Portfolio workshops",
  "Cohort development experiences",
];

export function FFChooseTrack() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Choose how you want to facilitate.
        </h2>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-ink/10 bg-white p-6">
            <h3 className="font-display text-lg font-semibold text-ink">
              FIRSTS Facilitator
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              Lead selected FIRSTS activities, workshops, development
              sessions, and cohort experiences across the broader FIRSTS
              platform. You may facilitate:
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {FIRSTS_SESSIONS.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-ink/10 bg-paper-dim px-3 py-1 text-xs font-medium text-ink/70"
                >
                  {s}
                </span>
              ))}
            </div>
            <Link
              href="/facilitator/training"
              className="mt-6 inline-flex rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-paper-dim"
            >
              Explore FIRSTS Facilitation
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="h-full rounded-2xl border border-ink/10 bg-white p-6">
            <h3 className="font-display text-lg font-semibold text-ink">
              First Leap Facilitator
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              Guide participants through the structured First Leap
              discovery journey. First Leap Facilitators receive
              additional preparation because the role involves helping
              participants move through Discover, Explore, Experience,
              Reflect, Decide, and Leap.
            </p>
            <p className="mt-4 text-sm font-semibold text-ink">
              First Leap: Career
            </p>
            <p className="text-sm text-ink/60">
              Participants exploring possible professional directions.
            </p>
            <p className="mt-3 text-sm font-semibold text-ink">
              First Leap: Business
            </p>
            <p className="text-sm text-ink/60">
              Participants exploring entrepreneurship and possible
              business directions.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink/60">
              First Leap Facilitators do not choose a participant&rsquo;s
              future. They help participants engage deeply enough with
              themselves, possibilities, experiences, and evidence to
              make better decisions.
            </p>
            <Link
              href="/first-leap"
              className="mt-6 inline-flex rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-paper-dim"
            >
              Explore First Leap Facilitation
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
