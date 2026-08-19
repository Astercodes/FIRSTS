"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { COHORTS } from "@/lib/cohortData";

export function AdvisorMobileNav() {
  const pathname = usePathname();
  const items = [
    { label: "Overview", href: "/advisor" },
    { label: "Institution", href: "/advisor/institution" },
    ...COHORTS.map((c) => ({ label: c.name, href: `/advisor/cohorts/${c.id}` })),
  ];

  return (
    <nav className="flex gap-2 overflow-x-auto border-b border-ink/8 bg-paper px-6 py-3 lg:hidden print:hidden">
      {items.map((item) => {
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
