"use client";

import { useState } from "react";
import Link from "next/link";
import { useFirstsWithProgress } from "@/lib/progressStore";
import { useMyCommunityProfile } from "@/lib/myCommunityProfile";
import { useFollowing } from "@/lib/followStore";
import { useFeedPosts, createPost, toggleReaction, addComment, REACTIONS, type FeedPost } from "@/lib/feedStore";
import { CommunityTabs } from "@/components/community/CommunityTabs";

const ACCENT = "var(--neon-pink)";

type FilterTab = "following" | "discover" | "mine";

export function FeedView() {
  const myProfile = useMyCommunityProfile();
  const following = useFollowing();
  const posts = useFeedPosts();
  const [tab, setTab] = useState<FilterTab>("discover");
  const [composerOpen, setComposerOpen] = useState(false);

  const filtered = posts.filter((p) => {
    if (tab === "following") return following.includes(p.authorHandle) || p.authorHandle === myProfile.handle;
    if (tab === "mine") return p.authorSchool === myProfile.school;
    return true;
  });

  const schoolLabel = myProfile.accountType === "independent" ? "Independent students" : myProfile.school;

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <CommunityTabs active="feed" />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="font-display text-2xl font-semibold tracking-tight text-ink">Feed</h1>
        <button
          type="button"
          onClick={() => setComposerOpen((v) => !v)}
          className="rounded-full px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: ACCENT }}
        >
          {composerOpen ? "Close" : "Share something"}
        </button>
      </div>

      {composerOpen && <Composer onDone={() => setComposerOpen(false)} />}

      <div className="flex gap-2">
        <TabButton active={tab === "following"} onClick={() => setTab("following")} label="Following" />
        <TabButton active={tab === "discover"} onClick={() => setTab("discover")} label="Discover" />
        <TabButton active={tab === "mine"} onClick={() => setTab("mine")} label={schoolLabel} />
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-ink/10 bg-white p-10 text-center">
          <p className="text-sm text-ink/50">
            {tab === "following"
              ? "Nobody here yet. Follow a few people from Discover to fill this in."
              : "Nothing to show yet."}
          </p>
          {tab === "following" && (
            <Link href="/dashboard/community/discover" className="mt-3 inline-block text-sm font-semibold text-berry-burst">
              Go to Discover →
            </Link>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((post) => (
            <PostCard key={post.id} post={post} myHandle={myProfile.handle} myName={myProfile.name} />
          ))}
        </div>
      )}
    </div>
  );
}

