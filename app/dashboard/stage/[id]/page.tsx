import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FIRSTS, CATEGORY_META } from "@/lib/dashboardData";
import { LEARN_CONTENT, COACH_MODE } from "@/lib/moduleContent";
import { WORKSHEET_SCHEMAS } from "@/lib/worksheetSchemas";
import { ModuleHeader } from "@/components/module/ModuleHeader";
import { ModuleTabs } from "@/components/module/ModuleTabs";
import { LearnTab } from "@/components/module/LearnTab";
import { DoTab } from "@/components/module/DoTab";
import { SchemaDoTab } from "@/components/module/SchemaDoTab";
import { CoachTab } from "@/components/module/CoachTab";
import { TrackTab } from "@/components/module/TrackTab";

type Params = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { id } = await params;
  const m = FIRSTS.find((f) => f.id === Number(id));
  return { title: m ? `${m.title} — FIRSTS` : "FIRSTS" };
}

export default async function ModulePage({ params }: { params: Params }) {
  const { id } = await params;
  const m = FIRSTS.find((f) => f.id === Number(id));
  const content = m ? LEARN_CONTENT[m.id] : undefined;
  if (!m || !content) notFound();

  const color = CATEGORY_META[m.category].color;
  const mode = COACH_MODE[m.id];

  return (
    <div className="mx-auto max-w-3xl">
      <ModuleHeader module={m} />
      <ModuleTabs
        color={color}
        panels={{
          learn: <LearnTab content={content} color={color} />,
          do:
            m.id === 1 ? (
              <DoTab color={color} />
            ) : (
              <SchemaDoTab fields={WORKSHEET_SCHEMAS[m.id]} color={color} />
            ),
          coach: (
            <CoachTab
              color={color}
              mode={mode}
              moduleTitle={m.title}
              moduleDefinition={content.definition}
            />
          ),
          track: <TrackTab module={m} successSignal={content.successSignal} color={color} />,
        }}
      />
    </div>
  );
}
