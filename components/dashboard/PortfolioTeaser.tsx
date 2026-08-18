import Link from "next/link";

export function PortfolioTeaser() {
  return (
    <div className="rounded-3xl border border-ink/8 bg-white p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
        Career Portfolio
      </p>
      <p className="mt-2 text-sm leading-relaxed text-ink/60">
        Your completed values, purpose, and vision statements auto-compile
        into a shareable one-pager.
      </p>
      <Link
        href="/dashboard/portfolio"
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline decoration-ink/20 underline-offset-4 transition-colors hover:decoration-ink"
      >
        Open portfolio →
      </Link>
    </div>
  );
}
