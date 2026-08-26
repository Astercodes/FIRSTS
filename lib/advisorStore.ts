"use client";

export type AdvisorRole = "Advisor / Mentor" | "Institution Admin";

export type AdvisorProfile = {
  name: string;
  email: string;
  institution: string;
  role: AdvisorRole;
  title?: string;
  bio?: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  photo?: string | null;
};

const KEY = "firsts:advisor";
const EVENT_NAME = "firsts:advisor-change";

export const MOCK_ADVISOR: AdvisorProfile = {
  name: "Priya Nandakumar",
  email: "priya@nyu.edu",
  institution: "New York University",
  role: "Institution Admin",
  title: "Director of Career Services",
  bio: "I lead the career center's advising team and own how we report outcomes back to the deans. Most days I'm split between one-on-ones and figuring out what's actually moving the needle across cohorts.",
  phone: "+1 (212) 555-0147",
  location: "New York, NY",
  linkedin: "linkedin.com/in/priyanandakumar",
  photo: null,
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
