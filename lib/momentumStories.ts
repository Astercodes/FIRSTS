import type { StageId } from "@/lib/dashboardData";

export type MomentumStory = {
  id: string;
  descriptor: string;
  stage: StageId;
  stageLabel: string;
  timeframe: string;
  cadence: string;
  quote: string;
};

/**
 * Anonymized, illustrative pace stories used as inspiration content, never
 * as competitive stats. No names, no rankings, just a plausible path and a
 * cadence someone could copy.
 */
export const MOMENTUM_STORIES: MomentumStory[] = [
  {
    id: "s1",
    descriptor: "A Marketing senior",
    stage: "three",
    stageLabel: "Stage Three: Job Application & Interview Skills",
    timeframe: "3 weeks",
    cadence: "20 minutes a day",
    quote: "I stopped waiting for a free afternoon and just did one FIRST every morning with coffee. The interview prep ones stuck the most because I could rehearse out loud on my walk to class.",
  },
  {
    id: "s2",
    descriptor: "A Computer Science sophomore",
    stage: "one",
    stageLabel: "Stage One: Self-Awareness & Career Clarity",
    timeframe: "5 weeks",
    cadence: "twice a week, 45 minutes",
    quote: "I almost skipped the values and vision work because it felt slow compared to just building a resume. It ended up being the thing that made every later FIRST faster to write.",
  },
  {
    id: "s3",
    descriptor: "A Psychology junior",
    stage: "four",
    stageLabel: "Stage Four: Mindset, Productivity & Habits",
    timeframe: "6 weeks",
    cadence: "10 minutes every morning",
    quote: "The habit FIRSTS are short on purpose. I stacked mine right after brushing my teeth and stopped thinking about whether I felt like doing it.",
  },
  {
    id: "s4",
    descriptor: "An early professional, one year out",
    stage: "two",
    stageLabel: "Stage Two: Professional Identity & Personal Brand",
    timeframe: "4 weeks",
    cadence: "one FIRST per weekday lunch break",
    quote: "I did the personal brand work on my actual lunch break at my first job. It felt strange updating LinkedIn while employed, but it's exactly what got me noticed for the role I have now.",
  },
  {
    id: "s5",
    descriptor: "A Business senior",
    stage: "seven",
    stageLabel: "Stage Seven: Hard Skills",
    timeframe: "8 weeks",
    cadence: "one spreadsheet or data FIRST every Sunday",
    quote: "I treated Stage Seven like a weekly appointment with myself. Slower than some people, but I never missed a week and it never felt like a scramble.",
  },
  {
    id: "s6",
    descriptor: "An Engineering junior",
    stage: "five",
    stageLabel: "Stage Five: Thinking, Reasoning & Mental Models",
    timeframe: "3 weeks",
    cadence: "20 to 30 minutes, three times a week",
    quote: "These FIRSTS are the ones I'd have skipped as 'not urgent.' Doing them anyway changed how I actually approach problems in my internship, not just how I talk about problem-solving.",
  },
];

/** Deterministic pick so the same visit shows the same story until it changes, instead of reshuffling on every render. */
export function storyForIndex(index: number): MomentumStory {
  return MOMENTUM_STORIES[((index % MOMENTUM_STORIES.length) + MOMENTUM_STORIES.length) % MOMENTUM_STORIES.length];
}
