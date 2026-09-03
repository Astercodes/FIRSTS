"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const ACTIONS = [
  {
    title: "Discover Careers",
    body: "Explore careers, roles, industries, and possibilities you may not know exist.",
    cta: "Explore Careers",
  },
  {
    title: "Find My Direction",
    body: "Not sure what fits you yet? Connect what you're learning about yourself to possible career directions.",
    cta: "Discover My Direction",
  },
  {
    title: "Explore an Industry",
    body: "Understand industries, the organizations within them, the problems they solve, and the careers they contain.",
    cta: "Explore Industries",
  },
  {
    title: "Understand a Role",
    body: "See what a specific professional actually does, the capabilities it requires, how people enter the field, and where it can lead.",
    cta: "Explore Roles",
  },
  {
    title: "Meet Professionals",
    body: "Learn from people doing the work through profiles, conversations, events, mentoring, and career stories.",
    cta: "Meet Professionals",
  },
  {
    title: "Try a Career",
    body: "Take a career beyond research through challenges, projects, simulations, job shadowing, workplace exposure, and other experiences.",
    cta: "Find Career Experiences",
  },
  {
    title: "Build My Career Skills",
    body: "Develop the foundational skills and behaviors that help you prepare for and navigate the professional world.",
    cta: "Build Career Skills",
  },
  {
    title: "Prepare for Opportunities",
    body: "Build your resume, LinkedIn presence, portfolio, interview skills, professional introduction, and job-search strategy.",
    cta: "Get Career Ready",
  },
  {
    title: "Find Opportunities",
    body: "Discover internships, apprenticeships, fellowships, projects, volunteering, job shadowing, entry-level opportunities, and other ways to gain experience.",
    cta: "Explore Opportunities",
  },
];

export function CCQuickActions() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-lg font-medium leading-relaxed text-ink">
          Welcome to your Career Center, your home for career exploration,
          development, experience, preparation, and opportunity on FIRSTS.
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/55">
          Whether you have no idea what you want to do, you&apos;re exploring
          a few possibilities, or you already know the role you&apos;re
          pursuing, start where you are.
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-14 max-w-2xl text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          What do you want to do today?
        </h2>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ACTIONS.map((a, i) => (
          <Reveal key={a.title} delay={(i % 6) * 0.06}>
            <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6">
              <h3 className="font-display text-base font-semibold text-ink">
                {a.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">
                {a.body}
              </p>
              <Link
                href="/onboarding"
                className="mt-5 text-sm font-semibold text-berry-burst underline decoration-berry-burst/30 underline-offset-4 transition-colors hover:decoration-berry-burst"
              >
                {a.cta} &rarr;
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
