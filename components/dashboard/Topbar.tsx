import Link from "next/link";
import { MOCK_USER } from "@/lib/dashboardData";

export function Topbar() {
  const initial = MOCK_USER.firstName[0];

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-ink/8 bg-paper/80 px-6 py-4 backdrop-blur-md lg:px-10">
      <Link href="/dashboard" className="flex items-center gap-2 lg:hidden">
        <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[var(--neon-pink)] via-[var(--sunshine-orange)] to-[var(--lime-zest)]">
          <span className="font-display text-xs font-bold text-ink">F</span>
        </span>
        <span className="font-display text-lg font-semibold tracking-tight text-ink">
          FIRSTS
        </span>
      </Link>

      <p className="hidden font-display text-lg font-semibold text-ink lg:block">
        Good to see you, {MOCK_USER.firstName}.
      </p>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 rounded-full bg-paper-dim px-3 py-1.5 text-xs font-semibold text-ink/70">
          <FlameIcon className="h-3.5 w-3.5 text-[var(--sunshine-orange)]" />
          {MOCK_USER.streakDays}-day streak
        </div>
        <div
          className="flex h-9 w-9 items-center justify-center rounded-full font-display text-sm font-bold text-ink"
          style={{
            background:
              "linear-gradient(135deg, var(--neon-pink), var(--tropical-mango))",
          }}
        >
          {initial}
        </div>
      </div>
    </header>
  );
}

function FlameIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2c.5 3-2.5 4.2-2.5 7.2A2.5 2.5 0 0 0 12 11.7a2.5 2.5 0 0 0 2.5-2.5c0-1-.5-1.6-.5-1.6 2 1 3.5 3.3 3.5 5.9A5.5 5.5 0 0 1 12 19a5.5 5.5 0 0 1-5.5-5.5c0-4 3-6 3-9C9.5 3.3 10.5 2.5 12 2Z" />
    </svg>
  );
}
