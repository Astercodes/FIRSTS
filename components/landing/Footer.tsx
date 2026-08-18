export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[var(--neon-pink)] via-[var(--sunshine-orange)] to-[var(--lime-zest)]">
            <span className="font-display text-[10px] font-bold text-ink">
              F
            </span>
          </span>
          <span className="font-display text-sm font-semibold text-ink">
            FIRSTS
          </span>
        </div>
        <p className="text-xs text-ink/45">
          Based on <em>FIRSTS: Career Launch &amp; Foundation</em> by Ayomide
          Ayeni. A guidance tool — not a licensed counselor.
        </p>
        <p className="text-xs text-ink/45">
          © {new Date().getFullYear()} FIRSTS
        </p>
      </div>
    </footer>
  );
}
