"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const AREAS = [
  {
    title: "Self-Discovery",
    body: "Understand your strengths, interests, values, abilities, preferences, motivations, and aspirations.",
  },
  {
    title: "Career Discovery",
    body: "Explore professions, industries, occupations, roles, career families, and emerging opportunities.",
  },
  {
    title: "Career Exposure",
    body: "Encounter professionals, workplaces, industries, projects, and real-world career environments.",
  },
  {
    title: "Career Experiments",
    body: "Complete activities, challenges, mini-projects, simulations, or experiences related to careers you're considering.",
  },
  {
    title: "Professional Conversations",
    body: "Talk with people actually working in fields that interest you. Ask what they do. Ask how they got there. Ask what is difficult. Ask what they love. Ask what they wish they knew earlier.",
  },
  {
    title: "Career Comparison",
    body: "Compare potential directions based on fit, opportunity, requirements, environment, lifestyle, values, interests, strengths, and long-term possibilities.",
  },
  {
    title: "Career Decision",
    body: "Identify the career direction, or smaller group of directions, you are ready to pursue more intentionally.",
  },
  {
    title: "Career Roadmap",
    body: "Understand what comes next: what you need to learn, what capabilities you need, what qualifications you might need, what experiences to pursue, who you should know, what to start doing now, and what your next first should be.",
  },
];

export function FLCareer() {
  return (
    <>
      <Reveal className="mx-auto max-w-2xl px-6 pb-4 pt-28 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
          Two ways to take your First Leap
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-ink/60">
          Your journey can lead toward building a career or building a
          business. First Leap offers two specializations designed around
          those different journeys.
        </p>
      </Reveal>

      <section id="career" className="relative bg-paper px-6 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
            First Leap: Career
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Don&apos;t just choose a career. Discover where you could
            thrive.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
            The Career specialization helps you move from broad
            possibilities to a clearer career direction. You will explore
            the relationship between who you are and what the world needs
            people to do.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-6 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/40">
            Your journey may include
          </p>
        </Reveal>

        <div className="mx-auto mt-8 grid max-w-5xl gap-5 sm:grid-cols-2">
          {AREAS.map((area, i) => (
            <Reveal key={area.title} delay={(i % 4) * 0.06}>
              <div className="h-full rounded-2xl border border-ink/10 bg-white p-6">
                <h3 className="font-display text-base font-semibold text-ink">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {area.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mx-auto mt-14 max-w-2xl text-center">
          <p className="text-[15px] leading-relaxed text-ink/60">
            The goal isn&apos;t simply to leave saying, &ldquo;I picked a
            career.&rdquo; The goal is to leave able to say:
          </p>
          <p className="mt-4 font-display text-lg font-semibold leading-relaxed text-ink">
            &ldquo;I understand myself better. I understand this direction
            better. I have experienced enough to make a more informed
            decision, and I know what I need to do next.&rdquo;
          </p>
          <Link
            href="/onboarding"
            className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Explore First Leap Career
          </Link>
        </Reveal>
      </section>
    </>
  );
}
