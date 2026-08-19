"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { label: "Dashboard", href: "/dashboard", icon: GridIcon },
  { label: "Stage One", href: "/dashboard/stage", icon: LayersIcon },
  { label: "Stage Two", href: "/dashboard/stage/two", icon: LayersIcon },
  { label: "Stage Three", href: "/dashboard/stage/three", icon: LayersIcon },
  { label: "Stage Four", href: "/dashboard/stage/four", icon: LayersIcon },
  { label: "AI Coach", href: "/dashboard/coach", icon: SparkleIcon },
  { label: "Portfolio", href: "/dashboard/portfolio", icon: FolderIcon },
];

export function Sidebar() {
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
              <Icon className="h-[18px] w-[18px]" active={active} />
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

type IconProps = { className?: string; active?: boolean };

function GridIcon({ className, active }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.7} className={className}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" stroke="currentColor" style={active ? { fill: "currentColor", fillOpacity: 0.15 } : undefined} />
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

function SparkleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.7} className={className}>
      <path
        d="M12 3.5 13.6 9l5.4 1.6-5.4 1.6L12 17.7l-1.6-5.5L5 10.6 10.4 9 12 3.5Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path d="M19 16.5v3M17.5 18h3" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

function FolderIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.7} className={className}>
      <path
        d="M3.5 6.5A1.5 1.5 0 0 1 5 5h4l2 2h8a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 19 19H5a1.5 1.5 0 0 1-1.5-1.5v-11Z"
        stroke="currentColor"
        strokeLinejoin="round"
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
