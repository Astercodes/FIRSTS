"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { coachRespond, explainMessage, STUCK_MESSAGE } from "@/lib/coachScript";
import type { CoachMode } from "@/lib/moduleContent";

type Message = { role: "coach" | "user"; text: string };

const MODE_META: Record<CoachMode, { label: string; intro: string }> = {
  reflective: {
    label: "Reflective Socratic Coach",
    intro: "I'll ask questions here — I won't hand you a finished answer. Where do you want to start?",
  },
  research: {
    label: "Research Analyst",
    intro: "I'll cross-check sources and cite everything I hand back. What do you want researched first?",
  },
  hybrid: {
    label: "Reflective + light research",
    intro: "Mostly reflection, with research on tap if you want it. Where should we start?",
  },
  synthesis: {
    label: "Synthesis Coach",
    intro: "I can pull from your completed FIRSTS automatically. Want me to summarize what I'm seeing so far?",
  },
};

export function CoachTab({
  color,
  mode = "reflective",
  moduleTitle,
  moduleDefinition,
}: {
  color: string;
  mode?: CoachMode;
  moduleTitle: string;
  moduleDefinition: string;
}) {
  const meta = MODE_META[mode];
  const [messages, setMessages] = useState<Message[]>([{ role: "coach", text: meta.intro }]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);

  function pushCoach(text: string) {
    setThinking(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "coach", text }]);
      setThinking(false);
    }, 700);
  }

  function handleSend(e: FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    pushCoach(coachRespond(text));
  }

  function quickAction(kind: "explain" | "stuck") {
    setMessages((prev) => [
      ...prev,
      { role: "user", text: kind === "explain" ? "Explain this FIRST to me" : "I'm stuck" },
    ]);
    pushCoach(kind === "explain" ? explainMessage(moduleTitle, moduleDefinition) : STUCK_MESSAGE);
  }

  return (
    <div className="rounded-3xl border border-ink/8 bg-white p-6 sm:p-7">
      <span
        className="mb-4 inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider"
        style={{ color, background: `color-mix(in oklab, ${color} 14%, white)` }}
      >
        {meta.label}
      </span>
      <p className="mb-5 rounded-2xl bg-paper-dim px-4 py-3 text-xs leading-relaxed text-ink/50">
        This Coach is a guidance tool, not a licensed counselor — for career,
        legal, or financial decisions, loop in a human advisor too.
      </p>

      <div className="mb-4 space-y-3">
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  m.role === "user" ? "bg-ink text-paper" : "bg-paper-dim text-ink/80"
                }`}
              >
                {m.text}
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

      <div className="mb-4 flex flex-wrap gap-2">
        <button
          onClick={() => quickAction("explain")}
          className="rounded-full border border-ink/10 px-3.5 py-1.5 text-xs font-semibold text-ink/70 transition-colors hover:border-ink/25"
        >
          Explain this FIRST to me
        </button>
        <button
          onClick={() => quickAction("stuck")}
          className="rounded-full border border-ink/10 px-3.5 py-1.5 text-xs font-semibold text-ink/70 transition-colors hover:border-ink/25"
        >
          I&apos;m stuck
        </button>
      </div>

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
          style={{ background: color }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
