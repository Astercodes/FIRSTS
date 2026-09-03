"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const EXPERIENCES = [
  { title: "Career Challenges", body: "Complete short activities based on real kinds of problems professionals solve." },
  { title: "Mini Projects", body: "Create something connected to a profession and see how you respond to the work." },
  { title: "Simulations", body: "Experience scenarios modeled on professional situations." },
  { title: "Job Shadowing", body: "Observe someone working in a role you're considering." },
  { title: "Workplace Visits", body: "Experience professional environments firsthand." },
  { title: "Career Conversations", body: "Interview professionals about what they actually do." },
  { title: "Externships", body: "Gain short-term exposure to an organization or profession." },
  { title: "Volunteering", body: "Develop experience while contributing to real needs." },
  { title: "Internships", body: "Gain deeper exposure and applied experience." },
  { title: "Employer Projects", body: "Work on problems or challenges contributed by organizations." },
];

export function CCTryIt() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Don&apos;t just research a career. Try it.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Experience gives you information that a description cannot. You
          may think you&apos;ll love something until you try it. You may
          assume you&apos;re not good at something until you experience it.
          You may discover an entire direction because someone gives you
          your first opportunity to participate.
        </p>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {EXPERIENCES.map((e, i) => (
          <Reveal key={e.title} delay={(i % 6) * 0.06}>
            <div className="h-full rounded-2xl border border-ink/10 bg-white p-6">
              <h3 className="font-display text-base font-semibold text-ink">
                {e.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                {e.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="mx-auto mt-10 max-w-xl text-center">
        <p className="font-display text-lg font-semibold leading-relaxed text-ink">
          Don&apos;t only ask yourself whether you could see yourself doing
          it. Give yourself opportunities to find out.
        </p>
        <Link
          href="/onboarding"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore Career Experiences
        </Link>
      </Reveal>
    </section>
  );
}
