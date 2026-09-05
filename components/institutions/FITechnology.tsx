"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const CAPABILITIES = [
  { title: "Single Sign-On", body: "Allow students and authorized staff to enter through institutional authentication where supported." },
  { title: "Roster Synchronization", body: "Place students into the appropriate institutional environment and cohorts without continuous manual matching." },
  { title: "Role-Based Access", body: "Give appropriate access to advisors, administrators, facilitators, and other institutional users." },
  { title: "Cohort Management", body: "Organize populations according to the way your institution actually operates." },
  { title: "Institutional Reporting", body: "View engagement and progress across participating groups." },
  { title: "Student Portability", body: "Allow students' developmental work to remain meaningful beyond a single semester or program." },
];

export function FITechnology() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Fit into your existing technology environment.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Do not create unnecessary administrative work. FIRSTS can
          support institutional implementation through capabilities such
          as:
        </p>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CAPABILITIES.map((c, i) => (
          <Reveal key={c.title} delay={(i % 3) * 0.08}>
            <div className="h-full rounded-2xl border border-ink/10 bg-white p-5">
              <h3 className="font-display text-sm font-semibold text-ink">
                {c.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                {c.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-10 flex justify-center">
        <Link
          href="/institution/settings"
          className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore Institutional Technology
        </Link>
      </Reveal>
    </section>
  );
}
