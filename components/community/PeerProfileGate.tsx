"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { findPeerByHandle } from "@/lib/communityData";
import { useMyCommunityProfile } from "@/lib/myCommunityProfile";
import { usePartnerState, sendPartnerRequest } from "@/lib/partnerStore";
import { ProfileCard } from "@/components/community/ProfileCard";

const ACCENT = "var(--neon-pink)";

export function PeerProfileGate({ handle }: { handle: string }) {
  const myProfile = useMyCommunityProfile();
  const partnerState = usePartnerState();
  const isOwn = myProfile.handle === handle;
  const peer = isOwn ? myProfile : findPeerByHandle(handle);

  if (!peer) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-6 text-center">
        <p className="font-display text-xl font-semibold text-ink">Profile not found.</p>
        <p className="mt-2 text-sm leading-relaxed text-ink/55">
          This handle doesn&apos;t match anyone in the FIRSTS community.
        </p>
        <Link
          href="/dashboard/community"
          className="mt-6 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-ink/85"
        >
          Back to community
        </Link>
      </div>
    );
  }

  const alreadyRequested = partnerState.requests.some((r) => r.peerHandle === handle);
  const isCurrentPartner = partnerState.currentPartnerHandle === handle;

  let partnerAction: ReactNode = null;
  if (!isOwn) {
    if (isCurrentPartner) {
      partnerAction = (
        <Link
          href="/dashboard/community/partner"
          className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold text-white"
          style={{ background: ACCENT }}
        >
          Your accountability partner →
        </Link>
      );
    } else if (alreadyRequested) {
      partnerAction = (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-3.5 py-1.5 text-xs font-semibold text-ink/50">
          Request pending
        </span>
      );
    } else if (!partnerState.currentPartnerHandle) {
      partnerAction = (
        <button
          type="button"
          onClick={() => sendPartnerRequest(peer.handle, peer.name)}
          className="rounded-full px-3.5 py-1.5 text-xs font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: ACCENT }}
        >
          Send partner request
        </button>
      );
    }
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <Link href="/dashboard/community" className="text-sm font-medium text-ink/45 hover:text-ink">
        ← Community
      </Link>
      <ProfileCard
        profile={peer}
        isOwn={isOwn}
        editHref={isOwn ? "/dashboard/community/profile" : undefined}
        accountability={partnerAction}
      />
    </div>
  );
}
