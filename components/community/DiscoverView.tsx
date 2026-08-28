"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { STAGES } from "@/lib/dashboardData";
import { useMyCommunityProfile } from "@/lib/myCommunityProfile";
import { communityPeers, type PeerCommunityProfile } from "@/lib/communityData";
import { matchScore } from "@/lib/partnerMatch";
import { useFollowing, follow, unfollow } from "@/lib/followStore";
import { CommunityTabs } from "@/components/community/CommunityTabs";

const ACCENT = "var(--neon-pink)";

export function DiscoverView() {
  const myProfile = useMyCommunityProfile();
  const following = useFollowing();
  const allPeers = communityPeers();

  const schools = useMemo(() => Array.from(new Set(allPeers.map((p) => p.school))).sort(), [allPeers]);
  const majors = useMemo(() => Array.from(new Set(allPeers.map((p) => p.major))).sort(), [allPeers]);
  const gradYears = useMemo(() => Array.from(new Set(allPeers.map((p) => p.gradYear))).sort(), [allPeers]);

  const [school, setSchool] = useState("all");
  const [stage, setStage] = useState("all");
  const [major, setMajor] = useState("all");
  const [gradYear, setGradYear] = useState("all");

  const filtered = allPeers.filter((p) => {
    if (school !== "all" && p.school !== school) return false;
    if (stage !== "all" && p.currentStage !== stage) return false;
    if (major !== "all" && p.major !== major) return false;
    if (gradYear !== "all" && p.gradYear !== gradYear) return false;
    return true;
  });

  const sameFirst = allPeers.filter((p) => p.currentStage === myProfile.currentStage).slice(0, 6);

  const suggested = useMemo(() => {
    return allPeers
      .filter((p) => !following.includes(p.handle))
      .map((p) => ({ peer: p, score: matchScore(myProfile, p) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map((x) => x.peer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allPeers, following]);

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <CommunityTabs active="discover" />

      <div>
        <h1 className="font-display text-2xl font-semibold tracking-tight text-ink">Discover</h1>
        <p className="mt-2 text-sm text-ink/55">
          Find people to follow or ask an accountability question, especially useful if you don&apos;t
          have a built-in cohort.
        </p>
      </div>

      {sameFirst.length > 0 && (
        <Section title="Working on the same stage right now" subtitle={`People currently in ${STAGES.find((s) => s.id === myProfile.currentStage)?.shortLabel}`}>
          <PeerGrid peers={sameFirst} following={following} />
        </Section>
      )}

      <Section title="Suggested for you" subtitle="Similar pace and stage, lighter than a partner match">
        <PeerGrid peers={suggested} following={following} />
      </Section>

      <section className="rounded-3xl border border-ink/10 bg-white p-6 sm:p-7">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Browse everyone
        </p>
        <div className="grid gap-2 sm:grid-cols-4">
          <FilterSelect label="School" value={school} onChange={setSchool} options={schools} />
          <FilterSelect
            label="Stage"
            value={stage}
            onChange={setStage}
            options={STAGES.map((s) => s.id)}
            renderLabel={(id) => STAGES.find((s) => s.id === id)?.shortLabel ?? id}
          />
          <FilterSelect label="Major" value={major} onChange={setMajor} options={majors} />
          <FilterSelect label="Grad year" value={gradYear} onChange={setGradYear} options={gradYears} />
        </div>
        <p className="mt-3 text-xs text-ink/40">{filtered.length} matches</p>
        <div className="mt-4">
          <PeerGrid peers={filtered.slice(0, 24)} following={following} />
        </div>
      </section>
    </div>
  );
}

function Section({ title, subtitle, children }: { title: string; subtitle: string; children: ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-3xl border border-ink/10 bg-white p-6 sm:p-7"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">{title}</p>
      <p className="mb-4 mt-0.5 text-sm text-ink/50">{subtitle}</p>
      {children}
    </motion.section>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
  renderLabel,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  renderLabel?: (v: string) => string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-ink/40">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-ink/10 bg-paper-dim px-3 py-2 text-sm text-ink outline-none focus:border-ink/25"
      >
        <option value="all">All</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {renderLabel ? renderLabel(opt) : opt}
          </option>
        ))}
      </select>
    </label>
  );
}

function PeerGrid({ peers, following }: { peers: PeerCommunityProfile[]; following: string[] }) {
  if (peers.length === 0) {
    return <p className="text-sm text-ink/45">No matches with this filter.</p>;
  }
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence initial={false}>
        {peers.map((peer, i) => {
          const isFollowing = following.includes(peer.handle);
          const stageLabel = STAGES.find((s) => s.id === peer.currentStage)?.shortLabel;
          return (
            <motion.div
              key={peer.handle}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: Math.min(i * 0.03, 0.24), duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3 }}
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
                    {peer.school} · {stageLabel}
                  </p>
                </div>
              </div>
              <motion.button
                whileTap={{ scale: 0.93 }}
                type="button"
                onClick={() => (isFollowing ? unfollow(peer.handle) : follow(peer.handle))}
                className="mt-3 w-full rounded-full border py-1.5 text-xs font-semibold transition-colors"
                style={
                  isFollowing
                    ? { borderColor: ACCENT, color: ACCENT, background: "color-mix(in oklab, var(--neon-pink) 10%, white)" }
                    : { borderColor: "rgba(11,4,16,0.1)", color: "rgba(11,4,16,0.6)" }
                }
              >
                {isFollowing ? "✓ Following" : "Follow"}
              </motion.button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
