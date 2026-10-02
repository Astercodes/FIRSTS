"use client";

import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { MOCK_BUSINESS_USER } from "@/lib/businessData";

export function BusinessTopbar() {
  const displayName = MOCK_BUSINESS_USER.firstName;
  const initial = displayName.charAt(0).toUpperCase();

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-ink/8 bg-paper/80 px-6 py-4 backdrop-blur-md lg:px-10 print:hidden">
      <Link href="/business/dashboard" className="flex items-center gap-2 lg:hidden">
        <Logo />
      </Link>

      <p className="hidden font-display text-lg font-semibold text-ink lg:block">
        Good to see you, {displayName}.
      </p>

      <div className="flex items-center gap-3">
        <span className="hidden items-center gap-1.5 rounded-full bg-paper-dim px-3 py-1.5 text-xs font-semibold text-ink/70 sm:flex">
          FIRSTS Business
        </span>
        <Link
          href="/business/dashboard/profile"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-white transition-transform hover:scale-105"
          style={{ background: "linear-gradient(135deg, var(--sunshine-orange), var(--tropical-mango))" }}
          aria-label="Your profile"
        >
          {initial}
        </Link>
      </div>
    </header>
  );
}
