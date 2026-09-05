"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const DEPARTMENTS = [
  "Career services",
  "Academic advising",
  "Student affairs",
  "Entrepreneurship programs",
  "Experiential learning",
  "Leadership programs",
  "Residence life",
  "Student success initiatives",
  "Mentorship programs",
  "Internship offices",
  "Alumni programs",
  "Faculty-led professional development",
  "Financial wellness programs",
  "Workforce initiatives",
];

export function FICampusWide() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Build a campus-wide development framework.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Different departments may support different pieces of the
          student journey. FIRSTS helps connect them. Your institution
          may already have:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {DEPARTMENTS.map((d) => (
          <span
            key={d}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {d}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.16} className="mx-auto mt-10 max-w-xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          The challenge is often not the absence of programming. It is
          that development is fragmented. Students attend one workshop
          here, complete an assignment there, meet an advisor once,
          attend a career fair, join a club, complete an internship, then
          move on.
        </p>
        <p className="mt-5 text-lg font-medium leading-relaxed text-ink">
          FIRSTS gives those experiences a common developmental language
          and structure.
        </p>
        <Link
          href="/for/career-centers"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          See Campus-Wide FIRSTS
        </Link>
      </Reveal>
    </section>
  );
}
