import Image from "next/image";

const SHOTS = {
  reflection: { src: "/images/firsts-reflection.webp", alt: "Editorial scene of a student reflecting in a sunlit library" },
  making: { src: "/images/firsts-making.webp", alt: "Editorial scene of two professionals developing a design together" },
  future: { src: "/images/firsts-next-chapter.webp", alt: "Editorial scene of two students walking through a sunlit campus atrium" },
  community: { src: "/images/firsts-community.webp", alt: "Editorial scene of students exchanging ideas with a mentor" },
};

export type ShotKind = keyof typeof SHOTS;

export function EditorialShot({ kind, className = "" }: { kind: ShotKind; className?: string }) {
  const shot = SHOTS[kind];
  return <div className={`editorial-shot ${className}`}><Image src={shot.src} alt={shot.alt} fill sizes="(max-width: 767px) 90vw, 520px" className="object-cover" /></div>;
}

export function EditorialStrip({ compact = false }: { compact?: boolean }) {
  return <div className={`editorial-strip ${compact ? "editorial-strip-compact" : ""}`}>
    <EditorialShot kind="reflection" /><EditorialShot kind="making" /><EditorialShot kind="future" />
  </div>;
}

export function ClosingPhotography() {
  return <div className="closing-photography"><EditorialShot kind="future" /><EditorialShot kind="making" /></div>;
}
