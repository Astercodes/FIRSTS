"use client";

import { useEffect, useState } from "react";

export type EventType = "Career fair" | "Info session" | "Office hours";
export type EventFormat = "Virtual" | "In-person";

export type RecruitingEvent = {
  id: string;
  title: string;
  type: EventType;
  format: EventFormat;
  institution: string | "all";
  date: string;
  description: string;
  company: string;
  createdAt: string;
  /** A believable seeded starting headcount, so a brand-new event doesn't show 0 attendees forever. */
  seedAttendees: number;
};

const EVENTS_KEY = "firsts:employer-events";
const EVENTS_EVENT = "firsts:employer-events-change";
const RSVP_KEY = "firsts:student-event-rsvps";
const RSVP_EVENT = "firsts:student-event-rsvps-change";

function hashSeed(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function seededInt(seed: string, min: number, max: number): number {
  return min + (hashSeed(seed) % (max - min + 1));
}

function readEvents(): RecruitingEvent[] {
  try {
    const raw = window.localStorage.getItem(EVENTS_KEY);
    return raw ? (JSON.parse(raw) as RecruitingEvent[]) : [];
  } catch {
    return [];
  }
}

function writeEvents(events: RecruitingEvent[]) {
  window.localStorage.setItem(EVENTS_KEY, JSON.stringify(events));
  window.dispatchEvent(new Event(EVENTS_EVENT));
}

export function createEvent(input: {
  title: string;
  type: EventType;
  format: EventFormat;
  institution: string | "all";
  date: string;
  description: string;
  company: string;
}): RecruitingEvent {
  const event: RecruitingEvent = {
    id: `evt-${Date.now()}-${Math.round(Math.random() * 1e6)}`,
    createdAt: new Date().toISOString().slice(0, 10),
    seedAttendees: seededInt(input.title + input.date, 4, 38),
    ...input,
  };
  writeEvents([event, ...readEvents()]);
  return event;
}

export function removeEvent(id: string) {
  writeEvents(readEvents().filter((e) => e.id !== id));
}

export function useRecruitingEvents(): RecruitingEvent[] {
  const [events, setEvents] = useState<RecruitingEvent[]>([]);

  useEffect(() => {
    function sync() {
      setEvents(readEvents());
    }
    sync();
    window.addEventListener(EVENTS_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENTS_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return events;
}

function readRsvps(): Record<string, boolean> {
  try {
    const raw = window.localStorage.getItem(RSVP_KEY);
    return raw ? (JSON.parse(raw) as Record<string, boolean>) : {};
  } catch {
    return {};
  }
}

function writeRsvps(map: Record<string, boolean>) {
  window.localStorage.setItem(RSVP_KEY, JSON.stringify(map));
  window.dispatchEvent(new Event(RSVP_EVENT));
}

export function setRsvp(eventId: string, going: boolean) {
  const map = readRsvps();
  if (going) map[eventId] = true;
  else delete map[eventId];
  writeRsvps(map);
}

export function useEventRsvps(): Record<string, boolean> {
  const [map, setMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    function sync() {
      setMap(readRsvps());
    }
    sync();
    window.addEventListener(RSVP_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(RSVP_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return map;
}

/** Seeded headcount plus the current browser's own RSVP, since this app has one real student per browser. */
export function attendeeCount(event: RecruitingEvent, rsvps: Record<string, boolean>): number {
  return event.seedAttendees + (rsvps[event.id] ? 1 : 0);
}

/** Events not yet started, soonest first. */
export function upcomingEvents(events: RecruitingEvent[], today: Date = new Date()): RecruitingEvent[] {
  return events
    .filter((e) => new Date(e.date).getTime() >= today.getTime())
    .sort((a, b) => a.date.localeCompare(b.date));
}
