import { Person, GroundShadow, Confetti, SpeechBubble, Book, Plant } from "@/components/illustrations/People";

const OUTFITS = [
  "var(--neon-pink)",
  "var(--sunshine-orange)",
  "var(--fuchsia-blast)",
  "var(--citrus-lime)",
  "var(--berry-burst)",
  "var(--tropical-mango)",
];

export function HeroPeopleBand({ className }: { className?: string }) {
  const cast: Array<{
    pose: "walk" | "stand" | "wave" | "point";
    skin: "s1" | "s2" | "s3" | "s4" | "s5";
    hair: "short" | "curly" | "bun" | "long" | "hijab";
    outfit: string;
    h: string;
    flip?: boolean;
  }> = [
    { pose: "walk", skin: "s3", hair: "curly", outfit: OUTFITS[0], h: "h-32 sm:h-40" },
    { pose: "wave", skin: "s1", hair: "bun", outfit: OUTFITS[1], h: "h-40 sm:h-48" },
    { pose: "point", skin: "s5", hair: "short", outfit: OUTFITS[2], h: "h-44 sm:h-52" },
    { pose: "stand", skin: "s2", hair: "hijab", outfit: OUTFITS[3], h: "h-40 sm:h-48" },
    { pose: "walk", skin: "s4", hair: "long", outfit: OUTFITS[4], h: "h-32 sm:h-40", flip: true },
  ];

  return (
    <div className={`pointer-events-none flex items-end justify-center gap-4 sm:gap-8 ${className ?? ""}`} aria-hidden>
      {cast.map((p, i) => (
        <Person key={i} pose={p.pose} skin={p.skin} hair={p.hair} outfit={p.outfit} flip={p.flip} className={`w-auto ${p.h} drop-shadow-[0_12px_20px_rgba(0,0,0,0.35)]`} />
      ))}
    </div>
  );
}

const MINI_CAST: Array<{
  pose: "walk" | "stand" | "wave" | "point";
  skin: "s1" | "s2" | "s3" | "s4" | "s5";
  hair: "short" | "curly" | "bun" | "long" | "hijab";
}> = [
  { pose: "wave", skin: "s2", hair: "curly" },
  { pose: "point", skin: "s5", hair: "short" },
  { pose: "stand", skin: "s1", hair: "hijab" },
];

export function MiniPeopleBand({ className }: { className?: string }) {
  return (
    <div className={`pointer-events-none flex items-end justify-center gap-5 ${className ?? ""}`} aria-hidden>
      {MINI_CAST.map((p, i) => (
        <Person key={i} pose={p.pose} skin={p.skin} hair={p.hair} outfit={OUTFITS[i % OUTFITS.length]} className="h-20 w-auto sm:h-24" />
      ))}
    </div>
  );
}

export function ClosingFigures() {
  return (
    <>
      <Person
        pose="wave"
        skin="s1"
        hair="curly"
        outfit="white"
        pants="#3a1030"
        className="pointer-events-none absolute bottom-0 left-[4%] hidden h-40 w-auto opacity-90 lg:block"
      />
      <Person
        pose="cheer"
        skin="s5"
        hair="short"
        outfit="white"
        pants="#3a1030"
        flip
        className="pointer-events-none absolute bottom-0 right-[4%] hidden h-40 w-auto opacity-90 lg:block"
      />
    </>
  );
}

export function MentorScene({ className }: { className?: string }) {
  return (
    <div className={`relative flex items-end justify-center gap-2 ${className ?? ""}`} aria-hidden>
      <Person pose="point" skin="s4" hair="short" outfit="var(--fuchsia-blast)" className="h-36 w-auto sm:h-44" />
      <Person pose="sit" skin="s1" hair="long" outfit="var(--sunshine-orange)" className="h-28 w-auto translate-y-2 sm:h-32" />
      <SpeechBubble className="absolute -top-2 left-[38%] h-12 w-16 -translate-x-1/2 sm:h-14 sm:w-20" />
    </div>
  );
}

export function CollabScene({ className }: { className?: string }) {
  return (
    <div className={`relative flex items-end justify-center ${className ?? ""}`} aria-hidden>
      <Person pose="highfive" skin="s2" hair="curly" outfit="var(--fuchsia-blast)" className="h-32 w-auto sm:h-40" />
      <Person pose="highfive" skin="s5" hair="short" outfit="var(--citrus-lime)" flip className="-ml-6 h-32 w-auto sm:h-40" />
      <span
        aria-hidden
        className="absolute left-1/2 top-[18%] h-3 w-3 -translate-x-1/2 rounded-full"
        style={{ background: "var(--tropical-mango)", boxShadow: "0 0 16px var(--tropical-mango)" }}
      />
    </div>
  );
}

export function CelebrateScene({ className }: { className?: string }) {
  return (
    <div className={`relative flex items-end justify-center ${className ?? ""}`} aria-hidden>
      <Confetti className="absolute -top-4 left-1/2 h-28 w-40 -translate-x-1/2" />
      <Person pose="cheer" skin="s3" hair="bun" outfit="var(--fuchsia-blast)" className="relative h-36 w-auto sm:h-44" />
      <GroundShadow className="absolute -bottom-1 left-1/2 h-3 w-20 -translate-x-1/2" />
    </div>
  );
}

export function StudyScene({ className }: { className?: string }) {
  return (
    <div className={`relative flex items-end justify-center gap-3 ${className ?? ""}`} aria-hidden>
      <Person pose="sit" skin="s2" hair="hijab" outfit="var(--juicy-plum)" className="h-32 w-auto sm:h-40" />
      <Book className="mb-6 h-10 w-16 sm:mb-8 sm:h-12 sm:w-20" />
      <Plant className="mb-2 h-10 w-10 sm:h-12 sm:w-12" />
    </div>
  );
}

export function CommunityScene({ className }: { className?: string }) {
  const cast: Array<{ pose: "stand" | "wave"; skin: "s1" | "s2" | "s3" | "s4" | "s5"; hair: "short" | "curly" | "bun" | "long" | "hijab"; outfit: string }> = [
    { pose: "stand", skin: "s1", hair: "long", outfit: "var(--neon-pink)" },
    { pose: "wave", skin: "s4", hair: "curly", outfit: "var(--sunshine-orange)" },
    { pose: "stand", skin: "s3", hair: "hijab", outfit: "var(--fuchsia-blast)" },
  ];
  return (
    <div className={`relative flex items-end justify-center -space-x-3 ${className ?? ""}`} aria-hidden>
      {cast.map((p, i) => (
        <Person key={i} {...p} className={`w-auto ${i === 1 ? "h-32 sm:h-40" : "h-24 sm:h-32"}`} />
      ))}
    </div>
  );
}
