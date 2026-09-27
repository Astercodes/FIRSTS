/** One intentional placement per photograph. See docs/contextual-imagery.md. */
export const EDITORIAL_IMAGES = {
  "growth": {
    "src": "/images/firsts-growth.webp",
    "alt": "A citrus-colored sculptural staircase rising through an open arch",
    "caption": "Small steps. Expansive possibilities."
  },
  "reflection": {
    "src": "/images/firsts-reflection.webp",
    "alt": "A student reflecting in a notebook in a sunlit library",
    "caption": "Make space to discover yourself."
  },
  "making": {
    "src": "/images/firsts-making.webp",
    "alt": "Two collaborators developing a physical design model",
    "caption": "Learn by doing."
  },
  "school": {
    "src": "/images/firsts-next-chapter.webp",
    "alt": "Two students walking together through a campus atrium",
    "caption": "Your campus. Your next chapter."
  },
  "community": {
    "src": "/images/firsts-community.webp",
    "alt": "Students exchanging ideas around a table with a mentor",
    "caption": "You won’t make the leap alone."
  },
  "independent": {
    "src": "/images/firsts-independent.webp",
    "alt": "An open notebook, planning cards and study tools on a sunlit desk",
    "caption": "Your space. Your pace."
  },
  "careers": {
    "src": "/images/firsts-careers.webp",
    "alt": "A career advisor and student discussing a personal development plan",
    "caption": "The right conversation, at the right time."
  },
  "employers": {
    "src": "/images/firsts-employers.webp",
    "alt": "A candidate demonstrating a working prototype to a hiring manager",
    "caption": "Potential you can see in practice."
  },
  "facilitators": {
    "src": "/images/firsts-facilitators.webp",
    "alt": "A facilitator guiding participants through a collaborative workshop",
    "caption": "Create the conditions for discovery."
  },
  "institutions": {
    "src": "/images/firsts-institutions.webp",
    "alt": "An interconnected university learning commons with study spaces and a library",
    "caption": "A connected environment for becoming."
  },
  "professionals": {
    "src": "/images/firsts-professionals.webp",
    "alt": "An early-career professional discussing her project work with a colleague",
    "caption": "Build on what you’re becoming."
  },
  "leap": {
    "src": "/images/firsts-first-leap.webp",
    "alt": "Two paper paths lead from a journal toward career exploration and a business prototype",
    "caption": "Explore the possibilities before you choose."
  },
  "skills": {
    "src": "/images/firsts-skills.webp",
    "alt": "Tools for reflection, planning, listening and wellbeing arranged on an ivory surface",
    "caption": "More than one way to grow."
  },
  "evidence": {
    "src": "/images/firsts-evidence.webp",
    "alt": "A project portfolio with sketches, photographs and a completed physical model",
    "caption": "Progress made tangible."
  },
  "partnership": {
    "src": "/images/firsts-partnership.webp",
    "alt": "A welcoming table prepared with two notebooks and a shared planning sheet",
    "caption": "Let’s shape what comes next."
  },
  "kit": {
    "src": "/images/firsts-facilitator-kit.webp",
    "alt": "A facilitator’s binder, activity cards, timing tools and workshop materials",
    "caption": "Prepared to help others grow."
  },
  "alumni": {
    "src": "/images/firsts-alumni.webp",
    "alt": "Students and alumni exchanging ideas in a university courtyard",
    "caption": "Experience, shared across generations."
  },
  "exposure": {
    "src": "/images/firsts-career-exposure.webp",
    "alt": "Students exploring a materials laboratory with a working professional",
    "caption": "Discover the work by stepping inside it."
  },
  "experiment": {
    "src": "/images/firsts-business-experiment.webp",
    "alt": "An aspiring founder getting customer feedback on a packaging prototype",
    "caption": "A small experiment. A useful discovery."
  }
} as const;

export type ShotKind = keyof typeof EDITORIAL_IMAGES;
