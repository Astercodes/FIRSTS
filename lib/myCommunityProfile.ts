"use client";

import { useEffect, useState } from "react";
import { loadProfile, PROFILE_CHANGE_EVENT, type Profile } from "@/lib/profileStore";
import { useFirstsWithProgress } from "@/lib/progressStore";
import { MOCK_USER } from "@/lib/dashboardData";
import { allBadges } from "@/lib/badges";
import { habitStreak } from "@/lib/momentum";
import { slugifyName, type PeerCommunityProfile } from "@/lib/communityData";

/** The current browser's own community profile, in the same shape as a peer's, so display components can be shared. */
export function useMyCommunityProfile(): PeerCommunityProfile {
  const modules = useFirstsWithProgress();
  const [profile, setProfile] = useState<Partial<Profile> | null>(null);

  useEffect(() => {
    function sync() {
      setProfile(loadProfile());
    }
    sync();
    window.addEventListener(PROFILE_CHANGE_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(PROFILE_CHANGE_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const name = profile?.name || MOCK_USER.firstName;
  const handle = profile?.communityHandle || slugifyName(name, "me");
  const streak = habitStreak(modules);
  const badges = allBadges(modules);
  const earnedBadges = [
    ...badges.stage.filter((b) => b.earned).map((b) => b.title),
    ...badges.standout.filter((b) => b.earned).map((b) => b.title),
  ];
  const continueModule =
    modules.find((m) => m.status === "in-progress") ?? modules.find((m) => m.status === "available");
  const currentStage = continueModule?.stage ?? "one";
  const isPartner = profile?.accountType === "partner";

  return {
    handle,
    name,
    school: isPartner ? profile?.institution || "Partner school" : "Independent",
    accountType: isPartner ? "partner" : "independent",
    major: profile?.major || "",
    gradYear: profile?.gradYear || "",
    currentStage,
    currentlyWorkingOn:
      profile?.currentlyWorkingOn || (continueModule ? `Working on: ${continueModule.title}` : "Just getting started"),
    streak,
    badges: earnedBadges,
    bio: profile?.bio || "",
  };
}
