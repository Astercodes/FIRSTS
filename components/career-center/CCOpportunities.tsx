"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const READINESS_QUESTIONS = [
  "What is this organization looking for?",
  "What responsibilities would I have?",
  "Which qualifications are required?",
  "Which are preferred?",
  "What capabilities does the role appear to require?",
  "Which requirements do I already meet?",
  "Where are my gaps?",
  "What evidence can I provide?",
  "Which experiences should I emphasize?",
  "What should I learn about the organization?",
  "Who might I speak with?",
  "How should I tailor my resume?",
  "What should I prepare for the interview?",
];

const OPPORTUNITY_TYPES = [
  "Internships",
  "Apprenticeships",
  "Externships",
  "Fellowships",
  "Job Shadowing",
  "Volunteer Opportunities",
  "Research Opportunities",
  "Campus Opportunities",
  "Professional Projects",
  "Employer Challenges",
  "Part-Time Opportunities",
  "Entry-Level Roles",
  "Graduate Opportunities",
  "Leadership Opportunities",
  "Career Events",
  "Competitions",
  "Networking Events",
];

export function CCOpportunities() {
  return (
    <>
      <section className="relative bg-paper px-6 py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
            Opportunity Readiness Check
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Prepare before you apply.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
            Found an opportunity you&apos;re interested in? Don&apos;t
            immediately click Apply. First, understand it. FIRSTS helps
            you examine:
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
          {READINESS_QUESTIONS.map((q) => (
            <span
              key={q}
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
            >
              {q}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-10 max-w-lg text-center">
          <p className="text-[15px] leading-relaxed text-ink/60">
            Then decide how to pursue the opportunity intentionally.
          </p>
          <Link
            href="/onboarding"
            className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Check My Readiness
          </Link>
        </Reveal>
      </section>

      <section className="relative bg-paper-dim px-6 py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Find opportunities to build experience.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
            Your next opportunity doesn&apos;t have to be your dream job to
            move you forward.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
          {OPPORTUNITY_TYPES.map((t) => (
            <span
              key={t}
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
            >
              {t}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-10 max-w-lg text-center">
          <p className="text-[15px] leading-relaxed text-ink/60">
            Look beyond &ldquo;Can I get this?&rdquo; and ask &ldquo;What
            could this help me become capable of doing?&rdquo;
          </p>
          <Link
            href="/onboarding"
            className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Explore Opportunities
          </Link>
        </Reveal>
      </section>
    </>
  );
}
