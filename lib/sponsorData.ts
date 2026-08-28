import { getCohort, cohortAvgCompletion } from "./cohortData";

export type Sponsorship = {
  id: string;
  cohortId: string;
  tier: "Cohort sponsor" | "Department partner";
  startedOn: string;
};

export const SPONSORSHIPS: Sponsorship[] = [
  { id: "sp-1", cohortId: "marketing-2027", tier: "Cohort sponsor", startedOn: "September 2025" },
  { id: "sp-2", cohortId: "business-analytics-2026", tier: "Department partner", startedOn: "January 2026" },
  { id: "sp-3", cohortId: "hci-2026", tier: "Cohort sponsor", startedOn: "October 2025" },
  { id: "sp-4", cohortId: "ross-2027", tier: "Cohort sponsor", startedOn: "February 2026" },
  { id: "sp-5", cohortId: "comms-2026", tier: "Department partner", startedOn: "November 2025" },
  { id: "sp-6", cohortId: "econ-2026", tier: "Cohort sponsor", startedOn: "March 2026" },
];

export function sponsorshipStats(s: Sponsorship) {
  const cohort = getCohort(s.cohortId);
  if (!cohort) return { name: "Unknown cohort", students: 0, avgCompletion: 0, institution: "" };
  return {
    name: cohort.name,
    students: cohort.students.length,
    avgCompletion: cohortAvgCompletion(cohort),
    institution: cohort.institution,
  };
}

export type CandidatePortfolio = {
  id: string;
  name: string;
  headline: string;
  school: string;
  sharedOn: string;
  stagesCompleted: number;
  topValues: string[];
  starStory: { situation: string; task: string; action: string; result: string };
  goalHeadline: string;
  /**
   * Separate from sharing a portfolio: whether this candidate has explicitly
   * opted into being messaged directly by employers. Sharing a portfolio
   * signals job-search intent, not consent to be contacted, so this stays
   * its own flag and gates the outreach feature everywhere it's checked.
   */
  openToOutreach: boolean;
};

