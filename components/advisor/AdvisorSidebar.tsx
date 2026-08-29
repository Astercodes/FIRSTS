"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { loadAdvisor, ADVISOR_CHANGE_EVENT, MOCK_ADVISOR, type AdvisorProfile } from "@/lib/advisorStore";

export function AdvisorSidebar() {
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

  const role = advisor?.role ?? MOCK_ADVISOR.role;

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
          Advisor
        </span>
      </div>

      <nav className="min-h-0 flex-1 space-y-1 overflow-y-auto px-3 py-1">
        <NavLink href="/advisor" active={pathname === "/advisor"} icon={<GridIcon className="h-[18px] w-[18px]" />}>
          Overview
        </NavLink>

        <NavLink href="/advisor/segments" active={pathname === "/advisor/segments"} icon={<FilterIcon className="h-[18px] w-[18px]" />}>
          Segmentation
        </NavLink>

        <NavLink href="/advisor/workload" active={pathname === "/advisor/workload"} icon={<ClipboardIcon className="h-[18px] w-[18px]" />}>
          Workload
        </NavLink>

        <NavLink href="/advisor/outcomes" active={pathname === "/advisor/outcomes"} icon={<TargetIcon className="h-[18px] w-[18px]" />}>
          Outcomes
        </NavLink>

        <NavLink href="/advisor/programming" active={pathname === "/advisor/programming"} icon={<CalendarIcon className="h-[18px] w-[18px]" />}>
          Programming
        </NavLink>

        <NavLink href="/advisor/reporting" active={pathname === "/advisor/reporting"} icon={<ReportIcon className="h-[18px] w-[18px]" />}>
          Reporting
        </NavLink>

        <NavLink href="/advisor/communication" active={pathname === "/advisor/communication"} icon={<MessageIcon className="h-[18px] w-[18px]" />}>
          Communication
        </NavLink>

        {role === "Institution Admin" && (
          <NavLink href="/institution" active={pathname.startsWith("/institution")} icon={<BuildingIcon className="h-[18px] w-[18px]" />}>
            Campus-wide view
          </NavLink>
        )}
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

function NavLink({
  href,
  active,
  icon,
  children,
}: {
  href: string;
  active: boolean;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
        active
          ? "bg-white/10 text-paper"
          : "text-paper/55 hover:bg-white/5 hover:text-paper/85"
      }`}
    >
      {icon}
      <span className="truncate">{children}</span>
    </Link>
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

function FilterIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.7} className={className}>
      <path d="M4 5h16l-6 7v6l-4 2v-8L4 5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClipboardIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.7} className={className}>
      <rect x="5.5" y="4.5" width="13" height="16" rx="1.5" stroke="currentColor" />
      <path d="M9 4.5V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v.5" stroke="currentColor" strokeLinecap="round" />
      <path d="M8.5 11h7M8.5 14.5h7M8.5 18h4" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

function TargetIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.7} className={className}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" />
    </svg>
  );
}

function CalendarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.7} className={className}>
      <rect x="4" y="5" width="16" height="15" rx="1.5" stroke="currentColor" />
      <path d="M4 9.5h16M8 3v3.5M16 3v3.5" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

function ReportIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.7} className={className}>
      <path d="M6 3.5h9l4 4V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" stroke="currentColor" strokeLinejoin="round" />
      <path d="M15 3.5V7a1 1 0 0 0 1 1h3.5" stroke="currentColor" strokeLinejoin="round" />
      <path d="M8 13l2.5 2.5L16 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MessageIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.7} className={className}>
      <path d="M4 5.5h16a1 1 0 0 1 1 1V16a1 1 0 0 1-1 1H9l-4.5 3.5V17H4a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1Z" stroke="currentColor" strokeLinejoin="round" />
      <path d="M7.5 10h9M7.5 13.2h6" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

function BuildingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.7} className={className}>
      <rect x="5" y="3.5" width="14" height="17" rx="1.5" stroke="currentColor" />
      <path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" stroke="currentColor" strokeLinecap="round" />
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
