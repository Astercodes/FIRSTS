"use client";

import Link from "next/link";
import { useFacilitatorPortal } from "@/lib/facilitatorStore";

const COLOR = "var(--fuchsia-blast)";

export function FacilitatorLoginPanel() {
  const { application, loaded } = useFacilitatorPortal();

  if (!loaded) {
    return <p className="text-center text-sm text-paper/50">Checking your application…</p>;
  }

  if (!application) {
    return (
      <div className="space-y-5 text-center">
        <p className="text-sm leading-relaxed text-paper/70">
          We don&apos;t see an application on this browser yet. Apply first, training and portal
          access open up once you&apos;re in.
        </p>
        <Link
          href="/for/facilitators/apply"
          className="inline-block w-full rounded-2xl px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: COLOR }}
        >
          Apply to facilitate
        </Link>
      </div>
    );
  }

  if (application.status === "declined") {
    return (
      <p className="text-center text-sm leading-relaxed text-paper/60">
        Your application wasn&apos;t accepted this round. Reach out if your availability or focus
        has changed.
      </p>
    );
  }

  if (application.status !== "accepted") {
    return (
      <div className="space-y-3 text-center">
        <span
          className="inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider"
          style={{ color: COLOR, background: `color-mix(in oklab, ${COLOR} 18%, transparent)` }}
        >
          {application.status === "under-review" ? "Under review" : "Pending"}
        </span>
        <p className="text-sm leading-relaxed text-paper/60">
          Thanks, {application.name.split(" ")[0]}. We&apos;re still reviewing your application.
          Your portal unlocks the moment you&apos;re accepted.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5 text-center">
      <p className="text-sm leading-relaxed text-paper/70">
        Welcome back, {application.name.split(" ")[0]}. Your application was accepted, jump into
        your portal to start training.
      </p>
      <Link
        href="/facilitator"
        className="inline-block w-full rounded-2xl px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        style={{ background: COLOR }}
      >
        Enter your facilitator portal
      </Link>
    </div>
  );
}
