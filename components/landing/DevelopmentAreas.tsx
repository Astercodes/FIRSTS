"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { STAGES } from "@/lib/dashboardData";

const BLURBS: Record<string, string> = {
  one: "Understand who you are, what you value, and where you're headed.",
  two: "Shape how you present yourself, online and in person.",
  three: "Learn to apply, interview, and stand out for the right reasons.",
  four: "Build the habits and mindset that make consistency possible.",
  five: "Sharpen how you think, decide, and solve problems.",
  six: "Speak, read, and write with clarity and confidence.",
  seven: "Build the technical skills your field actually runs on.",
  eight: "Develop the interpersonal skills that make you easy to work with.",
  nine: "Expand the vocabulary that sharpens every conversation you have.",
  ten: "Build the relationships and mentorships that open doors.",
  eleven: "Get fluent with the tools and technology your work depends on.",
  twelve: "Learn to lead, even before you have the title.",
  thirteen: "Work well with others toward a shared goal.",
  fourteen: "Plan, organize, and deliver work that actually gets done.",
  fifteen: "Understand how organizations actually work and make decisions.",
  sixteen: "Show up with the professionalism and integrity workplaces expect.",
};

const COLORS = [
  "var(--neon-pink)",
  "var(--sunshine-orange)",
  "var(--citrus-lime)",
  "var(--fuchsia-blast)",
];

export function DevelopmentAreas() {
  return (
    <section id="areas" className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
          Career readiness is bigger than getting a job
        </p>
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Build every part of you.
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
          {STAGES.length} development areas, each one a stage you can move
          through at your own pace.
        </p>
      </Reveal>

      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STAGES.map((stage, i) => {
          const title = stage.label.split(" · ")[1] ?? stage.label;
          return (
            <Reveal key={stage.id} delay={(i % 8) * 0.05}>
              <div className="h-full rounded-2xl border border-ink/10 bg-white p-5">
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: COLORS[i % COLORS.length] }}
                  />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/40">
                    {stage.shortLabel}
                  </span>
                </div>
                <h3 className="font-display text-[15px] font-semibold leading-snug text-ink">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/55">
                  {BLURBS[stage.id]}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-12 flex justify-center">
        <Link
          href="/onboarding"
          className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore All Development Areas
        </Link>
      </Reveal>
    </section>
  );
}
