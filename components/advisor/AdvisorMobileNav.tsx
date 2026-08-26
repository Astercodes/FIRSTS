"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cohortsForInstitution } from "@/lib/cohortData";
import { loadAdvisor, ADVISOR_CHANGE_EVENT, MOCK_ADVISOR, type AdvisorProfile } from "@/lib/advisorStore";

export function AdvisorMobileNav() {
  const pathname = usePathname();
  const [advisor, setAdvisor] = useState<AdvisorProfile | null>(null);

  useEffect(() => {
    const sync = () => setAdvisor(loadAdvisor());
    sync();
    window.addEventListener(ADVISOR_CHANGE_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(ADVISOR_CHANGE_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const institution = advisor?.institution || MOCK_ADVISOR.institution;
  const role = advisor?.role ?? MOCK_ADVISOR.role;
  const items = [
    { label: "Overview", href: "/advisor" },
    { label: "Segmentation", href: "/advisor/segments" },
    { label: "Workload", href: "/advisor/workload" },
    { label: "Outcomes", href: "/advisor/outcomes" },
    { label: "Programming", href: "/advisor/programming" },
    { label: "Reporting", href: "/advisor/reporting" },
    { label: "Communication", href: "/advisor/communication" },
    ...(role === "Institution Admin" ? [{ label: "Campus-wide view", href: "/institution" }] : []),
    ...cohortsForInstitution(institution).map((c) => ({ label: c.name, href: `/advisor/cohorts/${c.id}` })),
  ];

  return (
    <nav className="flex gap-2 overflow-x-auto border-b border-ink/8 bg-paper px-6 py-3 lg:hidden print:hidden">
      {items.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              active
                ? "bg-ink text-paper"
                : "bg-paper-dim text-ink/60 hover:text-ink"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
