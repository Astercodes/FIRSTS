"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const QUESTIONS = [
  "What should I study?",
  "What career fits me?",
  "What am I actually good at?",
  "What kind of work would I enjoy?",
  "Should I build a career or start a business?",
  "What careers even exist beyond the ones I already know?",
  "Could I actually succeed in this field?",
  "What kind of business could I build?",
  "Where do I begin?",
];

export function FLQuestions() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/55">
          There is a difference between simply choosing a path and
          understanding why it is the right path for you.
        </p>
        <p className="mt-5 text-lg font-medium leading-relaxed text-ink">
          First Leap is a guided career and business discovery and
          development program that helps you understand yourself, explore
          what is possible, experience potential directions, and make an
          informed decision about what you want to pursue next.
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/55">
          Powered by the <strong className="text-ink/80">FIRSTS</strong>{" "}
          platform and supported by trained mentors and facilitators, First
          Leap turns uncertainty into exploration, and exploration into
          direction.
        </p>
        <p className="mt-6 text-base font-semibold leading-relaxed text-ink">
          Discover yourself. Explore your possibilities. Experience before
          you decide. Choose your direction. Take your First Leap.
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-16 max-w-2xl border-t border-ink/10 pt-16 text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Before the big leap, there is a First Leap.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          People are often expected to make major decisions about their
          futures before they have had enough opportunities to discover
          themselves or experience what those futures actually look like.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {QUESTIONS.map((q) => (
            <div
              key={q}
              className="rounded-2xl border border-ink/10 bg-white px-5 py-5 text-center text-sm font-semibold text-ink"
            >
              {q}
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.15} className="mx-auto mt-10 max-w-xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          First Leap creates a structured space to answer those questions,
          not by rushing you into a decision, but by helping you{" "}
          <strong className="text-ink">
            discover, explore, experience, reflect, and then decide.
          </strong>
        </p>
        <p className="mt-4 font-display text-lg font-semibold text-ink">
          Because your future deserves more than a guess.
        </p>
        <Link
          href="/onboarding"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Begin Your Journey
        </Link>
      </Reveal>
    </section>
  );
}
