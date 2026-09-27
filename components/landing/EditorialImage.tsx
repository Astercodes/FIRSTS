import Image from "next/image";

export function EditorialImage({ kind = "growth", className = "", priority = false }: {
  kind?: "growth" | "community";
  className?: string;
  priority?: boolean;
}) {
  const community = kind === "community";
  return (
    <figure className={`editorial-image ${className}`}>
      <Image
        src={community ? "/images/firsts-community.webp" : "/images/firsts-growth.webp"}
        alt={community ? "An editorial illustration of students exploring ideas with a mentor" : "A citrus-colored sculptural staircase rising through an open arch"}
        fill
        priority={priority}
        sizes="(max-width: 767px) 100vw, 50vw"
        className="object-cover"
      />
      <figcaption className="editorial-caption">
        <span>{community ? "Better, together." : "Small steps. Expansive possibilities."}</span>
        <span aria-hidden="true">↗</span>
      </figcaption>
    </figure>
  );
}
