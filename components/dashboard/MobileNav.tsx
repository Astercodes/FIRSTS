"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Stage One", href: "/dashboard/stage" },
  { label: "Stage Two", href: "/dashboard/stage/two" },
  { label: "Stage Three", href: "/dashboard/stage/three" },
  { label: "Stage Four", href: "/dashboard/stage/four" },
  { label: "Stage Five", href: "/dashboard/stage/five" },
  { label: "Stage Six", href: "/dashboard/stage/six" },
  { label: "Stage Seven", href: "/dashboard/stage/seven" },
  { label: "Stage Eight", href: "/dashboard/stage/eight" },
  { label: "Stage Nine", href: "/dashboard/stage/nine" },
  { label: "Stage Ten", href: "/dashboard/stage/ten" },
  { label: "Stage Eleven", href: "/dashboard/stage/eleven" },
  { label: "AI Coach", href: "/dashboard/coach" },
  { label: "Portfolio", href: "/dashboard/portfolio" },
  { label: "Community", href: "/dashboard/community" },
];

export function MobileNav() {
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
              active
                ? "bg-ink text-paper"
                : "bg-paper-dim text-ink/60 hover:text-ink"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
