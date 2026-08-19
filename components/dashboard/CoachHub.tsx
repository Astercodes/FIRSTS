"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useFirstsWithProgress } from "@/lib/progressStore";
import type { FirstModule } from "@/lib/dashboardData";
import { LEARN_CONTENT } from "@/lib/moduleContent";
import {
  HUB_MODE_META,
  genericReflectiveReply,
  genericResearchReply,
  summarizeProgress,
  suggestNext,
  type HubMode,
} from "@/lib/coachHub";

type Message = {
  role: "coach" | "user";
  text: string;
  moduleId?: number;
  code?: string;
};

const MODES: HubMode[] = ["reflective", "research", "synthesis"];

export function CoachHub() {
  const modules = useFirstsWithProgress();
  const [mode, setMode] = useState<HubMode>("reflective");
  const [messages, setMessages] = useState<Message[]>([
    { role: "coach", text: HUB_MODE_META.reflective.intro },
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const [picker, setPicker] = useState<"explain" | "stuck" | null>(null);

  const unlocked = modules.filter((m) => m.status !== "locked");

  function pushCoach(text: string, extra?: Partial<Message>) {
    setThinking(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "coach", text, ...extra }]);
      setThinking(false);
    }, 650);
  }

  function pushUser(text: string) {
    setMessages((prev) => [...prev, { role: "user", text }]);
  }

  function handleModeChange(next: HubMode) {
    if (next === mode) return;
    setMode(next);
    setPicker(null);
    pushCoach(HUB_MODE_META[next].intro);
  }

  function handleSend(e: FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    pushUser(text);
    setInput("");
    if (mode === "research") {
      pushCoach(genericResearchReply());
    } else if (mode === "synthesis") {
      pushCoach(summarizeProgress(modules));
    } else {
      pushCoach(genericReflectiveReply(text));
    }
  }

  function handleSummarize() {
    pushUser("Summarize my progress");
    pushCoach(summarizeProgress(modules));
  }

  function handleWhatsNext() {
    pushUser("What should I work on next?");
    const { module, text } = suggestNext(modules);
    pushCoach(text, module ? { moduleId: module.id, code: module.code } : undefined);
  }

  function handlePickModule(kind: "explain" | "stuck", m: FirstModule) {
    setPicker(null);
    const content = LEARN_CONTENT[m.id];
    if (kind === "explain") {
      pushUser(`Explain First ${m.code}: ${m.title}`);
      pushCoach(content ? `${content.definition} ${content.whyItMatters}` : `I don't have details on ${m.title} yet.`, {
        moduleId: m.id,
        code: m.code,
      });
    } else {
      pushUser(`I'm stuck on First ${m.code}: ${m.title}`);
      const pitfall = content?.pitfalls[0];
      pushCoach(
        pitfall
          ? `A common snag on ${m.title} is: ${pitfall}. Where do you think you are relative to that, closer to it or already past it?`
          : `Tell me what part of ${m.title} feels stuck, the getting-started part or the finishing part?`,
        { moduleId: m.id, code: m.code }
      );
    }
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          AI Coach
        </p>
        <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight text-ink">
          Talk it through.
        </h1>
        <p className="mt-2 text-[15px] text-ink/55">
          This coach isn&apos;t scoped to one FIRST. Switch modes, ask about your
          progress, or get a nudge on anything unlocked.
        </p>
      </div>

      <div className="rounded-3xl border border-ink/8 bg-white p-6 sm:p-7">
        <div className="mb-5 flex flex-wrap gap-2">
          {MODES.map((m) => {
            const active = m === mode;
            return (
              <button
                key={m}
                type="button"
                onClick={() => handleModeChange(m)}
                className="rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide transition-all"
                style={
                  active
                    ? { borderColor: "var(--fuchsia-blast)", color: "var(--fuchsia-blast)", background: "color-mix(in oklab, var(--fuchsia-blast) 12%, white)" }
                    : { borderColor: "rgba(11,4,16,0.1)", color: "rgba(11,4,16,0.5)" }
                }
              >
                {HUB_MODE_META[m].label}
              </button>
            );
          })}
        </div>

        <div className="mb-4 space-y-3">
          <AnimatePresence initial={false}>
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-[85%] ${m.role === "user" ? "items-end" : "items-start"} flex flex-col`}>
                  <div
                    className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      m.role === "user" ? "bg-ink text-paper" : "bg-paper-dim text-ink/80"
                    }`}
                  >
                    {m.text}
                  </div>
                  {m.moduleId && (
                    <Link
                      href={`/dashboard/stage/${m.moduleId}`}
                      className="mt-1.5 text-xs font-semibold text-ink/40 underline decoration-ink/15 underline-offset-4 transition-colors hover:text-ink/70"
                    >
                      Open First {m.code} →
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {thinking && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
              <div className="flex gap-1 rounded-2xl bg-paper-dim px-4 py-3">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-ink/30"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {picker ? (
          <div className="mb-4 rounded-2xl border border-ink/10 bg-paper-dim p-3">
            <p className="mb-2 text-xs font-semibold text-ink/50">
              Which FIRST? {unlocked.length === 0 && "Nothing unlocked yet."}
            </p>
            <div className="flex flex-wrap gap-2">
              {unlocked.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => handlePickModule(picker, m)}
                  className="rounded-full border border-ink/10 bg-white px-3 py-1.5 text-xs font-medium text-ink/70 transition-colors hover:border-ink/25"
                >
                  {m.code} {m.title}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setPicker(null)}
                className="rounded-full px-3 py-1.5 text-xs font-medium text-ink/40 hover:text-ink/70"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="mb-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleSummarize}
              className="rounded-full border border-ink/10 px-3.5 py-1.5 text-xs font-semibold text-ink/70 transition-colors hover:border-ink/25"
            >
              Summarize my progress
            </button>
            <button
              type="button"
              onClick={handleWhatsNext}
              className="rounded-full border border-ink/10 px-3.5 py-1.5 text-xs font-semibold text-ink/70 transition-colors hover:border-ink/25"
            >
              What should I work on next?
            </button>
            <button
              type="button"
              onClick={() => setPicker("explain")}
              className="rounded-full border border-ink/10 px-3.5 py-1.5 text-xs font-semibold text-ink/70 transition-colors hover:border-ink/25"
            >
              Explain a FIRST to me
            </button>
            <button
              type="button"
              onClick={() => setPicker("stuck")}
              className="rounded-full border border-ink/10 px-3.5 py-1.5 text-xs font-semibold text-ink/70 transition-colors hover:border-ink/25"
            >
              I&apos;m stuck on a FIRST
            </button>
          </div>
        )}

        <form onSubmit={handleSend} className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tell the coach what you're thinking…"
            className="flex-1 rounded-2xl border border-ink/10 bg-paper-dim px-4 py-3 text-sm text-ink outline-none focus:border-ink/25"
          />
          <button
            type="submit"
            className="rounded-2xl px-5 py-3 text-sm font-semibold text-white"
            style={{ background: "var(--fuchsia-blast)" }}
          >
            Send
          </button>
        </form>
      </div>

      <p className="text-center text-xs text-ink/40">
        A guidance tool, not a licensed counselor. For career, legal, or financial
        decisions, loop in a human advisor too.
      </p>
    </div>
  );
}
