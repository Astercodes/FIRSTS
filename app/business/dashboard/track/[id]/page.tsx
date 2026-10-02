import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TrackView } from "@/components/business/portal/TrackView";
import { BUSINESS_TRACKS, businessTrack, type BusinessTrackId } from "@/lib/businessData";

export function generateStaticParams() {
  return BUSINESS_TRACKS.map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const track = businessTrack(id as BusinessTrackId);
  return { title: track ? `${track.title} | FIRSTS Business` : "Track | FIRSTS Business" };
}

export default async function BusinessTrackPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const track = businessTrack(id as BusinessTrackId);
  if (!track) notFound();
  return <TrackView track={track} />;
}
