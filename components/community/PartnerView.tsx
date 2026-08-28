"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { STAGES } from "@/lib/dashboardData";
import { completionStats } from "@/lib/dashboardData";
import { useFirstsWithProgress } from "@/lib/progressStore";
import { useMyCommunityProfile } from "@/lib/myCommunityProfile";
import { communityPeers, findPeerByHandle } from "@/lib/communityData";
import { suggestedPartners } from "@/lib/partnerMatch";
import { CommunityTabs } from "@/components/community/CommunityTabs";
import {
  usePartnerState,
  sendPartnerRequest,
  acceptRequest,
  declineRequest,
  unmatchPartner,
  sendCheckin,
  sendNudge,
  NUDGE_PRESET,
} from "@/lib/partnerStore";

const ACCENT = "var(--neon-pink)";

function peerOverallPct(stage: string): number {
  const idx = Math.max(0, STAGES.findIndex((s) => s.id === stage));
  return Math.round(((idx + 0.5) / STAGES.length) * 100);
}

export function PartnerView() {
  const myProfile = useMyCommunityProfile();
  const modules = useFirstsWithProgress();
  const myPct = completionStats(modules).pct;
  const partnerState = usePartnerState();

  if (partnerState.currentPartnerHandle) {
    return (
      <PairedDashboard
        myName={myProfile.name}
        myPct={myPct}
        myStreak={myProfile.streak}
        partnerName={partnerState.currentPartnerName ?? "Your partner"}
        partnerHandle={partnerState.currentPartnerHandle}
        pairedSince={partnerState.pairedSince}
      />
    );
  }

  const exclude = new Set(partnerState.requests.map((r) => r.peerHandle));
  const suggestions = suggestedPartners(myProfile, communityPeers(), exclude, 5);

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <CommunityTabs active="partner" />
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Accountability
        </p>
        <h1 className="mt-1 font-display text-2xl font-semibold tracking-tight text-ink">
          Find a partner
        </h1>
        <p className="mt-2 text-sm text-ink/55">
          One person checking your progress beats a dozen people liking your posts. Pair up, keep
          each other honest, unmatch whenever it stops working, no hard feelings either way.
        </p>
      </div>

      {partnerState.requests.length > 0 && (
        <section className="rounded-3xl border border-ink/10 bg-white p-6 sm:p-7">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
            Requests
          </p>
          <div className="space-y-3">
            <AnimatePresence initial={false}>
              {partnerState.requests.map((r) => (
                <motion.div
                  key={r.id}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-ink/8 bg-paper-dim p-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-ink/80">
                      {r.direction === "incoming" ? `${r.peerName} wants to be your accountability partner` : `Request sent to ${r.peerName}`}
                    </p>
                    <Link href={`/dashboard/community/u/${r.peerHandle}`} className="text-xs text-ink/45 underline decoration-ink/20 underline-offset-4 hover:text-ink">
                      View profile
                    </Link>
                  </div>
                  {r.direction === "incoming" && (
                    <div className="flex items-center gap-2">
                      <motion.button
                        whileTap={{ scale: 0.92 }}
                        type="button"
                        onClick={() => acceptRequest(r.id)}
                        className="rounded-full px-3.5 py-1.5 text-xs font-semibold text-white"
                        style={{ background: ACCENT }}
                      >
                        Accept
                      </motion.button>
                      <button
                        type="button"
                        onClick={() => declineRequest(r.id)}
                        className="text-xs font-medium text-ink/40 hover:text-ink"
                      >
                        Decline
                      </button>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>
      )}

      <section className="rounded-3xl border border-ink/10 bg-white p-6 sm:p-7">
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Suggested for you
        </p>
        <p className="mb-4 text-sm text-ink/55">
          Matched on stage alignment and similar pace, not just who&apos;s nearby, so it&apos;s a
          fair pairing on both sides.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <AnimatePresence initial={false}>
            {suggestions.map((peer, i) => {
              const stageLabel = STAGES.find((s) => s.id === peer.currentStage)?.shortLabel;
              return (
                <motion.div
                  key={peer.handle}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -3 }}
                  transition={{ delay: i * 0.04, duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl border border-ink/8 bg-paper-dim p-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-white"
                      style={{ background: "linear-gradient(135deg, var(--neon-pink), var(--tropical-mango))" }}
                    >
                      {peer.name.charAt(0)}
                    </span>
                    <div className="min-w-0">
                      <Link href={`/dashboard/community/u/${peer.handle}`} className="truncate text-sm font-semibold text-ink hover:underline">
                        {peer.name}
                      </Link>
                      <p className="truncate text-xs text-ink/50">
                        {peer.school} · {stageLabel} · {peer.streak}d streak
                      </p>
                    </div>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.93 }}
                    type="button"
                    onClick={() => sendPartnerRequest(peer.handle, peer.name)}
                    className="mt-3 w-full rounded-full border border-ink/10 py-1.5 text-xs font-semibold text-ink/70 transition-colors hover:border-ink/25"
                  >
                    Send request
                  </motion.button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

function PairedDashboard({
  myName,
  myPct,
  myStreak,
  partnerName,
  partnerHandle,
  pairedSince,
}: {
  myName: string;
  myPct: number;
  myStreak: number;
  partnerName: string;
  partnerHandle: string;
  pairedSince: string | null;
}) {
  const partnerPeer = findPeerByHandle(partnerHandle);
  const partnerPct = partnerPeer ? peerOverallPct(partnerPeer.currentStage) : 0;
  const partnerStreak = partnerPeer?.streak ?? 0;
  const sharedStreak = Math.min(myStreak, partnerStreak);
  const partnerState = usePartnerState();
  const [draft, setDraft] = useState("");

  function handleSend() {
    const body = draft.trim();
    if (!body) return;
    sendCheckin(body);
    setDraft("");
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <CommunityTabs active="partner" />
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Accountability
        </p>
        <h1 className="mt-1 font-display text-2xl font-semibold tracking-tight text-ink">
          You & {partnerName.split(" ")[0]}
        </h1>
        <p className="mt-2 text-sm text-ink/55">
          Paired since {pairedSince}. Private to the two of you, no one else sees this thread.
        </p>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-6 sm:p-7">
        <div className="grid grid-cols-2 gap-6">
          <ProgressColumn label={myName.split(" ")[0]} pct={myPct} />
          <ProgressColumn label={partnerName.split(" ")[0]} pct={partnerPct} />
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-ink/8 pt-4">
          <div>
            <p className="font-display text-2xl font-bold text-ink">{sharedStreak}</p>
            <p className="text-xs text-ink/45">shared streak, both showed up</p>
          </div>
          <div className="flex items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.94 }}
              whileHover={{ scale: 1.03 }}
              type="button"
              onClick={() => sendNudge()}
              className="rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm"
              style={{ background: ACCENT }}
            >
              Nudge · &quot;{NUDGE_PRESET}&quot;
            </motion.button>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-6 sm:p-7">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Check-ins
        </p>
        <div className="space-y-2.5">
          <AnimatePresence initial={false}>
            {partnerState.checkins.map((m) => (
              <motion.div
                key={m.id}
                layout
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  m.from === "me" ? "ml-auto bg-ink text-paper" : "bg-paper-dim text-ink/80"
                }`}
              >
                {m.body}
                <p className={`mt-1 text-[10px] ${m.from === "me" ? "text-paper/50" : "text-ink/40"}`}>{m.createdAt}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="mt-4 flex gap-2">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Send a check-in…"
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

      <div className="rounded-3xl border border-ink/10 bg-paper-dim p-6 sm:p-7">
        <p className="mb-2 text-sm font-semibold text-ink/70">Not working out?</p>
        <p className="mb-4 text-sm leading-relaxed text-ink/55">
          Paces mismatch, life gets busy, it happens. Unmatching doesn&apos;t say anything about
          either of you, it just means it&apos;s time to find someone whose rhythm fits better.
        </p>
        <button
          type="button"
          onClick={() => unmatchPartner()}
          className="rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold text-ink/60 transition-colors hover:border-ink/30"
        >
          Find a new partner
        </button>
      </div>
    </div>
  );
}

function ProgressColumn({ label, pct }: { label: string; pct: number }) {
  return (
    <div>
      <p className="text-sm font-semibold text-ink/70">{label}</p>
      <p className="mt-1 font-display text-3xl font-bold text-ink">{pct}%</p>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-ink/6">
        <motion.div
          className="h-full rounded-full"
          style={{ background: ACCENT }}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        />
      </div>
    </div>
  );
}
