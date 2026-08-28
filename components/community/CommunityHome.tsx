"use client";

import { useMyCommunityProfile } from "@/lib/myCommunityProfile";
import { ProfileCard } from "@/components/community/ProfileCard";

export function CommunityHome() {
  const myProfile = useMyCommunityProfile();

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
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
      </div>

      <ProfileCard profile={myProfile} isOwn editHref="/dashboard/community/profile" />
    </div>
  );
}
