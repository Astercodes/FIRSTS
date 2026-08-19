export type TableColumn = { key: string; label: string; kind: "text" | "rating" };

type FieldBase = { key: string; label: string; hint?: string; section?: string };

export type WorksheetField =
  | (FieldBase & { type: "textarea"; rows?: number; seed?: string })
  | (FieldBase & { type: "text"; seed?: string })
  | (FieldBase & { type: "chipList"; seed: string[] })
  | (FieldBase & { type: "table"; columns: TableColumn[]; seedRows: Record<string, string | number>[] })
  | (FieldBase & { type: "checklist"; items: string[]; seedChecked?: string[] })
  | (FieldBase & { type: "wordBank"; words: string[]; pickCount: number; seed?: string[] })
  | (FieldBase & { type: "scale"; seed?: number })
  | (FieldBase & {
      type: "research";
      sources: { title: string; domain: string; snippet: string }[];
      synthesisSeed?: string;
    });

export type FieldValue = string | string[] | number | Record<string, string | number>[];

export function defaultAnswers(fields: WorksheetField[]): Record<string, FieldValue> {
  const state: Record<string, FieldValue> = {};
  for (const f of fields) {
    if (f.type === "textarea" || f.type === "text") state[f.key] = f.seed ?? "";
    else if (f.type === "chipList") state[f.key] = f.seed;
    else if (f.type === "table") state[f.key] = f.seedRows;
    else if (f.type === "checklist") state[f.key] = f.seedChecked ?? [];
    else if (f.type === "research") state[f.key] = f.synthesisSeed ?? "";
    else if (f.type === "wordBank") state[f.key] = f.seed ?? [];
    else if (f.type === "scale") state[f.key] = f.seed ?? 50;
  }
  return state;
}

