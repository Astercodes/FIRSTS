"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const AREAS = [
  {
    title: "Professional Presence",
    body: "Build your resume, LinkedIn profile, portfolio, professional bio, introduction, and personal brand.",
    cta: "Build My Professional Presence",
    href: "/dashboard/stage/two",
  },
  {
    title: "Networking & Relationships",
    body: "Learn how to meet people, build genuine professional relationships, follow up, maintain connections, and grow your network.",
    cta: "Build My Network",
    href: "/dashboard/stage/ten",
  },
  {
    title: "Communication",
    body: "Strengthen professional speaking, writing, listening, presenting, interviewing, and workplace communication.",
    cta: "Develop My Communication",
    href: "/dashboard/stage/six",
  },
  {
    title: "Workplace Readiness",
    body: "Learn professional expectations, etiquette, reliability, accountability, workplace communication, meeting behavior, organizational awareness, and professional judgment.",
    cta: "Get Workplace Ready",
    href: "/dashboard/stage/sixteen",
  },
  {
    title: "Tools & Technology",
    body: "Build confidence with the technologies and digital tools commonly used in modern workplaces.",
    cta: "Explore Tools",
    href: "/dashboard/stage/eleven",
  },
  {
    title: "Thinking & Problem Solving",
    body: "Develop analytical thinking, critical thinking, decision-making, reasoning, creativity, and structured problem-solving.",
    cta: "Build My Thinking",
    href: "/dashboard/stage/five",
  },
  {
    title: "Leadership & Collaboration",
    body: "Learn how to contribute to teams, manage responsibilities, influence others, receive feedback, resolve conflict, and eventually lead.",
    cta: "Develop My Leadership",
    href: "/dashboard/stage/twelve",
  },
];

export function CCReadiness() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Build your career readiness.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Knowing what you want is only part of being ready for it. Use
          FIRSTS to develop the foundational capabilities needed to
          navigate opportunities and professional environments.
        </p>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {AREAS.map((a, i) => (
          <Reveal key={a.title} delay={(i % 6) * 0.06}>
            <Link href={a.href} className="group block h-full">
              <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6 transition-colors group-hover:border-ink/25">
                <h3 className="font-display text-base font-semibold text-ink">
                  {a.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">
                  {a.body}
                </p>
                <span className="mt-5 text-sm font-semibold text-berry-burst transition-colors">
                  {a.cta} &rarr;
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="mt-12 flex justify-center">
        <Link
          href="/development-areas"
          className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore All Career Development Areas
        </Link>
      </Reveal>
    </section>
  );
}
