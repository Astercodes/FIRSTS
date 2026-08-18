export type ModuleStatus = "complete" | "in-progress" | "available" | "locked";
export type StageId = "one" | "two";

export type FirstModule = {
  id: number;
  code: string;
  stage: StageId;
  title: string;
  category: "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J";
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
  E: { label: "Personal Professional Identity", color: "var(--berry-burst)" },
  F: { label: "Personal Brand Foundations", color: "var(--juicy-plum)" },
  G: { label: "Digital Presence & Online Identity", color: "var(--tropical-mango)" },
  H: { label: "Professional Communication", color: "var(--pink-grapefruit)" },
  I: { label: "Professional Visibility", color: "var(--lime-zest)" },
  J: { label: "Professional Materials", color: "var(--citrus-lime)" },
} as const;

export const STAGES: { id: StageId; label: string; shortLabel: string; href: string }[] = [
  { id: "one", label: "Stage One · Self-Awareness & Career Clarity", shortLabel: "Stage One", href: "/dashboard/stage" },
  { id: "two", label: "Stage Two · Professional Identity & Personal Brand", shortLabel: "Stage Two", href: "/dashboard/stage/two" },
];

const STAGE_ONE_FIRSTS: FirstModule[] = [
  { id: 1, code: "01", stage: "one", title: "Core Values Audit", category: "A", time: "45–60 min", difficulty: "Moderate", status: "complete", lastUpdated: "3 months ago" },
  { id: 2, code: "02", stage: "one", title: "Career Vision", category: "A", time: "2–3 hrs", difficulty: "Moderate", status: "complete", lastUpdated: "14 months ago", dueForReview: true },
  { id: 3, code: "03", stage: "one", title: "Personal Purpose Awareness", category: "A", time: "45–60 min", difficulty: "Deep", status: "complete", lastUpdated: "3 months ago" },
  { id: 4, code: "04", stage: "one", title: "Personal Brand Narrative", category: "A", time: "45–60 min", difficulty: "Moderate", status: "in-progress", lastUpdated: "2 days ago" },
  { id: 5, code: "05", stage: "one", title: "Strength Inventory", category: "A", time: "1–2 hrs", difficulty: "Easy", status: "available" },
  { id: 6, code: "06", stage: "one", title: "Weakness Awareness", category: "A", time: "1–2 hrs", difficulty: "Moderate", status: "available" },
  { id: 7, code: "07", stage: "one", title: "Passion Alignment", category: "A", time: "2–3 hrs", difficulty: "Moderate", status: "locked" },
  { id: 8, code: "08", stage: "one", title: "Industry Insight", category: "B", time: "2–4 hrs", difficulty: "Moderate", status: "locked" },
  { id: 9, code: "09", stage: "one", title: "Career Path", category: "B", time: "2–4 hrs", difficulty: "Moderate", status: "locked" },
  { id: 10, code: "10", stage: "one", title: "Role Research", category: "B", time: "4–8 hrs", difficulty: "Deep", status: "locked" },
  { id: 11, code: "11", stage: "one", title: "Salary Benchmarking", category: "B", time: "1–2 hrs", difficulty: "Easy", status: "locked" },
  { id: 12, code: "12", stage: "one", title: "Career SWOT Analysis", category: "C", time: "45–60 min", difficulty: "Moderate", status: "locked" },
  { id: 13, code: "13", stage: "one", title: "Skill Growth Plan", category: "C", time: "45–60 min", difficulty: "Moderate", status: "locked" },
  { id: 14, code: "14", stage: "one", title: "Personality Assessment", category: "D", time: "2–3 hrs", difficulty: "Moderate", status: "locked" },
  { id: 15, code: "15", stage: "one", title: "Work Style Awareness", category: "D", time: "1–2 weeks", difficulty: "Moderate", status: "locked" },
  { id: 16, code: "16", stage: "one", title: "Thinking & Decision-Making Style", category: "D", time: "1–2 hrs", difficulty: "Deep", status: "locked" },
  { id: 17, code: "17", stage: "one", title: "Learning Style Awareness", category: "D", time: "3 days", difficulty: "Moderate", status: "locked" },
  { id: 18, code: "18", stage: "one", title: "Productivity & Focus System", category: "D", time: "1 week", difficulty: "Moderate", status: "locked" },
];