export const WORKSHEET_SCHEMAS: Record<number, WorksheetField[]> = {
  2: [
    { type: "textarea", key: "visionStatement", label: "Vision statement", hint: "“In the next 5 to 10 years, I see myself…”", rows: 3, seed: "Leading a small product team building tools that make messy operations legible for non-technical people, working from a place with real seasons, mentoring at least one person junior to me." },
    { type: "textarea", key: "passions", label: "My passions", hint: "“I feel most alive when I am…”", rows: 2, seed: "Untangling a confusing process until it clicks for someone else." },
    { type: "textarea", key: "coreValues", label: "Core values", hint: "“These are the principles I refuse to compromise in my work and life…”", rows: 2, seed: "Honesty even when it's inconvenient, and protecting time for the people closest to me." },
    { type: "textarea", key: "longTermGoals", label: "Long-term goals (5 to 10 years)", hint: "“By Year X, I aim to have achieved…”", rows: 2, seed: "By year 8, leading a small team and known for shipping things that actually get used." },
    { type: "textarea", key: "midTermGoals", label: "Mid-term goals (2 to 3 years)", hint: "“In the next 2 to 3 years, I will accomplish…”", rows: 2, seed: "Own one project end-to-end and build a track record I can point to in interviews." },
    { type: "textarea", key: "shortTermGoals", label: "Short-term goals (6 to 12 months)", hint: "“Within the next year, I will…”", rows: 2, seed: "Finish my Skill Growth Plan's top skill and complete two informational interviews." },
    { type: "table", key: "steppingStones", label: "Stepping stones: actions", columns: [
      { key: "goal", label: "Short-term goal", kind: "text" },
      { key: "action", label: "Supporting action", kind: "text" },
      { key: "timeline", label: "Timeline", kind: "text" },
    ], seedRows: [
      { goal: "Finish top skill from growth plan", action: "30 min practice, 3x/week", timeline: "Next quarter" },
    ] },
    { type: "textarea", key: "barriers", label: "Potential barriers & solutions", hint: "“I may face these challenges… I can address them by…”", rows: 2, seed: "Time is the biggest risk, I'll protect two fixed evenings a week for this." },
    { type: "text", key: "reviewDate", label: "Review & update", hint: "“On [date], I will revisit this page to update my vision and goals.”", seed: "In 12 months" },
  ],

  3: [
    { type: "textarea", key: "peakExperiences", label: "Peak experiences", hint: "“I feel most alive when I am…”", section: "Discovering your purpose", rows: 2, seed: "Taking something confusing and turning it into a system someone else can follow." },
    { type: "textarea", key: "recurringThemes", label: "Recurring themes", hint: "“The problem that consistently moves me is…”", section: "Discovering your purpose", rows: 2, seed: "People who are capable but stuck because no one gave them a map." },
    { type: "textarea", key: "naturalStrengths", label: "Natural strengths in service", hint: "“The type of people I feel drawn to support are…”", section: "Discovering your purpose", rows: 2, seed: "People one or two steps behind me who just need someone to go first." },
    { type: "textarea", key: "impactVision", label: "Impact vision", hint: "“If I had unlimited resources, I would devote my life to…”", section: "Discovering your purpose", rows: 2, seed: "Building free, honest guides for the firsts nobody explains clearly." },
    { type: "chipList", key: "themes", label: "Recurring themes across your answers", hint: "3 to 5 patterns you notice above.", section: "Patterns & insights", seed: ["Making confusing things clear", "Helping people who are one step behind me", "Building systems, not just giving advice"] },
    { type: "text", key: "purposeCommitment", label: "My life is committed to", section: "Draft your purpose statement", seed: "turning confusion into a clear next step" },
    { type: "text", key: "purposeSoThat", label: "So that", section: "Draft your purpose statement", seed: "people don't have to figure out their firsts alone" },
    { type: "textarea", key: "internshipApplication", label: "Internship / job selection", hint: "How does this purpose guide which opportunities you accept?", section: "Contextual application", rows: 2, seed: "I lean toward roles where I'm building something others will actually use, not just internal reports." },
    { type: "textarea", key: "networkingApplication", label: "Networking / mentorship", hint: "How do you express your purpose to mentors or peers?", section: "Contextual application", rows: 2, seed: "I tell mentors directly that I want to build things that make someone's first attempt easier." },
    { type: "textarea", key: "developmentApplication", label: "Personal development", hint: "How does this purpose shape the skills or experiences you pursue daily?", section: "Contextual application", rows: 2, seed: "It's why I keep choosing to write things down clearly instead of just knowing them in my head." },
  ],

  4: [
    { type: "text", key: "currentIdentity", label: "Current identity", hint: "“I am a/an…”", section: "Identity foundation builder", seed: "Computer science student focused on backend systems" },
    { type: "chipList", key: "coreStrengths", label: "Core strengths (3 to 5)", hint: "My strongest abilities are…", section: "Identity foundation builder", seed: ["Systems thinking", "Calm under ambiguity", "Explaining technical detail simply"] },
    { type: "text", key: "signatureStrength", label: "Condensed into 1 to 2 signature strengths", section: "Identity foundation builder", seed: "Turning messy systems into ones people can trust" },
    { type: "textarea", key: "focusArea", label: "Focus area / direction", hint: "The industry, function, or problem space I'm moving toward.", section: "Identity foundation builder", rows: 2, seed: "Backend and data infrastructure for small, fast-moving product teams." },
    { type: "text", key: "valuePropHelp", label: "I help / aim to help", section: "Identity foundation builder", seed: "fast-moving teams" },
    { type: "text", key: "valuePropBy", label: "By", section: "Identity foundation builder", seed: "building systems they can trust without babysitting" },
    { type: "text", key: "valuePropSoThat", label: "So that", section: "Identity foundation builder", seed: "they can focus on the product, not the plumbing" },
    { type: "textarea", key: "differentiator", label: "Differentiator", hint: "What makes me distinct at this stage?", section: "Identity foundation builder", rows: 2, seed: "I've already rebuilt one broken system from scratch, most peers my level haven't." },
    { type: "textarea", key: "narrativeDraft", label: "3 to 5 sentence narrative", section: "Narrative draft", rows: 4, seed: "I'm a computer science student focused on backend systems. I specialize in turning fragile, undocumented processes into ones a team can actually trust. I'm currently developing experience in distributed systems and observability. My goal is to contribute to a small infrastructure team where reliability is treated as a feature, not an afterthought." },
    { type: "checklist", key: "clarityChecklist", label: "Clarity & strength checklist", section: "Clarity & strength checklist", items: ["Is it specific (not generic)?", "Does it reflect my real strengths?", "Does it show direction, not confusion?", "Can I say it naturally without reading?", "Does it align with my Core Values?"], seedChecked: ["Is it specific (not generic)?", "Does it reflect my real strengths?"] },
    { type: "textarea", key: "linkedinVersion", label: "LinkedIn summary (professional tone)", section: "Adaptation versions", rows: 2, seed: "Backend-focused CS student turning fragile systems into ones teams can trust." },
    { type: "textarea", key: "interviewVersion", label: "Interview introduction (conversational tone)", section: "Adaptation versions", rows: 2, seed: "I'm a CS student who really likes fixing things that are quietly broken, I rebuilt one of our club's core systems last year and haven't stopped since." },
    { type: "textarea", key: "networkingVersion", label: "Networking event (30-second version)", section: "Adaptation versions", rows: 2, seed: "I fix broken backend systems: did it once for real last year, cut error rates by half." },
  ],

  5: [
    { type: "chipList", key: "hardSkills", label: "Hard skills identified", seed: ["SQL / data querying", "Python scripting", "Financial modeling"] },
    { type: "chipList", key: "softSkills", label: "Soft skills identified", seed: ["Stakeholder communication", "Conflict mediation"] },
    { type: "table", key: "skillTable", label: "Skill inventory table", hint: "Confidence 1 to 5 (1 = novice, 5 = expert).", columns: [
      { key: "skill", label: "Skill", kind: "text" },
      { key: "category", label: "Category (Hard/Soft)", kind: "text" },
      { key: "confidence", label: "Confidence", kind: "rating" },
      { key: "evidence", label: "Evidence", kind: "text" },
      { key: "matters", label: "Why it matters", kind: "text" },
      { key: "action", label: "Action to improve", kind: "text" },
    ], seedRows: [
      { skill: "SQL / data querying", category: "Hard", confidence: 4, evidence: "Built the weekly reporting query the team still uses", matters: "Core to most analyst roles", action: "Learn window functions" },
      { skill: "Stakeholder communication", category: "Soft", confidence: 5, evidence: "Ran client updates for a 6-month project solo", matters: "Repeats across every job posting I've read", action: "Practice concise written updates" },
    ] },
    { type: "textarea", key: "skillGaps", label: "Skill gap awareness", hint: "These are areas I can improve to become more competitive.", rows: 2, seed: "I'm weaker on public speaking to large groups than I am one-on-one." },
    { type: "textarea", key: "reviewUpdate", label: "Review & update", hint: "Which skills have grown? Which are still low-confidence? Do any new skills emerge?", rows: 2, seed: "SQL confidence moved from 3 to 4 this term after the reporting project." },
  ],

  6: [
    { type: "chipList", key: "hardGaps", label: "Hard skills gaps", seed: ["Advanced Excel / modeling"] },
    { type: "chipList", key: "softGaps", label: "Soft skills gaps", seed: ["Following up after meetings", "Public speaking under pressure"] },
    { type: "table", key: "weaknessTable", label: "Weakness inventory table", columns: [
      { key: "weakness", label: "Weakness / gap", kind: "text" },
      { key: "category", label: "Category (Hard/Soft)", kind: "text" },
      { key: "impact", label: "Impact on goals", kind: "text" },
      { key: "evidence", label: "Evidence", kind: "text" },
      { key: "priority", label: "Priority (H/M/L)", kind: "text" },
      { key: "action", label: "Action to improve", kind: "text" },
      { key: "support", label: "Support needed", kind: "text" },
    ], seedRows: [
      { weakness: "Following up after meetings", category: "Soft", impact: "Loses momentum on group projects", evidence: "Two group projects stalled waiting on my recap", priority: "H", action: "Send a 3-line recap within 1 hour", support: "None: just discipline" },
    ] },
    { type: "textarea", key: "reflection", label: "Reflection", hint: "When have I noticed this gap limiting my performance? What patterns emerge?", rows: 2, seed: "It shows up most when I'm tired, I close my laptop instead of sending the recap." },
    { type: "textarea", key: "feedback", label: "Feedback & external perspective", hint: "What blind spots might I not notice? How can others help me improve?", rows: 2, seed: "A teammate mentioned I go quiet in disagreements instead of pushing back, I hadn't noticed that pattern." },
    { type: "textarea", key: "progressReview", label: "Progress review & update", hint: "Which gaps have reduced? Which require continued effort? Have new gaps emerged?", rows: 2, seed: "Follow-ups are more consistent now that I set a phone reminder." },
  ],

  7: [
    { type: "table", key: "interestList", label: "Interest discovery list", hint: "What subjects, conversations, or activities do I naturally gravitate toward?", columns: [
      { key: "interest", label: "Interest / topic", kind: "text" },
      { key: "why", label: "Why it interests me", kind: "text" },
      { key: "noticed", label: "Where I first noticed it", kind: "text" },
    ], seedRows: [
      { interest: "Organizing community events", why: "I like seeing a plan actually come together", noticed: "Running my church's youth program" },
    ] },
    { type: "table", key: "energyAudit", label: "Energy audit", hint: "When do I lose track of time because I'm deeply engaged?", columns: [
      { key: "activity", label: "Activity or task", kind: "text" },
      { key: "energy", label: "Energy level (L/M/H)", kind: "text" },
      { key: "why", label: "Why it energizes me", kind: "text" },
    ], seedRows: [
      { activity: "Organizing community events", energy: "H", why: "I get to see the plan work in real time" },
    ] },
    { type: "table", key: "curiosityTracker", label: "Curiosity tracker", hint: "If I had free time to explore anything, what would I explore?", columns: [
      { key: "topic", label: "Topic", kind: "text" },
      { key: "type", label: "Type (Learning/Creating/Solving/Leading)", kind: "text" },
    ], seedRows: [
      { topic: "Event logistics software", type: "Creating" },
    ] },
    { type: "chipList", key: "topThemes", label: "Top 3 passion themes", seed: ["Organizing people around a shared goal"] },
    { type: "table", key: "careerConnection", label: "Career path connection", columns: [
      { key: "theme", label: "Passion theme", kind: "text" },
      { key: "industry", label: "Possible industry", kind: "text" },
      { key: "role", label: "Possible role", kind: "text" },
    ], seedRows: [
      { theme: "Organizing people around a shared goal", industry: "Events / Nonprofits", role: "Program coordinator" },
    ] },
    { type: "table", key: "realityCheck", label: "Reality check", hint: "Not every passion must become a career.", columns: [
      { key: "theme", label: "Passion theme", kind: "text" },
      { key: "potential", label: "Career potential (H/M/L)", kind: "text" },
      { key: "why", label: "Why", kind: "text" },
    ], seedRows: [
      { theme: "Organizing people around a shared goal", potential: "H", why: "Clear roles exist and I already have proof I can do it" },
    ] },
    { type: "table", key: "explorationActions", label: "Exploration actions", columns: [
      { key: "theme", label: "Passion theme", kind: "text" },
      { key: "action", label: "Exploration action", kind: "text" },
      { key: "timeline", label: "Timeline", kind: "text" },
    ], seedRows: [
      { theme: "Organizing people around a shared goal", action: "Volunteer to co-run one campus event", timeline: "This semester" },
    ] },
    { type: "textarea", key: "reflectionSurprise", label: "What surprised me about my interests?", rows: 2, seed: "That the common thread wasn't a subject at all, it was the feeling of a plan working." },
    { type: "text", key: "reflectionStrongest", label: "Which passion feels strongest right now?", seed: "Organizing people around a shared goal" },
    { type: "text", key: "reflectionNextStep", label: "What is one step I will take to explore it further?", seed: "Ask to co-lead the next campus event" },
    { type: "text", key: "summaryAreas", label: "The areas I'm most excited to explore professionally are", seed: "program coordination and event operations" },
    { type: "text", key: "summaryBecause", label: "Because they allow me to", seed: "turn a plan into something real that people show up for" },
  ],

  8: [
    { type: "research", key: "researchNotes", label: "Live industry research", sources: [
      { title: "Occupational Outlook Handbook", domain: "bls.gov", snippet: "Employment in this sector is projected to grow faster than average over the next decade, driven by digital adoption." },
      { title: "State of the Industry Report", domain: "glassdoor.com", snippet: "Reported culture scores skew high on flexibility, lower on advancement clarity for early-career hires." },
    ], synthesisSeed: "Growth is real and sourced (BLS), but advancement clarity is a known weak point (Glassdoor), worth asking about directly in interviews." },
    { type: "table", key: "industryId", label: "Industry identification", hint: "Which industries seem connected to my interests, strengths, or career vision?", columns: [
      { key: "industry", label: "Industry", kind: "text" },
      { key: "why", label: "Why it interests me", kind: "text" },
    ], seedRows: [{ industry: "Fintech", why: "Combines my analytical strengths with visible, real-world impact" }] },
    { type: "table", key: "overview", label: "Industry overview", columns: [
      { key: "industry", label: "Industry", kind: "text" },
      { key: "purpose", label: "Main purpose", kind: "text" },
      { key: "products", label: "Key products / services", kind: "text" },
      { key: "employers", label: "Typical employers", kind: "text" },
    ], seedRows: [{ industry: "Fintech", purpose: "Move and protect money digitally", products: "Payments, fraud detection, lending", employers: "Banks, payment startups, card networks" }] },
    { type: "table", key: "trends", label: "Market trends", columns: [
      { key: "industry", label: "Industry", kind: "text" },
      { key: "trend", label: "Current trend", kind: "text" },
      { key: "why", label: "Why it matters", kind: "text" },
    ], seedRows: [{ industry: "Fintech", trend: "Real-time fraud detection using ML", why: "Shifts hiring toward data-heavy roles" }] },
    { type: "table", key: "growthAreas", label: "Growth & opportunity areas", columns: [
      { key: "industry", label: "Industry", kind: "text" },
      { key: "outlook", label: "Growth outlook (H/M/L)", kind: "text" },
      { key: "roles", label: "High-demand roles", kind: "text" },
      { key: "future", label: "Future opportunities", kind: "text" },
    ], seedRows: [{ industry: "Fintech", outlook: "H", roles: "Fraud analyst, risk analyst", future: "Cross-border payment infrastructure" }] },
    { type: "table", key: "companyLandscape", label: "Company landscape", columns: [
      { key: "industry", label: "Industry", kind: "text" },
      { key: "leading", label: "Leading companies", kind: "text" },
      { key: "emerging", label: "Emerging / innovative companies", kind: "text" },
    ], seedRows: [{ industry: "Fintech", leading: "Visa, Stripe", emerging: "Smaller fraud-prevention startups" }] },
    { type: "table", key: "cultureExploration", label: "Company culture exploration", columns: [
      { key: "industry", label: "Industry", kind: "text" },
      { key: "environment", label: "Typical work environment", kind: "text" },
      { key: "team", label: "Team structure", kind: "text" },
      { key: "worklife", label: "Work-life expectations", kind: "text" },
    ], seedRows: [{ industry: "Fintech", environment: "Fast-paced, deadline-driven", team: "Small cross-functional squads", worklife: "Flexible day-to-day, less clear on advancement" }] },
    { type: "table", key: "skillDemand", label: "Skill demand", columns: [
      { key: "industry", label: "Industry", kind: "text" },
      { key: "technical", label: "Technical skills", kind: "text" },
      { key: "soft", label: "Soft skills", kind: "text" },
    ], seedRows: [{ industry: "Fintech", technical: "SQL, Python, data visualization", soft: "Explaining risk to non-technical stakeholders" }] },
    { type: "table", key: "professionalInsight", label: "Professional insight", hint: "Sources: networking conversations, alumni interviews, podcasts, industry panels.", columns: [
      { key: "source", label: "Professional / source", kind: "text" },
      { key: "insight", label: "Key insight about the industry", kind: "text" },
    ], seedRows: [{ source: "Alumni fraud analyst", insight: "Most entry roles start in manual review before moving to modeling" }] },
    { type: "textarea", key: "fitExcites", label: "Which industry excites me the most, and why?", rows: 2, seed: "Fintech, it's fast-moving and the impact of catching fraud is immediate and measurable." },
    { type: "textarea", key: "fitLeast", label: "Which industry seems least aligned with my interests or values?", rows: 2, seed: "Traditional retail banking, too slow-moving for the pace I want." },
    { type: "text", key: "summaryAligned", label: "Industries most aligned with my goals", seed: "Fintech, specifically fraud and risk" },
    { type: "text", key: "summaryBecause", label: "Because", seed: "the growth is sourced and real, and the skill demand matches my strengths" },
  ],

  9: [
    { type: "research", key: "pathwayResearch", label: "Live pathway research", sources: [
      { title: "Career trajectories in this field", domain: "linkedin.com", snippet: "Most people reach the target role after 2 to 3 years in an adjacent analytics or coordination role, not directly." },
    ], synthesisSeed: "Direct entry is rare, most real trajectories route through an adjacent role first." },
    { type: "table", key: "targetIndustry", label: "Target industry selection", columns: [
      { key: "industry", label: "Industry", kind: "text" },
      { key: "why", label: "Why I am interested", kind: "text" },
    ], seedRows: [{ industry: "Fintech: fraud & risk", why: "Matches my analytical strengths and Industry Insight research" }] },
    { type: "table", key: "pathwayMapping", label: "Career pathway mapping", columns: [
      { key: "industry", label: "Industry", kind: "text" },
      { key: "internship", label: "Internship", kind: "text" },
      { key: "entry", label: "Entry-level role", kind: "text" },
      { key: "mid", label: "Mid-level role", kind: "text" },
      { key: "senior", label: "Senior / leadership role", kind: "text" },
    ], seedRows: [{ industry: "Fintech", internship: "Fraud analytics intern", entry: "Fraud Analyst", mid: "Senior Fraud Investigator", senior: "Director of Fraud Risk" }] },
    { type: "table", key: "roleFamilies", label: "Role families within the industry", columns: [
      { key: "industry", label: "Industry", kind: "text" },
      { key: "family", label: "Role family", kind: "text" },
      { key: "examples", label: "Example roles", kind: "text" },
    ], seedRows: [{ industry: "Fintech", family: "Risk & Fraud", examples: "Fraud analyst, risk analyst, compliance analyst" }] },
    { type: "table", key: "skillsRequired", label: "Skills required for each path", columns: [
      { key: "path", label: "Career path", kind: "text" },
      { key: "hard", label: "Key hard skills", kind: "text" },
      { key: "soft", label: "Key soft skills", kind: "text" },
    ], seedRows: [{ path: "Fraud Analyst track", hard: "SQL, pattern detection", soft: "Attention to detail, clear write-ups" }] },
    { type: "table", key: "educationRequirements", label: "Education & experience requirements", columns: [
      { key: "path", label: "Career path", kind: "text" },
      { key: "degree", label: "Typical degree", kind: "text" },
      { key: "certs", label: "Certifications / training", kind: "text" },
      { key: "entryExp", label: "Entry experience needed", kind: "text" },
    ], seedRows: [{ path: "Fraud Analyst track", degree: "Business, CS, or Statistics", certs: "None required at entry", entryExp: "1 internship or strong project" }] },
    { type: "table", key: "pathComparison", label: "Career path comparison", columns: [
      { key: "path", label: "Career path", kind: "text" },
      { key: "alignment", label: "Alignment with strengths (H/M/L)", kind: "text" },
      { key: "why", label: "Why", kind: "text" },
    ], seedRows: [{ path: "Fraud Analyst track", alignment: "H", why: "Directly uses my SQL and pattern-recognition strengths" }] },
    { type: "textarea", key: "pathHypothesis", label: "Path hypothesis", hint: "I'll begin as [entry role], then aim for [mid-level role], ultimately progressing toward [long-term role].", rows: 2, seed: "I'll begin as a Fraud Analyst, then move into Senior Fraud Investigator, ultimately progressing toward Director of Fraud Risk." },
    { type: "table", key: "exposurePlan", label: "Real-world exposure plan", columns: [
      { key: "path", label: "Career path", kind: "text" },
      { key: "action", label: "Exploration action", kind: "text" },
      { key: "timeline", label: "Timeline", kind: "text" },
    ], seedRows: [{ path: "Fraud Analyst track", action: "Informational interview with an alumnus in the role", timeline: "This month" }] },
    { type: "textarea", key: "reflectionAligned", label: "Which career path currently feels most aligned?", rows: 2, seed: "The Fraud Analyst track, it's the clearest match to what I'm already good at." },
    { type: "text", key: "summaryStatement", label: "Career path summary statement", hint: "The path I'm most interested in exploring right now is…", seed: "the Fraud Analyst track, because it aligns with my strengths in pattern recognition and my interest in fintech" },
  ],

  10: [
    { type: "table", key: "targetRoles", label: "Target role identification", hint: "List 1 to 3 internships or entry-level roles that interest you.", columns: [
      { key: "title", label: "Job title", kind: "text" },
      { key: "industry", label: "Industry", kind: "text" },
      { key: "why", label: "Why this role interests me", kind: "text" },
    ], seedRows: [{ title: "Fraud Analyst", industry: "Fintech", why: "Matches my Career Path hypothesis" }] },
    { type: "table", key: "roleComparison", label: "Role research (compare up to 3 roles)", hint: "One row per role: responsibilities, skills, qualifications, and gaps.", columns: [
      { key: "role", label: "Role title", kind: "text" },
      { key: "responsibilities", label: "Core responsibilities", kind: "text" },
      { key: "keySkills", label: "Key skills", kind: "text" },
      { key: "have", label: "Skills I already have", kind: "text" },
      { key: "need", label: "Skills I need to develop", kind: "text" },
      { key: "nextStep", label: "Next career step", kind: "text" },
    ], seedRows: [
      { role: "Fraud Analyst", responsibilities: "Review flagged transactions, write investigation summaries", keySkills: "SQL, pattern detection, written communication", have: "SQL, attention to detail", need: "Formal investigation write-ups", nextStep: "Senior Fraud Investigator" },
    ] },
    { type: "table", key: "contacts", label: "Real-world insight & contacts", columns: [
      { key: "name", label: "Name", kind: "text" },
      { key: "contact", label: "Contact details", kind: "text" },
      { key: "meetingDate", label: "Meeting date", kind: "text" },
    ], seedRows: [{ name: "Not yet", contact: "Not yet", meetingDate: "Not yet scheduled" }] },
    { type: "table", key: "actionPlan", label: "Action plan", columns: [
      { key: "step", label: "Immediate action step", kind: "text" },
      { key: "timeline", label: "Timeline", kind: "text" },
    ], seedRows: [{ step: "Rewrite resume's top 3 bullets to match role language", timeline: "This week" }] },
    { type: "text", key: "summary", label: "Role research summary", hint: "The role I'm most interested in pursuing is… because it aligns with my strengths in… and my interests in…", seed: "Fraud Analyst, because it aligns with my analytical strengths and my interest in fintech" },
  ],

  11: [
    { type: "research", key: "salaryResearch", label: "Live salary research", sources: [
      { title: "Compensation report", domain: "levels.fyi", snippet: "$70 to 78K reported for this title at larger tech employers." },
      { title: "Salary estimates", domain: "glassdoor.com", snippet: "$58 to 65K reported, skewed toward smaller companies in the same sample." },
    ], synthesisSeed: "The gap tracks with company size, not inconsistent data, larger employers cluster near the Levels.fyi range." },
    { type: "table", key: "benchmarkTable", label: "Your benchmarking table", columns: [
      { key: "role", label: "Role", kind: "text" },
      { key: "location", label: "Location", kind: "text" },
      { key: "source", label: "Source", kind: "text" },
      { key: "range", label: "Salary range", kind: "text" },
      { key: "target", label: "My target range", kind: "text" },
      { key: "fit", label: "Fit", kind: "text" },
    ], seedRows: [
      { role: "Fraud Analyst", location: "Atlanta, GA", source: "Glassdoor", range: "$58K to $65K", target: "$60K to $64K", fit: "Aligns with cost of living, room to grow" },
    ] },
    { type: "table", key: "remoteComparison", label: "International / remote comparison", columns: [
      { key: "role", label: "Role", kind: "text" },
      { key: "country", label: "Country", kind: "text" },
      { key: "location", label: "Location", kind: "text" },
      { key: "source", label: "Source", kind: "text" },
      { key: "range", label: "Salary range", kind: "text" },
      { key: "target", label: "My target range", kind: "text" },
    ], seedRows: [{ role: "Fraud Analyst", country: "USA", location: "Remote", source: "Levels.fyi", range: "$70K to $78K", target: "$68K to $72K" }] },
  ],

  12: [
    { type: "textarea", key: "strengths", label: "Strengths", rows: 3, seed: "I'm analytically strong and consistently deliver high-quality work others rely on." },
    { type: "textarea", key: "weaknesses", label: "Weaknesses", rows: 3, seed: "I avoid speaking up in group settings and feel intimidated presenting to a room." },
    { type: "textarea", key: "opportunities", label: "Opportunities", rows: 3, seed: "Roles I'm interested in increasingly value communication and storytelling, a skill I can practice deliberately." },
    { type: "textarea", key: "threats", label: "Threats", rows: 3, seed: "Competition for these roles is real, and my quietness in interviews could work against me if I don't address it." },
    { type: "text", key: "focusWill", label: "Over the next three months, I will", seed: "join a student organization where I practice speaking in low-pressure settings" },
    { type: "text", key: "focusAnd", label: "And", seed: "volunteer to present at least once a month" },
    { type: "text", key: "focusBy", label: "By", seed: "the end of this term" },
    { type: "text", key: "focusThat", label: "That", seed: "turns this weakness into a developing strength before I start applying" },
  ],

  13: [
    { type: "table", key: "skillCategory", label: "Skill name & category", columns: [
      { key: "skill", label: "Skill", kind: "text" },
      { key: "category", label: "Category", kind: "text" },
    ], seedRows: [{ skill: "Professional writing", category: "Communication" }] },
    { type: "textarea", key: "whyMatters", label: "Why this skill matters", rows: 2, seed: "It repeats across almost every posting I've researched for my target role." },
    { type: "textarea", key: "currentLevel", label: "Current level (honest baseline)", rows: 2, seed: "I can write a clear email but struggle with longer structured reports." },
    { type: "textarea", key: "desiredLevel", label: "Desired level (6 to 12 month outcome)", rows: 2, seed: "Able to write a polished investigation summary without heavy editing." },
    { type: "table", key: "developmentApproach", label: "Development approach", columns: [
      { key: "skill", label: "Skill", kind: "text" },
      { key: "method", label: "Learning method", kind: "text" },
      { key: "resource", label: "Specific resource", kind: "text" },
    ], seedRows: [{ skill: "Professional writing", method: "Weekly practice + course", resource: "\"Business Writing\" on Coursera" }] },
    { type: "table", key: "practiceRhythm", label: "Practice rhythm", columns: [
      { key: "skill", label: "Skill", kind: "text" },
      { key: "rhythm", label: "Rhythm", kind: "text" },
      { key: "timeBlock", label: "Time block", kind: "text" },
    ], seedRows: [{ skill: "Professional writing", rhythm: "2x per week", timeBlock: "Tue/Thu, 30 min" }] },
    { type: "table", key: "evidenceProgress", label: "Evidence of progress", columns: [
      { key: "skill", label: "Skill", kind: "text" },
      { key: "output", label: "Tangible output", kind: "text" },
      { key: "evidence", label: "Evidence", kind: "text" },
    ], seedRows: [{ skill: "Professional writing", output: "One practice report per week", evidence: "Week 1 draft reviewed by a peer" }] },
    { type: "text", key: "reviewDate", label: "Review & adjustment date", seed: "In 3 months" },
  ],

  14: [
    { type: "text", key: "assessmentName", label: "Assessment name", seed: "CliftonStrengths" },
    { type: "text", key: "assessmentDate", label: "Assessment date", seed: "This term" },
    { type: "textarea", key: "dominantTraits", label: "Dominant personality traits", rows: 2, seed: "Learner, Achiever, Relator, Strategic, Responsibility." },
    { type: "textarea", key: "howShowsUp", label: "How this shows up in school or work", hint: "When have I seen this trait in action recently?", rows: 2, seed: "I volunteer for the projects with the steepest learning curve, even when they're not required." },
    { type: "textarea", key: "strengthsLeverage", label: "Strengths to leverage", rows: 2, seed: "My \"Learner\" trait means I ramp up fast in unfamiliar, high-ambiguity roles." },
    { type: "textarea", key: "challengesManage", label: "Challenges to manage", hint: "What patterns keep repeating that I need to consciously manage?", rows: 2, seed: "I get restless once a role becomes fully routine and my engagement visibly drops." },
    { type: "textarea", key: "roleFit", label: "Work environment & role fit", rows: 2, seed: "Roles with a steady stream of new problems, not repetitive maintenance work." },
    { type: "chipList", key: "behavioralAdjustments", label: "Behavioral adjustments I will practice", hint: "What will I intentionally do differently starting now?", seed: ["Ask for a new challenge before boredom sets in, instead of waiting"] },
    { type: "textarea", key: "careerAlignment", label: "Personality-to-career alignment", rows: 2, seed: "Roles with regular new problems to solve, not long stretches of unchanging maintenance work." },
    { type: "textarea", key: "workingSmarter", label: "Working smarter statement", hint: "How will I work smarter with my personality, not against it?", rows: 2, seed: "I'll ask for variety proactively instead of waiting for boredom to become disengagement." },
  ],

  15: [
    { type: "textarea", key: "workflowPreference", label: "Workflow preference mapping", hint: "When starting a new task, what is the first thing I naturally do?", rows: 2, seed: "I outline the whole task before touching any of it, I can't start in the middle." },
    { type: "textarea", key: "executionStyle", label: "Execution style reflection", hint: "How do I move from planning to actual completion?", rows: 2, seed: "I need a firm deadline or I'll keep refining the plan instead of executing it." },
    { type: "textarea", key: "collaborationStyle", label: "Collaboration style reflection", hint: "What role do I naturally take in a group without trying?", rows: 2, seed: "I default to organizing the group's tasks, even when I didn't ask to." },
    { type: "textarea", key: "energyManagement", label: "Energy management awareness", hint: "What conditions increase my clarity and momentum?", rows: 2, seed: "Long, uninterrupted blocks in the morning, afternoons are much weaker for deep work." },
    { type: "table", key: "observationLog", label: "Structured observation log (1 to 2 weeks)", columns: [
      { key: "day", label: "Day", kind: "text" },
      { key: "task", label: "Task worked on", kind: "text" },
      { key: "environment", label: "Environment", kind: "text" },
      { key: "energyBefore", label: "Energy before (L/M/H)", kind: "text" },
      { key: "energyAfter", label: "Energy after (L/M/H)", kind: "text" },
      { key: "helped", label: "What helped", kind: "text" },
      { key: "disrupted", label: "What disrupted my workflow", kind: "text" },
    ], seedRows: [
      { day: "Mon", task: "Problem set", environment: "Library, quiet", energyBefore: "M", energyAfter: "H", helped: "No phone nearby", disrupted: "None" },
      { day: "Wed", task: "Group project", environment: "Open study room", energyBefore: "M", energyAfter: "L", helped: "None", disrupted: "Constant interruptions from the group chat" },
    ] },
    { type: "textarea", key: "thrivingConditions", label: "Thriving conditions", rows: 2, seed: "Quiet space, clear deadline, morning hours." },
    { type: "textarea", key: "stretchConditions", label: "Stretch conditions", rows: 2, seed: "Loosely defined group work with no clear owner." },
    { type: "table", key: "teamStyleMatrix", label: "Team style comparison matrix", columns: [
      { key: "experience", label: "Team experience", kind: "text" },
      { key: "structure", label: "Team structure", kind: "text" },
      { key: "role", label: "Your role", kind: "text" },
      { key: "performance", label: "Performance (L/M/H)", kind: "text" },
      { key: "worked", label: "What worked", kind: "text" },
      { key: "friction", label: "What created friction", kind: "text" },
    ], seedRows: [{ experience: "Capstone project", structure: "4-person, no assigned lead", role: "De facto organizer", performance: "M", worked: "Clear task list I built", friction: "Ambiguity over who decided what" }] },
    { type: "chipList", key: "adaptationCommitments", label: "Adaptation strategy: behavioral commitments", hint: "“When working in unstructured teams, I will…”", seed: ["Create a mini-task outline for myself within the first 24 hours"] },
    { type: "text", key: "idealConditions", label: "My ideal work conditions", seed: "Quiet, morning hours, one clear deadline" },
    { type: "text", key: "adaptWhenNotIdeal", label: "How I will adapt when conditions aren't ideal", seed: "Build my own mini-structure inside someone else's loose plan" },
  ],

  16: [
    { type: "table", key: "decisionAudit", label: "Decision pattern identification", hint: "One row per decision, audit three real cases.", columns: [
      { key: "situation", label: "Situation / context", kind: "text" },
      { key: "stakes", label: "Stakes (L/M/H)", kind: "text" },
      { key: "timePressure", label: "Time pressure (L/M/H)", kind: "text" },
      { key: "infoAvailable", label: "Information available", kind: "text" },
      { key: "infoMissing", label: "Information missing", kind: "text" },
      { key: "consulted", label: "Consulted anyone?", kind: "text" },
      { key: "finalChoice", label: "Final choice made", kind: "text" },
      { key: "outcome", label: "Outcome", kind: "text" },
    ], seedRows: [
      { situation: "Changed jobs in 2023", stakes: "H", timePressure: "M", infoAvailable: "Salary, role scope", infoMissing: "Real team culture", consulted: "A mentor", finalChoice: "Took the offer", outcome: "Positive" },
      { situation: "Signed a lease quickly", stakes: "M", timePressure: "H", infoAvailable: "Price, location", infoMissing: "Building's real condition", consulted: "No one", finalChoice: "Signed same day", outcome: "Negative" },
      { situation: "Ended a long friendship", stakes: "H", timePressure: "L", infoAvailable: "Months of pattern", infoMissing: "Their side of it", consulted: "One close friend", finalChoice: "Stepped back", outcome: "Mixed" },
    ] },
    { type: "textarea", key: "cognitivePatterns", label: "Cognitive pattern analysis", hint: "What consistent thinking habits show up across different situations?", rows: 2, seed: "I move fastest under time pressure and slowest when the decision is emotionally loaded, even if the stakes are similar." },
    { type: "scale", key: "scaleSpeed", label: "Decision speed", section: "Speed vs. depth calibration", seed: 60 },
    { type: "scale", key: "scaleDepth", label: "Data gathering depth", section: "Speed vs. depth calibration", seed: 50 },
    { type: "scale", key: "scaleRisk", label: "Risk awareness", section: "Speed vs. depth calibration", seed: 40 },
    { type: "scale", key: "scaleEmotion", label: "Emotional influence", section: "Speed vs. depth calibration", seed: 60 },
    { type: "scale", key: "scaleLogic", label: "Logical structure", section: "Speed vs. depth calibration", seed: 70 },
    { type: "checklist", key: "biasChecklist", label: "Bias & blind spot identification", section: "Bias & blind spots", items: ["Do I overvalue my first idea?", "Do I delay decisions out of fear of being wrong?", "Do I conform to group opinions too quickly?", "Do I ignore uncomfortable data?", "Do I confuse confidence with correctness?"], seedChecked: ["Do I delay decisions out of fear of being wrong?"] },
    { type: "text", key: "blindSpot", label: "My most likely decision blind spot is", section: "Bias & blind spots", seed: "Waiting too long on emotionally loaded decisions, hoping more time will make them clearer" },
    { type: "chipList", key: "qualityFramework", label: "Decision quality evaluation framework", hint: "Before making a major decision, I will…", seed: ["Define the real problem", "Identify at least two alternatives", "Seek input from one knowledgeable person", "Set a decision deadline"] },
    { type: "textarea", key: "scenarioSimulation", label: "Scenario simulation exercise", hint: "Walk through one hypothetical decision: what info would you gather first, who would you consult, what risks would you evaluate, how would you avoid emotional bias?", rows: 3, seed: "I'd gather real team feedback first, consult my mentor, watch for sunk-cost thinking, and set a 48-hour decision deadline." },
    { type: "text", key: "defaultPattern", label: "My default decision pattern", section: "Upgrade commitments", seed: "Fast when the stakes feel low, avoidant when they feel emotionally high" },
    { type: "text", key: "upgradeRule", label: "My decision upgrade rule", section: "Upgrade commitments", seed: "For anything emotionally loaded, I give myself 48 hours and one outside opinion before deciding" },
  ],

  17: [
    { type: "table", key: "experienceAudit", label: "Learning experience audit", hint: "Two effective cases, one ineffective, one row each.", columns: [
      { key: "topic", label: "Topic / skill", kind: "text" },
      { key: "method", label: "Method used", kind: "text" },
      { key: "retention", label: "Retention after 1 week (H/M/L)", kind: "text" },
      { key: "application", label: "Ability to apply (H/M/L)", kind: "text" },
      { key: "why", label: "Why it worked / didn't", kind: "text" },
    ], seedRows: [
      { topic: "SQL joins", method: "Practice", retention: "H", application: "H", why: "I built something real with it immediately" },
      { topic: "Statistics theory", method: "Teaching a friend", retention: "H", application: "M", why: "Explaining it exposed the gaps in my understanding" },
      { topic: "A dense textbook chapter", method: "Reading only", retention: "L", application: "L", why: "No active recall, nothing stuck after a week" },
    ] },
    { type: "textarea", key: "patternStrong", label: "What methods consistently lead to strong retention?", rows: 2, seed: "Anything where I immediately build or teach something with the material." },
    { type: "textarea", key: "patternWeak", label: "What methods consistently lead to weak retention?", rows: 2, seed: "Passive reading with no output afterward." },
    { type: "table", key: "threeDayExperiment", label: "Structured learning experiment (3-day test)", columns: [
      { key: "day", label: "Day", kind: "text" },
      { key: "method", label: "Method used", kind: "text" },
      { key: "engagement", label: "Engagement", kind: "rating" },
      { key: "recall", label: "Immediate recall", kind: "rating" },
      { key: "explainWithoutNotes", label: "Explain without notes", kind: "text" },
    ], seedRows: [
      { day: "Day 1", method: "Reading notes", engagement: 2, recall: 2, explainWithoutNotes: "No" },
      { day: "Day 2", method: "Video tutorial", engagement: 3, recall: 3, explainWithoutNotes: "Partial" },
      { day: "Day 3", method: "Teaching it to someone else", engagement: 5, recall: 5, explainWithoutNotes: "Yes" },
    ] },
    { type: "scale", key: "retentionScore", label: "Retention score (revisit after 1 week)", section: "Retention measurement", seed: 70 },
    { type: "scale", key: "applicationScore", label: "Application score", section: "Retention measurement", seed: 60 },
    { type: "textarea", key: "conversionAnalysis", label: "Knowledge-to-skill conversion analysis", hint: "Do I apply concepts immediately, or delay practice? Do I need repetition or teaching to fully understand?", rows: 2, seed: "I delay practice more than I should, teaching someone else is what actually locks it in." },
    { type: "textarea", key: "frictionIdentification", label: "Friction identification", hint: "When does learning feel slow or draining? What triggers procrastination?", rows: 2, seed: "Learning feels slowest when the material is presented as pure theory with no way to apply it right away." },
    { type: "text", key: "mostEffectiveMethod", label: "My most effective learning method", section: "Integration", seed: "Teaching the material to someone else within 24 hours of first encountering it" },
    { type: "text", key: "adaptWhenDifficult", label: "How I will adapt when learning feels difficult", section: "Integration", seed: "Find one person to explain it to, even informally, before moving on" },
  ],

  18: [
    { type: "table", key: "timeAudit", label: "Time & distraction audit (1-week study)", columns: [
      { key: "day", label: "Day", kind: "text" },
      { key: "plannedTask", label: "Planned task", kind: "text" },
      { key: "distractions", label: "Distractions encountered", kind: "text" },
      { key: "focusQuality", label: "Focus quality", kind: "rating" },
      { key: "energyLevel", label: "Energy level", kind: "rating" },
      { key: "completed", label: "Task completed (Y/N)", kind: "text" },
    ], seedRows: [
      { day: "Mon", plannedTask: "Problem set", distractions: "Browser tab-switching", focusQuality: 3, energyLevel: 3, completed: "Y" },
      { day: "Tue", plannedTask: "Reading", distractions: "Browser tab-switching", focusQuality: 2, energyLevel: 2, completed: "N" },
      { day: "Wed", plannedTask: "Project work", distractions: "Notifications", focusQuality: 4, energyLevel: 4, completed: "Y" },
    ] },
    { type: "textarea", key: "weekSummary", label: "Week summary", hint: "Peak focus periods, common distractions, overcommitment patterns, energy trends.", rows: 2, seed: "Mornings are consistently my strongest focus window; tab-switching is my single biggest recurring distraction." },
    { type: "textarea", key: "weeklyPlanningMethod", label: "Weekly planning method", hint: "What exactly do I do during my weekly planning session?", rows: 2, seed: "Sunday evening, I list every task and assign each to a specific day before the week starts." },
    { type: "text", key: "weeklyOutcomeRule", label: "My weekly outcome rule", hint: "I will define no more than … major outcomes per week.", seed: "3 major outcomes" },
    { type: "text", key: "dailyPriorityRule", label: "My daily priority rule", hint: "Each day, I will complete … meaningful tasks before lower-value work.", seed: "1 meaningful task" },
    { type: "text", key: "focusBlockLength", label: "Ideal focus block length", section: "Focus block architecture", seed: "90 minutes" },
    { type: "text", key: "breakLength", label: "Break length", section: "Focus block architecture", seed: "15 minutes" },
    { type: "text", key: "environmentRequirements", label: "Environment requirements", section: "Focus block architecture", seed: "Quiet room, phone in another room" },
    { type: "text", key: "distractionPolicy", label: "Phone / distraction policy", section: "Focus block architecture", seed: "Phone on do-not-disturb, out of reach" },
    { type: "text", key: "deepWorkHours", label: "Deep work hours (time of day)", section: "Focus block architecture", seed: "8 to 10am" },
    { type: "checklist", key: "trackingSystem", label: "Progress visibility & tracking system", section: "Tracking system", items: ["Written planner", "Digital task manager", "Visual board", "Habit tracker"], seedChecked: ["Digital task manager"] },
    { type: "textarea", key: "weeklyReview", label: "Weekly review & reset ritual", hint: "What moved my goals forward? What consumed time without value? Where did focus break down?", rows: 3, seed: "Every Friday at 4pm: review the week's log, name the top distraction, adjust one rule for next week." },
    { type: "textarea", key: "frictionRecovery", label: "Friction & recovery strategy", hint: "What usually causes me to fall off track? How quickly do I recover?", rows: 2, seed: "A bad night's sleep is my biggest predictor of a lost day, I recover fastest by doing one small task to rebuild momentum." },
    { type: "text", key: "productivityNonNegotiable", label: "My productivity non-negotiable", section: "Integration", seed: "The Friday weekly review happens no matter what" },
    { type: "text", key: "resetWhenOffTrack", label: "How I will reset when I fall off track", section: "Integration", seed: "Do one small, easy task first to rebuild momentum instead of tackling the hardest thing" },
  ],

  19: [
    { type: "text", key: "who", label: "Who you are", hint: "Name, year, major.", seed: "Ada, junior, Computer Science" },
    { type: "text", key: "focus", label: "What you focus on", hint: "Interests, direction, one credential.", seed: "Backend systems and data infrastructure" },
    { type: "text", key: "headed", label: "Where you're headed", hint: "The kind of opportunity you want.", seed: "A summer internship building real backend features on a small team" },
    { type: "textarea", key: "fullIntro", label: "Full 30 to 60 second introduction", rows: 4, seed: "I'm Ada, a junior studying Computer Science focused on backend systems and data infrastructure. I've spent the last year rebuilding a club's broken sign-up system from scratch. I'm looking for a summer internship where I can build real backend features on a small team." },
  ],

  20: [
    { type: "textarea", key: "hook", label: "Specific hook", hint: "A project, a skill, or a goal.", rows: 2, seed: "I rebuilt our club's sign-up system last year and cut processing errors by half." },
    { type: "text", key: "ask", label: "Low-pressure ask or close", seed: "Would you be open to connecting on LinkedIn?" },
    { type: "textarea", key: "recruiterVersion", label: "Version for a recruiter", rows: 2, seed: "I'm a CS junior focused on backend systems, I rebuilt our club's sign-up flow and cut errors in half. I'd love to hear what backend problems your team is tackling right now." },
    { type: "textarea", key: "professorVersion", label: "Version for a professor", rows: 2, seed: "I'm in your systems course and have been applying what we're learning to a real rebuild for my club, I'd love your thoughts on where to take it next." },
  ],

  21: [
    { type: "text", key: "focusArea", label: "Focus area / field", seed: "Backend systems" },
    { type: "text", key: "signatureStrength", label: "Signature strength", seed: "Turning fragile, undocumented systems into ones people trust" },
    { type: "text", key: "outcome", label: "Outcome you create", seed: "Fewer errors, less firefighting for the team" },
    { type: "textarea", key: "statement", label: "One-to-two sentence brand statement", rows: 2, seed: "I turn fragile backend systems into ones teams can trust. I specialize in finding the undocumented failure points before they become outages." },
    { type: "text", key: "testerFeedback", label: "What one person thought you do, after reading it", seed: "\"You fix things before they break: got it.\"" },
  ],

  22: [
    { type: "table", key: "emailAudit", label: "Week-long email tone audit", hint: "Review a week of your own emails or messages.", columns: [
      { key: "context", label: "Email / message", kind: "text" },
      { key: "tone", label: "Tone (too casual / fine / too stiff)", kind: "text" },
      { key: "fix", label: "Fix", kind: "text" },
    ], seedRows: [
      { context: "Follow-up to a professor", tone: "Too casual: no greeting", fix: "Add greeting, close with full name" },
    ] },
    { type: "textarea", key: "structureNotes", label: "Your professional email structure", hint: "Greeting, purpose, ask, closing.", rows: 3, seed: "Greeting → one-line purpose → specific ask → professional close with my name and program." },
  ],

  23: [
    { type: "text", key: "lowStakesSituation", label: "One low-stakes situation this week", seed: "Raising my hand first in tomorrow's group project meeting" },
    { type: "textarea", key: "preparation", label: "How you're preparing", rows: 2, seed: "Reviewing the agenda beforehand and preparing one specific point to raise early." },
    { type: "textarea", key: "debrief", label: "Debrief after", hint: "What went well? What would you adjust?", rows: 2, seed: "Went well, speaking first meant less overthinking. Next time I'll slow my pace slightly." },
  ],

  24: [
    { type: "text", key: "capability", label: "I bring [specific capability]", seed: "catching scheduling conflicts before they become problems" },
    { type: "text", key: "helped", label: "Which helped [team or project]", seed: "our club's four-event semester" },
    { type: "text", key: "result", label: "Achieve [result]", seed: "run without a single double-booking" },
    { type: "textarea", key: "statement", label: "Full value statement", rows: 2, seed: "I catch scheduling conflicts before they become problems, which kept our club's four-event semester running without a single double-booking." },
  ],

  25: [
    { type: "chipList", key: "themes", label: "3 to 5 themes you want associated with your name", seed: ["Strategic thinking", "Follow-through", "Clear communication"] },
    { type: "table", key: "gapActions", label: "Gap-closing actions", columns: [
      { key: "theme", label: "Theme", kind: "text" },
      { key: "reality", label: "Current reality", kind: "text" },
      { key: "action", label: "Action to close the gap", kind: "text" },
    ], seedRows: [
      { theme: "Strategic thinking", reality: "Mostly doing administrative club tasks", action: "Propose and lead one strategic initiative this semester" },
    ] },
  ],

  26: [
    { type: "chipList", key: "interestAreas", label: "Top 2 to 3 areas of genuine interest or skill", seed: ["Sustainability", "Consumer marketing"] },
    { type: "textarea", key: "intersection", label: "Where they intersect", hint: "In a way most peers in your major don't combine.", rows: 2, seed: "Marketing for mission-driven consumer brands, sustainability-minded companies that still need sharp go-to-market thinking." },
    { type: "text", key: "positioningStatement", label: "Positioning statement", hint: "\"I'm the [role/major] who focuses on [intersection].\"", seed: "I'm the marketing student who focuses on mission-driven consumer brands." },
  ],

  27: [
    { type: "table", key: "feedback", label: "Reputation check-in", hint: "Ask two or three trusted people to describe you in three words.", columns: [
      { key: "person", label: "Person", kind: "text" },
      { key: "words", label: "Three words they used", kind: "text" },
    ], seedRows: [{ person: "Club co-lead", words: "Reliable, quiet, thorough" }] },
    { type: "textarea", key: "gapReflection", label: "Gap reflection", hint: "How does this compare to your intended brand themes?", rows: 2, seed: "\"Quiet\" wasn't on my list, worth watching whether that's read as reserved or disengaged." },
  ],

  28: [
    { type: "table", key: "signals", label: "Current signals vs. target industry standard", columns: [
      { key: "signal", label: "Signal", kind: "text" },
      { key: "current", label: "Current", kind: "text" },
      { key: "target", label: "Target standard", kind: "text" },
    ], seedRows: [{ signal: "Event dress", current: "Class-casual", target: "Business casual" }] },
    { type: "textarea", key: "adjustment", label: "Adjustment you're making", rows: 2, seed: "Switching to business casual for career fairs and networking events specifically." },
  ],

  29: [
    { type: "table", key: "commitmentTracker", label: "Two-week commitment tracker", columns: [
      { key: "commitment", label: "Commitment", kind: "text" },
      { key: "deadline", label: "Deadline", kind: "text" },
      { key: "completed", label: "Completed on time?", kind: "text" },
    ], seedRows: [{ commitment: "Send meeting notes", deadline: "Thu noon", completed: "Yes" }] },
    { type: "textarea", key: "vagueToSpecific", label: "Vague → specific rewrite", hint: "Replace \"I'll try to get to it\" with a real deadline.", rows: 2, seed: "\"I'll try to get to it\" → \"I'll send it by Thursday at noon.\"" },
  ],

  30: [
    { type: "text", key: "overCommitment", label: "One current commitment stretching you too thin", seed: "Leading two club events in the same week" },
    { type: "textarea", key: "proposedAdjustment", label: "Respectful adjustment message", rows: 3, seed: "\"I can take the second event on if we move the planning deadline for the first to next week: that keeps both on track without rushing either.\"" },
  ],

  31: [
    { type: "checklist", key: "sections", label: "Profile completeness checklist", items: ["Professional photo", "Headline", "About section", "Experience with quantified achievements", "Skills", "Education", "Recommendations"], seedChecked: ["Professional photo", "Education"] },
    { type: "text", key: "blankSection", label: "Section that's currently blank or outdated", seed: "About section" },
    { type: "textarea", key: "sectionDraft", label: "Draft for that section", rows: 3, seed: "Backend-focused CS student who rebuilt a fragile club system from scratch. Looking for a summer internship on a small engineering team." },
  ],

  32: [
    { type: "text", key: "role", label: "Role or major", seed: "CS student" },
    { type: "text", key: "focus", label: "Specific focus", seed: "backend systems" },
    { type: "text", key: "value", label: "Value or outcome", seed: "builds systems teams trust" },
    { type: "text", key: "headlineDraft", label: "Headline draft", seed: "CS Student Focused on Backend Systems: I Build Things Teams Trust" },
  ],

  33: [
    { type: "textarea", key: "thirdPersonBio", label: "Third-person bio (formal use)", rows: 3, seed: "Ada is a Computer Science student focused on backend systems and data infrastructure. She rebuilt her club's fragile sign-up system from scratch, cutting processing errors in half. She is currently seeking a summer internship on a small engineering team." },
    { type: "textarea", key: "firstPersonBio", label: "First-person bio (LinkedIn)", rows: 3, seed: "I'm a CS student focused on backend systems and data infrastructure. I rebuilt my club's fragile sign-up system from scratch, cutting processing errors in half. I'm looking for a summer internship on a small engineering team." },
  ],

  34: [
    { type: "textarea", key: "searchResults", label: "What came up searching your name", rows: 2, seed: "Mostly LinkedIn and a five-year-old public tweet, nothing concerning but the tweet is outdated." },
    { type: "checklist", key: "platformsChecked", label: "Platforms checked", items: ["LinkedIn", "Instagram", "X / Twitter", "Facebook", "TikTok", "Other public posts"], seedChecked: ["LinkedIn", "Instagram"] },
    { type: "textarea", key: "cleanupActions", label: "Cleanup actions taken", rows: 2, seed: "Archived the old tweet, set Instagram to private, double-checked Facebook's audience settings." },
  ],

  35: [
    { type: "checklist", key: "pages", label: "Pages built", items: ["Homepage", "Projects / portfolio page", "Resume download", "Contact method"], seedChecked: ["Homepage"] },
    { type: "text", key: "siteBuilder", label: "Site builder", seed: "Carrd" },
    { type: "text", key: "url", label: "Site URL (once live)", seed: "ada-builds.carrd.co" },
  ],

  36: [
    { type: "table", key: "projects", label: "Portfolio project case studies", hint: "3 to 5 of your strongest projects.", columns: [
      { key: "project", label: "Project", kind: "text" },
      { key: "problem", label: "Problem", kind: "text" },
      { key: "role", label: "My role", kind: "text" },
      { key: "outcome", label: "Outcome", kind: "text" },
    ], seedRows: [{ project: "Club sign-up rebuild", problem: "Sign-ups silently failed under load", role: "Sole engineer", outcome: "Cut processing errors in half" }] },
    { type: "textarea", key: "caseStudyDraft", label: "Full case study draft for your strongest project", rows: 4, seed: "Problem: our club's sign-up system silently dropped submissions during peak traffic. My role: I rebuilt it solo over one summer. Process: audited the failure logs, redesigned the queue, added retry logic. Outcome: processing errors dropped by half and sign-ups became fully reliable." },
  ],

  37: [
    { type: "checklist", key: "shotChecklist", label: "Headshot checklist", items: ["Dressed for target field", "Natural light, facing a window", "Simple, neutral background", "Multiple expressions tried"], seedChecked: ["Natural light, facing a window"] },
    { type: "text", key: "chosenPhotoNotes", label: "Notes on the photo you chose", seed: "Third shot: looked most approachable, good lighting, no distractions in the background." },
  ],

  38: [
    { type: "text", key: "colorsChosen", label: "Colors chosen", seed: "Deep plum + warm mango accent" },
    { type: "text", key: "logoIdea", label: "Simple wordmark or initials mark", seed: "Lowercase \"ada\" in a rounded sans-serif" },
    { type: "textarea", key: "whereApplied", label: "Where you've applied it", rows: 2, seed: "Portfolio site header and resume header so far." },
  ],

  39: [
    { type: "textarea", key: "before", label: "Original email", rows: 3, seed: "hey can you help me with something when you get a chance" },
    { type: "textarea", key: "after", label: "Restructured version", hint: "Greeting, purpose, ask, closing.", rows: 3, seed: "Hi Professor Diaz,\n\nI'm working on my capstone proposal and have a specific question about the data pipeline section. Could we find 15 minutes this week to talk it through?\n\nThank you,\nAda" },
  ],

  40: [
    { type: "textarea", key: "coldIntroTemplate", label: "Cold introduction template", rows: 2, seed: "Hi [Name], I'm [year/major] focused on [area]. I came across your work on [specific thing] and would love to hear how you got started in [field]." },
    { type: "textarea", key: "followUpTemplate", label: "Follow-up after meeting someone", rows: 2, seed: "Hi [Name], great meeting you at [event], I really appreciated your point about [specific topic]. Would love to stay in touch." },
    { type: "textarea", key: "thankYouTemplate", label: "Thank-you after an interview", rows: 2, seed: "Hi [Name], thank you for the conversation today, I especially enjoyed hearing about [specific detail]. Looking forward to next steps." },
  ],

  41: [
    { type: "text", key: "preparedQuestion", label: "One prepared question or contribution point", seed: "\"Should we lock the event date before or after we confirm the venue?\"" },
    { type: "textarea", key: "reflection", label: "What happened when you raised it", rows: 2, seed: "It reframed the discussion: we ended up confirming the venue first, which the team hadn't considered." },
  ],

  42: [
    { type: "text", key: "question1", label: "Prepared question 1", seed: "What's one thing about this role that surprised you after you started?" },
    { type: "text", key: "question2", label: "Prepared question 2", seed: "What do new hires usually struggle to learn?" },
    { type: "textarea", key: "researchNotes", label: "Research done beforehand", rows: 2, seed: "Read the company's last two product announcements and their engineering blog's most recent post." },
  ],

  43: [
    { type: "textarea", key: "conversationNotes", label: "What you paraphrased back", rows: 2, seed: "\"So what I'm hearing is the delay was really about unclear ownership, not about the timeline itself.\"" },
    { type: "textarea", key: "reflection", label: "Reflection", rows: 2, seed: "Paraphrasing first slowed me down in a good way, the follow-up question I asked was sharper because of it." },
  ],

  44: [
    { type: "text", key: "topic", label: "Topic recorded", seed: "Elevator pitch" },
    { type: "table", key: "attempts", label: "Recording attempts", columns: [
      { key: "attempt", label: "Attempt", kind: "text" },
      { key: "fillerCount", label: "Filler word count", kind: "text" },
      { key: "notes", label: "Notes", kind: "text" },
    ], seedRows: [
      { attempt: "1", fillerCount: "14 \"ums\"", notes: "Rushed the middle section" },
      { attempt: "2", fillerCount: "4 \"ums\"", notes: "Paused instead of filling silence: much steadier" },
    ] },
    { type: "textarea", key: "improvement", label: "What you'll adjust next", rows: 2, seed: "Keep pausing instead of filling silence, and slow down the opening line specifically." },
  ],

  45: [
    { type: "checklist", key: "setupChecklist", label: "Recording setup checklist", items: ["Good natural lighting", "Simple, uncluttered background", "Script adapted for video (warmer tone)", "2 to 3 takes recorded"], seedChecked: ["Good natural lighting"] },
    { type: "textarea", key: "script", label: "Video script", rows: 3, seed: "Hi, I'm Ada, a CS junior focused on backend systems. Last year I rebuilt my club's sign-up system from scratch and cut errors in half. I'm looking for a summer internship where I can build real backend features on a small team." },
  ],

  46: [
    { type: "checklist", key: "platforms", label: "Platform strategy", items: ["LinkedIn, professional", "Instagram, private", "X / Twitter, professional", "TikTok, private", "Other"], seedChecked: ["LinkedIn, professional", "Instagram, private"] },
    { type: "text", key: "weeklyCommitment", label: "Realistic weekly commitment", seed: "One comment or share per week, no more" },
  ],

  47: [
    { type: "chipList", key: "accountsToFollow", label: "10 to 15 accounts to follow in your field", seed: ["Stripe Engineering", "A target-company CTO", "An alumnus in your field"] },
    { type: "table", key: "commentLog", label: "Comment log", columns: [
      { key: "post", label: "Post / person", kind: "text" },
      { key: "comment", label: "Your comment", kind: "text" },
      { key: "response", label: "Response?", kind: "text" },
    ], seedRows: [{ post: "Alumnus's post on fraud detection", comment: "Asked a specific follow-up about their model's false-positive rate", response: "They replied with detail" }] },
  ],

  48: [
    { type: "table", key: "shares", label: "Content shares", columns: [
      { key: "source", label: "Article / post", kind: "text" },
      { key: "reflection", label: "My reflection (2 to 3 sentences)", kind: "text" },
      { key: "date", label: "Date", kind: "text" },
    ], seedRows: [{ source: "Industry report on fraud trends", reflection: "Connected it to a project I'd worked on and asked a follow-up question", date: "This month" }] },
  ],

  49: [
    { type: "text", key: "topic", label: "Specific, narrow topic", seed: "The mistake I made in my first internship's first week" },
    { type: "textarea", key: "outline", label: "Rough outline", rows: 3, seed: "1. The mistake (assumed instead of asked) 2. What it cost 3. What I changed 4. What I'd tell someone starting their first internship" },
    { type: "textarea", key: "draft", label: "First draft", rows: 4, seed: "In my first week, I assumed I understood a request instead of asking a clarifying question, and redid two days of work as a result..." },
  ],

  50: [
    { type: "text", key: "theme", label: "Common theme across your posts", seed: "Things no one tells you about your first internship" },
    { type: "chipList", key: "futureTopics", label: "3 to 5 future topics", seed: ["Asking clarifying questions", "How to handle your first mistake", "Reading team dynamics fast"] },
    { type: "text", key: "cadence", label: "Realistic publishing cadence", seed: "Monthly" },
  ],

  51: [
    { type: "research", key: "trendResearch", label: "Live trend research", sources: [
      { title: "Industry trend brief", domain: "industry-report.com", snippet: "Sustainable packaging regulation is tightening across major markets, reshaping vendor requirements." },
    ], synthesisSeed: "This shifts hiring toward roles that can navigate both compliance and vendor relationships, worth naming directly in outreach." },
    { type: "textarea", key: "analysis", label: "Your analysis", hint: "Why does it matter, and what might it mean for someone entering the field?", rows: 4, seed: "The regulation shift means new hires who understand both compliance and vendor sourcing will be unusually valuable over the next two years, most programs don't teach that intersection yet." },
  ],

  52: [
    { type: "chipList", key: "openers", label: "3 to 4 prepared conversation openers", seed: ["\"I saw your team's recent product launch, what's been the reaction internally?\""] },
    { type: "text", key: "eventContext", label: "Event these are tailored to", seed: "Spring career fair" },
  ],

  53: [
    { type: "text", key: "targetJobListing", label: "Job listing you're tailoring to", seed: "Backend Engineering Intern: target company" },
    { type: "table", key: "bullets", label: "Bullet rewrites", columns: [
      { key: "original", label: "Original bullet", kind: "text" },
      { key: "rewritten", label: "Rewritten (action verb + outcome)", kind: "text" },
    ], seedRows: [{ original: "Responsible for club website", rewritten: "Rebuilt club sign-up system, cutting processing errors by 50%" }] },
  ],

  54: [
    { type: "text", key: "companyDetail", label: "Specific, recent company detail", seed: "Their engineering blog post on reliability culture" },
    { type: "textarea", key: "openingHook", label: "Opening hook", rows: 2, seed: "Your engineering blog's recent post on reliability culture is exactly the mindset I built my own system rebuild around." },
    { type: "textarea", key: "bodyStory", label: "One concrete story", rows: 3, seed: "Last year I rebuilt my club's fragile sign-up system after repeated silent failures, cutting processing errors in half through better queue design and retry logic." },
    { type: "textarea", key: "closing", label: "Closing", rows: 2, seed: "I'd welcome the chance to bring that same care for reliability to your team this summer." },
  ],

  55: [
    { type: "textarea", key: "signatureDraft", label: "Email signature draft", rows: 3, seed: "Ada Lovelace\nComputer Science, Class of 2027\nlinkedin.com/in/adalovelace" },
    { type: "text", key: "digitalCardMethod", label: "Digital card method", seed: "QR code linking to LinkedIn, saved to phone home screen" },
  ],

  56: [
    { type: "text", key: "project1", label: "Strongest project", seed: "Club sign-up system rebuild" },
    { type: "textarea", key: "walkthrough1", label: "2 to 3 minute spoken walkthrough", rows: 4, seed: "The problem was silent failures under load. My role was sole engineer on the rebuild. I audited the failure logs, redesigned the queue, and added retry logic. The outcome was a 50% drop in processing errors and zero silent failures since." },
  ],

  57: [
    { type: "chipList", key: "questionsToAsk", label: "Specific questions to ask your reviewer", seed: ["Does this project selection make sense for the roles I'm targeting?", "Is anything here reading as generic?"] },
    { type: "textarea", key: "feedbackReceived", label: "Feedback received", rows: 3, seed: "Reviewer flagged that my second project didn't clearly show my individual role versus the team's, suggested swapping it for the sign-up rebuild instead." },
    { type: "textarea", key: "changesApplied", label: "Changes you applied", rows: 2, seed: "Swapped the second project and added a one-line \"my role\" callout to every case study." },
  ],

  58: [
    { type: "checklist", key: "consistencyChecklist", label: "Consistency checklist", items: ["Photo matches everywhere", "Brand statement / headline matches", "Key achievements match", "Contact info matches"], seedChecked: ["Photo matches everywhere"] },
    { type: "textarea", key: "inconsistenciesFound", label: "Inconsistencies found", rows: 2, seed: "Resume lists my newest internship but LinkedIn still shows the old role, needs updating." },
    { type: "text", key: "nextReviewDate", label: "Next review date", seed: "Start of next semester" },
  ],

  59: [
    { type: "checklist", key: "coreColumns", label: "Core columns", section: "Core columns", items: ["Company", "Role", "Date Applied", "Resume/Cover Letter Version Used", "Application Source", "Deadline", "Current Status", "Next Action"], seedChecked: ["Company", "Role", "Date Applied"] },
    { type: "table", key: "activeApplications", label: "Active applications log", section: "Active applications log", columns: [
      { key: "companyRole", label: "Company / Role", kind: "text" },
      { key: "dateApplied", label: "Date applied", kind: "text" },
      { key: "versionUsed", label: "Version used", kind: "text" },
      { key: "status", label: "Status", kind: "text" },
      { key: "nextAction", label: "Next action", kind: "text" },
    ], seedRows: [
      { companyRole: "Acme Corp, Fraud Analyst", dateApplied: "Mar 3", versionUsed: "Skills-first v2", status: "Awaiting response", nextAction: "Follow up Mar 10" },
    ] },
    { type: "textarea", key: "weeklyFollowUps", label: "Which applications need a follow-up this week?", section: "Weekly review", rows: 2, seed: "Acme Corp (past the 7-day mark), Northwind (interview scheduled, needs prep)." },
    { type: "textarea", key: "responsePattern", label: "What pattern am I noticing in response rates so far?", rows: 2, seed: "Tailored applications are getting more replies than quick-apply ones." },
    { type: "text", key: "setupDate", label: "Tracker set up on (date)", section: "Sign-off", seed: "This week" },
    { type: "text", key: "reviewDay", label: "Weekly review day I'll commit to", seed: "Sunday evenings" },
  ],

  60: [
    { type: "text", key: "targetTitles", label: "Target job titles", section: "Target role criteria", seed: "Fraud Analyst, Risk Analyst" },
    { type: "text", key: "targetIndustries", label: "Target industries", seed: "Fintech, banking" },
    { type: "textarea", key: "mustHave", label: "Must-have criteria (non-negotiable)", rows: 2, seed: "Remote-friendly, entry-level or new-grad track" },
    { type: "textarea", key: "niceToHave", label: "Nice-to-have criteria (flexible)", rows: 2, seed: "Mentorship program, name-brand company" },
    { type: "text", key: "weeklyTarget", label: "Applications per week I'm committing to", section: "Weekly application targets", seed: "5 tailored applications" },
    { type: "text", key: "tailoredRatio", label: "Tailored vs. quick-apply ratio", seed: "3 tailored to 2 quick-apply" },
    { type: "checklist", key: "tailoringChecklist", label: "Tailoring checklist", section: "Tailoring checklist", items: ["Resume keywords matched to posting", "Cover letter references something specific about the company", "Application source noted in tracker", "Application logged same day"], seedChecked: [] },
    { type: "textarea", key: "strategyStatement", label: "Strategy statement", section: "Strategy statement", rows: 2, seed: "I'm targeting fraud and risk analyst roles at fintech companies that value mentorship, applying to 5 tailored roles a week." },
  ],

  61: [
    { type: "textarea", key: "versionADesc", label: "Version A description", section: "What you're testing", rows: 2, seed: "Chronological format, one page, summary at top." },
    { type: "textarea", key: "versionBDesc", label: "Version B description", rows: 2, seed: "Skills-first format, one page, no summary." },
    { type: "text", key: "variableTested", label: "The one variable being tested", seed: "Chronological vs. skills-first layout" },
    { type: "table", key: "resultsTracker", label: "Results tracker", section: "Results tracker", columns: [
      { key: "appNum", label: "Application #", kind: "text" },
      { key: "version", label: "Version used (A/B)", kind: "text" },
      { key: "companyType", label: "Company type", kind: "text" },
      { key: "callback", label: "Callback? (Y/N)", kind: "text" },
    ], seedRows: [{ appNum: "1", version: "B", companyType: "Fintech startup", callback: "Y" }] },
    { type: "textarea", key: "whichWon", label: "Which version got more callbacks?", section: "Analysis", rows: 2, seed: "Version B, the skills-first layout, got noticeably more callbacks." },
    { type: "text", key: "sampleSizeOk", label: "Was the sample size large enough to trust the result?", seed: "Close, 12 applications per version so far" },
    { type: "textarea", key: "standardizeOn", label: "What will I standardize on going forward?", rows: 2, seed: "Skills-first layout for all future applications." },
    { type: "text", key: "winningVersion", label: "Winning version", seed: "Version B" },
  ],

  62: [
    { type: "textarea", key: "baseLetter", label: "Base letter", section: "Base letter", hint: "Draft a strong base version you can adapt, not a rigid template.", rows: 5, seed: "I'm writing to apply for the Fraud Analyst role at [Company]. In my coursework and internship, I've built a habit of catching patterns others miss." },
    { type: "table", key: "customizationLog", label: "Customization log", section: "Customization log", columns: [
      { key: "companyRole", label: "Company / Role", kind: "text" },
      { key: "detail", label: "Specific detail referenced", kind: "text" },
      { key: "sectionChanged", label: "Section changed", kind: "text" },
      { key: "timeSpent", label: "Time spent", kind: "text" },
    ], seedRows: [{ companyRole: "Acme Corp, Fraud Analyst", detail: "Their Q3 fraud-prevention blog post", sectionChanged: "Opening hook", timeSpent: "18 min" }] },
    { type: "checklist", key: "qualityCheck", label: "Quality check", section: "Quality check", items: ["References something specific about the company", "Not just a resume repeated in paragraph form", "Opens with a real hook, not a generic line", "Under one page"], seedChecked: ["Under one page"] },
  ],

  63: [
    { type: "text", key: "companyRole", label: "Company / role", section: "The listing", seed: "Acme Corp, Fraud Analyst" },
    { type: "text", key: "listingSource", label: "Listing link or source", seed: "Company careers page" },
    { type: "table", key: "keywordExtraction", label: "Keyword extraction", section: "Keyword extraction", columns: [
      { key: "keyword", label: "Keyword / phrase", kind: "text" },
      { key: "frequency", label: "Frequency", kind: "text" },
      { key: "whereInResume", label: "Where it appears in my resume", kind: "text" },
    ], seedRows: [{ keyword: "pattern detection", frequency: "3x", whereInResume: "Summary and bullet 2" }] },
    { type: "textarea", key: "priorityOrder", label: "What does the order of requirements suggest about real priorities?", section: "Reading between the lines", rows: 2, seed: "SQL and pattern detection are listed first, before any degree requirement." },
    { type: "textarea", key: "preferredToAddress", label: "What's listed as preferred that I should still address?", rows: 2, seed: "Experience with case management software, I'll mention my adjacent tool experience." },
    { type: "textarea", key: "whatToAsk", label: "What does the listing not say that I should ask about?", rows: 2, seed: "Whether the role is hybrid or fully in-office." },
    { type: "chipList", key: "topKeywords", label: "Top 3 keywords to emphasize", section: "Application notes", seed: ["pattern detection", "SQL", "investigation write-ups"] },
  ],

  64: [
    { type: "textarea", key: "story1Situation", label: "Situation", section: "STAR story 1", rows: 2, seed: "Our club's sign-up system was silently failing under load before a big event." },
    { type: "textarea", key: "story1Task", label: "Task", rows: 2, seed: "I was the only one with backend access, so fixing it fell to me." },
    { type: "textarea", key: "story1Action", label: "Action", rows: 2, seed: "I audited the failure logs, redesigned the queue, and added retry logic." },
    { type: "textarea", key: "story1Result", label: "Result", rows: 2, seed: "Processing errors dropped 50% and we had zero silent failures at the event." },
    { type: "chipList", key: "story1Questions", label: "Questions this story could answer", seed: ["Tell me about a technical problem you solved", "Tell me about a time you worked independently"] },
    { type: "textarea", key: "story2Situation", label: "Situation", section: "STAR story 2", rows: 2, seed: "A group project teammate stopped responding two weeks before the deadline." },
    { type: "textarea", key: "story2Task", label: "Task", rows: 2, seed: "I needed to redistribute their work without blowing up the timeline." },
    { type: "textarea", key: "story2Action", label: "Action", rows: 2, seed: "I split their section between the rest of us and set daily check-ins." },
    { type: "textarea", key: "story2Result", label: "Result", rows: 2, seed: "We submitted on time and the teammate rejoined for the presentation." },
    { type: "chipList", key: "story2Questions", label: "Questions this story could answer", seed: ["Tell me about a conflict on a team", "Tell me about a time you showed leadership"] },
    { type: "textarea", key: "story3Situation", label: "Situation", section: "STAR story 3", rows: 2, seed: "I misjudged a project timeline and delivered a first draft two days late." },
    { type: "textarea", key: "story3Task", label: "Task", rows: 2, seed: "I needed to own the mistake and rebuild trust with my team lead." },
    { type: "textarea", key: "story3Action", label: "Action", rows: 2, seed: "I flagged it as soon as I knew, proposed a revised timeline, and delivered early on the next milestone." },
    { type: "textarea", key: "story3Result", label: "Result", rows: 2, seed: "My team lead gave me more ownership on the next project." },
    { type: "chipList", key: "story3Questions", label: "Questions this story could answer", seed: ["Tell me about a mistake you made", "Tell me about a time you missed a deadline"] },
    { type: "table", key: "practiceLog", label: "Practice log", section: "Practice log", columns: [
      { key: "storyUsed", label: "Story used", kind: "text" },
      { key: "question", label: "Question asked", kind: "text" },
      { key: "notes", label: "Delivery notes", kind: "text" },
    ], seedRows: [{ storyUsed: "Story 1", question: "Tell me about a problem you solved", notes: "Ran 15 seconds too long, tighten the Situation." }] },
  ],

  65: [
    { type: "table", key: "questionsBank", label: "Common questions bank", section: "Common questions bank", hint: "Match each question to one of your STAR stories from C6.", columns: [
      { key: "question", label: "Behavioral question", kind: "text" },
      { key: "storyMatched", label: "STAR story matched", kind: "text" },
      { key: "confidence", label: "Confidence (1 to 10)", kind: "rating" },
    ], seedRows: [{ question: "Tell me about a time you dealt with conflict", storyMatched: "Story 2, the unresponsive teammate", confidence: 3 }] },
    { type: "textarea", key: "leastPrepared", label: "Which question type do I feel least prepared for?", section: "Weak spots", rows: 2, seed: "Questions about handling failure or being told no." },
    { type: "textarea", key: "storyToDevelop", label: "What story could I develop to cover that gap?", rows: 2, seed: "The time my first draft was rejected and I had to rework it under a tighter deadline." },
    { type: "table", key: "practiceLog", label: "Practice log", section: "Practice log", columns: [
      { key: "practicedWith", label: "Practiced with", kind: "text" },
      { key: "question", label: "Question", kind: "text" },
      { key: "feedback", label: "Feedback", kind: "text" },
    ], seedRows: [{ practicedWith: "Career center advisor", question: "Tell me about a conflict", feedback: "Good structure, land the result faster." }] },
  ],

  66: [
    { type: "table", key: "skillAreas", label: "Skill areas to cover", section: "Skill areas", columns: [
      { key: "skill", label: "Skill / topic area", kind: "text" },
      { key: "confidence", label: "Current confidence (1 to 10)", kind: "rating" },
      { key: "resource", label: "Practice resource", kind: "text" },
    ], seedRows: [{ skill: "SQL joins and window functions", confidence: 3, resource: "LeetCode SQL track" }] },
    { type: "table", key: "practiceSchedule", label: "Practice schedule", section: "Practice schedule", columns: [
      { key: "day", label: "Day", kind: "text" },
      { key: "topic", label: "Topic", kind: "text" },
      { key: "timeBlock", label: "Time block", kind: "text" },
    ], seedRows: [{ day: "Tuesday", topic: "SQL joins", timeBlock: "7 to 8 PM" }] },
    { type: "table", key: "mockProblemLog", label: "Mock problem log", section: "Mock problem log", columns: [
      { key: "problem", label: "Problem / question", kind: "text" },
      { key: "solved", label: "Solved? (Y/N)", kind: "text" },
      { key: "different", label: "What I'd do differently", kind: "text" },
    ], seedRows: [{ problem: "Flag duplicate transactions", solved: "Y", different: "Would use a window function instead of a subquery." }] },
    { type: "textarea", key: "shakiestArea", label: "What technical area still feels shakiest?", section: "Reflection", rows: 2, seed: "Window functions under time pressure." },
    { type: "textarea", key: "planToClose", label: "What's my plan to close that gap before the interview?", rows: 2, seed: "Ten focused problems this week, timed." },
  ],

  67: [
    { type: "chipList", key: "frameworkSteps", label: "My case-solving steps", section: "My framework", hint: "Write out the structure you'll default to when given an open-ended case.", seed: ["Clarify the objective", "Structure the problem into branches", "Ask for or estimate the data I need", "Work through each branch out loud", "Synthesize a recommendation"] },
    { type: "table", key: "practiceCaseLog", label: "Practice case log", section: "Practice case log", columns: [
      { key: "prompt", label: "Case prompt", kind: "text" },
      { key: "framework", label: "Framework used", kind: "text" },
      { key: "stuck", label: "Where I got stuck", kind: "text" },
      { key: "time", label: "Time taken", kind: "text" },
    ], seedRows: [{ prompt: "Should a coffee chain enter a new city?", framework: "Market entry", stuck: "Sizing the addressable market", time: "25 min" }] },
    { type: "textarea", key: "consistentlyStuck", label: "Where do I consistently get stuck?", section: "Reflection", rows: 2, seed: "Sizing and estimation, I jump to a number too fast." },
    { type: "textarea", key: "nextTimeChange", label: "What's one thing I'll do differently next practice case?", rows: 2, seed: "Narrate my estimation logic step by step instead of guessing out loud." },
  ],

  68: [
    { type: "text", key: "mockPartner", label: "Mock partner", section: "Setup", seed: "Career center advisor" },
    { type: "text", key: "dateTime", label: "Date / time", seed: "Thursday, 4 PM" },
    { type: "text", key: "format", label: "Format (video / in person / phone)", seed: "Video call" },
    { type: "scale", key: "overallConfidence", label: "Overall confidence", section: "Self-assessment (immediately after)", seed: 60 },
    { type: "scale", key: "clarityOfAnswers", label: "Clarity of answers", seed: 70 },
    { type: "scale", key: "composure", label: "Composure under pressure", seed: 50 },
    { type: "textarea", key: "whatWorked", label: "What structure or delivery worked well?", section: "Partner feedback", rows: 2, seed: "STAR stories landed clearly and the results stood out." },
    { type: "textarea", key: "whatUnclear", label: "Where did answers feel unclear or unfocused?", rows: 2, seed: "The technical walkthrough rambled before getting to the point." },
    { type: "textarea", key: "biggestFix", label: "What's the single biggest thing to fix before the real interview?", rows: 2, seed: "Lead with the result, then explain how I got there." },
    { type: "chipList", key: "actionItems", label: "What I'll adjust before the next round", section: "Action items", seed: ["Lead with the result first", "Trim the technical walkthrough to 90 seconds"] },
  ],

  69: [
    { type: "text", key: "marketRange", label: "Market salary range for this role (researched)", section: "Know your numbers", seed: "$58K to $68K" },
    { type: "text", key: "targetNumber", label: "My target number", seed: "$64K" },
    { type: "text", key: "walkAway", label: "My walk-away minimum", seed: "$58K" },
    { type: "table", key: "beyondSalary", label: "Beyond salary", section: "Beyond salary", columns: [
      { key: "factor", label: "Factor (benefits, start date, remote, etc.)", kind: "text" },
      { key: "priority", label: "Priority (H/M/L)", kind: "text" },
      { key: "flexible", label: "Flexible?", kind: "text" },
    ], seedRows: [{ factor: "Remote flexibility", priority: "H", flexible: "Somewhat" }] },
    { type: "textarea", key: "howOpen", label: "How I'll open the conversation", section: "Talking points", rows: 2, seed: "Thank them for the offer, then ask if there's room to discuss the number." },
    { type: "textarea", key: "ifAskedFirst", label: "My response if they ask for a number first", rows: 2, seed: "I'll share my researched range and let them respond within it." },
    { type: "textarea", key: "ifFinal", label: "My response if they say the offer is final", rows: 2, seed: "I'll ask if there's flexibility elsewhere, like start date or a signing bonus." },
    { type: "textarea", key: "finalResult", label: "Final result", section: "Outcome log", rows: 2, seed: "Not yet negotiated." },
  ],

  70: [
    { type: "text", key: "interviewerNames", label: "Interviewer name(s)", section: "Draft", seed: "Jordan Reyes" },
    { type: "textarea", key: "specificDetail", label: "One specific detail from the conversation to reference", rows: 2, seed: "Their mention of the team's new fraud-pattern dashboard launching next quarter." },
    { type: "table", key: "sendTracker", label: "Send tracker", section: "Send tracker", columns: [
      { key: "interview", label: "Interview", kind: "text" },
      { key: "sentWithin24", label: "Sent within 24 hrs? (Y/N)", kind: "text" },
      { key: "response", label: "Response received", kind: "text" },
    ], seedRows: [{ interview: "Acme Corp, first round", sentWithin24: "Y", response: "Not yet" }] },
  ],

  71: [
    { type: "text", key: "assessmentType", label: "Assessment name / type", section: "Assessment details", seed: "Numerical reasoning test" },
    { type: "text", key: "assessmentFormat", label: "Format (timed, multiple choice, etc.)", seed: "Timed, 25 questions, 20 minutes" },
    { type: "text", key: "assessmentDate", label: "Date scheduled", seed: "Next Friday" },
    { type: "table", key: "practiceLog", label: "Practice log", section: "Practice log", columns: [
      { key: "round", label: "Practice round", kind: "text" },
      { key: "score", label: "Score / result", kind: "text" },
      { key: "weakAreas", label: "Weak areas noticed", kind: "text" },
    ], seedRows: [{ round: "Round 1", score: "14/25", weakAreas: "Ran out of time on data tables" }] },
    { type: "textarea", key: "biggestWeakArea", label: "What's my biggest weak area based on practice rounds?", section: "Prep plan", rows: 2, seed: "Reading data tables quickly under time pressure." },
    { type: "textarea", key: "strengthenPlan", label: "What's my plan to strengthen it before the real assessment?", rows: 2, seed: "Two more timed practice sets focused on table-reading questions." },
  ],

  72: [
    { type: "text", key: "topic", label: "Topic / assignment", section: "Presentation plan", seed: "Case study walkthrough for the final-round interview" },
    { type: "text", key: "timeLimit", label: "Time limit", seed: "5 minutes" },
    { type: "chipList", key: "keyPoints", label: "Key points I want to land", seed: ["The problem framing", "My recommended approach", "The expected impact"] },
    { type: "table", key: "practiceLog", label: "Practice log", section: "Practice log", columns: [
      { key: "attempt", label: "Attempt", kind: "text" },
      { key: "length", label: "Length", kind: "text" },
      { key: "feedback", label: "Feedback", kind: "text" },
    ], seedRows: [{ attempt: "1", length: "7:30", feedback: "Cut the background section, it ran long." }] },
    { type: "checklist", key: "finalCheck", label: "Final check", section: "Final check", items: ["Stays within time limit", "Opens with a clear point, not a slow warm-up", "Visuals (if any) are simple, not cluttered", "Practiced out loud at least twice"], seedChecked: ["Practiced out loud at least twice"] },
  ],

  73: [
    { type: "textarea", key: "breathingStep", label: "Breathing / grounding step", section: "Routine design", rows: 2, seed: "Four slow breaths, in for four counts, out for six." },
    { type: "textarea", key: "visualization", label: "Visualization: what I picture before walking in", rows: 2, seed: "Walking out of the interview feeling like I represented myself accurately." },
    { type: "text", key: "phrase", label: "One phrase I tell myself right before starting", seed: "I already know this material, I just need to say it out loud." },
    { type: "checklist", key: "preInterviewChecklist", label: "Pre-interview checklist", section: "Pre-interview checklist", items: ["Reviewed the job listing and my notes", "Reviewed 2 to 3 STAR stories", "Did the grounding routine", "Arrived or logged on 10 minutes early"], seedChecked: [] },
    { type: "scale", key: "howComposed", label: "How composed I felt", section: "Post-interview debrief", seed: 60 },
    { type: "textarea", key: "whatHelped", label: "What helped the most this time?", rows: 2, seed: "The breathing exercise, it actually slowed my heart rate down." },
    { type: "textarea", key: "adjustNextTime", label: "What will I adjust in the routine next time?", rows: 2, seed: "Do the visualization earlier, not in the last 2 minutes." },
  ],

  74: [
    { type: "textarea", key: "defaultTemplate", label: "My default template", section: "My default template", rows: 4, seed: "Thank you for taking the time to speak with me about [role] today. I especially enjoyed hearing about [specific detail]. I'm even more excited about the opportunity after our conversation, and I look forward to hearing about next steps." },
    { type: "table", key: "habitTracker", label: "Habit tracker", section: "Habit tracker", columns: [
      { key: "date", label: "Interview date", kind: "text" },
      { key: "sent", label: "Thank-you sent? (Y/N)", kind: "text" },
      { key: "within24", label: "Sent within 24 hrs?", kind: "text" },
    ], seedRows: [{ date: "Mar 3", sent: "Y", within24: "Y" }] },
    { type: "text", key: "sendRate", label: "My send rate this month", section: "Consistency check", seed: "100%, 3 for 3" },
  ],

  75: [
    { type: "checklist", key: "systemSetup", label: "System setup", section: "System setup", items: ["Calendar app chosen", "Reminder set for 3 days before each deadline", "Reminder set for day-of", "Synced with phone notifications"], seedChecked: ["Calendar app chosen"] },
    { type: "table", key: "upcomingDeadlines", label: "Upcoming deadlines", section: "Upcoming deadlines", columns: [
      { key: "companyRole", label: "Company / role", kind: "text" },
      { key: "deadline", label: "Deadline", kind: "text" },
      { key: "daysUntil", label: "Days until due", kind: "text" },
      { key: "status", label: "Status", kind: "text" },
    ], seedRows: [{ companyRole: "Acme Corp, Fraud Analyst", deadline: "Mar 15", daysUntil: "6", status: "Not yet submitted" }] },
    { type: "textarea", key: "missedAny", label: "Have I missed any deadlines so far?", section: "Missed deadline review", rows: 2, seed: "Not yet." },
    { type: "textarea", key: "whatCaused", label: "What caused it, and what will prevent it next time?", rows: 2, seed: "Not applicable so far, reminders are set 3 days out to stay ahead." },
  ],

  76: [
    { type: "table", key: "networkMap", label: "Network map", section: "Network map", hint: "List connections at companies you're targeting.", columns: [
      { key: "connection", label: "Connection", kind: "text" },
      { key: "company", label: "Company", kind: "text" },
      { key: "relationship", label: "Relationship", kind: "text" },
      { key: "asked", label: "Asked for referral? (Y/N)", kind: "text" },
    ], seedRows: [{ connection: "Priya M.", company: "Acme Corp", relationship: "Alum from my program", asked: "N" }] },
    { type: "textarea", key: "referralDraft", label: "Referral request draft", section: "Referral request draft", rows: 3, seed: "Hi Priya, I saw you're on the fraud team at Acme. I just applied for the Fraud Analyst role and would love to hear a bit about what the team's working on, no pressure at all if you're busy." },
    { type: "table", key: "networkVsCold", label: "Network vs. cold comparison", section: "Network vs. cold comparison", columns: [
      { key: "application", label: "Application", kind: "text" },
      { key: "method", label: "Method (network / cold)", kind: "text" },
      { key: "outcome", label: "Outcome", kind: "text" },
    ], seedRows: [{ application: "Acme Corp", method: "Network", outcome: "Referred within 3 days" }] },
    { type: "textarea", key: "whichPerforms", label: "What I'm noticing about which method performs better", rows: 2, seed: "Warm intros are getting faster responses than cold applications so far." },
  ],

  77: [
    { type: "text", key: "company", label: "Company", section: "Company basics", seed: "Acme Corp" },
    { type: "textarea", key: "missionValues", label: "Mission / stated values", rows: 2, seed: "Making fraud detection fast enough that honest customers never feel it." },
    { type: "textarea", key: "recentNews", label: "Recent news or developments", rows: 2, seed: "Just launched a new real-time fraud-pattern dashboard." },
    { type: "table", key: "cultureSignals", label: "Culture signals", section: "Culture signals", columns: [
      { key: "source", label: "Source (Glassdoor, LinkedIn, etc.)", kind: "text" },
      { key: "whatItTells", label: "What it tells me", kind: "text" },
    ], seedRows: [{ source: "Glassdoor", whatItTells: "Reviewers mention strong onboarding and mentorship for new analysts." }] },
    { type: "table", key: "keyPeople", label: "Key people", section: "Key people", columns: [
      { key: "name", label: "Name", kind: "text" },
      { key: "role", label: "Role", kind: "text" },
      { key: "background", label: "Relevant background", kind: "text" },
    ], seedRows: [{ name: "Jordan Reyes", role: "Hiring manager", background: "Former auditor, 6 years on the fraud team" }] },
    { type: "textarea", key: "myAngle", label: "How I'll connect my background to their specific mission", section: "My angle", rows: 2, seed: "My coursework in pattern detection lines up directly with their real-time dashboard work." },
  ],

  78: [
    { type: "table", key: "weightedFactors", label: "Weighted factors", section: "Weighted factors", hint: "List and weight the factors that matter most, drawing on your Stage One Core Values Audit.", columns: [
      { key: "factor", label: "Factor", kind: "text" },
      { key: "weight", label: "Weight (1 to 10)", kind: "rating" },
    ], seedRows: [
      { factor: "Growth and mentorship", weight: 9 },
      { factor: "Salary", weight: 6 },
    ] },
    { type: "table", key: "offerScoring", label: "Offer scoring", section: "Offer scoring", columns: [
      { key: "factor", label: "Factor", kind: "text" },
      { key: "offerA", label: "Offer A score", kind: "rating" },
      { key: "offerB", label: "Offer B score", kind: "rating" },
    ], seedRows: [{ factor: "Growth and mentorship", offerA: 4, offerB: 5 }] },
    { type: "text", key: "offerATotal", label: "Offer A weighted total", section: "Totals & decision", seed: "" },
    { type: "text", key: "offerBTotal", label: "Offer B weighted total", seed: "" },
    { type: "textarea", key: "matchesGut", label: "Does the highest-scoring offer match my gut instinct?", rows: 2, seed: "" },
    { type: "textarea", key: "ifNot", label: "If not, what does that tell me?", rows: 2, seed: "" },
    { type: "text", key: "finalDecision", label: "Final decision", seed: "" },
  ],
  79: [
    { type: "text", key: "physicalCue", label: "Physical cue", hint: "A posture or gesture you'll use every time, e.g. shoulders back, feet planted.", seed: "Stand tall, shoulders back, feet shoulder-width apart" },
    { type: "text", key: "breathingPattern", label: "Breathing pattern", hint: "A specific count you can repeat under pressure.", seed: "Inhale for 4 counts, hold for 4, exhale for 6" },
    { type: "text", key: "mentalCue", label: "Mental cue", hint: "A short phrase or memory you'll bring to mind.", seed: "I've prepared for this, and I've done hard things before" },
    { type: "table", key: "practiceLog", label: "2-week practice log", section: "Practice log", columns: [
      { key: "day", label: "Day", kind: "text" },
      { key: "ran", label: "Ran routine? (Y/N)", kind: "text" },
      { key: "feeling", label: "How it felt", kind: "text" },
    ], seedRows: [{ day: "Mon", ran: "Y", feeling: "Steadier than usual before my 9am class" }] },
    { type: "table", key: "deploymentLog", label: "High-stakes deployment log", section: "Deployment log", columns: [
      { key: "event", label: "Event", kind: "text" },
      { key: "used", label: "Used routine? (Y/N)", kind: "text" },
      { key: "result", label: "Result", kind: "text" },
    ], seedRows: [{ event: "Interview with Acme Corp", used: "Y", result: "Felt grounded through the first tough question instead of freezing" }] },
    { type: "textarea", key: "reflection", label: "Reflection", hint: "What changes in your body or mind when you run this routine?", rows: 2, seed: "My breathing slows down first, then my thoughts stop racing." },
  ],

  80: [
    { type: "text", key: "wakeTime", label: "Wake time", seed: "6:45am" },
    { type: "text", key: "firstTenMin", label: "First 10 minutes plan", hint: "What you do before checking your phone.", seed: "Make bed, drink water, stretch for 3 minutes" },
    { type: "text", key: "planningMethod", label: "Planning method", hint: "How you decide today's priorities.", seed: "Write top 3 priorities on a sticky note" },
    { type: "text", key: "energizeMethod", label: "Energize method", seed: "5 minutes of sunlight or a short walk" },
    { type: "table", key: "weekTracker", label: "One-week tracker", section: "One-week tracker", columns: [
      { key: "day", label: "Day", kind: "text" },
      { key: "completed", label: "Ritual completed? (Y/N)", kind: "text" },
      { key: "energy", label: "Energy level (1 to 10)", kind: "rating" },
    ], seedRows: [{ day: "Mon", completed: "Y", energy: 7 }] },
    { type: "textarea", key: "adjustment1", label: "What worked well this week?", rows: 2, seed: "Sticky-note priorities kept me from drifting into email first thing." },
    { type: "textarea", key: "adjustment2", label: "What will you adjust next week?", rows: 2, seed: "Move wake time 15 minutes earlier so the ritual isn't rushed." },
  ],

  81: [
    { type: "text", key: "entry1Date", label: "Entry 1: Date", section: "Entry 1", seed: "Monday" },
    { type: "text", key: "entry1Win", label: "One win", section: "Entry 1", seed: "Finished my resume draft a day ahead of schedule" },
    { type: "text", key: "entry1Lesson", label: "One lesson", section: "Entry 1", seed: "I write better in the morning than at night" },
    { type: "text", key: "entry1Feedback", label: "One piece of feedback received", section: "Entry 1", seed: "A mentor said my bullet points needed stronger verbs" },
    { type: "text", key: "entry2Date", label: "Entry 2: Date", section: "Entry 2", seed: "Thursday" },
    { type: "text", key: "entry2Win", label: "One win", section: "Entry 2", seed: "Reached out to two alumni I'd been putting off" },
    { type: "text", key: "entry2Lesson", label: "One lesson", section: "Entry 2", seed: "Cold outreach feels easier once I've done it once that week" },
    { type: "text", key: "entry2Feedback", label: "One piece of feedback received", section: "Entry 2", seed: "A peer said my LinkedIn headline was too vague" },
    { type: "textarea", key: "patternQuestion1", label: "What patterns do you notice across your wins?", section: "Weekly pattern review", rows: 2, seed: "Most wins happen when I do the hard task first thing in the morning." },
    { type: "textarea", key: "patternQuestion2", label: "What patterns do you notice across your lessons and feedback?", section: "Weekly pattern review", rows: 2, seed: "I keep getting told to be more specific, in writing and in conversation." },
  ],

  82: [
    { type: "textarea", key: "setbackDescription", label: "Describe a recent setback and your emotional reaction", hint: "Be specific about what happened and how it felt.", rows: 3, seed: "I didn't get a callback after a first-round interview I thought went well. I felt embarrassed and started doubting whether I was ready for this field at all." },
    { type: "textarea", key: "reframe1", label: "What's one fact versus one story I'm telling myself?", rows: 2, seed: "Fact: I didn't get a callback. Story: I'm not cut out for this field." },
    { type: "textarea", key: "reframe2", label: "What would I tell a friend in this exact situation?", rows: 2, seed: "I'd tell them one interview isn't a verdict on their whole career, and to ask what they could adjust for next time." },
    { type: "textarea", key: "reframe3", label: "What is one thing within my control here?", rows: 2, seed: "I can ask for feedback on that interview and tighten my answers before the next one." },
    { type: "text", key: "nextAction", label: "Next concrete action", seed: "Email the recruiter to ask for feedback on the interview" },
    { type: "table", key: "resilienceLog", label: "Resilience log", section: "Resilience log", columns: [
      { key: "setback", label: "Setback", kind: "text" },
      { key: "lesson", label: "Lesson extracted", kind: "text" },
      { key: "action", label: "Next action taken", kind: "text" },
    ], seedRows: [{ setback: "No callback after first-round interview", lesson: "My answers were too broad, not specific enough", action: "Emailed for feedback, rewrote 3 stories with concrete numbers" }] },
  ],

  83: [
    { type: "textarea", key: "urgentImportant", label: "Urgent & important", hint: "Do these now.", rows: 3, seed: "Finish the application due tomorrow" },
    { type: "textarea", key: "importantNotUrgent", label: "Important, not urgent", hint: "Schedule these.", rows: 3, seed: "Build my Skill Growth Plan for next semester" },
    { type: "textarea", key: "urgentNotImportant", label: "Urgent, not important", hint: "Delegate or shorten these.", rows: 3, seed: "Responding to a group chat about weekend plans" },
    { type: "textarea", key: "neither", label: "Neither urgent nor important", hint: "Cut or limit these.", rows: 3, seed: "Scrolling social media between classes" },
    { type: "text", key: "priorityRule1", label: "Priority rule 1", hint: "A rule you'll use to decide what to do first.", seed: "Anything due within 48 hours gets scheduled first" },
    { type: "text", key: "priorityRule2", label: "Priority rule 2", seed: "No more than one 'neither' activity per day, and only after the important work is done" },
  ],

  84: [
    { type: "text", key: "skill", label: "Skill I'm building", seed: "SQL for data analysis" },
    { type: "text", key: "timeBlock", label: "Time block commitment", seed: "30 to 60 minutes, weekday mornings" },
    { type: "table", key: "weekLog", label: "One-week log", section: "One-week log", columns: [
      { key: "day", label: "Day", kind: "text" },
      { key: "topic", label: "Topic covered", kind: "text" },
      { key: "takeaway", label: "Key takeaway", kind: "text" },
    ], seedRows: [{ day: "Mon", topic: "JOIN statements", takeaway: "Finally understand the difference between inner and left join" }] },
    { type: "textarea", key: "review1", label: "What's sticking, and what isn't?", rows: 2, seed: "Syntax is sticking, but I forget it under time pressure, so I need timed practice." },
    { type: "textarea", key: "review2", label: "What will you adjust for next week?", rows: 2, seed: "Add one timed practice problem each day instead of just reading." },
  ],

  85: [
    { type: "text", key: "week1Skill", label: "Week 1: Micro-skill", section: "Week 1", seed: "Cold email outreach" },
    { type: "text", key: "week1Practice", label: "Week 1: Practice", section: "Week 1", seed: "Sent 3 cold emails to alumni in my target field" },
    { type: "text", key: "week1Evidence", label: "Week 1: Evidence", section: "Week 1", seed: "Got 1 reply and a 15-minute call scheduled" },
    { type: "text", key: "week2Skill", label: "Week 2: Micro-skill", section: "Week 2", seed: "Data visualization in Excel" },
    { type: "text", key: "week2Practice", label: "Week 2: Practice", section: "Week 2", seed: "Rebuilt a messy spreadsheet into 2 clean charts" },
    { type: "text", key: "week2Evidence", label: "Week 2: Evidence", section: "Week 2", seed: "Used one chart in my class presentation" },
    { type: "text", key: "week3Skill", label: "Week 3: Micro-skill", section: "Week 3", seed: "Public speaking under time pressure" },
    { type: "text", key: "week3Practice", label: "Week 3: Practice", section: "Week 3", seed: "Gave a 2-minute impromptu update in a club meeting" },
    { type: "text", key: "week3Evidence", label: "Week 3: Evidence", section: "Week 3", seed: "Stayed on time and got a compliment on clarity" },
    { type: "chipList", key: "futureChallenges", label: "Running list of future micro-skill challenges", section: "Future challenges", seed: ["Negotiation basics", "Basic video editing", "Reading a financial statement"] },
  ],

  86: [
    { type: "text", key: "kpi1", label: "KPI target 1", seed: "10 applications per week" },
    { type: "text", key: "kpi2", label: "KPI target 2", seed: "3 networking touches per week" },
    { type: "text", key: "kpi3", label: "KPI target 3", seed: "3 hours of skill-building per week" },
    { type: "table", key: "weeklyTracker", label: "Weekly tracker", section: "Weekly tracker", columns: [
      { key: "weekOf", label: "Week of", kind: "text" },
      { key: "applications", label: "Applications", kind: "rating" },
      { key: "networking", label: "Networking touches", kind: "rating" },
      { key: "skillHours", label: "Skill hours", kind: "rating" },
    ], seedRows: [{ weekOf: "Sept 1", applications: 8, networking: 2, skillHours: 4 }] },
    { type: "textarea", key: "review1", label: "Which KPI is hardest to hit consistently, and why?", rows: 2, seed: "Networking touches, because it's easy to deprioritize when nothing is due." },
    { type: "textarea", key: "review2", label: "What will you change next month?", rows: 2, seed: "Block a fixed 20 minutes every Friday just for networking outreach." },
  ],

  87: [
    { type: "text", key: "blockLength", label: "Focus block length", seed: "45 minutes" },
    { type: "text", key: "breakLength", label: "Break length", seed: "10 minutes" },
    { type: "text", key: "environmentRules", label: "Environment rules", hint: "What you'll do to remove distractions.", seed: "Phone in another room, notifications off, door closed" },
    { type: "table", key: "practiceLog", label: "Practice log", section: "Practice log", columns: [
      { key: "session", label: "Session", kind: "text" },
      { key: "task", label: "Task worked on", kind: "text" },
      { key: "blocks", label: "Blocks completed", kind: "rating" },
      { key: "quality", label: "Focus quality (1 to 10)", kind: "rating" },
    ], seedRows: [{ session: "Tue AM", task: "Cover letter draft", blocks: 2, quality: 7 }] },
    { type: "textarea", key: "adjustment1", label: "When did focus break down, and why?", rows: 2, seed: "Focus dropped after the second block once hunger set in." },
    { type: "textarea", key: "adjustment2", label: "What will you adjust?", rows: 2, seed: "Eat before starting, and cap sessions at 3 blocks before a longer break." },
  ],

  88: [
    { type: "textarea", key: "day1", label: "Day 1: Three things", rows: 2, seed: "A professor who stayed late to answer questions, a warm meal, a text from an old friend" },
    { type: "textarea", key: "day2", label: "Day 2: Three things", rows: 2, seed: "Finishing a hard problem set, sunny weather, a good cup of coffee" },
    { type: "textarea", key: "day3", label: "Day 3: Three things", rows: 2, seed: "A helpful comment from a mentor, my roommate's cooking, getting through a tough workout" },
    { type: "textarea", key: "day4", label: "Day 4: Three things", rows: 2, seed: "A productive study session, a call with family, finishing a chore I'd been avoiding" },
    { type: "textarea", key: "day5", label: "Day 5: Three things", rows: 2, seed: "An encouraging email, a walk outside, finishing the week's reading" },
    { type: "textarea", key: "weekly1", label: "What kept showing up across your five days?", rows: 2, seed: "People, more than any achievement, showed up almost every day." },
    { type: "textarea", key: "weekly2", label: "How did this practice change your mood over the week?", rows: 2, seed: "I noticed I complained less by Thursday, I was looking for the good moment instead." },
  ],

  89: [
    { type: "text", key: "technique", label: "Technique chosen", seed: "Box breathing" },
    { type: "text", key: "frequency", label: "Frequency", seed: "Once in the morning, once before any stressful task" },
    { type: "table", key: "practiceLog", label: "Practice log", section: "Practice log", columns: [
      { key: "day", label: "Day", kind: "text" },
      { key: "practiced", label: "Practiced? (Y/N)", kind: "text" },
      { key: "before", label: "Stress before (1 to 10)", kind: "rating" },
      { key: "after", label: "Stress after (1 to 10)", kind: "rating" },
    ], seedRows: [{ day: "Mon", practiced: "Y", before: 7, after: 4 }] },
    { type: "textarea", key: "review1", label: "When was the technique most useful?", rows: 2, seed: "Right before checking my email after submitting an application." },
    { type: "textarea", key: "review2", label: "What will you adjust?", rows: 2, seed: "Use it before class presentations too, not just applications." },
  ],

  90: [
    { type: "text", key: "partner", label: "Accountability partner", seed: "My roommate, Dana" },
    { type: "text", key: "frequency", label: "Check-in frequency", seed: "Every Sunday evening" },
    { type: "text", key: "reportContent", label: "What we report to each other", seed: "One goal met, one goal missed, and next week's top priority" },
    { type: "table", key: "checkinLog", label: "Check-in log", section: "Check-in log", columns: [
      { key: "date", label: "Date", kind: "text" },
      { key: "committed", label: "What I committed to", kind: "text" },
      { key: "followedThrough", label: "Did I follow through?", kind: "text" },
    ], seedRows: [{ date: "Sept 7", committed: "Send 3 networking emails", followedThrough: "Yes, sent all 3" }] },
    { type: "textarea", key: "reflection", label: "How has having a partner changed your follow-through?", rows: 2, seed: "Knowing I have to say it out loud on Sunday keeps me from quietly letting a goal slide." },
  ],

  91: [
    { type: "table", key: "entriesTable", label: "Learning log entries", section: "Learning log", columns: [
      { key: "source", label: "Source", kind: "text" },
      { key: "takeaway", label: "Key takeaway", kind: "text" },
      { key: "apply", label: "How I'll apply it", kind: "text" },
    ], seedRows: [{ source: "Podcast interview with a hiring manager", takeaway: "Most rejected resumes fail on specificity, not formatting", apply: "Rewrite my bullet points with real numbers" }] },
    { type: "textarea", key: "review1", label: "What's the biggest shift in your thinking this month?", rows: 2, seed: "I used to think polish mattered most, now I think specificity matters more." },
    { type: "textarea", key: "review2", label: "What will you seek out to learn next?", rows: 2, seed: "How to negotiate a starting offer, I've never done it before." },
  ],

  92: [
    { type: "chipList", key: "stack", label: "Ordered habit stack", hint: "List each habit in the order you'll run it, anchored to an existing routine.", seed: ["After I pour coffee", "I review today's top 3 priorities", "Then I check my calendar", "Then I reply to any urgent message", "Then I start my first focus block"] },
    { type: "table", key: "weekTracker", label: "One-week tracker", section: "One-week tracker", columns: [
      { key: "day", label: "Day", kind: "text" },
      { key: "completed", label: "Full stack completed? (Y/N)", kind: "text" },
      { key: "brokeDown", label: "Where it broke down", kind: "text" },
    ], seedRows: [{ day: "Mon", completed: "N", brokeDown: "Skipped the priorities review after an early meeting" }] },
    { type: "text", key: "adjustment1", label: "What's the weakest link in the stack?", seed: "The priorities review, it's the easiest step to skip" },
    { type: "text", key: "adjustment2", label: "How will you fix it?", seed: "Move it before I open my laptop instead of after" },
  ],

  93: [
    { type: "scale", key: "confidenceLevel", label: "Confidence level", hint: "0 = very low, 100 = very high", seed: 55 },
    { type: "scale", key: "consistencyHabits", label: "Consistency with habits", hint: "0 = very low, 100 = very high", seed: 60 },
    { type: "scale", key: "careerReadiness", label: "Overall career readiness", hint: "0 = very low, 100 = very high", seed: 50 },
    { type: "textarea", key: "reflection1", label: "What's grown most since you started this stage?", rows: 2, seed: "My ability to recover from a setback without spiraling for days." },
    { type: "textarea", key: "reflection2", label: "What's still the biggest gap?", rows: 2, seed: "Consistency, I still fall off my habits during busy weeks." },
    { type: "textarea", key: "reflection3", label: "What evidence supports your ratings above?", rows: 2, seed: "I kept my learning habit going for 3 straight weeks, but my focus routine has lapsed twice." },
    { type: "text", key: "nextFocus", label: "Next month's focus", seed: "Protect the focus routine even during busy weeks" },
  ],

  94: [
    { type: "table", key: "dailyLog", label: "Daily energy log", section: "Daily energy log", hint: "Rate your energy 1 to 10 for each time block.", columns: [
      { key: "block", label: "Time block", kind: "text" },
      { key: "mon", label: "Mon", kind: "rating" },
      { key: "tue", label: "Tue", kind: "rating" },
      { key: "wed", label: "Wed", kind: "rating" },
      { key: "thu", label: "Thu", kind: "rating" },
      { key: "fri", label: "Fri", kind: "rating" },
    ], seedRows: [
      { block: "Morning (7 to 11am)", mon: 8, tue: 7, wed: 8, thu: 6, fri: 7 },
      { block: "Afternoon (12 to 4pm)", mon: 4, tue: 4, wed: 3, thu: 4, fri: 5 },
      { block: "Evening (5 to 9pm)", mon: 6, tue: 5, wed: 6, thu: 6, fri: 7 },
    ] },
    { type: "textarea", key: "pattern1", label: "When is your energy consistently highest?", rows: 2, seed: "Mornings, every single day this week." },
    { type: "textarea", key: "pattern2", label: "When is your energy consistently lowest?", rows: 2, seed: "Early-to-mid afternoon, right after lunch." },
    { type: "textarea", key: "redesign1", label: "What should move into your high-energy blocks?", rows: 2, seed: "My hardest coursework and any application writing." },
    { type: "textarea", key: "redesign2", label: "What should move into your low-energy blocks?", rows: 2, seed: "Email, admin tasks, and scheduling, things that don't need sharp thinking." },
  ],

  95: [
    { type: "text", key: "milestone", label: "Milestone", seed: "Land a summer internship in data analytics" },
    { type: "text", key: "targetDate", label: "Target date", seed: "March 15" },
    { type: "textarea", key: "vividDetail", label: "Vivid detail", hint: "Describe the moment you hit this milestone in as much sensory detail as possible.", rows: 3, seed: "I'm reading the offer email at my kitchen table, the light is coming in low through the window, and I call my mom before I even finish reading it." },
    { type: "textarea", key: "reverse1", label: "Working backward from that moment, what has to be true 1 month before?", rows: 2, seed: "I'll have completed at least 2 final-round interviews." },
    { type: "textarea", key: "reverse2", label: "What has to be true today to stay on that path?", rows: 2, seed: "I need to have my applications and outreach list finalized by this Friday." },
  ],

  96: [
    { type: "text", key: "affirmation1", label: "Affirmation 1", seed: "I've prepared for this, and preparation shows" },
    { type: "text", key: "affirmation2", label: "Affirmation 2", seed: "Setbacks are information, not a verdict" },
    { type: "text", key: "affirmation3", label: "Affirmation 3", seed: "I get better at this every time I practice" },
    { type: "table", key: "practiceLog", label: "Practice log", section: "Practice log", columns: [
      { key: "day", label: "Day", kind: "text" },
      { key: "saidAloud", label: "Said aloud? (Y/N)", kind: "text" },
      { key: "believable", label: "Did it feel believable?", kind: "text" },
    ], seedRows: [{ day: "Mon", saidAloud: "Y", believable: "Mostly, affirmation 2 felt truest today" }] },
    { type: "textarea", key: "revision", label: "Which affirmation needs revising, and why?", rows: 2, seed: "Affirmation 1 feels forced when I haven't actually prepared, I'll only say it on days it's true." },
  ],

  97: [
    { type: "text", key: "week1Goal", label: "Week 1: Goal", section: "Week 1", seed: "Message 3 people in my target industry" },
    { type: "text", key: "week1Result", label: "Week 1: Result", section: "Week 1", seed: "2 replied, 1 offered a 15-minute call" },
    { type: "text", key: "week2Goal", label: "Week 2: Goal", section: "Week 2", seed: "Attend 1 industry event or webinar" },
    { type: "text", key: "week2Result", label: "Week 2: Result", section: "Week 2", seed: "Attended, met 2 new contacts, exchanged information" },
    { type: "text", key: "week3Goal", label: "Week 3: Goal", section: "Week 3", seed: "Follow up with everyone from weeks 1 and 2" },
    { type: "text", key: "week3Result", label: "Week 3: Result", section: "Week 3", seed: "Sent 4 follow-ups, 1 turned into an ongoing mentor conversation" },
    { type: "textarea", key: "reflection1", label: "What made outreach easier as the weeks went on?", rows: 2, seed: "Having a simple template to start from instead of writing each message from scratch." },
    { type: "textarea", key: "reflection2", label: "What will you keep doing after this challenge ends?", rows: 2, seed: "The weekly follow-up habit, that's where the real relationships started forming." },
  ],

  98: [
    { type: "text", key: "taskManager", label: "Task manager chosen", seed: "Todoist" },
    { type: "text", key: "calendar", label: "Calendar tool chosen", seed: "Google Calendar" },
    { type: "text", key: "notesApp", label: "Notes app chosen", seed: "Notion" },
    { type: "checklist", key: "configChecklist", label: "Configuration checklist", section: "Configuration checklist", items: ["Task manager set up with today's priorities", "Calendar blocked with focus time and deadlines", "Notes app organized into a few clear folders", "All three tools linked or reviewed together once daily"], seedChecked: ["Task manager set up with today's priorities"] },
    { type: "textarea", key: "thirtyDayCheck", label: "30-day check: Is this system actually reducing friction?", rows: 2, seed: "Mostly yes, though I still forget to check my calendar in the mornings, that's my next fix." },
  ],

  99: [
    { type: "text", key: "projectIdea", label: "Project idea", seed: "A simple budgeting app for college students" },
    { type: "text", key: "skillDemonstrated", label: "Skill it demonstrates", seed: "End-to-end product thinking and basic front-end development" },
    { type: "text", key: "scope", label: "Scope", hint: "Keep this realistic for the time you actually have.", seed: "A single-page tool with 3 core features, built over 6 weeks" },
    { type: "table", key: "milestonePlan", label: "Milestone plan", section: "Milestone plan", columns: [
      { key: "milestone", label: "Milestone", kind: "text" },
      { key: "targetDate", label: "Target date", kind: "text" },
      { key: "status", label: "Status", kind: "text" },
    ], seedRows: [{ milestone: "Working prototype of core feature", targetDate: "Week 3", status: "In progress" }] },
    { type: "textarea", key: "showcasePlan", label: "How will you showcase this once it's done?", rows: 2, seed: "A short write-up on LinkedIn with a link to the live demo and the code." },
  ],

  100: [
    { type: "text", key: "organization", label: "Organization", seed: "Local food bank" },
    { type: "text", key: "role", label: "Role", seed: "Volunteer logistics coordinator" },
    { type: "text", key: "timeCommitment", label: "Time commitment", seed: "4 hours per week for one semester" },
    { type: "table", key: "impactLog", label: "Impact log", section: "Impact log", columns: [
      { key: "date", label: "Date", kind: "text" },
      { key: "whatIDid", label: "What I did", kind: "text" },
      { key: "impact", label: "Impact / outcome", kind: "text" },
    ], seedRows: [{ date: "Sept 10", whatIDid: "Redesigned the volunteer sign-up sheet", impact: "Cut scheduling conflicts roughly in half" }] },
    { type: "textarea", key: "storyDevelopment", label: "Turn this into a 30-second story for interviews", rows: 3, seed: "I noticed our volunteer sign-up process kept double-booking shifts, so I rebuilt it as a shared calendar. Conflicts dropped by about half, and it's still the process they use." },
  ],

  101: [
    { type: "text", key: "certification", label: "Certification / badge chosen", seed: "Google Data Analytics Certificate" },
    { type: "text", key: "relevance", label: "Why it's relevant to my direction", seed: "Directly matches the skills listed in most entry-level analyst postings I've seen" },
    { type: "text", key: "estTime", label: "Estimated time to complete", seed: "10 to 20 hours" },
    { type: "table", key: "progressTracker", label: "Progress tracker", section: "Progress tracker", columns: [
      { key: "module", label: "Module / section", kind: "text" },
      { key: "completed", label: "Completed? (Y/N)", kind: "text" },
      { key: "date", label: "Date", kind: "text" },
    ], seedRows: [{ module: "Foundations of data analysis", completed: "Y", date: "Sept 5" }] },
    { type: "checklist", key: "rolloutChecklist", label: "Rollout checklist", section: "Rollout checklist", items: ["Added to resume", "Added to LinkedIn", "Mentioned in at least one application"], seedChecked: [] },
  ],

  102: [
    { type: "table", key: "goalsTable", label: "Goals", section: "Goals", columns: [
      { key: "goal", label: "Goal", kind: "text" },
      { key: "whyItMatters", label: "Why it matters", kind: "text" },
      { key: "targetDate", label: "Target date", kind: "text" },
    ], seedRows: [{ goal: "Land 3 second-round interviews", whyItMatters: "Proof my applications are actually competitive", targetDate: "End of semester" }] },
    { type: "table", key: "firstActionsTable", label: "First actions", section: "First actions", columns: [
      { key: "goal", label: "Goal", kind: "text" },
      { key: "firstAction", label: "First concrete action", kind: "text" },
      { key: "when", label: "This week or next?", kind: "text" },
    ], seedRows: [{ goal: "Land 3 second-round interviews", firstAction: "Rewrite resume bullets with specific numbers", when: "This week" }] },
    { type: "text", key: "reviewSchedule", label: "Review schedule", hint: "When will you revisit this sheet?", seed: "First Sunday of every month" },
  ],

  103: [
    { type: "textarea", key: "pointOfView", label: "Point of view", hint: "What's one opinion you hold about your field that not everyone agrees with?", rows: 2, seed: "I think most students over-optimize their resume format and under-optimize the actual evidence behind each bullet point." },
    { type: "textarea", key: "groundingExperience", label: "Grounding experience", hint: "What specific experience backs this up?", rows: 2, seed: "I rewrote my own resume three times, the version with real numbers got twice the response rate of the polished but vague one." },
    { type: "text", key: "outline1", label: "Outline point 1", seed: "The problem: vague bullet points" },
    { type: "text", key: "outline2", label: "Outline point 2", seed: "What I tried that didn't work" },
    { type: "text", key: "outline3", label: "Outline point 3", seed: "What changed when I added real numbers" },
    { type: "text", key: "outline4", label: "Outline point 4", seed: "One takeaway readers can use today" },
    { type: "textarea", key: "draft", label: "Draft", rows: 6, seed: "Most resumes fail for a boring reason: they're vague. I rewrote mine three times before I figured that out. The version that finally worked replaced 'responsible for reporting' with 'built a weekly report that cut review time by 3 hours.' Same job, twice the callbacks. If your bullet points could apply to anyone, they're not doing their job. Go find the number." },
    { type: "checklist", key: "publishChecklist", label: "Publish & share checklist", section: "Publish & share checklist", items: ["Reviewed by mentor or peer", "Published", "Shared directly with relevant contacts"], seedChecked: [] },
  ],
};
