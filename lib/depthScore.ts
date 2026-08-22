import { WORKSHEET_SCHEMAS, defaultAnswers, type WorksheetField, type FieldValue } from "@/lib/worksheetSchemas";
import { loadAnswers } from "@/lib/answersStore";
import type { FirstModule } from "@/lib/dashboardData";

export type ThoroughnessLevel = 1 | 2 | 3;

export type ThoroughnessResult = {
  level: ThoroughnessLevel;
  label: string;
  pct: number;
};

export const THOROUGHNESS_LABEL: Record<ThoroughnessLevel, string> = {
  1: "Light",
  2: "Solid",
  3: "Thorough",
};

function wordCount(text: string): number {
  const trimmed = text.trim();
  return trimmed ? trimmed.split(/\s+/).length : 0;
}

function fieldWordCount(field: WorksheetField, value: FieldValue | undefined): number {
  if (value === undefined) return 0;
  switch (field.type) {
    case "text":
    case "textarea":
    case "research":
      return typeof value === "string" ? wordCount(value) : 0;
    case "chipList":
      return Array.isArray(value)
        ? (value as string[]).reduce((sum, s) => sum + wordCount(String(s)), 0)
        : 0;
    case "wordBank":
      return Array.isArray(value) ? (value as string[]).length * 2 : 0;
    case "checklist":
      return Array.isArray(value) ? (value as string[]).length : 0;
    case "table":
      return Array.isArray(value)
        ? (value as Record<string, string | number>[]).reduce((sum, row) => {
            return (
              sum +
              Object.values(row).reduce((rowSum: number, cell) => {
                if (typeof cell === "string") return rowSum + wordCount(cell);
                return rowSum + (cell ? 3 : 0);
              }, 0)
            );
          }, 0)
        : 0;
    case "scale":
      return 1;
    default:
      return 0;
  }
}

function genericWordCount(value: unknown): number {
  if (typeof value === "string") return wordCount(value);
  if (Array.isArray(value)) {
    return value.reduce((sum: number, item) => sum + genericWordCount(item), 0);
  }
  if (value && typeof value === "object") {
    return Object.values(value as Record<string, unknown>).reduce(
      (sum: number, v) => sum + genericWordCount(v),
      0
    );
  }
  return 0;
}

function levelFromRatio(ratio: number): ThoroughnessLevel {
  if (ratio >= 0.85) return 3;
  if (ratio >= 0.4) return 2;
  return 1;
}

const LEVEL_PCT: Record<ThoroughnessLevel, number> = { 1: 30, 2: 65, 3: 95 };

/**
 * Compares a student's saved worksheet answers against that worksheet's own
 * seed depth as the benchmark. Falls back to the module's own seeded
 * thoroughness (set the same way seed progress data is) when nothing has
 * been saved in this browser yet. Returns null only when there is truly
 * nothing to report, since an untouched, never-marked-complete worksheet
 * has no quality to show.
 */
export function scoreThoroughness(module: FirstModule): ThoroughnessResult | null {
  const answers = loadAnswers<Record<string, FieldValue>>(module.id);

  if (!answers) {
    if (!module.thoroughness) return null;
    const level = module.thoroughness;
    return { level, label: THOROUGHNESS_LABEL[level], pct: LEVEL_PCT[level] };
  }

  const schema = WORKSHEET_SCHEMAS[module.id];

  let ratio: number;
  if (schema && schema.length > 0) {
    const seed = defaultAnswers(schema);
    const actualWords = schema.reduce((sum, f) => sum + fieldWordCount(f, answers[f.key]), 0);
    const benchmarkWords = schema.reduce((sum, f) => sum + fieldWordCount(f, seed[f.key]), 0);
    ratio = actualWords / Math.max(benchmarkWords, 1);
  } else {
    const FALLBACK_BENCHMARK_WORDS = 60;
    ratio = genericWordCount(answers) / FALLBACK_BENCHMARK_WORDS;
  }

  const level = levelFromRatio(ratio);
  return { level, label: THOROUGHNESS_LABEL[level], pct: Math.round(Math.min(ratio, 1) * 100) };
}
