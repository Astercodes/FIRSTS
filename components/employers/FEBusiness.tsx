"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const AREAS = [
  "Entrepreneurship",
  "Problem discovery",
  "Customers",
  "Markets",
  "Business ideas",
  "Business models",
  "Experiments",
  "Launch",
  "Growth",
];

const ROLES = [
  "Entrepreneur mentors",
  "Industry experts",
  "Customer-discovery contacts",
  "Challenge sponsors",
  "Judges",
  "Advisors",
  "Pilot partners",
  "Suppliers",
  "Strategic partners",
  "Potential customers",
  "Investors where appropriate",
];

export function FEBusiness() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Business builders matter too.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Your ecosystem may include more than future employees. Through
          the FIRSTS Business Center and First Leap: Business,
          participants can explore:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-2.5">
        {AREAS.map((a) => (
          <span
            key={a}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {a}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.16} className="mx-auto mt-8 max-w-2xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          Employer partners can contribute as:
        </p>
      </Reveal>

      <Reveal delay={0.2} className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {ROLES.map((r) => (
          <span
            key={r}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {r}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.28} className="mx-auto mt-10 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          Some participants may become your employees.
        </p>
        <p className="mt-2 font-display text-lg font-semibold text-ink">
          Others may become your vendors, partners, founders, or
          customers.
        </p>
        <Link
          href="/first-leap#business"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore Business Partnerships
        </Link>
      </Reveal>
    </section>
  );
}
