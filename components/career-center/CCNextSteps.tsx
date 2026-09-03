"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const FIRST_LEAP_ITEMS = [
  "Discover yourself",
  "Explore career possibilities",
  "Explore industries and roles",
  "Meet professionals",
  "Gain career exposure",
  "Try career-related experiences",
  "Reflect on what you're learning",
  "Compare possible directions",
  "Narrow your options",
  "Choose a direction",
  "Create your next-step roadmap",
];

export function CCNextSteps() {
  return (
    <>
      <section id="first-leap-career" className="relative overflow-hidden bg-mesh-dark px-6 py-28 text-paper">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-[10%] h-[420px] w-[420px] animate-blob-drift rounded-full opacity-40 blur-[110px]"
          style={{ background: "var(--berry-burst)" }}
        />
        <div className="noise-layer" aria-hidden />

        <Reveal className="relative mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--lime-zest)]">
            Still trying to figure out where you belong?
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Don&apos;t explore alone. Take your First Leap.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-paper/65">
            The Career Center gives you tools, resources, information,
            experiences, and opportunities to navigate your career journey
            independently. But sometimes you need more than resources. You
            need structure. You need guided exploration. You need people
            walking through the process with you.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-paper/65">
            You need time and experiences intentionally designed to help
            you move from &ldquo;I don&apos;t know what I want to
            do&rdquo; to &ldquo;I understand myself, I&apos;ve explored my
            possibilities, I&apos;ve tested some directions, and I know
            what I want to pursue next.&rdquo;
          </p>
          <p className="mt-6 font-display text-lg font-semibold">
            That&apos;s what First Leap: Career is for.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="relative mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
          {FIRST_LEAP_ITEMS.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-paper/80"
            >
              {item}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.15} className="relative mx-auto mt-10 max-w-lg text-center">
          <p className="text-base font-semibold text-paper">
            Don&apos;t just pick a career. Experience your way toward a
            more informed decision.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/first-leap#career"
              className="rounded-full bg-paper px-7 py-3.5 text-sm font-semibold text-ink transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              Explore First Leap: Career
            </Link>
            <Link
              href="/first-leap"
              className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-paper/90 backdrop-blur transition-colors hover:border-white/40 hover:bg-white/5"
            >
              Take My First Leap
            </Link>
          </div>
        </Reveal>
      </section>

      <section id="ipfs" className="relative bg-paper px-6 py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
            Already know where you&apos;re going?
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Then your next question is different.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
            Perhaps you&apos;ve moved beyond &ldquo;What career should I
            pursue?&rdquo; You may already know: I want to become a
            Business Analyst. I want to become a Software Engineer. I want
            to work in Cybersecurity. I want to become a Project Manager. I
            want to work in Marketing.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
            At that point, continued career exploration isn&apos;t enough.
            Now you need professional formation: understanding what the
            profession requires, and intentionally building the knowledge,
            skills, tools, behaviors, experiences, and evidence necessary
            to perform.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-xl">
          <div className="rounded-3xl border border-dashed border-ink/15 bg-paper-dim p-8 text-center">
            <span className="inline-flex rounded-full bg-ink/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-ink/40">
              Coming next
            </span>
            <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
              IPFS
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/60">
              The professional formation and capability-building program
              that follows career direction. First Leap helps you
              determine where you&apos;re going. IPFS helps you become
              capable of operating there.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink/45">
              Delivered through its own digital platform, Robust. Details
              on the way.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
