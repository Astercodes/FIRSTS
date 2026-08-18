export type TableColumn = { key: string; label: string; kind: "text" | "rating" };

export type WorksheetField =
  | { type: "textarea"; key: string; label: string; hint?: string; rows?: number; seed?: string }
  | { type: "text"; key: string; label: string; hint?: string; seed?: string }
  | { type: "chipList"; key: string; label: string; hint?: string; seed: string[] }
  | { type: "table"; key: string; label: string; hint?: string; columns: TableColumn[]; seedRows: Record<string, string | number>[] }
  | { type: "checklist"; key: string; label: string; hint?: string; items: string[]; seedChecked?: string[] }
  | {
      type: "research";
      key: string;
      label: string;
      hint?: string;
      sources: { title: string; domain: string; snippet: string }[];
      synthesisSeed?: string;
    };

export const WORKSHEET_SCHEMAS: Record<number, WorksheetField[]> = {
  2: [
    { type: "textarea", key: "futureSelfLetter", label: "Future Self Letter", hint: "Write to yourself, 5 years from now, describing an ordinary workday.", rows: 5, seed: "Dear me — right now it's a Tuesday. I spend the morning deep in focused work, then a 1:1 where I mentor someone newer than me. I leave by 6, and it doesn't feel like I'm racing the clock to do it." },
    { type: "textarea", key: "visionStatement", label: "Vision statement", hint: "One sentence, pulled from the letter above.", rows: 2, seed: "Building products people rely on daily, on a team small enough that my work is visible." },
    { type: "table", key: "goals", label: "Short / mid / long-term goals", columns: [
      { key: "horizon", label: "Horizon", kind: "text" },
      { key: "goal", label: "Goal", kind: "text" },
    ], seedRows: [
      { horizon: "Short-term (this year)", goal: "Ship one project I fully own end-to-end" },
      { horizon: "Mid-term (2–3 years)", goal: "Move into a role with direct mentoring responsibility" },
      { horizon: "Long-term (5+ years)", goal: "Lead a small, high-trust product team" },
    ] },
    { type: "table", key: "steppingStones", label: "Stepping stones", columns: [
      { key: "step", label: "Step", kind: "text" },
      { key: "byWhen", label: "By when", kind: "text" },
    ], seedRows: [
      { step: "Ask to lead a small feature end-to-end", byWhen: "Next quarter" },
      { step: "Start mentoring an intern informally", byWhen: "This year" },
    ] },
  ],

  3: [
    { type: "chipList", key: "peakExperiences", label: "Peak experiences", hint: "Moments you felt fully engaged or proud.", seed: ["Tutoring my cousin through algebra", "Fixing a broken sign-up process for a club", "Leading a group project no one else wanted to own"] },
    { type: "textarea", key: "recurringThemes", label: "Recurring themes", hint: "What's the pattern underneath all of them?", rows: 3, seed: "Every one of these involved taking something confusing and turning it into a system someone else could follow." },
    { type: "textarea", key: "purposeStatement", label: "Purpose statement", rows: 2, seed: "I turn confusion into a system other people can trust and follow." },
  ],

  4: [
    { type: "textarea", key: "identity", label: "Identity", rows: 2, seed: "A product-minded operator who's happiest turning messy processes into something repeatable." },
    { type: "textarea", key: "strengths", label: "Top strengths", rows: 2, seed: "Systems thinking, calm under ambiguity, translating technical detail for non-technical stakeholders." },
    { type: "textarea", key: "valueProp", label: "Value proposition", hint: "What do you make possible for a team that's hard to replace?", rows: 2, seed: "I make it possible for fast-moving teams to trust their own operations instead of firefighting them." },
    { type: "textarea", key: "narrative", label: "3–5 sentence narrative", rows: 4, seed: "I turn messy operations into decisions non-technical teams can act on. Over the last two years I've rebuilt three broken processes from scratch, each time cutting resolution time by more than half. I'm energized by ambiguity other people find stressful. What I want next is a team small enough to see my fingerprints on the outcome." },
    { type: "text", key: "linkedinVariant", label: "LinkedIn headline variant", seed: "Turning messy operations into decisions teams can actually act on." },
    { type: "text", key: "interviewVariant", label: "30-second interview variant", seed: "I fix broken processes — I've done it three times in two years, each time cutting resolution time in half." },
  ],

  5: [
    { type: "table", key: "skills", label: "Skill inventory", hint: "Confidence 1–5, with one piece of evidence per skill.", columns: [
      { key: "skill", label: "Skill", kind: "text" },
      { key: "confidence", label: "Confidence", kind: "rating" },
      { key: "evidence", label: "Evidence", kind: "text" },
    ], seedRows: [
      { skill: "SQL / data querying", confidence: 4, evidence: "Built the weekly reporting query the team still uses" },
      { skill: "Stakeholder communication", confidence: 5, evidence: "Ran client updates for a 6-month project solo" },
      { skill: "Conflict mediation", confidence: 3, evidence: "Talked down a scope disagreement between two leads" },
    ] },
  ],

  6: [
    { type: "chipList", key: "gaps", label: "Gap inventory", seed: ["Following up after meetings", "Public speaking under pressure", "Delegating instead of redoing work myself"] },
    { type: "table", key: "priority", label: "Priority ranking", columns: [
      { key: "gap", label: "Gap", kind: "text" },
      { key: "cost", label: "Cost (1–5)", kind: "rating" },
      { key: "action", label: "Improvement action", kind: "text" },
    ], seedRows: [
      { gap: "Following up after meetings", cost: 4, action: "Send a 3-line recap within 1 hour, every time" },
      { gap: "Delegating instead of redoing work", cost: 3, action: "Let one recurring task go fully to a teammate this month" },
    ] },
  ],

  7: [
    { type: "chipList", key: "interests", label: "Interest list", seed: ["Organizing community events", "Photography", "Explaining technical topics simply", "Cooking"] },
    { type: "table", key: "energyAudit", label: "Energy audit", columns: [
      { key: "interest", label: "Interest", kind: "text" },
      { key: "energy", label: "Energy (1–5)", kind: "rating" },
    ], seedRows: [
      { interest: "Organizing community events", energy: 5 },
      { interest: "Photography", energy: 3 },
      { interest: "Explaining technical topics simply", energy: 5 },
    ] },
    { type: "table", key: "mapping", label: "Passion → career mapping", columns: [
      { key: "passion", label: "Passion", kind: "text" },
      { key: "roles", label: "Possible roles", kind: "text" },
    ], seedRows: [
      { passion: "Organizing community events", roles: "Program manager, community lead, event ops" },
      { passion: "Explaining technical topics simply", roles: "Developer relations, technical writing" },
    ] },
  ],

  8: [
    { type: "research", key: "researchNotes", label: "Industry research", sources: [
      { title: "Occupational Outlook Handbook", domain: "bls.gov", snippet: "Employment in this sector is projected to grow faster than average over the next decade, driven by digital adoption." },
      { title: "State of the Industry Report", domain: "glassdoor.com", snippet: "Reported culture scores skew high on flexibility, lower on advancement clarity for early-career hires." },
    ], synthesisSeed: "Growth is real and sourced (BLS), but advancement clarity is a known weak point (Glassdoor) — worth asking about directly in interviews." },
    { type: "textarea", key: "brief", label: "One-page brief", rows: 5, seed: "Overview: steady, above-average growth driven by digital adoption. Trends: consolidation among mid-size players. Culture: flexible day-to-day, but advancement paths are inconsistently communicated — confirm this directly with any employer." },
  ],

  9: [
    { type: "research", key: "pathwayResearch", label: "Pathway research", sources: [
      { title: "Career trajectories in this field", domain: "linkedin.com", snippet: "Most people reach the target role after 2–3 years in an adjacent analytics or coordination role, not directly." },
    ], synthesisSeed: "Direct entry is rare — most real trajectories route through an adjacent role first." },
    { type: "table", key: "pathways", label: "Pathway table", columns: [
      { key: "family", label: "Role family", kind: "text" },
      { key: "entry", label: "Common entry point", kind: "text" },
      { key: "next", label: "Next step", kind: "text" },
    ], seedRows: [
      { family: "Strategy & Ops", entry: "Analyst", next: "Senior analyst → strategy associate" },
      { family: "Product", entry: "Customer success", next: "Associate PM → PM" },
    ] },
    { type: "textarea", key: "hypothesis", label: "Path hypothesis", rows: 2, seed: "Enter through an analytics-adjacent role, build a 2-year bridge, then move directly into the target function." },
  ],

  10: [
    { type: "research", key: "roleResearch", label: "Live posting research", sources: [
      { title: "8 postings reviewed for this title", domain: "linkedin.com/jobs", snippet: "\"Comfort presenting findings to stakeholders\" appeared in 6 of 8 postings; a specific certification appeared in only 2." },
    ], synthesisSeed: "Stakeholder presentation skills repeat far more than the certification I assumed was required." },
    { type: "table", key: "qualifications", label: "Qualification frequency", columns: [
      { key: "qualification", label: "Qualification", kind: "text" },
      { key: "frequency", label: "Seen in", kind: "text" },
    ], seedRows: [
      { qualification: "Stakeholder presentation experience", frequency: "6 of 8 postings" },
      { qualification: "Specific certification", frequency: "2 of 8 postings" },
    ] },
    { type: "table", key: "contacts", label: "Contact tracker", columns: [
      { key: "name", label: "Name", kind: "text" },
      { key: "company", label: "Company", kind: "text" },
      { key: "status", label: "Status", kind: "text" },
    ], seedRows: [
      { name: "—", company: "—", status: "Not yet contacted" },
    ] },
  ],

  11: [
    { type: "research", key: "salaryResearch", label: "Salary research", sources: [
      { title: "Compensation report", domain: "levels.fyi", snippet: "$70–78K reported for this title at larger tech employers." },
      { title: "Salary estimates", domain: "glassdoor.com", snippet: "$58–65K reported, skewed toward smaller companies in the same sample." },
    ], synthesisSeed: "The gap tracks with company size, not inconsistent data — larger employers cluster near the Levels.fyi range." },
    { type: "table", key: "salaryTable", label: "Multi-source salary table", columns: [
      { key: "source", label: "Source", kind: "text" },
      { key: "range", label: "Range", kind: "text" },
    ], seedRows: [
      { source: "Glassdoor", range: "$58K–65K" },
      { source: "Levels.fyi", range: "$70K–78K" },
    ] },
    { type: "text", key: "targetRange", label: "Target range (cost-of-living adjusted)", seed: "$64K minimum · $70K target · $76K stretch" },
  ],

  12: [
    { type: "textarea", key: "strengths", label: "Strengths (from your Strength Inventory)", rows: 2, seed: "SQL / data querying, stakeholder communication, conflict mediation." },
    { type: "textarea", key: "weaknesses", label: "Weaknesses (from your Weakness Awareness)", rows: 2, seed: "Following up after meetings, delegating instead of redoing work myself." },
    { type: "textarea", key: "opportunities", label: "Opportunities (from your Industry & Career Path research)", rows: 2, seed: "Sector growth is sourced and real; an adjacent-role bridge path is realistic within 2 years." },
    { type: "textarea", key: "threats", label: "Threats", rows: 2, seed: "The main risk isn't the market — it's not applying consistently enough to test the hypothesis." },
    { type: "textarea", key: "focusStatement", label: "90-day focus statement", rows: 2, seed: "Apply to five roles in the adjacent analytics track and log every qualification gap that comes up in feedback." },
  ],

  13: [
    { type: "chipList", key: "targetSkills", label: "Skill selection", hint: "Pulled from your gaps and research.", seed: ["Stakeholder presentation"] },
    { type: "text", key: "method", label: "Learning method", seed: "Weekly practice presentations to a peer, plus one short course" },
    { type: "text", key: "rhythm", label: "Practice rhythm", seed: "Tuesdays and Thursdays, 30 minutes" },
    { type: "table", key: "evidenceLog", label: "Evidence log", columns: [
      { key: "date", label: "Date", kind: "text" },
      { key: "note", label: "Evidence", kind: "text" },
    ], seedRows: [
      { date: "Week 1", note: "Presented findings to a peer, got feedback on pacing" },
    ] },
  ],

  14: [
    { type: "text", key: "assessmentType", label: "Assessment taken", seed: "CliftonStrengths" },
    { type: "textarea", key: "results", label: "Your results", rows: 3, seed: "Top themes: Learner, Achiever, Relator, Strategic, Responsibility." },
    { type: "textarea", key: "traitMapping", label: "Trait-to-career mapping", rows: 3, seed: "\"Learner\" explains why I thrive in steep ramp-up roles and get restless once a job becomes routine — worth weighting toward roles with regular new challenges." },
  ],

  15: [
    { type: "textarea", key: "preference", label: "How you prefer to work", rows: 2, seed: "Long, uninterrupted blocks — I do my best thinking without frequent context switches." },
    { type: "table", key: "observationLog", label: "1–2 week observation log", columns: [
      { key: "day", label: "Day", kind: "text" },
      { key: "note", label: "Observation", kind: "text" },
    ], seedRows: [
      { day: "Mon", note: "Frequent syncs broke up focus time" },
      { day: "Wed", note: "Best output came in a protected 2-hour block" },
    ] },
    { type: "textarea", key: "adaptationPlan", label: "Adaptation plan", rows: 2, seed: "Ask for two protected focus blocks a week instead of pushing back on every sync." },
  ],

  16: [
    { type: "table", key: "decisionAudit", label: "3-case decision audit", columns: [
      { key: "case", label: "Decision", kind: "text" },
      { key: "outcome", label: "Outcome", kind: "text" },
    ], seedRows: [
      { case: "Changed jobs in 2023", outcome: "Went well" },
      { case: "Signed an apartment lease quickly", outcome: "Went poorly" },
      { case: "Ended a long friendship", outcome: "Ambiguous" },
    ] },
    { type: "checklist", key: "biasChecklist", label: "Bias checklist", items: ["Sunk cost", "Confirmation bias", "Social pressure from the last person I spoke to", "Overconfidence in a fast decision"], seedChecked: ["Social pressure from the last person I spoke to"] },
    { type: "textarea", key: "framework", label: "Decision framework", rows: 3, seed: "Before any big decision, wait 24 hours and get input from someone who wasn't the last person I talked to about it." },
  ],

  17: [
    { type: "textarea", key: "caseNotes", label: "Case study notes", rows: 3, seed: "Reviewed reading, video, and \"teach it back\" as three learning methods to test." },
    { type: "table", key: "experiment", label: "3-day method experiment", columns: [
      { key: "day", label: "Day", kind: "text" },
      { key: "method", label: "Method", kind: "text" },
      { key: "retention", label: "Retention (1–5)", kind: "rating" },
      { key: "application", label: "Application (1–5)", kind: "rating" },
    ], seedRows: [
      { day: "Day 1", method: "Video tutorial", retention: 3, application: 2 },
      { day: "Day 2", method: "Reading + notes", retention: 3, application: 3 },
      { day: "Day 3", method: "Teach it to someone else", retention: 5, application: 5 },
    ] },
  ],

  18: [
    { type: "table", key: "timeAudit", label: "1-week time & distraction audit", columns: [
      { key: "day", label: "Day", kind: "text" },
      { key: "distraction", label: "Biggest distraction", kind: "text" },
      { key: "focusHours", label: "Focus hours", kind: "rating" },
    ], seedRows: [
      { day: "Mon", distraction: "Browser tab-switching", focusHours: 3 },
      { day: "Tue", distraction: "Browser tab-switching", focusHours: 2 },
      { day: "Wed", distraction: "Notifications", focusHours: 4 },
    ] },
    { type: "textarea", key: "focusBlockDesign", label: "Focus block design", rows: 2, seed: "Two 90-minute blocks each morning, tabs limited to the current task only." },
    { type: "textarea", key: "weeklyReview", label: "Weekly review ritual", rows: 2, seed: "Every Friday at 4pm: review the week's log, name the top distraction, adjust one rule for next week." },
  ],
};
