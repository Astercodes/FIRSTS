"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { loadAdvisor, ADVISOR_CHANGE_EVENT, MOCK_ADVISOR, type AdvisorProfile } from "@/lib/advisorStore";

export function AdvisorTopbar() {
  const [advisor, setAdvisor] = useState<AdvisorProfile | null>(null);

  useEffect(() => {
    const sync = () => setAdvisor(loadAdvisor());
    sync();
    window.addEventListener(ADVISOR_CHANGE_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(ADVISOR_CHANGE_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const displayName = advisor?.name || MOCK_ADVISOR.name;
  const firstName = displayName.split(" ")[0];
  const initial = displayName.charAt(0).toUpperCase();
  const institution = advisor?.institution || MOCK_ADVISOR.institution;

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-ink/8 bg-paper/80 px-6 py-4 backdrop-blur-md lg:px-10 print:hidden">
      <Link href="/advisor" className="flex items-center gap-2 lg:hidden">
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
        <p className="text-xs text-ink/45">{institution}</p>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href="/advisor/profile"
          className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full font-display text-sm font-bold text-ink transition-transform hover:scale-105"
          style={
            advisor?.photo
              ? undefined
              : { background: "linear-gradient(135deg, var(--juicy-plum), var(--berry-burst))" }
          }
          aria-label="Your profile"
        >
          {advisor?.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={advisor.photo} alt={displayName} className="h-full w-full object-cover" />
          ) : (
            initial
          )}
        </Link>
      </div>
    </header>
  );
}
