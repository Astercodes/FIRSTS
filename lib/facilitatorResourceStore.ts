import { STAGES, type StageId } from "@/lib/dashboardData";

export type WorkshopKit = {
  stageId: StageId;
  version: number;
  focus: string;
  facilitatorGuide: string[];
  discussionPrompts: string[];
  timingGuide: { segment: string; minutes: number }[];
  worksheetNote: string;
};

export type KitDocument = {
  title: string;
  description: string;
  href: string;
};

/** Real, downloadable facilitator resource documents, added stage by stage as they're written. */
const STAGE_DOCUMENTS: Partial<Record<StageId, KitDocument[]>> = {
  one: [
    {
      title: "Session Plan",
      description: "Three sessions, mapped and timed, to run all 18 FIRSTS as a live workshop.",
      href: "/facilitator-kits/stage-one/session-plan.pdf",
    },
    {
      title: "Facilitator Guide",
      description: "Learning objectives, talking points, and misconceptions to preempt for all 18 FIRSTS.",
      href: "/facilitator-kits/stage-one/facilitator-guide.pdf",
    },
    {
      title: "Session Slides (PDF)",
      description: "Presentation slides for all three sessions, ready to project.",
      href: "/facilitator-kits/stage-one/session-slides.pdf",
    },
    {
      title: "Session Slides (PPTX)",
      description: "The same deck as an editable PowerPoint file, in case you want to adapt it.",
      href: "/facilitator-kits/stage-one/session-slides.pptx",
    },
    {
      title: "Facilitator Notes / Script",
      description: "Suggested language for openings, transitions, and prompting discussion.",
      href: "/facilitator-kits/stage-one/facilitator-script.pdf",
    },
    {
      title: "Group Facilitation Toolkit",
      description: "Icebreakers, group-adapted exercises, and discussion prompts for live sessions, bundled in one file.",
      href: "/facilitator-kits/stage-one/group-facilitation-toolkit.pdf",
    },
    {
      title: "Icebreakers / Openers",
      description: "Short, stage-themed warm-ups tied to what each session actually covers.",
      href: "/facilitator-kits/stage-one/icebreakers.pdf",
    },
    {
      title: "Group Versions of Key Exercises",
      description: "Live, group-adapted versions of the FIRSTS that benefit most from interaction.",
      href: "/facilitator-kits/stage-one/group-exercises.pdf",
    },
    {
      title: "Discussion Prompts",
      description: "Open-ended questions to seed group conversation beyond the worksheets.",
      href: "/facilitator-kits/stage-one/discussion-prompts.pdf",
    },
    {
      title: "Adaptation Notes",
      description: "Online vs. in-person format notes for every activity that changes shape.",
      href: "/facilitator-kits/stage-one/adaptation-notes.pdf",
    },
    {
      title: "Participant Pre-Work",
      description: "A short primer to send before each session, so people arrive oriented.",
      href: "/facilitator-kits/stage-one/participant-pre-work.pdf",
    },
    {
      title: "FAQ",
      description: "Anticipated participant questions and suggested facilitator responses.",
      href: "/facilitator-kits/stage-one/faq.pdf",
    },
    {
      title: "Session Debrief / Close-Out Script",
      description: "How to end each session, summarize, and bridge to what's next.",
      href: "/facilitator-kits/stage-one/debrief-close-out-script.pdf",
    },
    {
      title: "Completion Criteria",
      description: "What counts as done, and how it triggers the Stage One credential.",
      href: "/facilitator-kits/stage-one/completion-criteria.pdf",
    },
    {
      title: "Facilitator Feedback Form",
      description: "A lightweight way to flag what worked and what didn't, cohort to cohort.",
      href: "/facilitator-kits/stage-one/facilitator-feedback-form.pdf",
    },
  ],
  two: [
    {
      title: "Session Plan",
      description: "Six sessions, mapped and timed, to run all 40 FIRSTS as a live workshop.",
      href: "/facilitator-kits/stage-two/session-plan.pdf",
    },
    {
      title: "Facilitator Guide",
      description: "Learning objectives, talking points, and misconceptions to preempt for all 40 FIRSTS.",
      href: "/facilitator-kits/stage-two/facilitator-guide.pdf",
    },
    {
      title: "Session Slides (PDF)",
      description: "Presentation slides for all six sessions, ready to project.",
      href: "/facilitator-kits/stage-two/session-slides.pdf",
    },
    {
      title: "Session Slides (PPTX)",
      description: "The same deck as an editable PowerPoint file, in case you want to adapt it.",
      href: "/facilitator-kits/stage-two/session-slides.pptx",
    },
    {
      title: "Facilitator Notes / Script",
      description: "Suggested language for openings, transitions, and prompting discussion, leaning heavily on the vulnerable moments this stage involves.",
      href: "/facilitator-kits/stage-two/facilitator-script.pdf",
    },
    {
      title: "Icebreakers / Openers",
      description: "One diagnostic warm-up per section, built from Stage Two's actual content.",
      href: "/facilitator-kits/stage-two/icebreakers.pdf",
    },
    {
      title: "Group Versions of Key Exercises",
      description: "Ten FIRSTS across all six sections adapted into pair, small-group, or role-play formats.",
      href: "/facilitator-kits/stage-two/group-exercises.pdf",
    },
    {
      title: "Discussion Prompts",
      description: "Open-ended questions to seed group conversation beyond the worksheets.",
      href: "/facilitator-kits/stage-two/discussion-prompts.pdf",
    },
    {
      title: "Adaptation Notes",
      description: "Online vs. in-person format notes for every hands-on, device-dependent activity in this stage.",
      href: "/facilitator-kits/stage-two/adaptation-notes.pdf",
    },
    {
      title: "Participant Pre-Work",
      description: "A short primer to send before each session, so people arrive with the accounts and materials this stage needs.",
      href: "/facilitator-kits/stage-two/participant-pre-work.pdf",
    },
    {
      title: "FAQ",
      description: "Anticipated participant questions and suggested facilitator responses.",
      href: "/facilitator-kits/stage-two/faq.pdf",
    },
    {
      title: "Session Debrief / Close-Out Script",
      description: "How to end each session, summarize, and bridge to what's next.",
      href: "/facilitator-kits/stage-two/debrief-close-out-script.pdf",
    },
    {
      title: "Completion Criteria",
      description: "What counts as done, and how it triggers the Stage Two credential.",
      href: "/facilitator-kits/stage-two/completion-criteria.pdf",
    },
    {
      title: "Facilitator Feedback Form",
      description: "A lightweight way to flag what worked and what didn't, cohort to cohort.",
      href: "/facilitator-kits/stage-two/facilitator-feedback-form.pdf",
    },
  ],
};

