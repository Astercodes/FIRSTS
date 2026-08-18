"use client";

import { motion } from "framer-motion";

export function ProgressRing({
  pct,
  size = 132,
  stroke = 10,
  label,
  sublabel,
}: {
  pct: number;
  size?: number;
  stroke?: number;
  label: string;
  sublabel: string;
}) {
  const r = (size - stroke) / 2;
  const circumference = 2 * Math.PI * r;
  const offset = circumference * (1 - pct / 100);
  const gradientId = "ring-gradient";

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--neon-pink)" />
            <stop offset="55%" stopColor="var(--sunshine-orange)" />
            <stop offset="100%" stopColor="var(--lime-zest)" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--paper-dim)"
          strokeWidth={stroke}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="font-display text-2xl font-bold text-ink">{label}</span>
        <span className="text-xs text-ink/50">{sublabel}</span>
      </div>
    </div>
  );
}
