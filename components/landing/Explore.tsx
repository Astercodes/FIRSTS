"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const EXPLORE_ITEMS = [
  "Career Spotlights",
  "Industry Explorations",
  "Professional Stories",
  "Mentor Conversations",
  "Challenges & Activities",
  "Projects",
  "Workplace & Business Exposure",
  "Reflection",
];

const CYCLE = ["Discover", "Try", "Reflect", "Learn", "Develop", "Try Again"];

export function Explore() {
  return (
    <section id="explore" className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Explore before you decide.
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
        {EXPLORE_ITEMS.map((item) => (
          <div
            key={item}
            className="flex items-center justify-center rounded-2xl border border-ink/10 bg-white px-4 py-6 text-center text-sm font-medium text-ink/70"
          >
            {item}
          </div>
        ))}
      </Reveal>

      <Reveal delay={0.15} className="mt-10 flex justify-center">
        <Link
          href="/onboarding"
          className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Start Exploring
        </Link>
      </Reveal>

      <Reveal delay={0.2} className="mx-auto mt-24 max-w-3xl text-center">
        <h3 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          From &ldquo;I think I might like this&rdquo; to &ldquo;I&apos;ve
          actually tried it.&rdquo;
        </h3>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
          {CYCLE.map((step, i) => (
            <span key={step} className="flex items-center gap-2">
              <span className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink">
                {step}
              </span>
              {i < CYCLE.length - 1 && (
                <span className="text-ink/30" aria-hidden>
                  &rarr;
                </span>
              )}
            </span>
          ))}
        </div>

        <Link
          href="/onboarding"
          className="mt-9 inline-flex rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-ink/5"
        >
          Find Something to Try
        </Link>
      </Reveal>
    </section>
  );
}
