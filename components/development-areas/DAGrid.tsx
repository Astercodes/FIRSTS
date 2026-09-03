"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { FIRSTS as ALL_FIRSTS, STAGES } from "@/lib/dashboardData";

const BLURBS: Record<string, string> = {
  one: "Understand who you are before you decide where to go. Explore your values, strengths, personality, interests, and the experiences that shaped you, then use what you find to bring your direction into focus.",
  two: "Shape how you present yourself, online and in person. Build a personal brand narrative, a professional presence, and the confidence to introduce yourself in a way that actually represents you.",
  three: "Learn the mechanics of standing out for the right reasons: resumes, cover letters, applications, and interviews that reflect who you are, not just what you think employers want to hear.",
  four: "Build the habits, focus, and mindset that make consistency possible. This is where discipline gets designed instead of hoped for, from daily systems to how you handle setbacks.",
  five: "Sharpen how you think, decide, and solve problems. Learn the mental models and reasoning habits that help you cut through noise and make better calls under uncertainty.",
  six: "Speak, read, and write with clarity and confidence. Strengthen the everyday communication skills that shape how well your ideas land, in conversation, in writing, and in front of a room.",
  seven: "Build the technical skills your field actually runs on. This area is where you go deep on the practical, job-specific capabilities that make you competent, not just interested.",
  eight: "Develop the interpersonal skills that make you easy to work with: empathy, adaptability, conflict resolution, and the everyday behaviors that build trust with the people around you.",
  nine: "Expand the vocabulary that sharpens every conversation you have. Precise language makes you clearer, more persuasive, and more confident in professional settings.",
  ten: "Build the relationships and mentorships that open doors. Learn how to network with intention, maintain connections over time, and turn conversations into real opportunities.",
  eleven: "Get fluent with the tools and technology your work depends on, from everyday software to the platforms specific to your field, so the tools never slow you down.",
  twelve: "Learn to lead, even before you have the title. Build the judgment, communication, and influence it takes to guide others and take ownership of outcomes.",
  thirteen: "Work well with others toward a shared goal. Learn how to contribute inside a team, navigate disagreement, and help a group perform better than any one person could alone.",
  fourteen: "Plan, organize, and deliver work that actually gets done. Build the systems for scoping, sequencing, and following through on projects from start to finish.",
  fifteen: "Understand how organizations actually work and make decisions: how strategy, operations, and incentives fit together, so you can operate effectively inside any organization.",
  sixteen: "Show up with the professionalism and integrity workplaces expect. Learn the unwritten rules of workplace conduct and how to build a reputation people trust.",
};

const COLORS = [
  "var(--neon-pink)",
  "var(--sunshine-orange)",
  "var(--citrus-lime)",
  "var(--fuchsia-blast)",
];

export function DAGrid() {
  return (
    <section className="relative bg-paper px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {STAGES.map((stage, i) => {
          const title = stage.label.split(" · ")[1] ?? stage.label;
          const count = ALL_FIRSTS.filter((m) => m.stage === stage.id).length;
          const color = COLORS[i % COLORS.length];
          return (
            <Reveal key={stage.id} delay={(i % 6) * 0.06}>
              <Link href={stage.href} className="group block h-full">
                <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6 transition-colors group-hover:border-ink/25">
                  <div className="flex items-center justify-between">
                    <span
                      className="rounded-full px-3 py-1 text-xs font-bold"
                      style={{
                        color,
                        background: `color-mix(in oklab, ${color} 14%, white)`,
                      }}
                    >
                      {stage.shortLabel}
                    </span>
                    <span className="text-xs font-semibold text-ink/40">
                      {count} FIRSTS
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">
                    {title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/55">
                    {BLURBS[stage.id]}
                  </p>
                  <span className="mt-5 text-sm font-semibold text-ink/70 transition-colors group-hover:text-ink">
                    Explore {stage.shortLabel} &rarr;
                  </span>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
