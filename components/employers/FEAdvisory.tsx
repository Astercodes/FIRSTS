"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const VALIDATE = [
  "What capabilities matter in specific roles",
  "What tools professionals actually use",
  "What behaviors distinguish stronger performers",
  "What early-career candidates commonly lack",
  "What experiences provide useful preparation",
  "What workplace scenarios should be practiced",
  "What evidence employers find meaningful",
];

const INFORMS = [
  "Career profiles",
  "Career experiences",
  "Projects",
  "FIRSTS activities",
  "Mentoring content",
  "Professional-readiness pathways",
  "Future capability-building through IPFS",
];

export function FEAdvisory() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Help shape what people are preparing for.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Employers should not only receive talent. They can help define
          readiness. As FIRSTS and the broader ecosystem develop,
          employer partners can help validate:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 max-w-2xl space-y-2">
        {VALIDATE.map((v) => (
          <p
            key={v}
            className="rounded-xl border border-ink/10 bg-white px-4 py-2.5 text-sm font-medium text-ink/70"
          >
            {v}
          </p>
        ))}
      </Reveal>

      <Reveal delay={0.18} className="mx-auto mt-8 max-w-2xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          Employer insight can inform:
        </p>
      </Reveal>

      <Reveal delay={0.22} className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-2.5">
        {INFORMS.map((i) => (
          <span
            key={i}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {i}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.3} className="mx-auto mt-10 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          The goal is not to train people for yesterday&rsquo;s job
          description.
        </p>
        <p className="mt-2 font-display text-lg font-semibold text-ink">
          It is to stay connected to how work is actually changing.
        </p>
        <Link
          href="/employer/role-fit"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Join an Employer Advisory Group
        </Link>
      </Reveal>
    </section>
  );
}
