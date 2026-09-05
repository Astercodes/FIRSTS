import { FIRSTS, STAGES } from "@/lib/dashboardData";

export type AudienceCta = { label: string; href: string };
export type AudienceStep = { title: string; body: string };
export type AudienceFeature = { title: string; body: string };
export type AudienceStat = { value: string; label: string };
export type AudiencePartnerSection = {
  kicker: string;
  title: string;
  body: string;
  bullets: string[];
  cta: AudienceCta;
};

export type AudienceConfig = {
  slug: string;
  metaTitle: string;
  kicker: string;
  headline: string;
  highlight: string;
  subheadline: string;
  primaryCta: AudienceCta;
  secondaryCta: AudienceCta;
  tertiaryCta?: AudienceCta;
  color: string;
  colorSecondary: string;
  stats: AudienceStat[];
  features: AudienceFeature[];
  steps: AudienceStep[];
  scenarioTitle: string;
  scenarioBody: string;
  ctaHeadline: string;
  ctaBody: string;
  partnerSection?: AudiencePartnerSection;
};

const TOTAL_FIRSTS = FIRSTS.length;
const TOTAL_STAGES = STAGES.length;

export const AUDIENCES: Record<string, AudienceConfig> = {
  "partner-schools": {
    slug: "partner-schools",
    metaTitle: "For students at partner schools | FIRSTS",
    kicker: "For students at partner schools",
    headline: "Your career center ",
    highlight: "already built this in.",
    subheadline:
      `Sign in with your school email and you're auto-joined to your cohort. Work through all ${TOTAL_STAGES} stages at your own pace. Your advisor sees your completion status, never your raw reflections, unless you choose to share.`,
    primaryCta: { label: "Sign in with your school", href: "/onboarding/school" },
    secondaryCta: { label: "Not at a partner school?", href: "/for/independent-students" },
    color: "var(--neon-pink)",
    colorSecondary: "var(--fuchsia-blast)",
    stats: [
      { value: `${TOTAL_FIRSTS}`, label: `guided FIRSTS across ${TOTAL_STAGES} stages` },
      { value: "0", label: "reflections shared without your consent" },
      { value: "21d", label: "of inactivity before your advisor gets a nudge, not a read" },
    ],
    features: [
      { title: "Zero setup", body: "SSO or a roster invite lands you straight in your cohort's Stage One, no separate account to create." },
      { title: "Private by default", body: "Your advisor sees which FIRSTS you've completed. They never see what you actually wrote unless you share it yourself." },
      { title: "A coach grounded in your progress", body: "The AI Coach hub knows what you've finished and what's next, and asks better questions instead of writing your answers." },
      { title: "A portfolio built as you go", body: "Every worksheet you complete becomes part of an exportable portfolio, ready before you need it for an application." },
    ],
    steps: [
      { title: "Sign in with your school email", body: "If your school uses SSO you're in instantly. Otherwise we match your roster invite." },
      { title: "Land in your cohort's Stage One", body: "No blank slate, you start exactly where your program has you starting." },
      { title: "Work through FIRSTS at your pace", body: "Complete modules in order, or switch on Free Explore Mode and jump to what you need." },
      { title: "Your advisor sees status, you control sharing", body: "Completion percentage is visible by default. Sharing an actual reflection is always your call." },
    ],
    scenarioTitle: "What it looks like for a cohort",
    scenarioBody:
      "A cohort of 40 students started Stage One in the same week. Two weeks in, their advisor could see exactly who'd finished the Core Values Audit and who hadn't, without opening a single reflection.",
    ctaHeadline: "Your school already pays for this.",
    ctaBody: "Sign in with your school email, there's no separate account to manage.",
  },
};

export function getAudience(slug: string): AudienceConfig | undefined {
  return AUDIENCES[slug];
}
