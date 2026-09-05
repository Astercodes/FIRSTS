"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const OFFERINGS = [
  "Job shadowing",
  "Workplace visits",
  "Externships",
  "Micro-internships",
  "Employer challenges",
  "Project-based experiences",
  "Career conversations",
  "Professional events",
  "Mock interviews",
  "Mentoring",
  "Case competitions",
  "Apprenticeships",
  "Internships",
  "Volunteer or community projects",
];

const ANSWERS = [
  "Do I understand this work?",
  "Am I interested in it?",
  "What capabilities do I still need?",
  "Could I see myself in this environment?",
  "What should I do next?",
];

export function FEExperiences() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Create experiences before employment.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Not every meaningful employer interaction needs to begin with
          a job offer. Your organization can provide experiences such
          as:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {OFFERINGS.map((o) => (
          <span
            key={o}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {o}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.18} className="mx-auto mt-8 max-w-xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          These experiences help participants answer:
        </p>
      </Reveal>

      <Reveal delay={0.22} className="mx-auto mt-6 max-w-xl space-y-2">
        {ANSWERS.map((a) => (
          <p key={a} className="font-display text-base font-semibold text-ink">
            {a}
          </p>
        ))}
      </Reveal>

      <Reveal delay={0.3} className="mt-10 flex justify-center">
        <Link
          href="/employer/events"
          className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Offer an Experience
        </Link>
      </Reveal>
    </section>
  );
}
