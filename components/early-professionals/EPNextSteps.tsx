"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function EPNextSteps() {
  return (
    <>
      <section className="relative bg-paper-dim px-6 py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
            Still figuring out your direction?
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Graduation doesn&apos;t mean you missed your chance to
            explore.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
            Maybe you finished school and realized &ldquo;I don&apos;t
            actually know what I want to do,&rdquo; or &ldquo;I chose this
            field, but I&apos;m no longer sure it&apos;s right for
            me,&rdquo; or &ldquo;I know I want something different, but I
            don&apos;t know what.&rdquo; You can still explore.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
            First Leap: Career helps you move through structured
            self-discovery, career exploration, exposure, reflection, and
            decision-making.
          </p>
          <Link
            href="/first-leap#career"
            className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Explore First Leap: Career
          </Link>
        </Reveal>
      </section>

      <section className="relative bg-paper px-6 py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
            Thinking about building instead?
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Your next chapter doesn&apos;t have to be employment.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
            You may graduate and realize that the path you want to pursue
            is entrepreneurship. Perhaps you already have an idea. Perhaps
            you only know that you want to create something.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
            If you&apos;re still discovering what kind of business
            direction fits you, First Leap: Business provides the guided
            pathway.
          </p>
          <Link
            href="/first-leap#business"
            className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Explore First Leap: Business
          </Link>
        </Reveal>
      </section>

      <section className="relative bg-paper-dim px-6 py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
            Already know exactly where you&apos;re headed?
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Move from direction to capability.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
            If you already know the profession or business direction you
            want to pursue, your next challenge may no longer be clarity.
            It may be capability.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
            FIRSTS helps you keep developing broadly. First Leap helps you
            find direction. IPFS helps you build deeper capability for
            that direction.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-8 max-w-xl">
          <div className="rounded-3xl border border-dashed border-ink/15 bg-white p-8 text-center">
            <span className="inline-flex rounded-full bg-ink/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-ink/40">
              Coming next
            </span>
            <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
              IPFS
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/60">
              The next-stage professional formation and
              capability-building program designed to help you
              intentionally develop the knowledge, skills, tools,
              behaviors, experiences, and evidence required for a chosen
              professional or business direction.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
