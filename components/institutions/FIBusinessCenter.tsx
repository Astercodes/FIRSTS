"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const PATHS = [
  "Create",
  "Build",
  "Consult",
  "Freelance",
  "Launch",
  "Solve",
  "Innovate",
];

const AREAS = [
  "Entrepreneurship",
  "Problems worth solving",
  "Business opportunities",
  "Customers",
  "Markets",
  "Business ideas",
  "Business models",
  "Customer discovery",
  "Experiments",
  "Prototypes",
  "Offers",
  "Sales",
  "Marketing",
  "Finance",
  "Operations",
  "Business systems",
  "Launch",
  "Growth",
];

export function FIBusinessCenter() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Give entrepreneurship an equally serious pathway.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Not every student is preparing only to get hired. Some students
          want to:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-2.5">
        {PATHS.map((p) => (
          <span
            key={p}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {p}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.14} className="mx-auto mt-8 max-w-2xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          FIRSTS includes a dedicated Business Center that helps students
          explore:
        </p>
      </Reveal>

      <Reveal delay={0.18} className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {AREAS.map((a) => (
          <span
            key={a}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {a}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.24} className="mx-auto mt-10 max-w-xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          Students can move from{" "}
          <strong className="text-ink">
            &ldquo;I want to start something&rdquo;
          </strong>{" "}
          to{" "}
          <strong className="text-ink">
            &ldquo;I understand the problem, the customer, the
            opportunity, what I am testing, and what I need to do
            next.&rdquo;
          </strong>
        </p>
        <Link
          href="/first-leap#business"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore the Business Center
        </Link>
      </Reveal>
    </section>
  );
}
