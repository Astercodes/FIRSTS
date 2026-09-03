"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const ITEMS = [
  { title: "What They Do", body: "The responsibilities and problems professionals in the role handle." },
  { title: "A Day in the Life", body: "What the work can actually look like from day to day." },
  { title: "Where They Work", body: "The industries, organizations, teams, and environments where the role exists." },
  { title: "What They Need to Know", body: "Important knowledge areas for the profession." },
  { title: "What They Need to Be Able to Do", body: "The technical, professional, analytical, creative, or interpersonal capabilities the role requires." },
  { title: "Tools They Use", body: "Common technologies, platforms, systems, equipment, or professional tools." },
  { title: "Education & Entry Routes", body: "Different ways people prepare for and enter the profession." },
  { title: "Experience That Helps", body: "Projects, internships, volunteering, coursework, extracurriculars, certifications, or other useful experiences." },
  { title: "What Employers Look For", body: "Common qualifications, capabilities, experiences, and evidence employers may seek." },
  { title: "Work Environment", body: "How, where, and with whom the work is commonly performed." },
  { title: "Career Progression", body: "Possible entry, intermediate, senior, leadership, specialist, and adjacent roles." },
  { title: "Related Careers", body: "Other paths that use similar interests or capabilities." },
  { title: "Professional Perspectives", body: "Insights from people who actually work in the field." },
];

export function CCProfile() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Go beyond the job title.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          What is it actually like to do the work? Every role has a story
          behind its title. Explore a Career Profile to understand:
        </p>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={(i % 6) * 0.06}>
            <div className="h-full rounded-2xl border border-ink/10 bg-white p-6">
              <h3 className="font-display text-base font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                {item.body}
              </p>
            </div>
          </Reveal>
        ))}
        <Reveal delay={0.36}>
          <div className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-ink/15 bg-white/50 p-6 text-center">
            <p className="text-sm font-semibold text-ink/70">Try It</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/55">
              FIRSTS, activities, projects, conversations, and experiences
              that can help you test your interest.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mt-10 flex justify-center">
        <Link
          href="/onboarding"
          className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore Career Profiles
        </Link>
      </Reveal>
    </section>
  );
}
