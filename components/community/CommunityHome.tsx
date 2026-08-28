"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMyCommunityProfile } from "@/lib/myCommunityProfile";
import { usePartnerState } from "@/lib/partnerStore";
import { ProfileCard } from "@/components/community/ProfileCard";
import { CommunityTabs } from "@/components/community/CommunityTabs";

const ACCENT = "var(--neon-pink)";

export function CommunityHome() {
  const myProfile = useMyCommunityProfile();
  const partnerState = usePartnerState();

  const accountability = partnerState.currentPartnerHandle ? (
    <motion.div whileTap={{ scale: 0.96 }} className="inline-block">
      <Link
        href="/dashboard/community/partner"
        className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
        style={{ background: ACCENT }}
      >
        Paired with {partnerState.currentPartnerName} →
      </Link>
    </motion.div>
  ) : (
    <motion.div whileTap={{ scale: 0.96 }} className="inline-block">
      <Link
        href="/dashboard/community/partner"
        className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-3.5 py-1.5 text-xs font-semibold text-ink/60 transition-colors hover:border-ink/30"
      >
        Looking for a partner
        {partnerState.requests.length > 0 && (
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 1 }}
            className="rounded-full px-1.5 py-0.5 text-[10px] font-bold text-white"
            style={{ background: ACCENT }}
          >
            {partnerState.requests.length}
          </motion.span>
        )}
      </Link>
    </motion.div>
  );

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <CommunityTabs active="home" />
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Community
        </p>
        <h1 className="mt-1 font-display text-2xl font-semibold tracking-tight text-ink">
          Your presence
        </h1>
        <p className="mt-2 text-sm text-ink/55">
          This is how you show up to other FIRSTS students, an accountability partner, a group,
          or someone browsing by stage. Nothing here is visible to your advisor or school.
        </p>
      </motion.div>

      <ProfileCard profile={myProfile} isOwn editHref="/dashboard/community/profile" accountability={accountability} />
    </div>
  );
}