export const CANDIDATE_PORTFOLIOS: CandidatePortfolio[] = [
  {
    id: "cp-1",
    name: "Maya Okafor",
    headline: "Marketing student focused on brand strategy and campaign analytics",
    school: "New York University",
    sharedOn: "3 days ago",
    stagesCompleted: 3,
    topValues: ["Honesty in feedback", "Learning by shipping", "Consistency over intensity"],
    starStory: {
      situation: "Our student marketing club's spring showcase had 40% lower turnout than the prior year.",
      task: "I was asked to rebuild the outreach plan with three weeks left before the event.",
      action: "I audited what channels had actually driven signups before, cut two that weren't working, and built a referral incentive for existing members.",
      result: "Turnout came in 15% above the prior year, and the referral incentive became a standing part of the club's playbook.",
    },
    goalHeadline: "Land a brand strategy internship at a consumer company within 6 months",
    openToOutreach: true,
  },
  {
    id: "cp-2",
    name: "Fatima Rahman",
    headline: "Marketing student with a focus on lifecycle and retention campaigns",
    school: "New York University",
    sharedOn: "1 week ago",
    stagesCompleted: 4,
    topValues: ["Curiosity", "Precision in execution", "Advocating for the user"],
    starStory: {
      situation: "A campus nonprofit I volunteered with had a donor email list with a 4% open rate.",
      task: "They asked me to figure out why engagement had collapsed and propose a fix.",
      action: "I segmented the list by donation history, rewrote subject lines around specific impact stories instead of generic asks, and cut send frequency in half.",
      result: "Open rates recovered to 22% within two months, and one re-engagement email brought in the nonprofit's second-largest single donation of the year.",
    },
    goalHeadline: "Move into a full-time lifecycle marketing role after graduation",
    openToOutreach: true,
  },
  {
    id: "cp-3",
    name: "Grace Liu",
    headline: "Business analytics student focused on operations and forecasting",
    school: "New York University",
    sharedOn: "2 days ago",
    stagesCompleted: 4,
    topValues: ["Rigor before speed", "Clear communication of uncertainty", "Ownership"],
    starStory: {
      situation: "A campus dining co-op was over-ordering perishables and throwing away roughly 12% of inventory weekly.",
      task: "As part of a class project, I was asked to build a forecasting model to reduce waste.",
      action: "I pulled six months of order history, built a simple demand model weighted by day of week and event calendar, and presented it with a clear confidence range instead of a single number.",
      result: "The co-op adopted the model and cut weekly waste from 12% to under 5% within a month.",
    },
    goalHeadline: "Land an entry-level business analyst role in operations or supply chain",
    openToOutreach: false,
  },
  {
    id: "cp-4",
    name: "Aisha Bello",
    headline: "Business analytics student interested in product analytics",
    school: "New York University",
    sharedOn: "5 days ago",
    stagesCompleted: 3,
    topValues: ["Evidence over opinion", "Iterating in public", "Patience with ambiguity"],
    starStory: {
      situation: "A student-built campus app had strong downloads but very low week-two retention.",
      task: "I volunteered to figure out where users were dropping off and recommend changes.",
      action: "I mapped the onboarding funnel event by event, found a single confusing permissions screen causing most of the drop-off, and proposed a simplified version.",
      result: "After the team shipped the change, week-two retention rose from 18% to 31%.",
    },
    goalHeadline: "Break into product analytics at an early-stage tech company",
    openToOutreach: false,
  },
  {
    id: "cp-5",
    name: "Bode Reyes",
    headline: "Human-computer interaction student focused on accessible product design",
    school: "Stanford University",
    sharedOn: "4 days ago",
    stagesCompleted: 4,
    topValues: ["Design for the edge case first", "Test with real users, not assumptions", "Ownership of the outcome"],
    starStory: {
      situation: "A student accessibility group flagged that our university's course registration tool was nearly unusable with a screen reader.",
      task: "I was asked to lead a redesign proposal the registrar's office would actually consider adopting.",
      action: "I ran usability sessions with three screen-reader users, mapped every broken interaction, and delivered an annotated prototype with the fixes ranked by effort and impact.",
      result: "The registrar's office adopted the top four fixes for the next release, and the accessibility group asked me to consult on two more campus tools.",
    },
    goalHeadline: "Land a product design role on an accessibility or inclusive design team",
    openToOutreach: true,
  },
  {
    id: "cp-6",
    name: "Farid Nwosu",
    headline: "Business student focused on operations strategy and process design",
    school: "University of Michigan",
    sharedOn: "6 days ago",
    stagesCompleted: 4,
    topValues: ["Systems thinking", "Measure before you change", "Bring the team along"],
    starStory: {
      situation: "A student-run consulting club I led was losing members because project turnaround took nearly triple the promised time.",
      task: "As incoming president, I was asked to fix the intake and staffing process before the next semester.",
      action: "I mapped the full project pipeline, found that staffing approvals were the bottleneck, and rebuilt the process around a standing weekly staffing meeting with clear decision owners.",
      result: "Average project turnaround dropped from 11 weeks to 6, and membership grew by a third the following semester.",
    },
    goalHeadline: "Land a rotational operations or strategy role at a large consumer company",
    openToOutreach: false,
  },
  {
    id: "cp-7",
    name: "Emeka Johansson",
    headline: "Communications student focused on crisis and internal communications",
    school: "Howard University",
    sharedOn: "1 week ago",
    stagesCompleted: 4,
    topValues: ["Clarity over cleverness", "Say it before the rumor does", "Consistency across channels"],
    starStory: {
      situation: "A campus organization I served as communications lead for faced public criticism after a scheduling error affected a major event.",
      task: "I was asked to draft and coordinate the organization's public response within a few hours.",
      action: "I drafted a direct acknowledgment with a concrete fix, got it approved by leadership in under an hour, and pushed the same message consistently across email, social, and in-person channels.",
      result: "Public criticism died down within a day, and the organization's advisor asked me to write the standing crisis-communication template for future events.",
    },
    goalHeadline: "Move into a corporate communications or public relations role",
    openToOutreach: true,
  },
  {
    id: "cp-8",
    name: "Emeka Oyelaran",
    headline: "Economics student focused on development economics and data policy",
    school: "University of Lagos",
    sharedOn: "3 days ago",
    stagesCompleted: 4,
    topValues: ["Evidence-based recommendations", "Understand the local context first", "Precision in writing"],
    starStory: {
      situation: "A student research group I was part of had collected survey data on informal-sector employment but couldn't turn it into anything policymakers would read.",
      task: "I was asked to turn six months of raw survey data into a policy brief for a local government partner.",
      action: "I cleaned and cross-tabbed the dataset, built three clear charts instead of a dense table, and wrote a two-page brief that led with the single most actionable finding.",
      result: "The brief was cited in the local government's next budget planning session, and the research group has used my format as the template since.",
    },
    goalHeadline: "Land an analyst role at a development finance or policy research organization",
    openToOutreach: false,
  },
];

export function getCandidatePortfolio(id: string): CandidatePortfolio | undefined {
  return CANDIDATE_PORTFOLIOS.find((c) => c.id === id);
}
