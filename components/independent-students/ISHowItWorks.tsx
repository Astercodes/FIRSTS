"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  { title: "Create your independent account", body: "Use your personal email or another available sign-in option. No .edu address required. No invite code required. No school approval required." },
  { title: "Choose how you want to begin", body: "Follow the guided pathway or explore freely." },
  { title: "Complete the FIRSTS that matter to you", body: "Work through development activities, reflections, tools, projects, and experiences." },
  { title: "Use your Coach and Centers", body: "Explore careers, business, development tools, and your next steps." },
  { title: "Build your portfolio", body: "Keep the evidence of what you are learning and doing." },
  { title: "Keep growing", body: "Return as your questions, opportunities, responsibilities, and goals change." },
];

export function ISHowItWorks() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
          What it looks like as an independent student
        </p>
        <p className="text-[15px] leading-relaxed text-ink/60">
          Imagine your university has never adopted FIRSTS. You create
          your own account anyway. You begin with self-discovery. You
          explore your possibilities in the Career Center, use the AI
          Coach to prepare for an informational interview, and later
          switch to Free Explore Mode when internship applications open.
          A few months after that, your challenge is different, so you
          return for time management and workplace-readiness skills.
        </p>
        <p className="mt-4 font-display text-lg font-semibold text-ink">
          FIRSTS keeps meeting you where you are. Your school never had to
          activate your access.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-16 max-w-2xl border-t border-ink/10 pt-16 text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          How it works
        </h2>
      </Reveal>

      <div className="mx-auto mt-10 max-w-2xl">
        {STEPS.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.06}>
            <div className="flex gap-5 border-l-2 border-ink/10 py-4 pl-7 last:border-transparent">
              <div className="relative">
                <span
                  className="absolute -left-[38px] top-0.5 flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold text-paper"
                  style={{ background: "var(--citrus-lime)" }}
                >
                  {i + 1}
                </span>
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                  {step.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-12 flex justify-center">
        <Link
          href="/onboarding/independent"
          className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Start Free
        </Link>
      </Reveal>
    </section>
  );
}
