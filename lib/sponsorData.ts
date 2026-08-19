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
  },
];

export function getCandidatePortfolio(id: string): CandidatePortfolio | undefined {
  return CANDIDATE_PORTFOLIOS.find((c) => c.id === id);
}
