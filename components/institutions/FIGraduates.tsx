"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const IDENTITIES = [
  "Recent graduates",
  "Early professionals",
  "Career changers",
  "Managers",
  "Leaders",
  "Entrepreneurs",
];

const FIRSTS_AFTER = [
  "First full-time role",
  "First manager",
  "First major workplace mistake",
  "First performance review",
  "First promotion",
  "First salary negotiation",
  "First leadership responsibility",
  "First professional pivot",
  "First business",
];

export function FIGraduates() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Support the transition beyond graduation.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Your responsibility may have an endpoint. The student&rsquo;s
          development does not. FIRSTS is designed to remain useful as
          students become:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-2.5">
        {IDENTITIES.map((i) => (
          <span
            key={i}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {i}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.16} className="mx-auto mt-8 max-w-2xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          Because many of the most important FIRSTS happen after college:
        </p>
      </Reveal>

      <Reveal delay={0.2} className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {FIRSTS_AFTER.map((f) => (
          <span
            key={f}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {f}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.28} className="mx-auto mt-10 max-w-lg text-center">
        <p className="font-display text-lg font-semibold text-ink">
          Build something students do not have to abandon the day they
          graduate.
        </p>
        <Link
          href="/for/professionals"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore FIRSTS for Recent Graduates
        </Link>
      </Reveal>
    </section>
  );
}
