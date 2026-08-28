"use client";

import { useEffect, useState } from "react";
import { STAGES } from "@/lib/dashboardData";
import { communityPeers, type PeerCommunityProfile } from "@/lib/communityData";

export type ReactionType = "citrus" | "fire" | "clap";

export const REACTIONS: { type: ReactionType; emoji: string; label: string }[] = [
  { type: "citrus", emoji: "🍊", label: "Nice one" },
  { type: "fire", emoji: "🔥", label: "Streak" },
  { type: "clap", emoji: "👏", label: "Milestone" },
];

export type FeedComment = {
  id: string;
  authorHandle: string;
  authorName: string;
  body: string;
  createdAt: string;
};

export type FeedPost = {
  id: string;
  authorHandle: string;
  authorName: string;
  authorSchool: string;
  kind: "milestone" | "reflection";
  body: string;
  createdAt: string;
  reactions: Record<ReactionType, string[]>;
  comments: FeedComment[];
};

const KEY = "firsts:community-feed-posts";
const EVENT_NAME = "firsts:community-feed-posts-change";

function hashString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function seededUnit(seed: string): number {
  return (hashString(seed) % 10000) / 10000;
}

function seededInt(seed: string, min: number, max: number): number {
  return min + Math.floor(seededUnit(seed) * (max - min + 1));
}

const MILESTONE_TEMPLATES = [
  (peer: PeerCommunityProfile, stageLabel: string) => `Just wrapped ${stageLabel}. Onto the next one.`,
  (peer: PeerCommunityProfile, stageLabel: string) => `${stageLabel} is officially done. ${peer.streak} days in a row and counting.`,
  (peer: PeerCommunityProfile, stageLabel: string) => `Finished ${stageLabel} this week. Harder than I expected, worth it.`,
];

const REFLECTION_TEMPLATES = [
  "What I'm proud of this week: actually showing up on the days I didn't feel like it.",
  "This week's win was small but real, I asked for feedback instead of guessing.",
  "Proud of finishing something I'd been putting off for two weeks straight.",
  "Small thing I'm proud of: I rewrote my intro three times until it sounded like me.",
];

function daysAgoIso(days: number): string {
  const d = new Date("2026-08-28");
  d.setDate(d.getDate() - days);
  return d.toISOString().slice(0, 10);
}

function buildSeedPosts(): FeedPost[] {
  const peers = communityPeers();
  const posts: FeedPost[] = [];

  for (const peer of peers) {
    const seed = `${peer.handle}:post`;
    if (seededUnit(seed) > 0.55) continue;

    const isReflection = seededUnit(`${seed}:kind`) < 0.3;
    const daysAgo = seededInt(`${seed}:days`, 0, 13);
    const stageIndex = STAGES.findIndex((s) => s.id === peer.currentStage);
    const completedStageLabel = stageIndex > 0 ? STAGES[stageIndex - 1].shortLabel : STAGES[0].shortLabel;

    const body = isReflection
      ? REFLECTION_TEMPLATES[seededInt(`${seed}:tmpl`, 0, REFLECTION_TEMPLATES.length - 1)]
      : MILESTONE_TEMPLATES[seededInt(`${seed}:tmpl`, 0, MILESTONE_TEMPLATES.length - 1)](peer, completedStageLabel);

    const reactorPool = peers.filter((p) => p.handle !== peer.handle);
    const reactionCount = seededInt(`${seed}:reactions`, 0, 6);
    const reactors = reactorPool
      .filter((_, i) => seededUnit(`${seed}:reactor-${i}`) < reactionCount / reactorPool.length)
      .map((p) => p.handle);

    posts.push({
      id: `seed-${peer.handle}`,
      authorHandle: peer.handle,
      authorName: peer.name,
      authorSchool: peer.school,
      kind: isReflection ? "reflection" : "milestone",
      body,
      createdAt: daysAgoIso(daysAgo),
      reactions: {
        citrus: reactors.filter((_, i) => i % 3 === 0),
        fire: reactors.filter((_, i) => i % 3 === 1),
        clap: reactors.filter((_, i) => i % 3 === 2),
      },
      comments: [],
    });
  }

  return posts.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

let cachedSeedPosts: FeedPost[] | null = null;
function seedPosts(): FeedPost[] {
  if (!cachedSeedPosts) cachedSeedPosts = buildSeedPosts();
  return cachedSeedPosts;
}

function readMyPosts(): FeedPost[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as FeedPost[]) : [];
  } catch {
    return [];
  }
}

function writeMyPosts(posts: FeedPost[]) {
  window.localStorage.setItem(KEY, JSON.stringify(posts));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function createPost(input: {
  authorHandle: string;
  authorName: string;
  authorSchool: string;
  kind: "milestone" | "reflection";
  body: string;
}): FeedPost {
  const post: FeedPost = {
    id: `post-${Date.now()}-${Math.round(Math.random() * 1e6)}`,
    createdAt: new Date().toISOString().slice(0, 10),
    reactions: { citrus: [], fire: [], clap: [] },
    comments: [],
    ...input,
  };
  writeMyPosts([post, ...readMyPosts()]);
  return post;
}

export function toggleReaction(postId: string, type: ReactionType, myHandle: string) {
  const mine = readMyPosts();
  const inMine = mine.some((p) => p.id === postId);
  if (inMine) {
    writeMyPosts(mine.map((p) => (p.id === postId ? withToggledReaction(p, type, myHandle) : p)));
    return;
  }
  // Reacting to a seeded post: store a lightweight override alongside the user's own posts so it persists.
  const seed = seedPosts().find((p) => p.id === postId);
  if (!seed) return;
  const overridden = withToggledReaction(seed, type, myHandle);
  writeMyPosts([...mine, overridden]);
}

function withToggledReaction(post: FeedPost, type: ReactionType, handle: string): FeedPost {
  const current = post.reactions[type];
  const reacted = current.includes(handle);
  return {
    ...post,
    reactions: {
      ...post.reactions,
      [type]: reacted ? current.filter((h) => h !== handle) : [...current, handle],
    },
  };
}

export function addComment(postId: string, comment: { authorHandle: string; authorName: string; body: string }) {
  const mine = readMyPosts();
  const newComment: FeedComment = {
    id: `comment-${Date.now()}-${Math.round(Math.random() * 1e6)}`,
    createdAt: new Date().toISOString().slice(0, 10),
    ...comment,
  };
  const inMine = mine.some((p) => p.id === postId);
  if (inMine) {
    writeMyPosts(mine.map((p) => (p.id === postId ? { ...p, comments: [...p.comments, newComment] } : p)));
    return;
  }
  const seed = seedPosts().find((p) => p.id === postId);
  if (!seed) return;
  writeMyPosts([...mine, { ...seed, comments: [...seed.comments, newComment] }]);
}

/** All posts: seeded peer activity plus the current browser's own posts and any overrides (reactions/comments on seeded posts). */
export function useFeedPosts(): FeedPost[] {
  const [mine, setMine] = useState<FeedPost[]>([]);

  useEffect(() => {
    function sync() {
      setMine(readMyPosts());
    }
    sync();
    window.addEventListener(EVENT_NAME, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT_NAME, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const mineIds = new Set(mine.map((p) => p.id));
  const merged = [...mine, ...seedPosts().filter((p) => !mineIds.has(p.id))];
  return merged.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}
