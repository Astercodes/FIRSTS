"use client";

import { Reveal } from "@/components/ui/Reveal";

export function ISIPFS() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
          Already know where you are going?
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Then build deeper capability.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          If you already know the profession or business direction you
          want to pursue, you may be ready for a different stage. That
          stage is less about &ldquo;What should I choose?&rdquo; and more
          about &ldquo;What do I need to become capable of doing?&rdquo;
          That is where IPFS fits.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-8 max-w-xl">
        <div className="rounded-3xl border border-dashed border-ink/15 bg-paper-dim p-8 text-center">
          <span className="inline-flex rounded-full bg-ink/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-ink/40">
            Coming next
          </span>
          <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
            IPFS
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink/60">
            The professional formation and capability-building program
            designed to help participants develop the knowledge, skills,
            tools, behaviors, experiences, and evidence required for a
            chosen professional or business direction.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
