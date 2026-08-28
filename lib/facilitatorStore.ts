"use client";

import { useEffect, useState } from "react";
import { myApplication, useFacilitatorApplications, type FacilitatorApplication } from "@/lib/facilitatorApplicationStore";

export type FacilitatorTier = 0 | 1 | 2 | 3;

export const TIER_META: Record<FacilitatorTier, { label: string; blurb: string }> = {
  0: {
    label: "In training",
    blurb: "Complete stage-specific training to earn your first certification.",
  },
  1: {
    label: "Tier 1 · Co-facilitator",
    blurb: "Certified to co-lead sessions alongside an experienced facilitator.",
  },
  2: {
    label: "Tier 2 · Solo facilitator",
    blurb: "Certified to run sessions independently.",
  },
  3: {
    label: "Tier 3 · Facilitator trainer",
    blurb: "Certified to train and mentor new facilitators.",
  },
};

export type FacilitatorProfile = {
  bio: string;
  tier: FacilitatorTier;
  sessionsDelivered: number;
  studentsReached: number;
  avgRating: number | null;
  joinedAt: string;
};

const KEY = "firsts:facilitator-profile";
const EVENT_NAME = "firsts:facilitator-profile-change";

function defaultProfile(joinedAt: string): FacilitatorProfile {
  return {
    bio: "",
    tier: 0,
    sessionsDelivered: 0,
    studentsReached: 0,
    avgRating: null,
    joinedAt,
  };
}

function readProfile(): FacilitatorProfile | null {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as FacilitatorProfile) : null;
  } catch {
    return null;
  }
}

function writeProfile(profile: FacilitatorProfile) {
  window.localStorage.setItem(KEY, JSON.stringify(profile));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function saveFacilitatorBio(bio: string) {
  const existing = readProfile();
  if (!existing) return;
  writeProfile({ ...existing, bio });
}

/**
 * The facilitator portal is gated behind an accepted application (from
 * lib/facilitatorApplicationStore). The first time an accepted applicant's
 * profile is read, a fresh in-training record is created for them, seeded
 * from nothing since they're a genuinely new volunteer, not a synthetic
 * peer standing in for someone else.
 */
export function useFacilitatorPortal(): {
  application: FacilitatorApplication | undefined;
  profile: FacilitatorProfile | null;
  /** True once applications and profile have both been read from localStorage at least once. */
  loaded: boolean;
} {
  const applications = useFacilitatorApplications();
  const application = myApplication(applications);
  const [profile, setProfile] = useState<FacilitatorProfile | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    function sync() {
      setProfile(readProfile());
    }
    sync();
    window.addEventListener(EVENT_NAME, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT_NAME, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  useEffect(() => {
    function bootstrap() {
      if (application?.status !== "accepted") return;
      if (readProfile()) return;
      writeProfile(defaultProfile(application.createdAt));
    }
    bootstrap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [application?.id, application?.status]);

  useEffect(() => {
    function markLoaded() {
      setLoaded(true);
    }
    markLoaded();
  }, []);

  return { application, profile, loaded };
}

export { EVENT_NAME as FACILITATOR_PROFILE_CHANGE_EVENT };
