"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  { title: "Discover", body: "Learn more about yourself." },
  { title: "Explore", body: "Discover careers, industries, roles, and possibilities." },
  { title: "Connect", body: "Meet professionals, mentors, peers, and communities." },
  { title: "Experience", body: "Try careers through conversations, challenges, projects, simulations, job shadows, internships, and other experiences." },
  { title: "Reflect", body: "Understand what those experiences are teaching you." },
  { title: "Decide", body: "Choose a direction worth pursuing more intentionally." },
  { title: "Develop", body: "Build the capabilities your chosen direction requires." },
  { title: "Demonstrate", body: "Create evidence through projects, experiences, assessments, and accomplishments." },
  { title: "Pursue", body: "Prepare for and pursue meaningful opportunities." },
  { title: "Grow", body: "Continue learning, adapting, building relationships, gaining experience, and taking new firsts throughout your career." },
];

export function CCJourney() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Your Career Journey
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
          There isn&apos;t one perfect sequence for everyone. But your
          journey might look something like this.
        </p>
      </Reveal>

      <div className="mx-auto max-w-2xl">
        {STEPS.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.05}>
            <div className="flex gap-5 border-l-2 border-ink/10 py-4 pl-7 last:border-transparent">
              <div className="relative">
                <span
                  className="absolute -left-[38px] top-0.5 flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold text-paper"
                  style={{ background: "var(--sunshine-orange)" }}
                >
                  {String(i + 1).padStart(2, "0")}
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

      <Reveal delay={0.1} className="mx-auto mt-12 max-w-lg text-center">
        <p className="font-display text-lg font-semibold leading-relaxed text-ink">
          A career isn&apos;t one decision. It&apos;s a lifetime of
          development.
        </p>
        <Link
          href="/onboarding"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Continue My Career Journey
        </Link>
      </Reveal>
    </section>
  );
}
