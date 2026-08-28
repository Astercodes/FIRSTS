"use client";

import { useEffect, useState } from "react";

export type LetterRequestStatus = "pending" | "sent";

export type LetterRequest = {
  id: string;
  context: string;
  requestedAt: string;
  status: LetterRequestStatus;
};

const KEY = "firsts:facilitator-letter-requests";
const EVENT_NAME = "firsts:facilitator-letter-requests-change";

function readAll(): LetterRequest[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as LetterRequest[]) : [];
  } catch {
    return [];
  }
}

function writeAll(requests: LetterRequest[]) {
  window.localStorage.setItem(KEY, JSON.stringify(requests));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function requestLetter(context: string, today: Date = new Date()) {
  const request: LetterRequest = {
    id: `letter-${Date.now()}`,
    context,
    requestedAt: today.toISOString().slice(0, 10),
    status: "pending",
  };
  writeAll([request, ...readAll()]);
}

export function useLetterRequests(): LetterRequest[] {
  const [requests, setRequests] = useState<LetterRequest[]>([]);

  useEffect(() => {
    function sync() {
      setRequests(readAll());
    }
    sync();
    window.addEventListener(EVENT_NAME, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT_NAME, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return requests;
}
