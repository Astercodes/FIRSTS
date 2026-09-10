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
  three: [
    {
      title: "Session Plan",
      description: "Three sessions, mapped and timed, to run all 20 FIRSTS as a live workshop.",
      href: "/facilitator-kits/stage-three/session-plan.pdf",
    },
    {
      title: "Facilitator Guide",
      description: "Learning objectives, talking points, and misconceptions to preempt for all 20 FIRSTS.",
      href: "/facilitator-kits/stage-three/facilitator-guide.pdf",
    },
    {
      title: "Session Slides (PDF)",
      description: "Presentation slides for every session, ready to project.",
      href: "/facilitator-kits/stage-three/session-slides.pdf",
    },
    {
      title: "Session Slides (PPTX)",
      description: "The same deck as an editable PowerPoint file, in case you want to adapt it.",
      href: "/facilitator-kits/stage-three/session-slides.pptx",
    },
    {
      title: "Facilitator Notes / Script",
      description: "Suggested language for openings, transitions, and prompting discussion, with extra attention to rejection, interview anxiety, and negotiation guilt.",
      href: "/facilitator-kits/stage-three/facilitator-script.pdf",
    },
    {
      title: "Icebreakers / Openers",
      description: "One warm-up per session that leans into the shared discomfort of rejection and bad interviews, to lower the stakes before the real prep work begins.",
      href: "/facilitator-kits/stage-three/icebreakers.pdf",
    },
    {
      title: "Group Versions of Key Exercises",
      description: "Eight FIRSTS adapted into pair, small-group, or full-panel formats, since interviewing is fundamentally a live, social skill.",
      href: "/facilitator-kits/stage-three/group-exercises.pdf",
    },
    {
      title: "Discussion Prompts",
      description: "Open-ended questions to seed group conversation beyond the worksheets, giving real anxiety and war stories genuine room.",
      href: "/facilitator-kits/stage-three/discussion-prompts.pdf",
    },
    {
      title: "Adaptation Notes",
      description: "Online vs. in-person format notes for mock interviews, negotiation role-plays, and presentation practice.",
      href: "/facilitator-kits/stage-three/adaptation-notes.pdf",
    },
    {
      title: "Participant Pre-Work",
      description: "A short primer to send before each session, so people arrive with a real resume, cover letter, and target listings ready.",
      href: "/facilitator-kits/stage-three/participant-pre-work.pdf",
    },
    {
      title: "FAQ",
      description: "Anticipated participant questions and suggested facilitator responses.",
      href: "/facilitator-kits/stage-three/faq.pdf",
    },
    {
      title: "Session Debrief / Close-Out Script",
      description: "How to end each session, summarize, and bridge to what's next, closing on an encouraging note given how much of this stage touches rejection and anxiety.",
      href: "/facilitator-kits/stage-three/debrief-close-out-script.pdf",
    },
    {
      title: "Completion Criteria",
      description: "What counts as done, and how it triggers the Stage Three credential.",
      href: "/facilitator-kits/stage-three/completion-criteria.pdf",
    },
    {
      title: "Facilitator Feedback Form",
      description: "A lightweight way to flag what worked and what didn't, cohort to cohort.",
      href: "/facilitator-kits/stage-three/facilitator-feedback-form.pdf",
    },
  ],
  four: [
    {
      title: "Session Plan",
      description: "Three sessions, mapped and timed, to run all 25 FIRSTS as a live workshop.",
      href: "/facilitator-kits/stage-four/session-plan.pdf",
    },
    {
      title: "Facilitator Guide",
      description: "Learning objectives, talking points, and misconceptions to preempt for all 25 FIRSTS.",
      href: "/facilitator-kits/stage-four/facilitator-guide.pdf",
    },
    {
      title: "Session Slides (PDF)",
      description: "Presentation slides for every session, ready to project.",
      href: "/facilitator-kits/stage-four/session-slides.pdf",
    },
    {
      title: "Session Slides (PPTX)",
      description: "The same deck as an editable PowerPoint file, in case you want to adapt it.",
      href: "/facilitator-kits/stage-four/session-slides.pptx",
    },
    {
      title: "Facilitator Notes / Script",
      description: "Suggested language for openings, transitions, and prompting discussion, with extra attention to the rejection, self-doubt, and hardship this stage can surface.",
      href: "/facilitator-kits/stage-four/facilitator-script.pdf",
    },
    {
      title: "Icebreakers / Openers",
      description: "One warm-up per session that works by confession and humor, so the room admits everyone struggles with this before the real content lands.",
      href: "/facilitator-kits/stage-four/icebreakers.pdf",
    },
    {
      title: "Group Versions of Key Exercises",
      description: "Seven FIRSTS adapted into pair, small-group, or full-room formats, for the ones that genuinely strengthen with accountability or outside perspective.",
      href: "/facilitator-kits/stage-four/group-exercises.pdf",
    },
    {
      title: "Discussion Prompts",
      description: "Open-ended questions to seed group conversation beyond the worksheets, reading the room before pushing any of these to a full-group share.",
      href: "/facilitator-kits/stage-four/discussion-prompts.pdf",
    },
    {
      title: "Adaptation Notes",
      description: "Online vs. in-person format notes for the confidence routine, resilience debrief, and guided visualization.",
      href: "/facilitator-kits/stage-four/adaptation-notes.pdf",
    },
    {
      title: "Participant Pre-Work",
      description: "A short primer to send before each session, so people arrive oriented.",
      href: "/facilitator-kits/stage-four/participant-pre-work.pdf",
    },
    {
      title: "FAQ",
      description: "Anticipated participant questions and suggested facilitator responses.",
      href: "/facilitator-kits/stage-four/faq.pdf",
    },
    {
      title: "Session Debrief / Close-Out Script",
      description: "How to end each session, summarize, and bridge to what's next, closing on genuine commitment rather than just information covered.",
      href: "/facilitator-kits/stage-four/debrief-close-out-script.pdf",
    },
    {
      title: "Completion Criteria",
      description: "What counts as done, and how it triggers the Stage Four credential, defined by genuine first use of a habit rather than just a written plan.",
      href: "/facilitator-kits/stage-four/completion-criteria.pdf",
    },
    {
      title: "Facilitator Feedback Form",
      description: "A lightweight way to flag what worked and what didn't, cohort to cohort.",
      href: "/facilitator-kits/stage-four/facilitator-feedback-form.pdf",
    },
  ],
  five: [
    {
      title: "Session Plan",
      description: "Four sessions, mapped and timed, to run all 30 FIRSTS as a live workshop.",
      href: "/facilitator-kits/stage-five/session-plan.pdf",
    },
    {
      title: "Facilitator Guide",
      description: "Learning objectives, talking points, and misconceptions to preempt for all 30 FIRSTS.",
      href: "/facilitator-kits/stage-five/facilitator-guide.pdf",
    },
    {
      title: "Session Slides (PDF)",
      description: "Presentation slides for every session, ready to project.",
      href: "/facilitator-kits/stage-five/session-slides.pdf",
    },
    {
      title: "Session Slides (PPTX)",
      description: "The same deck as an editable PowerPoint file, in case you want to adapt it.",
      href: "/facilitator-kits/stage-five/session-slides.pptx",
    },
    {
      title: "Facilitator Notes / Script",
      description: "Suggested language for openings, transitions, and prompting discussion, aimed at pulling participants back to real, concrete examples whenever the conversation drifts abstract.",
      href: "/facilitator-kits/stage-five/facilitator-script.pdf",
    },
    {
      title: "Icebreakers / Openers",
      description: "One opener per session built directly from that session's content, making an abstract reasoning concept concrete before any formal teaching.",
      href: "/facilitator-kits/stage-five/icebreakers.pdf",
    },
    {
      title: "Group Versions of Key Exercises",
      description: "Seven FIRSTS adapted into pair or small-group formats, for the blind spots that are genuinely hard to catch working alone.",
      href: "/facilitator-kits/stage-five/group-exercises.pdf",
    },
    {
      title: "Discussion Prompts",
      description: "Open-ended questions to seed group conversation beyond the worksheets, surfacing where each framework has shown up in real, lived decisions.",
      href: "/facilitator-kits/stage-five/discussion-prompts.pdf",
    },
    {
      title: "Adaptation Notes",
      description: "Online vs. in-person format notes for every group activity that changes shape, from collaborative map-building to the failure auction.",
      href: "/facilitator-kits/stage-five/adaptation-notes.pdf",
    },
    {
      title: "Participant Pre-Work",
      description: "A short primer to send before each session, so people arrive with a real decision or problem in mind rather than a hypothetical one.",
      href: "/facilitator-kits/stage-five/participant-pre-work.pdf",
    },
    {
      title: "FAQ",
      description: "Anticipated participant questions and suggested facilitator responses.",
      href: "/facilitator-kits/stage-five/faq.pdf",
    },
    {
      title: "Session Debrief / Close-Out Script",
      description: "How to end each session, summarize, and bridge to what's next, reinforcing which of the thirty frameworks build on which.",
      href: "/facilitator-kits/stage-five/debrief-close-out-script.pdf",
    },
    {
      title: "Completion Criteria",
      description: "What counts as done, and how it triggers the Stage Five credential, screening for genuine application over abstract or hypothetical answers.",
      href: "/facilitator-kits/stage-five/completion-criteria.pdf",
    },
    {
      title: "Facilitator Feedback Form",
      description: "A lightweight way to flag what worked and what didn't, cohort to cohort.",
      href: "/facilitator-kits/stage-five/facilitator-feedback-form.pdf",
    },
  ],
  six: [
    {
      title: "Session Plan",
      description: "Six sessions, mapped and timed, to run all 70 FIRSTS as a live workshop.",
      href: "/facilitator-kits/stage-six/session-plan.pdf",
    },
    {
      title: "Facilitator Guide",
      description: "Learning objectives, talking points, and misconceptions to preempt for all 70 FIRSTS.",
      href: "/facilitator-kits/stage-six/facilitator-guide.pdf",
    },
    {
      title: "Session Slides (PDF)",
      description: "Presentation slides for every session, ready to project.",
      href: "/facilitator-kits/stage-six/session-slides.pdf",
    },
    {
      title: "Session Slides (PPTX)",
      description: "The same deck as an editable PowerPoint file, in case you want to adapt it.",
      href: "/facilitator-kits/stage-six/session-slides.pptx",
    },
    {
      title: "Facilitator Notes / Script",
      description: "Suggested language for openings, transitions, and prompting discussion, leaning heavily on the on-camera and on-the-spot moments this stage involves.",
      href: "/facilitator-kits/stage-six/facilitator-script.pdf",
    },
    {
      title: "Icebreakers / Openers",
      description: "One diagnostic warm-up per session, built directly from that session's content.",
      href: "/facilitator-kits/stage-six/icebreakers.pdf",
    },
    {
      title: "Group Versions of Key Exercises",
      description: "Twelve FIRSTS across all six sections adapted into pair, small-group, or role-play formats, for the ones where outside interaction is genuinely load-bearing to the skill.",
      href: "/facilitator-kits/stage-six/group-exercises.pdf",
    },
    {
      title: "Discussion Prompts",
      description: "Open-ended questions to seed group conversation beyond the worksheets, connecting the volume of individual exercises back to something genuinely personal.",
      href: "/facilitator-kits/stage-six/discussion-prompts.pdf",
    },
    {
      title: "Adaptation Notes",
      description: "Online vs. in-person format notes for every activity that changes shape, from role-play pairs to the rotating facilitator handoff.",
      href: "/facilitator-kits/stage-six/adaptation-notes.pdf",
    },
    {
      title: "Participant Pre-Work",
      description: "A short primer to send before each session, so people arrive with real material, emails, a reading, a piece of their own work, rather than preparing in the abstract.",
      href: "/facilitator-kits/stage-six/participant-pre-work.pdf",
    },
    {
      title: "FAQ",
      description: "Anticipated participant questions and suggested facilitator responses.",
      href: "/facilitator-kits/stage-six/faq.pdf",
    },
    {
      title: "Session Debrief / Close-Out Script",
      description: "How to end each of the six sessions, summarize, and bridge to what's next, so seventy individual FIRSTS read as one coherent skill rather than a checklist.",
      href: "/facilitator-kits/stage-six/debrief-close-out-script.pdf",
    },
    {
      title: "Completion Criteria",
      description: "What counts as done, and how it triggers the Stage Six credential, built around sample-checking given the stage's genuine size.",
      href: "/facilitator-kits/stage-six/completion-criteria.pdf",
    },
    {
      title: "Facilitator Feedback Form",
      description: "A lightweight way to flag what worked and what didn't, cohort to cohort.",
      href: "/facilitator-kits/stage-six/facilitator-feedback-form.pdf",
    },
  ],
  seven: [
    {
      title: "Session Plan",
      description: "Thirteen sub-sessions, mapped and timed, to run all 90 FIRSTS as a live workshop.",
      href: "/facilitator-kits/stage-seven/session-plan.pdf",
    },
    {
      title: "Facilitator Guide",
      description: "Learning objectives, talking points, and misconceptions to preempt for all 90 FIRSTS.",
      href: "/facilitator-kits/stage-seven/facilitator-guide.pdf",
    },
    {
      title: "Session Slides (PDF)",
      description: "Presentation slides for every sub-session, ready to project.",
      href: "/facilitator-kits/stage-seven/session-slides.pdf",
    },
    {
      title: "Session Slides (PPTX)",
      description: "The same deck as an editable PowerPoint file, in case you want to adapt it.",
      href: "/facilitator-kits/stage-seven/session-slides.pptx",
    },
    {
      title: "Facilitator Notes / Script",
      description: "Suggested language for openings, transitions, and prompting discussion across all thirteen sub-sessions.",
      href: "/facilitator-kits/stage-seven/facilitator-script.pdf",
    },
    {
      title: "Icebreakers / Openers",
      description: "One opener per sub-session, thirteen in total, leaning into shared, self-deprecating experience with tools and tech.",
      href: "/facilitator-kits/stage-seven/icebreakers.pdf",
    },
    {
      title: "Group Versions of Key Exercises",
      description: "Twelve FIRSTS spanning all six sections adapted into pair, small-group, or role-play formats, for the ones a solo version alone would miss.",
      href: "/facilitator-kits/stage-seven/group-exercises.pdf",
    },
    {
      title: "Discussion Prompts",
      description: "Open-ended questions to seed group conversation beyond the worksheets, organized by sub-session with three prompts each.",
      href: "/facilitator-kits/stage-seven/discussion-prompts.pdf",
    },
    {
      title: "Adaptation Notes",
      description: "Online vs. in-person format notes for every activity that changes shape, flagging the handful that genuinely work better online.",
      href: "/facilitator-kits/stage-seven/adaptation-notes.pdf",
    },
    {
      title: "Participant Pre-Work",
      description: "A short primer to send before each section, so people arrive with the real dataset, project, or portfolio each section's continuity depends on.",
      href: "/facilitator-kits/stage-seven/participant-pre-work.pdf",
    },
    {
      title: "FAQ",
      description: "Anticipated participant questions and suggested facilitator responses, several addressing this stage's scale and pacing directly.",
      href: "/facilitator-kits/stage-seven/faq.pdf",
    },
    {
      title: "Session Debrief / Close-Out Script",
      description: "How to end each section and bridge to what's next across all thirteen sub-sessions, so the stage's ninety FIRSTS read as one coherent arc.",
      href: "/facilitator-kits/stage-seven/debrief-close-out-script.pdf",
    },
    {
      title: "Completion Criteria",
      description: "What counts as done, and how it triggers the Stage Seven credential, built around spot-checking by section given the stage's genuine scale.",
      href: "/facilitator-kits/stage-seven/completion-criteria.pdf",
    },
    {
      title: "Facilitator Feedback Form",
      description: "A lightweight way to flag what worked and what didn't, cohort to cohort.",
      href: "/facilitator-kits/stage-seven/facilitator-feedback-form.pdf",
    },
  ],
  eight: [
    {
      title: "Session Plan",
      description: "Six sessions, mapped and timed, to run all 50 FIRSTS as a live workshop.",
      href: "/facilitator-kits/stage-eight/session-plan.pdf",
    },
    {
      title: "Facilitator Guide",
      description: "Learning objectives, talking points, and misconceptions to preempt for all 50 FIRSTS.",
      href: "/facilitator-kits/stage-eight/facilitator-guide.pdf",
    },
    {
      title: "Icebreakers / Openers",
      description: "One warm-up per session that exercises the specific muscle, listening, feedback, collaborating, speaking, that session is about to work more seriously.",
      href: "/facilitator-kits/stage-eight/icebreakers.pdf",
    },
    {
      title: "Group Versions of Key Exercises",
      description: "Ten FIRSTS across all six sections given a fuller live facilitation script, an observer role, a fishbowl, a rotation, for the ones structure genuinely changes the outcome.",
      href: "/facilitator-kits/stage-eight/group-exercises.pdf",
    },
    {
      title: "Discussion Prompts",
      description: "Open-ended questions to seed group conversation beyond the worksheets, working especially well as closing questions given how interpersonal this stage already is.",
      href: "/facilitator-kits/stage-eight/discussion-prompts.pdf",
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
