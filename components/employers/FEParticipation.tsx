"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const WAYS = [
  { title: "Hire", body: "Review candidate portfolios. Recruit interns and graduates. Connect with emerging talent. Offer opportunities.", cta: "Explore Hiring", href: "/employer/talent-pool" },
  { title: "Mentor", body: "Give professionals a structured way to support students and early-career participants.", cta: "Become a Mentor Partner", href: "/for/facilitators" },
  { title: "Provide Experience", body: "Offer job shadows, projects, challenges, internships, apprenticeships, and workplace exposure.", cta: "Offer Opportunities", href: "/employer/events" },
  { title: "Validate", body: "Help ensure career profiles, capability expectations, projects, and professional preparation reflect real-world work.", cta: "Become an Industry Partner", href: "/employer/role-fit" },
  { title: "Sponsor", body: "Fund access for students, schools, programs, communities, or workforce initiatives.", cta: "Sponsor FIRSTS", href: "/employer/sponsorships" },
  { title: "Develop Your Workforce", body: "Use FIRSTS as part of early-career and professional development.", cta: "Explore Workforce Development", href: "/for/professionals" },
];

export function FEParticipation() {
  return (
    <section id="participation" className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          What employer participation can look like.
        </h2>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {WAYS.map((w, i) => (
          <Reveal key={w.title} delay={(i % 3) * 0.08}>
            <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-ink">
                {w.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">
                {w.body}
              </p>
              <Link
                href={w.href}
                className="mt-5 inline-flex rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-paper-dim"
              >
                {w.cta}
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
