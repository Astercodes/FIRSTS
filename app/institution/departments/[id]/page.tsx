import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCohort } from "@/lib/cohortData";
import { CohortDetail } from "@/components/advisor/CohortDetail";

type Params = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { id } = await params;
  const cohort = getCohort(id);
  return { title: cohort ? `${cohort.name} | FIRSTS` : "FIRSTS" };
}

export default async function InstitutionDepartmentPage({ params }: { params: Params }) {
  const { id } = await params;
  const cohort = getCohort(id);
  if (!cohort) notFound();

  return (
    <CohortDetail
      cohort={cohort}
      backHref="/institution/departments"
      backLabel="← Departments"
    />
  );
}
