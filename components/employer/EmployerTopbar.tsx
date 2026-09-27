"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { loadEmployer, EMPLOYER_CHANGE_EVENT, MOCK_EMPLOYER, type EmployerProfile } from "@/lib/employerStore";

export function EmployerTopbar() {
  const [employer, setEmployer] = useState<EmployerProfile | null>(null);

  useEffect(() => {
    const sync = () => setEmployer(loadEmployer());
    sync();
    window.addEventListener(EMPLOYER_CHANGE_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EMPLOYER_CHANGE_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const displayName = employer?.contactName || MOCK_EMPLOYER.contactName;
  const firstName = displayName.split(" ")[0];
  const initial = displayName.charAt(0).toUpperCase();
  const company = employer?.company || MOCK_EMPLOYER.company;

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-ink/8 bg-paper/80 px-6 py-4 backdrop-blur-md lg:px-10 print:hidden">
      <Link href="/employer" className="flex items-center gap-2 lg:hidden">
        <Logo />
      </Link>

      <div className="hidden lg:block">
        <p className="font-display text-lg font-semibold text-ink">
          Good to see you, {firstName}.
        </p>
        <p className="text-xs text-ink/45">{company}</p>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href="/employer/company"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-white"
          style={{ background: "linear-gradient(135deg, var(--pink-grapefruit), var(--sunshine-orange))" }}
        >
          {initial}
        </Link>
      </div>
    </header>
  );
}
