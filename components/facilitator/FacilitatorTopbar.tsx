"use client";

import Link from "next/link";
import { useFacilitatorPortal } from "@/lib/facilitatorStore";

export function FacilitatorTopbar() {
  const { application } = useFacilitatorPortal();

  const displayName = application?.name || "Facilitator";
  const firstName = displayName.split(" ")[0];
  const initial = displayName.charAt(0).toUpperCase();

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-ink/8 bg-paper/80 px-6 py-4 backdrop-blur-md lg:px-10 print:hidden">
      <Link href="/facilitator" className="flex items-center gap-2 lg:hidden">
        <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[var(--neon-pink)] via-[var(--sunshine-orange)] to-[var(--lime-zest)]">
          <span className="font-display text-xs font-bold text-ink">F</span>
        </span>
        <span className="font-display text-lg font-semibold tracking-tight text-ink">
          FIRSTS
        </span>
      </Link>

      <div className="hidden lg:block">
        <p className="font-display text-lg font-semibold text-ink">
          Good to see you, {firstName}.
        </p>
        <p className="text-xs text-ink/45">Facilitator portal</p>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href="/facilitator/profile"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-white"
          style={{ background: "linear-gradient(135deg, var(--fuchsia-blast), var(--neon-pink))" }}
        >
          {initial}
        </Link>
      </div>
    </header>
  );
}
