"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type ModuleTabKey = "learn" | "do" | "coach" | "track";

const TABS: { key: ModuleTabKey; label: string }[] = [
  { key: "learn", label: "Learn" },
  { key: "do", label: "Do" },
  { key: "coach", label: "Coach" },
  { key: "track", label: "Track" },
];

export function ModuleTabs({
  color,
  panels,
}: {
  color: string;
  panels: Record<ModuleTabKey, ReactNode>;
}) {
  const [active, setActive] = useState<ModuleTabKey>("learn");

  return (
    <div>
      <div className="mb-6 flex gap-1 overflow-x-auto rounded-full border border-ink/8 bg-white p-1">
        {TABS.map((tab) => {
          const isActive = active === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className="relative shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition-colors"
              style={{ color: isActive ? "#0b0410" : "rgba(11,4,16,0.5)" }}
            >
              {isActive && (
                <motion.span
                  layoutId="module-tab-pill"
                  className="absolute inset-0 rounded-full"
                  style={{ background: `color-mix(in oklab, ${color} 22%, white)` }}
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{tab.label}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {panels[active]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
