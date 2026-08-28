import { STAGES, FIRSTS, type StageId } from "@/lib/dashboardData";
import { getCohort } from "@/lib/cohortData";

function hashString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function seededUnit(seed: string): number {
  return (hashString(seed) % 10000) / 10000;
}

function seededInt(seed: string, min: number, max: number): number {
  return min + Math.floor(seededUnit(seed) * (max - min + 1));
}

export function slugifyName(name: string, salt: string): string {
  const base = name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  const suffix = hashString(salt).toString(36).slice(0, 4);
  return `${base}-${suffix}`;
}

export const STANDOUT_BADGE_TITLES = [
  "Side Project Shipped",
  "Volunteer Impact Made",
  "Certification Earned",
  "Strategic Goal Set",
  "Thought Leadership Published",
];

export type PeerCommunityProfile = {
  handle: string;
  name: string;
  school: string;
  accountType: "partner" | "independent";
  major: string;
  gradYear: string;
  currentStage: StageId;
  currentlyWorkingOn: string;
  streak: number;
  badges: string[];
  bio: string;
};

const SAMPLE_COHORTS = [
  { id: "marketing-2027", major: "Marketing" },
  { id: "business-analytics-2026", major: "Business Analytics" },
  { id: "hci-2026", major: "Human-Computer Interaction" },
  { id: "public-policy-2027", major: "Public Policy" },
  { id: "ross-2027", major: "Business" },
  { id: "meche-2026", major: "Mechanical Engineering" },
  { id: "comms-2026", major: "Communications" },
  { id: "polisci-how-2026", major: "Political Science" },
  { id: "public-health-2027", major: "Public Health" },
  { id: "cs-gsu-2026", major: "Computer Science" },
  { id: "econ-2026", major: "Economics" },
  { id: "cs-unilag-2026", major: "Computer Science" },
];

const INDEPENDENT_PEERS: { name: string; major: string; gradYear: string; bio: string }[] = [
  { name: "Tessa Brennan", major: "Self-taught Product Design", gradYear: "2026", bio: "Left a hospitality job to break into product design. No school behind me, just this." },
  { name: "Kwame Osei", major: "Career-changer, ex-teacher", gradYear: "2025", bio: "Six years teaching, now retooling for data analytics. Learning in public." },
  { name: "Ines Delgado", major: "Freelance writer", gradYear: "2027", bio: "Building a portfolio toward in-house communications work." },
  { name: "Ravi Chandran", major: "Bootcamp grad, software", gradYear: "2026", bio: "Finished a coding bootcamp, now doing the career-readiness work nobody taught there." },
  { name: "Chloe Nakamura", major: "Community college transfer", gradYear: "2028", bio: "Transferring next year, using FIRSTS to get ahead of the curve now." },
  { name: "Desmond Okoye", major: "Early professional, ops", gradYear: "2024", bio: "Two years into an ops role, working through the stages I skipped as a new grad." },
  { name: "Priya Balan", major: "Gap-year, pre-grad school", gradYear: "2027", bio: "Taking a year before grad school to build real career fundamentals." },
  { name: "Marcus Yates", major: "Military transition", gradYear: "2025", bio: "Transitioning out of active duty into corporate strategy work." },
];

function pickWorkingOn(stage: StageId, seed: string): string {
  const stageModules = FIRSTS.filter((m) => m.stage === stage);
  if (stageModules.length === 0) return "Getting started";
  const idx = seededInt(`${seed}:working-on`, 0, stageModules.length - 1);
  return stageModules[idx].title;
}

function pickBadges(stage: StageId, seed: string): string[] {
  const stageIndex = STAGES.findIndex((s) => s.id === stage);
  const completedStages = STAGES.slice(0, stageIndex).map((s) => `${s.shortLabel} Complete`);
  const standoutCount = seededInt(`${seed}:standout-count`, 0, 2);
  const standout = STANDOUT_BADGE_TITLES.filter((_, i) => seededUnit(`${seed}:standout-${i}`) < 0.35).slice(0, standoutCount);
  return [...completedStages, ...standout];
}

function buildPeer(name: string, school: string, accountType: "partner" | "independent", major: string, gradYear: string, bio: string): PeerCommunityProfile {
  const seed = `${school}:${name}`;
  const stageIndex = seededInt(`${seed}:stage`, 0, STAGES.length - 1);
  const stage = STAGES[stageIndex].id;
  return {
    handle: slugifyName(name, seed),
    name,
    school,
    accountType,
    major,
    gradYear,
    currentStage: stage,
    currentlyWorkingOn: pickWorkingOn(stage, seed),
    streak: seededInt(`${seed}:streak`, 0, 45),
    badges: pickBadges(stage, seed),
    bio,
  };
}

let cachedPeers: PeerCommunityProfile[] | null = null;

/** A synthetic peer directory: partner-school students sampled from real cohorts, plus hand-authored independent peers, for community discovery and matching. */
export function communityPeers(): PeerCommunityProfile[] {
  if (cachedPeers) return cachedPeers;

  const peers: PeerCommunityProfile[] = [];

  for (const sample of SAMPLE_COHORTS) {
    const cohort = getCohort(sample.id);
    if (!cohort) continue;
    for (const student of cohort.students.slice(0, 6)) {
      const gradYear = cohort.name.match(/(\d{4})/)?.[1] ?? "2027";
      peers.push(
        buildPeer(
          student.name,
          cohort.institution,
          "partner",
          sample.major,
          gradYear,
          `${sample.major} at ${cohort.institution}.`
        )
      );
    }
  }

  for (const ind of INDEPENDENT_PEERS) {
    peers.push(buildPeer(ind.name, "Independent", "independent", ind.major, ind.gradYear, ind.bio));
  }

  cachedPeers = peers;
  return peers;
}

export function findPeerByHandle(handle: string): PeerCommunityProfile | undefined {
  return communityPeers().find((p) => p.handle === handle);
}
