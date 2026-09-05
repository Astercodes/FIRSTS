"use client";

import { Reveal } from "@/components/ui/Reveal";

export function FFFirstTerm() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          What your first term could look like.
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-10 max-w-2xl rounded-2xl border border-ink/10 bg-white p-7">
        <p className="text-[15px] leading-relaxed text-ink/60">
          Imagine you are especially interested in self-discovery and
          mindset &amp; habits. You apply. You complete facilitator
          foundations. You begin training in the stages most connected
          to those interests. You observe two experienced facilitators.
          You practice openings, instructions, questioning, and
          reflection in a facilitator lab. Then you co-lead three
          sessions. Your lead facilitator gives you feedback. You are
          approved to independently facilitate selected FIRSTS.
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
          Over the term, you lead eight sessions and reach 140
          participants. Participant feedback shows that your strongest
          area is reflection, but you sometimes allow discussions to run
          too long. You work on time management with your facilitator
          coach. By the end of the term, you qualify for your next
          certification level.
        </p>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          You did not simply volunteer.
        </p>
        <p className="mt-1 font-display text-lg font-semibold text-ink">
          You developed a practice.
        </p>
      </Reveal>
    </section>
  );
}
