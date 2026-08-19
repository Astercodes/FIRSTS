import Link from "next/link";
import type { ReactNode } from "react";

export function AuthShell({
  tag,
  title,
  subtitle,
  color,
  width = "md",
  children,
  footer,
}: {
  tag: string;
  title: string;
  subtitle: string;
  color: string;
  width?: "md" | "lg";
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <main className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-mesh-dark px-6 py-8 text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 animate-blob-drift rounded-full opacity-30 blur-[130px]"
        style={{ background: color }}
      />
      <div className="noise-layer" aria-hidden />

      <header className="relative z-10 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[var(--neon-pink)] via-[var(--sunshine-orange)] to-[var(--lime-zest)]">
            <span className="font-display text-xs font-bold text-ink">F</span>
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            FIRSTS
          </span>
        </Link>
        <Link
          href="/onboarding"
          className="text-sm font-medium text-paper/60 transition-colors hover:text-paper"
        >
          ← Choose a different path
        </Link>
      </header>

      <div className="relative z-10 flex flex-1 items-center justify-center py-12">
        <div
          className={`w-full ${width === "lg" ? "max-w-xl" : "max-w-md"}`}
        >
          <div className="mb-8 text-center">
            <span
              className="mb-4 inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider"
              style={{
                color,
                background: `color-mix(in oklab, ${color} 16%, transparent)`,
              }}
            >
              {tag}
            </span>
            <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h1>
            <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-paper/60">
              {subtitle}
            </p>
          </div>

          <div className="glass-dark rounded-[28px] p-7 sm:p-8">{children}</div>

          {footer ?? (
            <p className="mt-6 text-center text-sm text-paper/50">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-paper underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
              >
                Log in
              </Link>
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
