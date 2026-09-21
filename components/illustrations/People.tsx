import type { CSSProperties } from "react";

export type SkinTone = "s1" | "s2" | "s3" | "s4" | "s5";
export type HairStyle = "short" | "curly" | "bun" | "long" | "hijab" | "bald";
export type Pose = "stand" | "wave" | "point" | "cheer" | "walk" | "sit" | "highfive";

const SKIN: Record<SkinTone, string> = {
  s1: "#FDE0C4",
  s2: "#F1C08A",
  s3: "#C98A56",
  s4: "#8B5A2B",
  s5: "#5A3822",
};

const INK_LINE = "#241a2c";

const LEGS: Record<Pose, { l: string; r: string }> = {
  stand: { l: "M44 80 L41 140", r: "M56 80 L59 140" },
  wave: { l: "M44 80 L41 140", r: "M56 80 L59 140" },
  point: { l: "M44 80 L41 140", r: "M56 80 L59 140" },
  highfive: { l: "M44 80 L38 140", r: "M56 80 L62 140" },
  cheer: { l: "M44 80 L40 138", r: "M56 80 L64 134" },
  walk: { l: "M44 80 L34 138", r: "M56 80 L66 128" },
  sit: { l: "M44 80 L30 96 L50 100", r: "M56 80 L72 96 L52 104" },
};

const ARMS: Record<Pose, { l: string; r: string }> = {
  stand: { l: "M39 46 L34 76", r: "M61 46 L66 76" },
  wave: { l: "M39 46 L34 76", r: "M61 46 L74 34 L70 16" },
  point: { l: "M39 46 L34 76", r: "M61 46 L78 42 L92 40" },
  highfive: { l: "M39 46 L34 76", r: "M61 46 L76 30 L86 18" },
  cheer: { l: "M39 46 L26 28 L22 10", r: "M61 46 L74 28 L78 10" },
  walk: { l: "M39 46 L46 70", r: "M61 46 L72 64" },
  sit: { l: "M39 46 L34 84", r: "M61 46 L66 88" },
};

function HairShape({ style, color }: { style: HairStyle; color: string }) {
  switch (style) {
    case "short":
      return (
        <path
          d="M37 24 Q37 8 50 8 Q63 8 63 24 Q56 16 50 16 Q44 16 37 24 Z"
          fill={color}
        />
      );
    case "curly":
      return (
        <g fill={color}>
          <circle cx="38" cy="17" r="6" />
          <circle cx="46" cy="10" r="6.5" />
          <circle cx="54" cy="10" r="6.5" />
          <circle cx="62" cy="17" r="6" />
          <circle cx="35" cy="23" r="5" />
          <circle cx="65" cy="23" r="5" />
        </g>
      );
    case "bun":
      return (
        <g fill={color}>
          <path d="M37 22 Q38 9 50 9 Q62 9 63 22 Q56 15 50 15 Q44 15 37 22 Z" />
          <circle cx="50" cy="6" r="5" />
        </g>
      );
    case "long":
      return (
        <g fill={color}>
          <path d="M37 24 Q37 8 50 8 Q63 8 63 24 Q56 16 50 16 Q44 16 37 24 Z" />
          <path d="M36 20 Q32 42 38 58 L46 58 Q41 40 41 20 Z" />
          <path d="M64 20 Q68 42 62 58 L54 58 Q59 40 59 20 Z" />
        </g>
      );
    case "hijab":
      return (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30 62 Q27 18 50 5 Q73 18 70 62 Q50 73 30 62 Z
             M50 11 A13 14 0 1 0 50.01 11 Z"
          fill={color}
        />
      );
    case "bald":
    default:
      return null;
  }
}

