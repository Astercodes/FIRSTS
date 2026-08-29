import Link from "next/link";

const AUDIENCE_LINKS = [
  { label: "Partner-school students", href: "/for/partner-schools" },
  { label: "Recent grads & professionals", href: "/for/professionals" },
  { label: "Independent students", href: "/for/independent-students" },
  { label: "Career centers", href: "/for/career-centers" },
  { label: "Institutions", href: "/for/institutions" },
  { label: "Employers", href: "/for/employers" },
  { label: "Facilitators", href: "/for/facilitators" },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 border-b border-ink/10 pb-8 sm:justify-start">
          {AUDIENCE_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs font-medium text-ink/50 transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-6 pt-8 sm:flex-row">
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
            Based on <em>FIRSTS: Career Launch &amp; Foundation</em> by
            Ayomide Ayeni. A guidance tool, not a licensed counselor.
          </p>
          <p className="text-xs text-ink/45">
            © {new Date().getFullYear()} FIRSTS ·{" "}
            <Link href="/admin/facilitators" className="text-ink/35 underline decoration-ink/15 underline-offset-2 hover:text-ink/60">
              Admin
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
