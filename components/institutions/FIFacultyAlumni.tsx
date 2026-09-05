"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const FACULTY_USES = [
  "Courses",
  "Capstones",
  "Seminars",
  "Professional preparation classes",
  "First-year experiences",
  "Leadership courses",
  "Internship courses",
  "Entrepreneurship courses",
  "Reflection assignments",
  "Project-based learning",
];

const ALUMNI_ROLES = [
  "Mentors",
  "Career speakers",
  "Industry guides",
  "Business mentors",
  "Panelists",
  "Job-shadow hosts",
  "Mock interviewers",
  "Project reviewers",
  "Professional connections",
  "Entrepreneurship advisors",
  "First Leap Mentors",
];

export function FIFacultyAlumni() {
  return (
    <section className="relative bg-paper px-6 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Connect the classroom, and your alumni, to student development.
        </h2>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-4xl gap-10 sm:grid-cols-2">
        <Reveal>
          <h3 className="font-display text-lg font-semibold text-ink">
            Faculty
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/60">
            Faculty can incorporate selected FIRSTS into:
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {FACULTY_USES.map((f) => (
              <span
                key={f}
                className="rounded-full border border-ink/10 bg-white px-3.5 py-1.5 text-xs font-medium text-ink/70"
              >
                {f}
              </span>
            ))}
          </div>
          <Link
            href="/request-demo?for=institutions"
            className="mt-6 inline-flex rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white"
          >
            Explore Faculty Integration
          </Link>
        </Reveal>

        <Reveal delay={0.08}>
          <h3 className="font-display text-lg font-semibold text-ink">
            Alumni
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/60">
            Your graduates have already experienced firsts your current
            students have not. Alumni can participate as:
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {ALUMNI_ROLES.map((a) => (
              <span
                key={a}
                className="rounded-full border border-ink/10 bg-white px-3.5 py-1.5 text-xs font-medium text-ink/70"
              >
                {a}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm font-medium text-ink/70">
            Experience becomes exposure.
          </p>
          <Link
            href="/request-demo?for=institutions"
            className="mt-6 inline-flex rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white"
          >
            Explore Alumni Engagement
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
