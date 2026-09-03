"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const AREAS = [
  {
    title: "Entrepreneurial Self-Discovery",
    body: "Explore your strengths, risk tolerance, motivations, working style, creativity, resourcefulness, leadership, resilience, and reasons for wanting to build.",
  },
  {
    title: "Problem Discovery",
    body: "Learn to notice problems, unmet needs, inefficiencies, frustrations, and opportunities around you.",
  },
  {
    title: "Opportunity Exploration",
    body: "Explore different ways businesses create value and different types of businesses you could build.",
  },
  {
    title: "Customer Discovery",
    body: "Learn to understand people before attempting to sell something to them.",
  },
  {
    title: "Business Exposure",
    body: "Meet entrepreneurs, founders, freelancers, consultants, small-business owners, and other builders.",
  },
  {
    title: "Business Experiments",
    body: "Test ideas through small challenges, research, conversations, prototypes, offers, or other low-risk experiments.",
  },
  {
    title: "Idea Exploration",
    body: "Generate, investigate, compare, refine, and challenge possible business directions.",
  },
  {
    title: "Business Direction",
    body: "Identify an opportunity or business direction worthy of deeper pursuit.",
  },
  {
    title: "Founder Roadmap",
    body: "Understand what you would need to learn, validate, build, test, and develop next.",
  },
];

export function FLBusiness() {
  return (
    <section id="business" className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
          First Leap: Business
        </p>
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Don&apos;t just start a business. Discover what you are equipped
          to build.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Not everyone will take their First Leap into an existing
          profession. Some will create. Some will build. Some will solve
          problems. Some will become entrepreneurs.
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
          The Business specialization helps you explore whether
          entrepreneurship is right for you and what kind of business
          direction could align with your abilities, interests,
          experiences, opportunities, and problems you care about solving.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-6 max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/40">
          Your journey may include
        </p>
      </Reveal>

      <div className="mx-auto mt-8 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {AREAS.map((area, i) => (
          <Reveal key={area.title} delay={(i % 6) * 0.06}>
            <div className="h-full rounded-2xl border border-ink/10 bg-white p-6">
              <h3 className="font-display text-base font-semibold text-ink">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                {area.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="mx-auto mt-14 max-w-xl text-center">
        <p className="font-display text-lg font-semibold leading-relaxed text-ink">
          You don&apos;t have to begin First Leap with the perfect business
          idea. You can begin with curiosity.
        </p>
        <Link
          href="/onboarding"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore First Leap Business
        </Link>
      </Reveal>
    </section>
  );
}
