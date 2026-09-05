"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const METRICS = [
  "How many students engaged",
  "Which stages students used",
  "Completion patterns",
  "Cohort participation",
  "Return engagement",
  "Development milestones",
  "Program participation",
  "Career and business exploration activity",
  "Portfolio activity",
  "Mentoring engagement",
  "Experiential participation",
  "Pathway progression",
];

const PATTERNS = [
  "Students in one program engage heavily with interview preparation but little career exploration.",
  "First-year students consistently stall at the same activity.",
  "One cohort has unusually strong mentoring participation.",
  "A department has low engagement with workplace readiness.",
  "Students repeatedly return to communication-related FIRSTS.",
  "Business exploration is increasing among students in certain majors.",
];

const INFORMS = [
  "Programming",
  "Advising",
  "Staff allocation",
  "Workshops",
  "Employer engagement",
  "Curriculum partnerships",
  "Faculty collaboration",
  "Student outreach",
];

export function FCReporting() {
  return (
    <>
      <section className="relative bg-paper-dim px-6 py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Turn engagement into evidence.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
            Your annual report should be able to show more than how many
            accounts were created. FIRSTS can help institutions
            understand:
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
          {METRICS.map((m) => (
            <span
              key={m}
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
            >
              {m}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-10 max-w-lg text-center">
          <p className="text-[15px] leading-relaxed text-ink/60">
            Instead of reporting only{" "}
            <span className="italic">
              &ldquo;4,000 students had access,&rdquo;
            </span>{" "}
            you can begin asking:
          </p>
          <p className="mt-2 font-display text-lg font-semibold text-ink">
            &ldquo;What did they actually do?&rdquo;
          </p>
          <Link
            href="/advisor/reporting"
            className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Explore Institutional Reporting
          </Link>
        </Reveal>
      </section>

      <section className="relative bg-paper px-6 py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            See patterns across your institution.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
            Individual progress matters. Cohort patterns matter too. Your
            team may discover:
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-8 max-w-2xl">
          <div className="space-y-2.5">
            {PATTERNS.map((p) => (
              <p
                key={p}
                className="rounded-2xl border border-ink/10 bg-paper-dim px-5 py-3.5 text-sm text-ink/70"
              >
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-10 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-ink/40">
            These patterns can inform
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {INFORMS.map((i) => (
              <span
                key={i}
                className="rounded-full border border-ink/10 bg-paper-dim px-4 py-2 text-sm font-medium text-ink/70"
              >
                {i}
              </span>
            ))}
          </div>
          <p className="mt-6 font-display text-lg font-semibold text-ink">
            Use development data to ask better institutional questions.
          </p>
        </Reveal>
      </section>
    </>
  );
}
