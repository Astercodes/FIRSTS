"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useFirstsWithProgress } from "@/lib/progressStore";
import { CATEGORY_META, MOCK_USER, completionStats } from "@/lib/dashboardData";
import { PORTFOLIO_PIECES, effectiveAnswers } from "@/lib/portfolioContent";
import { loadProfile, saveProfile, type Profile } from "@/lib/profileStore";

type ResolvedPiece = {
  moduleId: number;
  label: string;
  title: string;
  code: string;
  color: string;
  text: string;
  isPersonalized: boolean;
};

const EMPTY_PROFILE: Profile = {
  name: MOCK_USER.firstName,
  headline: "",
  email: "",
  phone: "",
  location: "",
  linkedin: "",
  photo: null,
};

/** Downscale + square-crop an uploaded image so it stores compactly and fills the avatar circle. */
function processPhoto(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error);
    reader.onload = () => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        const size = 480;
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");
        if (!ctx) return reject(new Error("no canvas context"));
        const side = Math.min(img.width, img.height);
        const sx = (img.width - side) / 2;
        const sy = (img.height - side) / 2;
        ctx.drawImage(img, sx, sy, side, side, 0, 0, size, size);
        resolve(canvas.toDataURL("image/jpeg", 0.88));
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  });
}

export function PortfolioView() {
  const modules = useFirstsWithProgress();
  const stats = completionStats(modules);
  const [pieces, setPieces] = useState<ResolvedPiece[] | null>(null);
  const [copyState, setCopyState] = useState<"idle" | "copied">("idle");
  const [profile, setProfile] = useState<Profile>(EMPTY_PROFILE);
  const [editingProfile, setEditingProfile] = useState(false);
  const first = useRef(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function sync() {
      const resolved = PORTFOLIO_PIECES.map((piece) => {
        const m = modules.find((mod) => mod.id === piece.moduleId);
        const { answers, isPersonalized } = effectiveAnswers(piece.moduleId);
        return {
          moduleId: piece.moduleId,
          label: piece.label,
          title: m?.title ?? piece.label,
          code: m?.code ?? "",
          color: m ? CATEGORY_META[m.category].color : "var(--ink)",
          text: piece.render(answers).trim(),
          isPersonalized,
        };
      });
      setPieces(resolved);

      const saved = loadProfile();
      if (saved) setProfile((prev) => ({ ...prev, ...saved }));
    }
    sync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    saveProfile(profile);
  }, [profile]);

  function updateProfile<K extends keyof Profile>(key: K, value: Profile[K]) {
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
    updateProfile("photo", dataUrl);
  }

  function handleCopy() {
    if (!pieces) return;
    const contactLine = [profile.email, profile.phone, profile.location, profile.linkedin]
      .filter(Boolean)
      .join(" · ");
    const text = [
      profile.name || MOCK_USER.firstName,
      [profile.headline, contactLine].filter(Boolean).join("\n"),
      "",
      ...pieces.map((p) => `${p.label.toUpperCase()}\n${p.text || "Not answered yet."}`),
    ].join("\n\n");
    navigator.clipboard.writeText(text).then(() => {
      setCopyState("copied");
      setTimeout(() => setCopyState("idle"), 1800);
    });
  }

  const contactItems = [profile.email, profile.phone, profile.location, profile.linkedin].filter(Boolean);
  const displayName = profile.name || MOCK_USER.firstName;
  const resolvedPieces =
    pieces ??
    PORTFOLIO_PIECES.map((p) => ({
      moduleId: p.moduleId,
      label: p.label,
      title: p.label,
      code: "",
      color: "var(--ink)",
      text: "",
      isPersonalized: false,
    }));

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center print:hidden">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
            Career Portfolio
          </p>
          <p className="mt-1 text-sm text-ink/55">
            {stats.complete} of {stats.total} FIRSTS complete. This is exactly what prints, so
            fill in your profile and personalize each section before you send it anywhere.
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold text-ink/75 transition-colors hover:border-ink/30"
          >
            {copyState === "copied" ? "Copied" : "Copy as text"}
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-ink/85"
          >
            Print / Save as PDF
          </button>
        </div>
      </div>

      {/* The printable page. Everything inside this panel is exactly what gets exported. */}
      <div className="portfolio-page rounded-3xl border border-ink/8 bg-white p-8 shadow-sm sm:p-12 print:rounded-none print:border-0 print:p-0 print:shadow-none">
        <header className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:text-left print:flex-row print:text-left">
          <div className="group relative shrink-0">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full ring-4 ring-paper-dim transition-opacity print:pointer-events-none sm:h-28 sm:w-28"
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
                <span className="font-display text-3xl font-bold text-ink">
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

          <div className="min-w-0 flex-1">
            {editingProfile ? (
              <div className="space-y-2.5 text-left print:hidden">
                <input
                  value={profile.name}
                  onChange={(e) => updateProfile("name", e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-ink/10 bg-paper-dim px-3.5 py-2 font-display text-lg font-semibold text-ink outline-none focus:border-ink/25"
                />
                <input
                  value={profile.headline}
                  onChange={(e) => updateProfile("headline", e.target.value)}
                  placeholder="Headline, e.g. Backend-focused CS Student"
                  className="w-full rounded-xl border border-ink/10 bg-paper-dim px-3.5 py-2 text-sm text-ink outline-none focus:border-ink/25"
                />
                <div className="grid gap-2.5 sm:grid-cols-2">
                  <input
                    value={profile.email}
                    onChange={(e) => updateProfile("email", e.target.value)}
                    placeholder="Email"
                    className="w-full rounded-xl border border-ink/10 bg-paper-dim px-3.5 py-2 text-sm text-ink outline-none focus:border-ink/25"
                  />
                  <input
                    value={profile.phone}
                    onChange={(e) => updateProfile("phone", e.target.value)}
                    placeholder="Phone"
                    className="w-full rounded-xl border border-ink/10 bg-paper-dim px-3.5 py-2 text-sm text-ink outline-none focus:border-ink/25"
                  />
                  <input
                    value={profile.location}
                    onChange={(e) => updateProfile("location", e.target.value)}
                    placeholder="Location"
                    className="w-full rounded-xl border border-ink/10 bg-paper-dim px-3.5 py-2 text-sm text-ink outline-none focus:border-ink/25"
                  />
                  <input
                    value={profile.linkedin}
                    onChange={(e) => updateProfile("linkedin", e.target.value)}
                    placeholder="linkedin.com/in/you"
                    className="w-full rounded-xl border border-ink/10 bg-paper-dim px-3.5 py-2 text-sm text-ink outline-none focus:border-ink/25"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setEditingProfile(false)}
                  className="mt-1 rounded-full bg-ink px-4 py-1.5 text-xs font-semibold text-paper"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <h1 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  {displayName}
                </h1>
                <p className="mt-1 text-[15px] text-ink/60">
                  {profile.headline || "Add a headline for what you're focused on."}
                </p>
                <p className="mt-2 text-sm text-ink/45">
                  {contactItems.length > 0 ? contactItems.join(" · ") : "Add your contact details."}
                </p>
                <button
                  type="button"
                  onClick={() => setEditingProfile(true)}
                  className="mt-3 text-xs font-semibold text-ink/45 underline decoration-ink/15 underline-offset-4 transition-colors hover:text-ink/70 print:hidden"
                >
                  Edit profile
                </button>
              </>
            )}
          </div>
        </header>

        <div className="my-8 h-px bg-ink/10 print:my-6" />

        <div className="space-y-7 print:space-y-5">
          {resolvedPieces.map((p) => (
            <section key={p.moduleId} className="print:break-inside-avoid">
              <div className="mb-2 flex items-baseline justify-between gap-3">
                <p
                  className="text-xs font-bold uppercase tracking-[0.2em] print:!text-ink/70"
                  style={{ color: p.color }}
                >
                  {p.label}
                </p>
                <span
                  className="shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide print:!bg-transparent print:!px-0 print:!font-normal print:normal-case print:tracking-normal print:!text-ink/35"
                  style={
                    p.isPersonalized
                      ? { color: p.color, background: `color-mix(in oklab, ${p.color} 14%, white)` }
                      : { color: "rgba(11,4,16,0.4)", background: "var(--paper-dim)" }
                  }
                >
                  {p.isPersonalized ? "Your answer" : "Example, not yet personalized"}
                </span>
              </div>
              <p className="text-[15px] leading-relaxed text-ink/80">
                {p.text || "Not answered yet."}
              </p>
              {p.code && (
                <Link
                  href={`/dashboard/stage/${p.moduleId}`}
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-ink/40 underline decoration-ink/15 underline-offset-4 transition-colors hover:text-ink/70 print:hidden"
                >
                  From First {p.code}: {p.title} →
                </Link>
              )}
            </section>
          ))}
        </div>

        <p className="mt-10 text-center text-[11px] text-ink/35 print:mt-8">
          Compiled with FIRSTS, from {displayName}&apos;s own answers.
        </p>
      </div>

      <p className="mt-4 text-center text-xs text-ink/40 print:hidden">
        Everything here is stored on this device only. Nothing is shared until you copy, print,
        or save it yourself.
      </p>
    </div>
  );
}
