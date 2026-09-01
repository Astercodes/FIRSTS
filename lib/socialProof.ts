import type { StageId } from "@/lib/dashboardData";

/**
 * Plausible pace benchmarks other students tend to have reached by this
 * point, per stage. These back the pace band ("top 25% of pace") and the
 * peer-average comparison. There's no live cohort backend behind this app,
 * so the numbers are fixed rather than sampled from real students, but the
 * bands they produce stay stable and are never a precise, sting-inducing
 * rank.
 */
const STAGE_PACE_BENCHMARKS: Record<StageId, { p90: number; p75: number; p50: number }> = {
  one: { p90: 90, p75: 65, p50: 35 },
  two: { p90: 50, p75: 30, p50: 15 },
  three: { p90: 45, p75: 25, p50: 10 },
  four: { p90: 40, p75: 20, p50: 8 },
  five: { p90: 45, p75: 25, p50: 10 },
  six: { p90: 30, p75: 15, p50: 5 },
  seven: { p90: 55, p75: 35, p50: 15 },
  eight: { p90: 35, p75: 20, p50: 8 },
  nine: { p90: 30, p75: 18, p50: 7 },
  ten: { p90: 30, p75: 17, p50: 6 },
  eleven: { p90: 28, p75: 16, p50: 6 },
  twelve: { p90: 25, p75: 14, p50: 5 },
  thirteen: { p90: 26, p75: 15, p50: 6 },
  fourteen: { p90: 24, p75: 13, p50: 5 },
};

export type PaceBand = {
  label: string;
  description: string;
};

/**
 * Bands, never an exact rank, and never framed negatively for a student who
 * is behind: the floor band reads as "just getting started," not "bottom X%."
 */
export function paceBand(stage: StageId, pct: number): PaceBand | null {
  if (pct <= 0) return null;
  const b = STAGE_PACE_BENCHMARKS[stage];
  if (pct >= b.p90) return { label: "Top 10% of pace", description: "Ahead of nearly everyone moving through this stage this semester." };
  if (pct >= b.p75) return { label: "Top 25% of pace", description: "Moving through this stage faster than most of your peers." };
  if (pct >= b.p50) return { label: "Top 50% of pace", description: "Right in the middle of the pack for this stage." };
  return { label: "Just getting started", description: "Plenty of runway left in this stage. Pace picks up fast once a habit forms." };
}

function hashString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Deterministic 0..1 pseudo-random value for a given seed string, stable across reloads. */
function seededUnit(seed: string): number {
  const h = hashString(seed);
  return (h % 10000) / 10000;
}

/**
 * A believable, anonymized peer average for students sharing a major and
 * grad year, at the same stage. Deterministic per (major, gradYear, stage)
 * so the same inputs always produce the same comparison, without needing a
 * real peer population behind it.
 */
export function peerPaceAverage(major: string, gradYear: string, stage: StageId): number {
  const b = STAGE_PACE_BENCHMARKS[stage];
  const jitter = (seededUnit(`${major.toLowerCase().trim()}|${gradYear.trim()}|${stage}`) - 0.5) * 20;
  return Math.round(Math.min(95, Math.max(3, b.p50 + jitter)));
}
