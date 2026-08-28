"use client";

export type EmployerProfile = {
  contactName: string;
  email: string;
  company: string;
  /** Public-facing fields, shown on the company's shareable profile page when publicProfile is on. */
  tagline?: string;
  culture?: string;
  rolesHiredFor?: string[];
  /** Category codes (from CATEGORY_META) this employer says they weight most heavily. */
  valuedCategories?: string[];
  publicProfile?: boolean;
};

const KEY = "firsts:employer";
const EVENT_NAME = "firsts:employer-change";

export function employerSlug(company: string): string {
  const slug = company.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  return slug || "your-company";
}

export const MOCK_EMPLOYER: EmployerProfile = {
  contactName: "Sam Whitfield",
  email: "sam@acmecorp.com",
  company: "Acme Corp",
  tagline: "Where marketing analytics meets brand craft",
  culture:
    "We're a mid-size consumer analytics firm that ships fast and writes everything down. New hires pair with a mentor for their first quarter, and every team runs a monthly retro that anyone can join.",
  rolesHiredFor: ["Marketing Analyst", "Brand Coordinator", "Data Analyst", "Communications Associate"],
  valuedCategories: ["H", "R", "X", "Z"],
  publicProfile: true,
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
