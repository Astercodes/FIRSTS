"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const YEARS = [
  { title: "Year One", body: "Self-discovery, values, strengths, career exposure" },
  { title: "Year Two", body: "Career exploration, relationships, communication, early experience" },
  { title: "Year Three", body: "Professional identity, networking, internships, workplace readiness" },
  { title: "Year Four", body: "Applications, interviews, transition, professional habits" },
];

const FREE_EXPLORE_EXAMPLES = [
  "An internship applicant may jump to interview preparation.",
  "A senior may go directly to professional branding.",
  "A student considering entrepreneurship may enter the Business Center.",
  "A student reconsidering their major may return to self-discovery.",
];

export function FCPathways() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Give different students different pathways.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          A first-year student and a graduating senior should not be
          forced through identical experiences. FIRSTS can support both
          structured progression and flexible exploration.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-10 max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-berry-burst">
          Guided Pathways
        </p>
        <p className="mt-2 text-sm text-ink/60">
          Institutions can encourage students through a defined sequence.
        </p>
      </Reveal>

      <div className="mx-auto mt-6 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {YEARS.map((y, i) => (
          <Reveal key={y.title} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-ink/10 bg-white p-5">
              <h3 className="font-display text-sm font-semibold text-ink">
                {y.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                {y.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mx-auto mt-14 max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-berry-burst">
          Free Explore Mode
        </p>
        <p className="mt-2 text-sm text-ink/60">
          Students who already know what they need can move directly to
          the relevant FIRSTS.
        </p>
      </Reveal>

      <Reveal delay={0.24} className="mx-auto mt-6 max-w-2xl">
        <div className="space-y-2">
          {FREE_EXPLORE_EXAMPLES.map((e) => (
            <p
              key={e}
              className="rounded-2xl border border-ink/10 bg-white px-5 py-3 text-sm text-ink/70"
            >
              {e}
            </p>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.28} className="mx-auto mt-10 max-w-lg text-center">
        <p className="font-display text-lg font-semibold text-ink">
          Structure without unnecessary restriction.
        </p>
        <Link
          href="/development-areas"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore Pathway Options
        </Link>
      </Reveal>
    </section>
  );
}
