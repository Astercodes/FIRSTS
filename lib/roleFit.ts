import type { CandidatePortfolio } from "@/lib/sponsorData";
import { credentialForCandidate } from "@/lib/credentialData";
import { CATEGORY_META } from "@/lib/dashboardData";

export type RoleTemplate = {
  id: string;
  title: string;
  description: string;
  requirements: { category: keyof typeof CATEGORY_META; weight: number }[];
};

export const ROLE_TEMPLATES: RoleTemplate[] = [
  {
    id: "marketing",
    title: "Marketing / Brand Coordinator",
    description: "Campaign execution, brand voice, and stakeholder communication.",
    requirements: [
      { category: "H", weight: 3 },
      { category: "R", weight: 2 },
      { category: "S", weight: 2 },
      { category: "AA", weight: 1 },
      { category: "HH", weight: 2 },
    ],
  },
  {
    id: "business-analyst",
    title: "Business / Data Analyst",
    description: "Structured problem-solving, data fluency, and clear written findings.",
    requirements: [
      { category: "X", weight: 3 },
      { category: "Z", weight: 2 },
      { category: "Y", weight: 2 },
      { category: "P", weight: 2 },
      { category: "BB", weight: 1 },
    ],
  },
  {
    id: "product-design",
    title: "Product / UX Design",
    description: "User research synthesis, visual communication, and collaborative iteration.",
    requirements: [
      { category: "CC", weight: 2 },
      { category: "AA", weight: 3 },
      { category: "EE", weight: 2 },
      { category: "T", weight: 2 },
      { category: "P", weight: 1 },
    ],
  },
  {
    id: "operations-strategy",
    title: "Operations / Strategy",
    description: "Process design, planning discipline, and cross-team execution.",
    requirements: [
      { category: "Z", weight: 3 },
      { category: "X", weight: 2 },
      { category: "GG", weight: 2 },
      { category: "FF", weight: 1 },
      { category: "N", weight: 2 },
    ],
  },
  {
    id: "communications",
    title: "Communications / PR",
    description: "Message clarity under pressure, written polish, and public-facing presence.",
    requirements: [
      { category: "R", weight: 3 },
      { category: "DD", weight: 2 },
      { category: "S", weight: 2 },
      { category: "HH", weight: 2 },
      { category: "KK", weight: 1 },
    ],
  },
];

function categoryPctMap(candidate: CandidatePortfolio): Partial<Record<string, number>> {
  const credential = credentialForCandidate(candidate);
  const map: Partial<Record<string, number>> = {};
  for (const stage of credential) {
    for (const cat of stage.categories) {
      map[cat.category] = cat.pct;
    }
  }
  return map;
}

export type RoleFitBreakdown = {
  category: string;
  label: string;
  pct: number;
  weight: number;
};

export type RoleFitResult = {
  candidate: CandidatePortfolio;
  fitScore: number;
  breakdown: RoleFitBreakdown[];
  strongest: RoleFitBreakdown | null;
  gaps: RoleFitBreakdown[];
};

const GAP_THRESHOLD = 60;

/**
 * How a single candidate's completed FIRSTS map against a role's weighted
 * category requirements. This only ever runs against candidates who shared
 * their own portfolio, never against a sponsored cohort's roster.
 */
export function scoreCandidateForRole(candidate: CandidatePortfolio, role: RoleTemplate): RoleFitResult {
  const pctMap = categoryPctMap(candidate);
  const breakdown: RoleFitBreakdown[] = role.requirements.map((r) => ({
    category: r.category,
    label: CATEGORY_META[r.category].label,
    pct: pctMap[r.category] ?? 0,
    weight: r.weight,
  }));

  const totalWeight = breakdown.reduce((sum, b) => sum + b.weight, 0);
  const fitScore =
    totalWeight > 0 ? Math.round(breakdown.reduce((sum, b) => sum + b.pct * b.weight, 0) / totalWeight) : 0;

  const strongest = breakdown.reduce<RoleFitBreakdown | null>(
    (best, b) => (!best || b.pct > best.pct ? b : best),
    null
  );
  const gaps = breakdown.filter((b) => b.pct < GAP_THRESHOLD).sort((a, b) => a.pct - b.pct);

  return { candidate, fitScore, breakdown, strongest, gaps };
}

export function scoreCandidatesForRole(candidates: CandidatePortfolio[], role: RoleTemplate): RoleFitResult[] {
  return candidates.map((c) => scoreCandidateForRole(c, role)).sort((a, b) => b.fitScore - a.fitScore);
}
