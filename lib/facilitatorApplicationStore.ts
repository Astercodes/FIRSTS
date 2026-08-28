"use client";

import { useEffect, useState } from "react";
import type { StageId } from "@/lib/dashboardData";

export type FormatPreference = "Online" | "In-person" | "Both";
export type ApplicationStatus = "pending" | "under-review" | "accepted" | "declined";

export type FacilitatorApplication = {
  id: string;
  name: string;
  email: string;
  background: string;
  stagesInterested: StageId[];
  priorExperience: string;
  availability: string;
  formatPreference: FormatPreference;
  createdAt: string;
  status: ApplicationStatus;
  /** True for the current browser's own application, false for seeded applicants an admin would review. */
  isMine: boolean;
};

const KEY = "firsts:facilitator-applications";
const EVENT_NAME = "firsts:facilitator-applications-change";

/**
 * There's no live review queue behind this app, so a handful of other
 * applicants are seeded as "pending" so the internal admin backend has
 * something real to triage. The current browser's own application is
 * auto-accepted on submit, since there's no reviewer on the other end to
 * simulate waiting on, the same approach used for synthetic peer replies
 * elsewhere in this app.
 */
const SEEDED_APPLICATIONS: FacilitatorApplication[] = [
  {
    id: "seed-app-1",
    name: "Renee Okafor",
    email: "renee.okafor@example.com",
    background: "Career coach at a nonprofit for five years, ran group workshops weekly.",
    stagesInterested: ["one", "two"],
    priorExperience: "Led a 12-week job readiness cohort program.",
    availability: "8 to 10 hrs/month",
    formatPreference: "Both",
    createdAt: "2026-08-12",
    status: "pending",
    isMine: false,
  },
  {
    id: "seed-app-2",
    name: "Miguel Torres",
    email: "miguel.torres@example.com",
    background: "Data analyst who mentors junior hires informally.",
    stagesInterested: ["seven"],
    priorExperience: "No formal facilitation experience, strong technical background.",
    availability: "4 to 6 hrs/month",
    formatPreference: "Online",
    createdAt: "2026-08-18",
    status: "pending",
    isMine: false,
  },
  {
    id: "seed-app-3",
    name: "Hannah Cole",
    email: "hannah.cole@example.com",
    background: "Former resident advisor, now HR generalist.",
    stagesInterested: ["four", "eight"],
    priorExperience: "Trained new RAs for two years, ran orientation sessions.",
    availability: "10+ hrs/month",
    formatPreference: "In-person",
    createdAt: "2026-08-05",
    status: "under-review",
    isMine: false,
  },
];

function readAll(): FacilitatorApplication[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as FacilitatorApplication[]) : [];
  } catch {
    return [];
  }
}

function writeAll(applications: FacilitatorApplication[]) {
  window.localStorage.setItem(KEY, JSON.stringify(applications));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function submitApplication(input: {
  name: string;
  email: string;
  background: string;
  stagesInterested: StageId[];
  priorExperience: string;
  availability: string;
  formatPreference: FormatPreference;
}): FacilitatorApplication {
  const application: FacilitatorApplication = {
    id: `app-${Date.now()}-${Math.round(Math.random() * 1e6)}`,
    createdAt: new Date().toISOString().slice(0, 10),
    status: "accepted",
    isMine: true,
    ...input,
  };
  const others = readAll().filter((a) => !a.isMine);
  writeAll([application, ...others]);
  return application;
}

export function setApplicationStatus(id: string, status: ApplicationStatus) {
  const all = readAll();
  writeAll(all.map((a) => (a.id === id ? { ...a, status } : a)));
}

export function myApplication(all: FacilitatorApplication[]): FacilitatorApplication | undefined {
  return all.find((a) => a.isMine);
}

/** All applications: the current browser's own submission plus seeded applicants for the admin review queue. */
export function useFacilitatorApplications(): FacilitatorApplication[] {
  const [mine, setMine] = useState<FacilitatorApplication[]>([]);

  useEffect(() => {
    function sync() {
      setMine(readAll());
    }
    sync();
    window.addEventListener(EVENT_NAME, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT_NAME, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const mineOwn = mine.filter((a) => a.isMine);
  const seededOverrides = new Set(mine.filter((a) => !a.isMine).map((a) => a.id));
  const seeded = SEEDED_APPLICATIONS.filter((a) => !seededOverrides.has(a.id));
  const overriddenSeeded = mine.filter((a) => !a.isMine);
  return [...mineOwn, ...overriddenSeeded, ...seeded];
}
