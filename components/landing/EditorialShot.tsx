import Image from "next/image";
import { EDITORIAL_IMAGES, type ShotKind } from "@/lib/editorialImages";

export function EditorialShot({ kind, className = "" }: { kind: ShotKind; className?: string }) {
  const shot = EDITORIAL_IMAGES[kind];
  return <div className={`editorial-shot ${className}`}><Image src={shot.src} alt={shot.alt} fill sizes="(max-width: 767px) 90vw, 800px" className="object-cover" /></div>;
}
