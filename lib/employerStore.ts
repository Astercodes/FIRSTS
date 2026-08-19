"use client";

export type EmployerProfile = {
  contactName: string;
  email: string;
  company: string;
};

const KEY = "firsts:employer";
const EVENT_NAME = "firsts:employer-change";

export const MOCK_EMPLOYER: EmployerProfile = {
  contactName: "Sam Whitfield",
  email: "sam@acmecorp.com",
  company: "Acme Corp",
};

export function saveEmployer(profile: EmployerProfile) {
  window.localStorage.setItem(KEY, JSON.stringify(profile));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function loadEmployer(): EmployerProfile | null {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as EmployerProfile) : null;
  } catch {
    return null;
  }
}

export { EVENT_NAME as EMPLOYER_CHANGE_EVENT };
