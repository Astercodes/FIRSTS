"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { loadAdvisor, ADVISOR_CHANGE_EVENT, MOCK_ADVISOR, type AdvisorProfile } from "@/lib/advisorStore";

const NAV = [
  { label: "Overview", href: "/institution", icon: GridIcon },
  { label: "Departments", href: "/institution/departments", icon: LayersIcon },
  { label: "Staff", href: "/institution/staff", icon: UsersIcon },
  { label: "Settings", href: "/institution/settings", icon: GearIcon },
];

export function InstitutionSidebar() {
  const pathname = usePathname();
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

  const institution = advisor?.institution || MOCK_ADVISOR.institution;

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col bg-ink text-paper lg:flex print:hidden">
      <div className="flex items-center gap-2 px-6 py-6">
        <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[var(--neon-pink)] via-[var(--sunshine-orange)] to-[var(--lime-zest)]">
          <span className="font-display text-xs font-bold text-ink">F</span>
        </span>
        <span className="font-display text-lg font-semibold tracking-tight">
          FIRSTS
        </span>
        <span className="ml-auto rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-paper/60">
          Institution
        </span>
      </div>

      <div className="px-6 pb-4">
        <p className="truncate text-xs font-medium text-paper/40">{institution}</p>
      </div>

      <nav className="min-h-0 flex-1 space-y-1 overflow-y-auto px-3 py-1">
        {NAV.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
                active
                  ? "bg-white/10 text-paper"
                  : "text-paper/55 hover:bg-white/5 hover:text-paper/85"
              }`}
            >
              <Icon className="h-[18px] w-[18px]" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 p-3">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-paper/50 transition-colors hover:bg-white/5 hover:text-paper/80"
        >
          <LogOutIcon className="h-[18px] w-[18px]" />
          Back to home
        </Link>
      </div>
    </aside>
  );
}

type IconProps = { className?: string };

function GridIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.7} className={className}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" stroke="currentColor" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" stroke="currentColor" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" stroke="currentColor" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" stroke="currentColor" />
    </svg>
  );
}

function LayersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.7} className={className}>
      <path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" stroke="currentColor" strokeLinejoin="round" />
      <path d="m3.5 12 8.5 4.5 8.5-4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m3.5 16.5 8.5 4.5 8.5-4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UsersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.7} className={className}>
      <circle cx="9" cy="8.5" r="3" stroke="currentColor" />
      <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="currentColor" strokeLinecap="round" />
      <path d="M15.5 5.5c1.5.3 2.5 1.5 2.5 3s-1 2.7-2.5 3" stroke="currentColor" strokeLinecap="round" />
      <path d="M17 14.2c1.8.5 3 2 3 4.3" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

function GearIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.7} className={className}>
      <circle cx="12" cy="12" r="3" stroke="currentColor" />
      <path
        d="M12 3.5v2M12 18.5v2M20.5 12h-2M5.5 12h-2M17.8 6.2l-1.4 1.4M7.6 16.4l-1.4 1.4M17.8 17.8l-1.4-1.4M7.6 7.6 6.2 6.2"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LogOutIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.7} className={className}>
      <path d="M9 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 16l4-4-4-4M19 12H9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
