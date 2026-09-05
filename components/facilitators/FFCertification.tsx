"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const TIERS = [
  { tier: "Tier 1", title: "Co-Facilitator", body: "You have completed foundational preparation and are approved to support sessions alongside an experienced facilitator." },
  { tier: "Tier 2", title: "Certified Facilitator", body: "You have demonstrated the ability to independently lead approved sessions within your certified areas." },
  { tier: "Tier 3", title: "Lead Facilitator", body: "You have demonstrated sustained facilitation quality and may support newer facilitators, lead more complex cohorts, and contribute to facilitator development." },
];

const ADVANCED_ROLES = [
  "Facilitator Coach",
  "Facilitator Assessor",
  "Facilitator Trainer",
  "Program Lead",
  "Master Facilitator",
];

const SPECIALIZATIONS = [
  "Self-Discovery Facilitation",
  "Career Exploration Facilitation",
  "Professional Readiness Facilitation",
  "Communication Facilitation",
  "Leadership Facilitation",
  "Workplace Readiness Facilitation",
  "Entrepreneurship Facilitation",
  "Business Development Facilitation",
  "First Leap: Career",
  "First Leap: Business",
  "Youth Facilitation",
  "University Cohort Facilitation",
  "Workforce Facilitation",
  "Virtual Facilitation",
];

export function FFCertification() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Build a credential backed by practice.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Certification should mean more than completing a video. FIRSTS
          facilitator credentials can reflect demonstrated experience.
        </p>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-3">
        {TIERS.map((t, i) => (
          <Reveal key={t.tier} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-ink/10 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--fuchsia-blast)]">
                {t.tier}
              </p>
              <h3 className="mt-2 font-display text-sm font-semibold text-ink">
                {t.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                {t.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.24} className="mx-auto mt-8 max-w-2xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          Experienced practitioners may eventually progress into roles
          such as:
        </p>
      </Reveal>

      <Reveal delay={0.28} className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-2.5">
        {ADVANCED_ROLES.map((r) => (
          <span
            key={r}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {r}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.34} className="mx-auto mt-10 max-w-2xl text-center">
        <p className="font-display text-lg font-semibold text-ink">
          Specialize as you grow.
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-ink/60">
          You may eventually build certifications or endorsements in
          areas such as:
        </p>
      </Reveal>

      <Reveal delay={0.38} className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {SPECIALIZATIONS.map((s) => (
          <span
            key={s}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {s}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.44} className="mx-auto mt-10 max-w-lg text-center">
        <p className="font-display text-lg font-semibold text-ink">
          Your facilitator identity can become a professional practice,
          not a generic volunteer role.
        </p>
        <Link
          href="/facilitator/certificate"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore Certification
        </Link>
      </Reveal>
    </section>
  );
}
