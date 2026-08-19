import { FIRSTS } from "./dashboardData";

const STAGE_COUNTS = {
  one: FIRSTS.filter((f) => f.stage === "one").length,
  two: FIRSTS.filter((f) => f.stage === "two").length,
  three: FIRSTS.filter((f) => f.stage === "three").length,
  four: FIRSTS.filter((f) => f.stage === "four").length,
};

const TOTAL_COUNT =
  STAGE_COUNTS.one + STAGE_COUNTS.two + STAGE_COUNTS.three + STAGE_COUNTS.four;

export type CohortStudent = {
  id: number;
  name: string;
  email: string;
  stagePct: { one: number; two: number; three: number; four: number };
  daysInactive: number;
  sharedCount: number;
};

export type Cohort = {
  id: string;
  name: string;
  focus: string;
  institution: string;
  students: CohortStudent[];
};

export function studentOverallPct(s: CohortStudent): number {
  const weighted =
    STAGE_COUNTS.one * s.stagePct.one +
    STAGE_COUNTS.two * s.stagePct.two +
    STAGE_COUNTS.three * s.stagePct.three +
    STAGE_COUNTS.four * s.stagePct.four;
  return Math.round(weighted / TOTAL_COUNT);
}

export function isAtRisk(s: CohortStudent): boolean {
  return s.daysInactive >= 21;
}

export function cohortAvgCompletion(c: Cohort): number {
  if (c.students.length === 0) return 0;
  return Math.round(
    c.students.reduce((sum, s) => sum + studentOverallPct(s), 0) / c.students.length
  );
}

export function cohortAtRiskCount(c: Cohort): number {
  return c.students.filter(isAtRisk).length;
}

export function cohortActiveCount(c: Cohort): number {
  return c.students.filter((s) => s.daysInactive < 7).length;
}

export const COHORTS: Cohort[] = [
  {
    id: "marketing-2027",
    name: "Marketing · Class of 2027",
    focus: "Marketing & Communications",
    institution: "New York University",
    students: [
      { id: 1, name: "Jordan Reyes", email: "jreyes@nyu.edu", stagePct: { one: 100, two: 65, three: 20, four: 0 }, daysInactive: 1, sharedCount: 4 },
      { id: 2, name: "Maya Okafor", email: "mokafor@nyu.edu", stagePct: { one: 100, two: 100, three: 80, four: 40 }, daysInactive: 0, sharedCount: 7 },
      { id: 3, name: "Ethan Park", email: "epark@nyu.edu", stagePct: { one: 78, two: 10, three: 0, four: 0 }, daysInactive: 4, sharedCount: 1 },
      { id: 4, name: "Sofia Mendez", email: "smendez@nyu.edu", stagePct: { one: 100, two: 40, three: 0, four: 0 }, daysInactive: 26, sharedCount: 2 },
      { id: 5, name: "Liam Chen", email: "lchen@nyu.edu", stagePct: { one: 44, two: 0, three: 0, four: 0 }, daysInactive: 33, sharedCount: 0 },
      { id: 6, name: "Aaliyah Brooks", email: "abrooks@nyu.edu", stagePct: { one: 100, two: 85, three: 60, four: 20 }, daysInactive: 2, sharedCount: 5 },
      { id: 7, name: "Noah Kim", email: "nkim@nyu.edu", stagePct: { one: 89, two: 25, three: 0, four: 0 }, daysInactive: 6, sharedCount: 2 },
      { id: 8, name: "Fatima Rahman", email: "frahman@nyu.edu", stagePct: { one: 100, two: 100, three: 100, four: 64 }, daysInactive: 0, sharedCount: 9 },
      { id: 9, name: "Deshawn Carter", email: "dcarter@nyu.edu", stagePct: { one: 22, two: 0, three: 0, four: 0 }, daysInactive: 41, sharedCount: 0 },
    ],
  },
  {
    id: "business-analytics-2026",
    name: "Business Analytics · Class of 2026",
    focus: "Business Analytics",
    institution: "New York University",
    students: [
      { id: 10, name: "Grace Liu", email: "gliu@nyu.edu", stagePct: { one: 100, two: 100, three: 100, four: 88 }, daysInactive: 0, sharedCount: 8 },
      { id: 11, name: "Marcus Webb", email: "mwebb@nyu.edu", stagePct: { one: 100, two: 55, three: 15, four: 0 }, daysInactive: 3, sharedCount: 3 },
      { id: 12, name: "Priya Shah", email: "pshah@nyu.edu", stagePct: { one: 67, two: 5, three: 0, four: 0 }, daysInactive: 12, sharedCount: 1 },
      { id: 13, name: "Tomas Novak", email: "tnovak@nyu.edu", stagePct: { one: 100, two: 30, three: 0, four: 0 }, daysInactive: 29, sharedCount: 0 },
      { id: 14, name: "Aisha Bello", email: "abello@nyu.edu", stagePct: { one: 100, two: 90, three: 45, four: 8 }, daysInactive: 1, sharedCount: 6 },
      { id: 15, name: "Ryan O'Connor", email: "roconnor@nyu.edu", stagePct: { one: 11, two: 0, three: 0, four: 0 }, daysInactive: 38, sharedCount: 0 },
      { id: 16, name: "Ivy Zhang", email: "izhang@nyu.edu", stagePct: { one: 100, two: 100, three: 50, four: 0 }, daysInactive: 5, sharedCount: 4 },
    ],
  },
];

export function getCohort(id: string): Cohort | undefined {
  return COHORTS.find((c) => c.id === id);
}

export function allStudentsAcrossCohorts(): CohortStudent[] {
  return COHORTS.flatMap((c) => c.students);
}
