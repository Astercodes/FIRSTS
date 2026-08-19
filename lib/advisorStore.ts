"use client";

export type AdvisorRole = "Advisor / Mentor" | "Institution Admin";

export type AdvisorProfile = {
  name: string;
  email: string;
  institution: string;
  role: AdvisorRole;
};

const KEY = "firsts:advisor";
const EVENT_NAME = "firsts:advisor-change";

export const MOCK_ADVISOR: AdvisorProfile = {
  name: "Priya Nandakumar",
  email: "priya@nyu.edu",
  institution: "New York University",
  role: "Institution Admin",
};

export function saveAdvisor(profile: AdvisorProfile) {
  window.localStorage.setItem(KEY, JSON.stringify(profile));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function loadAdvisor(): AdvisorProfile | null {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as AdvisorProfile) : null;
  } catch {
    return null;
  }
}

export { EVENT_NAME as ADVISOR_CHANGE_EVENT };
