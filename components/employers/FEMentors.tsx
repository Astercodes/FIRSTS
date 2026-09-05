"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const FIRSTS_LIST = [
  "First internship",
  "First difficult interview",
  "First major project",
  "First professional mistake",
  "First promotion",
  "First leadership role",
  "First career pivot",
  "First management challenge",
];

const ROLES = [
  "Career mentors",
  "Industry mentors",
  "Business mentors",
  "First Leap Mentors",
  "Mock interviewers",
  "Project reviewers",
  "Speakers",
  "Panelists",
  "Job-shadow hosts",
  "Career-conversation partners",
];

export function FEMentors() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Turn your professionals into mentors.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Your employees have already had firsts someone else is
          approaching. Their:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-2.5">
        {FIRSTS_LIST.map((f) => (
          <span
            key={f}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {f}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.16} className="mx-auto mt-8 max-w-2xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          can become insight for someone earlier in the journey.
          Employees can serve as:
        </p>
      </Reveal>

      <Reveal delay={0.2} className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {ROLES.map((r) => (
          <span
            key={r}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {r}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.28} className="mx-auto mt-10 max-w-lg text-center">
        <p className="font-display text-lg font-semibold text-ink">
          Your experience can become someone else&rsquo;s exposure.
        </p>
        <Link
          href="/for/facilitators"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore Employee Mentoring
        </Link>
      </Reveal>
    </section>
  );
}
