"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BUSINESS_TRACKS } from "@/lib/businessData";

const NAV = [
  { label: "Overview", href: "/business/dashboard" },
  ...BUSINESS_TRACKS.map((t) => ({ label: t.shortLabel, href: `/business/dashboard/track/${t.id}` })),
  { label: "Coach", href: "/business/dashboard/coach" },
  { label: "Portfolio", href: "/business/dashboard/portfolio" },
  { label: "Community", href: "/business/dashboard/community" },
];

export function BusinessMobileNav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-2 overflow-x-auto border-b border-ink/8 bg-paper px-6 py-3 lg:hidden print:hidden">
      {NAV.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              active ? "bg-ink text-paper" : "bg-paper-dim text-ink/60 hover:text-ink"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
