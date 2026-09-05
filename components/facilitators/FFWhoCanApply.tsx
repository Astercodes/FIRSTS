"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const BACKGROUNDS = [
  "A student leader",
  "Recent graduate",
  "Early professional",
  "Educator",
  "Career professional",
  "Entrepreneur",
  "Community leader",
  "Experienced professional",
  "Retiree",
  "Coach",
  "Trainer",
  "Program facilitator",
  "Manager",
  "Volunteer",
  "Alumnus",
  "Graduate student",
];

const WE_LOOK_FOR = [
  "Learn.",
  "Listen.",
  "Prepare.",
  "Respect boundaries.",
  "Receive feedback.",
  "Create space for others.",
  "Keep developing.",
];

export function FFWhoCanApply() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Who can become a facilitator?
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          We want facilitators with different experiences, professions,
          ages, and backgrounds. You may be:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {BACKGROUNDS.map((b) => (
          <span
            key={b}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {b}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.18} className="mx-auto mt-8 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          or someone who simply cares deeply about helping people
          develop. You do not need to be an expert in everything. We
          look for people willing to:
        </p>
      </Reveal>

      <Reveal delay={0.22} className="mx-auto mt-6 flex max-w-xl flex-wrap justify-center gap-2.5">
        {WE_LOOK_FOR.map((w) => (
          <span
            key={w}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {w}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.3} className="mx-auto mt-10 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          You don&rsquo;t need all the answers.
        </p>
        <p className="mt-2 font-display text-lg font-semibold text-ink">
          You need the humility and capability to help people engage
          with better questions.
        </p>
        <Link
          href="/for/facilitators/apply"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          See Facilitator Requirements
        </Link>
      </Reveal>
    </section>
  );
}
