"use client";

import { useEffect, useState } from "react";
import { slugifyName } from "@/lib/communityData";

export type PartnerRequest = {
  id: string;
  peerHandle: string;
  peerName: string;
  direction: "outgoing" | "incoming";
  createdAt: string;
};

export type CheckinMessage = {
  id: string;
  from: "me" | "partner";
  body: string;
  createdAt: string;
};

export type PartnerState = {
  currentPartnerHandle: string | null;
  currentPartnerName: string | null;
  pairedSince: string | null;
  requests: PartnerRequest[];
  checkins: CheckinMessage[];
};

const KEY = "firsts:accountability-partner";
const EVENT_NAME = "firsts:accountability-partner-change";

const SEED_PEER_NAME = "Aaliyah Brooks";
const SEED_PEER_SCHOOL = "New York University";

const SEED_STATE: PartnerState = {
  currentPartnerHandle: null,
  currentPartnerName: null,
  pairedSince: null,
  requests: [
    {
      id: "seed-req-1",
      peerHandle: slugifyName(SEED_PEER_NAME, `${SEED_PEER_SCHOOL}:${SEED_PEER_NAME}`),
      peerName: SEED_PEER_NAME,
      direction: "incoming",
      createdAt: "2026-08-24",
    },
  ],
  checkins: [],
};

function readState(): PartnerState {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as PartnerState) : SEED_STATE;
  } catch {
    return SEED_STATE;
  }
}

function writeState(state: PartnerState) {
  window.localStorage.setItem(KEY, JSON.stringify(state));
  window.dispatchEvent(new Event(EVENT_NAME));
}

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

/** Sends a request. Since there's no live person on the other end, the peer accepts right away, framed as a real confirmation rather than a silent instant-pair. */
export function sendPartnerRequest(peerHandle: string, peerName: string): PartnerState {
  const state = readState();
  const next: PartnerState = {
    ...state,
    currentPartnerHandle: peerHandle,
    currentPartnerName: peerName,
    pairedSince: todayIso(),
    requests: state.requests.filter((r) => r.peerHandle !== peerHandle),
    checkins: [
      {
        id: `seed-checkin-${peerHandle}`,
        from: "partner",
        body: `Hey, excited to be paired up! How's your week going so far?`,
        createdAt: todayIso(),
      },
    ],
  };
  writeState(next);
  return next;
}

export function acceptRequest(requestId: string): PartnerState {
  const state = readState();
  const request = state.requests.find((r) => r.id === requestId);
  if (!request) return state;
  const next: PartnerState = {
    ...state,
    currentPartnerHandle: request.peerHandle,
    currentPartnerName: request.peerName,
    pairedSince: todayIso(),
    requests: state.requests.filter((r) => r.id !== requestId),
    checkins: [
      {
        id: `seed-checkin-${request.peerHandle}`,
        from: "partner",
        body: `Glad you accepted! Let's keep each other honest this stage.`,
        createdAt: todayIso(),
      },
    ],
  };
  writeState(next);
  return next;
}

export function declineRequest(requestId: string) {
  const state = readState();
  writeState({ ...state, requests: state.requests.filter((r) => r.id !== requestId) });
}

/** Framed neutrally: paces mismatch, life gets busy, no fault assigned. */
export function unmatchPartner() {
  const state = readState();
  writeState({ ...state, currentPartnerHandle: null, currentPartnerName: null, pairedSince: null, checkins: [] });
}

export function sendCheckin(body: string) {
  const state = readState();
  const message: CheckinMessage = {
    id: `checkin-${Date.now()}-${Math.round(Math.random() * 1e6)}`,
    from: "me",
    body,
    createdAt: todayIso(),
  };
  writeState({ ...state, checkins: [...state.checkins, message] });
}

export const NUDGE_PRESET = "Thinking of you, how's it going this stage?";

export function sendNudge() {
  sendCheckin(NUDGE_PRESET);
}

export function usePartnerState(): PartnerState {
  const [state, setState] = useState<PartnerState>(SEED_STATE);

  useEffect(() => {
    function sync() {
      setState(readState());
    }
    sync();
    window.addEventListener(EVENT_NAME, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT_NAME, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return state;
}
