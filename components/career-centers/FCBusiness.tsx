"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const PATHS = [
  "Build a company",
  "Freelance",
  "Consult",
  "Create a digital business",
  "Start a social enterprise",
  "Join a family business",
  "Launch a product",
  "Solve a problem they have identified",
];

export function FCBusiness() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Support entrepreneurship too.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Not every student is preparing only for employment. Some
          students want to:
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {PATHS.map((p) => (
          <span
            key={p}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {p}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.15} className="mx-auto mt-10 max-w-xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          FIRSTS includes a Business Center where students can explore
          entrepreneurship, problems, ideas, markets, customers, business
          models, experimentation, launch, and growth. Career centers,
          entrepreneurship centers, innovation offices, and academic
          programs can therefore support both{" "}
          <strong className="text-ink">career pathways</strong> and{" "}
          <strong className="text-ink">business pathways</strong> from the
          same broader developmental ecosystem.
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
