"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function FCFirstLeap() {
  return (
    <section className="relative overflow-hidden bg-mesh-dark px-6 py-28 text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-[10%] h-[420px] w-[420px] animate-blob-drift rounded-full opacity-40 blur-[110px]"
        style={{ background: "var(--berry-burst)" }}
      />
      <div className="noise-layer" aria-hidden />

      <Reveal className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Add structured programming through First Leap.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-paper/65">
          Some students need more than independent platform access. For
          students who need deeper guidance in choosing a direction,
          institutions can implement the First Leap program through
          FIRSTS: structured activities, exploration, reflection,
          exposure, mentors, and trained facilitators to help students
          move toward clearer career or business direction.
        </p>
      </Reveal>

      <div className="relative mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-2">
        <Reveal>
          <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-display text-lg font-semibold">
              First Leap: Career
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-paper/65">
              Helps students explore self, careers, industries, roles,
              professional environments, career experiences, and possible
              directions.
            </p>
            <Link
              href="/first-leap#career"
              className="mt-6 inline-flex justify-center rounded-full bg-paper px-6 py-3 text-sm font-semibold text-ink transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              Explore First Leap: Career
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-display text-lg font-semibold">
              First Leap: Business
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-paper/65">
              Helps students explore entrepreneurship, problems worth
              solving, business possibilities, customers, markets, ideas,
              and potential business directions.
            </p>
            <Link
              href="/first-leap#business"
              className="mt-6 inline-flex justify-center rounded-full bg-paper px-6 py-3 text-sm font-semibold text-ink transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              Explore First Leap: Business
            </Link>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="relative mx-auto mt-10 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-paper/65">
          Your institution can use FIRSTS as the platform and First Leap
          as the structured program experience layered on top.
        </p>
        <Link
          href="/request-demo?for=career-centers"
          className="mt-8 inline-flex rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-paper/90 backdrop-blur transition-colors hover:border-white/40 hover:bg-white/5"
        >
          Bring First Leap to Campus
        </Link>
      </Reveal>
    </section>
  );
}
