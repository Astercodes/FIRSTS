"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const QUESTIONS = [
  "Who am I?",
  "What do I care about?",
  "What am I good at?",
  "What energizes me?",
  "What drains me?",
  "What have I never tried?",
  "Where do I feel most myself?",
  "What would I do if I weren't afraid?",
  "What kind of impact do I want to have?",
  "What does success look like to me?",
];

export function FirstLeap() {
  return (
    <section id="first-leap" className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
          Not sure where you&apos;re going yet?
        </p>
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Take your First Leap.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          First Leap is a guided program for anyone starting from scratch.
          Before you can choose a direction, you have to know what you&apos;re
          choosing from, so it starts with the questions most people never
          sit down to answer.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl">
        <div className="grid grid-cols-2 gap-x-8 gap-y-3 rounded-3xl border border-ink/10 bg-white p-8 sm:grid-cols-2">
          {QUESTIONS.map((q) => (
            <p key={q} className="text-sm font-medium text-ink/70">
              {q}
            </p>
          ))}
        </div>
      </Reveal>

      <div className="mx-auto mt-16 max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
          Choose your First Leap
        </p>
      </div>

      <div className="mx-auto mt-6 grid max-w-3xl gap-5 sm:grid-cols-2">
        <Reveal>
          <div className="flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-7">
            <h3 className="font-display text-xl font-semibold text-ink">
              Career
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">
              For anyone exploring what kind of work, role, or industry
              actually fits who they are.
            </p>
            <Link
              href="/onboarding"
              className="mt-6 inline-flex justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-ink/85"
            >
              Explore First Leap: Career
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-7">
            <h3 className="font-display text-xl font-semibold text-ink">
              Business
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">
              For anyone exploring what it would take to build something of
              their own.
            </p>
            <Link
              href="/onboarding"
              className="mt-6 inline-flex justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-ink/85"
            >
              Explore First Leap: Business
            </Link>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mx-auto mt-16 flex max-w-2xl flex-col items-center text-center">
        <h3 className="font-display text-2xl font-semibold text-ink">
          You won&apos;t make the leap alone.
        </h3>
        <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-ink/60">
          First Leap Facilitators and Mentors walk the program with you,
          helping you make sense of what you&apos;re discovering along the
          way.
        </p>
        <Link
          href="/onboarding"
          className="mt-7 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Join First Leap
        </Link>
      </Reveal>
    </section>
  );
}
