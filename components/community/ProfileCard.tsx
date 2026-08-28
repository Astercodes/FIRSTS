"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { STAGES } from "@/lib/dashboardData";
import type { PeerCommunityProfile } from "@/lib/communityData";

const BANNER = "linear-gradient(120deg, var(--neon-pink), var(--tropical-mango) 55%, var(--sunshine-orange))";

const BADGE_COLORS = [
  "var(--neon-pink)",
  "var(--berry-burst)",
  "var(--fuchsia-blast)",
  "var(--juicy-plum)",
  "var(--pink-grapefruit)",
  "var(--sunshine-orange)",
];

function hashString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function badgeColor(title: string): string {
  return BADGE_COLORS[hashString(title) % BADGE_COLORS.length];
}

export function ProfileCard({
  profile,
  isOwn,
  editHref,
  accountability,
}: {
  profile: PeerCommunityProfile;
  isOwn?: boolean;
  editHref?: string;
  accountability?: ReactNode;
}) {
  const stageIndex = STAGES.findIndex((s) => s.id === profile.currentStage);
  const stageLabel = STAGES[stageIndex]?.shortLabel ?? profile.currentStage;
  const stagePct = STAGES.length > 1 ? stageIndex / (STAGES.length - 1) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden rounded-3xl border border-ink/8 bg-white"
    >
      <div className="relative h-24" style={{ background: BANNER }}>
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_30%,white,transparent_35%),radial-gradient(circle_at_80%_70%,white,transparent_30%)]" />
      </div>

      <div className="px-7 pb-7">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex items-end gap-4">
            <motion.span
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 20 }}
              className="flex h-20 w-20 shrink-0 -translate-y-8 items-center justify-center rounded-full font-display text-2xl font-bold text-white ring-4 ring-white"
              style={{ background: "linear-gradient(135deg, var(--neon-pink), var(--tropical-mango))" }}
            >
              {profile.name.charAt(0)}
            </motion.span>
            <div className="-mt-3">
              <h1 className="font-display text-xl font-semibold tracking-tight text-ink">
                {profile.name}
                {isOwn && <span className="ml-2 text-xs font-medium text-ink/35">(you)</span>}
              </h1>
              <p className="text-sm text-ink/55">
                {profile.school}
                {profile.major ? ` · ${profile.major}` : ""}
                {profile.gradYear ? ` · Class of ${profile.gradYear}` : ""}
              </p>
            </div>
          </div>
          {editHref && (
            <Link
              href={editHref}
              className="shrink-0 rounded-full border border-ink/10 px-4 py-2 text-sm font-semibold text-ink/70 transition-colors hover:border-ink/25 hover:bg-paper-dim"
            >
              Edit profile
            </Link>
          )}
        </div>

        {profile.bio && <p className="mt-4 text-sm leading-relaxed text-ink/65">{profile.bio}</p>}

        {accountability && <div className="mt-4">{accountability}</div>}

        <div className="mt-5 rounded-2xl bg-paper-dim px-4 py-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-ink/40">Currently</p>
          <p className="mt-0.5 text-sm font-semibold text-ink/80">{profile.currentlyWorkingOn}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <StageRing label={stageLabel} pct={stagePct} />
          <StreakStat days={profile.streak} />
        </div>

        {profile.badges.length > 0 && (
          <div className="mt-5 border-t border-ink/8 pt-4">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-ink/40">
              Badges
            </p>
            <div className="flex flex-wrap gap-3">
              {profile.badges.map((b, i) => (
                <BadgeTile key={b} title={b} delay={i * 0.04} />
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function StageRing({ label, pct }: { label: string; pct: number }) {
  const r = 15;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-ink/8 px-4 py-2.5">
      <svg viewBox="0 0 36 36" className="h-9 w-9 shrink-0 -rotate-90">
        <circle cx="18" cy="18" r={r} fill="none" stroke="rgba(11,4,16,0.08)" strokeWidth="4" />
        <motion.circle
          cx="18"
          cy="18"
          r={r}
          fill="none"
          stroke="var(--neon-pink)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: c - pct * c }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        />
      </svg>
      <div>
        <p className="font-display text-sm font-bold text-ink">{label}</p>
        <p className="text-[11px] text-ink/45">current stage</p>
      </div>
    </div>
  );
}

function StreakStat({ days }: { days: number }) {
  return (
    <div className="flex items-center gap-2.5 rounded-2xl border border-ink/8 px-4 py-2.5">
      <motion.span
        animate={days > 0 ? { scale: [1, 1.15, 1] } : {}}
        transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.2 }}
        className="text-lg"
      >
        🔥
      </motion.span>
      <div>
        <p className="font-display text-sm font-bold text-ink">
          {days} day{days === 1 ? "" : "s"}
        </p>
        <p className="text-[11px] text-ink/45">streak</p>
      </div>
    </div>
  );
}

function BadgeTile({ title, delay }: { title: string; delay: number }) {
  const [hovered, setHovered] = useState(false);
  const color = badgeColor(title);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 300, damping: 22 }}
      className="group relative flex w-[72px] flex-col items-center gap-1.5 text-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="flex h-12 w-12 items-center justify-center rounded-full text-lg shadow-sm transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:scale-105"
        style={{ background: `linear-gradient(135deg, ${color}, color-mix(in oklab, ${color} 60%, white))` }}
      >
        <TrophyIcon className="h-5 w-5 text-white" />
      </span>
      <span className="text-[10px] font-semibold leading-tight text-ink/70">{title}</span>

      {hovered && (
        <motion.span
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-max max-w-[180px] -translate-x-1/2 rounded-xl border border-ink/10 bg-ink px-3 py-2 text-paper shadow-lg"
        >
          <span className="block text-[11px] leading-snug text-paper/85">{title}</span>
        </motion.span>
      )}
    </motion.div>
  );
}

function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.7} className={className}>
      <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" stroke="currentColor" strokeLinejoin="round" />
      <path d="M7 5H4v1a3 3 0 0 0 3 3M17 5h3v1a3 3 0 0 1-3 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 13v3M9 20h6M10 20v-1.5a2 2 0 0 1 2-2 2 2 0 0 1 2 2V20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
