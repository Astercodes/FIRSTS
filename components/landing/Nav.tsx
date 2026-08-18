"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { label: "The Stages", href: "#stages" },
  { label: "AI Coach", href: "#coach" },
  { label: "For Institutions", href: "#institutions" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
          scrolled
            ? "glass-dark shadow-[0_8px_30px_-10px_rgba(0,0,0,0.6)]"
            : "border border-white/0 bg-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2">
          <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[var(--neon-pink)] via-[var(--sunshine-orange)] to-[var(--lime-zest)]">
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--neon-pink)] via-[var(--sunshine-orange)] to-[var(--lime-zest)] blur-md opacity-70" />
            <span className="relative font-display text-xs font-bold text-ink">F</span>
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-paper">
            FIRSTS
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-paper/70 transition-colors hover:text-paper"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#login"
            className="hidden text-sm font-medium text-paper/80 transition-colors hover:text-paper sm:block px-3 py-2"
          >
            Log in
          </a>
          <a
            href="#get-started"
            className="group relative overflow-hidden rounded-full bg-paper px-4 py-2 text-sm font-semibold text-ink transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98]"
          >
            <span className="relative z-10">Get started</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[var(--neon-pink)] to-[var(--tropical-mango)] transition-transform duration-300 group-hover:translate-x-0" />
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
