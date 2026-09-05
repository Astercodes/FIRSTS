"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  { title: "Verify your institution", body: "Confirm institutional affiliation and establish the appropriate administrative access." },
  { title: "Define your rollout", body: "Decide who participates, which cohorts begin first, which stages matter most, whether you'll use guided pathways or open exploration, whether First Leap will be included, and which staff need access." },
  { title: "Connect students", body: "Use roster synchronization, SSO, invitations, or supported enrollment methods." },
  { title: "Launch the experience", body: "Students begin completing FIRSTS independently, through coursework, through programming, or through a structured First Leap cohort." },
  { title: "Monitor engagement", body: "Use the institutional dashboard to understand participation, progress, inactivity, and cohort patterns." },
  { title: "Intervene intentionally", body: "Your team focuses support where human attention matters most." },
  { title: "Measure and improve", body: "Use engagement and completion information to refine programming and demonstrate activity across the institution." },
];

export function FCImplementation() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          What implementation can look like
        </h2>
      </Reveal>

      <div className="mx-auto max-w-2xl">
        {STEPS.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.06}>
            <div className="flex gap-5 border-l-2 border-ink/10 py-4 pl-7 last:border-transparent">
              <div className="relative">
                <span
                  className="absolute -left-[38px] top-0.5 flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold text-paper"
                  style={{ background: "var(--berry-burst)" }}
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

      <Reveal delay={0.1} className="mt-10 flex justify-center">
        <Link
          href="/onboarding/advisor"
          className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Verify Your Institution
        </Link>
      </Reveal>

      <Reveal delay={0.15} className="mx-auto mt-16 max-w-xl border-t border-ink/10 pt-16 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
          What it could look like for one cohort
        </p>
        <p className="text-[15px] leading-relaxed text-ink/60">
          Imagine your career center launches FIRSTS with 300 students in
          a business school cohort. During the first two weeks, 84%
          begin the Core Values Audit. Some continue through the guided
          pathway. Others enter Free Explore Mode and move directly into
          professional branding and internship preparation.
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
          Your dashboard shows which students have started, where
          completion is slowing, and which participants have gone
          inactive. Your staff does not automatically read their personal
          reflections. Instead, advisors use progress signals to
          determine who may need outreach.
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
          Before an internship workshop, students complete relevant
          FIRSTS. After the workshop, they upload or refine their
          professional evidence. Later, students use the Career Center to
          explore opportunities and the Business Center to investigate
          entrepreneurial paths. Those needing deeper direction enter a
          First Leap cohort.
        </p>
        <p className="mt-4 font-display text-lg font-semibold text-ink">
          What began as platform access becomes an ongoing development
          infrastructure.
        </p>
      </Reveal>
    </section>
  );
}
