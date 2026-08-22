"use client";

import { useEffect, useState } from "react";

export type CustomCohort = {
  id: string;
  name: string;
  createdAt: string;
  /** `${cohortId}-${studentId}` keys, so members can span official cohorts. */
  studentKeys: string[];
};

const KEY = "firsts:advisor-custom-cohorts";
const EVENT_NAME = "firsts:custom-cohorts-change";

function readAll(): CustomCohort[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as CustomCohort[]) : [];
  } catch {
    return [];
  }
}

function writeAll(list: CustomCohort[]) {
  window.localStorage.setItem(KEY, JSON.stringify(list));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function createCustomCohort(name: string, studentKeys: string[]): CustomCohort {
  const cohort: CustomCohort = {
    id: `custom-${Date.now()}-${Math.round(Math.random() * 1e6)}`,
    name,
    createdAt: new Date().toISOString().slice(0, 10),
    studentKeys,
  };
  writeAll([...readAll(), cohort]);
  return cohort;
}

export function deleteCustomCohort(id: string) {
  writeAll(readAll().filter((c) => c.id !== id));
}

export function useCustomCohorts(): CustomCohort[] {
  const [cohorts, setCohorts] = useState<CustomCohort[]>([]);

  useEffect(() => {
    function sync() {
      setCohorts(readAll());
    }
    sync();
    window.addEventListener(EVENT_NAME, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT_NAME, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return cohorts;
}
