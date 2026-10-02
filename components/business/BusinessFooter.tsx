import Link from "next/link";
import { Logo } from "@/components/brand/Logo";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "FIRSTS Business", href: "/business" },
      { label: "Tracks", href: "/business#tracks" },
      { label: "FIRSTS Career", href: "/" },
    ],
  },
  {
    title: "Who it's for",
    links: [
      { label: "Aspiring founders", href: "/business/for/founders" },
      { label: "Institutions & incubators", href: "/business/for/institutions" },
      { label: "Mentors & investors", href: "/business/for/mentors" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Become a Mentor", href: "/business/for/mentors" },
      { label: "Partner With Us", href: "/request-demo?for=business" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our Vision", href: "/business#top" },
      { label: "How it Works", href: "/business#tracks" },
      { label: "Contact", href: "/request-demo?for=business" },
    ],
  },
];

const LEGAL = ["Privacy", "Terms", "Accessibility", "Help"];

export function BusinessFooter() {
  return (
    <footer className="border-t border-ink/10 bg-paper px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 border-b border-ink/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_repeat(4,1fr)]">
          <div>
            <div className="flex items-center gap-2">
              <Logo tone="dark" />
            </div>
            <p className="mt-3 max-w-[220px] text-sm text-ink/50">
              One first can begin a business of your own.
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
                    <Link href={l.href} className="text-sm text-ink/60 transition-colors hover:text-ink">
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
          <p className="text-xs text-ink/45">© {new Date().getFullYear()} FIRSTS Business</p>
        </div>
      </div>
    </footer>
  );
}
