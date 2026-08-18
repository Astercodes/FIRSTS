import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FIRSTS, CATEGORY_META } from "@/lib/dashboardData";
import { CORE_VALUES_AUDIT_LEARN } from "@/lib/moduleContent";
import { ModuleHeader } from "@/components/module/ModuleHeader";
import { ModuleTabs } from "@/components/module/ModuleTabs";
import { LearnTab } from "@/components/module/LearnTab";
import { DoTab } from "@/components/module/DoTab";
import { CoachTab } from "@/components/module/CoachTab";
import { TrackTab } from "@/components/module/TrackTab";
import { ComingSoonPanel } from "@/components/dashboard/ComingSoonPanel";

type Params = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { id } = await params;
  const m = FIRSTS.find((f) => f.id === Number(id));
  return { title: m ? `${m.title} — FIRSTS` : "FIRSTS" };
}

export default async function ModulePage({ params }: { params: Params }) {
  const { id } = await params;
  const m = FIRSTS.find((f) => f.id === Number(id));
  if (!m) notFound();

  const color = CATEGORY_META[m.category].color;

  if (m.id !== 1) {
    return (
      <div className="mx-auto max-w-3xl">
        <ModuleHeader module={m} />
        <ComingSoonPanel
          eyebrow="Coming soon"
          title="This FIRST's full experience is next up."
          body="We're building the module content library one FIRST at a time — Core Values Audit is live now as the reference build."
          color={color}
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <ModuleHeader module={m} />
      <ModuleTabs
        color={color}
        panels={{
          learn: <LearnTab content={CORE_VALUES_AUDIT_LEARN} color={color} />,
          do: <DoTab color={color} />,
          coach: <CoachTab color={color} />,
          track: (
            <TrackTab
              module={m}
              successSignal={CORE_VALUES_AUDIT_LEARN.successSignal}
              color={color}
            />
          ),
        }}
      />
    </div>
  );
}
