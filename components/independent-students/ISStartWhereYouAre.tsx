"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const SCENARIOS = [
  "Maybe you are a first-year student trying to understand yourself.",
  "Maybe you are choosing a major.",
  "Maybe you are preparing for your first internship.",
  "Maybe you are already applying for jobs.",
  "Maybe you want to explore entrepreneurship.",
  "Maybe you are graduating soon and feel less prepared than you expected.",
];

export function ISStartWhereYouAre() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Start where you are.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          There is no single correct place to begin.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-8 max-w-2xl">
        <div className="space-y-2.5">
          {SCENARIOS.map((s) => (
            <p
              key={s}
              className="rounded-2xl border border-ink/10 bg-white px-5 py-3.5 text-sm font-medium text-ink/70"
            >
              {s}
            </p>
          ))}
        </div>
        <p className="mt-6 text-center text-[15px] leading-relaxed text-ink/60">
          Maybe you simply want to develop intentionally beyond the
          classroom. FIRSTS lets you choose how you move.
        </p>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-2">
        <Reveal>
          <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6">
            <h3 className="font-display text-base font-semibold text-ink">
              Guided Mode
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">
              Follow the pathway in sequence and allow each stage to build
              on the one before it.
            </p>
            <Link
              href="/onboarding/independent"
              className="mt-6 inline-flex justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-ink/85"
            >
              Start the Guided Pathway
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6">
            <h3 className="font-display text-base font-semibold text-ink">
              Free Explore Mode
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">
              Jump directly to the stages, FIRSTS, tools, and development
              areas most relevant to you right now.
            </p>
            <Link
              href="/onboarding/independent"
              className="mt-6 inline-flex justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-ink/85"
            >
              Explore Freely
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
