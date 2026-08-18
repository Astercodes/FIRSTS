import Link from "next/link";

export function ComingSoon({
  eyebrow,
  title,
  color,
}: {
  eyebrow: string;
  title: string;
  color: string;
}) {
  return (
    <main className="relative isolate flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-mesh-dark px-6 text-center text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 animate-blob-drift rounded-full opacity-30 blur-[120px]"
        style={{ background: color }}
      />
      <div className="noise-layer" aria-hidden />

      <div className="relative z-10 max-w-md">
        <p
          className="mb-4 text-xs font-semibold uppercase tracking-[0.25em]"
          style={{ color }}
        >
          {eyebrow}
        </p>
        <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-paper/60">
          This flow is being built next. For now, head back and pick a
          different path or return home.
        </p>
        <div className="mt-9 flex items-center justify-center gap-4">
          <Link
            href="/onboarding"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-paper/90 transition-colors hover:border-white/40 hover:bg-white/5"
          >
            ← Choose a different path
          </Link>
          <Link
            href="/"
            className="rounded-full bg-paper px-6 py-3 text-sm font-semibold text-ink transition-transform duration-300 hover:scale-[1.04]"
          >
            Home
          </Link>
        </div>
      </div>
    </main>
  );
}
