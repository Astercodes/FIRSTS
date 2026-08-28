"use client";

import { useEffect, useState } from "react";
import { useRecruitingEvents, useEventRsvps, setRsvp, attendeeCount, upcomingEvents } from "@/lib/eventsStore";
import { loadProfile, PROFILE_CHANGE_EVENT } from "@/lib/profileStore";

const ACCENT = "var(--pink-grapefruit)";

export function UpcomingEventsCard() {
  const events = useRecruitingEvents();
  const rsvps = useEventRsvps();
  const [institution, setInstitution] = useState<string | undefined>(undefined);

  useEffect(() => {
    function sync() {
      setInstitution(loadProfile()?.institution);
    }
    sync();
    window.addEventListener(PROFILE_CHANGE_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(PROFILE_CHANGE_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const relevant = upcomingEvents(
    events.filter((e) => e.institution === "all" || e.institution === institution)
  ).slice(0, 3);

  if (relevant.length === 0) return null;

  return (
    <div className="rounded-3xl border border-ink/8 bg-white p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
        Employer events
      </p>
      <h2 className="mt-1.5 font-display text-lg font-semibold text-ink">
        Career fairs & info sessions
      </h2>
      <div className="mt-4 space-y-3">
        {relevant.map((event) => {
          const going = Boolean(rsvps[event.id]);
          return (
            <div key={event.id} className="rounded-2xl border border-ink/8 bg-paper-dim p-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full px-2 py-0.5 text-[10px] font-bold text-white" style={{ background: ACCENT }}>
                      {event.type}
                    </span>
                    <span className="text-xs text-ink/45">{event.format}</span>
                  </div>
                  <p className="mt-1.5 text-sm font-semibold text-ink/80">{event.title}</p>
                  <p className="text-xs text-ink/50">
                    {event.company} ·{" "}
                    {new Date(event.date).toLocaleString("en-US", { weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setRsvp(event.id, !going)}
                  className="shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all"
                  style={
                    going
                      ? { borderColor: ACCENT, color: ACCENT, background: "color-mix(in oklab, var(--pink-grapefruit) 14%, white)" }
                      : { borderColor: "rgba(11,4,16,0.15)", color: "rgba(11,4,16,0.6)" }
                  }
                >
                  {going ? "Going" : "RSVP"}
                </button>
              </div>
              <p className="mt-2 text-[11px] text-ink/40">{attendeeCount(event, rsvps)} going</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