export function stageDocuments(stageId: StageId): KitDocument[] {
  return STAGE_DOCUMENTS[stageId] ?? [];
}

const STAGE_FOCUS: Record<StageId, string> = {
  one: "self-awareness and career clarity, often the most emotionally loaded stage",
  two: "professional identity and personal brand, students tend to underclaim here",
  three: "job applications and interview mechanics, high anxiety, wants concrete drills",
  four: "mindset, productivity, and habits, easy to feel preachy if not grounded in specifics",
  five: "thinking and reasoning, abstract, needs worked examples to land",
  six: "communication across speaking, reading, and writing, best run with live practice",
  seven: "hard skills, technical and reference-heavy, expect follow-up questions after",
  eight: "soft skills, relies on roleplay and peer feedback to feel real",
  nine: "English vocabulary, short and drill-based, works well as a recurring session",
  ten: "relationships and connections, the stage everything else was building toward, expect real names and real friction to come up in discussion",
  eleven: "tools and technology, hands-on and software-specific, works best with laptops open in the room",
  twelve: "leadership, the culminating stage, expect students with real, sometimes raw stories about leading and being led",
  thirteen: "teamwork and collaboration, the peer-level counterpart to leadership, expect stories about difficult teammates and real team friction, not just leaders",
  fourteen: "project management, the most formal and document-heavy stage, expect students to lean on templates heavily at first, the charters, risk registers, and status reports take real repetition before they feel natural",
  fifteen: "business and organizational acumen, students without much workplace exposure yet will lean hardest on conversations with managers and colleagues to answer these honestly, encourage that rather than guessing",
  sixteen: "workplace professionalism and ethics, the longest stage by far at 45 FIRSTS, expect students without a current role to lean on internships or past jobs, and be ready for genuinely sensitive disclosures in the ethics and integrity sections",
};

/** Stage One's kit was recently revised; version bumps here should flag facilitators still on the old copy. */
const KIT_VERSIONS: Partial<Record<StageId, number>> = { one: 2 };

export function workshopKit(stageId: StageId): WorkshopKit {
  const stage = STAGES.find((s) => s.id === stageId);
  const label = stage?.shortLabel ?? stageId;
  const focus = STAGE_FOCUS[stageId];

  return {
    stageId,
    version: KIT_VERSIONS[stageId] ?? 1,
    focus,
    facilitatorGuide: [
      `Open by naming what ${label} is about and why it's ${focus.split(",")[1]?.trim() || "worth the room's attention"}.`,
      "Run the practical exercise live in the first 15 minutes, don't just describe it.",
      "Leave the last 10 minutes for open questions, this is where the real learning surfaces.",
      "Close by pointing to the next FIRST in this stage so the room knows what follows.",
    ],
    discussionPrompts: [
      `What's one thing about ${label.toLowerCase()} you assumed you already had figured out?`,
      "What would you tell someone starting this stage next week?",
      "Where did you get stuck, and what unstuck you?",
    ],
    timingGuide: [
      { segment: "Framing and why it matters", minutes: 10 },
      { segment: "Guided practical exercise", minutes: 25 },
      { segment: "Small group discussion", minutes: 15 },
      { segment: "Open questions and close", minutes: 10 },
    ],
    worksheetNote: `Printable worksheet mirrors the in-app ${label} exercise, hand it out before the guided portion so students can follow along on paper.`,
  };
}

export function allWorkshopKits(): WorkshopKit[] {
  return STAGES.map((s) => workshopKit(s.id));
}
