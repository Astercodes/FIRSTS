"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFacilitatorPortal } from "@/lib/facilitatorStore";
import { useLoungePosts, postToLounge } from "@/lib/facilitatorLoungeStore";

const ACCENT = "var(--fuchsia-blast)";

export function LoungeView() {
  const { application } = useFacilitatorPortal();
  const posts = useLoungePosts();
  const [draft, setDraft] = useState("");
  const [liked, setLiked] = useState<Set<string>>(new Set());

  if (!application) return null;

  function handlePost() {
    if (!draft.trim()) return;
    postToLounge(application!.name, draft.trim());
    setDraft("");
  }

  function toggleLike(id: string) {
    setLiked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <p className="font-display text-lg font-semibold text-ink">Facilitator lounge</p>
        <p className="mt-1 text-sm text-ink/50">
          A space just for facilitators, tips, wins, and questions that other volunteers actually get.
          Not visible to students.
        </p>
      </motion.div>

      <div className="rounded-3xl border border-ink/8 bg-white p-5">
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Share something with other facilitators…"
          rows={2}
          className="w-full resize-none rounded-2xl border border-ink/10 bg-paper-dim px-4 py-3 text-sm text-ink outline-none focus:border-ink/25"
        />
        <div className="mt-3 flex justify-end">
          <button
            type="button"
            onClick={handlePost}
            disabled={!draft.trim()}
            className="rounded-full px-5 py-2 text-sm font-semibold text-white transition-opacity disabled:opacity-40"
            style={{ background: ACCENT }}
          >
            Post
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <AnimatePresence>
          {posts.map((p, i) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.03, 0.3), duration: 0.3 }}
              className="rounded-3xl border border-ink/8 bg-white p-5"
            >
              <div className="flex items-center gap-2">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-xs font-bold text-white"
                  style={{ background: "linear-gradient(135deg, var(--fuchsia-blast), var(--neon-pink))" }}
                >
                  {p.author.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink/80">
                    {p.author}
                    {p.isYou && <span className="ml-1.5 text-xs text-ink/40">(you)</span>}
                  </p>
                  <p className="text-[11px] text-ink/40">{p.postedAt}</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{p.body}</p>
              <motion.button
                type="button"
                whileTap={{ scale: 1.2 }}
                onClick={() => toggleLike(p.id)}
                className="mt-3 flex items-center gap-1.5 text-xs font-semibold"
                style={{ color: liked.has(p.id) ? ACCENT : "rgba(11,4,16,0.4)" }}
              >
                🍊 {p.reactions + (liked.has(p.id) ? 1 : 0)}
              </motion.button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
