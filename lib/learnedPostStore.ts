"use client";

import { useEffect, useState } from "react";
import { FIRSTS, STAGES, type StageId } from "@/lib/dashboardData";
import { communityPeers } from "@/lib/communityData";

export type LearnedPost = {
  id: string;
  authorHandle: string;
  authorName: string;
  authorSchool: string;
  moduleId: number;
  moduleTitle: string;
  whatYouLearned: string;
  whatYouDid: string;
  advice: string;
  createdAt: string;
  helpfulBy: string[];
};

const KEY = "firsts:community-learned-posts";
const EVENT_NAME = "firsts:community-learned-posts-change";

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

const LEARNED_TEMPLATES = (title: string) => [
  `That "${title}" only counts once you can explain it in your own words, not just fill in the template.`,
  `The real work in ${title} was the second draft. The first one was just getting something down.`,
  `I underestimated how specific ${title} needed to be until I compared mine to a real example.`,
];

const DID_TEMPLATES = [
  "Blocked off 45 minutes, no phone, and just worked through the worksheet start to finish.",
  "Did a rough version first, slept on it, then came back the next day to tighten it up.",
  "Talked it through out loud with a friend before writing anything down, helped it click faster.",
];

const ADVICE_TEMPLATES = [
  "Don't overthink the first pass. Get something down, then make it good.",
  "Use a real example, not a hypothetical one. It's so much easier to get specific.",
  "Give yourself two sittings instead of one. The gap between them is where it actually improves.",
];

function daysAgoIso(days: number): string {
  const d = new Date("2026-08-28");
  d.setDate(d.getDate() - days);
  return d.toISOString().slice(0, 10);
}

function buildSeedPosts(): LearnedPost[] {
  const peers = communityPeers();
  const posts: LearnedPost[] = [];

  for (const peer of peers) {
    const stageIdx = STAGES.findIndex((s) => s.id === peer.currentStage);
    const completedStages: StageId[] = STAGES.slice(0, stageIdx).map((s) => s.id);
    if (completedStages.length === 0) continue;

    const postCount = seededInt(`${peer.handle}:learned-count`, 0, 2);
    for (let i = 0; i < postCount; i++) {
      const seed = `${peer.handle}:learned-${i}`;
      const stage = completedStages[seededInt(`${seed}:stage`, 0, completedStages.length - 1)];
      const stageModules = FIRSTS.filter((m) => m.stage === stage);
      if (stageModules.length === 0) continue;
      const mod = stageModules[seededInt(`${seed}:module`, 0, stageModules.length - 1)];

      const learnedOptions = LEARNED_TEMPLATES(mod.title);
      posts.push({
        id: `seed-learned-${peer.handle}-${i}`,
        authorHandle: peer.handle,
        authorName: peer.name,
        authorSchool: peer.school,
        moduleId: mod.id,
        moduleTitle: mod.title,
        whatYouLearned: learnedOptions[seededInt(`${seed}:learned`, 0, learnedOptions.length - 1)],
        whatYouDid: DID_TEMPLATES[seededInt(`${seed}:did`, 0, DID_TEMPLATES.length - 1)],
        advice: ADVICE_TEMPLATES[seededInt(`${seed}:advice`, 0, ADVICE_TEMPLATES.length - 1)],
        createdAt: daysAgoIso(seededInt(`${seed}:days`, 1, 120)),
        helpfulBy: peers.filter((p) => seededUnit(`${seed}:helpful:${p.handle}`) < 0.15).map((p) => p.handle),
      });
    }
  }

  return posts;
}

let cachedSeedPosts: LearnedPost[] | null = null;
function seedPosts(): LearnedPost[] {
  if (!cachedSeedPosts) cachedSeedPosts = buildSeedPosts();
  return cachedSeedPosts;
}

function readMyPosts(): LearnedPost[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as LearnedPost[]) : [];
  } catch {
    return [];
  }
}

function writeMyPosts(posts: LearnedPost[]) {
  window.localStorage.setItem(KEY, JSON.stringify(posts));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function createLearnedPost(input: {
  authorHandle: string;
  authorName: string;
  authorSchool: string;
  moduleId: number;
  moduleTitle: string;
  whatYouLearned: string;
  whatYouDid: string;
  advice: string;
}): LearnedPost {
  const post: LearnedPost = {
    id: `learned-${Date.now()}-${Math.round(Math.random() * 1e6)}`,
    createdAt: new Date().toISOString().slice(0, 10),
    helpfulBy: [],
    ...input,
  };
  writeMyPosts([post, ...readMyPosts()]);
  return post;
}

export function toggleHelpful(postId: string, myHandle: string) {
  const mine = readMyPosts();
  const inMine = mine.some((p) => p.id === postId);
  if (inMine) {
    writeMyPosts(mine.map((p) => (p.id === postId ? withToggledHelpful(p, myHandle) : p)));
    return;
  }
  const seed = seedPosts().find((p) => p.id === postId);
  if (!seed) return;
  writeMyPosts([...mine, withToggledHelpful(seed, myHandle)]);
}

function withToggledHelpful(post: LearnedPost, handle: string): LearnedPost {
  const reacted = post.helpfulBy.includes(handle);
  return { ...post, helpfulBy: reacted ? post.helpfulBy.filter((h) => h !== handle) : [...post.helpfulBy, handle] };
}

export function postsForModule(all: LearnedPost[], moduleId: number): LearnedPost[] {
  return all.filter((p) => p.moduleId === moduleId).sort((a, b) => b.helpfulBy.length - a.helpfulBy.length);
}

/** All "what I learned" posts: seeded peer reflections plus the current browser's own posts and any helpful-toggle overrides. */
export function useLearnedPosts(): LearnedPost[] {
  const [mine, setMine] = useState<LearnedPost[]>([]);

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
  return [...mine, ...seedPosts().filter((p) => !mineIds.has(p.id))];
}
