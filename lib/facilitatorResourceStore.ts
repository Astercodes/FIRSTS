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
