import Link from "next/link";

const TABS = [
  { id: "home", label: "Home", href: "/dashboard/community" },
  { id: "feed", label: "Feed", href: "/dashboard/community/feed" },
  { id: "discover", label: "Discover", href: "/dashboard/community/discover" },
  { id: "partner", label: "Partner", href: "/dashboard/community/partner" },
] as const;

export function CommunityTabs({ active }: { active: (typeof TABS)[number]["id"] }) {
  return (
    <div className="flex gap-2 overflow-x-auto">
      {TABS.map((t) => (
        <Link
          key={t.id}
          href={t.href}
          className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            active === t.id ? "bg-ink text-paper" : "bg-paper-dim text-ink/60 hover:text-ink"
          }`}
        >
          {t.label}
        </Link>
      ))}
    </div>
  );
}