export function Person({
  pose = "stand",
  skin = "s2",
  hair = "short",
  hairColor = INK_LINE,
  outfit = "var(--fuchsia-blast)",
  pants = "#2b2033",
  flip = false,
  className,
  style,
}: {
  pose?: Pose;
  skin?: SkinTone;
  hair?: HairStyle;
  hairColor?: string;
  outfit?: string;
  pants?: string;
  flip?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  const legs = LEGS[pose];
  const arms = ARMS[pose];
  const skinColor = SKIN[skin];

  return (
    <svg
      viewBox="0 0 100 150"
      className={className}
      style={style}
      aria-hidden
    >
      <g transform={flip ? "translate(100,0) scale(-1,1)" : undefined}>
        <path d={legs.l} stroke={pants} strokeWidth={11} strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d={legs.r} stroke={pants} strokeWidth={11} strokeLinecap="round" strokeLinejoin="round" fill="none" />

        <path d={arms.l} stroke={outfit} strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d={arms.r} stroke={outfit} strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" fill="none" />

        <rect x="36" y="38" width="28" height="40" rx="14" fill={outfit} />

        <circle cx="50" cy="24" r="13" fill={skinColor} />
        <HairShape style={hair} color={hairColor} />

        <circle cx="45" cy="23" r="1.6" fill={INK_LINE} />
        <circle cx="55" cy="23" r="1.6" fill={INK_LINE} />
        <path d="M45 29 Q50 32 55 29" stroke={INK_LINE} strokeWidth={1.4} fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function GroundShadow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`rounded-full ${className ?? ""}`}
      style={{
        background: "radial-gradient(50% 50% at 50% 50%, color-mix(in oklab, var(--ink) 18%, transparent) 0%, transparent 75%)",
      }}
    />
  );
}

export function Confetti({ className }: { className?: string }) {
  const bits = [
    { x: 10, y: 15, c: "var(--neon-pink)", r: "rotate(12deg)" },
    { x: 92, y: 8, c: "var(--sunshine-orange)", r: "rotate(-18deg)" },
    { x: 6, y: 60, c: "var(--citrus-lime)", r: "rotate(30deg)" },
    { x: 100, y: 55, c: "var(--fuchsia-blast)", r: "rotate(-8deg)" },
    { x: 50, y: 2, c: "var(--tropical-mango)", r: "rotate(20deg)" },
    { x: 30, y: 90, c: "var(--berry-burst)", r: "rotate(-24deg)" },
    { x: 75, y: 88, c: "var(--lime-zest)", r: "rotate(14deg)" },
  ];
  return (
    <svg viewBox="0 0 110 100" className={className} aria-hidden>
      {bits.map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={b.y}
          width={i % 2 === 0 ? 7 : 5}
          height={i % 2 === 0 ? 7 : 5}
          rx={1.5}
          fill={b.c}
          transform={`${b.r}`}
          style={{ transformOrigin: `${b.x}px ${b.y}px` }}
        />
      ))}
    </svg>
  );
}

export function SpeechBubble({ className, color = "var(--ink)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 80 56" className={className} aria-hidden>
      <path
        d="M6 6h68a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H30l-14 12v-12H6a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4Z"
        fill="white"
        stroke={color}
        strokeOpacity={0.12}
        strokeWidth={2}
      />
      <rect x="14" y="16" width="40" height="4" rx="2" fill={color} fillOpacity={0.18} />
      <rect x="14" y="26" width="28" height="4" rx="2" fill={color} fillOpacity={0.18} />
    </svg>
  );
}

export function Book({ className, color = "var(--fuchsia-blast)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 90 56" className={className} aria-hidden>
      <path d="M45 12C38 7 24 5 6 6v38c18-1 32 1 39 6" fill="white" stroke={color} strokeWidth={3} strokeLinejoin="round" />
      <path d="M45 12c7-5 21-7 39-6v38c-18-1-32 1-39 6" fill="white" stroke={color} strokeWidth={3} strokeLinejoin="round" />
      <path d="M45 12v44" stroke={color} strokeWidth={2} />
    </svg>
  );
}

export function Laptop({ className, color = "var(--ink)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 64" className={className} aria-hidden>
      <rect x="22" y="4" width="56" height="38" rx="3" fill="white" stroke={color} strokeOpacity={0.15} strokeWidth={2} />
      <rect x="28" y="10" width="44" height="26" rx="1.5" fill="color-mix(in oklab, var(--fuchsia-blast) 10%, white)" />
      <path d="M4 54 L96 54 L86 60 L14 60 Z" fill={color} fillOpacity={0.9} />
    </svg>
  );
}

export function Plant({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 60" className={className} aria-hidden>
      <path d="M14 42h22l-3 14H17Z" fill="var(--berry-burst)" />
      <path d="M25 42C20 30 20 18 25 8" stroke="var(--citrus-lime)" strokeWidth={3} strokeLinecap="round" fill="none" />
      <path d="M25 34C18 30 12 24 10 16" stroke="var(--citrus-lime)" strokeWidth={3} strokeLinecap="round" fill="none" />
      <path d="M25 26C32 22 38 16 40 8" stroke="var(--citrus-lime)" strokeWidth={3} strokeLinecap="round" fill="none" />
    </svg>
  );
}
