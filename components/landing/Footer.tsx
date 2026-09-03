import Link from "next/link";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "My FIRSTS", href: "/dashboard/portfolio" },
      { label: "Development Areas", href: "/development-areas" },
      { label: "Experiences", href: "/#explore" },
      { label: "Career Exploration", href: "/first-leap#career" },
      { label: "Business Exploration", href: "/first-leap#business" },
      { label: "First Leap", href: "/first-leap" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "First Leap: Career", href: "/first-leap#career" },
      { label: "First Leap: Business", href: "/first-leap#business" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Become a Mentor", href: "/first-leap#get-involved" },
      { label: "Become a Facilitator", href: "/first-leap#get-involved" },
      { label: "Partner With Us", href: "/request-demo" },
      { label: "For Schools & Universities", href: "/for/partner-schools" },
      { label: "For Employers", href: "/for/employers" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our Vision", href: "/#top" },
      { label: "How FIRSTS Works", href: "/#pillars" },
      { label: "Impact", href: "/#progress" },
      { label: "Community", href: "/dashboard/community/discover" },
      { label: "Contact", href: "/request-demo" },
    ],
  },
];

const LEGAL = ["Privacy", "Terms", "Accessibility", "Help"];

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 border-b border-ink/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_repeat(4,1fr)]">
          <div>
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
            <p className="mt-3 max-w-[220px] text-sm text-ink/50">
              One first can begin something bigger.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/40">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-ink/60 transition-colors hover:text-ink"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-b border-ink/10 py-6 sm:justify-start">
          {LEGAL.map((label) => (
            <span key={label} className="text-xs font-medium text-ink/35">
              {label}
            </span>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-4 pt-8 sm:flex-row sm:justify-between">
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
