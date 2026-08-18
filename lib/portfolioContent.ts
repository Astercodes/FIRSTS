import { WORKSHEET_SCHEMAS, defaultAnswers } from "./worksheetSchemas";
import { loadAnswers } from "./answersStore";

export type PortfolioPiece = {
  moduleId: number;
  label: string;
  render: (a: Record<string, unknown>) => string;
};

const CORE_VALUES_DEFAULTS = {
  top3: ["Integrity", "Autonomy", "Balance"],
  filters: {
    Integrity: {
      looksLike: "Being able to say what actually happened, even when it's inconvenient.",
    },
  },
};

export const PORTFOLIO_PIECES: PortfolioPiece[] = [
  {
    moduleId: 1,
    label: "Core Values",
    render: (a) => {
      const top3 = (a.top3 as string[]) ?? CORE_VALUES_DEFAULTS.top3;
      const filters = (a.filters as Record<string, { looksLike?: string }>) ?? CORE_VALUES_DEFAULTS.filters;
      const first = top3[0];
      const looksLike = first ? filters[first]?.looksLike : undefined;
      return looksLike ? `${top3.join(", ")}. ${looksLike}` : top3.join(", ");
    },
  },
  {
    moduleId: 2,
    label: "Career Vision",
    render: (a) => (a.visionStatement as string) ?? "",
  },
  {
    moduleId: 3,
    label: "Personal Purpose",
    render: (a) => {
      const commitment = (a.purposeCommitment as string) ?? "";
      const soThat = (a.purposeSoThat as string) ?? "";
      return soThat ? `My life is committed to ${commitment}, so that ${soThat}.` : commitment;
    },
  },
  {
    moduleId: 4,
    label: "Personal Brand Narrative",
    render: (a) => (a.narrativeDraft as string) ?? "",
  },
  {
    moduleId: 12,
    label: "Career SWOT: Strengths",
    render: (a) => (a.strengths as string) ?? "",
  },
  {
    moduleId: 20,
    label: "Elevator Pitch",
    render: (a) => (a.recruiterVersion as string) ?? "",
  },
  {
    moduleId: 21,
    label: "Personal Brand Statement",
    render: (a) => (a.statement as string) ?? "",
  },
  {
    moduleId: 31,
    label: "LinkedIn About",
    render: (a) => (a.sectionDraft as string) ?? "",
  },
  {
    moduleId: 53,
    label: "Resume Bullet",
    render: (a) => {
      const bullets = a.bullets as { rewritten?: string }[] | undefined;
      return bullets?.[0]?.rewritten ?? "";
    },
  },
];

/** Saved answers for a module if any exist, otherwise the worksheet's example (seed) answers. */
export function effectiveAnswers(moduleId: number): { answers: Record<string, unknown>; isPersonalized: boolean } {
  const saved = loadAnswers(moduleId);
  if (saved) return { answers: saved, isPersonalized: true };

  if (moduleId === 1) {
    return {
      answers: {
        top3: CORE_VALUES_DEFAULTS.top3,
        filters: CORE_VALUES_DEFAULTS.filters,
      },
      isPersonalized: false,
    };
  }

  const fields = WORKSHEET_SCHEMAS[moduleId] ?? [];
  return { answers: defaultAnswers(fields), isPersonalized: false };
}
