import type { FirstModule } from "@/lib/dashboardData";
import { STAGES, completionStats, CATEGORY_META } from "@/lib/dashboardData";

export type Badge = {
  id: string;
  title: string;
  description: string;
  earned: boolean;
  progressPct: number;
  kind: "stage" | "standout";
  color: string;
  href: string;
};

const STANDOUT_MODULES: { id: number; title: string }[] = [
  { id: 99, title: "Side Project Shipped" },
  { id: 100, title: "Volunteer Impact Made" },
  { id: 101, title: "Certification Earned" },
  { id: 102, title: "Strategic Goal Set" },
  { id: 103, title: "Thought Leadership Published" },
];

const STAGE_BADGE_COLOR = "var(--berry-burst)";

export function stageBadges(modules: FirstModule[]): Badge[] {
  return STAGES.map((s) => {
    const stageModules = modules.filter((m) => m.stage === s.id);
    const stats = completionStats(stageModules);
    return {
      id: `stage-${s.id}`,
      title: `${s.shortLabel} Complete`,
      description: `Every FIRST in ${s.label} finished.`,
      earned: stats.pct === 100,
      progressPct: stats.pct,
      kind: "stage",
      color: STAGE_BADGE_COLOR,
      href: s.href,
    };
  });
}

/**
 * One badge per Category O (Extra Edge & Standout Factor) FIRST, individually,
 * not a single "category done" badge. Each of these represents something
 * genuinely shipped, so it carries real signal on its own.
 */
export function standoutBadges(modules: FirstModule[]): Badge[] {
  const color = CATEGORY_META.O.color;
  return STANDOUT_MODULES.map((sm) => {
    const m = modules.find((mod) => mod.id === sm.id);
    const earned = m?.status === "complete";
    return {
      id: `standout-${sm.id}`,
      title: sm.title,
      description: m
        ? `Earned by completing "${m.title}," Category O: ${CATEGORY_META.O.label}.`
        : sm.title,
      earned,
      progressPct: earned ? 100 : 0,
      kind: "standout",
      color,
      href: `/dashboard/stage/${sm.id}`,
    };
  });
}

export function allBadges(modules: FirstModule[]): { stage: Badge[]; standout: Badge[] } {
  return { stage: stageBadges(modules), standout: standoutBadges(modules) };
}
