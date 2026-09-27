import Link from "next/link";
import { Logo } from "@/components/brand/Logo";

export function AdminTopbar() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-ink/8 bg-paper/80 px-6 py-4 backdrop-blur-md lg:px-10 print:hidden">
      <Link href="/admin/facilitators" className="flex items-center gap-2 lg:hidden">
        <Logo />
      </Link>

      <div className="hidden lg:block">
        <p className="font-display text-lg font-semibold text-ink">Facilitator operations</p>
        <p className="text-xs text-ink/45">Internal, not visible to facilitators or students</p>
      </div>

      <span className="rounded-full bg-paper-dim px-3 py-1.5 text-xs font-semibold text-ink/50">
        FIRSTS team
      </span>
    </header>
  );
}
