"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  { title: "Create your account", body: "Sign up independently, no school or institution required." },
  { title: "Tell FIRSTS where you are", body: "Your development doesn't have to begin at First 01." },
  { title: "Choose how you want to explore", body: "Follow the guided pathway or switch on Free Explore Mode." },
  { title: "Work on what's relevant now", body: "Career search, professional identity, workplace skills, habits, business exploration, career change, or whatever your current stage requires." },
  { title: "Complete meaningful FIRSTS", body: "Turn development into actions, experiences, conversations, reflections, and evidence." },
  { title: "Save what you build", body: "Keep your outputs and milestones in your FIRSTS journey." },
  { title: "Keep coming back", body: "Your next stage of life will bring new development needs, and new firsts." },
];

export function EPHowItWorks() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          How it works
        </h2>
      </Reveal>

      <div className="mx-auto max-w-2xl">
        {STEPS.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.06}>
            <div className="flex gap-5 border-l-2 border-ink/10 py-4 pl-7 last:border-transparent">
              <div className="relative">
                <span
                  className="absolute -left-[38px] top-0.5 flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold text-paper"
                  style={{ background: "var(--sunshine-orange)" }}
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
