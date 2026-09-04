"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const IDENTITY_ITEMS = [
  "Your Personal Brand Narrative",
  "Professional Bio",
  "LinkedIn Summary",
  "Professional Introduction",
  "Value Proposition",
  "Professional Strength Story",
  "Career Direction Statement",
  "Portfolio Evidence",
];

const BRAND_ITEMS = [
  "Education",
  "Experience",
  "Projects",
  "Skills",
  "Strengths",
  "Interests",
  "Achievements",
  "Professional identity",
  "Career direction",
  "Evidence of work",
];

export function EPIdentity() {
  return (
    <>
      <section className="relative bg-paper-dim px-6 py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
            What you can work on
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Build your professional identity.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
            Your first professional identity is more than your job title.
            Clarify how you want to show up professionally, what you want
            to be known for, what value you bring, and how your
            experiences connect into a coherent story. Build:
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
          {IDENTITY_ITEMS.map((item) => (
            <span
              key={item}
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
            >
              {item}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex justify-center">
          <Link
            href="/onboarding/independent"
            className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Build My Professional Identity
          </Link>
        </Reveal>
      </section>

      <section className="relative bg-paper px-6 py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Build more than a resume.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
            A resume tells someone what you&apos;ve done. Your professional
            brand helps them understand{" "}
            <strong className="text-ink">
              who you are becoming and what you can contribute.
            </strong>{" "}
            Use FIRSTS to bring together your:
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
          {BRAND_ITEMS.map((item) => (
            <span
              key={item}
              className="rounded-full border border-ink/10 bg-paper-dim px-4 py-2 text-sm font-medium text-ink/70"
            >
              {item}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-8 max-w-lg text-center">
          <p className="text-[15px] leading-relaxed text-ink/60">
            Then communicate that story consistently across your resume,
            LinkedIn, portfolio, introductions, interviews, and
            professional conversations.
          </p>
          <Link
            href="/onboarding/independent"
            className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Build My Brand
          </Link>
        </Reveal>
      </section>
    </>
  );
}
