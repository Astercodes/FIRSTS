"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const FIELDS = [
  "Technology & Computing",
  "Business & Management",
  "Finance & Accounting",
  "Healthcare & Health Sciences",
  "Engineering",
  "Science & Research",
  "Education",
  "Law & Legal Services",
  "Government & Public Service",
  "Marketing, Media & Communications",
  "Arts, Design & Creative Industries",
  "Architecture & Built Environment",
  "Operations & Supply Chain",
  "Human Resources & People",
  "Sales & Business Development",
  "Entrepreneurship & Innovation",
  "Nonprofit & Social Impact",
  "Skilled Trades & Technical Careers",
  "Environment, Energy & Sustainability",
  "Hospitality, Travel & Events",
  "Sports & Entertainment",
  "Emerging Careers",
];

export function CCFields() {
  return (
    <section id="fields" className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Explore the world of careers.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          You shouldn&apos;t have to choose your future from the few careers
          you&apos;ve happened to hear about.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2.5">
        {FIELDS.map((f) => (
          <span
            key={f}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {f}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.15} className="mt-10 flex justify-center">
        <Link
          href="/onboarding"
          className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore All Career Fields
        </Link>
      </Reveal>
    </section>
  );
}
