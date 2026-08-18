export type ModuleStatus = "complete" | "in-progress" | "available" | "locked";

export type FirstModule = {
  id: number;
  title: string;
  category: "A" | "B" | "C" | "D";
  time: string;
  difficulty: "Easy" | "Moderate" | "Deep";
  status: ModuleStatus;
  lastUpdated?: string;
  dueForReview?: boolean;
};

export const CATEGORY_META = {
  A: { label: "Self-Discovery & Values", color: "var(--neon-pink)" },
  B: { label: "Market & Role Research", color: "var(--sunshine-orange)" },
  C: { label: "Synthesis & Growth", color: "var(--citrus-lime)" },
  D: { label: "Style & Systems", color: "var(--fuchsia-blast)" },
} as const;

export const FIRSTS: FirstModule[] = [
  { id: 1, title: "Core Values Audit", category: "A", time: "30–45 min", difficulty: "Moderate", status: "complete", lastUpdated: "3 months ago" },
  { id: 2, title: "Career Vision", category: "A", time: "45–60 min", difficulty: "Deep", status: "complete", lastUpdated: "14 months ago", dueForReview: true },
  { id: 3, title: "Personal Purpose Awareness", category: "A", time: "30–40 min", difficulty: "Moderate", status: "complete", lastUpdated: "3 months ago" },
  { id: 4, title: "Personal Brand Narrative", category: "A", time: "40–50 min", difficulty: "Moderate", status: "in-progress", lastUpdated: "2 days ago" },
  { id: 5, title: "Strength Inventory", category: "A", time: "35–45 min", difficulty: "Easy", status: "available" },
  { id: 6, title: "Weakness Awareness", category: "A", time: "25–35 min", difficulty: "Moderate", status: "available" },
  { id: 7, title: "Passion Alignment", category: "A", time: "30 min", difficulty: "Easy", status: "locked" },
  { id: 8, title: "Industry Insight", category: "B", time: "50–70 min", difficulty: "Deep", status: "locked" },
  { id: 9, title: "Career Path", category: "B", time: "40–60 min", difficulty: "Moderate", status: "locked" },
  { id: 10, title: "Role Research", category: "B", time: "45–60 min", difficulty: "Deep", status: "locked" },
  { id: 11, title: "Salary Benchmarking", category: "B", time: "30–40 min", difficulty: "Moderate", status: "locked" },
  { id: 12, title: "Career SWOT Analysis", category: "C", time: "40 min", difficulty: "Deep", status: "locked" },
  { id: 13, title: "Skill Growth Plan", category: "C", time: "35–45 min", difficulty: "Moderate", status: "locked" },
  { id: 14, title: "Personality Assessment", category: "D", time: "20–30 min", difficulty: "Easy", status: "locked" },
  { id: 15, title: "Work Style Awareness", category: "D", time: "1–2 weeks", difficulty: "Moderate", status: "locked" },
  { id: 16, title: "Thinking & Decision-Making Style", category: "D", time: "35–45 min", difficulty: "Moderate", status: "locked" },
  { id: 17, title: "Learning Style Awareness", category: "D", time: "3 days", difficulty: "Moderate", status: "locked" },
  { id: 18, title: "Productivity & Focus System", category: "D", time: "1 week", difficulty: "Deep", status: "locked" },
];

export const MOCK_USER = {
  firstName: "Ada",
  role: "Independent · Early professional",
  streakDays: 5,
  stage: "Stage One · Self-Awareness & Career Clarity",
};

export function completionStats(modules: FirstModule[]) {
  const complete = modules.filter((m) => m.status === "complete").length;
  return { complete, total: modules.length, pct: Math.round((complete / modules.length) * 100) };
}
