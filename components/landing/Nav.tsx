"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { motion, AnimatePresence, useScroll, useSpring, useReducedMotion } from "framer-motion";

const LINKS = [
  { label: "Development Areas", href: "/development-areas" },
  { label: "First Leap", href: "/first-leap" },
];

const AUDIENCE_LINKS = [
  { label: "Students at partner schools", href: "/for/partner-schools" },
  { label: "Recent grads & professionals", href: "/for/professionals" },
  { label: "Students at non-partner schools", href: "/for/independent-students" },
  { label: "Career centers", href: "/for/career-centers" },
  { label: "Institutions", href: "/for/institutions" },
  { label: "Employers", href: "/for/employers" },
  { label: "Facilitators", href: "/for/facilitators" },
];

function WhoItsForMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        ref.current?.querySelector("button")?.focus();
      }
    }
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
        className="flex items-center gap-1.5 text-sm font-medium text-paper/70 transition-colors hover:text-paper"
      >
        Who it&apos;s for
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth={2}
          className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
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
            className="glass-dark absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-2xl p-2 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]"
          >
            {AUDIENCE_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3.5 py-2.5 text-sm font-medium text-paper/80 transition-colors hover:bg-white/10 hover:text-paper"
              >
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Nav() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 30 });
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileButton = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        mobileButton.current?.focus();
      }
    };
    const outside = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setMobileOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("mousedown", outside);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("mousedown", outside);
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <motion.div aria-hidden="true" className="reading-progress" style={{ scaleX: reduceMotion ? scrollYProgress : progress }} />
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
          scrolled
            ? "glass-dark shadow-[0_8px_30px_-10px_rgba(0,0,0,0.6)]"
            : "border border-white/10 bg-ink/85 backdrop-blur-xl"
        }`}
      >
        <Link href="/" aria-label="FIRSTS home" className="flex items-center gap-2">
          <Logo tone="light" />
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          <WhoItsForMenu />
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
          <button ref={mobileButton} type="button" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen(!mobileOpen)} className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 text-paper md:hidden">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5"><path d={mobileOpen ? "M6 6l12 12M6 18L18 6" : "M4 8h16M4 16h16"} /></svg>
          </button>
          <Link
            href="/login"
            className="hidden text-sm font-medium text-paper/80 transition-colors hover:text-paper sm:block px-3 py-2"
          >
            Log in
          </Link>
          <Link
            href="/onboarding"
            className="group relative overflow-hidden rounded-full bg-paper px-4 py-2 text-sm font-semibold text-ink transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98]"
          >
            <span className="relative z-10">Get started</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[var(--neon-pink)] to-[var(--tropical-mango)] transition-transform duration-300 group-hover:translate-x-0" />
          </Link>
        </div>
      </nav>
      {mobileOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="absolute inset-x-4 top-20 max-h-[calc(100svh-100px)] overflow-y-auto rounded-3xl border border-paper/15 bg-ink p-5 text-paper shadow-2xl md:hidden">
          <p className="mb-3 px-3 text-[10px] uppercase tracking-[.2em] text-paper/45">Find your path</p>
          {[...AUDIENCE_LINKS, ...LINKS, { label: "Log in", href: "/login" }].map((link) => <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block rounded-xl px-3 py-3 text-sm text-paper/80 hover:bg-paper/10 hover:text-paper">{link.label}</Link>)}
        </nav>
      )}
    </motion.header>
  );
}
