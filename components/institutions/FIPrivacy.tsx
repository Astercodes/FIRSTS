"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const SIGNALS = [
  "Participation",
  "Completion",
  "Progress",
  "Milestones",
  "Cohort activity",
  "Inactivity indicators",
  "Stage engagement",
];

export function FIPrivacy() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Context for advisors, not surveillance.
        </h2>
        <p className="mt-5 font-display text-xl font-medium text-ink/80">
          Privacy by design.
        </p>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Students need enough privacy to reflect honestly. Institutional
          teams need enough visibility to provide effective support.
          FIRSTS is designed to support both. By default, authorized
          institutional users can see developmental signals such as:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2.5">
        {SIGNALS.map((s) => (
          <span
            key={s}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {s}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.16} className="mx-auto mt-10 max-w-xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          Students retain control over the deeper content of personal
          reflections and work where sharing controls apply.
        </p>
        <p className="mt-5 font-display text-lg font-semibold text-ink">
          Your institution sees the journey. Students maintain appropriate
          ownership of the personal work behind it.
        </p>
        <Link
          href="/institution"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Learn About Privacy
        </Link>
      </Reveal>
    </section>
  );
}
