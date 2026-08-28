"use client";

import { useEffect, useState } from "react";
import type { StageId } from "@/lib/dashboardData";

export type TalentAlert = {
  id: string;
  institution: string | "all";
  stages: StageId[];
  createdAt: string;
  /** Combined match count (named + aggregate cohort) at the moment this alert was saved, so a revisit can show what changed. */
  snapshotCount: number;
};

const KEY = "firsts:employer-talent-alerts";
const EVENT_NAME = "firsts:employer-talent-alerts-change";

function readAlerts(): TalentAlert[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as TalentAlert[]) : [];
  } catch {
    return [];
  }
}

function writeAlerts(alerts: TalentAlert[]) {
  window.localStorage.setItem(KEY, JSON.stringify(alerts));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function saveTalentAlert(institution: string | "all", stages: StageId[], snapshotCount: number): TalentAlert {
  const alert: TalentAlert = {
    id: `alert-${Date.now()}-${Math.round(Math.random() * 1e6)}`,
    institution,
    stages,
    createdAt: new Date().toISOString().slice(0, 10),
    snapshotCount,
  };
  writeAlerts([alert, ...readAlerts()]);
  return alert;
}

export function removeTalentAlert(id: string) {
  writeAlerts(readAlerts().filter((a) => a.id !== id));
}

export function useTalentAlerts(): TalentAlert[] {
  const [alerts, setAlerts] = useState<TalentAlert[]>([]);

  useEffect(() => {
    function sync() {
      setAlerts(readAlerts());
    }
    sync();
    window.addEventListener(EVENT_NAME, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT_NAME, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return alerts;
}
