"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { loadAdvisor, saveAdvisor, MOCK_ADVISOR, type AdvisorProfile, type AdvisorRole } from "@/lib/advisorStore";
import { processPhoto } from "@/lib/profileStore";
import { COHORTS, cohortsForInstitution, stalledStudents } from "@/lib/cohortData";
import { myCaseload } from "@/lib/caseload";

const ROLES: AdvisorRole[] = ["Advisor / Mentor", "Institution Admin"];
const INSTITUTIONS = Array.from(new Set(COHORTS.map((c) => c.institution))).sort();

export function AdvisorProfileView() {
  const router = useRouter();
  const [profile, setProfile] = useState<AdvisorProfile>(MOCK_ADVISOR);
  const [saveState, setSaveState] = useState<"saving" | "saved">("saved");
  const first = useRef(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function sync() {
      const saved = loadAdvisor();
      if (saved) setProfile(saved);
    }
    sync();
  }, []);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    saveAdvisor(profile);
    setSaveState("saving");
    const t = setTimeout(() => setSaveState("saved"), 700);
    return () => clearTimeout(t);
  }, [profile]);

  function update<K extends keyof AdvisorProfile>(key: K, value: AdvisorProfile[K]) {
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

  const displayName = profile.name || MOCK_ADVISOR.name;
  const cohorts = useMemo(() => cohortsForInstitution(profile.institution), [profile.institution]);
  const caseload = useMemo(() => myCaseload(profile.email, cohorts), [profile.email, cohorts]);
  const caseloadKeys = useMemo(() => new Set(caseload.map((s) => `${s.cohortId}-${s.id}`)), [caseload]);
  const stalledInCaseload = useMemo(
    () => stalledStudents(cohorts).filter((s) => caseloadKeys.has(`${s.cohortId}-${s.id}`)),
    [cohorts, caseloadKeys]
  );

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
                  : { background: "linear-gradient(135deg, var(--juicy-plum), var(--berry-burst))" }
              }
              aria-label="Upload profile photo"
            >
              {profile.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={profile.photo} alt={displayName} className="h-full w-full object-cover" />
              ) : (
                <span className="font-display text-2xl font-bold text-paper">
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
              value={profile.title ?? ""}
              onChange={(e) => update("title", e.target.value)}
              placeholder="Title, e.g. Director of Career Services"
              className="w-full rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-center text-sm text-ink outline-none focus:border-ink/25 sm:text-left"
            />
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink/45">
              Institution
            </p>
            <select
              value={profile.institution}
              onChange={(e) => update("institution", e.target.value)}
              className="w-full rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25"
            >
              {!INSTITUTIONS.includes(profile.institution) && (
                <option value={profile.institution}>{profile.institution}</option>
              )}
              {INSTITUTIONS.map((i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink/45">
              Role
            </p>
            <div className="flex flex-wrap gap-2">
              {ROLES.map((opt) => {
                const active = profile.role === opt;
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => update("role", opt)}
                    className="rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all"
                    style={
                      active
                        ? { borderColor: "var(--berry-burst)", color: "var(--berry-burst)", background: "color-mix(in oklab, var(--berry-burst) 14%, white)" }
                        : { borderColor: "rgba(11,4,16,0.1)", color: "rgba(11,4,16,0.55)" }
                    }
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        {profile.role === "Institution Admin" && (
          <p className="mt-3 text-xs text-ink/45">
            Institution Admin gets the campus-wide dashboard in addition to everything here.
          </p>
        )}
      </section>

      <section className="rounded-3xl border border-ink/8 bg-white p-6 sm:p-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          About
        </p>
        <textarea
          value={profile.bio ?? ""}
          onChange={(e) => update("bio", e.target.value)}
          placeholder="A couple of sentences about your role and what you focus on…"
          rows={3}
          className="w-full resize-none rounded-2xl border border-ink/10 bg-paper-dim px-4 py-3 text-sm text-ink outline-none focus:border-ink/25"
        />
      </section>

      <section className="rounded-3xl border border-ink/8 bg-white p-6 sm:p-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Contact
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <LabeledInput label="Email" value={profile.email} onChange={(v) => update("email", v)} placeholder="you@institution.edu" />
          <LabeledInput label="Phone" value={profile.phone ?? ""} onChange={(v) => update("phone", v)} placeholder="+1 (555) 000-0000" />
          <LabeledInput label="Location" value={profile.location ?? ""} onChange={(v) => update("location", v)} placeholder="City, State" />
          <LabeledInput label="LinkedIn" value={profile.linkedin ?? ""} onChange={(v) => update("linkedin", v)} placeholder="linkedin.com/in/you" />
        </div>
      </section>

      <section className="rounded-3xl border border-ink/8 bg-white p-6 sm:p-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Your caseload
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="font-display text-2xl font-bold text-ink">{cohorts.length}</p>
            <p className="mt-0.5 text-xs text-ink/50">Cohorts at {profile.institution || "your institution"}</p>
          </div>
          <div>
            <p className="font-display text-2xl font-bold text-ink">{caseload.length}</p>
            <p className="mt-0.5 text-xs text-ink/50">Students in your caseload</p>
          </div>
          <div>
            <p className="font-display text-2xl font-bold" style={{ color: stalledInCaseload.length > 0 ? "#c92f3f" : "var(--ink)" }}>
              {stalledInCaseload.length}
            </p>
            <p className="mt-0.5 text-xs text-ink/50">Need outreach right now</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => router.push("/advisor/workload")}
          className="mt-5 text-xs font-semibold text-berry-burst hover:underline"
        >
          Go to Workload →
        </button>
      </section>

      <p className="text-center text-xs text-ink/40">
        Stored on this device only. This name, institution, and role drive every advisor page,
        including which cohorts you see and who&apos;s in your caseload.
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
