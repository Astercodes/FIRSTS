"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const FACILITATOR_ITEMS = [
  "Guide program sessions",
  "Lead activities and discussions",
  "Help you process what you're discovering",
  "Encourage participation",
  "Create accountability",
  "Help you navigate the FIRSTS platform",
  "Guide individual and group reflection",
  "Connect different parts of your journey",
  "Help you keep moving when you feel stuck",
];

const MENTOR_ITEMS = [
  "Ask better questions",
  "Challenge assumptions",
  "Understand professional realities",
  "Explore possibilities",
  "Think through important decisions",
  "Learn from someone else's experience",
  "Recognize blind spots",
  "Build confidence",
  "See possibilities differently",
  "Prepare for your next step",
];

export function FLPeople() {
  return (
    <section id="people" className="relative overflow-hidden bg-mesh-dark px-6 py-28 text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-[15%] h-[380px] w-[380px] animate-blob-drift-slow rounded-full opacity-40 blur-[110px]"
        style={{ background: "var(--fuchsia-blast)" }}
      />
      <div className="noise-layer" aria-hidden />

      <Reveal className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          You won&apos;t do it alone.
        </h2>
        <p className="mt-3 font-display text-lg text-paper/70">
          Your journey has people in it.
        </p>
        <p className="mt-5 text-[15px] leading-relaxed text-paper/65">
          Algorithms and assessments can give you information. Sometimes,
          however, what you need is a conversation. A question. A
          challenge. A perspective. A story. Someone who has been somewhere
          you have never been.
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-paper/65">
          That&apos;s why First Leap combines the FIRSTS digital experience
          with trained First Leap Facilitators and First Leap Mentors.
        </p>
      </Reveal>

      <div className="relative mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="font-display text-xl font-semibold">
              Meet Your First Leap Facilitators
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-paper/65">
              Your facilitator helps you move through the First Leap
              experience. They help create the environment where discovery
              happens. Your facilitator may:
            </p>
            <ul className="mt-4 space-y-2">
              {FACILITATOR_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-paper/75"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--lime-zest)]" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-white/10 pt-5 text-sm leading-relaxed text-paper/70">
              They don&apos;t choose your future for you. They help you
              engage deeply enough to make better choices for yourself.
            </p>
            <Link
              href="/for/facilitators"
              className="mt-6 inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-paper backdrop-blur transition-colors hover:bg-white/10"
            >
              Meet Our Facilitators
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="font-display text-xl font-semibold">
              Meet Your First Leap Mentors
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-paper/65">
              Your mentor brings human experience into your exploration.
              Mentors can help you:
            </p>
            <ul className="mt-4 space-y-2">
              {MENTOR_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-paper/75"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--sunshine-orange)]" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-white/10 pt-5 text-sm leading-relaxed text-paper/70">
              A mentor isn&apos;t there to hand you a life plan.
              They&apos;re there to help you see further while you build
              your own.
            </p>
            <Link
              href="/for/facilitators"
              className="mt-6 inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-paper backdrop-blur transition-colors hover:bg-white/10"
            >
              Meet Our Mentors
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
