"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PortfolioView, portfolioSlug } from "@/components/dashboard/PortfolioView";
import { loadProfile } from "@/lib/profileStore";
import { MOCK_USER } from "@/lib/dashboardData";

export function PublicPortfolioGate({ slug }: { slug: string }) {
  const [status, setStatus] = useState<"checking" | "available" | "unavailable">("checking");

  useEffect(() => {
    function sync() {
      const profile = loadProfile();
      const ownSlug = portfolioSlug(profile?.name || MOCK_USER.firstName);
      setStatus(profile?.portfolioPublic && ownSlug === slug ? "available" : "unavailable");
    }
    sync();
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, [slug]);

  if (status === "checking") return null;

  if (status === "unavailable") {
    return (
      <div className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 text-center">
        <p className="font-display text-xl font-semibold text-ink">This portfolio isn&apos;t public.</p>
        <p className="mt-2 text-sm leading-relaxed text-ink/55">
          Either this link is wrong, or the owner hasn&apos;t turned on public sharing for their
          portfolio.
        </p>
        <Link
          href="/dashboard/portfolio"
          className="mt-6 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-ink/85"
        >
          Go to your portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper-dim px-4 py-10 sm:px-8">
      <PortfolioView publicMode />
    </div>
  );
}
