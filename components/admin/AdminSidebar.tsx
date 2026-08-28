"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [{ label: "Facilitators", href: "/admin/facilitators", icon: UsersIcon }];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col bg-ink text-paper lg:flex print:hidden">
      <div className="flex items-center gap-2 px-6 py-6">
        <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[var(--neon-pink)] via-[var(--sunshine-orange)] to-[var(--lime-zest)]">
          <span className="font-display text-xs font-bold text-ink">F</span>
        </span>
        <span className="font-display text-lg font-semibold tracking-tight">FIRSTS</span>
        <span className="ml-auto rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-paper/60">
          Admin
        </span>
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {NAV.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
                active ? "bg-white/10 text-paper" : "text-paper/55 hover:bg-white/5 hover:text-paper/85"
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

function UsersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.7} className={className}>
      <circle cx="9" cy="8.5" r="3" stroke="currentColor" />
      <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="currentColor" strokeLinecap="round" />
      <path d="M15.5 6.5a3 3 0 0 1 0 5.8M18 19c0-2.4-1.6-4.2-3.7-4.8" stroke="currentColor" strokeLinecap="round" />
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
