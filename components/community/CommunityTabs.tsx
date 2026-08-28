"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const TABS = [
  { id: "home", label: "Home", href: "/dashboard/community" },
  { id: "feed", label: "Feed", href: "/dashboard/community/feed" },
  { id: "discover", label: "Discover", href: "/dashboard/community/discover" },
  { id: "partner", label: "Partner", href: "/dashboard/community/partner" },
] as const;

export function CommunityTabs({ active }: { active: (typeof TABS)[number]["id"] }) {
  return (
    <div className="flex gap-1 overflow-x-auto rounded-full bg-paper-dim p-1">
      {TABS.map((t) => (
        <Link
          key={t.id}
          href={t.href}
          className="relative shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors"
        >
          {active === t.id && (
            <motion.span
              layoutId="community-tab-pill"
              className="absolute inset-0 rounded-full bg-ink"
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
            />
          )}
          <span className={`relative z-10 ${active === t.id ? "text-paper" : "text-ink/60 hover:text-ink"}`}>
            {t.label}
          </span>
        </Link>
      ))}
    </div>
  );
}
