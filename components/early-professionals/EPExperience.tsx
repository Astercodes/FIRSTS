"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const SOURCES = [
  "Academic projects",
  "Internships",
  "Student leadership",
  "Volunteer work",
  "Research",
  "Freelance work",
  "Personal projects",
  "Organizations",
  "Campus roles",
  "Community involvement",
  "Business experiments",
  "Certifications",
  "Professional events",
  "Independent learning",
];

export function EPExperience() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Don&apos;t let &ldquo;I don&apos;t have enough experience&rdquo;
          stop the story.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Learn to recognize the experience you already have, and
          intentionally build what is missing. Experience can come from
          more places than a full-time job. Your:
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {SOURCES.map((s) => (
          <span
            key={s}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {s}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.15} className="mx-auto mt-10 max-w-xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          can all become part of your professional evidence when you
          understand how to communicate what you actually did and learned.
          Then identify what&apos;s missing and intentionally pursue your
          next FIRST.
        </p>
        <Link
          href="/onboarding/independent"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Build My Experience
        </Link>
      </Reveal>
    </section>
  );
}
