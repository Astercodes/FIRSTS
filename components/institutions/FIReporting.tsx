"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const MEASURES = [
  "Student participation",
  "FIRSTS completion",
  "Cohort progression",
  "Stage engagement",
  "Return engagement",
  "Milestones achieved",
  "Career exploration",
  "Business exploration",
  "Portfolio development",
  "Mentorship participation",
  "First Leap participation",
  "Inactivity patterns",
  "Program comparisons",
  "Semester-over-semester trends",
];

const REASONS = [
  "Program review",
  "Accreditation support",
  "Strategic planning",
  "Student-success reporting",
  "Grant reporting",
  "Internal assessment",
  "Leadership reporting",
  "Continuous improvement",
];

export function FIReporting() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Measure engagement across semesters.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Move beyond enrollment and attendance counts. Institutional
          reporting can help you examine:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {MEASURES.map((m) => (
          <span
            key={m}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {m}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.18} className="mx-auto mt-8 max-w-2xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          This gives your institution stronger evidence for:
        </p>
      </Reveal>

      <Reveal delay={0.22} className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-2.5">
        {REASONS.map((r) => (
          <span
            key={r}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {r}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.3} className="mx-auto mt-10 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          Instead of saying{" "}
          <strong className="text-ink">
            &ldquo;2,500 students had access,&rdquo;
          </strong>
        </p>
        <p className="mt-2 font-display text-lg font-semibold text-ink">
          you can begin asking, &ldquo;How did they actually engage and
          develop?&rdquo;
        </p>
        <Link
          href="/advisor/reporting"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore Institutional Reporting
        </Link>
      </Reveal>
    </section>
  );
}
