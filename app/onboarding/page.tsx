import Link from "next/link";
import type { Metadata } from "next";
import { PathCard } from "@/components/onboarding/PathCard";
import { SchoolIcon, CompassIcon, BriefcaseIcon } from "@/components/onboarding/PathIcons";

export const metadata: Metadata = {
  title: "Who are you? | FIRSTS",
};

export default function OnboardingSelector() {
  return (
    <main className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-mesh-dark px-6 py-8 text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 h-[420px] w-[420px] animate-blob-drift rounded-full opacity-40 blur-[110px]"
        style={{ background: "var(--berry-burst)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-[380px] w-[380px] animate-blob-drift-slow rounded-full opacity-40 blur-[110px]"
        style={{ background: "var(--tropical-mango)" }}
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
          href="/"
          className="text-sm font-medium text-paper/60 transition-colors hover:text-paper"
        >
          ← Back to home
        </Link>
      </header>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center py-16">
        <div className="mb-14 max-w-xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--lime-zest)]">
            Before we begin
          </p>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Who are you?
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-paper/60">
            This decides how you sign in and what your home looks like,
            nothing else. You can always tell us more later.
          </p>
        </div>

        <div className="grid w-full max-w-5xl gap-5 md:grid-cols-3">
          <PathCard
            href="/onboarding/school"
            tag="Path A"
            title="I'm a student at a partner school"
            body="Sign in with your school email. If your school uses SSO you're in instantly. Otherwise we'll match your roster invite."
            meta="Auto-joined to your cohort"
            color="var(--neon-pink)"
            icon={<SchoolIcon className="h-6 w-6" />}
            delay={0.05}
          />
          <PathCard
            href="/onboarding/independent"
            tag="Path B"
            title="I'm exploring on my own"
            body="Student, recent grad, career-changer, no institution required. Sign up in under a minute and start with Core Values Audit."
            meta="Email, Google, Apple, or LinkedIn"
            color="var(--sunshine-orange)"
            icon={<CompassIcon className="h-6 w-6" />}
            delay={0.15}
          />
          <PathCard
            id="advisor"
            href="/onboarding/advisor"
            tag="Path C"
            title="I'm an advisor or career center"
            body="Institution-domain email required. Get a cohort dashboard, roster tools, and advisor visibility, never raw student reflections."
            meta="Requires institution verification"
            color="var(--citrus-lime)"
            icon={<BriefcaseIcon className="h-6 w-6" />}
            delay={0.25}
          />
        </div>

        <p className="relative z-10 mt-14 text-sm text-paper/50">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-paper underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
          >
            Log in
          </Link>
        </p>
      </div>
    </main>
  );
}
