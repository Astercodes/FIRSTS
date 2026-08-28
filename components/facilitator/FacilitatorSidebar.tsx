"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { label: "Overview", href: "/facilitator", icon: GridIcon },
  { label: "Training", href: "/facilitator/training", icon: CapIcon },
  { label: "My profile", href: "/facilitator/profile", icon: BadgeIcon },
];

export function FacilitatorSidebar() {
  const pathname = usePathname();

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
          Facilitator
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

function CapIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.7} className={className}>
      <path d="M12 5 3 9.5 12 14l9-4.5L12 5Z" stroke="currentColor" strokeLinejoin="round" />
      <path d="M7 11.5V16c0 1.1 2.2 2.5 5 2.5s5-1.4 5-2.5v-4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 10v5" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

function BadgeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.7} className={className}>
      <circle cx="12" cy="9" r="5.5" stroke="currentColor" />
      <path d="M9 13.5L7 20l5-2.5 5 2.5-2-6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
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
