"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function FLGetInvolved() {
  return (
    <section id="get-involved" className="relative bg-paper px-6 py-28">
      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
              Become a First Leap Mentor
            </p>
            <h3 className="font-display text-xl font-semibold text-ink">
              Your experience could become someone else&apos;s exposure.
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/60">
              You don&apos;t need to have someone&apos;s entire future
              figured out to make a difference in it. Sometimes one honest
              conversation with someone who has lived an experience you
              haven&apos;t can change what you know is possible. First Leap
              Mentors bring their experiences, perspectives, questions,
              lessons, and professional or entrepreneurial insight into the
              journeys of participants who are still discovering their
              direction.
            </p>
            <p className="mt-3 text-sm font-semibold text-ink/80">
              You&apos;ve already had firsts they haven&apos;t had yet. Help
              someone approach theirs.
            </p>
            <Link
              href="/for/facilitators/apply"
              className="mt-6 inline-flex justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-ink/85"
            >
              Become a First Leap Mentor
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
              Become a First Leap Facilitator
            </p>
            <h3 className="font-display text-xl font-semibold text-ink">
              Help create the environment where discovery happens.
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/60">
              First Leap Facilitators guide participants through the
              program experience. They facilitate conversations. They lead
              activities. They encourage reflection. They create
              accountability. They help participants connect experiences to
              insights, and they help turn a digital journey into a deeply
              human one.
            </p>
            <p className="mt-3 text-sm font-semibold text-ink/80">
              Facilitators receive structured preparation, resources,
              support, and ongoing development to effectively deliver the
              program.
            </p>
            <Link
              href="/for/facilitators/apply"
              className="mt-6 inline-flex justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-ink/85"
            >
              Become a First Leap Facilitator
            </Link>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mx-auto mt-14 max-w-xl text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
          For parents &amp; families
        </p>
        <h3 className="font-display text-2xl font-semibold text-ink">
          Help them discover. Don&apos;t force them to guess.
        </h3>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
          Families naturally want young people to make good decisions about
          their futures. But meaningful direction requires more than being
          told what to choose. First Leap gives participants structured
          opportunities to understand themselves, explore possibilities,
          meet people, experience potential directions, ask questions, and
          build evidence for the decisions they eventually make. Families
          can become supportive partners in that process.
        </p>
        <Link
          href="/request-demo"
          className="mt-7 inline-flex rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-ink/5"
        >
          Learn About First Leap for Your Student
        </Link>
      </Reveal>
    </section>
  );
}
