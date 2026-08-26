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
  104: [
    { type: "wordBank", key: "familiarModels", label: "Circle any mental models you've heard of before, even loosely", section: "Word bank", words: ["Opportunity Cost", "Inversion", "First Principles", "80/20 Principle", "Systems Thinking", "Occam's Razor", "Sunk Cost", "Second-Order Thinking", "Confirmation Bias", "Anchoring", "Circle of Competence", "Margin of Safety", "Compounding", "Regret Minimization", "Falsifiability"], pickCount: 5, seed: ["Opportunity Cost", "Sunk Cost", "Confirmation Bias"] },
    { type: "table", key: "modelsIUse", label: "Models I already use", section: "Models I already use", hint: "For each model you circled, name one real decision where you already used it without naming it.", columns: [
      { key: "model", label: "Model", kind: "text" },
      { key: "decision", label: "Real decision where I used it", kind: "text" },
    ], seedRows: [{ model: "Opportunity Cost", decision: "Turned down a part-time job to protect time for my capstone project" }] },
    { type: "text", key: "newModel", label: "A model I don't know well yet", section: "One new model", seed: "Second-Order Thinking" },
    { type: "text", key: "whereToTry", label: "Where I could try applying it this week", seed: "Deciding whether to take on a new club leadership role" },
  ],

  105: [
    { type: "text", key: "outcome", label: "Outcome I'm mapping", section: "The outcome", seed: "Got the highest grade in my cohort on the group project" },
    { type: "table", key: "backwardChain", label: "Backward chain, most recent to earliest", section: "Backward chain", hint: "Work backward, asking what caused this at each step.", columns: [
      { key: "step", label: "Step", kind: "text" },
      { key: "cause", label: "Cause", kind: "text" },
    ], seedRows: [
      { step: "1", cause: "Presented last, so we could incorporate every earlier group's feedback" },
      { step: "2", cause: "Volunteered to go last in the practice run order" },
    ] },
    { type: "textarea", key: "surprisedMost", label: "Which cause surprised me most?", section: "Reflection", rows: 2, seed: "That the sign-up order was a deliberate choice, not luck." },
    { type: "textarea", key: "wouldIGuess", label: "Would I have guessed this chain without mapping it?", rows: 2, seed: "No, I would have just credited the material or the team." },
  ],

  106: [
    { type: "textarea", key: "fullProblem", label: "The full problem, as it currently feels", section: "The problem", rows: 3, seed: "Build a full portfolio website before internship applications open in three weeks." },
    { type: "table", key: "subTasks", label: "Sub-tasks", section: "Sub-tasks", columns: [
      { key: "subTask", label: "Sub-task", kind: "text" },
      { key: "order", label: "Order (1st, 2nd, etc.)", kind: "text" },
    ], seedRows: [
      { subTask: "Pick a template and domain", order: "1st" },
      { subTask: "Write project case studies", order: "2nd" },
    ] },
    { type: "text", key: "firstStep", label: "The very first thing I'll actually do", section: "First step", seed: "Pick a template tonight" },
  ],

  107: [
    { type: "text", key: "decision", label: "The decision", section: "Setup", seed: "Which of two internship offers to accept" },
    { type: "chipList", key: "criteria", label: "My criteria", seed: ["Mentorship", "Pay", "Location", "Growth potential"] },
    { type: "table", key: "scoringMatrix", label: "Scoring matrix", section: "Scoring matrix", columns: [
      { key: "option", label: "Option", kind: "text" },
      { key: "c1", label: "Criterion 1 score", kind: "rating" },
      { key: "c2", label: "Criterion 2 score", kind: "rating" },
      { key: "c3", label: "Criterion 3 score", kind: "rating" },
      { key: "total", label: "Weighted total", kind: "text" },
    ], seedRows: [
      { option: "Offer A", c1: 8, c2: 6, c3: 7, total: "" },
      { option: "Offer B", c1: 6, c2: 9, c3: 5, total: "" },
    ] },
    { type: "text", key: "topScoring", label: "Top-scoring option", section: "Result", seed: "" },
    { type: "text", key: "matchesGut", label: "Does this match my gut instinct? (Y/N)", seed: "" },
  ],

  108: [
    { type: "textarea", key: "problem", label: "Problem or failure", section: "The problem", rows: 2, seed: "I keep missing internal team deadlines by a day or two." },
    { type: "table", key: "whys", label: "The whys", section: "The whys", columns: [
      { key: "why", label: "Why #", kind: "text" },
      { key: "answer", label: "Answer", kind: "text" },
    ], seedRows: [
      { why: "1", answer: "I start the task too late" },
      { why: "2", answer: "I keep planning to fit it in around other things" },
      { why: "3", answer: "I never block dedicated time for it" },
    ] },
    { type: "text", key: "rootCause", label: "Real root cause", section: "Root cause & fix", seed: "No dedicated time block exists for this task" },
    { type: "text", key: "specificFix", label: "Specific fix", seed: "Block a recurring 45-minute slot the day after each assignment" },
  ],

  109: [
    { type: "text", key: "claim", label: "Claim I'm examining", section: "The claim", seed: "This productivity app doubles your output" },
    { type: "text", key: "source", label: "Source", seed: "App landing page" },
    { type: "textarea", key: "assumption", label: "What assumption does this claim rest on?", section: "Interrogation", rows: 2, seed: "That the study behind it reflects how most people would actually use the app." },
    { type: "textarea", key: "evidence", label: "What evidence is actually offered?", rows: 2, seed: "A single internal study, sample size not stated on the page." },
    { type: "textarea", key: "supportsConclusion", label: "Does the evidence really support the conclusion?", rows: 2, seed: "Not clearly, the sample size and methodology aren't disclosed." },
    { type: "textarea", key: "verdict", label: "Do I still believe this claim? Why or why not?", section: "Verdict", rows: 2, seed: "Not fully, I'd want to see the actual study before trusting the number." },
  ],

  110: [
    { type: "text", key: "prediction", label: "My specific, falsifiable prediction", section: "Prediction", seed: "Studying with my group helps me retain material better than studying solo" },
    { type: "textarea", key: "smallestTest", label: "Smallest test that could disprove it", rows: 2, seed: "One week studying solo, one week with the group, both followed by a self-quiz" },
    { type: "textarea", key: "actualResult", label: "What actually happened", section: "Result", rows: 2, seed: "The solo week scored higher on the self-quiz" },
    { type: "text", key: "predictionRight", label: "Was my prediction right? (Y/N)", seed: "N" },
    { type: "textarea", key: "whatIllDo", label: "What I'll do differently now", section: "Update", rows: 2, seed: "Study solo first, then use the group only to check gaps" },
  ],

  111: [
    { type: "text", key: "decision", label: "Decision I'm facing", section: "The decision", seed: "Whether to accept a job offer in a new city" },
    { type: "table", key: "scenarios", label: "Three scenarios", section: "Three scenarios", columns: [
      { key: "scenario", label: "Scenario", kind: "text" },
      { key: "whatHappens", label: "What happens", kind: "text" },
      { key: "myResponse", label: "My response", kind: "text" },
    ], seedRows: [
      { scenario: "Best case", whatHappens: "Role exceeds expectations", myResponse: "Ask about growth path within 6 months" },
      { scenario: "Most likely", whatHappens: "Solid but unremarkable", myResponse: "Give it a full year before reassessing" },
      { scenario: "Worst case", whatHappens: "Poor fit within 6 months", myResponse: "Start a quiet search, lean on my network" },
    ] },
    { type: "textarea", key: "mostPrepared", label: "Which scenario am I most prepared for right now?", section: "Reflection", rows: 2, seed: "Most likely, I haven't thought as much about the worst case." },
  ],

  112: [
    { type: "table", key: "decisionReview", label: "Decision review", section: "Decision review", columns: [
      { key: "decision", label: "Past decision", kind: "text" },
      { key: "bias", label: "Possible bias", kind: "text" },
      { key: "howShowedUp", label: "How it showed up", kind: "text" },
    ], seedRows: [{ decision: "Stuck with a group project role I disliked", bias: "Sunk cost", howShowedUp: "Kept going because of time already invested, not because it made sense" }] },
    { type: "text", key: "myPattern", label: "My most common bias", section: "My pattern", seed: "Sunk cost" },
    { type: "textarea", key: "watchFor", label: "A situation where I'll watch for it next", rows: 2, seed: "Whenever I'm deciding whether to keep going with a project that isn't working." },
  ],

  113: [
    { type: "textarea", key: "recurringProblem", label: "Recurring problem", section: "The system", rows: 2, seed: "Our student org's meetings keep having low attendance." },
    { type: "table", key: "nodes", label: "Nodes & connections", section: "Nodes & connections", columns: [
      { key: "node", label: "Node (person/process/outcome)", kind: "text" },
      { key: "influences", label: "What it influences", kind: "text" },
    ], seedRows: [{ node: "Sparse agendas", influences: "Perceived value of attending" }] },
    { type: "textarea", key: "theLoop", label: "Feedback loop I found (X leads to Y leads back to X)", section: "The loop", rows: 2, seed: "Sparse agendas lead to low perceived value, which leads to more absences, which leads to even sparser agendas." },
  ],

  114: [
    { type: "textarea", key: "feedbackReceived", label: "Feedback received, as given", section: "The feedback", rows: 2, seed: "You rush through your conclusions, the ending feels cut short." },
    { type: "text", key: "whoGaveIt", label: "Who gave it", seed: "My presentations professor" },
    { type: "textarea", key: "patternPointedTo", label: "The specific pattern it points to", section: "Integration", rows: 2, seed: "I run out of time and cut the ending short." },
    { type: "text", key: "concreteChange", label: "Concrete change I'll make", seed: "Time practice runs and leave room for a real close" },
    { type: "text", key: "howIllKnow", label: "How I'll know if it worked", seed: "My next presentation ends with a full closing statement, not a rushed one" },
  ],

  115: [
    { type: "table", key: "taskList", label: "Task list", section: "Task list", columns: [
      { key: "task", label: "Task", kind: "text" },
      { key: "impact", label: "Impact (1 to 10)", kind: "rating" },
      { key: "effort", label: "Effort (1 to 10)", kind: "rating" },
      { key: "priority", label: "Priority order", kind: "text" },
    ], seedRows: [{ task: "Send 3 networking follow-ups", impact: 8, effort: 2, priority: "1" }] },
    { type: "text", key: "priority1", label: "Top priority 1", section: "Reordered plan", seed: "Send 3 networking follow-ups" },
    { type: "text", key: "priority2", label: "Top priority 2", seed: "Finish resume rewrite" },
    { type: "text", key: "priority3", label: "Top priority 3", seed: "Apply to 2 target roles" },
  ],

  116: [
    { type: "text", key: "modelApplying", label: "Mental model I'm applying", section: "Setup", seed: "Opportunity cost" },
    { type: "textarea", key: "realProblem", label: "My real problem", rows: 2, seed: "Whether to take on a third leadership role this semester" },
    { type: "textarea", key: "appliedReasoning", label: "Applied reasoning", section: "Applied reasoning", rows: 4, seed: "If I say yes, the project I'd have to deprioritize is my research assistantship, which matters more to my long-term goals than another leadership line." },
    { type: "textarea", key: "conclusion", label: "How this changed my thinking versus my first instinct", section: "Conclusion", rows: 2, seed: "I was about to say yes automatically, naming the real trade-off made me decline." },
  ],

  117: [
    { type: "table", key: "instances", label: "Instances", section: "Instances", columns: [
      { key: "instance", label: "Instance", kind: "text" },
      { key: "keyDetail", label: "Key detail", kind: "text" },
    ], seedRows: [{ instance: "Rejection from Company A", keyDetail: "Posting emphasized data analytics skills" }] },
    { type: "textarea", key: "whatRepeats", label: "What repeats across these instances", section: "The pattern", rows: 2, seed: "All four postings I was rejected from emphasized data analytics skills prominently." },
    { type: "textarea", key: "whatIllDoDifferently", label: "What I'll do differently now that I see it", rows: 2, seed: "Add a specific data analytics example to my resume before applying to similar roles." },
  ],

  118: [
    { type: "text", key: "whatDecided", label: "What I decided", section: "The decision", seed: "Accepted the marketing internship over the research assistantship" },
    { type: "textarea", key: "howDecided", label: "How I decided it (model or process used, if any)", rows: 2, seed: "Built a weighted decision matrix comparing mentorship, pay, and growth potential." },
    { type: "textarea", key: "hindsight", label: "What I'd do differently in hindsight", section: "Hindsight", rows: 2, seed: "I'd weight location higher, the commute has been harder than expected." },
    { type: "textarea", key: "patternCheck", label: "Do I use structured tools for big decisions but instinct for medium ones?", section: "Pattern check", rows: 2, seed: "Yes, and a couple of the instinct-only decisions are ones I've regretted." },
    { type: "text", key: "habitToChange", label: "One decision-making habit I want to change", seed: "Use at least a quick pros and cons list for medium-stakes decisions, not just major ones" },
  ],

  119: [
    { type: "textarea", key: "strengths", label: "Strengths", section: "STRENGTHS", rows: 3, seed: "Strong written communication, reliable under deadline pressure" },
    { type: "textarea", key: "weaknesses", label: "Weaknesses", section: "WEAKNESSES", rows: 3, seed: "Limited data analytics experience" },
    { type: "textarea", key: "opportunities", label: "Opportunities", section: "OPPORTUNITIES", rows: 3, seed: "Growing demand for analytics-literate marketers" },
    { type: "textarea", key: "threats", label: "Threats", section: "THREATS", rows: 3, seed: "Most target postings list analytics tools as required" },
    { type: "textarea", key: "crossQuadrant", label: "One action that emerges from a cross-quadrant connection", section: "Cross-quadrant insight", rows: 2, seed: "My weakness (analytics) directly crosses a real threat (postings requiring it), so closing that gap is my top priority." },
  ],

  120: [
    { type: "textarea", key: "conventionalProblem", label: "The problem, as conventionally approached", section: "The problem", rows: 2, seed: "A resume has to follow the standard reverse-chronological format." },
    { type: "table", key: "assumptions", label: "Assumptions embedded in the conventional approach", section: "Assumptions", columns: [
      { key: "assumption", label: "Assumption", kind: "text" },
      { key: "truthOrConvention", label: "Fundamental truth or just convention?", kind: "text" },
    ], seedRows: [{ assumption: "Work history must be listed in reverse chronological order", truthOrConvention: "Convention" }] },
    { type: "textarea", key: "rebuild", label: "Using only the fundamental truths, sketch a new solution", section: "Rebuild", rows: 3, seed: "A resume just needs to communicate value quickly and credibly, so I tested a skills-forward format instead." },
  ],

  121: [
    { type: "text", key: "goal", label: "My goal", section: "The goal", seed: "Give a strong final presentation" },
    { type: "chipList", key: "failureModes", label: "Ways I could guarantee failure at this", section: "Guaranteed failure modes", seed: ["Never practice out loud", "Ignore the time limit", "Skip reading the room during Q&A", "Write the slides the night before"] },
    { type: "table", key: "checkAgainstPlan", label: "Check against my real plan", section: "Check against plan", columns: [
      { key: "failureMode", label: "Failure mode", kind: "text" },
      { key: "doingThis", label: "Am I currently doing this? (Y/N)", kind: "text" },
      { key: "fix", label: "Fix", kind: "text" },
    ], seedRows: [{ failureMode: "Never practice out loud", doingThis: "Y", fix: "Schedule 2 full practice run-throughs" }] },
  ],

  122: [
    { type: "text", key: "optionConsidering", label: "Option I'm considering", section: "The option", seed: "Taking on a third leadership role" },
    { type: "text", key: "bestAlternative", label: "My best alternative use of the same time/resources", seed: "More hours on my research assistantship" },
    { type: "textarea", key: "thisOption", label: "This option", section: "Direct comparison", rows: 2, seed: "Third leadership role: visible, but stretches me thin" },
    { type: "textarea", key: "bestAlternativeDetail", label: "My best alternative", rows: 2, seed: "Research assistantship: builds skills more directly tied to my goals" },
    { type: "textarea", key: "decisionAndWhy", label: "Which I'm choosing, and why", section: "Decision", rows: 2, seed: "Declining the role, the research assistantship matters more to where I'm headed." },
  ],

  123: [
    { type: "table", key: "activitiesResults", label: "Activities & results", section: "Activities & results", columns: [
      { key: "activity", label: "Activity", kind: "text" },
      { key: "result", label: "Result produced (1 to 10)", kind: "rating" },
    ], seedRows: [
      { activity: "Network-sourced applications", result: 9 },
      { activity: "Cold applications", result: 2 },
    ] },
    { type: "textarea", key: "vitalFew", label: "The smaller subset producing most of my results", section: "The vital few", rows: 2, seed: "Network-sourced applications, only about 20% of my submissions, but nearly all my interviews." },
    { type: "textarea", key: "shiftTime", label: "How I'll shift more time toward it", rows: 2, seed: "Spend more evenings on outreach and fewer on cold job board applications." },
  ],

  124: [
    { type: "textarea", key: "recurringProblem", label: "The recurring problem", section: "The system", rows: 2, seed: "Our team consistently misses internal deadlines." },
    { type: "textarea", key: "rolesProcesses", label: "Key roles, processes, and outputs involved", rows: 3, seed: "Writer, editor, approver, and the final publish step." },
    { type: "textarea", key: "connections", label: "What feeds into what?", section: "Connections & loops", rows: 2, seed: "Drafts feed into a single approver, who is often the bottleneck." },
    { type: "textarea", key: "feedbackLoop", label: "Is there a feedback loop where an effect cycles back to become its own cause?", rows: 2, seed: "Delayed approvals push deadlines later, which compresses the next cycle's review time too." },
    { type: "textarea", key: "structuralFix", label: "One structural change (not a person to blame) that would improve the system", section: "Structural fix", rows: 2, seed: "Add a second approver so review doesn't depend on one person's schedule." },
  ],

  125: [
    { type: "text", key: "firstChoice", label: "The first choice", section: "First decision point", seed: "Accept the offer now, ask for an extension, or decline" },
    { type: "table", key: "firstDecisionTable", label: "First decision point options", columns: [
      { key: "option", label: "Option", kind: "text" },
      { key: "outcome", label: "Likely outcome", kind: "text" },
      { key: "risk", label: "Risk", kind: "text" },
    ], seedRows: [{ option: "Accept now", outcome: "Secures the role", risk: "No time to compare other offers" }] },
    { type: "text", key: "secondChoice", label: "The follow-up choice this leads to", section: "Second decision point (if applicable)", seed: "If I ask for an extension, how long to request" },
    { type: "table", key: "secondDecisionTable", label: "Second decision point options", columns: [
      { key: "option", label: "Option", kind: "text" },
      { key: "outcome", label: "Likely outcome", kind: "text" },
      { key: "risk", label: "Risk", kind: "text" },
    ], seedRows: [{ option: "Ask for 1 week", outcome: "Likely granted", risk: "Small chance it annoys the recruiter" }] },
    { type: "textarea", key: "leaning", label: "Which branch I'm leaning toward, and why", section: "Leaning", rows: 2, seed: "Asking for a short extension, it's low risk and buys real clarity." },
  ],

  126: [
    { type: "text", key: "variable1", label: "Key variable 1", section: "Key variables", seed: "Cost of living in the new city" },
    { type: "text", key: "variable2", label: "Key variable 2", seed: "Ability to rebuild my network" },
    { type: "text", key: "variable3", label: "Key variable 3", seed: "Actual fit of the role" },
    { type: "table", key: "scenarioPlans", label: "Scenario plans", section: "Scenario plans", columns: [
      { key: "scenario", label: "Scenario", kind: "text" },
      { key: "whatHappens", label: "What happens", kind: "text" },
      { key: "actionPlan", label: "My action plan", kind: "text" },
    ], seedRows: [{ scenario: "Best case", whatHappens: "Role and city both exceed expectations", actionPlan: "Commit to a 2-year lease" }] },
    { type: "textarea", key: "confidenceCheck", label: "How this changes how I feel about the decision", section: "Confidence check", rows: 2, seed: "Having a real plan for each variable combination made the move feel structured instead of scary." },
  ],

  127: [
    { type: "text", key: "taskForChecklist", label: "Task I'm building a checklist for", section: "The task", seed: "Submitting a job application" },
    { type: "textarea", key: "whyWorthChecklist", label: "Why it's worth a checklist (past mistake or risk)", rows: 2, seed: "I've forgotten to attach my resume twice." },
    { type: "chipList", key: "checklistSteps", label: "Steps, in order", section: "The checklist", seed: ["Attach resume", "Attach cover letter", "Check contact info is current", "Proofread once more", "Submit", "Log it in my tracker"] },
    { type: "textarea", key: "firstUseResult", label: "Result the first time I used it", section: "First real use", rows: 2, seed: "Caught a missing cover letter before submitting." },
    { type: "textarea", key: "stepToAdd", label: "Any step I needed to add or clarify", rows: 2, seed: "Added 'check contact info' after noticing an old phone number on file." },
  ],

  128: [
    { type: "textarea", key: "problemStatement", label: "Problem statement", section: "The problem", rows: 2, seed: "Our team keeps miscommunicating about who owns what." },
    { type: "table", key: "fiveWhys", label: "The five whys", section: "The five whys", columns: [
      { key: "why", label: "Why", kind: "text" },
      { key: "answer", label: "Answer", kind: "text" },
    ], seedRows: [
      { why: "Why 1", answer: "People miss updates" },
      { why: "Why 2", answer: "Updates live in different places" },
      { why: "Why 3", answer: "No one owns the shared calendar" },
      { why: "Why 4", answer: "It was never assigned to anyone" },
      { why: "Why 5 (root cause)", answer: "The team never designated a calendar owner when it formed" },
    ] },
    { type: "textarea", key: "structuralFix", label: "The structural fix this points to", section: "Fix", rows: 2, seed: "Assign one person as the standing calendar owner." },
  ],

  129: [
    { type: "text", key: "skillOrTask", label: "Skill or task", section: "Skill / task being practiced", seed: "Case interview practice" },
    { type: "text", key: "attempt1Did", label: "Attempt 1: What I did", section: "Attempt 1", seed: "Worked through a market-sizing case" },
    { type: "text", key: "attempt1Observed", label: "Attempt 1: What I observed", seed: "Froze on structuring the framework" },
    { type: "text", key: "attempt1Adjustment", label: "Attempt 1: Adjustment for next time", seed: "Practice the framework skeleton until it's automatic" },
    { type: "text", key: "attempt2Did", label: "Attempt 2: What I did", section: "Attempt 2", seed: "Worked through a profitability case" },
    { type: "text", key: "attempt2Observed", label: "Attempt 2: What I observed", seed: "Framework came faster, stumbled on the math" },
    { type: "text", key: "attempt2Adjustment", label: "Attempt 2: Adjustment for next time", seed: "Drill mental math separately" },
    { type: "text", key: "attempt3Did", label: "Attempt 3: What I did", section: "Attempt 3", seed: "Worked through a market-entry case" },
    { type: "text", key: "attempt3Observed", label: "Attempt 3: What I observed", seed: "Framework and math both solid, struggled with an ambiguous follow-up" },
    { type: "text", key: "attempt3Adjustment", label: "Attempt 3: Adjustment for next time", seed: "Practice asking clarifying questions before answering" },
    { type: "textarea", key: "acrossAttempts", label: "What actually improved from attempt 1 to attempt 3", section: "Across all attempts", rows: 2, seed: "My stuck point moved entirely from framework structure to handling ambiguous follow-ups, a much more advanced problem." },
  ],

  130: [
    { type: "table", key: "optionsCriteria", label: "Options & criteria", section: "Options & criteria", columns: [
      { key: "option", label: "Option", kind: "text" },
      { key: "cost", label: "Cost (1 to 10)", kind: "rating" },
      { key: "impact", label: "Impact (1 to 10)", kind: "rating" },
      { key: "feasibility", label: "Feasibility (1 to 10)", kind: "rating" },
    ], seedRows: [{ option: "Ambitious approach", cost: 7, impact: 9, feasibility: 3 }] },
    { type: "textarea", key: "matchesGut", label: "Does the highest-scoring option match my gut instinct?", section: "What the scores reveal", rows: 2, seed: "No, my gut favored the ambitious option, but it scored much lower on feasibility." },
    { type: "textarea", key: "whereScoresDiverge", label: "Where did the scores diverge sharply, and why?", rows: 2, seed: "Feasibility, given my actual time constraints this semester." },
    { type: "text", key: "finalChoice", label: "My final choice", seed: "The more moderate approach" },
  ],

  131: [
    { type: "textarea", key: "unresolvedProblem", label: "The unresolved problem", section: "The problem", rows: 2, seed: "Which networking activities are actually worth my limited time." },
    { type: "text", key: "model1", label: "Model 1", section: "First model", seed: "80/20 Analysis" },
    { type: "textarea", key: "model1Reveals", label: "What applying it reveals", rows: 2, seed: "A small set of contacts drove most of my opportunities." },
    { type: "text", key: "model2", label: "Model 2", section: "Second model", seed: "Systems Thinking" },
    { type: "textarea", key: "model2Reveals", label: "What applying it reveals", rows: 2, seed: "Those contacts were all connected through one alumni group." },
    { type: "textarea", key: "combinationReveals", label: "What the combination shows that neither model alone did", section: "The combination", rows: 2, seed: "The real leverage point is that one alumni group, not networking broadly." },
  ],

  132: [
    { type: "textarea", key: "largerPlan", label: "The larger plan", section: "The plan", rows: 2, seed: "Launch a full weekly content series." },
    { type: "textarea", key: "riskiestAssumption", label: "The riskiest assumption it depends on", rows: 2, seed: "That people actually want this specific type of content." },
    { type: "textarea", key: "smallestTest", label: "Smallest possible test of that assumption", section: "The small test", rows: 2, seed: "Publish a single piece first and watch engagement." },
    { type: "textarea", key: "result", label: "Result", rows: 2, seed: "Strong engagement on the first piece." },
    { type: "text", key: "decision", label: "Confirm, adjust, or abandon the full plan?", section: "Decision", seed: "Confirm, moving forward with the full series" },
  ],

  133: [
    { type: "chipList", key: "longTermGoals", label: "Long-term goals", section: "Long-term goals", seed: ["Lead a small product team within 5 years", "Build a reputation for shipping things people actually use"] },
    { type: "chipList", key: "currentPriorities", label: "Current priorities", section: "Current priorities", seed: ["Finish my current class project", "Apply to 3 internships this month"] },
    { type: "table", key: "connectionCheck", label: "Connection check", section: "Connection check", columns: [
      { key: "goal", label: "Long-term goal", kind: "text" },
      { key: "connected", label: "Connected current action? (Y/N)", kind: "text" },
    ], seedRows: [{ goal: "Lead a small product team within 5 years", connected: "N" }] },
    { type: "textarea", key: "goalWithNoAction", label: "Any goal with no connected action", section: "Gaps", rows: 2, seed: "Leading a small product team, nothing I'm doing right now builds toward that directly." },
    { type: "textarea", key: "actionWithNoGoal", label: "Any current action with no connected goal", rows: 2, seed: "None right now, everything on my plate ties to at least one goal." },
  ],
  134: [
    { type: "text", key: "subjectLine", label: "Subject line", section: "Draft", seed: "Quick question about your Thursday office hours" },
    { type: "textarea", key: "recipientPurpose", label: "Recipient and purpose", rows: 2, seed: "Professor Alvarez, asking to confirm office hours before I stop by with a question about the midterm." },
    { type: "checklist", key: "preSendChecklist", label: "Pre-send checklist", section: "Pre-send checklist", items: ["Subject line is clear", "Purpose stated in first two sentences", "One specific ask included", "Proofread once"], seedChecked: ["Subject line is clear", "Proofread once"] },
    { type: "text", key: "responseTime", label: "Response time", section: "Result", seed: "Within 3 hours" },
    { type: "textarea", key: "gotOutcome", label: "Did it get the outcome I wanted?", rows: 2, seed: "Yes, confirmed office hours and got a specific time to stop by." },
  ],

  135: [
    { type: "table", key: "agenda", label: "Agenda", section: "Agenda", columns: [
      { key: "topic", label: "Topic", kind: "text" },
      { key: "time", label: "Time allotted", kind: "text" },
      { key: "objective", label: "Objective (Decide/Inform/Brainstorm)", kind: "text" },
    ], seedRows: [{ topic: "Budget approval", time: "10 min", objective: "Decide" }] },
    { type: "text", key: "sharedInAdvance", label: "Sent to attendees on (date/time)", section: "Shared in advance?", seed: "Monday, 6pm, day before the meeting" },
    { type: "textarea", key: "postMeetingCheck", label: "Did the meeting stay on time and on topic?", section: "Post-meeting check", rows: 2, seed: "Yes, wrapped in 45 minutes with all three topics covered." },
  ],

  136: [
    { type: "textarea", key: "introduction", label: "Introduction (what and why)", section: "Outline", rows: 2, seed: "This report evaluates three vendor options for the club's spring event." },
    { type: "text", key: "bodyPoint1", label: "Body, key point 1", seed: "Vendor A: lowest cost, limited availability" },
    { type: "text", key: "bodyPoint2", label: "Body, key point 2", seed: "Vendor B: mid-range cost, strong reviews" },
    { type: "text", key: "bodyPoint3", label: "Body, key point 3", seed: "Vendor C: highest cost, full service package" },
    { type: "textarea", key: "conclusion", label: "Conclusion (so what)", rows: 2, seed: "Vendor B offers the best balance of cost and reliability for our budget." },
    { type: "textarea", key: "draft", label: "Draft", section: "Draft", rows: 6, seed: "" },
  ],

  137: [
    { type: "textarea", key: "structurePass", label: "Does the structure flow logically? Note any fix needed", section: "Structure pass", rows: 2, seed: "The conclusion repeats the intro almost word for word, needs to actually add a takeaway." },
    { type: "textarea", key: "grammarPass", label: "Common issues found", section: "Grammar & word choice pass", rows: 2, seed: "Overuse of 'in order to' where 'to' works fine." },
    { type: "textarea", key: "readAloudPass", label: "What sounded awkward when read aloud", section: "Read-aloud pass", rows: 2, seed: "The second paragraph's second sentence is a run-on, hard to say in one breath." },
    { type: "table", key: "beforeAfter", label: "Before & after", section: "Before & after", columns: [
      { key: "original", label: "Original sentence", kind: "text" },
      { key: "edited", label: "Edited version", kind: "text" },
    ], seedRows: [{ original: "In order to achieve the goal of increasing engagement, we did outreach.", edited: "We increased engagement through direct outreach." }] },
  ],

  138: [
    { type: "text", key: "processDocumented", label: "Process or finding being documented", section: "Setup", seed: "Cleaning and merging the club's membership spreadsheet" },
    { type: "textarea", key: "prerequisites", label: "Prerequisites the reader needs", rows: 2, seed: "Access to the shared drive and basic spreadsheet familiarity." },
    { type: "chipList", key: "steps", label: "Steps, in order", section: "Step-by-step", seed: ["Export both spreadsheets as CSV", "Standardize column headers", "Remove duplicate emails", "Merge into one master file", "Spot-check 10 random rows", "Share the cleaned file"] },
    { type: "text", key: "reviewedBy", label: "Who reviewed it, and could they follow it unassisted?", section: "Test", seed: "A teammate unfamiliar with the process, yes, no questions asked" },
  ],

  139: [
    { type: "text", key: "theAsk", label: "The ask", section: "Framing", seed: "Approve a $200 budget increase for the spring showcase" },
    { type: "textarea", key: "whyMatters", label: "Why it matters to the recipient (not just to me)", rows: 2, seed: "It directly improves turnout and member satisfaction, which reflects on the whole club's standing." },
    { type: "textarea", key: "objectionAddressed", label: "Likely objection, addressed in advance", rows: 2, seed: "Cost, addressed by showing it's a one-time expense covered by existing sponsorship funds." },
    { type: "textarea", key: "draft", label: "Draft", section: "Draft", rows: 4, seed: "" },
    { type: "text", key: "outcome", label: "Outcome", section: "Result", seed: "Approved on first try" },
  ],

  140: [
    { type: "textarea", key: "problem", label: "Problem", section: "Problem", rows: 2, seed: "Our club's spring showcase has had declining attendance for two years running." },
    { type: "textarea", key: "proposedSolution", label: "Proposed solution", section: "Proposed solution", rows: 2, seed: "Move the showcase to a weekday evening and add a co-sponsor to expand reach." },
    { type: "table", key: "benefitsTradeoffs", label: "Benefits & trade-offs", section: "Benefits & trade-offs", columns: [
      { key: "benefit", label: "Benefit", kind: "text" },
      { key: "tradeoff", label: "Cost or trade-off", kind: "text" },
    ], seedRows: [{ benefit: "Wider audience reach", tradeoff: "Requires coordinating with a second organization" }] },
    { type: "text", key: "theAsk", label: "Specific ask", section: "The ask", seed: "Approval to reach out to the co-sponsor and shift the date" },
  ],

  141: [
    { type: "text", key: "meetingDate", label: "Meeting / date", section: "Meeting details", seed: "Club officers, Sept 10" },
    { type: "textarea", key: "decisionsMade", label: "Decisions made", section: "Decisions made", rows: 2, seed: "Approved moving the showcase to a weekday evening." },
    { type: "table", key: "actionItems", label: "Action items", section: "Action items", columns: [
      { key: "actionItem", label: "Action item", kind: "text" },
      { key: "owner", label: "Owner", kind: "text" },
      { key: "deadline", label: "Deadline", kind: "text" },
    ], seedRows: [{ actionItem: "Reach out to co-sponsor", owner: "Jordan", deadline: "Friday" }] },
    { type: "text", key: "sentWithin24h", label: "Sent within 24 hours? (Y/N)", section: "Shared with attendees?", seed: "Y" },
  ],

  142: [
    { type: "text", key: "meetingConversation", label: "Meeting / conversation", section: "Draft", seed: "Call with the print vendor" },
    { type: "textarea", key: "draft", label: "Draft", rows: 4, seed: "Thanks for the call today. To confirm: we're going with the 500-flyer package at $80, delivered by the 15th. Let me know if I got anything wrong." },
    { type: "textarea", key: "corrections", label: "Any corrections received?", section: "Result", rows: 2, seed: "Yes, the vendor corrected the delivery date to the 17th." },
  ],

  143: [
    { type: "text", key: "whoIMet", label: "Who I met", section: "Context", seed: "A recruiter from Acme Corp at the career fair" },
    { type: "textarea", key: "specificDetail", label: "Specific detail from our conversation", rows: 2, seed: "She mentioned Acme's new sustainability product line launching this fall." },
    { type: "textarea", key: "draft", label: "Draft", section: "Draft", rows: 4, seed: "" },
    { type: "text", key: "responseReceived", label: "Response received?", section: "Result", seed: "Yes, same day" },
  ],

  144: [
    { type: "textarea", key: "coreTakeaway", label: "The one thing a non-expert actually needs to know", section: "Core takeaway", rows: 2, seed: "Our model predicts which students are at risk of dropping a class before it happens, so advisors can step in early." },
    { type: "textarea", key: "draft", label: "Draft", section: "Draft", rows: 4, seed: "" },
    { type: "text", key: "nonExpertReader", label: "Non-expert reader", section: "Test", seed: "My roommate, who studies history" },
    { type: "textarea", key: "couldExplainBack", label: "Could they explain it back accurately?", rows: 2, seed: "Yes, she summarized the core idea correctly on the first try." },
  ],

  145: [
    { type: "table", key: "emailReview", label: "Review", section: "Review", columns: [
      { key: "email", label: "Email", kind: "text" },
      { key: "issue", label: "Issue noticed", kind: "text" },
    ], seedRows: [{ email: "Email to Professor Alvarez", issue: "No subject line" }] },
    { type: "text", key: "mostCommonIssue", label: "Most common issue across all of them", section: "Pattern", seed: "Missing or vague subject lines" },
    { type: "text", key: "oneFix", label: "One fix I'll apply going forward", seed: "Always write a specific subject line before anything else" },
  ],

  146: [
    { type: "text", key: "reviewer", label: "Reviewer", section: "Questions asked", seed: "My mentor, Dana" },
    { type: "textarea", key: "isAskClear", label: "Is the ask clear?", rows: 2, seed: "Mostly, but she said it wasn't obvious until the final paragraph." },
    { type: "textarea", key: "benefitsConvince", label: "Does the benefits section actually convince you?", rows: 2, seed: "Yes, once she saw actual numbers instead of general claims." },
    { type: "table", key: "changesMade", label: "Changes made", section: "Changes made", columns: [
      { key: "feedback", label: "Feedback", kind: "text" },
      { key: "change", label: "Change made", kind: "text" },
    ], seedRows: [{ feedback: "Ask buried in final paragraph", change: "Moved the ask to the second paragraph" }] },
  ],

  147: [
    { type: "text", key: "recruiterCompany", label: "Recruiter / company", section: "Research", seed: "Jordan Reyes, Acme Corp" },
    { type: "text", key: "specificRole", label: "Specific role of interest", seed: "Marketing Analyst, req #4021" },
    { type: "textarea", key: "draft", label: "Draft", section: "Draft", rows: 4, seed: "" },
    { type: "text", key: "responseReceived", label: "Response received?", section: "Result", seed: "Yes, within a day" },
  ],

  148: [
    { type: "text", key: "documentProject", label: "Document / project", section: "The document", seed: "Group project final report" },
    { type: "table", key: "commentsLeft", label: "Comments left", section: "Comments left", columns: [
      { key: "comment", label: "Comment", kind: "text" },
      { key: "specific", label: "Specific & actionable? (Y/N)", kind: "text" },
    ], seedRows: [{ comment: "This paragraph's argument would be clearer with a specific number", specific: "Y" }] },
    { type: "textarea", key: "reflection", label: "Did explaining edits speed up revisions?", section: "Reflection", rows: 2, seed: "Yes, the team stopped re-asking what I meant by each comment." },
  ],

  149: [
    { type: "text", key: "reportSummarized", label: "Report being summarized", section: "Source report", seed: "Semester-end research report on student engagement" },
    { type: "textarea", key: "coreFinding", label: "Core finding or recommendation", rows: 2, seed: "Students who join a club within their first month are twice as likely to stay enrolled year over year." },
    { type: "textarea", key: "draft", label: "Draft", section: "Draft", rows: 4, seed: "" },
    { type: "textarea", key: "readerUnderstood", label: "Did a reader who only read the summary understand the core point?", section: "Test", rows: 2, seed: "Yes, she repeated the core finding accurately." },
  ],

  150: [
    { type: "text", key: "template1Type", label: "Email type", section: "Template 1", seed: "Networking follow-up" },
    { type: "textarea", key: "template1Body", label: "Template", rows: 3, seed: "Hi [Name], great meeting you at [event]. I really enjoyed hearing about [specific detail]. Would you be open to a quick 15-minute call sometime in the next couple weeks?" },
    { type: "text", key: "template2Type", label: "Email type", section: "Template 2", seed: "Cold outreach to recruiter" },
    { type: "textarea", key: "template2Body", label: "Template", rows: 3, seed: "Hi [Name], I'm applying to [role] and wanted to reach out directly. I have [one relevant qualification]. Is there anything specific you'd want to know before I apply?" },
    { type: "text", key: "template3Type", label: "Email type", section: "Template 3", seed: "Meeting follow-up summary" },
    { type: "textarea", key: "template3Body", label: "Template", rows: 3, seed: "Thanks for the time today. To confirm what we agreed: [1-2 key points]. Let me know if I got anything wrong." },
  ],
  151: [
    { type: "text", key: "openingHook", label: "Opening hook", section: "Structure", seed: "Last year, our club almost shut down. Here's what saved it." },
    { type: "text", key: "mainPoint1", label: "Main point 1", seed: "The problem: declining membership" },
    { type: "text", key: "mainPoint2", label: "Main point 2", seed: "What we changed: a referral incentive" },
    { type: "text", key: "mainPoint3", label: "Main point 3", seed: "The result: membership up 40%" },
    { type: "text", key: "closingTakeaway", label: "Closing takeaway", seed: "Small, specific incentives beat generic outreach every time." },
    { type: "textarea", key: "fullScript", label: "Full script or outline", section: "Full script or outline", rows: 5, seed: "" },
  ],

  152: [
    { type: "text", key: "audience", label: "Audience", section: "Delivery log", seed: "Two roommates" },
    { type: "text", key: "timeTargetActual", label: "Time (target vs. actual)", seed: "5 min target, 6:20 actual" },
    { type: "textarea", key: "whereStumbled", label: "Where did I stumble or lose the thread?", section: "Feedback", rows: 2, seed: "Lost my place transitioning from point 2 to point 3." },
    { type: "textarea", key: "whatLandedWell", label: "What landed well?", rows: 2, seed: "The opening story got genuine laughs and attention." },
  ],

  153: [
    { type: "text", key: "recording1Length", label: "Length", section: "Recording 1", seed: "90 seconds" },
    { type: "text", key: "recording1Fillers", label: "Filler word count", seed: "14" },
    { type: "text", key: "recording2Length", label: "Length", section: "Recording 2", seed: "85 seconds" },
    { type: "text", key: "recording2Fillers", label: "Filler word count", seed: "4" },
    { type: "textarea", key: "improvement", label: "What changed between recordings", section: "Improvement", rows: 2, seed: "Paused silently instead of saying 'um' when I needed a beat to think." },
  ],

  154: [
    { type: "table", key: "practiceLog", label: "Practice log", section: "Practice log", columns: [
      { key: "day", label: "Day", kind: "text" },
      { key: "practiced", label: "Practiced aloud? (Y/N)", kind: "text" },
      { key: "notes", label: "Notes", kind: "text" },
    ], seedRows: [{ day: "Mon", practiced: "Y", notes: "Still sounds a bit stiff at the opening" }] },
    { type: "text", key: "testedOn", label: "Tested on (person)", section: "Real test", seed: "A friend outside my major" },
    { type: "textarea", key: "theirReaction", label: "Their reaction", rows: 2, seed: "Asked a genuine follow-up question about my capstone project." },
  ],

  155: [
    { type: "textarea", key: "setup", label: "The situation", section: "Setup", rows: 2, seed: "Our club's spring showcase had lost momentum for two years straight." },
    { type: "textarea", key: "challenge", label: "What went wrong or was at stake", section: "Challenge", rows: 2, seed: "Attendance had dropped so low we were at risk of losing university funding." },
    { type: "textarea", key: "resolution", label: "How it was resolved", section: "Resolution", rows: 2, seed: "We redesigned outreach around a referral incentive, and attendance rebounded 40%." },
    { type: "textarea", key: "fullStoryDraft", label: "Full story draft", section: "Full story draft", rows: 5, seed: "" },
  ],

  156: [
    { type: "textarea", key: "toneObservation", label: "Observation", section: "Tone", rows: 2, seed: "Tone stayed warm and confident throughout, even during the tricky question." },
    { type: "textarea", key: "paceObservation", label: "Observation", section: "Pace", rows: 2, seed: "Pace sped up noticeably in the last third, right when I got nervous." },
    { type: "textarea", key: "clarityObservation", label: "Observation", section: "Clarity", rows: 2, seed: "Clear overall, but one technical term went undefined." },
  ],

  157: [
    { type: "table", key: "slideOutline", label: "Slide outline", section: "Slide outline", columns: [
      { key: "slideNum", label: "Slide #", kind: "text" },
      { key: "coreIdea", label: "Core idea", kind: "text" },
      { key: "visual", label: "Visual used", kind: "text" },
    ], seedRows: [{ slideNum: "1", coreIdea: "The problem", visual: "Single stat, large text" }] },
    { type: "textarea", key: "simplifyCheck", label: "Slide with too much text, and how I simplified it", section: "Simplify check", rows: 2, seed: "Slide 4 had six bullet points, cut to one phrase and a chart." },
  ],

  158: [
    { type: "text", key: "position", label: "Position I'm arguing", section: "Position", seed: "Remote internships are as valuable as in-person ones" },
    { type: "text", key: "evidence1", label: "Strongest evidence 1", section: "Evidence", seed: "Study showing comparable skill-building outcomes" },
    { type: "text", key: "evidence2", label: "Strongest evidence 2", seed: "Access to a wider range of companies and roles" },
    { type: "text", key: "evidence3", label: "Strongest evidence 3", seed: "Lower cost of participation for students" },
    { type: "table", key: "counterarguments", label: "Counterarguments", section: "Counterarguments", columns: [
      { key: "counter", label: "Likely counterargument", kind: "text" },
      { key: "response", label: "My response", kind: "text" },
    ], seedRows: [{ counter: "You miss out on in-person mentorship", response: "Structured virtual check-ins can close most of that gap" }] },
  ],

  159: [
    { type: "table", key: "rolesTiming", label: "Roles & timing", section: "Roles & timing", columns: [
      { key: "presenter", label: "Presenter", kind: "text" },
      { key: "section", label: "Section", kind: "text" },
      { key: "time", label: "Time allotted", kind: "text" },
    ], seedRows: [{ presenter: "Maya", section: "Problem statement", time: "2 min" }] },
    { type: "textarea", key: "transitions", label: "How each handoff will happen", section: "Transitions", rows: 2, seed: "Each presenter names the next speaker and their section by title before sitting down." },
    { type: "text", key: "fullRehearsal", label: "Date held, and how it went", section: "Full rehearsal", seed: "Tuesday, ran long by 3 minutes, tightened the middle section" },
  ],

  160: [
    { type: "text", key: "round1Topic", label: "Topic given", section: "Round 1", seed: "Your favorite failed project" },
    { type: "textarea", key: "round1Result", label: "How it went", rows: 2, seed: "Rambled a bit before finding a point." },
    { type: "text", key: "round2Topic", label: "Topic given", section: "Round 2", seed: "A skill you want to learn" },
    { type: "textarea", key: "round2Result", label: "How it went", rows: 2, seed: "Better structure, stated the point up front." },
    { type: "text", key: "round3Topic", label: "Topic given", section: "Round 3", seed: "The best advice you've received" },
    { type: "textarea", key: "round3Result", label: "How it went", rows: 2, seed: "Clean point-reason-example structure, finished with time to spare." },
  ],

  161: [
    { type: "text", key: "recommendation", label: "My recommendation, stated in one sentence", section: "Recommendation", seed: "We should move the showcase to a weekday evening and add a co-sponsor." },
    { type: "text", key: "evidence1", label: "Strongest evidence 1", section: "Supporting evidence", seed: "Weekday evenings had 30% higher attendance in comparable events" },
    { type: "text", key: "evidence2", label: "Strongest evidence 2", seed: "Co-sponsorship doubles our outreach list at no added cost" },
    { type: "text", key: "evidence3", label: "Strongest evidence 3", seed: "Two other clubs have used this model successfully" },
    { type: "textarea", key: "objectionAddressed", label: "Most likely objection, addressed", section: "Objection & ask", rows: 2, seed: "Splitting credit with a co-sponsor, addressed by proposing clear joint branding." },
    { type: "text", key: "askClose", label: "Specific ask / close", seed: "Approve reaching out to the co-sponsor this week" },
  ],

  162: [
    { type: "textarea", key: "coreIdeaNonExpert", label: "Core idea, non-expert version", section: "What they actually need to know", rows: 2, seed: "Our tool flags students who might need extra support before they fall behind." },
    { type: "text", key: "analogy", label: "Analogy I'll use", seed: "Like a smoke detector for coursework, it warns you early, not after the fire." },
    { type: "text", key: "nonExpertTester", label: "Non-expert tester", section: "Test", seed: "My roommate, a history major" },
    { type: "textarea", key: "wasntClear", label: "What wasn't clear the first time", rows: 2, seed: "She didn't understand what 'flagging' actually meant until I used the smoke detector analogy." },
  ],

  163: [
    { type: "textarea", key: "patternFromDeliveries", label: "Part that consistently causes confusion", section: "Pattern from past deliveries", rows: 2, seed: "Mentioning my minor draws a confused follow-up question every time." },
    { type: "textarea", key: "revisedPitch", label: "Revised pitch", section: "Revised pitch", rows: 4, seed: "" },
    { type: "textarea", key: "reTestReaction", label: "New reaction after revision", section: "Re-test", rows: 2, seed: "Got an interested follow-up question instead of a confused one." },
  ],

  164: [
    { type: "text", key: "conceptTeaching", label: "Concept I'm teaching", section: "Topic", seed: "How to build a simple decision matrix" },
    { type: "textarea", key: "informalNotes", label: "Informal notes", section: "Informal notes", rows: 4, seed: "" },
    { type: "textarea", key: "gapRevealed", label: "Gap in my own understanding this revealed", section: "What I learned from teaching it", rows: 2, seed: "I couldn't clearly explain why weighting matters until someone asked directly." },
  ],

  165: [
    { type: "table", key: "practiceLog", label: "Practice log", section: "Practice log", columns: [
      { key: "day", label: "Day", kind: "text" },
      { key: "material", label: "Material read", kind: "text" },
      { key: "paceNotes", label: "Pace notes", kind: "text" },
    ], seedRows: [{ day: "Mon", material: "A news article", paceNotes: "Rushed through the second paragraph" }] },
    { type: "textarea", key: "reflection", label: "Has my natural speaking pace changed?", section: "Reflection", rows: 2, seed: "Yes, I catch myself slowing down naturally in conversation now." },
  ],

  166: [
    { type: "table", key: "conversationLog", label: "Conversation log", section: "Conversation log", columns: [
      { key: "conversation", label: "Conversation", kind: "text" },
      { key: "summarized", label: "Summarized before responding? (Y/N)", kind: "text" },
      { key: "result", label: "Result", kind: "text" },
    ], seedRows: [{ conversation: "Group project planning meeting", summarized: "Y", result: "Caught a misunderstanding about the deadline" }] },
    { type: "textarea", key: "reflection", label: "Did summarizing ever catch a misunderstanding?", section: "Reflection", rows: 2, seed: "Yes, once, and it would have caused real confusion if it went uncaught." },
  ],

  167: [
    { type: "text", key: "articleSource", label: "Article / source", section: "Article", seed: "\"The Real Cost of Multitasking\", a workplace psychology article" },
    { type: "textarea", key: "summaryFromMemory", label: "Summary from memory", section: "Summary from memory", rows: 4, seed: "" },
    { type: "textarea", key: "accuracyCheck", label: "How accurate was my summary against the original?", section: "Accuracy check", rows: 2, seed: "Mostly accurate, missed one supporting statistic." },
  ],

  168: [
    { type: "text", key: "entry1Content", label: "Podcast / video", section: "Entry 1", seed: "A marketing podcast episode on brand positioning" },
    { type: "text", key: "entry1Takeaway", label: "Main takeaway", seed: "Positioning is about the one thing you own in the customer's mind, not everything you do well." },
    { type: "text", key: "entry1Apply", label: "How I might apply it", seed: "Narrow my portfolio's headline to one clear specialty instead of listing everything." },
    { type: "text", key: "entry2Content", label: "Podcast / video", section: "Entry 2", seed: "A talk on effective feedback" },
    { type: "text", key: "entry2Takeaway", label: "Main takeaway", seed: "Specific feedback tied to one example beats general praise or criticism." },
    { type: "text", key: "entry2Apply", label: "How I might apply it", seed: "Use one concrete example every time I give peer feedback." },
  ],

  169: [
    { type: "text", key: "articlePaper", label: "Article / paper", section: "The piece", seed: "A dense academic paper on decision fatigue" },
    { type: "textarea", key: "notesSecondPass", label: "Notes on second pass", section: "Notes on second pass", rows: 4, seed: "" },
    { type: "text", key: "coreThesis", label: "Stated in one sentence", section: "Core thesis", seed: "Repeated decision-making depletes mental resources, so structuring fewer, better decisions matters more than willpower." },
  ],

  170: [
    { type: "table", key: "recommendationsGathered", label: "Recommendations gathered", section: "Recommendations gathered", columns: [
      { key: "recommendedBy", label: "Recommended by", kind: "text" },
      { key: "bookArticle", label: "Book / article", kind: "text" },
      { key: "why", label: "Why they recommended it", kind: "text" },
    ], seedRows: [{ recommendedBy: "Dana, marketing manager", bookArticle: "Positioning by Ries & Trout", why: "Foundational for how she thinks about brand strategy" }] },
    { type: "chipList", key: "priorityOrder", label: "Reading list, in priority order", section: "My priority order", seed: ["Positioning by Ries & Trout", "Made to Stick", "Building a StoryBrand"] },
  ],

  171: [
    { type: "text", key: "entry1Source", label: "Source", section: "Entry 1", seed: "Chapter 3 of a leadership textbook" },
    { type: "text", key: "entry1Insight", label: "Key insight", seed: "Delegation fails most often from unclear expectations, not lack of trust." },
    { type: "textarea", key: "entry1Reaction", label: "My reaction or question", rows: 2, seed: "Makes me realize I've been vague about deadlines when asking others for help." },
    { type: "text", key: "entry2Source", label: "Source", section: "Entry 2", seed: "An article on effective one-on-ones" },
    { type: "text", key: "entry2Insight", label: "Key insight", seed: "The best one-on-ones are led by questions, not status updates." },
    { type: "textarea", key: "entry2Reaction", label: "My reaction or question", rows: 2, seed: "I want to try opening my next check-in with a question instead of a status report." },
  ],

  172: [
    { type: "table", key: "skimPractice", label: "Skim practice", section: "Skim practice", columns: [
      { key: "document", label: "Document", kind: "text" },
      { key: "skimmedFirst", label: "Skimmed first? (Y/N)", kind: "text" },
      { key: "neededFullRead", label: "Needed full read? (Y/N)", kind: "text" },
    ], seedRows: [{ document: "Weekly team update email", skimmedFirst: "Y", neededFullRead: "N" }] },
    { type: "textarea", key: "reflection", label: "How much time did triaging save this week?", section: "Reflection", rows: 2, seed: "Probably 20 to 30 minutes across the week, mostly on emails I didn't need to read fully." },
  ],

  173: [
    { type: "text", key: "lecturePodcast", label: "Lecture / podcast", section: "Content", seed: "Guest lecture on negotiation tactics" },
    { type: "textarea", key: "summaryFromMemory", label: "Summary from memory (within 1 hour)", section: "Summary from memory", rows: 4, seed: "" },
    { type: "textarea", key: "gapCheck", label: "What did I miss compared to my notes (if any)?", section: "Gap check", rows: 2, seed: "Missed the specific example about anchoring, only recalled the general concept." },
  ],
  174: [
    { type: "text", key: "whoISpokeWith", label: "Who I spoke with", section: "The conversation", seed: "An alum working in product marketing" },
    { type: "text", key: "openingQuestion", label: "My opening question", seed: "What's changed most about your job since you started?" },
    { type: "text", key: "followUp1", label: "Follow-up question 1", section: "Follow-up questions asked", seed: "What made you switch teams last year?" },
    { type: "text", key: "followUp2", label: "Follow-up question 2", seed: "What's a skill you wish you'd built earlier?" },
    { type: "text", key: "followUp3", label: "Follow-up question 3", seed: "Who else would you suggest I talk to?" },
    { type: "textarea", key: "reflection", label: "How long did the conversation genuinely sustain?", section: "Reflection", rows: 2, seed: "About 12 minutes, longer than any networking conversation I've had before." },
  ],

  175: [
    { type: "text", key: "practicePartner", label: "Practice partner", section: "Setup", seed: "My career advisor" },
    { type: "table", key: "deliveryFeedback", label: "Delivery feedback", section: "Delivery feedback", columns: [
      { key: "question", label: "Question", kind: "text" },
      { key: "clear", label: "Was answer clear/concise? (Y/N)", kind: "text" },
      { key: "feedback", label: "Feedback", kind: "text" },
    ], seedRows: [{ question: "Tell me about a time you led a project", clear: "N", feedback: "Ran long, point got lost halfway through" }] },
    { type: "textarea", key: "adjustment", label: "What I'll tighten for next round", section: "Adjustment", rows: 2, seed: "State the outcome in the first sentence, then back it up." },
  ],

  176: [
    { type: "text", key: "discussionTopic", label: "Discussion topic", section: "Setup", seed: "How should we split the project roles" },
    { type: "text", key: "openingQuestion", label: "Opening question", seed: "What part of this project are you most excited to own?" },
    { type: "table", key: "participationCheck", label: "Participation check", section: "Participation check", columns: [
      { key: "participant", label: "Participant", kind: "text" },
      { key: "invited", label: "Invited to speak? (Y/N)", kind: "text" },
    ], seedRows: [{ participant: "Sam", invited: "Y" }] },
    { type: "textarea", key: "reflection", label: "Did more people participate than usual?", section: "Reflection", rows: 2, seed: "Yes, two normally-quiet members shared ideas we ended up using." },
  ],

  177: [
    { type: "text", key: "whoICommunicatedWith", label: "Who I communicated with", section: "The interaction", seed: "An international classmate on a group project" },
    { type: "checklist", key: "adjustmentsMade", label: "Adjustments made", section: "Adjustments made", items: ["Avoided idioms", "Checked explicitly for understanding", "Asked about communication preferences rather than assuming"], seedChecked: ["Avoided idioms", "Checked explicitly for understanding"] },
    { type: "textarea", key: "result", label: "Did they confirm they understood clearly?", section: "Result", rows: 2, seed: "Yes, and they said the direct phrasing was actually easier to follow than usual." },
  ],

  178: [
    { type: "textarea", key: "memorableDetail", label: "One specific, memorable detail I'll add to my introduction", section: "The memorable detail", rows: 2, seed: "The exact percentage my capstone campaign increased engagement by." },
    { type: "text", key: "event", label: "Event", section: "Result", seed: "Spring career fair" },
    { type: "textarea", key: "detailReferenced", label: "Did anyone reference the detail later?", rows: 2, seed: "Yes, a recruiter brought it up specifically when I followed up." },
  ],

  179: [
    { type: "text", key: "forumGroup", label: "Forum / group", section: "The discussion", seed: "A LinkedIn group for early-career marketers" },
    { type: "textarea", key: "genuineContribution", label: "My genuine contribution (question or specific perspective)", rows: 3, seed: "Asked how others handle measuring brand awareness when budgets are too small for formal surveys." },
    { type: "textarea", key: "engagementReceived", label: "Engagement received", section: "Result", rows: 2, seed: "Three replies, one turned into a direct message conversation." },
  ],

  180: [
    { type: "text", key: "seniorPerson", label: "Senior person", section: "Prep", seed: "My internship's VP of Marketing" },
    { type: "text", key: "question1", label: "Specific question 1", seed: "What's a decision you'd make differently earlier in your career?" },
    { type: "text", key: "question2", label: "Specific question 2", seed: "What separates people who get promoted quickly on this team?" },
    { type: "text", key: "thankYouSent", label: "Thank-you sent, referencing something specific? (Y/N)", section: "Follow-up", seed: "Y" },
  ],

  181: [
    { type: "textarea", key: "disagreement", label: "The disagreement", section: "The issue", rows: 2, seed: "A teammate missed three deadlines in a row without a heads-up." },
    { type: "textarea", key: "iStatementOpening", label: "My 'I' statement opening", rows: 2, seed: "I've felt stressed trying to plan around deadlines that keep shifting without notice." },
    { type: "textarea", key: "whatIHeard", label: "What I heard when I genuinely listened", section: "Their perspective", rows: 2, seed: "He'd been overwhelmed with a family issue and didn't know how to bring it up." },
    { type: "textarea", key: "resolution", label: "The specific resolution agreed on", section: "Resolution", rows: 2, seed: "He'll flag any at-risk deadline 48 hours in advance, and I'll check in midweek." },
  ],

  182: [
    { type: "text", key: "meetingGroup", label: "Meeting / group", section: "Agenda used", seed: "Class project group meeting" },
    { type: "textarea", key: "closingSummary", label: "Closing summary", section: "Closing summary", rows: 3, seed: "" },
    { type: "textarea", key: "clearNextSteps", label: "Did the group leave with clear next steps?", section: "Result", rows: 2, seed: "Yes, everyone confirmed their task and deadline before leaving." },
  ],

  183: [
    { type: "text", key: "coursePlatform", label: "Course / platform", section: "Course", seed: "Google Analytics certification, Coursera" },
    { type: "textarea", key: "questionInsightPosted", label: "My genuine question or insight posted", rows: 3, seed: "Asked how others handle attribution when a customer touches multiple channels before converting." },
    { type: "textarea", key: "valueReceived", label: "Did another learner's response add real value?", section: "Value received", rows: 2, seed: "Yes, someone linked a walkthrough that clarified a concept the course itself glossed over." },
  ],

  184: [
    { type: "table", key: "commentsLeft", label: "Comments left", section: "Comments left", columns: [
      { key: "postAuthor", label: "Post / author", kind: "text" },
      { key: "myComment", label: "My comment", kind: "text" },
      { key: "response", label: "Response received", kind: "text" },
    ], seedRows: [{ postAuthor: "A marketing director's post on brand voice", myComment: "Asked how they balance consistency with a fast-moving industry", response: "The author replied directly with a real example" }] },
    { type: "textarea", key: "reflection", label: "Which comment generated the most genuine engagement?", section: "Reflection", rows: 2, seed: "The one where I asked a specific question instead of just agreeing." },
  ],

  185: [
    { type: "textarea", key: "realisticSituation", label: "The realistic situation", section: "The scenario", rows: 2, seed: "Telling my team lead I'm overcommitted and need to hand off a task." },
    { type: "text", key: "rolePlayPartner", label: "Role-play partner", seed: "My roommate" },
    { type: "textarea", key: "whatIDidWell", label: "What did I do well in the role-play?", section: "What I noticed", rows: 2, seed: "Stated the issue clearly without over-explaining." },
    { type: "textarea", key: "whatIllAdjust", label: "What will I adjust before the real conversation?", rows: 2, seed: "Stop over-apologizing before getting to the actual point." },
  ],

  186: [
    { type: "text", key: "eventForum", label: "Event / forum", section: "The forum", seed: "Campus town hall on career services" },
    { type: "textarea", key: "questionPrepared", label: "Question or comment prepared in advance", rows: 2, seed: "Asked whether the career center plans to expand evening advising hours." },
    { type: "textarea", key: "responseReceived", label: "Response or follow-up received", section: "Result", rows: 2, seed: "Got a direct answer, and the director followed up by email a week later." },
  ],

  187: [
    { type: "textarea", key: "feedbackReceived", label: "Feedback received", section: "The feedback", rows: 2, seed: "My presentation's ending felt rushed and didn't land the point." },
    { type: "text", key: "whoGaveIt", label: "Who gave it", seed: "My professor" },
    { type: "text", key: "stayedNonDefensive", label: "Did I stay non-defensive? (Y/N)", section: "My response in the moment", seed: "Y" },
    { type: "textarea", key: "followThrough", label: "Specific change I made afterward", section: "Follow-through", rows: 2, seed: "Timed my next practice run to leave room for a real closing statement." },
  ],

  188: [
    { type: "text", key: "peerTeammate", label: "Peer / teammate", section: "Prep", seed: "A teammate on my capstone project" },
    { type: "text", key: "genuineStrength", label: "Genuine strength I'll lead with", seed: "His research section was thorough and well-cited." },
    { type: "textarea", key: "specificSuggestion", label: "Specific, actionable suggestion", rows: 2, seed: "The presentation section runs about 2 minutes long, cutting the middle example would tighten it." },
    { type: "textarea", key: "howReceived", label: "How was it received?", section: "Result", rows: 2, seed: "Well, he thanked me for catching it before the real presentation." },
  ],

  189: [
    { type: "text", key: "experienceType", label: "Course / workshop / project", section: "The experience", seed: "A semester-long marketing analytics course" },
    { type: "textarea", key: "whatLearned", label: "What I learned", section: "Reflection", rows: 2, seed: "How to read a funnel report and identify where users actually drop off." },
    { type: "textarea", key: "questionUnresolved", label: "What question remains unresolved", rows: 2, seed: "I still don't know how to prioritize which drop-off point to fix first." },
    { type: "textarea", key: "howIllApply", label: "How I'll apply this going forward", rows: 2, seed: "Use funnel analysis in my next project instead of just looking at overall conversion rate." },
  ],

  190: [
    { type: "scale", key: "writingRating", label: "Writing", section: "Ratings", seed: 60 },
    { type: "scale", key: "speakingRating", label: "Speaking", seed: 50 },
    { type: "scale", key: "listeningRating", label: "Listening", seed: 40 },
    { type: "table", key: "evidence", label: "Evidence", section: "Evidence", columns: [
      { key: "area", label: "Area", kind: "text" },
      { key: "evidence", label: "Specific evidence for rating", kind: "text" },
    ], seedRows: [{ area: "Listening", evidence: "I frequently realize I was thinking about my response instead of actually listening" }] },
    { type: "textarea", key: "priorityArea", label: "My genuine weakest area, and why", section: "Priority", rows: 2, seed: "Listening, it's the one I've never deliberately practiced or tracked before." },
  ],

  191: [
    { type: "table", key: "instances", label: "Instances", section: "Instances", columns: [
      { key: "situation", label: "Speaking situation", kind: "text" },
      { key: "trigger", label: "What triggered nervousness", kind: "text" },
    ], seedRows: [{ situation: "Unscripted Q&A after a presentation", trigger: "Not knowing the question in advance" }] },
    { type: "textarea", key: "commonThread", label: "What these situations have in common", section: "Common thread", rows: 2, seed: "All of them involve responding without any prep time, not the prepared remarks themselves." },
    { type: "textarea", key: "targetedStrategy", label: "Strategy specific to this trigger", section: "Targeted strategy", rows: 2, seed: "Practice the point-reason-example structure from the Impromptu Speaking Drill before any Q&A." },
  ],

  192: [
    { type: "text", key: "peerAssignment", label: "Peer / assignment", section: "The work", seed: "A classmate's first draft of a cover letter" },
    { type: "textarea", key: "strengthWithExample", label: "Specific strength, with example", section: "Feedback", rows: 2, seed: "The opening line about her research project immediately grabbed attention." },
    { type: "textarea", key: "suggestionWithExample", label: "Specific suggestion, with example", rows: 2, seed: "The second paragraph lists three skills without evidence, add one concrete example instead." },
    { type: "textarea", key: "didTheyChange", label: "Did they make a change based on it?", section: "Result", rows: 2, seed: "Yes, she added a specific project example in her next draft." },
  ],

  193: [
    { type: "text", key: "entry1WentWell", label: "What went well", section: "Entry 1", seed: "Stayed calm through an unexpected follow-up question" },
    { type: "text", key: "entry1Adjust", label: "What to adjust", seed: "Slow down at the start, I rush the first sentence" },
    { type: "text", key: "entry2WentWell", label: "What went well", section: "Entry 2", seed: "Clear point-reason-example structure throughout" },
    { type: "text", key: "entry2Adjust", label: "What to adjust", seed: "Still rushing the opening line" },
    { type: "text", key: "entry3WentWell", label: "What went well", section: "Entry 3", seed: "Opening line finally landed at a natural pace" },
    { type: "text", key: "entry3Adjust", label: "What to adjust", seed: "Watch pacing during the closing, it speeds up when I'm relieved to be almost done" },
    { type: "textarea", key: "patternAcrossEntries", label: "What's genuinely improved", section: "Pattern across entries", rows: 2, seed: "The opening pace issue is basically resolved, closing pace is the new thing to watch." },
  ],

  194: [
    { type: "text", key: "mentor", label: "Mentor", section: "Shared self-assessment", seed: "My internship supervisor" },
    { type: "textarea", key: "whatTheyAgreed", label: "What they agreed with", section: "Their input", rows: 2, seed: "Agreed that listening is a real growth area, especially in fast-moving meetings." },
    { type: "textarea", key: "whatTheyAdded", label: "What they added or challenged", rows: 2, seed: "Pointed out my writing is strong in structure but sometimes buries the actual point." },
    { type: "textarea", key: "updatedGrowthPlan", label: "What I'll focus on based on this conversation", section: "Updated growth plan", rows: 2, seed: "State my main point in the first sentence of emails and reports, not the third." },
  ],

  195: [
    { type: "text", key: "speechArticle", label: "Speech / article / presentation", section: "The piece", seed: "A TED talk on career reinvention" },
    { type: "textarea", key: "techniqueIdentified", label: "Specific technique identified (evidence, structure, emotional appeal, etc.)", section: "What made it work", rows: 2, seed: "Opened with a specific personal story before any data or general claims." },
    { type: "textarea", key: "whereApplied", label: "Where I applied this technique in my own communication", section: "My application", rows: 2, seed: "Opened my own presentation with a specific moment instead of a general topic overview." },
    { type: "text", key: "result", label: "Result", seed: "Noticeably stronger audience engagement from the first minute" },
  ],
  196: [
    { type: "table", key: "goals", label: "Goals", section: "Goals", columns: [
      { key: "goal", label: "Goal", kind: "text" },
      { key: "target", label: "Measurable target", kind: "text" },
      { key: "date", label: "Target date", kind: "text" },
    ], seedRows: [{ goal: "Reduce filler words", target: "Under 3 per minute", date: "In 4 weeks" }] },
    { type: "text", key: "reviewDate", label: "Review date", section: "Review", seed: "In 4 weeks" },
    { type: "textarea", key: "progressSoFar", label: "Progress so far", rows: 2, seed: "" },
  ],

  197: [
    { type: "text", key: "conceptVisualized", label: "Concept or process being visualized", section: "The idea", seed: "Our club's 4-step new-member onboarding process" },
    { type: "text", key: "visualFormat", label: "Visual format chosen (chart, flow diagram, etc.)", seed: "A simple horizontal flow diagram" },
    { type: "textarea", key: "readerUnderstoodFaster", label: "Did a reader understand it faster than the text version?", section: "Test", rows: 2, seed: "Yes, a new officer understood the process in under a minute versus several minutes reading the text version." },
  ],

  198: [
    { type: "text", key: "structureChosen", label: "Structure chosen (e.g. Cornell method)", section: "My system", seed: "Cornell method: notes, cues, summary" },
    { type: "text", key: "lectureMeetingUsedOn", label: "Lecture / meeting used on", section: "Applied test", seed: "Weekly team standup" },
    { type: "textarea", key: "couldFindInfoLater", label: "Could I quickly find and use info from these notes later?", rows: 2, seed: "Yes, found the action item I needed in seconds using the cues column." },
  ],

  199: [
    { type: "text", key: "projectInitiative", label: "Project / initiative", section: "Project", seed: "Spring showcase planning" },
    { type: "table", key: "stakeholderMap", label: "Stakeholder map", section: "Stakeholder map", columns: [
      { key: "stakeholder", label: "Stakeholder", kind: "text" },
      { key: "needsToKnow", label: "What they need to know", kind: "text" },
      { key: "channelFrequency", label: "Channel & frequency", kind: "text" },
    ], seedRows: [{ stakeholder: "Club advisor", needsToKnow: "Budget status and timeline", channelFrequency: "Email, biweekly" }] },
  ],

  200: [
    { type: "table", key: "storyboard", label: "Storyboard", section: "Storyboard", columns: [
      { key: "sceneNum", label: "Section / scene #", kind: "text" },
      { key: "description", label: "One-line description", kind: "text" },
    ], seedRows: [{ sceneNum: "1", description: "Open with the problem: declining attendance" }] },
    { type: "textarea", key: "structuralCheck", label: "Any logic gap caught before production?", section: "Structural check", rows: 2, seed: "Realized scene 3 referenced data that hadn't been introduced yet, moved it earlier." },
  ],

  201: [
    { type: "text", key: "metricChosen", label: "Metric (response rate, engagement, callback rate, etc.)", section: "Metric chosen", seed: "Networking email response rate" },
    { type: "table", key: "weeklyLog", label: "Weekly log", section: "Weekly log", columns: [
      { key: "weekOf", label: "Week of", kind: "text" },
      { key: "value", label: "Metric value", kind: "text" },
      { key: "notes", label: "Notes", kind: "text" },
    ], seedRows: [{ weekOf: "Sept 1", value: "40%", notes: "Used the new follow-up template this week" }] },
    { type: "textarea", key: "trend", label: "What the trend shows so far", section: "Trend", rows: 2, seed: "Response rate has been flat, worth revisiting the actual email content next." },
  ],

  202: [
    { type: "text", key: "question1", label: "Question", section: "Question 1", seed: "Tell me about a time you handled conflict on a team." },
    { type: "textarea", key: "question1Answer", label: "Answer", rows: 3, seed: "" },
    { type: "text", key: "question2", label: "Question", section: "Question 2", seed: "Why do you want to work here specifically?" },
    { type: "textarea", key: "question2Answer", label: "Answer", rows: 3, seed: "" },
    { type: "text", key: "question3", label: "Question", section: "Question 3", seed: "Describe a time you failed and what you learned." },
    { type: "textarea", key: "question3Answer", label: "Answer", rows: 3, seed: "" },
  ],

  203: [
    { type: "text", key: "week1Challenge", label: "This week's specific challenge", section: "Week 1", seed: "Ask a follow-up question in every conversation this week" },
    { type: "textarea", key: "week1MetLearned", label: "Met it? (Y/N) + what I learned", rows: 2, seed: "Y, noticed people opened up more once I asked a genuine follow-up." },
    { type: "text", key: "week2Challenge", label: "This week's specific challenge", section: "Week 2", seed: "State my recommendation first in every meeting" },
    { type: "textarea", key: "week2MetLearned", label: "Met it? (Y/N) + what I learned", rows: 2, seed: "Mostly, forgot once in a fast-moving meeting but caught myself the next time." },
    { type: "text", key: "week3Challenge", label: "This week's specific challenge", section: "Week 3", seed: "Summarize before responding in every disagreement" },
    { type: "textarea", key: "week3MetLearned", label: "Met it? (Y/N) + what I learned", rows: 2, seed: "Y, it's becoming close to automatic now." },
  ],

  204: [
    { type: "checklist", key: "skillsChecklist", label: "Skills checklist", section: "Skills checklist", items: ["Basic formulas (SUM, AVERAGE, IF)", "Simple formatting", "One pivot table built"], seedChecked: ["Basic formulas (SUM, AVERAGE, IF)", "Simple formatting"] },
    { type: "text", key: "realDataset", label: "Real dataset used", section: "Applied practice", seed: "My own monthly budget, tracked for the last 3 months" },
    { type: "textarea", key: "whatBuilt", label: "What I built with it", rows: 2, seed: "A simple tracker with a SUM formula for totals and a pivot table breaking spending down by category." },
  ],

  205: [
    { type: "text", key: "dataset", label: "Dataset", section: "Data", seed: "My weekly study hours over the last 8 weeks" },
    { type: "table", key: "summaryStats", label: "Summary stats", section: "Summary stats", columns: [
      { key: "statistic", label: "Statistic", kind: "text" },
      { key: "value", label: "Value", kind: "text" },
    ], seedRows: [
      { statistic: "Average hours/week", value: "9.5" },
      { statistic: "Lowest day", value: "Day before hardest exam" },
      { statistic: "Highest day", value: "Sunday" },
    ] },
    { type: "textarea", key: "insight", label: "One sentence, genuine insight (not just numbers)", section: "The insight", rows: 2, seed: "I consistently study least on the day right before my hardest exam, which is exactly backwards." },
  ],

  206: [
    { type: "table", key: "surveyQuestions", label: "Survey questions", section: "Draft questions", columns: [
      { key: "question", label: "Question", kind: "text" },
    ], seedRows: [
      { question: "How satisfied were you with the event overall?" },
      { question: "What was the single most useful part?" },
      { question: "What would you change for next time?" },
      { question: "How did you hear about this event?" },
      { question: "Would you attend a similar event again?" },
    ] },
    { type: "text", key: "pilotedOn", label: "Piloted on", section: "Pilot test", seed: "One friend not involved in planning the event" },
    { type: "textarea", key: "confusingWording", label: "Confusing wording caught and fixed", rows: 2, seed: "\"Don't you agree our event was great?\" was leading, changed to \"How would you rate the event overall?\"" },
  ],

  207: [
    { type: "text", key: "dataset", label: "Dataset", section: "Statistic", seed: "Class survey satisfaction scores, 1 to 10" },
    { type: "text", key: "statisticCalculated", label: "Statistic calculated", seed: "Average score: 7.2" },
    { type: "textarea", key: "whatItMeans", label: "What it means", section: "Interpretation", rows: 2, seed: "On the surface, a 7.2 average looks like solid, consistent satisfaction." },
    { type: "textarea", key: "whatItMightHide", label: "What it might be hiding", rows: 2, seed: "Checking the distribution showed a bimodal split: half rated it 9 to 10, half rated it 3 to 4. The average hid a real divide." },
  ],

  208: [
    { type: "text", key: "goalProject", label: "Goal / project", section: "Metric", seed: "Improving my 5K running time this semester" },
    { type: "text", key: "metricChosen", label: "Metric chosen", seed: "5K time in minutes, logged weekly" },
    { type: "table", key: "log", label: "Log", section: "Log", columns: [
      { key: "date", label: "Date", kind: "text" },
      { key: "value", label: "Value", kind: "text" },
    ], seedRows: [
      { date: "Week 1", value: "28:40" },
      { date: "Week 2", value: "27:55" },
      { date: "Week 3", value: "27:10" },
      { date: "Week 4", value: "26:50" },
      { date: "Week 5", value: "" },
    ] },
  ],

  209: [
    { type: "text", key: "datasetEntered", label: "Dataset entered", section: "Entry task", seed: "42 survey responses transcribed from paper forms into a spreadsheet" },
    { type: "text", key: "errorRate", label: "Error rate found on spot-check", section: "Accuracy check", seed: "3% of entries had a typo or misplaced value" },
    { type: "textarea", key: "errorCause", label: "What caused the errors, if any", rows: 2, seed: "Almost all of it was rushing through the last ten responses instead of pacing myself." },
  ],

  210: [
    { type: "text", key: "resultProject", label: "Result / project", section: "My result", seed: "My club event survey's 40% response rate" },
    { type: "textarea", key: "benchmarkFound", label: "External benchmark found", section: "Benchmark", rows: 2, seed: "Industry norms for similar event surveys sit around 50 to 60%." },
    { type: "textarea", key: "howICompare", label: "How I compare", rows: 2, seed: "My 40% is actually below typical range, worth improving my follow-up reminders next time." },
  ],

  211: [
    { type: "textarea", key: "theProblem", label: "The problem", section: "Problem", rows: 2, seed: "Our project's timeline slipped twice, and I assumed it was because one teammate was slow." },
    { type: "textarea", key: "evidenceGathered", label: "Evidence gathered", section: "Evidence gathered", rows: 3, seed: "Actual timestamps showed both slips happened right after the same handoff step, regardless of who owned it next." },
    { type: "textarea", key: "conclusion", label: "Conclusion, backed by evidence", section: "Conclusion", rows: 2, seed: "The real bottleneck was an unclear handoff, not any one teammate's pace." },
  ],

  212: [
    { type: "table", key: "inconsistencies", label: "Inconsistencies identified", section: "Inconsistencies found", columns: [
      { key: "issue", label: "Issue", kind: "text" },
    ], seedRows: [
      { issue: "Dates entered in three different formats" },
      { issue: "Some names had trailing whitespace" },
      { issue: "Blank cells mixed with \"N/A\" text for the same missing value" },
    ] },
    { type: "table", key: "fixesApplied", label: "Fixes applied", section: "Fixes applied", columns: [
      { key: "issue", label: "Issue", kind: "text" },
      { key: "fix", label: "Fix applied", kind: "text" },
    ], seedRows: [
      { issue: "Mixed date formats", fix: "Standardized all dates to YYYY-MM-DD" },
      { issue: "Trailing whitespace", fix: "Trimmed all name fields" },
      { issue: "Inconsistent blanks", fix: "Replaced all missing values with one consistent marker" },
    ] },
  ],

  213: [
    { type: "text", key: "project", label: "Project", section: "Structure agreed", seed: "Group project tracking spreadsheet for our marketing case study" },
    { type: "table", key: "columnOwners", label: "Column / owner", columns: [
      { key: "column", label: "Column", kind: "text" },
      { key: "owner", label: "Owner", kind: "text" },
    ], seedRows: [
      { column: "Research notes", owner: "Priya" },
      { column: "Budget tracking", owner: "Jordan" },
      { column: "Timeline", owner: "Me" },
      { column: "Final draft", owner: "Whole team" },
    ] },
    { type: "textarea", key: "preventedConfusion", label: "Did the shared structure prevent confusion?", section: "Result", rows: 2, seed: "Yes, once everyone had one column to own, we stopped overwriting each other's work." },
  ],

  214: [
    { type: "textarea", key: "responsePatterns", label: "Response patterns", section: "Response patterns", rows: 3, seed: "Most respondents rated the event 4 or 5 out of 5, but almost everyone flagged the same complaint about parking." },
    { type: "table", key: "topFindings", label: "Most significant findings", section: "Top findings", columns: [
      { key: "finding", label: "Finding", kind: "text" },
    ], seedRows: [
      { finding: "Parking was the single most repeated complaint" },
      { finding: "Attendees who arrived early rated the event highest" },
      { finding: "Word-of-mouth was the top way people heard about it" },
    ] },
  ],

  215: [
    { type: "text", key: "dataset", label: "Dataset (time-series)", section: "Trend", seed: "My weekly job application response rate over 6 weeks" },
    { type: "text", key: "trendDirection", label: "Direction / rate of trend", seed: "Declining, from 25% to about 10% response rate" },
    { type: "textarea", key: "actionSuggested", label: "Specific action the trend suggests", section: "Action", rows: 2, seed: "The decline started right after I changed my resume format, so reverting that change is the concrete next step." },
  ],

  216: [
    { type: "text", key: "questionAnswered", label: "The question the data answers", section: "Structure", seed: "Did our new sign-up flow reduce drop-off?" },
    { type: "text", key: "keyFinding", label: "Key finding", seed: "Drop-off fell from 35% to 18% after the redesign." },
    { type: "text", key: "supportingEvidence", label: "Supporting evidence", seed: "Compared two months of funnel data before and after the change." },
    { type: "textarea", key: "fullDraft", label: "Full draft", section: "Full draft", rows: 5, seed: "Our sign-up flow redesign cut drop-off from 35% to 18% over the following month. The biggest gain came from removing an optional field on the first screen. I recommend keeping the shorter flow and testing one more simplification next." },
  ],

  217: [
    { type: "text", key: "activityMetric", label: "Activity / metric", section: "Setup", seed: "Weekly practice interview scores, self-rated 1 to 10" },
    { type: "table", key: "extendedLog", label: "Extended log", section: "Extended log", columns: [
      { key: "week", label: "Week", kind: "text" },
      { key: "value", label: "Value", kind: "text" },
      { key: "notes", label: "Notes", kind: "text" },
    ], seedRows: [
      { week: "Week 1", value: "5", notes: "Very nervous, rushed answers" },
      { week: "Week 3", value: "6.5", notes: "Slower pace, better structure" },
      { week: "Week 5", value: "7.5", notes: "Started using STAR consistently" },
      { week: "Week 7", value: "8", notes: "Felt genuinely prepared" },
    ] },
  ],

  218: [
    { type: "text", key: "dataFinding", label: "Data finding", section: "Finding", seed: "Our early data shows a 15% lift in one week and the team wants to change strategy now." },
    { type: "textarea", key: "whatDataNotShow", label: "What does the data not show?", section: "Scrutiny", rows: 2, seed: "It doesn't show whether this is a real trend or normal week-to-week variance." },
    { type: "textarea", key: "assumption", label: "What assumption does the analysis rest on?", rows: 2, seed: "That one good week is representative of a sustained pattern." },
    { type: "textarea", key: "sampleSkewed", label: "Could the sample or method be skewed?", rows: 2, seed: "Yes, the sample size is small and covers only one unusually active week." },
  ],
  219: [
    { type: "text", key: "introduction", label: "Introduction", section: "Outline", seed: "This report examines whether our club's new onboarding process improved retention." },
    { type: "textarea", key: "bodyKeyPoints", label: "Body, key points", rows: 3, seed: "Retention rose from 60% to 78% after the first month. New members cited the mentor pairing as the most valuable part." },
    { type: "text", key: "conclusion", label: "Conclusion", seed: "The mentor pairing should become a permanent part of onboarding." },
    { type: "textarea", key: "draft", label: "Draft", section: "Draft", rows: 6, seed: "Outline first, then draft: this report opens with the retention question, presents the before-and-after numbers, and closes with the mentor-pairing recommendation, in that order." },
  ],

  220: [
    { type: "table", key: "sources", label: "Sources", section: "Sources", columns: [
      { key: "source", label: "Source", kind: "text" },
      { key: "keyPoint", label: "Key point", kind: "text" },
    ], seedRows: [
      { source: "Industry report on Gen Z marketing", keyPoint: "Trust in sustainability claims requires specific evidence, not general statements" },
      { source: "Academic study on ad skepticism", keyPoint: "Vague claims reduce trust more than no claim at all" },
      { source: "Company case study", keyPoint: "Third-party certification logos increased click-through by 12%" },
    ] },
    { type: "textarea", key: "synthesis", label: "Synthesis", section: "Synthesis", rows: 4, seed: "Across all three sources, specificity and third-party evidence consistently beat vague or unverified claims in earning trust from younger consumers." },
  ],

  221: [
    { type: "text", key: "processDocumented", label: "Process being documented", section: "Process", seed: "Setting up our club's weekly meeting room and AV equipment" },
    { type: "table", key: "steps", label: "Steps, in order", columns: [
      { key: "step", label: "Step", kind: "text" },
    ], seedRows: [
      { step: "Unlock the AV closet with the front-desk key" },
      { step: "Connect the laptop to the room's HDMI cable" },
      { step: "Power on the projector and select the correct input" },
      { step: "Test audio with the room's speaker system" },
      { step: "Set up chairs in a semicircle facing the screen" },
      { step: "Return the key to the front desk after the meeting" },
    ] },
    { type: "textarea", key: "testerResult", label: "Tester, and did it work unassisted?", section: "Test", rows: 2, seed: "A new officer followed the steps with no help and had the room ready in under ten minutes." },
  ],

  222: [
    { type: "text", key: "documentSummarized", label: "Document being summarized", section: "Source", seed: "My 20-page semester project report" },
    { type: "textarea", key: "draft", label: "Draft", section: "Draft", rows: 5, seed: "One-page summary: the project tested whether a redesigned sign-up flow reduced drop-off. It did, from 35% to 18%, driven mainly by removing one optional field. We recommend keeping the shorter flow and testing further simplification next quarter." },
  ],

  223: [
    { type: "text", key: "document", label: "Document", section: "Before", seed: "My internship application cover letter" },
    { type: "textarea", key: "formattingIssuesNoticed", label: "Formatting issues noticed", rows: 2, seed: "Three different fonts, inconsistent spacing between paragraphs, and no clear header hierarchy." },
    { type: "textarea", key: "fixesApplied", label: "Fixes applied", section: "After", rows: 2, seed: "One font throughout, consistent paragraph spacing, and a clear bold header for my name and contact info." },
  ],

  224: [
    { type: "table", key: "sourceCheck", label: "Source check", section: "Source check", columns: [
      { key: "source", label: "Source", kind: "text" },
      { key: "authority", label: "Authority?", kind: "text" },
      { key: "evidence", label: "Evidence?", kind: "text" },
      { key: "corroborated", label: "Corroborated elsewhere?", kind: "text" },
    ], seedRows: [
      { source: "Personal blog post citing a statistic", authority: "No clear credentials", evidence: "No source cited", corroborated: "No" },
      { source: "Industry association report", authority: "Yes, established organization", evidence: "Cites underlying survey data", corroborated: "Yes, matched a second source" },
    ] },
    { type: "textarea", key: "trustVerdict", label: "Trust this source? Why or why not?", section: "Verdict", rows: 2, seed: "No, the blog post's number didn't match the original study it claimed to cite, which turned out to say something different." },
  ],

  225: [
    { type: "text", key: "documentType", label: "Document type", section: "Recurring structure", seed: "Weekly team status report" },
    { type: "textarea", key: "recurringSections", label: "Recurring sections identified", rows: 2, seed: "Wins this week, blockers, and next week's priorities, the same three sections every time." },
    { type: "text", key: "templateSavedWhere", label: "Where the template is saved", section: "Template saved", seed: "Shared drive, \"Team Templates\" folder" },
  ],

  226: [
    { type: "text", key: "question", label: "Question", section: "Structure", seed: "What makes a campus sustainability campaign actually change student behavior?" },
    { type: "textarea", key: "keyFinding", label: "Key finding (leads the presentation)", rows: 2, seed: "Campaigns with a specific, trackable action (like a pledge card) outperformed general awareness campaigns by a wide margin." },
    { type: "text", key: "implication", label: "Implication", seed: "Future campus campaigns should always include one specific, trackable action." },
    { type: "textarea", key: "audienceRecall", label: "Could the audience state the finding afterward?", section: "Result", rows: 2, seed: "Yes, three separate people repeated the finding back accurately when asked afterward." },
  ],

  227: [
    { type: "textarea", key: "draft", label: "Process / project / concept", section: "Draft", rows: 5, seed: "Our sign-up automation script pulls new form responses every hour, checks for duplicates, and adds valid entries to our roster spreadsheet automatically, no manual copying required." },
    { type: "textarea", key: "nonExpertUnderstanding", label: "Non-expert reader's understanding", section: "Test", rows: 2, seed: "My non-technical club co-lead understood exactly what it does and why it saves us time, without needing any of the technical detail." },
  ],

  228: [
    { type: "text", key: "skillProcess", label: "Skill / process", section: "Guide", seed: "Setting up our shared project folder structure from scratch" },
    { type: "table", key: "stepsZeroKnowledge", label: "Steps, assuming zero prior knowledge", columns: [
      { key: "step", label: "Step", kind: "text" },
    ], seedRows: [
      { step: "Open the shared drive and create a new top-level folder named for the project" },
      { step: "Inside it, create three subfolders: Research, Drafts, Final" },
      { step: "Name every file using the format date_projectname_version" },
      { step: "Share the folder with everyone on the team" },
      { step: "Pin the folder link in the team chat" },
    ] },
    { type: "textarea", key: "testReaderStuck", label: "Where the test reader got stuck", section: "Test", rows: 2, seed: "They weren't sure what \"version\" meant in the naming convention, so I added an example filename to clarify." },
  ],

  229: [
    { type: "text", key: "problem", label: "Problem", section: "Proposal", seed: "Our club's supply budget runs out every semester before the last event." },
    { type: "text", key: "solution", label: "Solution", seed: "Shift 15% of the marketing budget to supplies, based on last year's actual spending split." },
    { type: "text", key: "ask", label: "Ask", seed: "Approval to reallocate $200 from marketing to supplies for this semester." },
    { type: "textarea", key: "feedbackReceived", label: "Feedback received", section: "Feedback received", rows: 3, seed: "The advisor asked for a specific breakdown of what the $200 would cover before approving, which I added." },
  ],

  230: [
    { type: "text", key: "currentProcessOwner", label: "Current process owner", section: "Interview", seed: "Our outgoing treasurer, who handles all reimbursements" },
    { type: "table", key: "documentedSteps", label: "Steps", section: "Documented steps", columns: [
      { key: "step", label: "Step", kind: "text" },
    ], seedRows: [
      { step: "Collect the original receipt from the requester" },
      { step: "Confirm the expense matches an approved budget line" },
      { step: "Fill out the reimbursement form with amount and category" },
      { step: "Submit the form and receipt to the advisor for signature" },
      { step: "Log the reimbursement in the shared budget tracker" },
    ] },
    { type: "textarea", key: "teamReviewFeedback", label: "Feedback from team review", section: "Team review", rows: 2, seed: "The new treasurer confirmed she could follow every step without needing to ask the outgoing one for help." },
  ],

  231: [
    { type: "text", key: "broadTopic", label: "Broad topic", section: "Broad topic", seed: "What makes marketing effective" },
    { type: "textarea", key: "narrowing", label: "Narrowing", section: "Narrowing", rows: 3, seed: "Narrowed from \"marketing effectiveness\" to \"trust in sustainability marketing\" to \"specific claim types\" to a defined audience: Gen Z consumers." },
    { type: "text", key: "finalQuestion", label: "Specific, answerable research question", section: "Final question", seed: "What specific claim types increase trust in sustainability marketing among Gen Z consumers?" },
  ],
  232: [
    { type: "table", key: "plan", label: "Plan", section: "Plan", columns: [
      { key: "task", label: "Task", kind: "text" },
      { key: "timeline", label: "Timeline", kind: "text" },
      { key: "resources", label: "Resources needed", kind: "text" },
    ], seedRows: [
      { task: "Draft campaign concept", timeline: "Week 1", resources: "Team brainstorm session" },
      { task: "Design assets", timeline: "Week 2 to 3", resources: "Design software, one teammate" },
      { task: "Launch and monitor", timeline: "Week 4", resources: "Social media accounts" },
    ] },
    { type: "textarea", key: "keyDependencies", label: "Key dependencies between tasks", section: "Dependencies", rows: 2, seed: "Design can't start until the concept is approved, and launch can't happen until assets are finished." },
  ],

  233: [
    { type: "table", key: "agenda", label: "Agenda", section: "Agenda", columns: [
      { key: "topic", label: "Topic", kind: "text" },
      { key: "time", label: "Time", kind: "text" },
      { key: "objective", label: "Objective", kind: "text" },
    ], seedRows: [
      { topic: "Budget update", time: "5 min", objective: "Confirm remaining funds" },
      { topic: "Event logistics", time: "10 min", objective: "Assign remaining tasks" },
      { topic: "Open questions", time: "5 min", objective: "Surface blockers early" },
    ] },
    { type: "textarea", key: "stayedOnTrack", label: "Stayed on time and on topic?", section: "Result", rows: 2, seed: "Yes, sharing the agenda beforehand cut our usual meeting length from 45 to 25 minutes." },
  ],

  234: [
    { type: "table", key: "budget", label: "Budget", section: "Budget", columns: [
      { key: "category", label: "Category", kind: "text" },
      { key: "planned", label: "Planned", kind: "text" },
      { key: "actual", label: "Actual", kind: "text" },
    ], seedRows: [
      { category: "Venue", planned: "$150", actual: "$150" },
      { category: "Food", planned: "$200", actual: "$240" },
      { category: "Supplies", planned: "$50", actual: "$45" },
    ] },
    { type: "textarea", key: "biggestVariance", label: "Biggest variance, and why", section: "Variance review", rows: 2, seed: "Food ran $40 over because we underestimated headcount, worth padding that line item next time." },
  ],

  235: [
    { type: "textarea", key: "urgentImportant", label: "Urgent & important", section: "Urgent & important", rows: 2, seed: "Submit the grant application due tomorrow." },
    { type: "textarea", key: "importantNotUrgent", label: "Important, not urgent", section: "Important, not urgent", rows: 2, seed: "Build the skill growth plan for next semester." },
    { type: "textarea", key: "urgentNotImportant", label: "Urgent, not important", section: "Urgent, not important", rows: 2, seed: "Respond to a low-stakes group chat message everyone is waiting on." },
    { type: "textarea", key: "neither", label: "Neither", section: "Neither", rows: 2, seed: "Reorganizing bookmarks I never actually use." },
  ],

  236: [
    { type: "table", key: "risks", label: "Risks", section: "Risks", columns: [
      { key: "risk", label: "Risk", kind: "text" },
      { key: "likelihood", label: "Likelihood", kind: "text" },
      { key: "impact", label: "Impact", kind: "text" },
    ], seedRows: [
      { risk: "Key teammate unavailable during finals week", likelihood: "High", impact: "High" },
      { risk: "Venue cancellation", likelihood: "Low", impact: "High" },
      { risk: "Low turnout", likelihood: "Medium", impact: "Medium" },
    ] },
    { type: "textarea", key: "mitigationPlan", label: "Highest-priority risk, and mitigation plan", section: "Mitigation", rows: 2, seed: "Teammate unavailability during finals: built in a two-week buffer before the deadline so their part could shift earlier." },
  ],

  237: [
    { type: "table", key: "log", label: "Log", section: "Log", columns: [
      { key: "date", label: "Date", kind: "text" },
      { key: "planned", label: "Planned progress", kind: "text" },
      { key: "actual", label: "Actual progress", kind: "text" },
      { key: "adjustment", label: "Adjustment needed", kind: "text" },
    ], seedRows: [
      { date: "Week 1", planned: "Outline finished", actual: "Outline finished", adjustment: "None" },
      { date: "Week 2", planned: "First draft done", actual: "50% done", adjustment: "Push deadline 3 days" },
      { date: "Week 3", planned: "Draft revised", actual: "Draft finished", adjustment: "Back on track" },
    ] },
  ],

  238: [
    { type: "text", key: "inefficiency", label: "Specific inefficiency noticed", section: "Inefficiency", seed: "We re-enter the same registrant data into both our sign-up form and our roster spreadsheet." },
    { type: "text", key: "proposedChange", label: "Proposed change", section: "Proposed change", seed: "Connect the form directly to the spreadsheet using a built-in integration." },
    { type: "textarea", key: "expectedBenefit", label: "Expected benefit", rows: 2, seed: "Saves roughly 30 minutes of manual entry every week and removes a common source of typos." },
  ],

  239: [
    { type: "text", key: "project", label: "Project", section: "Scope", seed: "Building a simple attendance-tracking spreadsheet for club meetings" },
    { type: "text", key: "skillDemonstrated", label: "Skill demonstrated", seed: "Spreadsheet formulas and basic data entry" },
    { type: "text", key: "timeframeKeptSmall", label: "Timeframe (kept small)", seed: "One weekend" },
    { type: "textarea", key: "completedOnTime", label: "Completed on time? (Y/N)", section: "Completion", rows: 2, seed: "Y, finished Saturday afternoon and used it at Monday's meeting." },
  ],

  240: [
    { type: "text", key: "problemType", label: "Problem type", section: "Problem type", seed: "Recurring spreadsheet formula errors" },
    { type: "table", key: "stepsThatWorked", label: "Steps that worked", section: "Checklist", columns: [
      { key: "step", label: "Step", kind: "text" },
    ], seedRows: [
      { step: "Isolate which cell is producing the error" },
      { step: "Check the formula syntax against a reference" },
      { step: "Test the formula on a small sample first" },
      { step: "Check for mismatched data types (text vs. number)" },
      { step: "Search the exact error message if still stuck" },
    ] },
  ],

  241: [
    { type: "text", key: "skill", label: "Skill", section: "Application", seed: "Excel formulas I'd only practiced in clean, isolated exercises" },
    { type: "text", key: "realTaskAppliedTo", label: "Real task it was applied to", seed: "A messy real internship dataset with missing values and inconsistent formatting" },
    { type: "textarea", key: "realApplicationRevealed", label: "What the real application revealed that practice didn't", section: "Reflection", rows: 2, seed: "My clean practice data never had missing values, so I hadn't learned how to handle them until this real dataset forced it." },
  ],

  242: [
    { type: "text", key: "workflow", label: "Workflow", section: "Current workflow", seed: "Reformatting the weekly status report from scratch every Friday" },
    { type: "text", key: "slowestStep", label: "Slowest / most repetitive step", seed: "Rebuilding the same section headers and formatting every single week" },
    { type: "text", key: "specificFix", label: "Specific fix implemented", section: "Improvement", seed: "Built a reusable template with the headers already in place" },
    { type: "text", key: "timeSaved", label: "Time saved", seed: "About 10 minutes every week" },
  ],

  243: [
    { type: "text", key: "recurringTask", label: "Recurring task", section: "Task", seed: "Closing out our club's weekly meeting" },
    { type: "table", key: "steps", label: "Steps", section: "Checklist", columns: [
      { key: "step", label: "Step", kind: "text" },
    ], seedRows: [
      { step: "Recap action items and owners out loud" },
      { step: "Confirm next meeting time and location" },
      { step: "Post meeting notes in the shared channel" },
      { step: "Update the project tracker with any changes" },
      { step: "Reset the room and return any borrowed equipment" },
    ] },
  ],

  244: [
    { type: "table", key: "executionLog", label: "Execution log", section: "Execution log", columns: [
      { key: "phase", label: "Phase", kind: "text" },
      { key: "plannedDate", label: "Planned date", kind: "text" },
      { key: "actualDate", label: "Actual date", kind: "text" },
    ], seedRows: [
      { phase: "Research", plannedDate: "Sept 1", actualDate: "Sept 1" },
      { phase: "Draft", plannedDate: "Sept 8", actualDate: "Sept 10" },
      { phase: "Review", plannedDate: "Sept 15", actualDate: "Sept 15" },
      { phase: "Final submission", plannedDate: "Sept 20", actualDate: "Sept 19" },
    ] },
    { type: "textarea", key: "fullyCompleted", label: "Was the project fully completed?", section: "Completion", rows: 2, seed: "Yes, submitted a day early despite one phase running two days behind." },
  ],

  245: [
    { type: "table", key: "componentEstimates", label: "Component estimates", section: "Component estimates", columns: [
      { key: "component", label: "Component", kind: "text" },
      { key: "estimate", label: "Estimated cost/time", kind: "text" },
    ], seedRows: [
      { component: "Research", estimate: "3 hrs" },
      { component: "Design", estimate: "5 hrs" },
      { component: "Printing", estimate: "$40" },
    ] },
    { type: "text", key: "bufferAdded", label: "Buffer added", section: "Buffer & total", seed: "20% time buffer on design" },
    { type: "text", key: "totalEstimate", label: "Total estimate", seed: "~9 hrs and $40" },
    { type: "text", key: "actualCostTime", label: "Actual cost/time", section: "Actual (fill in after)", seed: "10.5 hrs and $40, design ran over as expected" },
  ],

  246: [
    { type: "text", key: "task", label: "Task", section: "Delegated task", seed: "Designing the event flyer" },
    { type: "text", key: "person", label: "Person", seed: "Jordan, our design lead" },
    { type: "text", key: "deadline", label: "Deadline", seed: "This Friday at 5pm" },
    { type: "textarea", key: "contextGiven", label: "Context given", rows: 2, seed: "Shared the event details, brand colors, and one example flyer we liked for reference." },
    { type: "textarea", key: "completedWithoutMicromanaging", label: "Completed on time without micromanaging?", section: "Result", rows: 2, seed: "Yes, one check-in midweek was enough, no need to follow up daily." },
  ],

  247: [
    { type: "text", key: "realTaskSimulated", label: "Real task being simulated", section: "Task", seed: "The weekly data reporting task I'll do during my upcoming internship" },
    { type: "textarea", key: "simulationNotes", label: "Simulation notes", section: "Simulation", rows: 4, seed: "Used a sample dataset to build the same weekly summary format I expect to be asked for, timing myself to see how long it realistically takes." },
    { type: "textarea", key: "moreReadyForReal", label: "Do I feel more ready for the real version?", section: "Readiness check", rows: 2, seed: "Yes, the format and timing no longer feel unfamiliar going into week one." },
  ],

  248: [
    { type: "table", key: "problems", label: "Problems", section: "Problems", columns: [
      { key: "problem", label: "Problem", kind: "text" },
      { key: "impact", label: "Impact", kind: "text" },
      { key: "urgency", label: "Urgency", kind: "text" },
    ], seedRows: [
      { problem: "Outdated roster spreadsheet", impact: "Low", urgency: "Low" },
      { problem: "Broken sign-up form link", impact: "High", urgency: "High" },
      { problem: "Unclear meeting time on the calendar", impact: "Medium", urgency: "Medium" },
    ] },
    { type: "textarea", key: "decision", label: "Which I'll solve first, and why", section: "Decision", rows: 2, seed: "The broken sign-up link, since it's actively blocking new members from joining right now." },
  ],

  249: [
    { type: "textarea", key: "outcomes", label: "Project", section: "Outcomes", rows: 4, seed: "The spring showcase project shipped on time, drew our highest attendance yet, and stayed within budget." },
    { type: "text", key: "lessonLearned", label: "Specific lesson learned", section: "Lessons & next steps", seed: "Booking the venue earlier gave us far more flexibility than past events." },
    { type: "text", key: "carryIntoNext", label: "What I'll carry into the next project", seed: "Book venues at least six weeks out from now on." },
  ],
  250: [
    { type: "table", key: "slideOutline", label: "Slide outline", section: "Slide outline", columns: [
      { key: "slideNum", label: "Slide #", kind: "text" },
      { key: "coreIdea", label: "Core idea", kind: "text" },
    ], seedRows: [
      { slideNum: "1", coreIdea: "The problem: declining event attendance" },
      { slideNum: "2", coreIdea: "What we tried: new outreach channels" },
      { slideNum: "3", coreIdea: "Result: attendance up 20%" },
      { slideNum: "4", coreIdea: "Recommendation for next semester" },
    ] },
    { type: "textarea", key: "slideSimplified", label: "Slide I simplified, and how", section: "Simplify check", rows: 2, seed: "Slide 2 had five bullet points, cut down to the one channel that actually drove results." },
  ],

  251: [
    { type: "text", key: "conceptVisualized", label: "Concept being visualized", section: "The idea", seed: "Our club's four-step new-member onboarding process" },
    { type: "text", key: "visualFormatChosen", label: "Visual format chosen", seed: "A simple horizontal flowchart" },
    { type: "textarea", key: "fasterThanText", label: "Was it faster to understand than the text version?", section: "Test", rows: 2, seed: "Yes, a new officer understood the process in seconds instead of reading several paragraphs." },
  ],

  252: [
    { type: "text", key: "dataset", label: "Dataset", section: "Data", seed: "Monthly membership numbers over the past year" },
    { type: "textarea", key: "chartTypeChosen", label: "Chart type chosen, and why", rows: 2, seed: "A line chart, since membership over time is a trend, not a comparison between separate categories." },
    { type: "textarea", key: "patternRevealed", label: "Pattern the chart revealed", section: "Result", rows: 2, seed: "A clear seasonal dip every summer that the raw monthly table hadn't made obvious." },
  ],

  253: [
    { type: "text", key: "processDiagrammed", label: "Process being diagrammed", section: "Process", seed: "Our event approval process, from proposal to final sign-off" },
    { type: "textarea", key: "stepsDependencies", label: "Steps & dependencies", section: "Steps & dependencies", rows: 4, seed: "Proposal submitted, then advisor review, then budget check (can happen in parallel with venue booking), then final sign-off." },
  ],

  254: [
    { type: "text", key: "presentationRecorded", label: "Presentation recorded", section: "Recording", seed: "My practice run of the research presentation" },
    { type: "text", key: "length", label: "Length", seed: "9 minutes 40 seconds" },
    { type: "textarea", key: "pacingIssueCaught", label: "Pacing or structural issue caught", section: "Review", rows: 2, seed: "My middle section ran almost twice as long as I'd planned, so I trimmed two examples down to one." },
  ],

  255: [
    { type: "table", key: "pointsToInclude", label: "Points to include", section: "Key points", columns: [
      { key: "point", label: "Point", kind: "text" },
    ], seedRows: [
      { point: "The core statistic: 78% retention after mentor pairing" },
      { point: "The one-sentence takeaway" },
      { point: "A simple before-and-after visual" },
      { point: "Where to learn more" },
    ] },
    { type: "textarea", key: "feedbackReceived", label: "Feedback or engagement received", section: "Result", rows: 2, seed: "Three club members asked to share it with their own committees after seeing it posted." },
  ],

  256: [
    { type: "text", key: "centralTopic", label: "Central topic", section: "Central idea", seed: "Planning our spring showcase event" },
    { type: "textarea", key: "branches", label: "Branches", section: "Branches", rows: 4, seed: "Venue, budget, marketing, and volunteers, each with its own sub-branches for specific tasks." },
  ],

  257: [
    { type: "text", key: "concept", label: "Concept", section: "Core idea", seed: "How our sign-up automation script works" },
    { type: "text", key: "analogyUsed", label: "Analogy used", seed: "Comparing it to a mail sorter that automatically routes each letter to the right bin" },
    { type: "text", key: "nonExpertTester", label: "Non-expert tester", section: "Test", seed: "My roommate, who has no coding background" },
    { type: "textarea", key: "couldExplainBack", label: "Could they explain it back?", rows: 2, seed: "Yes, using the mail-sorter analogy in their own words." },
  ],

  258: [
    { type: "text", key: "project", label: "Project", section: "The work", seed: "The sign-up automation script I built for my club" },
    { type: "text", key: "problem", label: "Problem", section: "Case study", seed: "Manual data entry from our sign-up form was eating an hour every week." },
    { type: "text", key: "myRole", label: "My role", seed: "Designed and built the automation script end to end" },
    { type: "text", key: "outcome", label: "Outcome", seed: "Cut the weekly task from an hour to about five minutes of review" },
  ],

  259: [
    { type: "textarea", key: "pacingRight", label: "Was the pacing right?", section: "Questions asked", rows: 2, seed: "Mostly, but the middle section felt rushed to two of the three people I asked." },
    { type: "textarea", key: "openingHookWorked", label: "Did the opening hook work?", rows: 2, seed: "Yes, opening with the retention statistic got immediate attention." },
    { type: "text", key: "specificChangeMade", label: "Specific change made", section: "Revision made", seed: "Slowed down and added one extra example in the middle section." },
  ],

  260: [
    { type: "table", key: "timeline", label: "Timeline", section: "Timeline", columns: [
      { key: "phase", label: "Phase", kind: "text" },
      { key: "start", label: "Start", kind: "text" },
      { key: "end", label: "End", kind: "text" },
    ], seedRows: [
      { phase: "Research", start: "Sept 1", end: "Sept 7" },
      { phase: "Design", start: "Sept 8", end: "Sept 20" },
      { phase: "Build", start: "Sept 15", end: "Sept 25" },
      { phase: "Launch", start: "Sept 26", end: "Sept 30" },
    ] },
  ],

  261: [
    { type: "text", key: "newPieceAdded", label: "New piece added", section: "Added", seed: "The sign-up automation project, with a short case study" },
    { type: "text", key: "outdatedPieceRemoved", label: "Outdated piece removed", section: "Removed", seed: "A freshman-year class assignment that no longer reflects my current skill level" },
  ],

  262: [
    { type: "text", key: "presentationShared", label: "Presentation shared", section: "Sharing", seed: "My research presentation recording" },
    { type: "text", key: "platform", label: "Platform", seed: "LinkedIn" },
    { type: "textarea", key: "engagementGenerated", label: "Engagement or connections generated", section: "Result", rows: 2, seed: "A professional in my target field commented and we ended up scheduling a short call." },
  ],

  263: [
    { type: "text", key: "event", label: "Event", section: "Event", seed: "Campus tech showcase" },
    { type: "text", key: "workShowcased", label: "Work showcased", seed: "The sign-up automation project" },
    { type: "textarea", key: "feedbackOrConnection", label: "Feedback or connection made", section: "Result", rows: 2, seed: "A recruiter stopped by, asked detailed questions, and remembered the project weeks later during recruiting season." },
  ],
  264: [
    { type: "text", key: "tool", label: "Tool", section: "Tool", seed: "Trello" },
    { type: "text", key: "realTaskUsedFor", label: "Real task used for", seed: "Tracking my personal project tasks over a weekend" },
    { type: "textarea", key: "canNavigateConfidently", label: "Can I navigate it confidently now?", section: "Comfort check", rows: 2, seed: "Yes, boards, cards, and due dates all feel natural now instead of unfamiliar." },
  ],

  265: [
    { type: "checklist", key: "setup", label: "Setup", section: "Setup", items: ["All current deadlines entered", "Color-coding or categories used", "Reminders set"], seedChecked: ["All current deadlines entered", "Reminders set"] },
    { type: "textarea", key: "stoppedMissing", label: "Did I stop missing anything?", section: "Reflection", rows: 2, seed: "Yes, no missed deadlines since moving everything into one calendar." },
  ],

  266: [
    { type: "text", key: "exerciseCompleted", label: "Exercise completed", section: "Exercise", seed: "An IF formula that flags any budget line over $100 for review" },
    { type: "text", key: "conditionalWritten", label: "One conditional statement or formula I wrote", seed: "=IF(B2>100, \"Review\", \"OK\")" },
  ],

  267: [
    { type: "text", key: "tool", label: "Tool", section: "Tool", seed: "Google Analytics" },
    { type: "textarea", key: "whyRelevant", label: "Why it's relevant to my target field", rows: 2, seed: "Brand marketing roles list it as a required or preferred skill in nearly every posting I've seen." },
    { type: "text", key: "tutorialCompleted", label: "Tutorial or task completed", section: "Progress", seed: "Google's free Analytics Academy introductory course" },
  ],

  268: [
    { type: "text", key: "structureCategories", label: "Structure / categories used", section: "Organization", seed: "Folders by type: Templates, Reference Docs, Design Assets" },
    { type: "text", key: "whereStored", label: "Where it's stored", seed: "Shared drive, top-level \"Resources\" folder" },
  ],

  269: [
    { type: "text", key: "namingConvention", label: "Naming convention chosen", section: "System", seed: "date_projectname_version, e.g. 2026-03-01_showcase_v2" },
    { type: "text", key: "appliedToHowMany", label: "Applied to how many existing files?", seed: "Renamed about 30 existing files to match" },
  ],

  270: [
    { type: "text", key: "repetitiveTask", label: "Repetitive task", section: "Task", seed: "Copying new sign-up form responses into our roster spreadsheet" },
    { type: "text", key: "approachUsed", label: "Approach used", section: "Automation", seed: "A simple Zapier automation connecting the form to the spreadsheet" },
    { type: "text", key: "timeSaved", label: "Time saved", seed: "About 30 minutes every week" },
  ],

  271: [
    { type: "text", key: "tool1", label: "Tool 1", section: "Integration", seed: "Google Calendar" },
    { type: "text", key: "tool2", label: "Tool 2", seed: "Todoist" },
    { type: "text", key: "integrationMethod", label: "Integration method used", seed: "Built-in calendar sync so tasks with due dates show up automatically" },
  ],

  272: [
    { type: "table", key: "trackingLog", label: "Tracking log", section: "Tracking log", columns: [
      { key: "task", label: "Task", kind: "text" },
      { key: "estimatedTime", label: "Estimated time", kind: "text" },
      { key: "actualTime", label: "Actual time", kind: "text" },
    ], seedRows: [
      { task: "Email and admin", estimatedTime: "30 min", actualTime: "1 hr 20 min" },
      { task: "Deep work block", estimatedTime: "2 hrs", actualTime: "1 hr 45 min" },
      { task: "Meetings", estimatedTime: "1 hr", actualTime: "1 hr" },
    ] },
  ],

  273: [
    { type: "text", key: "errorEncountered", label: "Error encountered", section: "The error", seed: "A spreadsheet formula kept returning #REF!" },
    { type: "textarea", key: "isolationProcess", label: "Isolation process", section: "Isolation process", rows: 4, seed: "Tested the formula on a fresh sheet with sample data, then reintroduced one part of the original range at a time until the error reappeared." },
    { type: "text", key: "rootCause", label: "What actually caused it", section: "Root cause", seed: "A referenced column had been deleted earlier, breaking the range." },
  ],

  274: [
    { type: "text", key: "certificationChosen", label: "Certification chosen", section: "Certification", seed: "Google Analytics for Beginners certification" },
    { type: "textarea", key: "whyRelevant", label: "Why it's relevant", rows: 2, seed: "Directly closes a gap I identified in my own Stage One Weakness Awareness worksheet." },
    { type: "table", key: "progress", label: "Progress", section: "Progress", columns: [
      { key: "module", label: "Module", kind: "text" },
      { key: "completed", label: "Completed? (Y/N)", kind: "text" },
    ], seedRows: [
      { module: "Introduction to Analytics", completed: "Y" },
      { module: "Advanced concepts", completed: "Y" },
      { module: "Final assessment", completed: "In progress" },
    ] },
  ],

  275: [
    { type: "text", key: "purpose", label: "Purpose", section: "Form", seed: "Collecting RSVPs and dietary restrictions for our year-end banquet" },
    { type: "textarea", key: "questionTypesUsed", label: "Question types used", rows: 2, seed: "Multiple choice for RSVP status, checkboxes for dietary restrictions, one open text field for special requests." },
    { type: "textarea", key: "responsesEasyToAnalyze", label: "Were responses easy to analyze?", section: "Result", rows: 2, seed: "Yes, the multiple-choice and checkbox answers summarized automatically, only the open text field needed manual review." },
  ],

  276: [
    { type: "table", key: "curatedList", label: "Curated list", section: "Curated list", columns: [
      { key: "resource", label: "Resource", kind: "text" },
      { key: "whyUseful", label: "Why it's useful", kind: "text" },
    ], seedRows: [
      { resource: "Google Sheets function guide", whyUseful: "Clear explanations with real examples for each formula" },
      { resource: "Exceljet formula reference", whyUseful: "Fast lookup when I forget exact syntax" },
      { resource: "A short YouTube pivot table tutorial", whyUseful: "Made pivot tables click after reading alone didn't" },
    ] },
  ],

  277: [
    { type: "table", key: "toolsUsed", label: "Tools used", section: "Tools used", columns: [
      { key: "tool", label: "Tool", kind: "text" },
      { key: "partHandled", label: "Part of project it handled", kind: "text" },
    ], seedRows: [
      { tool: "Google Forms", partHandled: "Collected survey responses" },
      { tool: "Google Sheets", partHandled: "Cleaned and analyzed the data" },
      { tool: "Google Slides", partHandled: "Presented the findings" },
    ] },
    { type: "textarea", key: "handoffsSmooth", label: "Did the handoffs between tools go smoothly?", section: "Result", rows: 2, seed: "Yes, planning the export format in advance meant no reformatting was needed between steps." },
  ],
  278: [
    { type: "text", key: "peerWorkReviewed", label: "Peer / work reviewed", section: "Feedback", seed: "A teammate's draft budget spreadsheet" },
    { type: "text", key: "specificStrength", label: "Specific strength noted", seed: "Clear category labels made it easy to follow" },
    { type: "textarea", key: "actionableSuggestion", label: "Specific, actionable suggestion", rows: 2, seed: "Add a running total row so overspending is visible at a glance, not just per category." },
    { type: "textarea", key: "madeChangeBasedOnIt", label: "Did they make a change based on it?", section: "Result", rows: 2, seed: "Yes, the running total was in the next version I saw." },
  ],

  279: [
    { type: "text", key: "contentPresented", label: "Content presented", section: "Content", seed: "My data analysis findings on club event attendance" },
    { type: "text", key: "audience", label: "Audience", seed: "A small study group of five classmates" },
    { type: "textarea", key: "assumedTooMuchKnowledge", label: "Where did I assume too much background knowledge?", section: "Result", rows: 2, seed: "I used \"response rate\" without defining it, and two people asked what it meant." },
  ],

  280: [
    { type: "text", key: "whatNegotiating", label: "What I'm negotiating", section: "Prep", seed: "Shifting a shared project deadline with a teammate" },
    { type: "textarea", key: "priorities", label: "My priorities (non-negotiable)", rows: 2, seed: "The final submission date can't move, since it's set by the professor." },
    { type: "textarea", key: "flexiblePoints", label: "My flexible points", rows: 2, seed: "I can flex on which sections each of us drafts first." },
    { type: "textarea", key: "outcome", label: "Outcome", section: "Result", rows: 2, seed: "Learning her exam conflict was the real issue let us swap task order instead of arguing over the deadline itself." },
  ],

  281: [
    { type: "text", key: "promptProblem", label: "Prompt / problem", section: "Prompt", seed: "How can we boost attendance at our spring showcase?" },
    { type: "textarea", key: "ideasGenerated", label: "Ideas generated", section: "Ideas generated", rows: 5, seed: "Free food, earlier promotion, partnering with another club, a raffle prize, better signage, a livestream option, moving the date." },
    { type: "textarea", key: "topIdeas", label: "Top 1 to 2 ideas after evaluation", section: "Best ideas", rows: 2, seed: "Earlier promotion and partnering with another club, both low-cost and high-impact." },
  ],

  282: [
    { type: "text", key: "collaboratorFunction", label: "Collaborator / function", section: "Collaboration", seed: "An engineering student on our shared campus app project" },
    { type: "textarea", key: "theirPriorities", label: "Their priorities I learned about", rows: 2, seed: "They cared most about a stable technical spec before any timeline discussion, not the marketing angle I led with." },
    { type: "textarea", key: "howAdapted", label: "How I adapted my communication for them", section: "Adjustment", rows: 2, seed: "Started future requests with the technical constraint, then explained the marketing reason behind it." },
  ],

  283: [
    { type: "text", key: "feedbackReceived", label: "Feedback received", section: "Feedback", seed: "\"Your chart labels are unclear, I can't tell what the axes represent.\"" },
    { type: "text", key: "specificChangeMade", label: "Specific change made", section: "Concrete revision", seed: "Added clear axis labels and a title to every chart going forward, not just the one flagged." },
  ],

  284: [
    { type: "text", key: "skillExperience", label: "Skill / experience", section: "Reflection", seed: "A data analysis project for my marketing class" },
    { type: "text", key: "whatILearned", label: "What I learned", seed: "I genuinely mastered basic formulas, but pivot tables still slow me down." },
    { type: "text", key: "genuinelyChallenging", label: "What was genuinely challenging", seed: "Deciding which fields to put in rows versus values in the pivot table" },
    { type: "text", key: "nextStep", label: "Next step", seed: "Do one focused pivot table tutorial this week" },
  ],

  285: [
    { type: "text", key: "skillGenuinelyGrown", label: "Skill that's genuinely grown", section: "Pattern review", seed: "Spreadsheet formulas, which no longer take me any real effort" },
    { type: "text", key: "recurringChallenge", label: "Challenge that keeps recurring", seed: "Presentation design still shows up as a struggle across every reflection this semester" },
  ],

  286: [
    { type: "text", key: "whoChecksConsistency", label: "Who checks consistency", section: "Review process", seed: "Me, as the assigned final reviewer for this submission" },
    { type: "text", key: "whoConfirmsDeadline", label: "Who confirms the deadline", seed: "Our team lead, the day before submission" },
    { type: "textarea", key: "readAsCoherent", label: "Did the final submission read as coherent?", section: "Result", rows: 2, seed: "Yes, having one owner for final review caught a formatting mismatch between two sections before it went out." },
  ],

  287: [
    { type: "table", key: "ratings", label: "Ratings", section: "Ratings", columns: [
      { key: "skill", label: "Skill", kind: "text" },
      { key: "rating", label: "Rating (1 to 10)", kind: "text" },
      { key: "evidence", label: "Evidence", kind: "text" },
    ], seedRows: [
      { skill: "Spreadsheet formulas", rating: "8", evidence: "Built trackers without help all semester" },
      { skill: "Data analysis", rating: "7", evidence: "Consistently found real insights, not just numbers" },
      { skill: "Presentation design", rating: "4", evidence: "Decks still feel cluttered and text-heavy" },
    ] },
    { type: "textarea", key: "genuinePriorityGap", label: "Genuine priority gap", section: "Priority", rows: 2, seed: "Presentation design is my lowest honest score and the one I keep avoiding, worth prioritizing next." },
  ],

  288: [
    { type: "text", key: "prioritySkills", label: "Priority skill(s)", section: "Plan", seed: "Presentation design" },
    { type: "table", key: "milestones", label: "Milestones", columns: [
      { key: "milestone", label: "Milestone", kind: "text" },
      { key: "targetDate", label: "Target date", kind: "text" },
      { key: "resourceMethod", label: "Resource/method", kind: "text" },
    ], seedRows: [
      { milestone: "Complete a slide-design fundamentals course", targetDate: "In 3 weeks", resourceMethod: "Free online course" },
      { milestone: "Rebuild one past deck using what I learned", targetDate: "In 6 weeks", resourceMethod: "A past class presentation" },
      { milestone: "Present it and get specific feedback", targetDate: "In 8 weeks", resourceMethod: "Study group" },
    ] },
  ],

  289: [
    { type: "text", key: "conceptTaught", label: "Concept taught", section: "Session", seed: "How to build a basic pivot table" },
    { type: "text", key: "peer", label: "Peer", seed: "A classmate who'd never used one before" },
    { type: "textarea", key: "gapSurfaced", label: "Gap in my own understanding it surfaced", section: "What teaching revealed", rows: 2, seed: "I couldn't clearly explain why one specific field went in \"values\" instead of \"rows\" until I looked it up myself." },
  ],

  290: [
    { type: "table", key: "toolAudit", label: "Tool audit", section: "Tool audit", columns: [
      { key: "tool", label: "Tool", kind: "text" },
      { key: "genuinelyHelps", label: "Genuinely helps? (Y/N)", kind: "text" },
    ], seedRows: [
      { tool: "Todoist", genuinelyHelps: "Y" },
      { tool: "A second, unused task app", genuinelyHelps: "N" },
      { tool: "Google Calendar", genuinelyHelps: "Y" },
    ] },
    { type: "text", key: "toolsDropping", label: "Tool(s) I'm dropping or consolidating", section: "Decision", seed: "Dropping the second task app, everything moves into Todoist" },
  ],

  291: [
    { type: "text", key: "issue1", label: "Issue", section: "Entry 1", seed: "Spreadsheet formula returning #REF! after deleting a column" },
    { type: "text", key: "solution1", label: "Solution", seed: "Rebuilt the reference range and avoided deleting referenced columns going forward" },
    { type: "text", key: "lesson1", label: "Lesson", seed: "Check what a column is referenced by before deleting it" },
    { type: "text", key: "issue2", label: "Issue (2)", section: "Entry 2", seed: "Automation script silently failing on weekends" },
    { type: "text", key: "solution2", label: "Solution (2)", seed: "Added an error notification so failures surface immediately instead of going unnoticed" },
    { type: "text", key: "lesson2", label: "Lesson (2)", seed: "Always build in a failure alert, not just a happy-path automation" },
  ],

  292: [
    { type: "text", key: "recentStruggle", label: "Recent moment of genuine struggle", section: "The struggle", seed: "Spending an hour stuck on a pivot table that still didn't summarize the data correctly" },
    { type: "textarea", key: "realGap", label: "Specific underlying gap it points to", section: "The real gap", rows: 2, seed: "The struggle wasn't the tool itself, it was not understanding what \"aggregation\" actually means conceptually." },
  ],

  293: [
    { type: "text", key: "feedbackReceived", label: "Feedback received (instructor/client)", section: "Feedback", seed: "\"Clarify the methodology section.\"" },
    { type: "textarea", key: "genuineRevision", label: "What I actually changed, beyond the surface ask", section: "Genuine revision", rows: 3, seed: "Rewrote the entire section to explain why each method was chosen, not just adding one clarifying sentence as originally asked." },
  ],

  294: [
    { type: "table", key: "conversationLog", label: "Conversation log", section: "Conversation log", columns: [
      { key: "conversation", label: "Conversation", kind: "text" },
      { key: "paraphrased", label: "Paraphrased first? (Y/N)", kind: "text" },
      { key: "result", label: "Result", kind: "text" },
    ], seedRows: [
      { conversation: "Group project check-in with Maya", paraphrased: "Y", result: "Caught that I'd misunderstood which section she meant" },
      { conversation: "Roommate venting about work", paraphrased: "Y", result: "She said talking to me felt easier than usual" },
    ] },
    { type: "textarea", key: "caughtMisunderstanding", label: "Did paraphrasing ever catch a misunderstanding?", section: "Reflection", rows: 2, seed: "Yes, once, it revealed we'd been planning around two different deadlines." },
  ],

  295: [
    { type: "text", key: "needSoftened", label: "Need or opinion I've been softening or avoiding", section: "The need", seed: "Asking my group to split presentation slides more evenly" },
    { type: "text", key: "iStatement", label: "My assertive \"I\" statement", seed: "I can take the intro, but I'd like us to split the rest evenly this time." },
    { type: "textarea", key: "result", label: "How the other person responded", section: "Result", rows: 2, seed: "They agreed right away and apologized for not noticing the imbalance sooner." },
  ],

  296: [
    { type: "text", key: "selfPerception", label: "How I think I come across", section: "My self-perception", seed: "Direct and efficient, focused on getting things done" },
    { type: "table", key: "outsideFeedback", label: "Outside feedback", section: "Outside feedback", columns: [
      { key: "person", label: "Person asked", kind: "text" },
      { key: "description", label: "Their description", kind: "text" },
    ], seedRows: [
      { person: "Roommate", description: "Efficient but sometimes abrupt" },
      { person: "Project teammate", description: "Clear and easy to follow" },
    ] },
    { type: "textarea", key: "gap", label: "What surprised me, if anything", section: "The gap", rows: 2, seed: "I didn't realize \"efficient\" could also land as \"abrupt\" to someone less familiar with me." },
  ],

  297: [
    { type: "text", key: "conversation", label: "Conversation / person", section: "The conversation", seed: "Coffee catch-up with my roommate" },
    { type: "text", key: "madeIt", label: "Made it through without interrupting? (Y/N)", seed: "Y" },
    { type: "textarea", key: "openUp", label: "Did the other person seem to open up more?", section: "Reflection", rows: 2, seed: "Yes, she kept going into more detail than she usually does when I jump in." },
  ],

  298: [
    { type: "textarea", key: "selfObservation", label: "My posture / gestures noticed", section: "Self-observation", rows: 2, seed: "Crossed my arms and avoided eye contact whenever asked a question I wasn't prepared for." },
    { type: "textarea", key: "observingOthers", label: "A non-verbal cue I noticed in someone else", section: "Observing others", rows: 2, seed: "A teammate leaned back and looked at the door whenever the meeting ran long, a clear sign to wrap up." },
  ],

  299: [
    { type: "text", key: "group", label: "Group / discussion", section: "The group", seed: "Weekly study group" },
    { type: "text", key: "quieterMember", label: "Quieter member invited", seed: "Devon, who rarely speaks first" },
    { type: "textarea", key: "result", label: "What they contributed", section: "Result", rows: 2, seed: "A genuinely different approach to the problem that changed how we solved it." },
  ],

  300: [
    { type: "text", key: "who", label: "Who shared something difficult", section: "The situation", seed: "My roommate, stressed about a heavy week" },
    { type: "text", key: "whatISaid", label: "What I said before jumping to advice", seed: "That sounds exhausting, do you want ideas or just want to vent?" },
    { type: "textarea", key: "result", label: "Did they want advice or just to be heard?", section: "Result", rows: 2, seed: "Just to be heard. She thanked me afterward for asking instead of assuming." },
  ],

  301: [
    { type: "text", key: "info", label: "Instructions / info received", section: "The information", seed: "Deadline and deliverables for the group project handoff" },
    { type: "textarea", key: "mySummary", label: "My summary back to them", rows: 2, seed: "So we're submitting the draft Thursday, and you're handling the intro section, is that right?" },
    { type: "textarea", key: "result", label: "Did summarizing catch a misunderstanding?", section: "Result", rows: 2, seed: "Yes, I had the wrong day, it caught the mistake before it became a problem." },
  ],

  302: [
    { type: "textarea", key: "situation", label: "Situation where I reacted quickly", section: "The interaction", rows: 2, seed: "Getting annoyed at a teammate's slow email replies during a busy week." },
    { type: "textarea", key: "theirPerspective", label: "Their likely perspective", section: "Their perspective", rows: 2, seed: "She was probably dealing with something urgent I didn't know about." },
  ],

  303: [
    { type: "text", key: "moment", label: "Recent moment of strong emotion", section: "The moment", seed: "Feeling defensive during feedback on a writing draft" },
    { type: "text", key: "trigger", label: "The specific trigger", seed: "Feedback that touched on my writing specifically, more than other kinds of feedback" },
    { type: "textarea", key: "pattern", label: "My typical reaction, and did it serve me well?", section: "Pattern", rows: 2, seed: "I get quiet and want to explain myself, which usually just delays actually hearing the feedback." },
  ],

  304: [
    { type: "text", key: "situation", label: "Situation involving delay or frustration", section: "The moment", seed: "Slow WiFi during an important video call" },
    { type: "textarea", key: "result", label: "Did pausing to breathe change my reaction?", section: "Result", rows: 2, seed: "Yes, I stayed calm instead of getting visibly annoyed on camera." },
  ],

  305: [
    { type: "textarea", key: "myView", label: "My view", section: "Perspectives", rows: 2, seed: "My teammate missed the deadline and put the whole project at risk." },
    { type: "textarea", key: "theirView", label: "Their view", rows: 2, seed: "He was probably overwhelmed and didn't know how to ask for help without looking like he was failing." },
    { type: "textarea", key: "neutralView", label: "A neutral view", rows: 2, seed: "The deadline slipped, and there's likely no single person to blame, just an unclear plan for what to do if someone got stuck." },
  ],

  306: [
    { type: "text", key: "emotion", label: "Specific emotion right now", section: "Check-in", seed: "A little anxious" },
    { type: "text", key: "driving", label: "What's driving it", seed: "An upcoming deadline I haven't fully planned for yet" },
  ],

  307: [
    { type: "text", key: "technique", label: "Technique chosen", section: "Technique", seed: "Box breathing: four counts in, hold, out, hold" },
    { type: "text", key: "moment", label: "Stressful moment it was used in", section: "Applied", seed: "An unexpectedly tough question during a presentation" },
    { type: "textarea", key: "didItHelp", label: "Did it help?", rows: 2, seed: "Yes, it gave me a second to think instead of reacting defensively." },
  ],

  308: [
    { type: "text", key: "interaction", label: "Interaction / person", section: "The interaction", seed: "Working with an international classmate on a group project" },
    { type: "textarea", key: "assumption", label: "Assumption I noticed making", section: "Reflection", rows: 2, seed: "I assumed direct feedback was always preferred." },
    { type: "textarea", key: "learned", label: "What I learned", rows: 2, seed: "Her background valued a more indirect approach, which changed how I gave feedback going forward." },
  ],

  309: [
    { type: "textarea", key: "sourceMoment", label: "A moment I felt genuinely proud of my own behavior", section: "Source moment", rows: 2, seed: "Telling a teammate an uncomfortable truth instead of letting a problem slide." },
    { type: "textarea", key: "statement", label: "My values statement", section: "Statement", rows: 2, seed: "I treat people's time as valuable, and I choose honesty over comfort." },
  ],

  310: [
    { type: "text", key: "topic", label: "Peer / feedback topic", section: "Prep", seed: "A teammate's presentation section running long" },
    { type: "text", key: "strength", label: "Genuine strength I'll lead with", seed: "His slides were the clearest of anyone's on the team" },
    { type: "text", key: "suggestion", label: "Specific, actionable suggestion", seed: "Cut the middle section by about two minutes so we stay on schedule" },
    { type: "textarea", key: "result", label: "How it was received", section: "Result", rows: 2, seed: "Well, he thanked me for saying it directly instead of letting it slide." },
  ],

  311: [
    { type: "text", key: "feedback", label: "Feedback received", section: "The feedback", seed: "My methodology section needed more clarity" },
    { type: "text", key: "whoGaveIt", label: "Who gave it", seed: "My instructor" },
    { type: "textarea", key: "change", label: "Specific change I made", section: "Follow-through", rows: 2, seed: "Rewrote the section to explain why each method was chosen, not just what it was." },
  ],

  312: [
    { type: "text", key: "issue", label: "The issue", section: "The disagreement", seed: "A teammate repeatedly missing deadlines without saying anything" },
    { type: "text", key: "iStatement", label: "My \"I\" statement opening", seed: "I've noticed the last two deadlines slipped, and it's putting real pressure on the rest of the team." },
    { type: "textarea", key: "agreed", label: "What was agreed", section: "Resolution", rows: 2, seed: "He'd flag delays earlier, and we'd check in two days before each deadline." },
  ],

  313: [
    { type: "textarea", key: "whatHappened", label: "What happened", section: "Team conflict debrief", rows: 2, seed: "Two of us both assumed the other owned the final handoff, and it slipped through the cracks." },
    { type: "textarea", key: "whatWedChange", label: "What we'd change", rows: 2, seed: "Name one clear owner for every handoff, out loud, before moving on." },
    { type: "text", key: "structuralFix", label: "Structural or process fix identified", seed: "A shared checklist naming an owner for each project step" },
  ],

  314: [
    { type: "text", key: "parties", label: "Two parties involved", section: "The disagreement", seed: "Two roommates disagreeing over chore splitting" },
    { type: "textarea", key: "outcome", label: "Outcome reached", section: "Resolution", rows: 2, seed: "A specific, written chore schedule both of them agreed to." },
  ],

  315: [
    { type: "text", key: "groundRules", label: "Ground rules set", section: "Ground rules", seed: "Be specific, be kind, be actionable" },
    { type: "table", key: "feedbackCaptured", label: "Feedback captured", section: "Feedback captured", columns: [
      { key: "member", label: "Team member", kind: "text" },
      { key: "working", label: "Working well", kind: "text" },
      { key: "improve", label: "To improve", kind: "text" },
    ], seedRows: [
      { member: "Maya", working: "Always hits her deadlines", improve: "Could share progress updates more often" },
      { member: "Devon", working: "Great at catching errors", improve: "Could speak up earlier when something's unclear" },
    ] },
  ],

  316: [
    { type: "text", key: "negotiating", label: "What I'm negotiating", section: "Prep", seed: "A project deadline with a teammate" },
    { type: "text", key: "nonNegotiable", label: "My priorities (non-negotiable)", seed: "The final deliverable still needs to ship on time" },
    { type: "text", key: "flexible", label: "My flexible points", seed: "Who does which section, and in what order" },
    { type: "textarea", key: "outcome", label: "Outcome", section: "Result", rows: 2, seed: "He had a conflicting exam, so we swapped section order and both priorities were met." },
  ],

  317: [
    { type: "text", key: "boundary", label: "Boundary I've been avoiding stating", section: "The boundary", seed: "Saying no to last-minute favor requests the night before a deadline" },
    { type: "text", key: "howStated", label: "How I stated it", seed: "I can't do this tonight, but I could help tomorrow instead." },
    { type: "textarea", key: "respected", label: "Was it respected?", section: "Result", rows: 2, seed: "Yes, with no pushback or friction." },
  ],

  318: [
    { type: "textarea", key: "challenge", label: "Difficult group task", section: "The challenge", rows: 2, seed: "A tight deadline with genuinely conflicting ideas about project direction." },
    { type: "textarea", key: "howCollaborationHelped", label: "Specific moment collaboration made the difference", section: "How collaboration helped", rows: 2, seed: "Agreeing on decision criteria upfront kept the disagreement from stalling the whole project." },
  ],

  319: [
    { type: "text", key: "roleChosen", label: "Role chosen", section: "Role", seed: "Facilitator" },
    { type: "text", key: "defaultRole", label: "My usual default role", seed: "Quiet contributor" },
    { type: "textarea", key: "stretch", label: "How it stretched me", section: "Reflection", rows: 2, seed: "I had to speak up and keep the group on track, which isn't my natural instinct." },
  ],

  320: [
    { type: "text", key: "prompt", label: "Prompt / problem", section: "Prompt", seed: "How to make our club's event actually get attendance" },
    { type: "textarea", key: "ideasGenerated", label: "Ideas generated", section: "Ideas generated", rows: 3, seed: "Free food, a raffle, partnering with another club, moving the time, a countdown on social media." },
    { type: "textarea", key: "topIdeas", label: "Best idea(s) after evaluation", section: "Top ideas", rows: 2, seed: "Partnering with another club, since it doubles our reach for free." },
  ],

  321: [
    { type: "text", key: "problem", label: "Shared problem", section: "The problem", seed: "Unclear scope on a group project brief" },
    { type: "table", key: "perspectives", label: "Perspectives heard", section: "Perspectives heard", columns: [
      { key: "person", label: "Person", kind: "text" },
      { key: "perspective", label: "Their perspective", kind: "text" },
    ], seedRows: [
      { person: "Me", perspective: "Thought we were building a prototype" },
      { person: "Teammate", perspective: "Thought we were writing a proposal" },
    ] },
    { type: "textarea", key: "solution", label: "Insight or solution surfaced", section: "Solution", rows: 2, seed: "The brief was genuinely ambiguous, so we asked the instructor to clarify instead of guessing." },
  ],

  322: [
    { type: "text", key: "decision", label: "Decision being made", section: "Decision", seed: "Which direction to take our final project" },
    { type: "textarea", key: "concernAddressed", label: "Quieter member's concern surfaced and addressed", section: "Concerns addressed", rows: 2, seed: "One teammate worried the timeline was unrealistic, and we adjusted scope once she said so." },
    { type: "textarea", key: "finalDecision", label: "Final decision with buy-in", section: "Result", rows: 2, seed: "A slightly smaller scope that everyone genuinely agreed was achievable." },
  ],

  323: [
    { type: "text", key: "defaultRole", label: "Usual default role", section: "Rotation", seed: "Researcher" },
    { type: "text", key: "newRole", label: "New role tried", seed: "Presenter" },
    { type: "textarea", key: "discovery", label: "Something new I learned about myself", section: "Discovery", rows: 2, seed: "I was more comfortable in front of a room than I expected." },
  ],

  324: [
    { type: "text", key: "habitAdjusted", label: "Habit adjusted for remote work", section: "Adjustment", seed: "Switching to brief video check-ins for anything with real emotional stakes" },
    { type: "textarea", key: "result", label: "Did it reduce misunderstandings?", section: "Result", rows: 2, seed: "Yes, tone came through much more clearly than in text-only messages." },
  ],

  325: [
    { type: "text", key: "contribution", label: "Teammate / contribution", section: "Recognition", seed: "Maya's data analysis that reshaped our whole approach" },
    { type: "text", key: "howAcknowledged", label: "How I acknowledged it publicly", seed: "Called it out specifically in our team meeting, not just a generic thank you" },
    { type: "textarea", key: "reaction", label: "Their reaction", section: "Result", rows: 2, seed: "She seemed genuinely pleased, and spoke up more in the following meetings." },
  ],

  326: [
    { type: "text", key: "decision", label: "The decision", section: "Decision log", seed: "Choosing to prioritize the data section over the design polish before the deadline" },
    { type: "text", key: "factors", label: "Key factors considered", seed: "Grading rubric weight, time remaining, teammate availability" },
    { type: "text", key: "reasoning", label: "My reasoning", seed: "Substance mattered more than polish given the rubric, and we could always polish later" },
    { type: "text", key: "date", label: "Date", seed: "2026-07-01" },
  ],

  327: [
    { type: "text", key: "topic", label: "Topic", section: "The talk", seed: "Why I chose my major" },
    { type: "text", key: "audience", label: "Audience", seed: "Two roommates" },
    { type: "textarea", key: "comparison", label: "How did it feel compared to solo rehearsal?", section: "Reflection", rows: 2, seed: "More nerve-wracking at first, but it built real comfort solo practice never did." },
  ],

  328: [
    { type: "table", key: "segments", label: "Segments", section: "Segments", columns: [
      { key: "segment", label: "Audience segment", kind: "text" },
      { key: "addressed", label: "How I addressed them", kind: "text" },
    ], seedRows: [
      { segment: "Technical stakeholders", addressed: "Went deep on methodology" },
      { segment: "Non-technical stakeholders", addressed: "Added a plain-language recap after each technical point" },
    ] },
    { type: "textarea", key: "result", label: "Did each segment feel spoken to?", section: "Result", rows: 2, seed: "Yes, both groups said afterward they followed along the whole time." },
  ],

  329: [
    { type: "text", key: "whoIMet", label: "Who I met", section: "The conversation", seed: "An alum working in a field I'm curious about" },
    { type: "text", key: "genuineQuestion", label: "Genuine question I asked", seed: "What's something about this job nobody tells you before you start?" },
    { type: "textarea", key: "result", label: "How long did it genuinely sustain?", section: "Result", rows: 2, seed: "Almost twenty minutes, much longer than I expected for a first conversation." },
  ],

  330: [
    { type: "text", key: "peerSkill", label: "Peer / skill", section: "Session", seed: "Helping a classmate with pivot tables in Excel" },
    { type: "textarea", key: "guidingQuestions", label: "Guiding questions I asked", rows: 2, seed: "What are you actually trying to summarize here? What would that look like as a table?" },
    { type: "textarea", key: "result", label: "Could they do it independently afterward?", section: "Result", rows: 2, seed: "Yes, she built the next one herself without asking for help." },
  ],

  331: [
    { type: "textarea", key: "questions", label: "Questions prepared", section: "Questions prepared", rows: 3, seed: "1. How did you decide between two offers early in your career?\n2. What's one thing you wish you'd asked in your first job?" },
    { type: "text", key: "guidance", label: "Guidance received", section: "Application", seed: "Ask about team culture directly in interviews, not just role responsibilities" },
    { type: "textarea", key: "howApplied", label: "How I applied it", rows: 2, seed: "Asked about team culture in my next interview and got a much clearer picture of the role." },
  ],

  332: [
    { type: "text", key: "contact", label: "Contact", section: "Contact", seed: "An alum I met at a career fair three months ago" },
    { type: "text", key: "reason", label: "Genuinely relevant reason for reaching out", seed: "Sharing an article related to a project she mentioned she was working on" },
    { type: "textarea", key: "response", label: "Response received", section: "Result", rows: 2, seed: "A warm reply, and she offered to make an introduction to someone on her team." },
  ],

  333: [
    { type: "text", key: "event", label: "Event", section: "Event", seed: "A campus career fair" },
    { type: "textarea", key: "workedWell", label: "What worked well", section: "Reflection", rows: 2, seed: "Conversations that opened with a genuine question about the other person went better than my usual pitch opener." },
    { type: "textarea", key: "tryDifferently", label: "What to try differently next time", rows: 2, seed: "Lead with a question every time, even when I'm nervous and want to just launch into my pitch." },
  ],

  334: [
    { type: "textarea", key: "anticipated", label: "Likely questions and rough answers", section: "Anticipated questions", rows: 3, seed: "1. Why this approach over the alternative? Because it was faster to test.\n2. What would you do differently? Start user testing earlier.\n3. What's the biggest risk? Adoption, not the technology itself." },
    { type: "textarea", key: "realResult", label: "How the real Q&A went", section: "Real Q&A result", rows: 2, seed: "One question I hadn't anticipated came up, but pausing before answering kept my response clear." },
  ],

  335: [
    { type: "textarea", key: "story", label: "Genuine personal story or conviction", section: "The story", rows: 3, seed: "Failing my first pitch competition and using the specific feedback to place in the next one." },
    { type: "textarea", key: "audienceReaction", label: "How the audience reacted", section: "Result", rows: 2, seed: "A few people said afterward it made them want to try again after their own setbacks." },
  ],

  336: [
    { type: "text", key: "change", label: "Unexpected change or challenge", section: "The change", seed: "Presentation software failing five minutes before a scheduled talk" },
    { type: "textarea", key: "howAdapted", label: "How I adapted", section: "Response", rows: 2, seed: "Switched to a whiteboard version of the same content instead of panicking." },
  ],

  337: [
    { type: "text", key: "judgment", label: "Snap judgment made", section: "The judgment", seed: "Assumed a quiet new teammate didn't care about the project" },
    { type: "text", key: "evidence", label: "Evidence that actually supports it", section: "Examination", seed: "Honestly, none, just that she spoke less than the rest of us" },
    { type: "text", key: "alternative", label: "Alternative explanation", seed: "She's simply more reserved in group settings, not disengaged" },
  ],

  338: [
    { type: "textarea", key: "experience", label: "Leadership experience", section: "The experience", rows: 2, seed: "Leading a group project that fell behind schedule under real time pressure." },
    { type: "text", key: "worked", label: "What worked", seed: "Being clear about priorities when time got short" },
    { type: "textarea", key: "revealed", label: "What it revealed about my natural tendencies", section: "Reflection", rows: 2, seed: "I tend to take over tasks myself under stress instead of delegating." },
  ],

  339: [
    { type: "text", key: "technique", label: "Technique tried", section: "Technique", seed: "A short walk outside instead of seated meditation" },
    { type: "textarea", key: "didItHelp", label: "Did it genuinely help?", rows: 2, seed: "Yes, more than meditation ever has for me personally." },
  ],

  340: [
    { type: "textarea", key: "gratitudeList", label: "Specific things I'm grateful for", section: "Today's gratitude", rows: 3, seed: "1. My roommate covering for me during a rough week\n2. A professor who gave detailed, useful feedback\n3. A sunny walk that reset my mood before a hard meeting" },
  ],

  341: [
    { type: "textarea", key: "whatHappened", label: "What happened", section: "The setback", rows: 2, seed: "Got rejected from my top-choice internship after making it to the final round." },
    { type: "text", key: "lesson", label: "Specific lesson extracted", section: "Lesson & action", seed: "I applied too late in the cycle and was competing for very few remaining spots" },
    { type: "text", key: "nextAction", label: "Concrete next action", seed: "Start next year's applications a full month earlier" },
  ],

  342: [
    { type: "text", key: "mostProductive", label: "When I'm genuinely most productive", section: "Patterns", seed: "Evenings, after 7pm" },
    { type: "text", key: "leastProductive", label: "When I'm genuinely least productive", seed: "Early morning, despite trying to force it for months" },
    { type: "textarea", key: "adjustment", label: "One schedule change based on this", section: "Adjustment", rows: 2, seed: "Moved my hardest, most focused work block to the evening instead of forcing an early-morning routine." },
  ],

  343: [
    { type: "text", key: "grown", label: "Skill that's genuinely grown", section: "Growth", seed: "Active listening and receiving feedback without getting defensive" },
    { type: "text", key: "challenge", label: "Area still genuinely difficult", section: "Remaining challenge", seed: "Staying neutral when mediating a disagreement between two people I'm close to" },
    { type: "textarea", key: "nextSteps", label: "Next steps", section: "Next steps", rows: 2, seed: "Look for a low-stakes chance to practice mediation before a higher-stakes one comes up." },
  ],
};
