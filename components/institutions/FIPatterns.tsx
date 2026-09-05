"use client";

import { Reveal } from "@/components/ui/Reveal";

const OBSERVATIONS = [
  "Students repeatedly struggle with professional communication.",
  "One college has strong internship preparation but low career exploration.",
  "First-year students disengage at the same developmental point.",
  "Business exploration is growing within unexpected majors.",
  "Students complete resume activities but rarely build professional relationships.",
  "Mentorship dramatically improves continuation within one cohort.",
  "Leadership-related FIRSTS are highly used among student organizations.",
];

const INFORMS = [
  "Program design",
  "Advising",
  "Curriculum partnerships",
  "Student-success strategies",
  "Employer engagement",
  "Resource allocation",
  "Mentorship initiatives",
  "Career programming",
  "Entrepreneurship programming",
  "Institutional planning",
];

export function FIPatterns() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          See patterns beyond individual students.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Development data can tell your institution something about the
          environment you have created. You may discover:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 max-w-2xl space-y-2">
        {OBSERVATIONS.map((o) => (
          <p
            key={o}
            className="rounded-xl border border-ink/10 bg-white px-4 py-2.5 text-sm text-ink/70"
          >
            {o}
          </p>
        ))}
      </Reveal>

      <Reveal delay={0.16} className="mx-auto mt-8 max-w-2xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          These patterns can inform:
        </p>
      </Reveal>

      <Reveal delay={0.2} className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {INFORMS.map((i) => (
          <span
            key={i}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {i}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.28} className="mx-auto mt-10 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          Do not only measure the student.
        </p>
        <p className="mt-2 font-display text-lg font-semibold text-ink">
          Learn from what students are telling you through their
          engagement.
        </p>
      </Reveal>
    </section>
  );
}
