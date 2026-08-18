"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "./PathIcons";
import type { ReactNode } from "react";

export function PathCard({
  href,
  id,
  tag,
  title,
  body,
  meta,
  color,
  icon,
  delay = 0,
}: {
  href: string;
  id?: string;
  tag: string;
  title: string;
  body: string;
  meta: string;
  color: string;
  icon: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="scroll-mt-32"
    >
      <Link href={href} className="group relative block h-full">
        <div
          className="absolute -inset-px rounded-[28px] opacity-0 blur transition-opacity duration-500 group-hover:opacity-70"
          style={{ background: color }}
          aria-hidden
        />
        <div className="glass-dark relative flex h-full flex-col rounded-[28px] p-8 transition-transform duration-500 group-hover:-translate-y-2">
          <div
            className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl"
            style={{
              background: `color-mix(in oklab, ${color} 20%, transparent)`,
              color,
            }}
          >
            {icon}
          </div>

          <span
            className="mb-3 inline-block w-fit rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider"
            style={{
              color,
              background: `color-mix(in oklab, ${color} 16%, transparent)`,
            }}
          >
            {tag}
          </span>

          <h2 className="font-display text-xl font-semibold leading-snug text-paper sm:text-2xl">
            {title}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-paper/60">
            {body}
          </p>

          <div className="mt-8 flex flex-1 items-end justify-between border-t border-white/10 pt-5">
            <span className="text-xs text-paper/45">{meta}</span>
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-paper transition-all duration-300 group-hover:translate-x-1"
              style={{ color }}
            >
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
