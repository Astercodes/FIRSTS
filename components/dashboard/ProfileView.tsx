"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useFirstsWithProgress } from "@/lib/progressStore";
import { MOCK_USER, STAGES, completionStats } from "@/lib/dashboardData";
import { loadProfile, saveProfile, processPhoto, type Profile } from "@/lib/profileStore";

const STATUS_OPTIONS = ["Student", "Recent grad", "Early professional", "Career-changer"];

const EMPTY_PROFILE: Profile = {
  name: MOCK_USER.firstName,
  headline: "",
  status: "",
  bio: "",
  email: "",
  phone: "",
  location: "",
  linkedin: "",
  photo: null,
};

export function ProfileView() {
  const modules = useFirstsWithProgress();
  const [profile, setProfile] = useState<Profile>(EMPTY_PROFILE);
  const [saveState, setSaveState] = useState<"saving" | "saved">("saved");
  const first = useRef(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function sync() {
      const saved = loadProfile();
      if (saved) setProfile((prev) => ({ ...prev, ...saved }));
    }
    sync();
  }, []);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    saveProfile(profile);
    setSaveState("saving");
    const t = setTimeout(() => setSaveState("saved"), 700);
    return () => clearTimeout(t);
  }, [profile]);

  function update<K extends keyof Profile>(key: K, value: Profile[K]) {
    setProfile((prev) => ({ ...prev, [key]: value }));
  }

  async function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    if (file.size > 8 * 1024 * 1024) {
      alert("That image is a bit large. Please choose one under 8 MB.");
      return;
    }
    const dataUrl = await processPhoto(file);
    update("photo", dataUrl);
  }

  const displayName = profile.name || MOCK_USER.firstName;
  const overall = completionStats(modules);

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
            Your Profile
          </p>
          <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight text-ink">
            {displayName}
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

      <section className="rounded-3xl border border-ink/8 bg-white p-6 sm:p-8">
        <div className="flex flex-col items-center gap-5 sm:flex-row">
          <div className="group relative shrink-0">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full ring-4 ring-paper-dim"
              style={
                profile.photo
                  ? undefined
                  : { background: "linear-gradient(135deg, var(--neon-pink), var(--tropical-mango))" }
              }
              aria-label="Upload profile photo"
            >
              {profile.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={profile.photo} alt={displayName} className="h-full w-full object-cover" />
              ) : (
                <span className="font-display text-2xl font-bold text-ink">
                  {displayName.charAt(0).toUpperCase()}
                </span>
              )}
              <span className="absolute inset-0 hidden items-center justify-center bg-ink/50 text-xs font-semibold text-paper opacity-0 transition-opacity group-hover:opacity-100 sm:flex">
                {profile.photo ? "Change" : "Add photo"}
              </span>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="hidden"
            />
          </div>

          <div className="w-full min-w-0 flex-1 space-y-3 text-center sm:text-left">
            <input
              value={profile.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Your name"
              className="w-full rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-center font-display text-lg font-semibold text-ink outline-none focus:border-ink/25 sm:text-left"
            />
            <input
              value={profile.headline}
              onChange={(e) => update("headline", e.target.value)}
              placeholder="Headline, e.g. Backend-focused CS Student"
              className="w-full rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-center text-sm text-ink outline-none focus:border-ink/25 sm:text-left"
            />
          </div>
        </div>

        <div className="mt-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink/45">
            Which describes you best?
          </p>
          <div className="flex flex-wrap gap-2">
            {STATUS_OPTIONS.map((opt) => {
              const active = profile.status === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => update("status", active ? "" : opt)}
                  className="rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all"
                  style={
                    active
                      ? { borderColor: "var(--neon-pink)", color: "var(--neon-pink)", background: "color-mix(in oklab, var(--neon-pink) 14%, white)" }
                      : { borderColor: "rgba(11,4,16,0.1)", color: "rgba(11,4,16,0.55)" }
                  }
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-ink/8 bg-white p-6 sm:p-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          About
        </p>
        <textarea
          value={profile.bio}
          onChange={(e) => update("bio", e.target.value)}
          placeholder="A couple of sentences about what you're working toward…"
          rows={3}
          className="w-full resize-none rounded-2xl border border-ink/10 bg-paper-dim px-4 py-3 text-sm text-ink outline-none focus:border-ink/25"
        />
      </section>

      <section className="rounded-3xl border border-ink/8 bg-white p-6 sm:p-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Contact
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <LabeledInput label="Email" value={profile.email} onChange={(v) => update("email", v)} placeholder="you@example.com" />
          <LabeledInput label="Phone" value={profile.phone} onChange={(v) => update("phone", v)} placeholder="+1 (555) 000-0000" />
          <LabeledInput label="Location" value={profile.location} onChange={(v) => update("location", v)} placeholder="City, State" />
          <LabeledInput label="LinkedIn" value={profile.linkedin} onChange={(v) => update("linkedin", v)} placeholder="linkedin.com/in/you" />
        </div>
      </section>

      <section className="rounded-3xl border border-ink/8 bg-white p-6 sm:p-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Your progress
        </p>
        <div className="mb-5 flex items-baseline gap-2">
          <span className="font-display text-2xl font-bold text-ink">{overall.complete}</span>
          <span className="text-sm text-ink/50">of {overall.total} FIRSTS complete across {STAGES.length} stages</span>
        </div>
        <div className="space-y-3">
          {STAGES.map((stage) => {
            const stageModules = modules.filter((m) => m.stage === stage.id);
            const stats = completionStats(stageModules);
            return (
              <div key={stage.id}>
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="font-semibold text-ink/70">{stage.shortLabel}</span>
                  <span className="text-ink/40">{stats.complete}/{stats.total}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-paper-dim">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${stats.pct}%`,
                      background: "linear-gradient(90deg, var(--neon-pink), var(--tropical-mango))",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <p className="text-center text-xs text-ink/40">
        Stored on this device only. This same profile powers your{" "}
        <Link href="/dashboard/portfolio" className="font-semibold text-ink/60 underline decoration-ink/20 underline-offset-4 hover:text-ink">
          Career Portfolio
        </Link>{" "}
        export.
      </p>
    </div>
  );
}

function LabeledInput({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-ink/50">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25"
      />
    </label>
  );
}
