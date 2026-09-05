"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const STRENGTHS = [
  "Self-discovery",
  "Career exploration",
  "Professional branding",
  "Networking",
  "Communication",
  "Interview preparation",
  "Mindset and habits",
  "Leadership",
  "Teamwork",
  "Business development",
  "Workplace readiness",
  "Financial literacy",
  "Critical thinking",
  "Entrepreneurship",
];

export function FFSpecialize() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Facilitate the FIRSTS that fit you.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          You do not need to become an expert in all 16 stages. FIRSTS
          spans a broad range of development. Some facilitators may be
          especially strong in:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {STRENGTHS.map((s) => (
          <span
            key={s}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {s}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.18} className="mx-auto mt-10 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          That is why facilitator development can be stage-specific and
          specialization-based. Train where your experience, interests,
          and capabilities are strongest. Then expand over time.
        </p>
        <p className="mt-3 font-display text-lg font-semibold text-ink">
          Specialize first. Grow deliberately.
        </p>
        <Link
          href="/development-areas"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore the 16 Stages
        </Link>
      </Reveal>
    </section>
  );
}
