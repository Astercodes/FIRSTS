"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const SPONSOR_TARGETS = [
  "A cohort",
  "A school",
  "An academic department",
  "A student organization",
  "A community",
  "A youth program",
  "A workforce-development initiative",
  "An under-resourced population",
  "A First Leap cohort",
  "A specific career pathway",
  "A business or entrepreneurship cohort",
];

const SCHOOL_TARGETS = [
  "Engineering students",
  "Business students",
  "Technology students",
  "Healthcare students",
  "First-generation students",
  "International students",
  "Graduating seniors",
  "Entrepreneurship programs",
  "Career-transition initiatives",
];

export function FESponsor() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Sponsor access.
        </h2>
        <p className="mt-5 font-display text-xl font-medium text-ink/80">
          Invest in the people you want to see succeed.
        </p>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Employers can sponsor FIRSTS for:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {SPONSOR_TARGETS.map((s) => (
          <span
            key={s}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {s}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.16} className="mx-auto mt-8 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          Sponsorship can help expand access while giving organizations a
          meaningful role in developing future talent.
        </p>
        <p className="mt-2 font-display text-lg font-semibold text-ink">
          Support development before asking for readiness.
        </p>
      </Reveal>

      <Reveal delay={0.22} className="mx-auto mt-14 max-w-2xl text-center">
        <h3 className="font-display text-2xl font-semibold text-ink">
          Sponsor a school or department.
        </h3>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
          Your organization may want to build deeper relationships with
          institutions connected to your talent needs. Sponsor access
          for:
        </p>
      </Reveal>

      <Reveal delay={0.28} className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {SCHOOL_TARGETS.map((s) => (
          <span
            key={s}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {s}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.34} className="mx-auto mt-8 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          Employer sponsorship can be paired with mentors, career
          conversations, projects, industry exposure, internships,
          recruiting, and other engagement.
        </p>
        <Link
          href="/employer/sponsorships"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Sponsor FIRSTS
        </Link>
      </Reveal>
    </section>
  );
}
