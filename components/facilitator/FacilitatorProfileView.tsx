"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useFacilitatorPortal, saveFacilitatorBio } from "@/lib/facilitatorStore";

const ACCENT = "var(--fuchsia-blast)";

export function FacilitatorProfileView() {
  const { application, profile } = useFacilitatorPortal();
  const [bio, setBio] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    function sync() {
      setBio(profile?.bio ?? "");
    }
    sync();
  }, [profile?.bio]);

  if (!application || !profile) return null;

  function handleSave() {
    saveFacilitatorBio(bio.trim());
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-3xl border border-ink/8 bg-white p-7"
      >
        <p className="mb-4 font-display text-base font-semibold text-ink">Your bio</p>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="A line or two about you, students see this before a session."
          rows={4}
          className="w-full resize-none rounded-2xl border border-ink/10 bg-paper-dim px-4 py-3 text-sm text-ink outline-none focus:border-ink/25"
        />
        <div className="mt-3 flex items-center gap-3">
          <button
            type="button"
            onClick={handleSave}
            className="rounded-full px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: ACCENT }}
          >
            Save
          </button>
          {saved && <span className="text-xs font-medium text-ink/45">Saved.</span>}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-3xl border border-ink/8 bg-white p-7"
      >
        <p className="mb-4 font-display text-base font-semibold text-ink">Application details</p>
        <dl className="space-y-4 text-sm">
          <Row label="Email" value={application.email} />
          <Row label="Availability" value={application.availability} />
          <Row label="Format preference" value={application.formatPreference} />
          {application.priorExperience && (
            <Row label="Prior experience" value={application.priorExperience} />
          )}
        </dl>
        <p className="mt-5 text-xs text-ink/40">
          Want to change your availability or stage interests? Contact us, we&apos;ll update it on
          our end for now.
        </p>
      </motion.div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[11px] font-semibold uppercase tracking-wide text-ink/40">{label}</dt>
      <dd className="mt-0.5 text-ink/75">{value}</dd>
    </div>
  );
}
