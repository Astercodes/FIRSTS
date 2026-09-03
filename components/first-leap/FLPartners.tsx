"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const SCHOOL_ITEMS = [
  "The FIRSTS platform",
  "Structured First Leap curriculum",
  "Trained facilitators",
  "Trained mentors",
  "Career and business exploration",
  "Experiential activities",
  "Professional exposure",
  "Reflection",
  "Progress tracking",
  "Participant development data",
];

const ORG_TYPES = [
  "Youth development organizations",
  "Workforce development programs",
  "Community organizations",
  "Nonprofits",
  "Foundations",
  "Government initiatives",
  "Corporate social-impact programs",
  "Career-transition initiatives",
  "Entrepreneurship programs",
];

export function FLPartners() {
  return (
    <>
      <section id="schools" className="relative bg-paper px-6 py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
            First Leap for schools &amp; universities
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            What if career discovery became an experience instead of an
            event?
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
            First Leap can be implemented within schools, universities,
            colleges, youth programs, workforce organizations, and
            communities to create a structured pathway for personal
            discovery, career and business exploration, exposure,
            mentoring, and intentional decision-making.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
            Instead of limiting career development to occasional
            workshops, career fairs, or assessments, institutions can give
            participants an ongoing developmental journey supported by:
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2.5">
          {SCHOOL_ITEMS.map((item) => (
            <span
              key={item}
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
            >
              {item}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-10 max-w-xl text-center">
          <p className="font-display text-lg font-semibold leading-relaxed text-ink">
            Give your students more than information about the future. Give
            them opportunities to experience their way toward it.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/request-demo"
              className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              Bring First Leap to Your Institution
            </Link>
            <Link
              href="/request-demo"
              className="rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-ink/5"
            >
              Partner With First Leap
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="relative bg-paper-dim px-6 py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
            First Leap for organizations &amp; communities
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            First Leap can also support:
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2.5">
          {ORG_TYPES.map((item) => (
            <span
              key={item}
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
            >
              {item}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-10 max-w-xl text-center">
          <p className="text-[15px] leading-relaxed text-ink/60">
            The program can be adapted to different populations while
            maintaining the core First Leap journey:
          </p>
          <p className="mt-4 font-display text-base font-semibold text-ink">
            Discover &rarr; Explore &rarr; Experience &rarr; Reflect &rarr;
            Decide &rarr; Leap
          </p>
          <Link
            href="/request-demo"
            className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Partner With Us
          </Link>
        </Reveal>
      </section>
    </>
  );
}
