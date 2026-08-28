"use client";

import Link from "next/link";
import { findPeerByHandle } from "@/lib/communityData";
import { useMyCommunityProfile } from "@/lib/myCommunityProfile";
import { ProfileCard } from "@/components/community/ProfileCard";

export function PeerProfileGate({ handle }: { handle: string }) {
  const myProfile = useMyCommunityProfile();
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

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <Link href="/dashboard/community" className="text-sm font-medium text-ink/45 hover:text-ink">
        ← Community
      </Link>
      <ProfileCard profile={peer} isOwn={isOwn} editHref={isOwn ? "/dashboard/community/profile" : undefined} />
    </div>
  );
}
