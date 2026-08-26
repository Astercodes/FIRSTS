"use client";

import { useEffect, useState } from "react";

export type Annotation = {
  id: string;
  studentKey: string;
  studentName: string;
  firstId: number;
  firstCode: string;
  firstTitle: string;
  text: string;
  createdAt: string;
};

const KEY = "firsts:advisor-annotations";
const EVENT_NAME = "firsts:annotations-change";

function readAll(): Annotation[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Annotation[]) : [];
  } catch {
    return [];
  }
}

function writeAll(list: Annotation[]) {
  window.localStorage.setItem(KEY, JSON.stringify(list));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function addAnnotation(
  studentKey: string,
  studentName: string,
  firstId: number,
  firstCode: string,
  firstTitle: string,
  text: string
): Annotation {
  const annotation: Annotation = {
    id: `annotation-${Date.now()}-${Math.round(Math.random() * 1e6)}`,
    studentKey,
    studentName,
    firstId,
    firstCode,
    firstTitle,
    text,
    createdAt: new Date().toISOString().slice(0, 10),
  };
  writeAll([annotation, ...readAll()]);
  return annotation;
}

export function deleteAnnotation(id: string) {
  writeAll(readAll().filter((a) => a.id !== id));
}

export function useAnnotations(): Annotation[] {
  const [annotations, setAnnotations] = useState<Annotation[]>([]);

  useEffect(() => {
    function sync() {
      setAnnotations(readAll());
    }
    sync();
    window.addEventListener(EVENT_NAME, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT_NAME, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return annotations;
}
