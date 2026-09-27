import Image from "next/image";
import { EDITORIAL_IMAGES, type ShotKind } from "@/lib/editorialImages";

export function EditorialImage({ kind = "growth", className = "", priority = false }: {
  kind?: ShotKind;
  className?: string;
  priority?: boolean;
}) {
  const image = EDITORIAL_IMAGES[kind];
  return (
    <figure className={`editorial-image ${className}`}>
      <Image src={image.src} alt={image.alt} fill priority={priority} sizes="(max-width: 767px) 100vw, 50vw" className="object-cover" />
      <figcaption className="editorial-caption"><span>{image.caption}</span><span aria-hidden="true">↗</span></figcaption>
    </figure>
  );
}
