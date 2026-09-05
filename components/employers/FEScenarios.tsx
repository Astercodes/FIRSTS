"use client";

import { Reveal } from "@/components/ui/Reveal";

const QUESTIONS = [
  "Tell me more about this project.",
  "You identified this as a development gap. What have you done about it?",
  "Walk me through the situation behind this STAR story.",
  "What changed after this experience?",
  "Why did this career direction stand out to you?",
];

export function FEScenarios() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          What it looks like in hiring.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Imagine two early-career candidates have similar resumes. One
          shares a FIRSTS portfolio. Before the interview, the hiring
          manager can see selected evidence connected to professional
          goals, strengths, experiences, STAR stories, projects, career
          preparation, and development milestones. The manager does not
          treat the portfolio as a hiring score. Instead, it creates
          better questions:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 max-w-xl space-y-2.5">
        {QUESTIONS.map((q) => (
          <p
            key={q}
            className="rounded-2xl border border-ink/10 bg-white px-5 py-3.5 text-sm italic text-ink/70"
          >
            &ldquo;{q}&rdquo;
          </p>
        ))}
      </Reveal>

      <Reveal delay={0.16} className="mx-auto mt-8 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          The interview still matters. Your assessment still matters.
          Your process still matters.
        </p>
        <p className="mt-3 font-display text-lg font-semibold text-ink">
          But the conversation can begin deeper.
        </p>
      </Reveal>

      <Reveal delay={0.24} className="mx-auto mt-16 max-w-2xl rounded-2xl border border-ink/10 bg-white p-7 text-center">
        <h3 className="font-display text-2xl font-semibold text-ink">
          What it looks like before hiring.
        </h3>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
          Imagine your company needs stronger entry-level talent in data
          analytics. Instead of beginning with a job posting, you
          partner with a university cohort. Your analysts participate in
          career conversations. Students explore the profession through
          FIRSTS. Your team contributes a real business challenge.
          Employees serve as mentors. Students present their work. Some
          enter deeper capability-building pathways. Others realize the
          profession is not right for them.
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
          By the time recruiting begins, participants understand the
          role better, and your organization knows more about the people
          who have engaged with the work.
        </p>
        <p className="mt-4 font-display text-lg font-semibold text-ink">
          Recruiting becomes the final stage of a relationship, not the
          first.
        </p>
      </Reveal>
    </section>
  );
}
