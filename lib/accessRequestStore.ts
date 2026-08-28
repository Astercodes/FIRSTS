"use client";

import { useEffect, useState } from "react";

export type AccessRequest = {
  id: string;
  schoolName: string;
  note: string;
  status: "pending";
  createdAt: string;
};

const KEY = "firsts:employer-access-requests";
const EVENT_NAME = "firsts:employer-access-requests-change";

function readRequests(): AccessRequest[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as AccessRequest[]) : [];
  } catch {
    return [];
  }
}

function writeRequests(requests: AccessRequest[]) {
  window.localStorage.setItem(KEY, JSON.stringify(requests));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function requestAccess(schoolName: string, note: string): AccessRequest {
  const request: AccessRequest = {
    id: `req-${Date.now()}-${Math.round(Math.random() * 1e6)}`,
    schoolName,
    note,
    status: "pending",
    createdAt: new Date().toISOString().slice(0, 10),
  };
  writeRequests([request, ...readRequests()]);
  return request;
}

export function useAccessRequests(): AccessRequest[] {
  const [requests, setRequests] = useState<AccessRequest[]>([]);

  useEffect(() => {
    function sync() {
      setRequests(readRequests());
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
