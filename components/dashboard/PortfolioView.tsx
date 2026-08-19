"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useFirstsWithProgress } from "@/lib/progressStore";
import { CATEGORY_META, MOCK_USER, completionStats } from "@/lib/dashboardData";
import { PORTFOLIO_PIECES, effectiveAnswers } from "@/lib/portfolioContent";
import { loadProfile, saveProfile, processPhoto, type Profile } from "@/lib/profileStore";

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
  status: "",
  bio: "",
  email: "",
  phone: "",
  location: "",
  linkedin: "",
  photo: null,
};

const VALUE_CHIP_COLORS = [
  "var(--neon-pink)",
  "var(--sunshine-orange)",
  "var(--citrus-lime)",
  "var(--fuchsia-blast)",
  "var(--tropical-mango)",
];

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
  const resolvedPieces: ResolvedPiece[] =
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
  const getPiece = (moduleId: number) => resolvedPieces.find((p) => p.moduleId === moduleId)!;

  const summary = getPiece(4);
  const pitch = getPiece(20);
  const values = getPiece(1);
  const vision = getPiece(2);
  const purpose = getPiece(3);
  const strengths = getPiece(12);
  const brandStatement = getPiece(21);
  const online = getPiece(31);
  const highlight = getPiece(53);
  const valueList = values.text.split(".")[0]?.split(",").map((v) => v.trim()).filter(Boolean) ?? [];

  return (
    <div className="mx-auto max-w-4xl">
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
      <div className="portfolio-page relative overflow-hidden rounded-3xl border border-ink/8 bg-white shadow-sm print:rounded-none print:border-0 print:shadow-none">
        <div
          className="h-2.5 w-full print:h-2"
          style={{
            background:
              "linear-gradient(90deg, var(--neon-pink), var(--sunshine-orange) 35%, var(--lime-zest) 70%, var(--fuchsia-blast))",
          }}
        />

        <div className="p-6 sm:p-10 print:p-8">
          <div className="mb-5 flex items-center justify-end gap-1.5 print:mb-4">
            <FirstsMark className="h-4 w-4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/35">
              FIRSTS Career Portfolio
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-[220px_1fr] print:grid-cols-[200px_1fr] print:gap-6">
            {/* Sidebar */}
            <aside
              className="rounded-2xl p-5 print:rounded-none print:border-0 print:bg-transparent print:p-0"
              style={{
                background:
                  "linear-gradient(165deg, color-mix(in oklab, var(--neon-pink) 7%, white), color-mix(in oklab, var(--tropical-mango) 10%, white))",
              }}
            >
              <div className="group relative">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full ring-4 ring-white transition-opacity print:pointer-events-none print:ring-2 print:ring-ink/10"
                  aria-label="Upload profile photo"
                >
                  {profile.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={profile.photo} alt={displayName} className="h-full w-full object-cover" />
                  ) : (
                    <FictionalPersonIcon className="h-full w-full" />
                  )}
                  <span className="absolute inset-0 hidden items-center justify-center bg-ink/50 text-[11px] font-semibold text-paper opacity-0 transition-opacity group-hover:opacity-100 sm:flex print:hidden">
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

              {editingProfile ? (
                <div className="mt-4 space-y-2 print:hidden">
                  <input
                    value={profile.name}
                    onChange={(e) => updateProfile("name", e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-ink/10 bg-white px-3 py-2 font-display text-sm font-semibold text-ink outline-none focus:border-ink/25"
                  />
                  <input
                    value={profile.headline}
                    onChange={(e) => updateProfile("headline", e.target.value)}
                    placeholder="Headline"
                    className="w-full rounded-xl border border-ink/10 bg-white px-3 py-2 text-xs text-ink outline-none focus:border-ink/25"
                  />
                  <input
                    value={profile.email}
                    onChange={(e) => updateProfile("email", e.target.value)}
                    placeholder="Email"
                    className="w-full rounded-xl border border-ink/10 bg-white px-3 py-2 text-xs text-ink outline-none focus:border-ink/25"
                  />
                  <input
                    value={profile.phone}
                    onChange={(e) => updateProfile("phone", e.target.value)}
                    placeholder="Phone"
                    className="w-full rounded-xl border border-ink/10 bg-white px-3 py-2 text-xs text-ink outline-none focus:border-ink/25"
                  />
                  <input
                    value={profile.location}
                    onChange={(e) => updateProfile("location", e.target.value)}
                    placeholder="Location"
                    className="w-full rounded-xl border border-ink/10 bg-white px-3 py-2 text-xs text-ink outline-none focus:border-ink/25"
                  />
                  <input
                    value={profile.linkedin}
                    onChange={(e) => updateProfile("linkedin", e.target.value)}
                    placeholder="linkedin.com/in/you"
                    className="w-full rounded-xl border border-ink/10 bg-white px-3 py-2 text-xs text-ink outline-none focus:border-ink/25"
                  />
                  <button
                    type="button"
                    onClick={() => setEditingProfile(false)}
                    className="rounded-full bg-ink px-4 py-1.5 text-xs font-semibold text-paper"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <>
                  <h1 className="mt-4 font-display text-xl font-semibold leading-tight tracking-tight text-ink">
                    {displayName}
                  </h1>
                  <p className="mt-1 text-[13px] leading-snug text-ink/60">
                    {profile.headline || "Add a headline for what you're focused on."}
                  </p>
                  <div className="mt-3 space-y-1 text-[12px] text-ink/50">
                    {contactItems.length > 0 ? (
                      contactItems.map((c) => <p key={c}>{c}</p>)
                    ) : (
                      <p>Add your contact details.</p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => setEditingProfile(true)}
                    className="mt-3 text-[11px] font-semibold text-ink/40 underline decoration-ink/15 underline-offset-4 transition-colors hover:text-ink/70 print:hidden"
                  >
                    Edit profile
                  </button>
                </>
              )}

              <div className="my-5 h-px bg-ink/10" />

              <SidebarSection icon={<SparkIcon />} label="Core Values" badge={values} moduleId={1} code={values.code}>
                <div className="flex flex-wrap gap-1.5">
                  {(valueList.length > 0 ? valueList : ["Integrity", "Autonomy", "Balance"]).map((v, i) => (
                    <span
                      key={v}
                      className="rounded-full px-2.5 py-1 text-[11px] font-semibold text-white"
                      style={{ background: VALUE_CHIP_COLORS[i % VALUE_CHIP_COLORS.length] }}
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </SidebarSection>

              <div className="my-5 h-px bg-ink/10" />

              <SidebarSection icon={<BoltIcon />} label="Key Strengths" badge={strengths} moduleId={12} code={strengths.code}>
                <p className="text-[13px] leading-relaxed text-ink/70">
                  {strengths.text || "Not answered yet."}
                </p>
              </SidebarSection>

              <div className="my-5 h-px bg-ink/10" />

              <SidebarSection icon={<LinkIcon />} label="Online Presence" badge={online} moduleId={31} code={online.code}>
                <p className="text-[13px] leading-relaxed text-ink/70">
                  {online.text || "Not answered yet."}
                </p>
              </SidebarSection>

              <div className="my-5 h-px bg-ink/10 print:hidden" />

              <div className="flex items-center gap-1.5 print:hidden">
                <FirstsMark className="h-3.5 w-3.5" />
                <span className="text-[10px] font-semibold text-ink/40">Built with FIRSTS</span>
              </div>
            </aside>

            {/* Main column */}
            <div className="space-y-7 print:space-y-5">
              <section className="print:break-inside-avoid">
                <SectionLabel color={summary.color} piece={summary} moduleId={4}>
                  Professional Summary
                </SectionLabel>
                <div
                  className="mt-2 border-l-4 pl-4"
                  style={{ borderColor: `color-mix(in oklab, ${summary.color} 45%, white)` }}
                >
                  <p className="text-[15px] leading-relaxed text-ink/85">
                    {summary.text || "Not answered yet."}
                  </p>
                </div>
              </section>

              <section
                className="relative rounded-2xl p-5 print:break-inside-avoid print:rounded-none print:border print:border-ink/10 print:p-4"
                style={{ background: `color-mix(in oklab, ${pitch.color} 8%, white)` }}
              >
                <span
                  className="pointer-events-none absolute -top-3 left-3 font-display text-6xl leading-none opacity-25 print:opacity-15"
                  style={{ color: pitch.color }}
                  aria-hidden
                >
                  &ldquo;
                </span>
                <SectionLabel color={pitch.color} piece={pitch} moduleId={20}>
                  Elevator Pitch
                </SectionLabel>
                <p className="mt-2 text-[15px] italic leading-relaxed text-ink/85">
                  {pitch.text || "Not answered yet."}
                </p>
              </section>

              <section className="print:break-inside-avoid">
                <div className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white"
                    style={{ background: vision.color }}
                    aria-hidden
                  >
                    <FlagIcon className="h-3.5 w-3.5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <SectionLabel color={vision.color} piece={vision} moduleId={2}>
                      Career Vision
                    </SectionLabel>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-ink/85">
                      {vision.text || "Not answered yet."}
                    </p>
                  </div>
                </div>
              </section>

              <section className="border-t border-b border-ink/10 py-5 text-center print:break-inside-avoid">
                <SectionLabel color={purpose.color} piece={purpose} moduleId={3} center>
                  Purpose
                </SectionLabel>
                <p className="mx-auto mt-2 max-w-md font-display text-lg leading-snug text-ink">
                  {purpose.text || "Not answered yet."}
                </p>
              </section>

              <section
                className="rounded-2xl border-2 p-5 print:break-inside-avoid print:rounded-none print:p-4"
                style={{ borderColor: `color-mix(in oklab, ${brandStatement.color} 35%, white)` }}
              >
                <SectionLabel color={brandStatement.color} piece={brandStatement} moduleId={21}>
                  Personal Brand Statement
                </SectionLabel>
                <p className="mt-2 text-[15px] font-medium leading-relaxed text-ink/85">
                  {brandStatement.text || "Not answered yet."}
                </p>
              </section>

              <section className="flex items-start gap-3 print:break-inside-avoid">
                <span
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white"
                  style={{ background: highlight.color }}
                  aria-hidden
                >
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <div className="min-w-0 flex-1">
                  <SectionLabel color={highlight.color} piece={highlight} moduleId={53}>
                    Resume Highlight
                  </SectionLabel>
                  <p className="mt-1.5 text-[15px] font-semibold leading-relaxed text-ink">
                    {highlight.text || "Not answered yet."}
                  </p>
                </div>
              </section>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-1.5 border-t border-ink/10 pt-5 print:mt-6 print:pt-4">
            <FirstsMark className="h-3.5 w-3.5" />
            <p className="text-[11px] text-ink/35">
              Compiled with FIRSTS, from {displayName}&apos;s own answers.
            </p>
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-xs text-ink/40 print:hidden">
        Everything here is stored on this device only. Nothing is shared until you copy, print,
        or save it yourself.
      </p>
    </div>
  );
}

function SectionLabel({
  color,
  piece,
  moduleId,
  center,
  children,
}: {
  color: string;
  piece: ResolvedPiece;
  moduleId: number;
  center?: boolean;
  children: string;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color }}>
        {children}
        <span
          className="ml-2 text-[10px] font-semibold normal-case tracking-normal"
          style={{ color: piece.isPersonalized ? color : "rgba(11,4,16,0.35)" }}
        >
          {piece.isPersonalized ? "· your answer" : "· example"}
        </span>
      </p>
      {piece.code && (
        <Link
          href={`/dashboard/stage/${moduleId}`}
          className="text-[11px] font-medium text-ink/35 underline decoration-ink/15 underline-offset-4 transition-colors hover:text-ink/65 print:hidden"
        >
          From First {piece.code}: {piece.title} →
        </Link>
      )}
    </div>
  );
}

function SidebarSection({
  icon,
  label,
  badge,
  code,
  moduleId,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  badge: ResolvedPiece;
  code: string;
  moduleId: number;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center gap-1.5 text-ink/50">
        {icon}
        <p className="text-[11px] font-bold uppercase tracking-[0.15em]">{label}</p>
      </div>
      {children}
      {code && (
        <Link
          href={`/dashboard/stage/${moduleId}`}
          className="mt-1.5 inline-block text-[10px] font-medium text-ink/30 underline decoration-ink/15 underline-offset-4 hover:text-ink/60 print:hidden"
        >
          {badge.isPersonalized ? "Your answer" : "Example"} · First {code} →
        </Link>
      )}
    </div>
  );
}

function FirstsMark({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full ${className ?? "h-4 w-4"}`}
      style={{
        background:
          "linear-gradient(135deg, var(--neon-pink), var(--sunshine-orange), var(--lime-zest))",
      }}
      aria-hidden
    >
      <span className="font-display text-[8px] font-bold text-ink">F</span>
    </span>
  );
}

function FictionalPersonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <defs>
        <linearGradient id="portfolio-avatar-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--neon-pink)" />
          <stop offset="100%" stopColor="var(--tropical-mango)" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="url(#portfolio-avatar-bg)" />
      <circle cx="50" cy="38" r="17" fill="white" fillOpacity="0.92" />
      <path d="M12 98c3-25 22-36 38-36s35 11 38 36" fill="white" fillOpacity="0.92" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M12 3.5 13.6 9l5.4 1.6-5.4 1.6L12 17.7l-1.6-5.5L5 10.6 10.4 9 12 3.5Z" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5">
      <path d="M9 17H7a5 5 0 0 1 0-10h2M15 7h2a5 5 0 0 1 0 10h-2M8 12h8" strokeLinecap="round" />
    </svg>
  );
}

function FlagIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
      <path d="M5 21V4M5 4h13l-3 4.5L18 13H5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className={className}>
      <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
