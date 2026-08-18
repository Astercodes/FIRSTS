export type LearnContent = {
  definition: string;
  whyItMatters: string;
  whenWhoWhere: { label: string; body: string }[];
  howItWorks: string[];
  tools: string[];
  scenario: { title: string; body: string };
  pitfalls: string[];
  successSignal: string;
  milestoneTies: number[];
};

export const CORE_VALUES_AUDIT_LEARN: LearnContent = {
  definition:
    "A structured pass through your own values — brainstorming widely, then narrowing to the handful that actually govern your decisions, so you can name them before a job, boss, or offer tests them.",
  whyItMatters:
    "Most people can't name their values until one gets violated — a toxic manager, a mission they can't stand behind, a schedule that eats their life. Naming them first turns a values conflict from a slow-building resentment into a clear, early signal you know how to act on.",
  whenWhoWhere: [
    {
      label: "When",
      body: "Before you evaluate any offer, and again whenever a role starts to feel wrong and you can't say why.",
    },
    {
      label: "Who",
      body: "Just you for the brainstorm — but a mentor, peer, or family member is useful for the reality-check pass.",
    },
    {
      label: "Where",
      body: "Somewhere unhurried. This isn't a 10-minute form — the narrowing step needs room to sit with tradeoffs.",
    },
  ],
  howItWorks: [
    "Brainstorm widely — write down every value that comes to mind, no editing yet.",
    "Narrow to your top 5 by asking which ones you'd defend even when inconvenient.",
    "Narrow again to your top 3 non-negotiables — the ones a job would have to violate before you'd leave.",
    "For each non-negotiable, write what a violation would actually look like day-to-day.",
    "Name your ethical boundaries — the lines you won't cross regardless of incentive.",
    "Note where your values might conflict with each other, and how you'd prioritize.",
  ],
  tools: ["Values card sort", "O*NET Work Values", "Journaling prompt set", "Peer interview script"],
  scenario: {
    title: "The offer that looked perfect on paper",
    body: "Amara took a role at a fast-growing startup for the title bump and the pay. Four months in, she realized the culture rewarded working weekends as a badge of honor — a direct hit on the \"balance\" value she'd never actually written down. She hadn't lacked options; she'd lacked a named list to check the offer against.",
  },
  pitfalls: [
    "Listing values that sound good on a resume, not ones you'd actually defend",
    "Stopping at vague words like \"growth\" or \"success\" without defining what they mean in practice",
    "Skipping the conflict-awareness step — most values collide with each other eventually",
    "Treating this as a one-time exercise instead of something you revisit as your life changes",
  ],
  successSignal:
    "You can state your top 3 non-negotiables out loud, in one sentence each, without checking your notes — and you can describe exactly what a violation of each one would look like.",
  milestoneTies: [2, 4, 12],
};

export const FIRST_TIME = "30–45 min";
export const FIRST_DIFFICULTY = "Moderate";
