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
  /** Average completion, sampled roughly weekly over the last 8 weeks, for trend charts. */
  weeklyTrend: number[];
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

export function isOnWatch(s: CohortStudent): boolean {
  return s.daysInactive >= 7 && s.daysInactive < 21;
}

export function isActive(s: CohortStudent): boolean {
  return s.daysInactive < 7;
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
  return c.students.filter(isActive).length;
}

export function cohortWatchCount(c: Cohort): number {
  return c.students.filter(isOnWatch).length;
}

export const COHORTS: Cohort[] = [
  {
    id: "marketing-2027",
    name: "Marketing · Class of 2027",
    focus: "Marketing & Communications",
    institution: "New York University",
    weeklyTrend: [34, 37, 39, 44, 47, 51, 55, 59],
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
      { id: 96, name: "Uma Ekwueme", email: "uekwueme@nyu.edu", stagePct: { one: 100, two: 81, three: 34, four: 17 }, daysInactive: 0, sharedCount: 5 },
      { id: 97, name: "Leo Baptiste", email: "lbaptiste@nyu.edu", stagePct: { one: 76, two: 11, three: 0, four: 0 }, daysInactive: 9, sharedCount: 1 },
      { id: 98, name: "Aiden Chen", email: "achen@nyu.edu", stagePct: { one: 100, two: 97, three: 57, four: 1 }, daysInactive: 3, sharedCount: 7 },
      { id: 99, name: "Hassan Haddad", email: "hhaddad@nyu.edu", stagePct: { one: 100, two: 43, three: 18, four: 0 }, daysInactive: 5, sharedCount: 2 },
      { id: 100, name: "Diego Haddad", email: "dhaddad@nyu.edu", stagePct: { one: 100, two: 100, three: 97, four: 38 }, daysInactive: 0, sharedCount: 9 },
      { id: 101, name: "Jamal Reyes", email: "jamreyes@nyu.edu", stagePct: { one: 100, two: 100, three: 79, four: 65 }, daysInactive: 3, sharedCount: 7 },
      { id: 102, name: "Grace Silva", email: "gsilva@nyu.edu", stagePct: { one: 100, two: 52, three: 11, four: 0 }, daysInactive: 1, sharedCount: 3 },
    ],
  },
  {
    id: "business-analytics-2026",
    name: "Business Analytics · Class of 2026",
    focus: "Business Analytics",
    institution: "New York University",
    weeklyTrend: [42, 44, 48, 50, 55, 58, 62, 66],
    students: [
      { id: 10, name: "Grace Liu", email: "gliu@nyu.edu", stagePct: { one: 100, two: 100, three: 100, four: 88 }, daysInactive: 0, sharedCount: 8 },
      { id: 11, name: "Marcus Webb", email: "mwebb@nyu.edu", stagePct: { one: 100, two: 55, three: 15, four: 0 }, daysInactive: 3, sharedCount: 3 },
      { id: 12, name: "Priya Shah", email: "pshah@nyu.edu", stagePct: { one: 67, two: 5, three: 0, four: 0 }, daysInactive: 12, sharedCount: 1 },
      { id: 13, name: "Tomas Novak", email: "tnovak@nyu.edu", stagePct: { one: 100, two: 30, three: 0, four: 0 }, daysInactive: 29, sharedCount: 0 },
      { id: 14, name: "Aisha Bello", email: "abello@nyu.edu", stagePct: { one: 100, two: 90, three: 45, four: 8 }, daysInactive: 1, sharedCount: 6 },
      { id: 15, name: "Ryan O'Connor", email: "roconnor@nyu.edu", stagePct: { one: 11, two: 0, three: 0, four: 0 }, daysInactive: 38, sharedCount: 0 },
      { id: 16, name: "Ivy Zhang", email: "izhang@nyu.edu", stagePct: { one: 100, two: 100, three: 50, four: 0 }, daysInactive: 5, sharedCount: 4 },
      { id: 103, name: "Elena Silva", email: "esilva@nyu.edu", stagePct: { one: 100, two: 100, three: 76, four: 61 }, daysInactive: 2, sharedCount: 10 },
      { id: 104, name: "Bianca Yilmaz", email: "byilmaz@nyu.edu", stagePct: { one: 100, two: 98, three: 59, four: 11 }, daysInactive: 0, sharedCount: 4 },
      { id: 105, name: "Lucas Whitfield", email: "lwhitfield@nyu.edu", stagePct: { one: 100, two: 45, three: 18, four: 0 }, daysInactive: 3, sharedCount: 3 },
      { id: 106, name: "Femi Castellano", email: "fcastellano@nyu.edu", stagePct: { one: 100, two: 94, three: 48, four: 19 }, daysInactive: 0, sharedCount: 3 },
      { id: 107, name: "Gina Nakamura", email: "gnakamura@nyu.edu", stagePct: { one: 100, two: 100, three: 80, four: 39 }, daysInactive: 1, sharedCount: 9 },
      { id: 108, name: "Carla Vasquez", email: "cvasquez@nyu.edu", stagePct: { one: 100, two: 100, three: 87, four: 66 }, daysInactive: 3, sharedCount: 8 },
    ],
  },
  {
    id: "cs-2028",
    name: "Computer Science · Class of 2028",
    focus: "Computer Science",
    institution: "New York University",
    weeklyTrend: [24, 27, 30, 33, 35, 40, 43, 47],
    students: [
      { id: 17, name: "Omar Baptiste", email: "obaptiste@nyu.edu", stagePct: { one: 100, two: 55, three: 7, four: 0 }, daysInactive: 2, sharedCount: 3 },
      { id: 18, name: "Nadia Santos", email: "nsantos@nyu.edu", stagePct: { one: 100, two: 74, three: 2, four: 0 }, daysInactive: 5, sharedCount: 2 },
      { id: 19, name: "Elena Baptiste", email: "ebaptiste@nyu.edu", stagePct: { one: 100, two: 100, three: 77, four: 62 }, daysInactive: 1, sharedCount: 6 },
      { id: 20, name: "Zara Uzoma", email: "zuzoma@nyu.edu", stagePct: { one: 100, two: 74, three: 13, four: 0 }, daysInactive: 2, sharedCount: 2 },
      { id: 21, name: "Jonas Adeyemi", email: "jadeyemi@nyu.edu", stagePct: { one: 100, two: 50, three: 22, four: 0 }, daysInactive: 4, sharedCount: 2 },
      { id: 22, name: "Jonas Jansen", email: "jjansen@nyu.edu", stagePct: { one: 100, two: 100, three: 94, four: 51 }, daysInactive: 0, sharedCount: 6 },
      { id: 23, name: "Yara Gutierrez", email: "ygutierrez@nyu.edu", stagePct: { one: 100, two: 91, three: 68, four: 8 }, daysInactive: 3, sharedCount: 3 },
      { id: 24, name: "Ivo Idowu", email: "iidowu@nyu.edu", stagePct: { one: 100, two: 100, three: 99, four: 54 }, daysInactive: 0, sharedCount: 10 },
      { id: 25, name: "Leo Okonkwo", email: "lokonkwo@nyu.edu", stagePct: { one: 100, two: 63, three: 18, four: 0 }, daysInactive: 2, sharedCount: 3 },
      { id: 26, name: "Isla Chen", email: "ichen@nyu.edu", stagePct: { one: 100, two: 58, three: 2, four: 0 }, daysInactive: 8, sharedCount: 1 },
    ],
  },
  {
    id: "hci-2026",
    name: "Human-Computer Interaction · Class of 2026",
    focus: "Human-Computer Interaction",
    institution: "Stanford University",
    weeklyTrend: [30, 33, 35, 39, 44, 46, 50, 54],
    students: [
      { id: 27, name: "Mei Yilmaz", email: "myilmaz@stanford.edu", stagePct: { one: 100, two: 100, three: 53, four: 5 }, daysInactive: 0, sharedCount: 5 },
      { id: 28, name: "Aiden Ramirez", email: "aramirez@stanford.edu", stagePct: { one: 100, two: 100, three: 34, four: 19 }, daysInactive: 2, sharedCount: 4 },
      { id: 29, name: "Tunde Voss", email: "tvoss@stanford.edu", stagePct: { one: 100, two: 94, three: 54, four: 8 }, daysInactive: 2, sharedCount: 7 },
      { id: 30, name: "Caleb Santos", email: "csantos@stanford.edu", stagePct: { one: 100, two: 81, three: 44, four: 1 }, daysInactive: 3, sharedCount: 5 },
      { id: 31, name: "Bode Reyes", email: "breyes@stanford.edu", stagePct: { one: 100, two: 100, three: 99, four: 90 }, daysInactive: 1, sharedCount: 8 },
      { id: 32, name: "Bianca Petrov", email: "bpetrov@stanford.edu", stagePct: { one: 100, two: 100, three: 59, four: 4 }, daysInactive: 0, sharedCount: 4 },
      { id: 33, name: "Femi Winters", email: "fwinters@stanford.edu", stagePct: { one: 100, two: 56, three: 23, four: 0 }, daysInactive: 5, sharedCount: 2 },
      { id: 34, name: "Bode Xiong", email: "bxiong@stanford.edu", stagePct: { one: 100, two: 84, three: 62, four: 15 }, daysInactive: 0, sharedCount: 3 },
      { id: 35, name: "Omar Jansen", email: "ojansen@stanford.edu", stagePct: { one: 100, two: 67, three: 19, four: 0 }, daysInactive: 1, sharedCount: 2 },
      { id: 36, name: "Yara Moreno", email: "ymoreno@stanford.edu", stagePct: { one: 43, two: 4, three: 0, four: 0 }, daysInactive: 38, sharedCount: 0 },
      { id: 37, name: "Ben Santos", email: "bsantos@stanford.edu", stagePct: { one: 100, two: 74, three: 24, four: 0 }, daysInactive: 3, sharedCount: 3 },
    ],
  },
  {
    id: "public-policy-2027",
    name: "Public Policy · Class of 2027",
    focus: "Public Policy",
    institution: "Stanford University",
    weeklyTrend: [10, 14, 13, 18, 20, 24, 26, 30],
    students: [
      { id: 38, name: "Sana Haddad", email: "shaddad@stanford.edu", stagePct: { one: 70, two: 14, three: 0, four: 0 }, daysInactive: 0, sharedCount: 1 },
      { id: 39, name: "Osei Yang", email: "oyang@stanford.edu", stagePct: { one: 100, two: 83, three: 70, four: 9 }, daysInactive: 3, sharedCount: 7 },
      { id: 40, name: "Zara Jansen", email: "zjansen@stanford.edu", stagePct: { one: 70, two: 17, three: 0, four: 0 }, daysInactive: 0, sharedCount: 1 },
      { id: 41, name: "Mateo Baptiste", email: "mbaptiste@stanford.edu", stagePct: { one: 100, two: 91, three: 49, four: 7 }, daysInactive: 0, sharedCount: 4 },
      { id: 42, name: "Kira Fontaine", email: "kfontaine@stanford.edu", stagePct: { one: 100, two: 44, three: 24, four: 0 }, daysInactive: 5, sharedCount: 1 },
      { id: 43, name: "Quinn Ramirez", email: "qramirez@stanford.edu", stagePct: { one: 95, two: 5, three: 0, four: 0 }, daysInactive: 2, sharedCount: 1 },
      { id: 44, name: "Bianca Idowu", email: "bidowu@stanford.edu", stagePct: { one: 100, two: 52, three: 22, four: 0 }, daysInactive: 3, sharedCount: 2 },
      { id: 45, name: "Will Castellano", email: "wcastellano@stanford.edu", stagePct: { one: 38, two: 1, three: 0, four: 0 }, daysInactive: 26, sharedCount: 0 },
      { id: 46, name: "Caleb Ekwueme", email: "cekwueme@stanford.edu", stagePct: { one: 97, two: 17, three: 0, four: 0 }, daysInactive: 1, sharedCount: 0 },
      { id: 47, name: "Amara Ekwueme", email: "aekwueme@stanford.edu", stagePct: { one: 100, two: 43, three: 7, four: 0 }, daysInactive: 1, sharedCount: 1 },
    ],
  },
  {
    id: "meche-2026",
    name: "Mechanical Engineering · Class of 2026",
    focus: "Mechanical Engineering",
    institution: "University of Michigan",
    weeklyTrend: [28, 31, 34, 36, 40, 43, 47, 51],
    students: [
      { id: 48, name: "Rio Ekwueme", email: "rekwueme@umich.edu", stagePct: { one: 100, two: 57, three: 21, four: 0 }, daysInactive: 4, sharedCount: 1 },
      { id: 49, name: "Vivian Ibarra", email: "vibarra@umich.edu", stagePct: { one: 100, two: 70, three: 7, four: 0 }, daysInactive: 8, sharedCount: 2 },
      { id: 50, name: "Chidi Mensah", email: "cmensah@umich.edu", stagePct: { one: 100, two: 100, three: 91, four: 57 }, daysInactive: 0, sharedCount: 9 },
      { id: 51, name: "Chidi D'Souza", email: "cdsouza@umich.edu", stagePct: { one: 71, two: 31, three: 0, four: 0 }, daysInactive: 9, sharedCount: 0 },
      { id: 52, name: "Bode Voss", email: "bvoss@umich.edu", stagePct: { one: 100, two: 83, three: 45, four: 6 }, daysInactive: 0, sharedCount: 7 },
      { id: 53, name: "Halima Ibarra", email: "hibarra@umich.edu", stagePct: { one: 100, two: 88, three: 59, four: 7 }, daysInactive: 3, sharedCount: 3 },
      { id: 54, name: "Gabe Johansson", email: "gjohansson@umich.edu", stagePct: { one: 100, two: 100, three: 90, four: 64 }, daysInactive: 3, sharedCount: 6 },
      { id: 55, name: "Lucas Yang", email: "lyang@umich.edu", stagePct: { one: 75, two: 23, three: 0, four: 0 }, daysInactive: 18, sharedCount: 1 },
      { id: 56, name: "Bianca Zubairu", email: "bzubairu@umich.edu", stagePct: { one: 75, two: 22, three: 0, four: 0 }, daysInactive: 9, sharedCount: 1 },
      { id: 57, name: "Hugo D'Souza", email: "hdsouza@umich.edu", stagePct: { one: 100, two: 97, three: 61, four: 4 }, daysInactive: 0, sharedCount: 5 },
    ],
  },
  {
    id: "ross-2027",
    name: "Ross School of Business · Class of 2027",
    focus: "Business Administration",
    institution: "University of Michigan",
    weeklyTrend: [26, 28, 32, 34, 37, 41, 44, 48],
    students: [
      { id: 58, name: "Bianca Delgado", email: "bdelgado@umich.edu", stagePct: { one: 100, two: 74, three: 1, four: 0 }, daysInactive: 6, sharedCount: 2 },
      { id: 59, name: "Hassan Delgado", email: "hdelgado@umich.edu", stagePct: { one: 100, two: 72, three: 16, four: 0 }, daysInactive: 2, sharedCount: 1 },
      { id: 60, name: "Pia Fontaine", email: "pfontaine@umich.edu", stagePct: { one: 72, two: 29, three: 0, four: 0 }, daysInactive: 9, sharedCount: 0 },
      { id: 61, name: "Bode Haddad", email: "bhaddad@umich.edu", stagePct: { one: 46, two: 3, three: 0, four: 0 }, daysInactive: 38, sharedCount: 0 },
      { id: 62, name: "Farid Nwosu", email: "fnwosu@umich.edu", stagePct: { one: 100, two: 100, three: 91, four: 67 }, daysInactive: 1, sharedCount: 10 },
      { id: 63, name: "Olu Quintero", email: "oquintero@umich.edu", stagePct: { one: 100, two: 90, three: 45, four: 8 }, daysInactive: 1, sharedCount: 4 },
      { id: 64, name: "Mara D'Souza", email: "mdsouza@umich.edu", stagePct: { one: 100, two: 82, three: 30, four: 14 }, daysInactive: 1, sharedCount: 7 },
      { id: 65, name: "Mei Ekwueme", email: "mekwueme@umich.edu", stagePct: { one: 100, two: 72, three: 8, four: 0 }, daysInactive: 2, sharedCount: 2 },
      { id: 66, name: "Isla Patel", email: "ipatel@umich.edu", stagePct: { one: 100, two: 85, three: 58, four: 17 }, daysInactive: 2, sharedCount: 5 },
    ],
  },
  {
    id: "comms-2026",
    name: "Communications & Media Studies · Class of 2026",
    focus: "Communications",
    institution: "Howard University",
    weeklyTrend: [34, 36, 38, 41, 43, 47, 49, 53],
    students: [
      { id: 67, name: "Simi Adeyemi", email: "sadeyemi@howard.edu", stagePct: { one: 100, two: 75, three: 9, four: 0 }, daysInactive: 6, sharedCount: 1 },
      { id: 68, name: "Rosa Quintero", email: "rquintero@howard.edu", stagePct: { one: 100, two: 100, three: 73, four: 77 }, daysInactive: 1, sharedCount: 7 },
      { id: 69, name: "Ines Silva", email: "isilva@howard.edu", stagePct: { one: 100, two: 61, three: 6, four: 0 }, daysInactive: 6, sharedCount: 3 },
      { id: 70, name: "Hugo Grant", email: "hgrant@howard.edu", stagePct: { one: 100, two: 81, three: 35, four: 20 }, daysInactive: 1, sharedCount: 5 },
      { id: 71, name: "Farid Adeyemi", email: "fadeyemi@howard.edu", stagePct: { one: 100, two: 84, three: 70, four: 8 }, daysInactive: 0, sharedCount: 6 },
      { id: 72, name: "Emeka Johansson", email: "ejohansson@howard.edu", stagePct: { one: 100, two: 100, three: 72, four: 90 }, daysInactive: 2, sharedCount: 7 },
      { id: 73, name: "Vivian Chen", email: "vchen@howard.edu", stagePct: { one: 88, two: 27, three: 0, four: 0 }, daysInactive: 12, sharedCount: 1 },
      { id: 74, name: "Quinn Chen", email: "qchen@howard.edu", stagePct: { one: 100, two: 81, three: 52, four: 6 }, daysInactive: 2, sharedCount: 4 },
      { id: 75, name: "Nadia Whitfield", email: "nwhitfield@howard.edu", stagePct: { one: 100, two: 66, three: 19, four: 0 }, daysInactive: 6, sharedCount: 1 },
      { id: 76, name: "Efe Kimura", email: "ekimura@howard.edu", stagePct: { one: 21, two: 6, three: 0, four: 0 }, daysInactive: 22, sharedCount: 0 },
      { id: 77, name: "Wren Winters", email: "wwinters@howard.edu", stagePct: { one: 95, two: 23, three: 0, four: 0 }, daysInactive: 12, sharedCount: 1 },
    ],
  },
  {
    id: "public-health-2027",
    name: "Public Health · Class of 2027",
    focus: "Public Health",
    institution: "Georgia State University",
    weeklyTrend: [12, 14, 16, 19, 22, 25, 27, 31],
    students: [
      { id: 78, name: "Uma Thackeray", email: "uthackeray@gsu.edu", stagePct: { one: 100, two: 81, three: 60, four: 7 }, daysInactive: 0, sharedCount: 6 },
      { id: 79, name: "Theo Tanaka", email: "ttanaka@gsu.edu", stagePct: { one: 100, two: 54, three: 7, four: 0 }, daysInactive: 1, sharedCount: 3 },
      { id: 80, name: "Yusuf Zubairu", email: "yzubairu@gsu.edu", stagePct: { one: 64, two: 8, three: 0, four: 0 }, daysInactive: 2, sharedCount: 1 },
      { id: 81, name: "Tunde Vasquez", email: "tvasquez@gsu.edu", stagePct: { one: 17, two: 4, three: 0, four: 0 }, daysInactive: 26, sharedCount: 0 },
      { id: 82, name: "Hugo Chen", email: "hchen@gsu.edu", stagePct: { one: 100, two: 93, three: 52, four: 23 }, daysInactive: 3, sharedCount: 5 },
      { id: 83, name: "Freya Moreno", email: "fmoreno@gsu.edu", stagePct: { one: 17, two: 6, three: 0, four: 0 }, daysInactive: 38, sharedCount: 0 },
      { id: 84, name: "Yusuf Quintero", email: "yquintero@gsu.edu", stagePct: { one: 100, two: 100, three: 83, four: 30 }, daysInactive: 1, sharedCount: 10 },
      { id: 85, name: "Zara Xiong", email: "zxiong@gsu.edu", stagePct: { one: 81, two: 19, three: 0, four: 0 }, daysInactive: 2, sharedCount: 0 },
      { id: 86, name: "Mara Grant", email: "mgrant@gsu.edu", stagePct: { one: 86, two: 10, three: 0, four: 0 }, daysInactive: 3, sharedCount: 1 },
    ],
  },
  {
    id: "econ-2026",
    name: "Economics · Class of 2026",
    focus: "Economics",
    institution: "University of Lagos",
    weeklyTrend: [24, 27, 29, 33, 36, 39, 42, 46],
    students: [
      { id: 87, name: "Quinn Mensah", email: "qmensah@unilag.edu.ng", stagePct: { one: 100, two: 92, three: 41, four: 19 }, daysInactive: 1, sharedCount: 5 },
      { id: 88, name: "Bode Johansson", email: "bjohansson@unilag.edu.ng", stagePct: { one: 79, two: 19, three: 0, four: 0 }, daysInactive: 12, sharedCount: 1 },
      { id: 89, name: "Petra D'Souza", email: "pdsouza@unilag.edu.ng", stagePct: { one: 100, two: 86, three: 62, four: 15 }, daysInactive: 3, sharedCount: 4 },
      { id: 90, name: "Kira Silva", email: "ksilva@unilag.edu.ng", stagePct: { one: 100, two: 61, three: 2, four: 0 }, daysInactive: 8, sharedCount: 1 },
      { id: 91, name: "Niko Oyelaran", email: "noyelaran@unilag.edu.ng", stagePct: { one: 74, two: 10, three: 0, four: 0 }, daysInactive: 9, sharedCount: 0 },
      { id: 92, name: "Kwame Nwosu", email: "knwosu@unilag.edu.ng", stagePct: { one: 72, two: 24, three: 0, four: 0 }, daysInactive: 18, sharedCount: 0 },
      { id: 93, name: "Zane Ferreira", email: "zferreira@unilag.edu.ng", stagePct: { one: 100, two: 84, three: 30, four: 24 }, daysInactive: 3, sharedCount: 3 },
      { id: 94, name: "Emeka Oyelaran", email: "eoyelaran@unilag.edu.ng", stagePct: { one: 100, two: 100, three: 100, four: 74 }, daysInactive: 1, sharedCount: 9 },
      { id: 95, name: "Grace Johansson", email: "gjohansson@unilag.edu.ng", stagePct: { one: 100, two: 83, three: 59, four: 4 }, daysInactive: 3, sharedCount: 6 },
    ],
  },
];

export function getCohort(id: string): Cohort | undefined {
  return COHORTS.find((c) => c.id === id);
}

export function allStudentsAcrossCohorts(): CohortStudent[] {
  return COHORTS.flatMap((c) => c.students);
}

export function institutionsInUse(): string[] {
  return Array.from(new Set(COHORTS.map((c) => c.institution)));
}

export function cohortsForInstitution(institution: string): Cohort[] {
  return COHORTS.filter((c) => c.institution === institution);
}

export function institutionAvgCompletion(institution: string): number {
  const cohorts = cohortsForInstitution(institution);
  if (cohorts.length === 0) return 0;
  return Math.round(
    cohorts.reduce((sum, c) => sum + cohortAvgCompletion(c), 0) / cohorts.length
  );
}

/** Institution-wide weekly trend, averaged across that institution's cohorts. */
export function institutionWeeklyTrend(institution: string): number[] {
  const cohorts = cohortsForInstitution(institution);
  if (cohorts.length === 0) return [];
  const weeks = cohorts[0].weeklyTrend.length;
  return Array.from({ length: weeks }, (_, w) =>
    Math.round(cohorts.reduce((sum, c) => sum + (c.weeklyTrend[w] ?? 0), 0) / cohorts.length)
  );
}
