"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CATEGORY_META, STAGES, stageForCategory } from "@/lib/dashboardData";
import { loadEmployer, saveEmployer, employerSlug, MOCK_EMPLOYER, type EmployerProfile } from "@/lib/employerStore";
import { Switch } from "@/components/ui/Switch";

const ACCENT = "var(--pink-grapefruit)";

export function CompanyProfileView() {
  const [profile, setProfile] = useState<EmployerProfile>(MOCK_EMPLOYER);
  const [roleDraft, setRoleDraft] = useState("");
  const [saveState, setSaveState] = useState<"saving" | "saved">("saved");
  const first = useRef(true);

  useEffect(() => {
    function sync() {
      const saved = loadEmployer();
      if (saved) setProfile((prev) => ({ ...prev, ...saved }));
    }
    sync();
  }, []);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    saveEmployer(profile);
    setSaveState("saving");
    const t = setTimeout(() => setSaveState("saved"), 700);
    return () => clearTimeout(t);
  }, [profile]);

  function update<K extends keyof EmployerProfile>(key: K, value: EmployerProfile[K]) {
    setProfile((prev) => ({ ...prev, [key]: value }));
  }

  function addRole() {
    const role = roleDraft.trim();
    if (!role) return;
    update("rolesHiredFor", [...(profile.rolesHiredFor ?? []), role]);
    setRoleDraft("");
  }

  function removeRole(role: string) {
    update("rolesHiredFor", (profile.rolesHiredFor ?? []).filter((r) => r !== role));
  }

  function toggleCategory(category: string) {
    const current = profile.valuedCategories ?? [];
    update(
      "valuedCategories",
      current.includes(category) ? current.filter((c) => c !== category) : [...current, category]
    );
  }

  const slug = employerSlug(profile.company);

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
            Company profile
          </p>
          <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight text-ink">
            {profile.company}
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

      <section className="rounded-3xl border border-ink/10 bg-white p-6 sm:p-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Basics
        </p>
        <div className="space-y-3">
          <LabeledInput label="Company name" value={profile.company} onChange={(v) => update("company", v)} placeholder="Acme Corp" />
          <LabeledInput
            label="Tagline"
            value={profile.tagline ?? ""}
            onChange={(v) => update("tagline", v)}
            placeholder="One line describing what you do"
          />
          <div>
            <span className="mb-1.5 block text-xs font-medium text-ink/50">Culture</span>
            <textarea
              value={profile.culture ?? ""}
              onChange={(e) => update("culture", e.target.value)}
              placeholder="What it's actually like to work here…"
              rows={4}
              className="w-full resize-none rounded-2xl border border-ink/10 bg-paper-dim px-4 py-3 text-sm text-ink outline-none focus:border-ink/25"
            />
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-ink/10 bg-white p-6 sm:p-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Roles you typically hire for
        </p>
        <div className="flex flex-wrap gap-2">
          {(profile.rolesHiredFor ?? []).map((role) => (
            <span
              key={role}
              className="flex items-center gap-1.5 rounded-full border border-ink/10 bg-paper-dim px-3.5 py-1.5 text-sm text-ink/70"
            >
              {role}
              <button
                type="button"
                onClick={() => removeRole(role)}
                aria-label={`Remove ${role}`}
                className="text-ink/35 hover:text-ink/70"
              >
                ×
              </button>
            </span>
          ))}
        </div>
        <div className="mt-3 flex gap-2">
          <input
            value={roleDraft}
            onChange={(e) => setRoleDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addRole();
              }
            }}
            placeholder="e.g. Marketing Analyst"
            className="flex-1 rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25"
          />
          <button
            type="button"
            onClick={addRole}
            className="shrink-0 rounded-2xl bg-ink px-4 py-2.5 text-sm font-semibold text-paper transition-opacity hover:opacity-90"
          >
            Add
          </button>
        </div>
      </section>

      <section className="rounded-3xl border border-ink/10 bg-white p-6 sm:p-8">
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          What you look for
        </p>
        <p className="mb-4 text-sm text-ink/50">
          Tag which FIRSTS categories matter most for your roles. Shown on your public profile, and
          used as the default weighting on your Role Fit view.
        </p>
        <div className="space-y-4">
          {STAGES.map((stage) => {
            const categories = (Object.keys(CATEGORY_META) as (keyof typeof CATEGORY_META)[]).filter(
              (cat) => stageForCategory(cat) === stage.id
            );
            if (categories.length === 0) return null;
            return (
              <div key={stage.id}>
                <p className="mb-1.5 text-xs font-semibold text-ink/50">{stage.shortLabel}</p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => {
                    const active = (profile.valuedCategories ?? []).includes(cat);
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => toggleCategory(cat)}
                        className="rounded-full border px-3 py-1.5 text-xs font-medium transition-all"
                        style={
                          active
                            ? { borderColor: ACCENT, color: ACCENT, background: "color-mix(in oklab, var(--pink-grapefruit) 14%, white)" }
                            : { borderColor: "rgba(11,4,16,0.1)", color: "rgba(11,4,16,0.55)" }
                        }
                      >
                        {CATEGORY_META[cat].label}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="rounded-3xl border border-ink/10 bg-white p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
              Public profile
            </p>
            <p className="mt-1 text-sm text-ink/50">
              Visible to students at /employers/{slug} when turned on.
            </p>
          </div>
          <Switch checked={profile.publicProfile ?? false} onChange={(v) => update("publicProfile", v)} label="" />
        </div>
        {profile.publicProfile && (
          <Link
            href={`/employers/${slug}`}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-berry-burst"
          >
            View your public profile →
          </Link>
        )}
      </section>
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
