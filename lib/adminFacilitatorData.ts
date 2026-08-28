"use client";

import { STAGES, type StageId } from "@/lib/dashboardData";
import { useFacilitatorApplications, myApplication } from "@/lib/facilitatorApplicationStore";
import { useFacilitatorPortal, TIER_META, type FacilitatorTier } from "@/lib/facilitatorStore";
import { useFacilitatorTraining, computeEarnedTier } from "@/lib/facilitatorTrainingStore";
import { workshopKit } from "@/lib/facilitatorResourceStore";

export type BackgroundCheckStatus = "cleared" | "pending" | "not-started";
export type ActivityStatus = "active" | "inactive" | "lapsed";

export type AdminFacilitatorRecord = {
  id: string;
  name: string;
  email: string;
  tier: FacilitatorTier;
  stagesCertified: StageId[];
  stagesInTraining: StageId[];
  sessionsDelivered: number;
  studentsReached: number;
  avgRating: number | null;
  backgroundCheck: BackgroundCheckStatus;
  activity: ActivityStatus;
  joinedAt: string;
  staleResourceStages: StageId[];
  isYou?: boolean;
};

/**
 * There's no multi-user backend behind this app, so an already-active
 * roster is seeded to give the admin view real substance beyond the one
 * real browser user. Deliberately leaves Stage Nine with zero certified
 * facilitators so the coverage-gap view has something real to surface.
 */
const SEEDED_ROSTER: Omit<AdminFacilitatorRecord, "staleResourceStages">[] = [
  {
    id: "seed-fac-1",
    name: "Marcus Webb",
    email: "marcus.webb@example.com",
    tier: 2,
    stagesCertified: ["one", "two"],
    stagesInTraining: [],
    sessionsDelivered: 14,
    studentsReached: 210,
    avgRating: 4.8,
    backgroundCheck: "cleared",
    activity: "active",
    joinedAt: "2025-11-03",
  },
  {
    id: "seed-fac-2",
    name: "Priya Nandakumar",
    email: "priya.nandakumar@example.com",
    tier: 2,
    stagesCertified: ["one"],
    stagesInTraining: ["two"],
    sessionsDelivered: 9,
    studentsReached: 140,
    avgRating: 4.6,
    backgroundCheck: "cleared",
    activity: "active",
    joinedAt: "2026-01-14",
  },
  {
    id: "seed-fac-3",
    name: "Devon Ashworth",
    email: "devon.ashworth@example.com",
    tier: 3,
    stagesCertified: ["one", "three", "five"],
    stagesInTraining: [],
    sessionsDelivered: 31,
    studentsReached: 480,
    avgRating: 4.9,
    backgroundCheck: "cleared",
    activity: "active",
    joinedAt: "2025-06-22",
  },
  {
    id: "seed-fac-4",
    name: "Sofia Reyes",
    email: "sofia.reyes@example.com",
    tier: 0,
    stagesCertified: [],
    stagesInTraining: ["two"],
    sessionsDelivered: 0,
    studentsReached: 0,
    avgRating: null,
    backgroundCheck: "pending",
    activity: "active",
    joinedAt: "2026-08-10",
  },
  {
    id: "seed-fac-5",
    name: "Tobias Lindgren",
    email: "tobias.lindgren@example.com",
    tier: 2,
    stagesCertified: ["three", "four"],
    stagesInTraining: [],
    sessionsDelivered: 6,
    studentsReached: 75,
    avgRating: 4.2,
    backgroundCheck: "cleared",
    activity: "active",
    joinedAt: "2026-02-01",
  },
  {
    id: "seed-fac-6",
    name: "Aiyana Redcloud",
    email: "aiyana.redcloud@example.com",
    tier: 1,
    stagesCertified: ["six"],
    stagesInTraining: [],
    sessionsDelivered: 3,
    studentsReached: 40,
    avgRating: 4.7,
    backgroundCheck: "cleared",
    activity: "active",
    joinedAt: "2026-04-19",
  },
  {
    id: "seed-fac-7",
    name: "Grace Kim",
    email: "grace.kim@example.com",
    tier: 2,
    stagesCertified: ["seven"],
    stagesInTraining: [],
    sessionsDelivered: 11,
    studentsReached: 165,
    avgRating: 4.5,
    backgroundCheck: "cleared",
    activity: "inactive",
    joinedAt: "2025-09-08",
  },
  {
    id: "seed-fac-8",
    name: "Emmanuel Osei",
    email: "emmanuel.osei@example.com",
    tier: 1,
    stagesCertified: ["eight"],
    stagesInTraining: [],
    sessionsDelivered: 2,
    studentsReached: 22,
    avgRating: 4.0,
    backgroundCheck: "cleared",
    activity: "active",
    joinedAt: "2026-06-30",
  },
  {
    id: "seed-fac-9",
    name: "Lena Fischer",
    email: "lena.fischer@example.com",
    tier: 0,
    stagesCertified: [],
    stagesInTraining: ["one"],
    sessionsDelivered: 0,
    studentsReached: 0,
    avgRating: null,
    backgroundCheck: "not-started",
    activity: "active",
    joinedAt: "2026-08-20",
  },
  {
    id: "seed-fac-10",
    name: "Harold Voss",
    email: "harold.voss@example.com",
    tier: 2,
    stagesCertified: ["four"],
    stagesInTraining: [],
    sessionsDelivered: 5,
    studentsReached: 60,
    avgRating: 3.9,
    backgroundCheck: "cleared",
    activity: "lapsed",
    joinedAt: "2025-12-11",
  },
];

