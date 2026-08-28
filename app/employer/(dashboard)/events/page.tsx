import type { Metadata } from "next";
import { EventsView } from "@/components/employer/EventsView";

export const metadata: Metadata = { title: "Events | FIRSTS" };

export default function EmployerEventsPage() {
  return <EventsView />;
}
