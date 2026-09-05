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

  employers: {
    slug: "employers",
    metaTitle: "For employers | FIRSTS",
    kicker: "For employers",
    headline: "Candidates who've ",
    highlight: "already done the work.",
    subheadline:
      "Every FIRSTS graduate builds a portfolio as they go: a Core Values Audit, a STAR-method interview bank, a Strategic Goal Sheet, real artifacts, not just adjectives on a resume. It's evidence behind the resume, not a replacement for your own interview process.",
    primaryCta: { label: "Request a demo", href: "/request-demo?for=employers" },
    secondaryCta: { label: "Sponsor a cohort or school", href: "/request-demo?for=employer-sponsor" },
    tertiaryCta: { label: "Preview the employer portal", href: "/employer/login" },
    color: "var(--pink-grapefruit)",
    colorSecondary: "var(--sunshine-orange)",
    stats: [
      { value: `${TOTAL_FIRSTS}`, label: "guided FIRSTS behind every completed portfolio" },
      { value: "STAR", label: "method interview bank, rehearsed before the phone screen" },
      { value: "0", label: "sign-up required on your end" },
    ],
    features: [
      { title: "Evidence, not adjectives", body: "A values audit, a strengths inventory, and a goal sheet, real artifacts behind the resume claims." },
      { title: "A consistent format", body: "Every FIRSTS portfolio follows the same structure, easy to scan across candidates." },
      { title: "Interview prep already done", body: "Candidates who finish Stage Three arrive with rehearsed STAR-method answers, not first drafts." },
      { title: "Nothing for you to set up", body: "Candidates share what they've built as part of their application, like any other material." },
    ],
    steps: [
      { title: "A candidate builds their portfolio through FIRSTS", body: "Values, strengths, interview prep, and goals, built stage by stage." },
      { title: "They share it as part of their application", body: "A link or an export, alongside their resume and cover letter." },
      { title: "You review it like any other application material", body: "It's a conversation starter, not a replacement for your process." },
      { title: "The interview moves faster", body: "Both sides already know which stories are worth digging into." },
    ],
    scenarioTitle: "What it looks like in a phone screen",
    scenarioBody:
      "A hiring manager reviewing two similar resumes asked one candidate for her FIRSTS portfolio. The STAR bank made the phone screen faster, both sides already knew which stories to dig into.",
    ctaHeadline: "Ask your next candidate for their FIRSTS portfolio.",
    ctaBody: "It's free for candidates to build, there's nothing for you to sign up for.",
    partnerSection: {
      kicker: "Beyond hiring",
      title: "Sponsor access for a cohort, a school, or your own workforce.",
      body: "Some employers don't just want better candidates, they want to fund the pipeline. FIRSTS can be sponsored for a specific cohort, a student group, a school or department, or rolled out to your own employees as a professional development benefit.",
      bullets: [
        "Sponsor a cohort at a partner school",
        "Sponsor a student group or department",
        "Partner directly with a school to bring FIRSTS to their students",
        "Make FIRSTS accessible to your own employees",
      ],
      cta: { label: "Talk to us about sponsorship", href: "/request-demo?for=employer-sponsor" },
    },
  },

  facilitators: {
    slug: "facilitators",
    metaTitle: "For facilitators | FIRSTS",
    kicker: "For facilitators",
    headline: "Lead the sessions ",
    highlight: "you wish you'd had.",
    subheadline:
      `Volunteer to run FIRSTS workshops and get real training, a growth path, and a credential for it, not just a line that says you helped. Specialize in the stages you know best instead of a flat, one-size onboarding across all ${TOTAL_STAGES}.`,
    primaryCta: { label: "Apply to facilitate", href: "/for/facilitators/apply" },
    secondaryCta: { label: "See the stages", href: "/#stages" },
    color: "var(--fuchsia-blast)",
    colorSecondary: "var(--neon-pink)",
    stats: [
      { value: "3", label: "certification tiers, co-facilitator through training other facilitators" },
      { value: `${TOTAL_STAGES}`, label: "stages you can specialize in, not one generic onboarding" },
      { value: "0", label: "cost to you, real training and a credential in return" },
    ],
    features: [
      { title: "A real exchange, not just an ask", body: "Training, leadership experience, a facilitator community, and a credential you can put on a resume, alongside the mission." },
      { title: "Specialize, don't generalize", body: "Stage-specific micro-certifications mean you train for the stages you're actually suited to, not every stage at once." },
      { title: "Shadow before you solo", body: "Shadow an experienced facilitator, co-lead, then run your own sessions, a standard apprenticeship, not a sink-or-swim start." },
      { title: "Everything provided", body: "A resource library per FIRST: slide templates, facilitator guides, printable worksheets, discussion prompts, timing guides." },
    ],
    steps: [
      { title: "Apply", body: "Tell us your background, which stages you're drawn to, your availability, and online or offline preference." },
      { title: "Train stage by stage", body: "Complete stage-specific training, then shadow an experienced facilitator running a real session." },
      { title: "Co-lead, then run your own", body: "Co-facilitate a session or two, then get certified to lead solo and schedule your own workshops." },
      { title: "Grow into leadership", body: "Build a track record and ratings, then progress toward training other facilitators yourself." },
    ],
    scenarioTitle: "What a first term looks like",
    scenarioBody:
      "A facilitator interested in Stage One and Stage Four shadowed two sessions, co-led three, then ran eight solo workshops that term, reaching 140 students and earning her Tier 2 certification.",
    ctaHeadline: "Lead a session, not just a lecture.",
    ctaBody: "Tell us which stages you're drawn to and when you're free, training starts from there.",
  },
};

export function getAudience(slug: string): AudienceConfig | undefined {
  return AUDIENCES[slug];
}
