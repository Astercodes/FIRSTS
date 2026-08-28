"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useMyCommunityProfile } from "@/lib/myCommunityProfile";
import { useLearnedPosts, postsForModule, toggleHelpful } from "@/lib/learnedPostStore";

const SHOWN = 4;

export function ModuleLearnedFeed({ moduleId, color }: { moduleId: number; color: string }) {
  const myProfile = useMyCommunityProfile();
  const allPosts = useLearnedPosts();
  const posts = postsForModule(allPosts, moduleId);
  const [showAll, setShowAll] = useState(false);

  if (posts.length === 0) return null;

  const visible = showAll ? posts : posts.slice(0, SHOWN);
  const top = posts[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl border border-ink/8 bg-white p-7"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
            What others learned
          </p>
          <p className="mt-1 text-sm text-ink/55">
            Real takeaways from students who&apos;ve done this exact FIRST, most helpful first.
          </p>
        </div>
        {top.helpfulBy.length > 0 && (
          <span
            className="shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white"
            style={{ background: color }}
          >
            ⭐ {top.helpfulBy.length} found this helpful
          </span>
        )}
      </div>
      <div className="mt-5 space-y-4">
        <AnimatePresence initial={false}>
          {visible.map((post, i) => {
            const helpfulCount = post.helpfulBy.length;
            const markedHelpful = post.helpfulBy.includes(myProfile.handle);
            return (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.05, 0.25), duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-ink/8 bg-paper-dim p-4"
              >
                <div className="flex items-center gap-2.5">
                  <Link
                    href={`/dashboard/community/u/${post.authorHandle}`}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-xs font-bold text-white"
                    style={{ background: "linear-gradient(135deg, var(--neon-pink), var(--tropical-mango))" }}
                  >
                    {post.authorName.charAt(0)}
                  </Link>
                  <div className="min-w-0">
                    <Link href={`/dashboard/community/u/${post.authorHandle}`} className="text-sm font-semibold text-ink hover:underline">
                      {post.authorName}
                    </Link>
                    <p className="truncate text-xs text-ink/45">
                      {post.authorSchool} · {post.createdAt}
                    </p>
                  </div>
                </div>

                <div className="mt-3 space-y-2 text-sm text-ink/75">
                  <p>
                    <span className="font-semibold text-ink/60">Learned: </span>
                    {post.whatYouLearned}
                  </p>
                  {post.whatYouDid && (
                    <p>
                      <span className="font-semibold text-ink/60">Did: </span>
                      {post.whatYouDid}
                    </p>
                  )}
                  {post.advice && (
                    <p>
                      <span className="font-semibold text-ink/60">Advice: </span>
                      {post.advice}
                    </p>
                  )}
                </div>

                <motion.button
                  whileTap={{ scale: 1.15 }}
                  type="button"
                  onClick={() => toggleHelpful(post.id, myProfile.handle)}
                  className="mt-3 rounded-full border px-3 py-1 text-xs font-semibold transition-colors"
                  style={
                    markedHelpful
                      ? { borderColor: color, color, background: `color-mix(in oklab, ${color} 12%, white)` }
                      : { borderColor: "rgba(11,4,16,0.1)", color: "rgba(11,4,16,0.5)" }
                  }
                >
                  Helpful{helpfulCount > 0 ? ` (${helpfulCount})` : ""}
                </motion.button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      {posts.length > SHOWN && (
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          className="mt-4 text-xs font-semibold text-berry-burst hover:underline"
        >
          {showAll ? "Show less" : `See all ${posts.length} →`}
        </button>
      )}
    </motion.div>
  );
}
