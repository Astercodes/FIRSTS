import type { StageId } from "./dashboardData";

export type Goal = {
  targetStage: StageId;
  targetDate: string;
  createdAt: string;
};

const KEY = "firsts:goal";
const EVENT_NAME = "firsts:goal-change";

export function loadGoal(): Goal | null {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Goal) : null;
  } catch {
    return null;
  }
}

export function saveGoal(targetStage: StageId, targetDate: string) {
  try {
    const goal: Goal = { targetStage, targetDate, createdAt: new Date().toISOString().slice(0, 10) };
    window.localStorage.setItem(KEY, JSON.stringify(goal));
    window.dispatchEvent(new Event(EVENT_NAME));
  } catch {
    // localStorage unavailable (private browsing, quota), goal just won't persist
  }
}

export function clearGoal() {
  try {
    window.localStorage.removeItem(KEY);
    window.dispatchEvent(new Event(EVENT_NAME));
  } catch {
    // localStorage unavailable
  }
}

export { EVENT_NAME as GOAL_CHANGE_EVENT };