function staleStagesFor(stagesCertified: StageId[], seenVersions: Partial<Record<StageId, number>>): StageId[] {
  return stagesCertified.filter((s) => (seenVersions[s] ?? 1) < workshopKit(s).version);
}

/** Only Devon (the Tier 3 veteran) has already seen the revised Stage One kit; the rest are still on v1. */
const SEEDED_SEEN_VERSIONS: Record<string, Partial<Record<StageId, number>>> = {
  "seed-fac-3": { one: 2 },
};

function seededRoster(): AdminFacilitatorRecord[] {
  return SEEDED_ROSTER.map((f) => ({
    ...f,
    staleResourceStages: staleStagesFor(f.stagesCertified, SEEDED_SEEN_VERSIONS[f.id] ?? {}),
  }));
}

export function useAdminFacilitatorRoster(): AdminFacilitatorRecord[] {
  const applications = useFacilitatorApplications();
  const application = myApplication(applications);
  const { profile } = useFacilitatorPortal();
  const training = useFacilitatorTraining();

  const roster = seededRoster();

  if (application?.status === "accepted" && profile) {
    const certified: StageId[] = [];
    const inTraining: StageId[] = [];
    for (const stageId of application.stagesInterested) {
      const stage = training.stages[stageId];
      if (stage?.apprenticeship === "certified") certified.push(stageId);
      else inTraining.push(stageId);
    }
    const tier = Math.max(profile.tier, computeEarnedTier(training)) as FacilitatorTier;
    const staleResourceStages = certified.filter((s) => workshopKit(s).version > 1);
    const you: AdminFacilitatorRecord = {
      id: "you",
      name: application.name,
      email: application.email,
      tier,
      stagesCertified: certified,
      stagesInTraining: inTraining,
      sessionsDelivered: profile.sessionsDelivered,
      studentsReached: profile.studentsReached,
      avgRating: profile.avgRating,
      backgroundCheck: "pending",
      activity: "active",
      joinedAt: profile.joinedAt,
      staleResourceStages,
      isYou: true,
    };
    return [you, ...roster];
  }

  return roster;
}

export function coverageByStage(roster: AdminFacilitatorRecord[]): { stageId: StageId; label: string; certified: number; inTraining: number }[] {
  return STAGES.map((s) => ({
    stageId: s.id,
    label: s.shortLabel,
    certified: roster.filter((f) => f.stagesCertified.includes(s.id)).length,
    inTraining: roster.filter((f) => f.stagesInTraining.includes(s.id)).length,
  }));
}

export function orgImpactTotals(roster: AdminFacilitatorRecord[]): {
  totalSessions: number;
  totalStudents: number;
  activeFacilitators: number;
} {
  return {
    totalSessions: roster.reduce((sum, f) => sum + f.sessionsDelivered, 0),
    totalStudents: roster.reduce((sum, f) => sum + f.studentsReached, 0),
    activeFacilitators: roster.filter((f) => f.activity === "active").length,
  };
}

export { TIER_META };
