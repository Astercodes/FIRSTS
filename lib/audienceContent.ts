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

  professionals: {
    slug: "professionals",
    metaTitle: "For early professionals & recent grads | FIRSTS",
    kicker: "For early professionals & recent grads",
    headline: "Clarity doesn't end ",
    highlight: "at graduation.",
    subheadline:
      "FIRSTS wasn't built for freshman year alone. Stage Two covers professional identity and personal brand, Stage Three covers job applications and interviews, and Stage Four covers the mindset and habits that keep you moving after you're hired.",
    primaryCta: { label: "Start free", href: "/onboarding/independent" },
    secondaryCta: { label: `See all ${TOTAL_STAGES} stages`, href: "/#stages" },
    color: "var(--sunshine-orange)",
    colorSecondary: "var(--tropical-mango)",
    stats: [
      { value: `${TOTAL_STAGES}`, label: "stages, not just one" },
      { value: "25", label: "FIRSTS in Stage Four alone: mindset, productivity, habits" },
      { value: "1 min", label: "to sign up, no institution required" },
    ],
    features: [
      { title: "Skip what you've outgrown", body: "Switch on Free Explore Mode and go straight to Stage Two or Three, you don't have to redo self-discovery you've already done." },
      { title: "Build the brand, not just the resume", body: "Stage Two's Personal Brand Narrative and LinkedIn-ready summaries go further than a bullet-point resume." },
      { title: "Practice what actually stalls offers", body: "Stage Three drills the STAR method, offer comparison, and the interview prep most job searches skip." },
      { title: "Keep momentum after you're hired", body: "Stage Four's Time Management Matrix and Habit Stacking Routine are built for your first year on the job, not just the search." },
    ],
    steps: [
      { title: "Sign up in a minute", body: "Email, Google, Apple, or LinkedIn, no institution required." },
      { title: "Switch on Free Explore Mode", body: "Skip straight to Stage Two, Three, or Four if Stage One doesn't apply to you anymore." },
      { title: "Work the FIRSTS that match where you are", body: "Job search, first year on the job, or a career change, pick what's relevant." },
      { title: "Export a portfolio that's actual evidence", body: "Real worksheets, not just claims on a resume." },
    ],
    scenarioTitle: "What it looks like six months in",
    scenarioBody:
      "A recent grad six months into her first job skipped straight to Stage Four and worked through the Time Management Matrix and Habit Stacking Routine, the two FIRSTS she actually needed at that point.",
    ctaHeadline: "Start wherever you actually are.",
    ctaBody: "No institution required, no obligation to start at First 01.",
  },

  "independent-students": {
    slug: "independent-students",
    metaTitle: "For students at non-partner schools | FIRSTS",
    kicker: "For students at non-partner schools",
    headline: "Your school hasn't signed up yet. ",
    highlight: "You still can.",
    subheadline:
      `FIRSTS doesn't require an institution. Sign up with your personal email, work through all ${TOTAL_STAGES} stages at your own pace, and build a portfolio no career center gatekeeps.`,
    primaryCta: { label: "Start free", href: "/onboarding/independent" },
    secondaryCta: { label: "Tell your career center about FIRSTS", href: "/for/institutions" },
    color: "var(--citrus-lime)",
    colorSecondary: "var(--lime-zest)",
    stats: [
      { value: `${TOTAL_FIRSTS}`, label: "guided FIRSTS, the same set partner-school students get" },
      { value: `${TOTAL_STAGES}`, label: "stages, unlocked as you go or all at once" },
      { value: "1 min", label: "to sign up, no invite code needed" },
    ],
    features: [
      { title: "No school required", body: `An independent account gets you the identical ${TOTAL_FIRSTS} FIRSTS a partner-school student gets, nothing held back.` },
      { title: "Self-paced, start to finish", body: `Work through all ${TOTAL_STAGES} stages in order, or switch on Free Explore Mode and jump around.` },
      { title: "A coach on your side", body: "The same AI Coach hub, grounded in your real progress, not a stripped-down version." },
      { title: "A portfolio that travels with you", body: "Export your work and take it anywhere, it's not tied to an institution that might never sign up." },
    ],
    steps: [
      { title: "Sign up with any email", body: "No .edu address, no invite code, no waiting on your school." },
      { title: "Start Stage One: Core Values Audit", body: "The same first module every student gets, partner school or not." },
      { title: "Unlock Stage Two through Four as you go", body: "Or switch on Free Explore Mode and start wherever makes sense." },
      { title: "Export your portfolio when you're ready", body: "Take it into applications, interviews, or a conversation with a mentor." },
    ],
    scenarioTitle: "What it looks like without a career center",
    scenarioBody:
      "A student whose university had no career center account finished all 18 FIRSTS in Stage One over a single semester, entirely on her own schedule.",
    ctaHeadline: "Don't wait for your school to catch up.",
    ctaBody: "Sign up in under a minute, no invite code required.",
  },

  "career-centers": {
    slug: "career-centers",
    metaTitle: "For career centers | FIRSTS",
    kicker: "For career centers",
    headline: "See who's engaged, ",
    highlight: "who's stuck, who needs a nudge.",
    subheadline:
      "Roster sync, SSO, and a cohort dashboard built around completion status, not surveillance. You see progress. Students control how much of their actual work you see.",
    primaryCta: { label: "Verify your institution", href: "/onboarding/advisor" },
    secondaryCta: { label: "Talk to us about your campus", href: "/for/institutions" },
    tertiaryCta: { label: "Request a demo", href: "/request-demo?for=career-centers" },
    color: "var(--juicy-plum)",
    colorSecondary: "var(--berry-burst)",
    stats: [
      { value: "18", label: "guided FIRSTS in Stage One alone" },
      { value: "3", label: "sources cross-checked per salary figure" },
      { value: "21d", label: "of inactivity flags an at-risk student" },
    ],
    features: [
      { title: "A dashboard, not a firehose", body: "Cohort-level completion and at-risk flags, not a feed of everything every student wrote." },
      { title: "Privacy by design", body: "Advisors see status by default. Students opt in per module to share the actual work behind it." },
      { title: "Roster sync and SSO", body: "No manual account matching, students land in the right cohort automatically." },
      { title: "Evidence for the annual report", body: "Completion data that proves engagement, not just enrollment numbers." },
    ],
    steps: [
      { title: "Verify your institution email", body: "Confirms you're staff at a partner school before any roster access opens up." },
      { title: "Sync your roster or share an invite link", body: "Students land in the correct cohort with no manual setup on your end." },
      { title: "Open your cohort dashboard", body: "See completion by module, at-risk flags, and where a cohort is stalling." },
      { title: "Step in when it counts", body: "21 days of inactivity surfaces a flag, students choose whether to share what they've actually written." },
    ],
    scenarioTitle: "What it looks like for a cohort",
    scenarioBody:
      "A career center rolled FIRSTS out to its marketing cohort. Within two weeks, 84% had started the Core Values Audit, and the center could see exactly who hadn't, without reading anyone's answers.",
    ctaHeadline: "Prove engagement, not just enrollment.",
    ctaBody: "Verify your institution email to set up your first cohort.",
  },

  institutions: {
    slug: "institutions",
    metaTitle: "For institutions | FIRSTS",
    kicker: "For institutions",
    headline: "Structured career readiness infrastructure, ",
    highlight: "for your whole campus.",
    subheadline:
      "FIRSTS gives every student a sequenced, guided practice for career clarity, and gives your institution the completion data to show it's working, semester over semester.",
    primaryCta: { label: "Verify your institution", href: "/onboarding/advisor" },
    secondaryCta: { label: "See the career center view", href: "/for/career-centers" },
    tertiaryCta: { label: "Request a demo", href: "/request-demo?for=institutions" },
    color: "var(--berry-burst)",
    colorSecondary: "var(--neon-pink)",
    stats: [
      { value: `${TOTAL_FIRSTS}`, label: "guided FIRSTS, one framework for every major" },
      { value: `${TOTAL_STAGES}`, label: "sequenced stages, self-discovery through habits" },
      { value: "1", label: "dashboard covering every cohort you run" },
    ],
    features: [
      { title: "One framework, every student", body: "The same 4-stage sequence works whether a student is undecided or already interviewing." },
      { title: "Data your institution can report on", body: "Completion trends and cohort comparisons built for the reports you already have to produce." },
      { title: "Privacy your legal team will sign off on", body: "Advisors never see raw student reflections by default, only completion status." },
      { title: "No new system to maintain", body: "SSO and roster sync fit into what your registrar already runs, no separate LMS to stand up." },
    ],
    steps: [
      { title: "Verify your institution", body: "One verification covers every career center staff member at your school." },
      { title: "Roll out to a single cohort or your whole class", body: "Start small and expand once you've seen it work." },
      { title: "Career centers get cohort dashboards", body: "Advisors see completion and at-risk flags at the cohort level." },
      { title: "Your institution gets the aggregate view", body: "Completion trends across every cohort you run, semester over semester." },
    ],
    scenarioTitle: "What it looks like across a semester",
    scenarioBody:
      "Across three cohorts totaling 240 students, an institution watched completion trend upward each semester, real evidence for a program review instead of an attendance count.",
    ctaHeadline: "Bring structured career readiness to your whole campus.",
    ctaBody: "Verify your institution to start with a single cohort, expand when you're ready.",
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
};

export function getAudience(slug: string): AudienceConfig | undefined {
  return AUDIENCES[slug];
}
