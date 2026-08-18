"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

export function CoachPreview() {
  return (
    <section id="coach" className="relative overflow-hidden bg-mesh-dark px-6 py-28 text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-[20%] h-[380px] w-[380px] animate-blob-drift-slow rounded-full opacity-40 blur-[110px]"
        style={{ background: "var(--fuchsia-blast)" }}
      />
      <div className="noise-layer" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--lime-zest)]">
            Two modes, one coach
          </p>
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            It asks better questions.
            <br />
            It never writes your answers.
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-paper/65">
            For values, purpose, and personality work, the Coach is
            Socratic. It pushes past vague answers instead of handing you
            a finished statement. For Industry Insight, Role Research, and
            Salary Benchmarking, it becomes a Research Analyst: cross-checking
            2 to 3 sources and citing every fact it hands back.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-paper/80">
              Reflective Socratic Coach
            </span>
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-paper/80">
              Research Analyst · live web search
            </span>
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-paper/80">
              Cited, insert-on-approval only
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="glass-dark rounded-3xl p-5 shadow-2xl">
            <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--neon-pink)]" />
              <p className="font-display text-sm font-semibold">
                Coach · Core Values Audit
              </p>
            </div>

            <div className="space-y-3">
              <ChatBubble align="left" delay={0.3}>
                What does &ldquo;growth&rdquo; look like on a random Tuesday
                at work, not in a mission statement?
              </ChatBubble>
              <ChatBubble align="right" delay={0.55} tone="user">
                I guess... learning new things from people around me?
              </ChatBubble>
              <ChatBubble align="left" delay={0.8}>
                Good start. That&apos;s still a little general. Whose
                growth: yours, or the people you&apos;re learning from? What
                would a week with zero growth actually feel like to you?
              </ChatBubble>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.05, duration: 0.5 }}
              className="mt-4 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-paper/40"
            >
              Reply to keep narrowing your top 3…
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ChatBubble({
  children,
  align,
  delay,
  tone = "coach",
}: {
  children: React.ReactNode;
  align: "left" | "right";
  delay: number;
  tone?: "coach" | "user";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`flex ${align === "right" ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          tone === "user"
            ? "bg-paper text-ink"
            : "border border-white/10 bg-white/5 text-paper/90"
        }`}
      >
        {children}
      </div>
    </motion.div>
  );
}
