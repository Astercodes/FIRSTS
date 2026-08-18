"use client";

import { Reveal } from "@/components/ui/Reveal";

const AUDIENCES = [
  {
    tag: "Path A",
    title: "I'm a student at a partner school",
    body: "SSO or roster invite, auto-joined to your cohort, your advisor sees your progress, never your raw reflections, unless you share.",
    color: "var(--neon-pink)",
  },
  {
    tag: "Path B",
    title: "I'm exploring on my own",
    body: "Students, grads, and career-changers. Sign up in a minute, work through Stage One at your own pace, export a portfolio when you're ready.",
    color: "var(--sunshine-orange)",
  },
  {
    tag: "Path C",
    title: "I'm an advisor or career center",
    body: "Cohort dashboards, at-risk flags, roster sync, and completion analytics, all without ever seeing a student's private reflection.",
    color: "var(--citrus-lime)",
  },
];

export function Audiences() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
            Built for three kinds of people
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            One framework, three doors in.
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {AUDIENCES.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.12}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-ink/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl">
                <div
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-15 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-25"
                  style={{ background: a.color }}
                  aria-hidden
                />
                <span
                  className="mb-6 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
                  style={{
                    color: a.color,
                    background: `color-mix(in oklab, ${a.color} 14%, white)`,
                  }}
                >
                  {a.tag}
                </span>
                <h3 className="font-display text-xl font-semibold text-ink">
                  {a.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/60">
                  {a.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
