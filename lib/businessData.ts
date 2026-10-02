/**
 * Placeholder structure for FIRSTS Business, pending the real curriculum documents.
 * Mirrors the shape of the Career product's stages closely enough to swap in real
 * content later without reworking the portal or marketing pages around it.
 */

export type BusinessTrackId =
  | "idea"
  | "foundations"
  | "building"
  | "marketing"
  | "operations"
  | "pitching";

export type BusinessTrack = {
  id: BusinessTrackId;
  order: number;
  title: string;
  shortLabel: string;
  blurb: string;
  focusAreas: string[];
  color: string;
};

export const BUSINESS_TRACKS: BusinessTrack[] = [
  {
    id: "idea",
    order: 1,
    title: "Idea & Problem Validation",
    shortLabel: "Track 1",
    blurb: "Find a problem worth solving and test whether anyone actually has it, before building anything.",
    focusAreas: ["Problem discovery", "Customer interviews", "Market signals"],
    color: "var(--neon-pink)",
  },
  {
    id: "foundations",
    order: 2,
    title: "Business Fundamentals",
    shortLabel: "Track 2",
    blurb: "The core vocabulary and models every founder needs: business models, unit economics, and legal basics.",
    focusAreas: ["Business models", "Unit economics", "Legal & structure basics"],
    color: "var(--sunshine-orange)",
  },
  {
    id: "building",
    order: 3,
    title: "Building the Thing",
    shortLabel: "Track 3",
    blurb: "Turn an idea into a real prototype, offer, or MVP, and get it in front of real people fast.",
    focusAreas: ["Prototyping", "MVPs", "Early offers"],
    color: "var(--citrus-lime)",
  },
  {
    id: "marketing",
    order: 4,
    title: "Marketing & Sales",
    shortLabel: "Track 4",
    blurb: "Find your first customers and learn to sell, without a marketing budget or a sales team.",
    focusAreas: ["Positioning", "Early customer acquisition", "Sales conversations"],
    color: "var(--fuchsia-blast)",
  },
  {
    id: "operations",
    order: 5,
    title: "Operations & Finance",
    shortLabel: "Track 5",
    blurb: "Keep the business running: cash flow, basic systems, and the operational habits that prevent chaos.",
    focusAreas: ["Cash flow basics", "Simple systems", "Early hiring & delegation"],
    color: "var(--berry-burst)",
  },
  {
    id: "pitching",
    order: 6,
    title: "Pitching & Fundraising",
    shortLabel: "Track 6",
    blurb: "Tell the story of the business clearly, whether that's to a customer, a partner, or an investor.",
    focusAreas: ["Pitch narrative", "Fundraising basics", "Investor conversations"],
    color: "var(--tropical-mango)",
  },
];

export function businessTrack(id: BusinessTrackId): BusinessTrack | undefined {
  return BUSINESS_TRACKS.find((t) => t.id === id);
}

export const MOCK_BUSINESS_USER = {
  firstName: "Alex",
};
