"use client";

import { motion } from "framer-motion";
import { useAdminFacilitatorRoster } from "@/lib/adminFacilitatorData";
import { AdminImpactSummary } from "@/components/admin/AdminImpactSummary";
import { AdminApplicationQueue } from "@/components/admin/AdminApplicationQueue";
import { AdminCoverageView } from "@/components/admin/AdminCoverageView";
import { AdminResourceFlags } from "@/components/admin/AdminResourceFlags";
import { AdminMatchingTool } from "@/components/admin/AdminMatchingTool";
import { AdminFacilitatorDirectory } from "@/components/admin/AdminFacilitatorDirectory";

export function AdminFacilitatorsView() {
  const roster = useAdminFacilitatorRoster();

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <AdminImpactSummary roster={roster} />
      </motion.div>

      <AdminApplicationQueue />

      <div className="grid gap-6 lg:grid-cols-2">
        <AdminCoverageView roster={roster} />
        <AdminResourceFlags roster={roster} />
      </div>

      <AdminMatchingTool roster={roster} />

      <AdminFacilitatorDirectory roster={roster} />
    </div>
  );
}
