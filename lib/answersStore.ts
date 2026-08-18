const PREFIX = "firsts:answers:";

export function loadAnswers<T extends Record<string, unknown> = Record<string, unknown>>(
  moduleId: number
): T | null {
  try {
    const raw = window.localStorage.getItem(PREFIX + moduleId);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

export function saveAnswers(moduleId: number, answers: Record<string, unknown>) {
  try {
    window.localStorage.setItem(PREFIX + moduleId, JSON.stringify(answers));
  } catch {
    // localStorage unavailable (private browsing, quota), answers just won't persist
  }
}
