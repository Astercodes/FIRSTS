export type LearnContent = {
  definition: string;
  whyItMatters: string;
  whenWhoWhere: { label: string; body: string }[];
  howItWorks: string[];
  tools: string[];
  scenario: { title: string; body: string };
  pitfalls: string[];
  successSignal: string;
  milestoneTies: number[];
};

export type CoachMode = "reflective" | "research" | "hybrid" | "synthesis";

export const COACH_MODE: Record<number, CoachMode> = {
  1: "reflective",
  2: "hybrid",
  3: "reflective",
  4: "reflective",
  5: "hybrid",
  6: "reflective",
  7: "hybrid",
  8: "research",
  9: "research",
  10: "research",
  11: "research",
  12: "synthesis",
  13: "hybrid",
  14: "reflective",
  15: "reflective",
  16: "reflective",
  17: "reflective",
  18: "reflective",
};

export const LEARN_CONTENT: Record<number, LearnContent> = {
  1: {
    definition:
      "A structured pass through your own values — brainstorming widely, then narrowing to the handful that actually govern your decisions, so you can name them before a job, boss, or offer tests them.",
    whyItMatters:
      "Most people can't name their values until one gets violated — a toxic manager, a mission they can't stand behind, a schedule that eats their life. Naming them first turns a values conflict from a slow-building resentment into a clear, early signal you know how to act on.",
    whenWhoWhere: [
      { label: "When", body: "Before you evaluate any offer, and again whenever a role starts to feel wrong and you can't say why." },
      { label: "Who", body: "Just you for the brainstorm — but a mentor, peer, or family member is useful for the reality-check pass." },
      { label: "Where", body: "Somewhere unhurried. This isn't a 10-minute form — the narrowing step needs room to sit with tradeoffs." },
    ],
    howItWorks: [
      "Brainstorm widely — write down every value that comes to mind, no editing yet.",
      "Narrow to your top 5 by asking which ones you'd defend even when inconvenient.",
      "Narrow again to your top 3 non-negotiables — the ones a job would have to violate before you'd leave.",
      "For each non-negotiable, write what a violation would actually look like day-to-day.",
      "Name your ethical boundaries — the lines you won't cross regardless of incentive.",
      "Note where your values might conflict with each other, and how you'd prioritize.",
    ],
    tools: ["Values card sort", "O*NET Work Values", "Journaling prompt set", "Peer interview script"],
    scenario: {
      title: "The offer that looked perfect on paper",
      body: "Amara took a role at a fast-growing startup for the title bump and the pay. Four months in, she realized the culture rewarded working weekends as a badge of honor — a direct hit on the \"balance\" value she'd never actually written down. She hadn't lacked options; she'd lacked a named list to check the offer against.",
    },
    pitfalls: [
      "Listing values that sound good on a resume, not ones you'd actually defend",
      "Stopping at vague words like \"growth\" or \"success\" without defining what they mean in practice",
      "Skipping the conflict-awareness step — most values collide with each other eventually",
      "Treating this as a one-time exercise instead of something you revisit as your life changes",
    ],
    successSignal:
      "You can state your top 3 non-negotiables out loud, in one sentence each, without checking your notes — and you can describe exactly what a violation of each one would look like.",
    milestoneTies: [2, 4, 12],
  },

  2: {
    definition:
      "A concrete picture of where you're headed — a Future Self Letter, a one-line vision statement, and a set of short/mid/long-term goals connected by a stepping-stones path.",
    whyItMatters:
      "\"I want a good career\" doesn't point anywhere. A specific vision — even one you'll revise — gives you a filter for opportunities: does this move me toward the picture, or just away from where I am now?",
    whenWhoWhere: [
      { label: "When", body: "Early, and then again every year — the manual treats this as a living document, not a one-time worksheet." },
      { label: "Who", body: "You draft it alone, then test it out loud with someone who'll ask hard questions." },
      { label: "Where", body: "Anywhere you can write without interruption for 45–60 minutes." },
    ],
    howItWorks: [
      "Write a letter from your future self, 5 years out, describing an ordinary workday.",
      "Pull one sentence out of that letter and sharpen it into a vision statement.",
      "Break the vision into short-term (this year), mid-term (2–3 years), and long-term (5+ years) goals.",
      "Map stepping stones — the specific moves that connect where you are now to each goal.",
      "Pressure-test the vision against your Core Values Audit for conflicts.",
    ],
    tools: ["Future Self Letter template", "Stepping-stones table", "LinkedIn Alumni tool", "Vision board (optional)"],
    scenario: {
      title: "Two offers, one vision",
      body: "Deji had two offers: a prestigious consulting firm and a smaller product team. His vision statement — \"building things people use daily, on a team small enough to see my fingerprints on the outcome\" — made the choice almost boring. Without it, he'd have picked on prestige alone.",
    },
    pitfalls: [
      "Writing a vision that's really someone else's — a parent's or professor's idea of success",
      "Making it so specific (\"VP by 30\") that it breaks the first time reality shifts",
      "Skipping the stepping-stones step, so the vision stays a wish instead of a plan",
    ],
    successSignal:
      "You can describe an ordinary workday five years from now in specific, sensory detail — and name the next concrete step that moves you toward it.",
    milestoneTies: [1, 12, 13],
  },

  3: {
    definition:
      "A search through your own peak experiences — moments of full engagement or pride — for the recurring theme that becomes your purpose statement.",
    whyItMatters:
      "Purpose isn't found by thinking harder about the future; it's found by noticing patterns in your past. This FIRST turns scattered good memories into one sentence you can actually use to evaluate a role.",
    whenWhoWhere: [
      { label: "When", body: "Whenever you feel busy but not fulfilled — a common signal purpose and daily work have drifted apart." },
      { label: "Who", body: "Solo reflection, though a close friend can often spot your pattern faster than you can." },
      { label: "Where", body: "Somewhere reflective — this exercise resists being rushed between meetings." },
    ],
    howItWorks: [
      "List 6–8 peak experiences — moments you felt fully engaged, proud, or \"in the zone.\"",
      "For each, note what you were actually doing, not just the outcome.",
      "Look across all of them for a recurring theme — a verb, not just a topic.",
      "Draft a one-sentence purpose statement built around that theme.",
      "Test the statement against a role or project you're currently doing.",
    ],
    tools: ["Peak experience worksheet", "Ikigai framework", "Purpose statement examples"],
    scenario: {
      title: "The theme hiding in plain sight",
      body: "Kemi's peak experiences ranged from tutoring a cousin, to fixing a broken team process at an internship, to redesigning her church's sign-up sheet. On paper, unrelated. The theme underneath all three: turning confusion into a system someone else could follow.",
    },
    pitfalls: [
      "Choosing experiences that sound impressive instead of ones that actually felt alive",
      "Landing on a theme that's really a job title (\"purpose: be a doctor\") instead of a verb",
      "Writing a purpose statement so broad it could apply to anyone",
    ],
    successSignal:
      "Your purpose statement names a specific verb or pattern — not a job title — and you can point to three past moments that prove it.",
    milestoneTies: [1, 4, 12],
  },

  4: {
    definition:
      "A short, honest narrative of who you are professionally — identity, strengths, and value proposition compressed into 3–5 sentences, with variants for LinkedIn, interviews, and networking.",
    whyItMatters:
      "Without a written narrative, you improvise your introduction every time — which means it drifts, gets generic, or undersells you. A tested narrative means you never freeze when someone asks \"so, what do you do?\"",
    whenWhoWhere: [
      { label: "When", body: "Before any interview, networking event, or profile update — and revisited whenever your direction shifts." },
      { label: "Who", body: "Draft it yourself, then read it aloud to someone who knows you professionally and ask if it sounds like you." },
      { label: "Where", body: "Wherever you can say it out loud a few times — this narrative needs to survive being spoken, not just read." },
    ],
    howItWorks: [
      "List your top 3 strengths and the evidence behind each one.",
      "Write your value proposition — what you make possible for a team that's hard to replace.",
      "Draft a 3–5 sentence narrative combining identity, strengths, and value proposition.",
      "Adapt it into a LinkedIn headline/about version.",
      "Adapt it into a 30-second interview version and a networking-event version.",
    ],
    tools: ["Personal brand worksheet", "LinkedIn headline formula", "Elevator pitch template"],
    scenario: {
      title: "The elevator pitch that finally landed",
      body: "Tunde used to answer \"what do you do?\" with his job title and company — forgettable. After this FIRST, his answer became \"I turn messy operations data into decisions non-technical teams can act on.\" People started asking follow-up questions instead of nodding politely.",
    },
    pitfalls: [
      "Listing responsibilities instead of value — what you did versus what changed because of you",
      "Writing one generic version instead of adapting tone per context",
      "Using buzzwords (\"synergy,\" \"passionate self-starter\") that say nothing specific",
    ],
    successSignal:
      "You can say your narrative out loud, unscripted, in under 30 seconds — and it sounds like a specific person, not a template.",
    milestoneTies: [1, 3, 5],
  },

  5: {
    definition:
      "An inventory of your hard and soft skills, each rated by confidence and backed by a specific piece of evidence — not a bullet list of adjectives.",
    whyItMatters:
      "\"I'm a strong communicator\" means nothing to a hiring manager without proof. This FIRST forces every claimed strength to earn its place with a real example, which is exactly what interviews and resumes actually reward.",
    whenWhoWhere: [
      { label: "When", body: "Before updating a resume or prepping for interviews, and again after any project that stretched you." },
      { label: "Who", body: "You lead it, but pulling in a manager or peer for a second opinion catches blind spots." },
      { label: "Where", body: "Anywhere with your resume or portfolio nearby for reference." },
    ],
    howItWorks: [
      "List every hard skill (technical, measurable) you have.",
      "List every soft skill (communication, leadership, adaptability) you have.",
      "Rate your confidence in each, 1–5.",
      "Attach one specific piece of evidence per skill — a project, metric, or story.",
      "Flag your top 5 most defensible strengths for your Personal Brand Narrative.",
    ],
    tools: ["Skill inventory table", "LinkedIn Skills import", "STAR story method"],
    scenario: {
      title: "The skill nobody asked about — until they did",
      body: "Ngozi almost left \"conflict mediation\" off her list because it felt informal. It came up in an interview anyway — the interviewer asked about a time she'd handled a disagreement, and she had a ready, specific story instead of a blank stare.",
    },
    pitfalls: [
      "Rating confidence based on how you feel that day rather than track record",
      "Listing skills with no evidence attached — they won't survive a follow-up question",
      "Skipping soft skills because they feel harder to \"prove\"",
    ],
    successSignal:
      "Every skill on your top-5 list has a specific story attached that you could tell in an interview without notes.",
    milestoneTies: [4, 10, 13],
  },

  6: {
    definition:
      "An honest gap inventory — the skills or habits holding you back — ranked by priority, with a concrete improvement action attached to each.",
    whyItMatters:
      "Everyone has weaknesses; few people name them precisely enough to act on. This FIRST turns vague self-criticism (\"I'm bad at networking\") into a specific, fixable gap with a next step.",
    whenWhoWhere: [
      { label: "When", body: "Monthly, per the manual's recommended cadence — weaknesses shift as you grow." },
      { label: "Who", body: "Best done solo first, then checked against feedback you've actually received from others." },
      { label: "Where", body: "Somewhere private — this one asks for more candor than most FIRSTS." },
    ],
    howItWorks: [
      "List every gap that comes to mind — skills, habits, or patterns that hold you back.",
      "For each, rate how much it's actually costing you right now.",
      "Rank your top 3 by priority.",
      "For each top-3 gap, write one small, concrete improvement action.",
      "Set a check-in date to revisit progress.",
    ],
    tools: ["360 feedback prompts", "Gap inventory table", "Habit tracker template"],
    scenario: {
      title: "The gap that wasn't what he thought",
      body: "Chuka assumed his weakness was public speaking. Feedback from three colleagues said otherwise — the real gap was following up after meetings. Naming the actual gap, not the assumed one, is what made the improvement action useful.",
    },
    pitfalls: [
      "Listing \"weaknesses\" that are actually humble-brags (\"I work too hard\")",
      "Trying to fix everything at once instead of picking a priority top 3",
      "Skipping outside feedback and relying only on self-perception",
    ],
    successSignal:
      "You have three named gaps, each with one small action already scheduled — not just noted.",
    milestoneTies: [1, 12, 15],
  },

  7: {
    definition:
      "A structured energy audit of your interests — mapping what actually energizes you against a list of career paths where that energy tends to pay off.",
    whyItMatters:
      "Interest lists are easy to make and easy to misread. This FIRST separates \"sounds fun to think about\" from \"actually gives me energy when I do it\" — the difference between a hobby and a viable career signal.",
    whenWhoWhere: [
      { label: "When", body: "Whenever you're choosing between paths and can't tell which one is genuine interest versus borrowed enthusiasm." },
      { label: "Who", body: "Solo — this is about your own energy, not anyone else's opinion of what you should enjoy." },
      { label: "Where", body: "Somewhere you can be honest, including about interests that feel embarrassingly unambitious." },
    ],
    howItWorks: [
      "List every interest, big or small, without judging its career potential yet.",
      "For each, rate the energy it actually gives you when you do it (not when you imagine it).",
      "Map your highest-energy interests against roles or industries where they show up.",
      "Flag 2–3 passion-to-career pairings worth researching further.",
    ],
    tools: ["Energy audit worksheet", "O*NET Interest Profiler", "Passion-mapping table"],
    scenario: {
      title: "The hobby that was actually the answer",
      body: "Farida almost left \"organizing community events\" off her list because it felt too small. It turned out to be the clearest signal in her whole audit — pointing straight at program management roles she'd never considered.",
    },
    pitfalls: [
      "Confusing \"interesting to learn about\" with \"energizing to actually do\"",
      "Excluding interests that don't sound prestigious",
      "Mapping straight to a job title instead of the underlying activity",
    ],
    successSignal:
      "You have 2–3 interest-to-career pairings you're genuinely curious to research further, not just ones that sound acceptable.",
    milestoneTies: [5, 9, 13],
  },

  8: {
    definition:
      "A researched brief on an industry — trends, growth areas, and culture — built from live sources instead of assumptions, and compressed into a one-page summary.",
    whyItMatters:
      "Industry knowledge ages fast and is easy to fake with outdated assumptions. A sourced, current brief means you can talk to anyone in that industry without embarrassing gaps.",
    whenWhoWhere: [
      { label: "When", body: "Before targeting any industry seriously, and refreshed whenever the brief feels more than a few months old." },
      { label: "Who", body: "You, with the Research Analyst Coach doing the source legwork alongside you." },
      { label: "Where", body: "Anywhere with a stable connection — this one leans on live search." },
    ],
    howItWorks: [
      "Pick one target industry to research deeply, rather than several shallowly.",
      "Pull current trend and growth data from at least 2–3 reputable sources.",
      "Note culture signals — how the industry actually treats its people, not just its headlines.",
      "Synthesize findings into a one-page brief with citations.",
    ],
    tools: ["BLS Occupational Outlook", "Glassdoor", "Company career pages", "Industry newsletters"],
    scenario: {
      title: "The trend that changed the plan",
      body: "Ola was set on traditional broadcast media until her Industry Insight brief surfaced a consistent, sourced signal: budgets were shifting hard toward creator-led video. She didn't abandon media — she retargeted which corner of it to enter.",
    },
    pitfalls: [
      "Relying on a single source or outdated articles",
      "Treating company marketing copy as an unbiased culture signal",
      "Researching broadly instead of picking one industry to go deep on",
    ],
    successSignal:
      "You can summarize the industry's current state in 3 sentences, each backed by a citation you could defend in an interview.",
    milestoneTies: [9, 10, 11],
  },

  9: {
    definition:
      "A mapped set of role-families and pathways within your target industry, researched from real career trajectories, ending in a testable path hypothesis.",
    whyItMatters:
      "Career paths are rarely a straight ladder. Seeing how real people actually moved between roles turns a vague \"I want to work in X\" into a sequence of realistic next moves.",
    whenWhoWhere: [
      { label: "When", body: "After Industry Insight, once you have a target industry to map paths within." },
      { label: "Who", body: "You and the Research Analyst Coach, pulling real trajectory examples." },
      { label: "Where", body: "Anywhere with research access — LinkedIn-style pathway lookups are core to this one." },
    ],
    howItWorks: [
      "Identify 3–4 role families within your target industry.",
      "Research 2–3 real career trajectories per family (LinkedIn-style pathway lookups).",
      "Build a pathway table showing common entry points and next steps.",
      "Draft a path hypothesis — your best current guess at a realistic sequence.",
    ],
    tools: ["LinkedIn People search", "O*NET Career Pathways", "Pathway table template"],
    scenario: {
      title: "The unexpected entry point",
      body: "Yusuf wanted to end up in product strategy. Researching real trajectories showed most people got there through data analytics or customer success first, not directly. His path hypothesis shifted from \"apply for product roles\" to \"build a 2-year bridge.\"",
    },
    pitfalls: [
      "Assuming your path must be direct — most real trajectories aren't",
      "Researching only aspirational end-roles, skipping the entry points",
      "Treating the path hypothesis as fixed instead of a testable guess",
    ],
    successSignal:
      "You have a pathway table with real examples and a one-sentence path hypothesis you're ready to test against actual job postings.",
    milestoneTies: [8, 10, 13],
  },

  10: {
    definition:
      "A researched fit-map across specific roles — qualifications, gaps, and a live contact tracker — built from real job postings, not job titles alone.",
    whyItMatters:
      "Job titles hide huge variation in actual responsibilities. Researching real postings surfaces the qualifications that repeat across listings — the ones worth actually building — versus the ones that are just wishlist noise.",
    whenWhoWhere: [
      { label: "When", body: "Once you have a path hypothesis from Career Path to test against real openings." },
      { label: "Who", body: "You and the Research Analyst Coach, pulling live postings." },
      { label: "Where", body: "Anywhere with job board access." },
    ],
    howItWorks: [
      "Collect 5–8 real job postings for your target role.",
      "Map required vs. preferred qualifications across all of them.",
      "Note the gaps that show up repeatedly — those are the ones worth closing first.",
      "Build a contact tracker for people at target companies worth reaching out to.",
    ],
    tools: ["LinkedIn Jobs", "Company career pages", "Contact tracker template", "Informational interview script"],
    scenario: {
      title: "The qualification that kept repeating",
      body: "Blessing assumed she needed a certification to break into UX research. Across eight real postings, only two mentioned it — but six mentioned \"comfort presenting findings to stakeholders.\" Her prep time went to the right thing.",
    },
    pitfalls: [
      "Researching one posting and generalizing from it",
      "Treating every listed qualification as equally required",
      "Building a contact list but never actually reaching out",
    ],
    successSignal:
      "You can name the 2–3 qualifications that repeat across real postings — not the job title's assumed requirements — and you've logged at least one outreach contact.",
    milestoneTies: [8, 9, 11],
  },

  11: {
    definition:
      "A multi-source salary table for your target role, adjusted for cost of living, ending in a defensible target range you could state in a negotiation.",
    whyItMatters:
      "Single-source salary numbers are unreliable and easy to challenge. Cross-checking 2–3 sources — and adjusting for your actual market — gives you a number you can defend when someone asks \"where did you get that?\"",
    whenWhoWhere: [
      { label: "When", body: "Before any negotiation, and refreshed if more than 6 months pass — comp data ages fast." },
      { label: "Who", body: "You and the Research Analyst Coach, cross-checking sources." },
      { label: "Where", body: "Anywhere with research access; this one is entirely source-driven." },
    ],
    howItWorks: [
      "Pull salary data for your target role from at least 2–3 sources (Glassdoor, Levels.fyi, Payscale).",
      "Note where sources disagree and why (company size, region, seniority).",
      "Adjust for your target location's cost of living.",
      "Set a target range with a stated minimum, target, and stretch number.",
    ],
    tools: ["Glassdoor", "Levels.fyi", "Payscale", "Cost-of-living calculator"],
    scenario: {
      title: "The gap that made sense once explained",
      body: "Glassdoor showed $58–65K for Tobi's target role; Levels.fyi showed $70–78K. Instead of picking one, he checked company size — Levels.fyi skewed toward larger tech firms. That explained the gap and told him which number applied to which employers.",
    },
    pitfalls: [
      "Anchoring on a single source's number",
      "Forgetting to adjust for location when comparing figures",
      "Presenting research numbers as guaranteed rather than a defensible range",
    ],
    successSignal:
      "You can state a target range with a minimum, target, and stretch number — and explain, with sources, why each source disagreed.",
    milestoneTies: [8, 10, 13],
  },

  12: {
    definition:
      "A Strengths / Weaknesses / Opportunities / Threats reflection that pulls directly from your completed FIRSTS, ending in a single 90-day focus statement.",
    whyItMatters:
      "By this point you have real material — values, strengths, gaps, research. This FIRST is where it gets synthesized into one clear priority instead of staying scattered across separate worksheets.",
    whenWhoWhere: [
      { label: "When", body: "After completing the earlier FIRSTS in Self-Discovery and Market Research — this one is built to sit on top of them." },
      { label: "Who", body: "You, with the Coach pulling from your own prior entries automatically." },
      { label: "Where", body: "Somewhere you can sit with the full picture at once." },
    ],
    howItWorks: [
      "Review Strengths — pulled automatically from your Strength Inventory.",
      "Review Weaknesses — pulled automatically from your Weakness Awareness.",
      "Identify Opportunities from your Industry Insight and Career Path research.",
      "Identify Threats — market or personal risks that could derail the plan.",
      "Write one 90-day focus statement that responds to the whole picture.",
    ],
    tools: ["Auto-synthesized SWOT grid", "90-day focus template"],
    scenario: {
      title: "The pattern that only showed up on paper",
      body: "Individually, Halima's FIRSTS felt fine. Laid out together in a SWOT grid, a pattern jumped out: every strength and opportunity pointed toward research roles, while her only real threat was a self-imposed one — never actually applying. Her 90-day focus became embarrassingly simple: apply to five research roles.",
    },
    pitfalls: [
      "Re-deriving strengths and weaknesses from scratch instead of using your real prior answers",
      "Writing a focus statement so broad it doesn't actually focus anything",
      "Skipping this FIRST because the earlier ones felt \"done\" — synthesis is where the value shows up",
    ],
    successSignal:
      "Your 90-day focus statement is one sentence, specific enough to act on Monday morning, and traceable back to at least three prior FIRSTS.",
    milestoneTies: [1, 5, 6],
  },

  13: {
    definition:
      "A concrete plan for closing a chosen skill gap — method, practice rhythm, and an evidence log to prove the skill is actually developing.",
    whyItMatters:
      "\"I should learn X\" rarely survives contact with a busy week. A plan with a set rhythm and a place to log evidence is what actually turns intention into a demonstrable skill.",
    whenWhoWhere: [
      { label: "When", body: "Quarterly, per the manual's cadence — skill plans go stale if left untouched too long." },
      { label: "Who", body: "You, with light research help from the Coach on courses or resources." },
      { label: "Where", body: "Anywhere you set your recurring practice sessions." },
    ],
    howItWorks: [
      "Select one skill to focus on, pulled from your Weakness Awareness or Role Research gaps.",
      "Choose a learning method — course, mentorship, project, or self-study.",
      "Set a practice rhythm (e.g., 3x per week, 30 minutes).",
      "Log evidence of practice and progress as you go.",
    ],
    tools: ["Coursera / LinkedIn Learning", "Practice log template", "Mentor-match resources"],
    scenario: {
      title: "The plan that survived a busy month",
      body: "Wale's first attempt at learning SQL fizzled after two weeks — no rhythm, no log. His second attempt set a fixed Tuesday/Thursday slot and a one-line evidence log. Six weeks later the log was the proof he needed to add the skill to his resume honestly.",
    },
    pitfalls: [
      "Picking a skill because it sounds impressive rather than because it closes a real gap",
      "Setting a practice rhythm that doesn't fit your actual schedule",
      "Skipping the evidence log, so \"progress\" stays a feeling instead of a fact",
    ],
    successSignal:
      "You have at least 3 logged practice sessions with specific evidence — not just \"studied today.\"",
    milestoneTies: [5, 6, 2],
  },

  14: {
    definition:
      "An intake of your results from an assessment you've already taken (MBTI, DISC, CliftonStrengths, or similar), interpreted into concrete trait-to-career mappings.",
    whyItMatters:
      "Assessment results are easy to read once and forget. Mapping specific traits to specific career implications is what makes the results usable instead of just interesting trivia.",
    whenWhoWhere: [
      { label: "When", body: "Anytime after taking a personality assessment — this FIRST interprets existing results rather than administering a new test." },
      { label: "Who", body: "You, with the Coach helping interpret rather than re-score." },
      { label: "Where", body: "Anywhere with your assessment results handy." },
    ],
    howItWorks: [
      "Enter your results from whichever assessment you've taken.",
      "Note the 2–3 traits that felt most accurate to you personally.",
      "Map each trait to a concrete implication for how you work best.",
      "Cross-check the mapping against your Work Style Awareness for consistency.",
    ],
    tools: ["MBTI, DISC, or CliftonStrengths results", "Trait-to-career mapping template"],
    scenario: {
      title: "The trait that explained a pattern",
      body: "Ifeoma's CliftonStrengths results named \"Learner\" as a top theme. Mapped concretely, it explained why she thrived in roles with steep ramp-up curves and got restless once a job became routine — a pattern she'd noticed but never named.",
    },
    pitfalls: [
      "Treating assessment results as fixed identity rather than a useful lens",
      "Copying generic trait descriptions instead of writing your own concrete mapping",
      "Using results from an assessment taken years ago without a sanity check",
    ],
    successSignal:
      "You can name 2–3 traits and, for each, a specific way it should shape your next role — not just the trait's generic description.",
    milestoneTies: [15, 16, 4],
  },

  15: {
    definition:
      "A short observation log of how you actually work and collaborate, turned into an adaptation plan for working better with people whose style differs from yours.",
    whyItMatters:
      "Most work friction isn't about skill — it's about mismatched work styles. Naming your own pattern is the first step to adapting instead of just getting frustrated.",
    whenWhoWhere: [
      { label: "When", body: "Run the log for 1–2 weeks; revisit fully after any major role or team change." },
      { label: "Who", body: "You, observing yourself — plus a teammate's perspective if you can get one." },
      { label: "Where", body: "Wherever you normally work, logged in the moment rather than reconstructed later." },
    ],
    howItWorks: [
      "Reflect on how you naturally prefer to work — independently, in bursts, on a schedule, etc.",
      "Log your actual working pattern for 1–2 weeks, noting friction points.",
      "Identify where your style clashes with a collaborator's or team's norm.",
      "Write an adaptation plan for the specific friction points you found.",
    ],
    tools: ["Work style observation log", "Team norms worksheet"],
    scenario: {
      title: "The friction that wasn't personal",
      body: "Segun's log showed he did his best thinking in long, uninterrupted blocks — and his team's habit of frequent quick syncs was quietly draining him. Naming it let him ask for two protected focus blocks a week instead of just gritting his teeth.",
    },
    pitfalls: [
      "Logging how you wish you worked instead of how you actually work",
      "Treating a work-style mismatch as a character flaw in a teammate",
      "Skipping the adaptation plan, so the log stays observation without action",
    ],
    successSignal:
      "You can name one specific friction point from the log and the adaptation you're actually trying this month.",
    milestoneTies: [14, 16, 18],
  },

  16: {
    definition:
      "An audit of three real past decisions, checked against a bias checklist, used to build a decision-making framework you can reuse.",
    whyItMatters:
      "Most people don't notice their own decision patterns until they're pointed at real examples. Auditing three actual cases surfaces blind spots a general \"how do you make decisions?\" question never would.",
    whenWhoWhere: [
      { label: "When", body: "Whenever a big decision is coming up, or after one that didn't go the way you expected." },
      { label: "Who", body: "Solo audit, ideally reviewed with someone who watched you make at least one of the decisions." },
      { label: "Where", body: "Somewhere you can think without being rushed into the next decision." },
    ],
    howItWorks: [
      "Pick 3 real past decisions — one that went well, one that didn't, one that's ambiguous.",
      "For each, reconstruct how you actually decided, not how you'd like to think you did.",
      "Run each through a bias checklist (sunk cost, confirmation bias, social pressure).",
      "Build a simple decision framework from the patterns you found.",
    ],
    tools: ["Decision audit table", "Cognitive bias checklist", "Decision framework template"],
    scenario: {
      title: "The pattern across three decisions",
      body: "Reviewing three unrelated decisions — a job change, an apartment move, a friendship ending — Aisha noticed the same bias in all three: she over-weighted the opinion of whoever spoke most recently. Naming it changed how she ran her next big decision.",
    },
    pitfalls: [
      "Choosing only decisions that make you look good",
      "Skipping the bias checklist and just narrating the decision instead of auditing it",
      "Building a framework so abstract it doesn't change how the next decision actually gets made",
    ],
    successSignal:
      "You can name one specific bias that showed up across at least two of your three audited decisions, and one framework change you're committing to.",
    milestoneTies: [6, 12, 18],
  },

  17: {
    definition:
      "A short experiment testing 2–3 learning methods over three days, scored for retention and real-world application, to find how you actually learn best.",
    whyItMatters:
      "\"I'm a visual learner\" is usually a guess, not a tested fact. A short, real experiment beats a lifetime of assumption about how you retain and apply new information.",
    whenWhoWhere: [
      { label: "When", body: "Whenever you're about to invest serious time in learning something new — worth testing your method first." },
      { label: "Who", body: "Solo — this is a personal experiment, though comparing notes with a study partner can help." },
      { label: "Where", body: "Wherever you'd normally study or practice a new skill." },
    ],
    howItWorks: [
      "Review 2–3 case studies or examples of different learning methods (reading, video, doing, teaching).",
      "Pick a small skill and test a different method each day for 3 days.",
      "Score retention (what you remember after 24 hours) and application (can you actually use it).",
      "Identify which method scored highest and why.",
    ],
    tools: ["Learning-method experiment log", "Retention scoring rubric"],
    scenario: {
      title: "The method that surprised him",
      body: "Emeka assumed he learned best from video tutorials. His 3-day experiment scored \"teach it to someone else\" far higher on both retention and application — a method he'd never deliberately used before testing it.",
    },
    pitfalls: [
      "Testing methods you already know you prefer instead of genuinely different ones",
      "Scoring based on how enjoyable a method felt rather than what you actually retained",
      "Running the experiment on material so easy that every method scores the same",
    ],
    successSignal:
      "You have retention and application scores for at least two distinct methods, and a clear winner you plan to use going forward.",
    milestoneTies: [13, 5, 6],
  },

  18: {
    definition:
      "A one-week audit of your time and distractions, used to design focus blocks and a weekly review ritual that actually stick.",
    whyItMatters:
      "Productivity advice is generic until it's built from your own real data. A week of honest tracking shows exactly where your time and focus actually go — usually somewhere different than you'd guess.",
    whenWhoWhere: [
      { label: "When", body: "Run the audit for one full week; revisit the review ritual weekly after that." },
      { label: "Who", body: "Solo tracking — brutal honesty matters more than anyone else's input here." },
      { label: "Where", body: "Wherever you normally work, logged in real time rather than reconstructed at day's end." },
    ],
    howItWorks: [
      "Track your time and distractions for one full week, logged as you go.",
      "Note focus hours actually achieved each day versus planned.",
      "Design focus blocks around your real high-energy windows, not assumed ones.",
      "Set a weekly review ritual to keep the system honest going forward.",
    ],
    tools: ["Time/distraction audit log", "Focus block planner", "Weekly review template"],
    scenario: {
      title: "The distraction that wasn't the phone",
      body: "Precious assumed her phone was the main distraction. Her week-long log showed the real culprit was context-switching between open browser tabs — a habit no phone-blocking app would have touched. The fix was a tab-limit rule, not a screen-time app.",
    },
    pitfalls: [
      "Logging an idealized day instead of what actually happened",
      "Designing focus blocks around when you think you should be productive, not when your real data shows you are",
      "Skipping the weekly review, so the system quietly decays after week one",
    ],
    successSignal:
      "You can name your single biggest real distraction from the week's data, and you have a weekly review slot already on your calendar.",
    milestoneTies: [6, 15, 16],
  },
};
