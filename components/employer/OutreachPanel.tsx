"use client";

import { useState } from "react";
import { sendOutreachMessage, threadForCandidate, useOutreachMessages } from "@/lib/employerOutreachStore";

export function OutreachPanel({ candidateId, candidateName, openToOutreach }: { candidateId: string; candidateName: string; openToOutreach: boolean }) {
  const allMessages = useOutreachMessages();
  const thread = threadForCandidate(allMessages, candidateId);
  const [draft, setDraft] = useState("");

  if (!openToOutreach) {
    return (
      <div className="rounded-3xl border border-ink/10 bg-paper-dim p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">Message</p>
        <p className="mt-2 text-sm leading-relaxed text-ink/55">
          {candidateName.split(" ")[0]} hasn&apos;t opted into direct messages from employers.
          Sharing a portfolio doesn&apos;t automatically mean they&apos;re open to being contacted,
          so this stays closed until they turn it on themselves.
        </p>
      </div>
    );
  }

  function handleSend() {
    const body = draft.trim();
    if (!body) return;
    sendOutreachMessage(candidateId, body);
    setDraft("");
  }

  return (
    <div className="rounded-3xl border border-ink/10 bg-white p-7">
      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">Message</p>
      <p className="mb-4 text-sm text-ink/55">
        {candidateName.split(" ")[0]} has opted into direct messages from employers.
      </p>

      {thread.length > 0 && (
        <div className="mb-4 space-y-2.5">
          {thread.map((m) => (
            <div
              key={m.id}
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                m.from === "employer" ? "ml-auto bg-ink text-paper" : "bg-paper-dim text-ink/80"
              }`}
            >
              {m.body}
              <p className={`mt-1 text-[10px] ${m.from === "employer" ? "text-paper/50" : "text-ink/40"}`}>
                {m.createdAt}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="flex gap-2">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSend();
            }
          }}
          placeholder={`Message ${candidateName.split(" ")[0]}…`}
          className="flex-1 rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25"
        />
        <button
          type="button"
          onClick={handleSend}
          disabled={!draft.trim()}
          className="shrink-0 rounded-2xl bg-ink px-4 py-2.5 text-sm font-semibold text-paper transition-opacity disabled:opacity-40"
        >
          Send
        </button>
      </div>
    </div>
  );
}
