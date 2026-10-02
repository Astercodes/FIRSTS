"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const PRODUCTS = [
  {
    id: "career" as const,
    label: "FIRSTS Career",
    href: "/",
    blurb: "Build the knowledge, skills, habits, and evidence to get where you're going professionally.",
    color: "var(--neon-pink)",
  },
  {
    id: "business" as const,
    label: "FIRSTS Business",
    href: "/business",
    blurb: "Build the skills and evidence to start, run, and grow something of your own.",
    color: "var(--sunshine-orange)",
  },
];

export function ProductSwitcher({ current }: { current: "career" | "business" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const active = PRODUCTS.find((p) => p.id === current) ?? PRODUCTS[0];

  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Switch product"
        className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-paper/85 transition-colors hover:border-white/30 hover:bg-white/10"
      >
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: active.color, boxShadow: `0 0 8px ${active.color}` }} />
        {active.label}
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} className={`h-3 w-3 transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
          <path d="m6 9 6 6 6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="glass-dark absolute left-0 top-full mt-3 w-72 rounded-2xl p-2 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]"
          >
            {PRODUCTS.map((p) => (
              <Link
                key={p.id}
                href={p.href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-3.5 py-3 transition-colors ${
                  p.id === current ? "bg-white/10" : "hover:bg-white/10"
                }`}
              >
                <span className="flex items-center gap-2 text-sm font-semibold text-paper">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: p.color, boxShadow: `0 0 8px ${p.color}` }} />
                  {p.label}
                  {p.id === current && (
                    <span className="ml-auto text-[10px] font-bold uppercase tracking-wide text-paper/40">Current</span>
                  )}
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-paper/55">{p.blurb}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
