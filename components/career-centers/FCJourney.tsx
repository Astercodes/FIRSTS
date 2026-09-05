"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const AREAS = [
  "Self-Discovery & Career Clarity",
  "Professional Presence & Branding",
  "Networking & Mentorship",
  "Applications & Interviews",
  "Mindset, Productivity & Habits",
  "Thinking & Reasoning",
  "Communication",
  "Hard & Technical Skills",
  "Soft Skills",
  "Leadership",
  "Teamwork & Collaboration",
  "Business & Organizational Acumen",
  "Workplace Readiness",
  "Professional Ethics",
  "Career Growth",
  "Financial Literacy",
];

export function FCJourney() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Move from one-time career services to an ongoing development
          journey.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Career development should not begin two months before
          graduation. FIRSTS helps your institution create a continuous
          pathway students can engage with from early self-discovery
          through career readiness and professional transition. Students
          can develop across:
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {AREAS.map((a) => (
          <span
            key={a}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {a}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.15} className="mx-auto mt-10 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          Instead of relying only on appointments, workshops, and career
          fairs, your team gains a structured digital environment
          students can continue using between interactions with your
          staff.
        </p>
        <Link
          href="/development-areas"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          See the FIRSTS Framework
        </Link>
      </Reveal>
    </section>
  );
}
