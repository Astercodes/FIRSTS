"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const LOOKING_FOR = [
  "Interview preparation today.",
  "Professional branding next week.",
  "Time management after starting a new job.",
  "Leadership six months later.",
  "Career clarity again three years from now.",
];

export function EPYourWay() {
  return (
    <>
      <section className="relative bg-paper px-6 py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Use FIRSTS your way.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
            Don&apos;t redo development you&apos;ve already done. FIRSTS
            gives you the flexibility to move through the platform based
            on where you are now.
          </p>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-ink/10 bg-white p-6">
              <h3 className="font-display text-base font-semibold text-ink">
                Use Guided Mode
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                Follow the pathway in sequence if you want structure and
                progression.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="h-full rounded-2xl border border-ink/10 bg-white p-6">
              <h3 className="font-display text-base font-semibold text-ink">
                Use Free Explore Mode
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                Jump directly into the stages, FIRSTS, tools, or
                development areas that are most relevant to you.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-lg text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-ink/40">
            You may be looking for
          </p>
          <div className="space-y-2">
            {LOOKING_FOR.map((item) => (
              <p key={item} className="text-sm text-ink/70">
                {item}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-10 max-w-lg text-center">
          <p className="font-display text-lg font-semibold text-ink">
            Your development isn&apos;t linear.
          </p>
          <p className="mt-1 text-[15px] text-ink/60">
            Your platform shouldn&apos;t force it to be.
          </p>
          <Link
            href="/onboarding/independent"
            className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Start Exploring
          </Link>
        </Reveal>
      </section>

      <section className="relative bg-paper-dim px-6 py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
            What it can look like
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Six months into your first job
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-8 max-w-xl">
          <div className="rounded-3xl border border-ink/10 bg-white p-8 text-[15px] leading-relaxed text-ink/70">
            <p>
              Imagine you already have the job. Your resume is no longer
              the biggest problem. Now you&apos;re struggling to manage
              competing priorities, stay consistent, and feel confident in
              a professional environment.
            </p>
            <p className="mt-4">
              You open FIRSTS and skip directly to the areas you need. You
              complete your{" "}
              <strong className="text-ink">Time Management Matrix</strong>.
              You build your{" "}
              <strong className="text-ink">Habit Stacking Routine</strong>.
              You work through professional communication. You reflect on
              your first performance feedback. You document your first
              major project. You identify a mentor. You begin building the
              skills required for your next level.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-8 max-w-lg text-center">
          <p className="font-display text-lg font-semibold text-ink">
            FIRSTS grows with the questions you&apos;re asking now.
          </p>
          <p className="mt-1 text-[15px] text-ink/60">
            Not only the questions you had before graduation.
          </p>
        </Reveal>
      </section>
    </>
  );
}
