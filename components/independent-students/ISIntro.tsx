"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const AREAS = [
  "Self-discovery",
  "Career clarity",
  "Professional identity",
  "Personal branding",
  "Networking",
  "Mentorship",
  "Job applications",
  "Interview preparation",
  "Mindset",
  "Productivity",
  "Communication",
  "Thinking",
  "Hard skills",
  "Soft skills",
  "Leadership",
  "Business readiness",
  "Workplace readiness",
  "Financial literacy",
  "Relationships",
];

export function ISIntro() {
  return (
    <section className="relative bg-paper px-6 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          Create your own account, explore all 16 stages, complete guided
          FIRSTS at your own pace, build your portfolio, use the AI Coach,
          and take your progress with you wherever you go.
        </p>
        <p className="mt-5 font-display text-lg font-semibold text-ink">
          No invite code. No institutional approval. No waiting.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-16 max-w-2xl border-t border-ink/10 pt-16 text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Your development belongs to you.
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
          Your university may provide career services, advising,
          workshops, or other resources. FIRSTS does not replace those
          relationships. It gives you another place to take ownership of
          your growth, a place where you can work on:
        </p>
      </Reveal>

      <Reveal delay={0.15} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {AREAS.map((a) => (
          <span
            key={a}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {a}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.2} className="mx-auto mt-8 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          and more. Your school does not need to activate FIRSTS for you
          to begin.
        </p>
        <Link
          href="/onboarding/independent"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Create My Account
        </Link>
      </Reveal>
    </section>
  );
}