function TabButton({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
        active ? "bg-ink text-paper" : "bg-paper-dim text-ink/60 hover:text-ink"
      }`}
    >
      {label}
    </button>
  );
}

function Composer({ onDone }: { onDone: () => void }) {
  const myProfile = useMyCommunityProfile();
  const modules = useFirstsWithProgress();
  const recentComplete = modules
    .filter((m) => m.status === "complete")
    .sort((a, b) => (b.completedAt ?? "").localeCompare(a.completedAt ?? ""))
    .slice(0, 5);

  const [body, setBody] = useState("");

  function draftMilestone(title: string) {
    setBody(`Just completed "${title}." Feels good to have that one done.`);
  }

  function draftReflection() {
    setBody("What I'm proud of this week: ");
  }

  function handlePost() {
    const text = body.trim();
    if (!text) return;
    createPost({
      authorHandle: myProfile.handle,
      authorName: myProfile.name,
      authorSchool: myProfile.school,
      kind: text.toLowerCase().startsWith("what i'm proud of") ? "reflection" : "milestone",
      body: text,
    });
    setBody("");
    onDone();
  }

  return (
    <div className="rounded-3xl border border-ink/10 bg-white p-6">
      {recentComplete.length > 0 && (
        <div className="mb-3">
          <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-ink/40">
            Draft from a recent FIRST
          </p>
          <div className="flex flex-wrap gap-1.5">
            {recentComplete.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => draftMilestone(m.title)}
                className="rounded-full border border-ink/10 px-3 py-1 text-xs font-medium text-ink/60 hover:border-ink/25"
              >
                {m.title}
              </button>
            ))}
            <button
              type="button"
              onClick={draftReflection}
              className="rounded-full border border-ink/10 px-3 py-1 text-xs font-medium text-ink/60 hover:border-ink/25"
            >
              Weekly reflection prompt
            </button>
          </div>
        </div>
      )}
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Share a milestone or what you're proud of this week…"
        rows={3}
        className="w-full resize-none rounded-2xl border border-ink/10 bg-paper-dim px-4 py-3 text-sm text-ink outline-none focus:border-ink/25"
      />
      <div className="mt-3 flex justify-end gap-2">
        <button type="button" onClick={onDone} className="text-sm font-medium text-ink/40 hover:text-ink">
          Cancel
        </button>
        <button
          type="button"
          onClick={handlePost}
          disabled={!body.trim()}
          className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper transition-opacity disabled:opacity-40"
        >
          Post
        </button>
      </div>
    </div>
  );
}

function PostCard({ post, myHandle, myName }: { post: FeedPost; myHandle: string; myName: string }) {
  const [showComments, setShowComments] = useState(false);
  const [commentDraft, setCommentDraft] = useState("");

  function handleComment() {
    const body = commentDraft.trim();
    if (!body) return;
    addComment(post.id, { authorHandle: myHandle, authorName: myName, body });
    setCommentDraft("");
  }

  return (
    <div className="rounded-3xl border border-ink/10 bg-white p-6">
      <div className="flex items-center gap-3">
        <Link
          href={`/dashboard/community/u/${post.authorHandle}`}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-white"
          style={{ background: "linear-gradient(135deg, var(--neon-pink), var(--tropical-mango))" }}
        >
          {post.authorName.charAt(0)}
        </Link>
        <div className="min-w-0">
          <Link href={`/dashboard/community/u/${post.authorHandle}`} className="text-sm font-semibold text-ink hover:underline">
            {post.authorName}
          </Link>
          <p className="text-xs text-ink/45">
            {post.authorSchool} · {post.createdAt}
          </p>
        </div>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-ink/80">{post.body}</p>

      <div className="mt-4 flex items-center gap-3">
        {REACTIONS.map((r) => {
          const count = post.reactions[r.type].length;
          const reacted = post.reactions[r.type].includes(myHandle);
          return (
            <button
              key={r.type}
              type="button"
              onClick={() => toggleReaction(post.id, r.type, myHandle)}
              title={r.label}
              className={`flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors ${
                reacted ? "border-[var(--neon-pink)] text-[var(--neon-pink)]" : "border-ink/10 text-ink/50 hover:border-ink/25"
              }`}
            >
              <span>{r.emoji}</span>
              {count > 0 && <span>{count}</span>}
            </button>
          );
        })}
        <button
          type="button"
          onClick={() => setShowComments((v) => !v)}
          className="ml-auto text-xs font-medium text-ink/45 hover:text-ink"
        >
          {post.comments.length > 0 ? `${post.comments.length} comment${post.comments.length === 1 ? "" : "s"}` : "Comment"}
        </button>
      </div>

      {showComments && (
        <div className="mt-4 space-y-2.5 border-t border-ink/8 pt-4">
          {post.comments.map((c) => (
            <div key={c.id} className="rounded-2xl bg-paper-dim px-3.5 py-2.5 text-sm">
              <span className="font-semibold text-ink/75">{c.authorName}</span>{" "}
              <span className="text-ink/65">{c.body}</span>
            </div>
          ))}
          <div className="flex gap-2">
            <input
              value={commentDraft}
              onChange={(e) => setCommentDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleComment();
                }
              }}
              placeholder="Cheer them on…"
              className="flex-1 rounded-2xl border border-ink/10 bg-paper-dim px-3.5 py-2 text-sm text-ink outline-none focus:border-ink/25"
            />
            <button
              type="button"
              onClick={handleComment}
              disabled={!commentDraft.trim()}
              className="shrink-0 rounded-2xl bg-ink px-3.5 py-2 text-xs font-semibold text-paper transition-opacity disabled:opacity-40"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
