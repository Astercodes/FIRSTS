"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const CAPABILITIES = [
  "Explore the full development pathway.",
  "Complete guided FIRSTS.",
  "Use Free Explore Mode.",
  "Track your progress.",
  "Build your portfolio.",
  "Use the AI Coach.",
  "Save your reflections and outputs.",
  "Work at your own pace.",
  "Return when your needs change.",
  "Carry your development forward even after you graduate.",
];

export function ISNoPartner() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
          No partner school required
        </p>
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          You can use FIRSTS independently from the beginning.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          An independent account gives you access to the FIRSTS
          experience without requiring your school to participate first.
          That means you can:
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {CAPABILITIES.map((c) => (
          <span
            key={c}
            className="rounded-full border border-ink/10 bg-paper-dim px-4 py-2 text-sm font-medium text-ink/70"
          >
            {c}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.15} className="mx-auto mt-10 max-w-lg text-center">
        <p className="font-display text-lg font-semibold text-ink">
          Your access should not disappear because your school
          relationship changes.
        </p>
        <p className="mt-1 text-[15px] text-ink/60">FIRSTS travels with you.</p>
        <Link
          href="/onboarding/independent"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Start Free
        </Link>
      </Reveal>
    </section>
  );
}
