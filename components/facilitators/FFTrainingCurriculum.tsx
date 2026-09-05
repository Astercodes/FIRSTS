"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const TOPICS = [
  { title: "FIRSTS Philosophy", body: "Understand why FIRSTS exists and how intentional first experiences contribute to development." },
  { title: "Facilitation Foundations", body: "Learn how adults and young people participate, reflect, discuss, practice, and learn." },
  { title: "Questioning", body: "Learn to ask questions that create thought instead of simply demanding answers." },
  { title: "Listening", body: "Develop the ability to hear what someone is actually saying, and sometimes what they are struggling to articulate." },
  { title: "Group Facilitation", body: "Manage participation, discussion, energy, time, disagreement, and group dynamics." },
  { title: "Reflection", body: "Help participants turn activities and experiences into learning." },
  { title: "Communication", body: "Give instructions clearly, respond respectfully, and create psychologically safer conversations." },
  { title: "Coaching Boundaries", body: "Understand the difference between facilitating, mentoring, advising, counseling, and making decisions for participants." },
  { title: "Inclusion", body: "Learn to facilitate across different personalities, backgrounds, learning needs, and experiences." },
  { title: "Safeguarding", body: "Understand what to do when a participant raises something outside your role or requiring escalation." },
  { title: "Platform Use", body: "Learn the FIRSTS tools needed to manage sessions, cohorts, resources, participation, and feedback." },
  { title: "Assessment & Feedback", body: "Learn how your own facilitation is evaluated and how to use feedback to improve." },
];

export function FFTrainingCurriculum() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          A real development pathway.
        </h2>
        <p className="mt-5 font-display text-xl font-medium text-ink/80">
          Not a one-hour orientation and a PDF.
        </p>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          FIRSTS should prepare facilitators with the same
          intentionality we expect facilitators to bring to
          participants. Your development can include:
        </p>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TOPICS.map((t, i) => (
          <Reveal key={t.title} delay={(i % 3) * 0.08}>
            <div className="h-full rounded-2xl border border-ink/10 bg-white p-5">
              <h3 className="font-display text-sm font-semibold text-ink">
                {t.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                {t.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-10 flex justify-center">
        <Link
          href="/facilitator/training"
          className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore Facilitator Training
        </Link>
      </Reveal>
    </section>
  );
}
