import Link from "next/link";
import { STAGES } from "@/lib/dashboardData";
import type { PeerCommunityProfile } from "@/lib/communityData";

const ACCENT = "var(--neon-pink)";

export function ProfileCard({
  profile,
  isOwn,
  editHref,
}: {
  profile: PeerCommunityProfile;
  isOwn?: boolean;
  editHref?: string;
}) {
  const stageLabel = STAGES.find((s) => s.id === profile.currentStage)?.shortLabel ?? profile.currentStage;

  return (
    <div className="rounded-3xl border border-ink/8 bg-white p-7">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <span
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full font-display text-2xl font-bold text-white"
            style={{ background: "linear-gradient(135deg, var(--neon-pink), var(--tropical-mango))" }}
          >
            {profile.name.charAt(0)}
          </span>
          <div>
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
            className="shrink-0 rounded-full border border-ink/10 px-4 py-2 text-sm font-semibold text-ink/70 transition-colors hover:border-ink/25"
          >
            Edit profile
          </Link>
        )}
      </div>

      {profile.bio && <p className="mt-4 text-sm leading-relaxed text-ink/65">{profile.bio}</p>}

      <div className="mt-5 rounded-2xl bg-paper-dim px-4 py-3">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-ink/40">Currently</p>
        <p className="mt-0.5 text-sm font-semibold text-ink/80">{profile.currentlyWorkingOn}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <StatPill label={stageLabel} sublabel="current stage" />
        <StatPill label={`${profile.streak} day${profile.streak === 1 ? "" : "s"}`} sublabel="streak" />
      </div>

      {profile.badges.length > 0 && (
        <div className="mt-5 border-t border-ink/8 pt-4">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-ink/40">Badges</p>
          <div className="flex flex-wrap gap-2">
            {profile.badges.map((b) => (
              <span
                key={b}
                className="rounded-full px-3 py-1.5 text-xs font-semibold text-white"
                style={{ background: ACCENT }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function StatPill({ label, sublabel }: { label: string; sublabel: string }) {
  return (
    <div className="rounded-2xl border border-ink/8 px-4 py-2.5">
      <p className="font-display text-base font-bold text-ink">{label}</p>
      <p className="text-[11px] text-ink/45">{sublabel}</p>
    </div>
  );
}
