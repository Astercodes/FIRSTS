"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const TOOLS = [
  {
    title: "Resume Builder",
    body: "Create and improve a resume that communicates your experience, capabilities, projects, education, and achievements.",
    cta: "Build My Resume",
    href: "/onboarding",
  },
  {
    title: "Cover Letter Builder",
    body: "Learn how to communicate why you fit a specific opportunity.",
    cta: "Create a Cover Letter",
    href: "/onboarding",
  },
  {
    title: "LinkedIn Builder",
    body: "Build a professional digital presence that helps people understand who you are and where you're going.",
    cta: "Build My LinkedIn",
    href: "/onboarding",
  },
  {
    title: "Portfolio Builder",
    body: "Turn your work, projects, experiences, and accomplishments into evidence.",
    cta: "Build My Portfolio",
    href: "/dashboard/portfolio",
  },
  {
    title: "Professional Introduction",
    body: "Learn to confidently answer \"Tell me about yourself.\"",
    cta: "Build My Introduction",
    href: "/onboarding",
  },
  {
    title: "Interview Practice",
    body: "Practice common, behavioral, situational, technical, and role-specific interview questions.",
    cta: "Practice an Interview",
    href: "/onboarding",
  },
  {
    title: "Networking Toolkit",
    body: "Prepare outreach messages, informational interview questions, follow-ups, thank-you messages, and networking plans.",
    cta: "Open Networking Toolkit",
    href: "/onboarding",
  },
  {
    title: "Job Search Planner",
    body: "Organize the opportunities you're pursuing and the actions required to move them forward.",
    cta: "Open My Job Search",
    href: "/onboarding",
  },
];

export function CCToolkit() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
          Career Toolkit
        </p>
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Build the tools you need to pursue opportunities.
        </h2>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {TOOLS.map((t, i) => (
          <Reveal key={t.title} delay={(i % 4) * 0.06}>
            <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6">
              <h3 className="font-display text-base font-semibold text-ink">
                {t.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">
                {t.body}
              </p>
              <Link
                href={t.href}
                className="mt-5 text-sm font-semibold text-berry-burst underline decoration-berry-burst/30 underline-offset-4 transition-colors hover:decoration-berry-burst"
              >
                {t.cta} &rarr;
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
