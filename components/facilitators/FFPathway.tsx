"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  { title: "Learn", body: "Understand FIRSTS, its philosophy, the facilitator role, boundaries, safeguarding, participant experience, and the areas you want to facilitate." },
  { title: "Observe", body: "Watch trained facilitators lead real sessions and notice how they open, ask questions, manage time, respond to silence, and close." },
  { title: "Practice", body: "Use simulations, practice groups, and facilitator labs to develop your skills." },
  { title: "Co-Facilitate", body: "Lead selected portions of sessions alongside an experienced facilitator." },
  { title: "Lead", body: "Once you demonstrate readiness, begin leading approved sessions independently." },
  { title: "Receive Feedback", body: "Your development continues through observation, participant feedback, coaching, and reflection." },
  { title: "Specialize", body: "Build deeper capability in selected stages, populations, or programs." },
  { title: "Lead Others", body: "Experienced facilitators may eventually mentor, assess, and train newer facilitators." },
];

export function FFPathway() {
  return (
    <section id="pathway" className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          You will not be thrown into a room and told to figure it out.
        </h2>
        <p className="mt-5 font-display text-xl font-medium text-ink/80">
          Learn through apprenticeship.
        </p>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Strong facilitation develops through practice. Your pathway
          may look like:
        </p>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
        {STEPS.map((s, i) => (
          <Reveal key={s.title} delay={(i % 4) * 0.06}>
            <div className="flex h-full gap-4 rounded-2xl border border-ink/10 bg-white p-5">
              <span className="font-display text-lg font-bold text-[var(--fuchsia-blast)]">
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-sm font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/60">
                  {s.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mx-auto mt-10 max-w-lg text-center">
        <p className="font-display text-lg font-semibold text-ink">
          You grow into the responsibility.
        </p>
        <Link
          href="/facilitator/training"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          See the Facilitator Pathway
        </Link>
      </Reveal>
    </section>
  );
}
