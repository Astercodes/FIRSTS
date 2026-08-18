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

export const WORKSHEET_SCHEMAS: Record<number, WorksheetField[]> = {
  2: [
    { type: "textarea", key: "visionStatement", label: "Vision statement", hint: "“In the next 5–10 years, I see myself…”", rows: 3, seed: "Leading a small product team building tools that make messy operations legible for non-technical people, working from a place with real seasons, mentoring at least one person junior to me." },
    { type: "textarea", key: "passions", label: "My passions", hint: "“I feel most alive when I am…”", rows: 2, seed: "Untangling a confusing process until it clicks for someone else." },
    { type: "textarea", key: "coreValues", label: "Core values", hint: "“These are the principles I refuse to compromise in my work and life…”", rows: 2, seed: "Honesty even when it's inconvenient, and protecting time for the people closest to me." },
    { type: "textarea", key: "longTermGoals", label: "Long-term goals (5–10 years)", hint: "“By Year X, I aim to have achieved…”", rows: 2, seed: "By year 8, leading a small team and known for shipping things that actually get used." },
    { type: "textarea", key: "midTermGoals", label: "Mid-term goals (2–3 years)", hint: "“In the next 2–3 years, I will accomplish…”", rows: 2, seed: "Own one project end-to-end and build a track record I can point to in interviews." },
    { type: "textarea", key: "shortTermGoals", label: "Short-term goals (6–12 months)", hint: "“Within the next year, I will…”", rows: 2, seed: "Finish my Skill Growth Plan's top skill and complete two informational interviews." },
    { type: "table", key: "steppingStones", label: "Stepping stones — actions", columns: [
      { key: "goal", label: "Short-term goal", kind: "text" },
      { key: "action", label: "Supporting action", kind: "text" },
      { key: "timeline", label: "Timeline", kind: "text" },
    ], seedRows: [
      { goal: "Finish top skill from growth plan", action: "30 min practice, 3x/week", timeline: "Next quarter" },
    ] },
    { type: "textarea", key: "barriers", label: "Potential barriers & solutions", hint: "“I may face these challenges… I can address them by…”", rows: 2, seed: "Time is the biggest risk — I'll protect two fixed evenings a week for this." },
    { type: "text", key: "reviewDate", label: "Review & update", hint: "“On [date], I will revisit this page to update my vision and goals.”", seed: "In 12 months" },
  ],

  3: [
    { type: "textarea", key: "peakExperiences", label: "Peak experiences", hint: "“I feel most alive when I am…”", section: "Discovering your purpose", rows: 2, seed: "Taking something confusing and turning it into a system someone else can follow." },
    { type: "textarea", key: "recurringThemes", label: "Recurring themes", hint: "“The problem that consistently moves me is…”", section: "Discovering your purpose", rows: 2, seed: "People who are capable but stuck because no one gave them a map." },
    { type: "textarea", key: "naturalStrengths", label: "Natural strengths in service", hint: "“The type of people I feel drawn to support are…”", section: "Discovering your purpose", rows: 2, seed: "People one or two steps behind me who just need someone to go first." },
    { type: "textarea", key: "impactVision", label: "Impact vision", hint: "“If I had unlimited resources, I would devote my life to…”", section: "Discovering your purpose", rows: 2, seed: "Building free, honest guides for the firsts nobody explains clearly." },
    { type: "chipList", key: "themes", label: "Recurring themes across your answers", hint: "3–5 patterns you notice above.", section: "Patterns & insights", seed: ["Making confusing things clear", "Helping people who are one step behind me", "Building systems, not just giving advice"] },
    { type: "text", key: "purposeCommitment", label: "My life is committed to", section: "Draft your purpose statement", seed: "turning confusion into a clear next step" },
    { type: "text", key: "purposeSoThat", label: "So that", section: "Draft your purpose statement", seed: "people don't have to figure out their firsts alone" },
    { type: "textarea", key: "internshipApplication", label: "Internship / job selection", hint: "How does this purpose guide which opportunities you accept?", section: "Contextual application", rows: 2, seed: "I lean toward roles where I'm building something others will actually use, not just internal reports." },
    { type: "textarea", key: "networkingApplication", label: "Networking / mentorship", hint: "How do you express your purpose to mentors or peers?", section: "Contextual application", rows: 2, seed: "I tell mentors directly that I want to build things that make someone's first attempt easier." },
    { type: "textarea", key: "developmentApplication", label: "Personal development", hint: "How does this purpose shape the skills or experiences you pursue daily?", section: "Contextual application", rows: 2, seed: "It's why I keep choosing to write things down clearly instead of just knowing them in my head." },
  ],

  4: [
    { type: "text", key: "currentIdentity", label: "Current identity", hint: "“I am a/an…”", section: "Identity foundation builder", seed: "Computer science student focused on backend systems" },
    { type: "chipList", key: "coreStrengths", label: "Core strengths (3–5)", hint: "My strongest abilities are…", section: "Identity foundation builder", seed: ["Systems thinking", "Calm under ambiguity", "Explaining technical detail simply"] },
    { type: "text", key: "signatureStrength", label: "Condensed into 1–2 signature strengths", section: "Identity foundation builder", seed: "Turning messy systems into ones people can trust" },
    { type: "textarea", key: "focusArea", label: "Focus area / direction", hint: "The industry, function, or problem space I'm moving toward.", section: "Identity foundation builder", rows: 2, seed: "Backend and data infrastructure for small, fast-moving product teams." },
    { type: "text", key: "valuePropHelp", label: "I help / aim to help", section: "Identity foundation builder", seed: "fast-moving teams" },
    { type: "text", key: "valuePropBy", label: "By", section: "Identity foundation builder", seed: "building systems they can trust without babysitting" },
    { type: "text", key: "valuePropSoThat", label: "So that", section: "Identity foundation builder", seed: "they can focus on the product, not the plumbing" },
    { type: "textarea", key: "differentiator", label: "Differentiator", hint: "What makes me distinct at this stage?", section: "Identity foundation builder", rows: 2, seed: "I've already rebuilt one broken system from scratch, most peers my level haven't." },
    { type: "textarea", key: "narrativeDraft", label: "3–5 sentence narrative", section: "Narrative draft", rows: 4, seed: "I'm a computer science student focused on backend systems. I specialize in turning fragile, undocumented processes into ones a team can actually trust. I'm currently developing experience in distributed systems and observability. My goal is to contribute to a small infrastructure team where reliability is treated as a feature, not an afterthought." },
    { type: "checklist", key: "clarityChecklist", label: "Clarity & strength checklist", section: "Clarity & strength checklist", items: ["Is it specific (not generic)?", "Does it reflect my real strengths?", "Does it show direction, not confusion?", "Can I say it naturally without reading?", "Does it align with my Core Values?"], seedChecked: ["Is it specific (not generic)?", "Does it reflect my real strengths?"] },
    { type: "textarea", key: "linkedinVersion", label: "LinkedIn summary (professional tone)", section: "Adaptation versions", rows: 2, seed: "Backend-focused CS student turning fragile systems into ones teams can trust." },
    { type: "textarea", key: "interviewVersion", label: "Interview introduction (conversational tone)", section: "Adaptation versions", rows: 2, seed: "I'm a CS student who really likes fixing things that are quietly broken — I rebuilt one of our club's core systems last year and haven't stopped since." },
    { type: "textarea", key: "networkingVersion", label: "Networking event (30-second version)", section: "Adaptation versions", rows: 2, seed: "I fix broken backend systems — did it once for real last year, cut error rates by half." },
  ],

  5: [
    { type: "chipList", key: "hardSkills", label: "Hard skills identified", seed: ["SQL / data querying", "Python scripting", "Financial modeling"] },
    { type: "chipList", key: "softSkills", label: "Soft skills identified", seed: ["Stakeholder communication", "Conflict mediation"] },
    { type: "table", key: "skillTable", label: "Skill inventory table", hint: "Confidence 1–5 (1 = novice, 5 = expert).", columns: [
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
      { weakness: "Following up after meetings", category: "Soft", impact: "Loses momentum on group projects", evidence: "Two group projects stalled waiting on my recap", priority: "H", action: "Send a 3-line recap within 1 hour", support: "None — just discipline" },
    ] },
    { type: "textarea", key: "reflection", label: "Reflection", hint: "When have I noticed this gap limiting my performance? What patterns emerge?", rows: 2, seed: "It shows up most when I'm tired — I close my laptop instead of sending the recap." },
    { type: "textarea", key: "feedback", label: "Feedback & external perspective", hint: "What blind spots might I not notice? How can others help me improve?", rows: 2, seed: "A teammate mentioned I go quiet in disagreements instead of pushing back — I hadn't noticed that pattern." },
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
    { type: "textarea", key: "reflectionSurprise", label: "What surprised me about my interests?", rows: 2, seed: "That the common thread wasn't a subject at all — it was the feeling of a plan working." },
    { type: "text", key: "reflectionStrongest", label: "Which passion feels strongest right now?", seed: "Organizing people around a shared goal" },
    { type: "text", key: "reflectionNextStep", label: "What is one step I will take to explore it further?", seed: "Ask to co-lead the next campus event" },
    { type: "text", key: "summaryAreas", label: "The areas I'm most excited to explore professionally are", seed: "program coordination and event operations" },
    { type: "text", key: "summaryBecause", label: "Because they allow me to", seed: "turn a plan into something real that people show up for" },
  ],

  8: [
    { type: "research", key: "researchNotes", label: "Live industry research", sources: [
      { title: "Occupational Outlook Handbook", domain: "bls.gov", snippet: "Employment in this sector is projected to grow faster than average over the next decade, driven by digital adoption." },
      { title: "State of the Industry Report", domain: "glassdoor.com", snippet: "Reported culture scores skew high on flexibility, lower on advancement clarity for early-career hires." },
    ], synthesisSeed: "Growth is real and sourced (BLS), but advancement clarity is a known weak point (Glassdoor) — worth asking about directly in interviews." },
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
    { type: "textarea", key: "fitExcites", label: "Which industry excites me the most, and why?", rows: 2, seed: "Fintech — it's fast-moving and the impact of catching fraud is immediate and measurable." },
    { type: "textarea", key: "fitLeast", label: "Which industry seems least aligned with my interests or values?", rows: 2, seed: "Traditional retail banking — too slow-moving for the pace I want." },
    { type: "text", key: "summaryAligned", label: "Industries most aligned with my goals", seed: "Fintech, specifically fraud and risk" },
    { type: "text", key: "summaryBecause", label: "Because", seed: "the growth is sourced and real, and the skill demand matches my strengths" },
  ],

  9: [
    { type: "research", key: "pathwayResearch", label: "Live pathway research", sources: [
      { title: "Career trajectories in this field", domain: "linkedin.com", snippet: "Most people reach the target role after 2–3 years in an adjacent analytics or coordination role, not directly." },
    ], synthesisSeed: "Direct entry is rare — most real trajectories route through an adjacent role first." },
    { type: "table", key: "targetIndustry", label: "Target industry selection", columns: [
      { key: "industry", label: "Industry", kind: "text" },
      { key: "why", label: "Why I am interested", kind: "text" },
    ], seedRows: [{ industry: "Fintech — fraud & risk", why: "Matches my analytical strengths and Industry Insight research" }] },
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
    { type: "textarea", key: "reflectionAligned", label: "Which career path currently feels most aligned?", rows: 2, seed: "The Fraud Analyst track — it's the clearest match to what I'm already good at." },
    { type: "text", key: "summaryStatement", label: "Career path summary statement", hint: "The path I'm most interested in exploring right now is…", seed: "the Fraud Analyst track, because it aligns with my strengths in pattern recognition and my interest in fintech" },
  ],

  10: [
    { type: "table", key: "targetRoles", label: "Target role identification", hint: "List 1–3 internships or entry-level roles that interest you.", columns: [
      { key: "title", label: "Job title", kind: "text" },
      { key: "industry", label: "Industry", kind: "text" },
      { key: "why", label: "Why this role interests me", kind: "text" },
    ], seedRows: [{ title: "Fraud Analyst", industry: "Fintech", why: "Matches my Career Path hypothesis" }] },
    { type: "table", key: "roleComparison", label: "Role research (compare up to 3 roles)", hint: "One row per role — responsibilities, skills, qualifications, and gaps.", columns: [
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
    ], seedRows: [{ name: "—", contact: "—", meetingDate: "Not yet scheduled" }] },
    { type: "table", key: "actionPlan", label: "Action plan", columns: [
      { key: "step", label: "Immediate action step", kind: "text" },
      { key: "timeline", label: "Timeline", kind: "text" },
    ], seedRows: [{ step: "Rewrite resume's top 3 bullets to match role language", timeline: "This week" }] },
    { type: "text", key: "summary", label: "Role research summary", hint: "The role I'm most interested in pursuing is… because it aligns with my strengths in… and my interests in…", seed: "Fraud Analyst, because it aligns with my analytical strengths and my interest in fintech" },
  ],

  11: [
    { type: "research", key: "salaryResearch", label: "Live salary research", sources: [
      { title: "Compensation report", domain: "levels.fyi", snippet: "$70–78K reported for this title at larger tech employers." },
      { title: "Salary estimates", domain: "glassdoor.com", snippet: "$58–65K reported, skewed toward smaller companies in the same sample." },
    ], synthesisSeed: "The gap tracks with company size, not inconsistent data — larger employers cluster near the Levels.fyi range." },
    { type: "table", key: "benchmarkTable", label: "Your benchmarking table", columns: [
      { key: "role", label: "Role", kind: "text" },
      { key: "location", label: "Location", kind: "text" },
      { key: "source", label: "Source", kind: "text" },
      { key: "range", label: "Salary range", kind: "text" },
      { key: "target", label: "My target range", kind: "text" },
      { key: "fit", label: "Fit", kind: "text" },
    ], seedRows: [
      { role: "Fraud Analyst", location: "Atlanta, GA", source: "Glassdoor", range: "$58K–$65K", target: "$60K–$64K", fit: "Aligns with cost of living, room to grow" },
    ] },
    { type: "table", key: "remoteComparison", label: "International / remote comparison", columns: [
      { key: "role", label: "Role", kind: "text" },
      { key: "country", label: "Country", kind: "text" },
      { key: "location", label: "Location", kind: "text" },
      { key: "source", label: "Source", kind: "text" },
      { key: "range", label: "Salary range", kind: "text" },
      { key: "target", label: "My target range", kind: "text" },
    ], seedRows: [{ role: "Fraud Analyst", country: "USA", location: "Remote", source: "Levels.fyi", range: "$70K–$78K", target: "$68K–$72K" }] },
  ],

  12: [
    { type: "textarea", key: "strengths", label: "Strengths", rows: 3, seed: "I'm analytically strong and consistently deliver high-quality work others rely on." },
    { type: "textarea", key: "weaknesses", label: "Weaknesses", rows: 3, seed: "I avoid speaking up in group settings and feel intimidated presenting to a room." },
    { type: "textarea", key: "opportunities", label: "Opportunities", rows: 3, seed: "Roles I'm interested in increasingly value communication and storytelling — a skill I can practice deliberately." },
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
    { type: "textarea", key: "desiredLevel", label: "Desired level (6–12 month outcome)", rows: 2, seed: "Able to write a polished investigation summary without heavy editing." },
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
    { type: "textarea", key: "workflowPreference", label: "Workflow preference mapping", hint: "When starting a new task, what is the first thing I naturally do?", rows: 2, seed: "I outline the whole task before touching any of it — I can't start in the middle." },
    { type: "textarea", key: "executionStyle", label: "Execution style reflection", hint: "How do I move from planning to actual completion?", rows: 2, seed: "I need a firm deadline or I'll keep refining the plan instead of executing it." },
    { type: "textarea", key: "collaborationStyle", label: "Collaboration style reflection", hint: "What role do I naturally take in a group without trying?", rows: 2, seed: "I default to organizing the group's tasks, even when I didn't ask to." },
    { type: "textarea", key: "energyManagement", label: "Energy management awareness", hint: "What conditions increase my clarity and momentum?", rows: 2, seed: "Long, uninterrupted blocks in the morning — afternoons are much weaker for deep work." },
    { type: "table", key: "observationLog", label: "Structured observation log (1–2 weeks)", columns: [
      { key: "day", label: "Day", kind: "text" },
      { key: "task", label: "Task worked on", kind: "text" },
      { key: "environment", label: "Environment", kind: "text" },
      { key: "energyBefore", label: "Energy before (L/M/H)", kind: "text" },
      { key: "energyAfter", label: "Energy after (L/M/H)", kind: "text" },
      { key: "helped", label: "What helped", kind: "text" },
      { key: "disrupted", label: "What disrupted my workflow", kind: "text" },
    ], seedRows: [
      { day: "Mon", task: "Problem set", environment: "Library, quiet", energyBefore: "M", energyAfter: "H", helped: "No phone nearby", disrupted: "—" },
      { day: "Wed", task: "Group project", environment: "Open study room", energyBefore: "M", energyAfter: "L", helped: "—", disrupted: "Constant interruptions from the group chat" },
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
    { type: "chipList", key: "adaptationCommitments", label: "Adaptation strategy — behavioral commitments", hint: "“When working in unstructured teams, I will…”", seed: ["Create a mini-task outline for myself within the first 24 hours"] },
    { type: "text", key: "idealConditions", label: "My ideal work conditions", seed: "Quiet, morning hours, one clear deadline" },
    { type: "text", key: "adaptWhenNotIdeal", label: "How I will adapt when conditions aren't ideal", seed: "Build my own mini-structure inside someone else's loose plan" },
  ],

  16: [
    { type: "table", key: "decisionAudit", label: "Decision pattern identification", hint: "One row per decision — audit three real cases.", columns: [
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
    { type: "table", key: "experienceAudit", label: "Learning experience audit", hint: "Two effective cases, one ineffective — one row each.", columns: [
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
    { type: "textarea", key: "conversionAnalysis", label: "Knowledge-to-skill conversion analysis", hint: "Do I apply concepts immediately, or delay practice? Do I need repetition or teaching to fully understand?", rows: 2, seed: "I delay practice more than I should — teaching someone else is what actually locks it in." },
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
    { type: "text", key: "deepWorkHours", label: "Deep work hours (time of day)", section: "Focus block architecture", seed: "8–10am" },
    { type: "checklist", key: "trackingSystem", label: "Progress visibility & tracking system", section: "Tracking system", items: ["Written planner", "Digital task manager", "Visual board", "Habit tracker"], seedChecked: ["Digital task manager"] },
    { type: "textarea", key: "weeklyReview", label: "Weekly review & reset ritual", hint: "What moved my goals forward? What consumed time without value? Where did focus break down?", rows: 3, seed: "Every Friday at 4pm: review the week's log, name the top distraction, adjust one rule for next week." },
    { type: "textarea", key: "frictionRecovery", label: "Friction & recovery strategy", hint: "What usually causes me to fall off track? How quickly do I recover?", rows: 2, seed: "A bad night's sleep is my biggest predictor of a lost day — I recover fastest by doing one small task to rebuild momentum." },
    { type: "text", key: "productivityNonNegotiable", label: "My productivity non-negotiable", section: "Integration", seed: "The Friday weekly review happens no matter what" },
    { type: "text", key: "resetWhenOffTrack", label: "How I will reset when I fall off track", section: "Integration", seed: "Do one small, easy task first to rebuild momentum instead of tackling the hardest thing" },
  ],
};
