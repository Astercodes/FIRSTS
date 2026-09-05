"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const PRACTICE = [
  "The STAR method",
  "Behavioral interview stories",
  "Professional introductions",
  "Employer research",
  "Opportunity analysis",
  "Questions to ask employers",
  "Follow-up communication",
  "Offer comparison",
  "Career decision-making",
  "Professional storytelling",
];

export function FEInterviewPrep() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Better-prepared candidates make better conversations.
        </h2>
        <p className="mt-5 font-display text-xl font-medium text-ink/80">
          Interview preparation should happen before the interview
          starts.
        </p>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Through FIRSTS, participants can practice:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {PRACTICE.map((p) => (
          <span
            key={p}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {p}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.18} className="mx-auto mt-10 max-w-xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          That does not mean every FIRSTS participant will be the right
          candidate. It means they are more likely to arrive able to
          communicate their experiences clearly enough for you to
          evaluate them.
        </p>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Spend less of the interview teaching candidates how to answer.
        </p>
        <p className="mt-2 font-display text-lg font-semibold text-ink">
          Spend more of it understanding who they are and how they
          think.
        </p>
        <Link
          href="/first-leap#career"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          See Career Readiness in FIRSTS
        </Link>
      </Reveal>
    </section>
  );
}
