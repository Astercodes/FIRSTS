"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    title: "Start with FIRSTS",
    body: "Your First Leap journey begins on the FIRSTS platform. You create your profile and begin completing intentional firsts designed to reveal more about you, your development, and your possibilities.",
  },
  {
    title: "Discover Yourself",
    body: "Complete guided reflections, assessments, activities, conversations, and experiences that help you understand yourself more deeply.",
  },
  {
    title: "Explore",
    body: "Encounter careers, industries, businesses, professionals, entrepreneurs, ideas, environments, and possibilities beyond what you already know.",
  },
  {
    title: "Try",
    body: "Complete small experiences connected to the directions you're considering. Don't only ask, \"Would I like this?\" Find ways to test it.",
  },
  {
    title: "Connect",
    body: "Meet mentors, professionals, entrepreneurs, peers, and other people who can broaden your understanding.",
  },
  {
    title: "Reflect",
    body: "Every experience becomes more valuable when you understand what it taught you: what energized you, what frustrated you, what surprised you, what came naturally, what challenged you, what you want to experience again, and what you learned about yourself.",
  },
  {
    title: "Narrow",
    body: "Begin moving from \"anything is possible\" to \"these possibilities make sense for me,\" then from \"these possibilities make sense\" to \"this is the direction I want to explore more seriously.\"",
  },
  {
    title: "Take Your First Leap",
    body: "Choose your next direction and create an intentional roadmap for pursuing it. Your First Leap isn't the end of your development. It is the beginning of pursuing something with greater clarity.",
  },
];

export function FLHowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          How First Leap works.
        </h2>
      </Reveal>

      <div className="mx-auto max-w-2xl">
        {STEPS.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.06}>
            <div className="flex gap-5 border-l-2 border-ink/10 py-5 pl-7 last:border-transparent">
              <div className="relative">
                <span
                  className="absolute -left-[38px] top-0.5 flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold text-paper"
                  style={{ background: "var(--berry-burst)" }}
                >
                  {i + 1}
                </span>
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                  {step.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-12 flex justify-center">
        <Link
          href="/onboarding"
          className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Start First Leap
        </Link>
      </Reveal>
    </section>
  );
}
