import { STAGES } from "@/lib/dashboardData";
import type { PeerCommunityProfile } from "@/lib/communityData";

function stageIndex(stage: PeerCommunityProfile["currentStage"]): number {
  return STAGES.findIndex((s) => s.id === stage);
}

/**
 * Weighted toward stage alignment and comparable activity level, penalizing a
 * big streak gap so a highly active student doesn't get matched with someone
 * who's been quiet for weeks, a setup for one-sided frustration either way.
 */
export function matchScore(me: PeerCommunityProfile, peer: PeerCommunityProfile): number {
  let score = 0;

  const distance = Math.abs(stageIndex(peer.currentStage) - stageIndex(me.currentStage));
  score += Math.max(0, 4 - distance * 1.5);

  const streakDiff = Math.abs(peer.streak - me.streak);
  if (streakDiff <= 5) score += 3;
  else if (streakDiff <= 14) score += 1;
  else score -= 2;

  if (peer.school === me.school) score += 1;

  return score;
}

/** 3 to 5 suggested partners, ranked by match score, excluding anyone already tied to a pending request or current partner. */
export function suggestedPartners(
  me: PeerCommunityProfile,
  peers: PeerCommunityProfile[],
  exclude: Set<string>,
  count = 5
): PeerCommunityProfile[] {
  return peers
    .filter((p) => !exclude.has(p.handle) && p.handle !== me.handle)
    .map((p) => ({ peer: p, score: matchScore(me, p) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map((x) => x.peer);
}
