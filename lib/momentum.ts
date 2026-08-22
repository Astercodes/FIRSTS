import type { FirstModule } from "@/lib/dashboardData";

const UNIT_MINUTES: Record<string, number> = {
  min: 1,
  mins: 1,
  minute: 1,
  minutes: 1,
  hr: 60,
  hrs: 60,
  hour: 60,
  hours: 60,
  day: 45,
  days: 45,
  wk: 90,
  wks: 90,
  week: 90,
  weeks: 90,
  month: 180,
  months: 180,
  semester: 600,
  semesters: 600,
};

const UNIT_PATTERN = Object.keys(UNIT_MINUTES).join("|");
const RANGE_RE = new RegExp(`(\\d+(?:\\.\\d+)?)\\s*(?:to|-)\\s*(\\d+(?:\\.\\d+)?)\\s*(${UNIT_PATTERN})\\b`, "i");
const SINGLE_RE = new RegExp(`(\\d+(?:\\.\\d+)?)\\s*(${UNIT_PATTERN})\\b`, "i");
const VAGUE_RE = new RegExp(`(?:several|a few)\\s*(${UNIT_PATTERN})\\b`, "i");

/** Best-effort midpoint estimate, in minutes, for a FIRST's free-text time field. Returns null when nothing numeric can be read out of it. */
export function parseTimeEstimateMinutes(time: string): number | null {
  const range = time.match(RANGE_RE);
  if (range) {
    const a = parseFloat(range[1]);
    const b = parseFloat(range[2]);
    const unit = UNIT_MINUTES[range[3].toLowerCase()];
    return ((a + b) / 2) * unit;
  }
  const single = time.match(SINGLE_RE);
  if (single) {
    const a = parseFloat(single[1]);
    const unit = UNIT_MINUTES[single[2].toLowerCase()];
    return a * unit;
  }
  const vague = time.match(VAGUE_RE);
  if (vague) {
    const unit = UNIT_MINUTES[vague[1].toLowerCase()];
    return 3 * unit;
  }
  return null;
}

const THOROUGHNESS_TIME_FACTOR: Record<1 | 2 | 3, number> = { 1: 0.55, 2: 0.85, 3: 1.15 };

export type TimeInvested = {
  estimatedMinutes: number;
  actualMinutes: number;
  countedModules: number;
  totalComplete: number;
};

/**
 * Sums estimated vs. "actual" time across completed FIRSTS with a readable time
 * estimate. Actual time is derived from each module's own thoroughness signal
 * (a shorter answer plausibly took less time than a thorough one), since the
 * app has no separate time-tracking instrumentation yet.
 */
export function timeInvested(modules: FirstModule[]): TimeInvested {
  const complete = modules.filter((m) => m.status === "complete");
  let estimatedMinutes = 0;
  let actualMinutes = 0;
  let countedModules = 0;

  for (const m of complete) {
    const est = parseTimeEstimateMinutes(m.time);
    if (est === null) continue;
    const factor = THOROUGHNESS_TIME_FACTOR[m.thoroughness ?? 2];
    estimatedMinutes += est;
    actualMinutes += est * factor;
    countedModules += 1;
  }

  return { estimatedMinutes, actualMinutes, countedModules, totalComplete: complete.length };
}

function toDateOnly(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, (m ?? 1) - 1, d ?? 1);
}

/**
 * Current streak of distinct active days on the Stage Four habit-building
 * FIRSTS (E1 to E20), not FIRSTS completed overall. A streak is still "live"
 * if the most recent active day was today or yesterday.
 */
export function habitStreak(modules: FirstModule[], today: Date = new Date()): number {
  const habitDates = new Set(
    modules
      .filter((m) => m.stage === "four" && m.category === "N" && m.completedAt)
      .map((m) => m.completedAt as string)
  );
  if (habitDates.size === 0) return 0;

  const todayOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const isoOf = (d: Date) => d.toISOString().slice(0, 10);

  let cursor = todayOnly;
  if (!habitDates.has(isoOf(cursor))) {
    const yesterday = new Date(todayOnly);
    yesterday.setDate(yesterday.getDate() - 1);
    if (!habitDates.has(isoOf(yesterday))) return 0;
    cursor = yesterday;
  }

  let streak = 0;
  while (habitDates.has(isoOf(cursor))) {
    streak += 1;
    cursor = new Date(cursor);
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

export type VelocityWeek = {
  weekStart: string;
  label: string;
  count: number;
  isCurrent: boolean;
};

/** FIRSTS completed per week, oldest to newest, over the last `weeks` weeks. */
export function weeklyVelocity(modules: FirstModule[], weeks: number = 12, today: Date = new Date()): VelocityWeek[] {
  const todayOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const currentWeekStart = new Date(todayOnly);
  currentWeekStart.setDate(currentWeekStart.getDate() - currentWeekStart.getDay());

  const completedDates = modules.filter((m) => m.status === "complete" && m.completedAt).map((m) => toDateOnly(m.completedAt as string));

  const result: VelocityWeek[] = [];
  for (let i = weeks - 1; i >= 0; i--) {
    const weekStart = new Date(currentWeekStart);
    weekStart.setDate(weekStart.getDate() - i * 7);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 7);

    const count = completedDates.filter((d) => d >= weekStart && d < weekEnd).length;
    const label = weekStart.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    result.push({ weekStart: weekStart.toISOString().slice(0, 10), label, count, isCurrent: i === 0 });
  }
  return result;
}

/** True if the completion pace in the second half of the window is meaningfully slower than the first half. */
export function isDeceleration(weeks: VelocityWeek[]): boolean {
  const half = Math.floor(weeks.length / 2);
  const firstHalf = weeks.slice(0, half).reduce((s, w) => s + w.count, 0);
  const secondHalf = weeks.slice(half).reduce((s, w) => s + w.count, 0);
  return firstHalf >= 2 && secondHalf <= firstHalf / 2;
}
