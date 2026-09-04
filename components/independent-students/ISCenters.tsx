"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function ISCenters() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Explore more than careers.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          FIRSTS is not only a career-preparation platform. Your future
          may involve employment. It may involve entrepreneurship. It may
          involve both. That is why FIRSTS gives you access to two major
          exploration environments.
        </p>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-2">
        <Reveal>
          <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6">
            <h3 className="font-display text-lg font-semibold text-ink">
              Career Center
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">
              Explore careers, industries, roles, professionals, career
              experiences, workplace preparation, job-search tools, and
              opportunities.
            </p>
            <Link
              href="/first-leap#career"
              className="mt-6 inline-flex justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-ink/85"
            >
              Explore the Career Center
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6">
            <h3 className="font-display text-lg font-semibold text-ink">
              Business Center
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">
              Explore entrepreneurship, problems, ideas, customers,
              markets, business models, business skills, experimentation,
              launch, and growth.
            </p>
            <Link
              href="/first-leap#business"
              className="mt-6 inline-flex justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-ink/85"
            >
              Explore the Business Center
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