const STAGE_TWO_FIRSTS: FirstModule[] = [
  { id: 19, code: "B1", stage: "two", title: "Professional Introduction", category: "E", time: "1–1.5 hrs", difficulty: "Easy", status: "locked" },
  { id: 20, code: "B2", stage: "two", title: "Elevator Pitch", category: "E", time: "1–2 hrs", difficulty: "Easy", status: "locked" },
  { id: 21, code: "B3", stage: "two", title: "Personal Brand Statement", category: "E", time: "1 hr", difficulty: "Easy", status: "locked" },
  { id: 22, code: "B4", stage: "two", title: "Professional Communication Style", category: "E", time: "3–4 wks", difficulty: "Moderate", status: "locked" },
  { id: 23, code: "B5", stage: "two", title: "Professional Confidence Mindset", category: "E", time: "1 semester", difficulty: "Moderate", status: "locked" },
  { id: 24, code: "B6", stage: "two", title: "Personal Value Statement", category: "E", time: "1 hr", difficulty: "Easy", status: "locked" },
  { id: 25, code: "B7", stage: "two", title: "Personal Brand Strategy", category: "F", time: "2 hrs", difficulty: "Moderate", status: "locked" },
  { id: 26, code: "B8", stage: "two", title: "Personal Brand Positioning", category: "F", time: "2–3 hrs", difficulty: "Moderate", status: "locked" },
  { id: 27, code: "B9", stage: "two", title: "Professional Reputation Awareness", category: "F", time: "1 hr", difficulty: "Easy", status: "locked" },
  { id: 28, code: "B10", stage: "two", title: "Professional Image Audit", category: "F", time: "1–2 hrs", difficulty: "Easy", status: "locked" },
  { id: 29, code: "B11", stage: "two", title: "Credibility Signals", category: "F", time: "4–8 wks", difficulty: "Moderate", status: "locked" },
  { id: 30, code: "B12", stage: "two", title: "Professional Boundaries", category: "F", time: "Ongoing", difficulty: "Moderate", status: "locked" },
  { id: 31, code: "B13", stage: "two", title: "LinkedIn Profile", category: "G", time: "3–4 hrs", difficulty: "Easy", status: "locked" },
  { id: 32, code: "B14", stage: "two", title: "LinkedIn Headline Strategy", category: "G", time: "30 min", difficulty: "Easy", status: "locked" },
  { id: 33, code: "B15", stage: "two", title: "Professional Bio", category: "G", time: "1 hr", difficulty: "Easy", status: "locked" },
  { id: 34, code: "B16", stage: "two", title: "Digital Footprint Audit", category: "G", time: "2–3 hrs", difficulty: "Moderate", status: "locked" },
  { id: 35, code: "B17", stage: "two", title: "Personal Website", category: "G", time: "4–6 hrs", difficulty: "Moderate", status: "locked" },
  { id: 36, code: "B18", stage: "two", title: "Professional Portfolio", category: "G", time: "6–10 hrs", difficulty: "Deep", status: "locked" },
  { id: 37, code: "B19", stage: "two", title: "Professional Headshot", category: "G", time: "1 hr", difficulty: "Easy", status: "locked" },
  { id: 38, code: "B20", stage: "two", title: "Branding Color Scheme & Logo", category: "G", time: "2–3 hrs", difficulty: "Moderate", status: "locked" },
  { id: 39, code: "B21", stage: "two", title: "Professional Email Style", category: "H", time: "1 hr", difficulty: "Easy", status: "locked" },
  { id: 40, code: "B22", stage: "two", title: "Professional Email Template", category: "H", time: "1–2 hrs", difficulty: "Easy", status: "locked" },
  { id: 41, code: "B23", stage: "two", title: "Meeting Presence", category: "H", time: "Ongoing", difficulty: "Moderate", status: "locked" },
  { id: 42, code: "B24", stage: "two", title: "Question-Asking Skill", category: "H", time: "Ongoing", difficulty: "Moderate", status: "locked" },
  { id: 43, code: "B25", stage: "two", title: "Professional Listening Skill", category: "H", time: "Several wks", difficulty: "Moderate", status: "locked" },
  { id: 44, code: "B26", stage: "two", title: "Public Speaking Recording", category: "H", time: "1 hr", difficulty: "Easy", status: "locked" },
  { id: 45, code: "B27", stage: "two", title: "Video Introduction", category: "H", time: "1–2 hrs", difficulty: "Moderate", status: "locked" },
  { id: 46, code: "B28", stage: "two", title: "Thoughtful Social Media Presence", category: "I", time: "1 hr setup", difficulty: "Moderate", status: "locked" },
  { id: 47, code: "B29", stage: "two", title: "LinkedIn Post Engagement", category: "I", time: "15 min/wk", difficulty: "Easy", status: "locked" },
  { id: 48, code: "B30", stage: "two", title: "Professional Content Share", category: "I", time: "15–20 min", difficulty: "Easy", status: "locked" },
  { id: 49, code: "B31", stage: "two", title: "Blog/Article Post", category: "I", time: "3–5 hrs", difficulty: "Deep", status: "locked" },
  { id: 50, code: "B32", stage: "two", title: "Thought Leadership Series", category: "I", time: "3–5 hrs", difficulty: "Deep", status: "locked" },
  { id: 51, code: "B33", stage: "two", title: "Industry Trend Report", category: "I", time: "3–4 hrs", difficulty: "Deep", status: "locked" },
  { id: 52, code: "B34", stage: "two", title: "Professional Conversation Starter", category: "I", time: "30–60 min", difficulty: "Easy", status: "locked" },
  { id: 53, code: "B35", stage: "two", title: "Resume That Stands Out", category: "J", time: "3–4 hrs", difficulty: "Moderate", status: "locked" },
  { id: 54, code: "B36", stage: "two", title: "Cover Letter That Works", category: "J", time: "1–2 hrs", difficulty: "Moderate", status: "locked" },
  { id: 55, code: "B37", stage: "two", title: "Business Card / Email Signature", category: "J", time: "30 min", difficulty: "Easy", status: "locked" },
  { id: 56, code: "B38", stage: "two", title: "Portfolio/Project Showcase", category: "J", time: "2 hrs", difficulty: "Moderate", status: "locked" },
  { id: 57, code: "B39", stage: "two", title: "Online Portfolio Review", category: "J", time: "30–45 min", difficulty: "Moderate", status: "locked" },
  { id: 58, code: "B40", stage: "two", title: "Digital Presence Plan", category: "J", time: "1 hr", difficulty: "Easy", status: "locked" },
];

export const FIRSTS: FirstModule[] = [...STAGE_ONE_FIRSTS, ...STAGE_TWO_FIRSTS];

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
