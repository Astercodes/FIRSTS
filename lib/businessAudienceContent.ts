import type { AudienceConfig } from "@/lib/audienceContent";
import { BUSINESS_TRACKS } from "@/lib/businessData";

const TOTAL_TRACKS = BUSINESS_TRACKS.length;

const CLOSING_STEPS = ["Pick a problem", "Test it", "Build from there"];
const HOME = { homeHref: "/business", homeLabel: "Back to FIRSTS Business" };

export const BUSINESS_AUDIENCES: Record<string, AudienceConfig> = {
  founders: {
    slug: "founders",
    metaTitle: "For aspiring founders | FIRSTS Business",
    kicker: "For aspiring founders",
    headline: "You don't need a business degree ",
    highlight: "to start a business.",
    subheadline:
      `FIRSTS Business gives you a structured path through ${TOTAL_TRACKS} tracks, from validating a problem to pitching what you've built, with real exercises instead of theory.`,
    primaryCta: { label: "Start Your Journey", href: "/business#get-started" },
    secondaryCta: { label: "See the tracks", href: "/business#tracks" },
    color: "var(--sunshine-orange)",
    colorSecondary: "var(--tropical-mango)",
    imageKind: "experiment",
    stats: [
      { value: `${TOTAL_TRACKS}`, label: "tracks from idea to pitch" },
      { value: "0", label: "business plans required before you start" },
      { value: "1", label: "real experiment to run before track two" },
    ],
    features: [
      { title: "Learn by testing, not planning", body: "Every track starts with a real small experiment, a customer conversation, a prototype, an offer, before any theory." },
      { title: "No business background assumed", body: "Fundamentals like unit economics and business models are taught from scratch, in plain language." },
      { title: "A coach grounded in your business", body: "Get guidance shaped around the actual idea you're working on, not generic startup advice." },
      { title: "A portfolio of real evidence", body: "Every track leaves you with something concrete: a validated problem, a tested offer, a pitch you can actually give." },
    ],
    steps: [
      { title: "Start with a problem, not a plan", body: "Track one is about finding a real problem worth solving, before you build anything." },
      { title: "Work through the tracks in order", body: "Each track builds on real output from the one before it." },
      { title: "Test as you go", body: "Every track includes a real-world action: a conversation, a prototype, an offer." },
      { title: "Pitch what you've built", body: "The final track turns everything into a pitch you can give to a customer, partner, or investor." },
    ],
    scenarioTitle: "What it looks like in practice",
    scenarioBody:
      "An aspiring founder spends track one talking to 10 potential customers before writing a single line of a business plan, and discovers the problem they assumed people had wasn't quite the real one.",
    ctaHeadline: "Your first business experiment is 30 minutes away.",
    ctaBody: "No business plan required. Just one real test, and a platform built to help you keep going.",
    closingSteps: CLOSING_STEPS,
    ...HOME,
  },
  institutions: {
    slug: "institutions",
    metaTitle: "For institutions & incubators | FIRSTS Business",
    kicker: "For institutions & incubators",
    headline: "Give entrepreneurship ",
    highlight: "an equally serious pathway.",
    subheadline:
      "Not every student is preparing to get hired. FIRSTS Business gives your institution a structured program for the ones who want to build something of their own.",
    primaryCta: { label: "Request a Demo", href: "/request-demo?for=business-institutions" },
    secondaryCta: { label: "Verify Your Institution", href: "/onboarding/advisor" },
    color: "var(--berry-burst)",
    colorSecondary: "var(--juicy-plum)",
    imageKind: "institutions",
    stats: [
      { value: `${TOTAL_TRACKS}`, label: "tracks covering the full founder journey" },
      { value: "0", label: "reflections shared without student consent" },
      { value: "1", label: "shared infrastructure for career and business paths" },
    ],
    features: [
      { title: "A real curriculum, not a club", body: "Structured tracks with real exercises, not just pitch competitions and guest speakers." },
      { title: "Fits alongside your career center", body: "Runs as a complementary track to FIRSTS Career, for students exploring building instead of hiring." },
      { title: "Visibility without surveillance", body: "See which tracks students have completed. Their actual business ideas and reflections stay private by default." },
      { title: "Evidence your students can use", body: "Every completed track becomes part of a portfolio students can bring to incubators, grants, or investors." },
    ],
    steps: [
      { title: "Verify your institution", body: "Get your campus set up so students can join with their school email." },
      { title: "Students opt into FIRSTS Business", body: "Alongside or instead of the Career track, depending on what they're exploring." },
      { title: "Track engagement, not content", body: "Your team sees completion and momentum, never the private details of what students build." },
      { title: "Showcase outcomes", body: "Use completed tracks and portfolios as evidence for your entrepreneurship program's impact." },
    ],
    scenarioTitle: "What it looks like on a campus",
    scenarioBody:
      "A campus incubator pairs its existing mentor network with FIRSTS Business tracks, so students walk in with a validated problem and a tested prototype instead of just an idea.",
    ctaHeadline: "Give students a real path to building, not just hiring.",
    ctaBody: "Request a walkthrough, no commitment to roll it out campus-wide on day one.",
    closingSteps: CLOSING_STEPS,
    ...HOME,
  },
  mentors: {
    slug: "mentors",
    metaTitle: "For mentors & investors | FIRSTS Business",
    kicker: "For mentors & investors",
    headline: "Meet founders who've already ",
    highlight: "done the work.",
    subheadline:
      "FIRSTS Business founders arrive having validated a problem, tested an offer, and built real evidence, so your time goes toward real feedback, not explaining the basics.",
    primaryCta: { label: "Become a Mentor", href: "/business/for/mentors#get-started" },
    secondaryCta: { label: "Back to FIRSTS Business", href: "/business" },
    color: "var(--fuchsia-blast)",
    colorSecondary: "var(--neon-pink)",
    imageKind: "community",
    stats: [
      { value: `${TOTAL_TRACKS}`, label: "tracks a founder completes before track six" },
      { value: "1", label: "validated problem before any pitch" },
      { value: "0", label: "generic, untested ideas you have to untangle first" },
    ],
    features: [
      { title: "Founders who've tested their assumptions", body: "By the time you meet them, they've already talked to real customers and tested a real offer." },
      { title: "Structured conversations, not cold pitches", body: "Mentor sessions map to specific tracks, so you know exactly what stage a founder is at." },
      { title: "Flexible time commitment", body: "Office hours, a single track review, or ongoing mentorship, you choose the level of involvement." },
      { title: "Early visibility into emerging founders", body: "A pipeline of founders who've demonstrated follow-through before they ever ask for funding." },
    ],
    steps: [
      { title: "Tell us what you can offer", body: "Office hours, pitch feedback, or deeper ongoing mentorship." },
      { title: "Get matched to founders by track", body: "Mentorship requests come in tied to the specific track a founder is working through." },
      { title: "Give feedback grounded in their real work", body: "Every conversation starts from evidence: what they tested, what they learned." },
      { title: "Follow founders as they progress", body: "See how the founders you've mentored move through the remaining tracks." },
    ],
    scenarioTitle: "What a mentor conversation looks like",
    scenarioBody:
      "A mentor reviewing a track-three prototype already knows the founder validated the underlying problem with real customers, so the conversation starts at 'is this the right solution,' not 'does anyone want this.'",
    ctaHeadline: "Spend your time on real feedback, not the basics.",
    ctaBody: "Tell us how you'd like to be involved, from a single office hour to ongoing mentorship.",
    closingSteps: CLOSING_STEPS,
    ...HOME,
  },
};

export function getBusinessAudience(slug: string): AudienceConfig | undefined {
  return BUSINESS_AUDIENCES[slug];
}
