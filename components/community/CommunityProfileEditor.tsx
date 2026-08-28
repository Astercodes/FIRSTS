"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { loadProfile, saveProfile, type Profile } from "@/lib/profileStore";
import { useMyCommunityProfile } from "@/lib/myCommunityProfile";
import { slugifyName } from "@/lib/communityData";
import { ProfileCard } from "@/components/community/ProfileCard";

const VISIBILITY_OPTIONS: { value: NonNullable<Profile["communityVisibility"]>; label: string; description: string }[] = [
  { value: "school", label: "My school / community only", description: "Visible to people at your institution, or other independent students. Not searchable beyond that." },
  { value: "public", label: "Public", description: "Visible to anyone browsing the FIRSTS community, across every school." },
  { value: "private", label: "Private", description: "Hidden from discovery entirely. You can still use partner matching by direct invite." },
];

export function CommunityProfileEditor() {
  const liveProfile = useMyCommunityProfile();
  const [draft, setDraft] = useState<Partial<Profile>>({});
  const [saveState, setSaveState] = useState<"saving" | "saved">("saved");
  const first = useRef(true);

  useEffect(() => {
    function sync() {
      const saved = loadProfile();
      setDraft({
        communityHandle: saved?.communityHandle ?? slugifyName(liveProfile.name, "me"),
        currentlyWorkingOn: saved?.currentlyWorkingOn ?? "",
        communityVisibility: saved?.communityVisibility ?? "school",
      });
    }
    sync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    saveProfile({ ...loadProfile(), ...draft });
    setSaveState("saving");
    const t = setTimeout(() => setSaveState("saved"), 700);
    return () => clearTimeout(t);
  }, [draft]);

  function update<K extends keyof Profile>(key: K, value: Profile[K]) {
    setDraft((prev) => ({ ...prev, [key]: value }));
  }

  const previewProfile = {
    ...liveProfile,
    currentlyWorkingOn: draft.currentlyWorkingOn?.trim() || liveProfile.currentlyWorkingOn,
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
            Community profile
          </p>
          <h1 className="mt-1 font-display text-2xl font-semibold tracking-tight text-ink">
            Edit your presence
          </h1>
        </div>
        <span className="flex items-center gap-1.5 text-xs font-medium text-ink/40">
          <span
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              saveState === "saving" ? "bg-[var(--tropical-mango)]" : "bg-[var(--citrus-lime)]"
            }`}
          />
          {saveState === "saving" ? "Saving…" : "Saved"}
        </span>
      </div>

      <ProfileCard profile={previewProfile} isOwn />

      <section className="rounded-3xl border border-ink/10 bg-white p-6 sm:p-8">
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Currently working on
        </p>
        <p className="mb-3 text-sm text-ink/50">
          A one-line status like a LinkedIn headline, tied to what you&apos;re actually doing.
          Left blank, it defaults to whatever FIRST you&apos;re currently in progress on.
        </p>
        <input
          value={draft.currentlyWorkingOn ?? ""}
          onChange={(e) => update("currentlyWorkingOn", e.target.value)}
          placeholder="e.g. Working on: Salary Benchmarking"
          className="w-full rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25"
        />
      </section>

      <section className="rounded-3xl border border-ink/10 bg-white p-6 sm:p-8">
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Your handle
        </p>
        <p className="mb-3 text-sm text-ink/50">
          Your profile link: /dashboard/community/u/{draft.communityHandle || "your-handle"}
        </p>
        <input
          value={draft.communityHandle ?? ""}
          onChange={(e) => update("communityHandle", e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-"))}
          className="w-full rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25"
        />
      </section>

      <section className="rounded-3xl border border-ink/10 bg-white p-6 sm:p-8">
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Who can see this
        </p>
        <p className="mb-4 text-sm text-ink/50">
          Career-related visibility is sensitive, an employer or professor stumbling onto
          &quot;looking for an accountability partner&quot; isn&apos;t something everyone wants. Defaults
          to your school or community, not public.
        </p>
        <div className="space-y-2">
          {VISIBILITY_OPTIONS.map((opt) => {
            const active = (draft.communityVisibility ?? "school") === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => update("communityVisibility", opt.value)}
                className={`block w-full rounded-2xl border p-4 text-left transition-colors ${
                  active ? "border-[var(--neon-pink)] bg-[color-mix(in_oklab,var(--neon-pink)_8%,white)]" : "border-ink/10 hover:border-ink/20"
                }`}
              >
                <p className="text-sm font-semibold text-ink/80">{opt.label}</p>
                <p className="mt-0.5 text-xs text-ink/50">{opt.description}</p>
              </button>
            );
          })}
        </div>
      </section>

      <p className="text-center text-xs text-ink/40">
        <Link href="/dashboard/community" className="font-semibold underline decoration-ink/20 underline-offset-4 hover:text-ink">
          Back to community
        </Link>
      </p>
    </div>
  );
}
