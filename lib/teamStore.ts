"use client";

import { useEffect, useState } from "react";

export type TeamRole = "Admin" | "Recruiter" | "Hiring Manager" | "University Relations";

export const TEAM_ROLES: TeamRole[] = ["Admin", "Recruiter", "Hiring Manager", "University Relations"];

export type TeamMember = {
  id: string;
  name: string;
  email: string;
  role: TeamRole;
  addedAt: string;
};

const KEY = "firsts:employer-team";
const EVENT_NAME = "firsts:employer-team-change";

const SEED_TEAM: TeamMember[] = [
  { id: "seed-1", name: "Sam Whitfield", email: "sam@acmecorp.com", role: "Admin", addedAt: "2025-09-01" },
  { id: "seed-2", name: "Priya Anand", email: "priya@acmecorp.com", role: "Recruiter", addedAt: "2025-11-14" },
  { id: "seed-3", name: "Marcus Webb", email: "marcus@acmecorp.com", role: "University Relations", addedAt: "2026-02-03" },
];

function readTeam(): TeamMember[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as TeamMember[]) : SEED_TEAM;
  } catch {
    return SEED_TEAM;
  }
}

function writeTeam(team: TeamMember[]) {
  window.localStorage.setItem(KEY, JSON.stringify(team));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function addTeamMember(input: { name: string; email: string; role: TeamRole }): TeamMember {
  const member: TeamMember = {
    id: `member-${Date.now()}-${Math.round(Math.random() * 1e6)}`,
    addedAt: new Date().toISOString().slice(0, 10),
    ...input,
  };
  writeTeam([...readTeam(), member]);
  return member;
}

export function removeTeamMember(id: string) {
  writeTeam(readTeam().filter((m) => m.id !== id));
}

export function setTeamMemberRole(id: string, role: TeamRole) {
  writeTeam(readTeam().map((m) => (m.id === id ? { ...m, role } : m)));
}

export function useTeam(): TeamMember[] {
  const [team, setTeam] = useState<TeamMember[]>(SEED_TEAM);

  useEffect(() => {
    function sync() {
      setTeam(readTeam());
    }
    sync();
    window.addEventListener(EVENT_NAME, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT_NAME, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return team;
}
