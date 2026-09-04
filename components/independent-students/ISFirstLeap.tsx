"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function ISFirstLeap() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
          Still trying to figure out your direction?
        </p>
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          You can take First Leap too.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          If you want more than independent exploration, FIRSTS also
          connects you to the First Leap program: a guided discovery and
          development program designed to help you move from uncertainty
          to a clearer career or business direction.
        </p>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-2">
        <Reveal>
          <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6">
            <h3 className="font-display text-lg font-semibold text-ink">
              First Leap: Career
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">
              For students who want guided help exploring careers,
              industries, roles, professional experiences, and possible
              career directions.
            </p>
            <Link
              href="/first-leap#career"
              className="mt-6 inline-flex justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-ink/85"
            >
              Explore First Leap: Career
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6">
            <h3 className="font-display text-lg font-semibold text-ink">
              First Leap: Business
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">
              For students who want guided help exploring
              entrepreneurship, problems worth solving, business
              opportunities, and possible business directions.
            </p>
            <Link
              href="/first-leap#business"
              className="mt-6 inline-flex justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-ink/85"
            >
              Explore First Leap: Business
            </Link>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mx-auto mt-10 max-w-lg text-center">
        <p className="font-display text-lg font-semibold text-ink">
          FIRSTS gives you the platform. First Leap gives you the guided
          journey.
        </p>
        <Link
          href="/first-leap"
          className="mt-8 inline-flex rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-ink/5"
        >
          Explore First Leap
        </Link>
      </Reveal>
    </section>
  );
}
