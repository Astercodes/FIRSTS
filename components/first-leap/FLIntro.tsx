"use client";

import { Reveal } from "@/components/ui/Reveal";

export function FLIntro() {
  return (
    <section className="relative bg-paper px-6 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/55">
          There is a difference between simply choosing a path and
          understanding why it is the right path for you.
        </p>
        <p className="mt-5 text-lg font-medium leading-relaxed text-ink">
          First Leap is a guided career and business discovery and
          development program that helps you understand yourself, explore
          what is possible, experience potential directions, and make an
          informed decision about what you want to pursue next.
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/55">
          Powered by the <strong className="text-ink/80">FIRSTS</strong>{" "}
          platform and supported by trained mentors and facilitators, First
          Leap turns uncertainty into exploration, and exploration into
          direction.
        </p>
        <p className="mt-6 text-base font-semibold leading-relaxed text-ink">
          Discover yourself. Explore your possibilities. Experience before
          you decide. Choose your direction. Take your First Leap.
        </p>
      </Reveal>
    </section>
  );
}
