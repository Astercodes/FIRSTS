"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NAV = [
  { label: "Overview", href: "/facilitator" },
  { label: "Training", href: "/facilitator/training" },
  { label: "Resources", href: "/facilitator/resources" },
  { label: "Sessions", href: "/facilitator/sessions" },
  { label: "Recognition", href: "/facilitator/recognition" },
  { label: "Lounge", href: "/facilitator/lounge" },
  { label: "My profile", href: "/facilitator/profile" },
];

export function FacilitatorMobileNav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-2 overflow-x-auto border-b border-ink/8 bg-paper/80 px-6 py-3 backdrop-blur-xl lg:hidden print:hidden">
      {NAV.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              active ? "text-white" : "bg-paper-dim text-ink/60 hover:text-ink"
            }`}
          >
            {active && (
              <motion.span
                layoutId="facilitator-mobile-nav-active"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
                className="absolute inset-0 rounded-full"
                style={{ background: "linear-gradient(120deg, var(--fuchsia-blast), var(--neon-pink))" }}
              />
            )}
            <span className="relative">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
