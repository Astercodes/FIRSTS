"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const MENTOR_CONTRIBUTIONS = [
  "Professional perspective",
  "Industry knowledge",
  "Career stories",
  "Feedback",
  "Questions",
  "Exposure",
  "Encouragement",
  "Reality checks",
  "Relationship capital",
];

export function FCMentors() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Connect mentors to the student journey.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Mentoring works better when there is something to mentor
          around. FIRSTS can support structured mentor interactions
          connected to student development. Students may prepare for
          conversations through guided FIRSTS. Mentors can bring:
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {MENTOR_CONTRIBUTIONS.map((m) => (
          <span
            key={m}
            className="rounded-full border border-ink/10 bg-paper-dim px-4 py-2 text-sm font-medium text-ink/70"
          >
            {m}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.15} className="mx-auto mt-10 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          When paired with programs like First Leap, mentors become part
          of a deliberate developmental model rather than simply names in
          a directory.
        </p>
        <Link
          href="/for/facilitators"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore Mentorship
        </Link>
      </Reveal>
    </section>
  );
}
