"use client";

import { useEffect, useState } from "react";

export type LoungePost = {
  id: string;
  author: string;
  isYou?: boolean;
  body: string;
  postedAt: string;
  reactions: number;
};

const SEEDED_POSTS: LoungePost[] = [
  {
    id: "lounge-seed-1",
    author: "Devon Ashworth",
    body: "Ran my first Stage Five session this week, the mental models exercise landed way better once I gave them a real example first instead of the abstract version. Try it if you're facilitating that stage.",
    postedAt: "2026-08-24",
    reactions: 6,
  },
  {
    id: "lounge-seed-2",
    author: "Marcus Webb",
    body: "Anyone else find the Stage Two personal brand exercise runs long online? I've started cutting the warm-up to make time for it.",
    postedAt: "2026-08-25",
    reactions: 3,
  },
  {
    id: "lounge-seed-3",
    author: "Aiyana Redcloud",
    body: "Small win: a student from my Stage Six session messaged me two weeks later to say she used the feedback framework in a real interview and got the offer. This is why we do this.",
    postedAt: "2026-08-26",
    reactions: 11,
  },
];

const KEY = "firsts:facilitator-lounge";
const EVENT_NAME = "firsts:facilitator-lounge-change";

function readMine(): LoungePost[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as LoungePost[]) : [];
  } catch {
    return [];
  }
}

function writeMine(posts: LoungePost[]) {
  window.localStorage.setItem(KEY, JSON.stringify(posts));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function postToLounge(author: string, body: string, today: Date = new Date()) {
  const post: LoungePost = {
    id: `lounge-${Date.now()}`,
    author,
    isYou: true,
    body,
    postedAt: today.toISOString().slice(0, 10),
    reactions: 0,
  };
  writeMine([post, ...readMine()]);
}

export function useLoungePosts(): LoungePost[] {
  const [mine, setMine] = useState<LoungePost[]>([]);

  useEffect(() => {
    function sync() {
      setMine(readMine());
    }
    sync();
    window.addEventListener(EVENT_NAME, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT_NAME, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return [...mine, ...SEEDED_POSTS].sort((a, b) => (a.postedAt < b.postedAt ? 1 : -1));
}
