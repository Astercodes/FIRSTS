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
      "Core Values Audit is the intentional process of identifying your non-negotiable principles, lifestyle priorities, and ethical boundaries that guide both your career and personal decisions. It transforms vague instincts about \"what matters\" into concrete statements that act as a decision filter, helping you evaluate opportunities, navigate ethical dilemmas, and maintain alignment with long-term goals.",
    whyItMatters:
      "Many career frustrations are not caused by a lack of skill or intelligence, but by misalignment between personal values and work environment. When your workplace conflicts with your core values, stress rises, motivation dwindles, and internal tension accumulates. Defining your values early prevents reactive decisions and regret, allowing you to approach internships, projects, and job offers with confidence.",
    whenWhoWhere: [
      { label: "When", body: "Before committing to internships, selecting industries, accepting long-term roles, or navigating relocation, high-pressure cultures, or ethical gray areas." },
      { label: "Who", body: "Primarily personal reflection — sharpened by discussing your values with mentors, family, or supervisors who understand your character and long-term aspirations." },
      { label: "Where", body: "Your core values are most visible in moments of stress, ethical tension, trade-offs between compensation and balance, or conflicts with authority." },
    ],
    howItWorks: [
      "Create a list of values that resonate with you — integrity, freedom, excellence, stability, impact, faith, balance, autonomy, service.",
      "Narrow this list down to five values.",
      "Refine further to three non-negotiable principles that define the foundation of your career and life decisions.",
      "For each of these core values, describe what it looks like in practice and what constitutes a violation.",
      "Examine your desired lifestyle conditions — work hours, income, flexibility, location, and long-term life goals.",
      "Define your ethical boundaries by deciding in advance which compromises you will never make, no matter the opportunity.",
    ],
    tools: ["Reflective journaling", "Value-sorting exercises", "Lifestyle vision mapping", "Past ethical dilemma review"],
    scenario: {
      title: "Two internship offers",
      body: "A student receives two internship offers: one offers significantly higher pay but requires constant availability and questionable sales tactics, while the other offers moderate compensation, strong mentorship, and alignment with their long-term purpose. Because they'd already completed a Core Values Audit and identified integrity and balanced living as non-negotiable, the decision becomes straightforward — no second-guessing, stress, or regret later.",
    },
    pitfalls: [
      "Confusing flexible preferences with foundational, non-negotiable values",
      "Adopting values based on family, culture, or peer expectations without internal conviction",
      "Failing to anticipate value conflicts, like the tension between income and work-life balance, and feeling surprised when friction occurs",
    ],
    successSignal:
      "You can clearly state your top three non-negotiable values, describe what constitutes a violation of each, and consistently use them as a decision-making filter — with opportunities and offers evaluated against these principles rather than reacted to.",
    milestoneTies: [2, 15, 16],
  },

  2: {
    definition:
      "Career Vision is your earliest attempt to map out a meaningful professional future, serving as a personal compass that integrates your passions, values, and the kind of life you want to live. It is not about perfection or certainty — it is about creating a north star that informs your decisions and provides clarity when faced with competing options.",
    whyItMatters:
      "Many people chase degrees, jobs, or titles without fully understanding why, leading to wasted effort and career drift. A clearly defined career vision connects your experiences, education, and relationships to a larger purpose, protecting against being pulled by societal expectations, prestige, or short-term gains that don't align with your long-term goals.",
    whenWhoWhere: [
      { label: "When", body: "The earlier the better — high school, university, or early professional experience — but it's never too late, and it should be treated as a living document revisited regularly." },
      { label: "Who", body: "You are the primary owner — no one else can authentically define it for you — but mentors, career coaches, and older peers can sharpen your clarity." },
      { label: "Where", body: "Quiet, focused spaces free from distraction — a long walk, a retreat setting — plus exposure to career workshops and networking events that broaden perspective." },
    ],
    howItWorks: [
      "Explore your passions — write down the activities, subjects, or problems that excite you.",
      "Clarify your values by identifying what matters most, whether impact, freedom, security, creativity, or balance.",
      "Craft a short personal mission statement capturing what you want to contribute to the world.",
      "Paint a detailed picture of your ideal career — role, industry, lifestyle, and impact — over the next five to ten years.",
      "Break the vision into actionable short-term steps: internships, skill-building projects, networking goals.",
      "Set aside time for regular review and refinement as your experience and self-awareness grow.",
    ],
    tools: ["Start With Why (Simon Sinek)", "Designing Your Life (Burnett & Evans)", "StrengthsFinder / VIA / Holland Code", "Notion, Trello, or a journaling app"],
    scenario: {
      title: "James and the ten-year vision",
      body: "James entered university with little clarity beyond \"have a good job.\" In his first year, he wrote: \"In ten years, I want to work on projects that solve global infrastructure problems and create sustainable cities.\" That early articulation helped him choose an engineering internship in transportation over a higher-paying but unrelated desk job. Over five years, his path became increasingly focused while peers without a written vision drifted from role to role.",
    },
    pitfalls: [
      "Treating a career vision as a fixed endpoint rather than a flexible, evolving guide",
      "Defining the vision solely around money, status, or others' expectations rather than personal purpose",
      "Comparing your vision to peers' and overcomplicating the process instead of starting with simple, honest reflection",
    ],
    successSignal:
      "You can clearly and confidently answer \"Where do I see myself in five to ten years, and why?\" — and decisions about courses, internships, and relationships begin to align naturally, feeling intentional rather than reactive.",
    milestoneTies: [1, 15, 13],
  },

  3: {
    definition:
      "Personal Purpose Awareness is the intentional exploration and articulation of the deeper reason behind your ambitions, values, and long-term direction. It goes beyond \"What do I do?\" and focuses on \"Why does it matter?\" — the thread of contribution that guides your choices and anchors your motivation even when external rewards are delayed.",
    whyItMatters:
      "Career identity tells you what your work is; purpose tells you why it matters. Without clarity of purpose, achievement can feel hollow, comparison becomes distracting, and setbacks feel destabilizing. Purpose provides internal stability during transitions, rejection, or redirection, and sustains motivation when external recognition lags behind effort.",
    whenWhoWhere: [
      { label: "When", body: "During seasons of reflection, transition, or questioning — particularly before committing long-term to a career path, graduate study, or leadership responsibility." },
      { label: "Who", body: "A deeply personal process, enriched through conversation with mentors, spiritual leaders, or trusted family who've observed your character over time." },
      { label: "Where", body: "At the intersection of identity, values, strengths, and conviction — surfacing through recurring interests, problems that move you, and moments you feel most alive." },
    ],
    howItWorks: [
      "Reflect on what problems consistently move you emotionally.",
      "Identify the kind of people you feel naturally drawn to support or serve.",
      "Look for themes that have repeatedly appeared in your interests, leadership, or curiosity over time.",
      "Use these insights to articulate your purpose as a statement of contribution rather than a title — \"to advocate for fairness,\" not \"to become a lawyer.\"",
      "Refine the statement until it expresses direction, motivation, and contribution rather than external pressure.",
    ],
    tools: ["Journaling defining life moments", "Peak-experience mapping", "Feedback pattern review", "Mind maps / contribution charts"],
    scenario: {
      title: "The thread underneath business",
      body: "A student initially pursues business solely for financial stability. Through reflection, they realize that throughout high school and college they've consistently mentored younger students and built resources to help others develop skills. Their purpose becomes clear — not merely to \"work in business,\" but to design systems that empower others to reach their potential.",
    },
    pitfalls: [
      "Equating purpose with prestige, recognition, or dramatic accomplishments",
      "Expecting a sudden, lightning-bolt moment of clarity instead of observing gradual patterns",
      "Overlooking consistent small contributions in favor of chasing highly visible achievements",
    ],
    successSignal:
      "You can articulate a clear statement describing the impact you're committed to making, independent of job title or external validation — and your motivation becomes internally anchored rather than reactive to trends or comparison.",
    milestoneTies: [2, 1, 4],
  },

  4: {
    definition:
      "Personal Brand Narrative is the intentional crafting of a concise and coherent identity statement — typically three to five sentences — that communicates who you are, what you are building, what you are skilled at, and the direction you're moving toward. It transforms internal self-awareness into an external articulation you can share confidently with peers, mentors, and recruiters.",
    whyItMatters:
      "Many students understand their strengths and aspirations internally, yet struggle to express them when asked \"Tell me about yourself.\" Without a structured narrative, responses feel scattered or unfocused. A strong narrative converts internal clarity into external credibility, making introductions, interviews, and networking conversations more effective and opportunity-driven.",
    whenWhoWhere: [
      { label: "When", body: "After completing your Strength Inventory, Career Vision, Personality Assessment, and Core Values Audit — and especially before networking events, internship applications, or interviews." },
      { label: "Who", body: "Drafted by you, since it reflects your journey — refined through feedback from mentors, career advisors, or professionals in your target industry." },
      { label: "Where", body: "Applied across LinkedIn summaries, interview introductions, internship bios, networking conversations, and portfolios — and internally shapes how you view and position yourself." },
    ],
    howItWorks: [
      "Identify your current identity or role.",
      "Identify your key strengths or core competencies.",
      "Identify your focus area or industry direction.",
      "Identify the impact or contribution you aim to create.",
      "Combine these into a concise three-to-five-sentence narrative, avoiding generic phrases or vague descriptors.",
      "Iteratively refine your wording until it's natural to speak aloud and adaptable across contexts.",
    ],
    tools: ["Strength Inventory results", "Career Vision statement", "Core Values Audit", "Target-industry job descriptions"],
    scenario: {
      title: "From \"just my major\" to a focused pitch",
      body: "A student at a networking event initially responds to questions about their work with just their major — vague, and it stalls conversation. After this FIRST, they develop: \"I'm a finance student focused on data-driven decision-making in corporate strategy. I enjoy analyzing market trends and building financial models that support growth decisions. I'm currently developing experience in valuation and long-term capital planning, with the goal of contributing to strategic investment teams.\" The conversation becomes focused and the opportunities become clearer.",
    },
    pitfalls: [
      "Writing something vague, like \"I'm passionate about success and growth,\" that fails to communicate specificity or value",
      "Exaggerating experience, overloading with buzzwords, or sounding rehearsed and inauthentic",
      "Minimizing your own strengths out of insecurity",
    ],
    successSignal:
      "You can confidently introduce yourself in under one minute, with clarity and direction — others immediately understand your focus area, strengths, and intended contribution without further clarification.",
    milestoneTies: [2, 5, 14],
  },

  5: {
    definition:
      "Strength Inventory is your initial personal audit — a deliberate process of identifying what you excel at, both in technical areas (hard skills) and personal qualities (soft skills). It captures the natural abilities you bring to every situation and frames them as tools for professional growth.",
    whyItMatters:
      "Many students underestimate their abilities, chasing opportunities they think they should want rather than ones aligned with what they're genuinely good at. Recognizing your strengths builds confidence, enhances your resume, and lets you strategically seek internships and projects that amplify your natural talents rather than fighting to fit where you don't.",
    whenWhoWhere: [
      { label: "When", body: "Most effective early in university or at the start of your career search — but revisit it at each new stage, after internships or major projects, not as a one-time exercise." },
      { label: "Who", body: "Primary responsibility is yours, through honest self-reflection — trusted friends, teammates, professors, and mentors often notice strengths you overlook or undervalue." },
      { label: "Where", body: "Quiet, reflective journaling sessions, plus group settings like team projects where feedback and observation reveal natural tendencies." },
    ],
    howItWorks: [
      "Conduct a comprehensive brain dump of everything you believe you're good at — academic, technical, creative, interpersonal.",
      "Categorize these into hard skills (coding, writing, analysis) and soft skills (leadership, empathy, communication).",
      "Seek external feedback from peers, mentors, or supervisors to validate and expand your list.",
      "Take skills assessments — CliftonStrengths, LinkedIn Skills — to catch patterns you missed.",
      "Rank your top five strengths in each category, considering consistency and impact.",
      "Link your strengths to potential career paths by asking: \"Where can these skills create the most value?\"",
    ],
    tools: ["Now, Discover Your Strengths (Buckingham)", "CliftonStrengths / Myers-Briggs / DISC", "LinkedIn Skill Quizzes", "Notion / Trello for tracking"],
    scenario: {
      title: "\"No real skills,\" until she wrote them down",
      body: "Chidinma, a first-year student, believed she had \"no real skills.\" Writing down everything she did naturally, she discovered she consistently organized group projects, explained complex topics to peers, and wrote clear, structured reports. These weren't trivial — they were soft skills employers actively seek, and acknowledging them positioned her as a team leader during her internship.",
    },
    pitfalls: [
      "Confusing interests or hobbies with actual strengths — enjoying a task doesn't mean proficiency",
      "Focusing exclusively on hard skills while neglecting equally valuable soft skills",
      "Creating a list of strengths but never testing, developing, or applying them",
    ],
    successSignal:
      "You can confidently answer \"What are your top three strengths, and how have you used them?\" without hesitation — and your resume, LinkedIn, and conversations begin to reflect these strengths consistently.",
    milestoneTies: [2, 6],
  },

  6: {
    definition:
      "Weakness Awareness is the intentional practice of identifying areas where you lack skills, confidence, or consistency. It is not self-criticism — it's a focused effort to illuminate blind spots that, once addressed, become sources of growth. Weaknesses are signals highlighting where structured effort, learning, or support can transform limitations into strengths.",
    whyItMatters:
      "While many students concentrate exclusively on their strengths, unacknowledged weaknesses can block promotions, strain relationships, or jeopardize job security. Early recognition lets you plan proactively — improve what's essential, manage what's less critical, or partner with colleagues whose strengths complement your gaps.",
    whenWhoWhere: [
      { label: "When", body: "Most effective after completing your Strength Inventory — revisited regularly, particularly before internships or after receiving performance feedback." },
      { label: "Who", body: "Starts with honest self-reflection; professors, mentors, and supervisors can offer insight into recurring patterns or skill gaps they observe in your work." },
      { label: "Where", body: "Often emerges in group projects, presentations, or tests — formal performance reviews and mentor check-ins offer structured opportunities to gain insight." },
    ],
    howItWorks: [
      "List recurring struggles or challenges — from procrastination and presentation anxiety to technical gaps.",
      "Seek external feedback by asking a focused question: \"What is one area where I can improve?\"",
      "Categorize weaknesses into fixable (skills you can learn) and manageable (traits requiring compensatory strategies).",
      "Identify your top two or three priority weaknesses that most limit your growth.",
      "Create a concrete improvement plan — courses, mentorship sessions, or dedicated practice routines.",
      "Track progress monthly, documenting improvements, challenges, and lessons learned.",
    ],
    tools: ["360-degree feedback", "So Good They Can't Ignore You (Newport)", "Atomic Habits (Clear)", "Coursera / Udemy / VirtualSpeech"],
    scenario: {
      title: "From freezing up to leading team pitches",
      body: "Samuel excelled academically in Computer Science but froze during presentations despite his technical competence. Recognizing his real weakness was communication, not knowledge, he joined a debate club and practiced short presentations weekly. Within six months he transformed the weakness into a professional advantage, confidently leading team pitches.",
    },
    pitfalls: [
      "Denial — pretending weaknesses don't exist or minimizing their impact",
      "Overgeneralizing (\"I'm bad at everything\") instead of naming the specific gap",
      "Identifying weaknesses but never following up with deliberate action",
    ],
    successSignal:
      "You can clearly state: \"My main weakness is [this], and here is how I am actively working on it\" — owning gaps confidently instead of hiding or avoiding them.",
    milestoneTies: [5],
  },

  7: {
    definition:
      "Passion Alignment is the intentional process of connecting what excites you — the activities, topics, and causes that energize and motivate you — with real-world career opportunities. It's about identifying passions that can sustain long-term commitment, inspire excellence, and give purpose to your career journey, not chasing fleeting hobbies.",
    whyItMatters:
      "Many graduates pursue jobs solely for financial reward or prestige, only to become disengaged or burnt out. Aligning your passions with career paths keeps you motivated during challenging projects and helps you stand out in interviews. When passion meets opportunity, you perform with authenticity, creativity, and resilience.",
    whenWhoWhere: [
      { label: "When", body: "Most effective early in academic or career exploration — but also critical to revisit whenever you feel \"stuck\" or disconnected from your current path." },
      { label: "Who", body: "Begins with your own journaling and reflection; mentors and career advisors help map passions to realistic opportunities, and informational interviews reveal how passions translate into real roles." },
      { label: "Where", body: "Quiet, reflective spaces for journaling, plus career fairs, volunteering, and professional events that let you test interests firsthand." },
    ],
    howItWorks: [
      "List your passions — topics, activities, and causes that genuinely excite you.",
      "Identify career fields that could connect with those passions.",
      "Research each field by reviewing job descriptions, industry requirements, and professional pathways.",
      "Test your passions through small projects, volunteering, or short internships.",
      "Create a passion–career map: passions in one column, related roles in another, ranked High / Medium / Low fit.",
      "Select one \"anchor passion\" to guide your short-term internship and skill-development choices.",
    ],
    tools: ["What Color Is Your Parachute?", "Myers-Briggs / Holland Code tests", "O*NET, 16personalities.com", "Idealist.org / Catchafire.org"],
    scenario: {
      title: "From \"safe\" accounting to event coordination",
      body: "Chinwe always loved organizing campus events but assumed it could never be a career, pursuing accounting because it felt \"safe.\" After a passion alignment exercise, she realized event management and project coordination were legitimate paths that leveraged her natural enthusiasm. An internship at a local event-planning firm led to a project coordinator role at a consulting firm.",
    },
    pitfalls: [
      "Confusing hobbies or casual interests with sustainable career passions",
      "Ignoring financial realities — not every passion immediately provides economic sustainability",
      "Chasing someone else's dream — parents', peers', or society's — instead of your authentic interest",
    ],
    successSignal:
      "You can confidently say: \"I am passionate about X, and I have identified roles like Y and Z that let me live that passion daily\" — with career choices increasingly feeling purposeful rather than arbitrary.",
    milestoneTies: [5, 6],
  },

  8: {
    definition:
      "Industry Insight is the intentional effort to understand how a specific field operates — trends, growth opportunities, challenges, and the distinctive cultures of companies within it. It goes beyond job titles or salary ranges, focusing on the forces that shape the field so your decisions are informed and strategic rather than speculative.",
    whyItMatters:
      "Entering a career without industry insight is like walking into a room blindfolded. Employers expect candidates to understand emerging technologies, market shifts, and operational challenges. Industry insight lets you ask insightful interview questions, identify overlooked opportunities, and assess whether an industry is stable, growing, or contracting.",
    whenWhoWhere: [
      { label: "When", body: "Most beneficial cultivated early, ideally while still in school, and revisited continuously since industries evolve rapidly — especially critical before internship or job applications." },
      { label: "Who", body: "Industry professionals via LinkedIn or alumni networks, professors and career advisors, thought leaders and analysts, and peers currently working in your field of interest." },
      { label: "Where", body: "Company websites, industry reports, and Glassdoor for foundational knowledge; networking events and webinars for direct exposure; internships or shadowing for firsthand experience." },
    ],
    howItWorks: [
      "Select your target industry — technology, healthcare, consulting, energy, or another field of interest.",
      "Research current trends and growth areas within it.",
      "Review company reports — mission statements, values, financial summaries.",
      "Study cultural indicators through employee reviews, social media presence, and leadership styles.",
      "Follow thought leaders and conduct informational interviews with industry insiders.",
      "Summarize your findings in a one-page industry profile.",
    ],
    tools: ["Glassdoor / Indeed / Blind", "LinkedIn industry reports", "Harvard Business Review", "O*NET"],
    scenario: {
      title: "Fintech was more than mobile banking",
      body: "Ada was fascinated by fintech but initially thought it only involved mobile banking. Through informational interviews, she learned about blockchain payments, fraud detection, and cross-border transfers. This insight reshaped her focus — instead of applying broadly, she targeted fraud-prevention startups, a fast-growing niche aligned with her skills.",
    },
    pitfalls: [
      "Researching only surface-level facts, like job titles or salaries, without understanding the broader context",
      "Believing stereotypes (\"all bankers work 100-hour weeks\") that distort judgment",
      "Treating research as a one-time task instead of an ongoing process in a rapidly changing environment",
    ],
    successSignal:
      "You can confidently articulate: \"I am pursuing this role because the industry is shifting toward X, and I see opportunities in Y. I also value companies with Z culture, which is why I'm targeting these organizations.\"",
    milestoneTies: [2, 7],
  },

  9: {
    definition:
      "Career Path is the structured exploration of the \"role families\" and progression ladders within your chosen industry. It's not about locking yourself into a single position but seeing the broader map of possibilities before choosing your starting point, so you can strategically plan early choices toward long-term objectives.",
    whyItMatters:
      "Without clarity on career pathways, people often chase roles that look attractive short-term but offer limited upward mobility. Knowing how entry-level positions connect to mid-level and senior roles lets you plan strategically, avoid dead-end roles, and stay flexible if your ideal starting role isn't available.",
    whenWhoWhere: [
      { label: "When", body: "Ideally explored after clarifying your Career Vision, Strength Inventory, Weakness Awareness, Passion Alignment, and Industry Insight — before choosing specific internships." },
      { label: "Who", body: "Career counselors, industry professionals who've advanced within role families, alumni three to ten years ahead of you, and professional associations publishing role ladders." },
      { label: "Where", body: "Company career-progression charts, LinkedIn career journeys, O*NET role clusters, and salary/career reports like Glassdoor or Payscale." },
    ],
    howItWorks: [
      "Select one or two industries you're most interested in pursuing.",
      "Identify core role families within each — grouping positions that share similar skills.",
      "Map sample pathways tracing how professionals typically progress from entry-level to senior.",
      "Identify overlaps between families, recognizing that some skills transfer across functions.",
      "Mark growth opportunities by researching which families are expanding versus contracting.",
      "Draft a preliminary \"path hypothesis\" and validate it through conversations with mid-career professionals.",
    ],
    tools: ["O*NET Career Pathway Tool", "LinkedIn Career Explorer", "Glassdoor Career Path", "What Color Is Your Parachute?"],
    scenario: {
      title: "SOC Analyst as a strategic gateway",
      body: "Kwame wanted to become a cybersecurity consultant but wasn't sure where to begin. Researching role families, he found multiple entry points — SOC Analyst, Risk Analyst, IT Auditor. LinkedIn profiles showed many consultants started as SOC Analysts, moved into Threat Intelligence, then advisory roles. He targeted SOC internships as a deliberate gateway.",
    },
    pitfalls: [
      "Treating career paths as strictly linear, when progression often involves lateral moves and pivots",
      "Overcommitting to a single role without exploring related families",
      "Copying someone else's path without considering your own strengths, passions, and vision",
    ],
    successSignal:
      "You can name at least three role families within your industry, outline two to three potential pathways from entry to advanced positions, and have a written \"path hypothesis,\" even if flexible.",
    milestoneTies: [8, 10],
  },

  10: {
    definition:
      "Role Research is the intentional process of investigating specific internships and entry-level job titles to understand what employers expect, what daily work entails, and which roles align with your strengths and long-term plan. It goes beyond reading postings — decoding responsibilities, tools, and company signals into a usable picture of each role.",
    whyItMatters:
      "Many early-career professionals waste time chasing poorly matched roles, leading to frustration and slow progress. Role research saves time, reduces guesswork, and helps you tailor applications to what hiring managers actually care about, plan which skills you need, and spot high-demand niches.",
    whenWhoWhere: [
      { label: "When", body: "As early as possible, ideally your first year — becomes especially critical before applying to internships, and should be revisited quarterly." },
      { label: "Who", body: "Career services staff, alumni and current employees in the role, and — where possible — hiring managers or recruiters directly." },
      { label: "Where", body: "Job boards like LinkedIn Jobs, Indeed, and Handshake; company career pages; Glassdoor and Blind for culture insight; informational interviews for on-the-ground perspective." },
    ],
    howItWorks: [
      "Choose three to five target industries based on your Career Vision, Passion Alignment, and Strength Inventory.",
      "Collect five to ten job postings per role of interest from different companies.",
      "Deconstruct each posting — core responsibilities, must-have vs. nice-to-have skills, required tools, keywords.",
      "Map your fit by labeling each essential as \"have,\" \"partial,\" or \"missing,\" prioritizing roles at 60–80% match.",
      "Plan short-term actions to close gaps — courses, mini-projects, shadowing.",
      "Validate through two to three informational interviews, then tailor your resume and cover letter.",
    ],
    tools: ["LinkedIn, Handshake, Indeed, AngelList", "Glassdoor and Blind", "O*NET", "Alumni career portals"],
    scenario: {
      title: "Product manager vs. software engineer",
      body: "Aisha initially thought \"product manager\" and \"software engineer\" were practically the same. Collecting and deconstructing multiple postings for both, she noticed product management emphasized stakeholder communication and roadmap planning, while engineering focused on system design and code. Recognizing her strength in communication, she pursued product management and tailored her applications accordingly.",
    },
    pitfalls: [
      "Reading only one job posting and deciding based on a single listing",
      "Chasing exact titles rather than focusing on responsibilities and required skills, which vary across organizations",
      "Waiting to apply until you feel \"perfect,\" delaying opportunities unnecessarily",
    ],
    successSignal:
      "You can describe, in one to two minutes, what someone in the role does daily, list the top five skills and tools hiring managers prioritize, and have tailored your resume to role-specific language.",
    milestoneTies: [2, 8],
  },

  11: {
    definition:
      "Salary Benchmarking is the process of researching and comparing pay ranges for specific roles in your target industry, location, and experience level. It's not about chasing the highest possible number or undervaluing yourself — it's about clarity, preparation, and informed decision-making so you can negotiate confidently.",
    whyItMatters:
      "Salary benchmarking prevents you from underestimating your worth or accepting unfair compensation. Many early-career professionals are unaware of market rates, leading to being underpaid or discouraged by below-expectation offers. It also helps you factor in total compensation — benefits, bonuses, flexibility — not just base pay.",
    whenWhoWhere: [
      { label: "When", body: "Before applying to internships or your first full-time job, and updated again before negotiations or accepting an offer." },
      { label: "Who", body: "You are the primary researcher; career services staff, alumni in your target roles, and HR professionals can add real-world and negotiation context." },
      { label: "Where", body: "Glassdoor, Payscale, Levels.fyi, Salary.com, and LinkedIn Salary; cost-of-living calculators like Numbeo adjust figures for your target location." },
    ],
    howItWorks: [
      "Select a target role and geographic location.",
      "Use two to three salary research tools to gather and cross-check ranges — low, high, and median.",
      "Adjust figures for cost-of-living differences.",
      "Include benefits in your assessment — health insurance, bonuses, stipends, remote flexibility.",
      "Ask professionals during informational interviews about realistic expectations for newcomers.",
      "Document findings and define your acceptable salary range.",
    ],
    tools: ["Glassdoor / Payscale / Levels.fyi", "LinkedIn Salary / Salary.com", "Numbeo / NerdWallet", "Bureau of Labor Statistics"],
    scenario: {
      title: "$15,000 more than she guessed",
      body: "Chidera was caught off guard by a salary question in her first interview and gave a random figure, far below market. After researching, she found the average starting salary for her role was roughly $15,000 higher than her guess. In her next interview she stated a researched range with confidence and secured fair compensation.",
    },
    pitfalls: [
      "Relying on a single source of salary data without cross-checking",
      "Forgetting to adjust for location or cost of living",
      "Focusing too rigidly on base pay while ignoring benefits and growth opportunities",
    ],
    successSignal:
      "You can confidently state a researched salary range during interviews, recognize when an offer is fair or below market, and factor in benefits and cost-of-living adjustments.",
    milestoneTies: [9, 10, 5],
  },

  12: {
    definition:
      "Career SWOT Analysis is a structured reflection that helps you understand where you currently stand by examining your internal strengths and weaknesses alongside the external opportunities and threats around you. It gives language and structure to thoughts that many students feel but struggle to organize.",
    whyItMatters:
      "At the early stage of a career, effort alone is not enough. Many students work hard but feel lost because they aren't sure what's helping them move forward and what's quietly holding them back. A Career SWOT lets you lean into what you already do well, take ownership of gaps without shame, and prepare for challenges before they slow you down.",
    whenWhoWhere: [
      { label: "When", body: "Best done after writing your initial career vision and reflecting on strengths and weaknesses — especially useful before applying for internships, and revisited after any major milestone." },
      { label: "Who", body: "Belongs to you, but becomes more powerful shaped with a mentor, lecturer, career advisor, or trusted peer who can help you see patterns you might overlook." },
      { label: "Where", body: "A quiet, reflective space where you can think honestly without distraction — often the same journal or workspace where your other career reflections live." },
    ],
    howItWorks: [
      "Honestly describe what you already bring to the table — skills, experiences, behaviors, and mindsets that consistently show up as strengths.",
      "Reflect on areas where you feel less confident or where feedback has highlighted gaps.",
      "Widen your view to identify opportunities — growing industries, internships, mentors, programs, trends.",
      "Acknowledge external threats — competition, limited access, economic conditions, changing skill requirements.",
      "Look for patterns and ask which single adjustment would most improve your position next.",
    ],
    tools: ["Career feedback and internship reviews", "Job descriptions and industry articles", "Your Career Vision and Strength Inventory entries"],
    scenario: {
      title: "Naming the discomfort clearly",
      body: "As she approached graduation, Zainab knew she was analytically strong but avoided speaking in group settings and felt intimidated during presentations. She noticed roles she wanted increasingly valued communication and storytelling. Her Career SWOT helped her name this clearly, and she intentionally joined a student organization to practice speaking in low-pressure settings.",
    },
    pitfalls: [
      "Being either too critical or too generous with yourself",
      "Minimizing your strengths out of humility, or avoiding naming weaknesses out of fear",
      "Identifying weaknesses or threats without deciding how to respond, turning awareness into anxiety instead of action",
    ],
    successSignal:
      "Your next steps feel clearer and more grounded — instead of feeling overwhelmed by options, you feel strategically focused, with a better understanding of where to invest your time and energy.",
    milestoneTies: [13, 5, 6],
  },

  13: {
    definition:
      "Skill Growth Plan is a deliberate, written roadmap that outlines which skills you'll intentionally develop over the next six to twelve months and the specific methods you'll use to grow them. It turns skill-building into a structured, actionable process connected to your broader career vision, rather than leaving it to chance.",
    whyItMatters:
      "Without a focused plan, people accumulate disconnected knowledge — courses and certifications without understanding how each contributes to long-term goals. A Skill Growth Plan builds capabilities that compound over time and directly support the roles and pathways you've identified elsewhere in the FIRSTS framework.",
    whenWhoWhere: [
      { label: "When", body: "Immediately after completing your Career SWOT analysis, while your strengths, weaknesses, and gaps are fresh — revisited quarterly as your goals evolve." },
      { label: "Who", body: "You own and execute it, but mentors, lecturers, and industry professionals help identify which skills are high-impact versus \"nice-to-have.\"" },
      { label: "Where", body: "Documented alongside your other FIRST exercises — a notebook or digital workspace like Notion, Trello, or Google Docs kept accessible in your primary workflow." },
    ],
    howItWorks: [
      "Review your Career Vision, Strength Inventory, Weakness Awareness, and Passion Alignment to identify the most critical skills for your next steps.",
      "Categorize skills into technical abilities, communication, critical thinking, or professional habits.",
      "Prioritize a small set — typically three to five skills — that will deliver the highest impact.",
      "Define what \"competence\" looks like for each skill in observable terms.",
      "Assign realistic timelines and identify the most effective learning methods.",
    ],
    tools: ["Coursera / Udemy / Skillshare", "Mentorship sessions", "Job descriptions and industry skill maps", "Hands-on practice projects"],
    scenario: {
      title: "Choosing three skills instead of everything",
      body: "During her final year, Tunde felt overwhelmed by the pressure to learn everything at once — coding, public speaking, design, leadership. Creating a Skill Growth Plan, she realized focusing on analytical tools, professional writing, and project coordination would provide the strongest foundation for her first role, letting her make measurable progress instead of burning out.",
    },
    pitfalls: [
      "Trying to learn too many skills simultaneously, resulting in shallow mastery everywhere",
      "Prioritizing trendy skills that don't align with your actual career goals",
      "Assuming course completion equals skill acquisition — real growth requires deliberate practice and application",
    ],
    successSignal:
      "Your learning is focused and purposeful, your confidence increases in targeted areas, and you can clearly articulate which skills you're developing, why they matter, and how they support your career path.",
    milestoneTies: [12, 6, 10],
  },

  14: {
    definition:
      "Personality Assessment is the intentional process of studying your innate tendencies — how you make decisions, respond to pressure, communicate, and approach work — using structured tools such as personality or behavioral assessments. It's a moment to observe yourself deliberately, not to assign rigid labels, but to gain clarity on the patterns that shape your behavior.",
    whyItMatters:
      "Many early-career challenges aren't about lacking skills but about poor fit — being in environments that clash with your natural approach. Personality awareness lets you identify settings where you thrive, select roles that amplify your strengths, and communicate your working style effectively instead of second-guessing yourself.",
    whenWhoWhere: [
      { label: "When", body: "Most effective early in your career foundation stage, ideally before or during internships or your first job — revisited as you gain experience and maturity." },
      { label: "Who", body: "Primarily completed on your own, with impact increasing when discussed with mentors, supervisors, or trusted peers who observe how you actually show up in real-world contexts." },
      { label: "Where", body: "Quiet, reflective settings such as your personal workspace, structured career planning sessions, or mentoring conversations." },
    ],
    howItWorks: [
      "Select one or two reputable personality or behavioral assessments — MBTI, DISC, or StrengthsFinder.",
      "Complete the assessments thoughtfully.",
      "Study the results as guides to tendencies rather than fixed labels.",
      "Compare the insights with your real experiences — school projects, internships, leadership roles.",
      "Translate these insights into practical adjustments to communication style, teamwork, or role selection.",
    ],
    tools: ["MBTI / DISC / StrengthsFinder", "Reflection journal", "Career coaching guides", "Peer observation checklist"],
    scenario: {
      title: "Naming what drains you",
      body: "A student discovers through a personality assessment that they thrive on structure and clarity but become drained in chaotic environments. This explains why they feel frustrated during group projects without defined roles, and why they excel when timelines are established. Instead of blaming themselves, they begin seeking internships and teams that value organization and planning.",
    },
    pitfalls: [
      "Treating assessment results as immutable limits rather than tendencies to understand and adapt",
      "Relying solely on the test without comparing insights against real-world behavior",
      "Using personality labels as excuses to avoid growth",
    ],
    successSignal:
      "You can clearly articulate how you work best, identify which environments energize or drain you, and explain how you might adapt your communication style to collaborate more effectively.",
    milestoneTies: [15, 16, 4],
  },

  15: {
    definition:
      "Work Style Awareness is the deliberate process of discovering how you naturally approach work — organizing tasks, processing information, collaborating, managing energy, and responding to structure, autonomy, pressure, and feedback. It's about observing your habitual patterns in real-world contexts so you understand not just what you can do, but how you do it best.",
    whyItMatters:
      "Many frustrations in early internships and jobs aren't caused by a lack of ability, but by being in situations that conflict with your natural workflow. Understanding your work style lets you choose roles wisely, communicate your needs effectively, and avoid unnecessary burnout or underperformance.",
    whenWhoWhere: [
      { label: "When", body: "Ideally completed before internships, team-based assignments, or your first full-time job — and revisited whenever your responsibilities or team dynamics change significantly." },
      { label: "Who", body: "Your own reflection, enriched by feedback from classmates, teammates, or supervisors who've observed your work habits in real situations." },
      { label: "Where", body: "Develops through lived experience — group projects, internships, volunteer roles, and independent projects, each offering clues about how you respond to structure and pressure." },
    ],
    howItWorks: [
      "Observe your natural approach to tasks — planning before acting, or learning through doing.",
      "Notice whether you prefer working independently or brainstorming aloud with others.",
      "Notice your reactions to deadlines, ambiguity, interruptions, and collaborative dynamics.",
      "Pay attention to environments that energize you versus those that drain focus.",
      "Reflect on patterns across multiple tasks and settings, not single experiences in isolation.",
    ],
    tools: ["Performance reviews", "Peer and mentor feedback", "Reflection journaling", "Personality and learning-style assessments"],
    scenario: {
      title: "Uninterrupted blocks over constant task-switching",
      body: "A student realizes they produce their best work when tasks are clearly defined and deadlines are visible, but struggle in loosely organized teams. During an internship, they notice output improves dramatically with long blocks of uninterrupted focus rather than constant task-switching. Naming this pattern lets them communicate preferences and develop coping strategies without self-blame.",
    },
    pitfalls: [
      "Treating work style as a fixed label and using it as an excuse to avoid new challenges",
      "Assuming others share your style and becoming frustrated when they don't",
    ],
    successSignal:
      "You can clearly describe how you work best, where you struggle, and which conditions enhance or impede your performance — and you can adjust your approach when necessary.",
    milestoneTies: [14, 18],
  },

  16: {
    definition:
      "Thinking & Decision-Making Style is the intentional process of discovering how you naturally analyze information, interpret problems, weigh risks, and reach conclusions — whether analytical or intuitive, fast or deliberate, data-driven or principle-driven, independent or consultative.",
    whyItMatters:
      "In the early stages of a career, outcomes are shaped far more by the quality of your decisions under pressure than by raw talent. Awareness of your thinking style lets you leverage natural strengths — speed, intuition, analytical rigor — while addressing weaknesses like blind spots, reactive habits, or indecision.",
    whenWhoWhere: [
      { label: "When", body: "Most valuable after you've had exposure to real-world decision-making — choosing courses, leading projects, navigating internships — and especially before high-stakes choices." },
      { label: "Who", body: "Primarily personal reflection, deepened by feedback from mentors, supervisors, or peers who've observed your decision-making in complex or pressured situations." },
      { label: "Where", body: "Most visible in ambiguous situations, tight deadlines, conflict resolution, risk evaluation, and high-stakes decisions where outcomes carry real consequences." },
    ],
    howItWorks: [
      "Review recent decisions you've made, including both successes and mistakes.",
      "Ask: Did I rely on data or instinct? Did I decide independently or consult others? Did I act quickly or deliberate?",
      "Look for recurring patterns across multiple decisions rather than single events.",
      "Assess whether your default approach led to positive results or contributed to problems.",
      "Identify strategies to improve — personal rules to pause before high-impact decisions, structured evaluation frameworks.",
    ],
    tools: ["Decision journaling", "Post-project retrospectives", "Pros/cons lists, risk matrices", "Mentor and peer feedback"],
    scenario: {
      title: "A personal rule for high-stakes calls",
      body: "A student notices that under tight deadlines, they make rapid decisions without gathering sufficient data — fine for minor tasks, costly on complex projects. They implement a personal rule: for decisions affecting others or significant outcomes, pause to gather structured information before acting, building a balance between speed and accuracy.",
    },
    pitfalls: [
      "Assuming your natural thinking style is always correct",
      "Confusing speed with competence, or hesitation with wisdom",
      "Ignoring context — no single approach works for every decision",
    ],
    successSignal:
      "You can clearly articulate how you process information, recognize where you're prone to bias, and describe the safeguards you implement to improve decision quality.",
    milestoneTies: [14, 15],
  },

  17: {
    definition:
      "Learning Style Awareness is the intentional process of discovering how you best process new information, build understanding, retain knowledge, and convert theory into applied skill — whether through reading, listening, observing, practicing, teaching, or structured repetition.",
    whyItMatters:
      "Many students assume poor performance reflects a lack of ability, when it often results from misaligned learning methods. Understanding your learning style lets you design smarter study and practice systems, accelerate skill acquisition, and reduce frustration.",
    whenWhoWhere: [
      { label: "When", body: "Best completed early in your academic or career journey — and revisited whenever learning new material is taking longer than expected." },
      { label: "Who", body: "Primarily your own responsibility, validated by feedback from teachers, mentors, or peers who observe how you acquire and apply knowledge." },
      { label: "Where", body: "Revealed in classrooms, online courses, workshops, self-study sessions, and real project work — visible in the outcomes of your learning, not just your preferences." },
    ],
    howItWorks: [
      "Reflect on past situations where you learned material quickly and applied it effectively.",
      "Identify the methods used — reading, watching demonstrations, discussing, practicing, or teaching others.",
      "Consider experiences where progress was slow or frustrating, and identify those approaches too.",
      "Compare patterns across experiences to detect which methods consistently lead to stronger retention.",
      "Deliberately experiment with different methods in current learning scenarios to confirm your conclusions.",
    ],
    tools: ["Learning journal", "Past study-habit review", "Structured method experiments", "Personality and Work Style Awareness entries"],
    scenario: {
      title: "Rewriting in your own words beats the lecture",
      body: "A student realized long lectures drained their attention and left them struggling to remember content, but they retained concepts deeply when they rewrote material in their own words and applied it through small practice exercises. Redesigning their study method around active recall and immediate application led to measurable improvement.",
    },
    pitfalls: [
      "Assuming learning style is merely a preference rather than an evidence-based insight from performance outcomes",
      "Using \"learning style\" as an excuse to avoid uncomfortable but necessary formats",
      "Failing to stay adaptable, since different topics may require different approaches",
    ],
    successSignal:
      "You can clearly articulate how you absorb information most effectively, how you convert knowledge into practical skill, and what adjustments you make when the environment doesn't match your preferred method.",
    milestoneTies: [13],
  },

  18: {
    definition:
      "Productivity & Focus System is the intentional design of how you plan your time, protect your focus, and recover when things fall off track. Rather than leaving execution to willpower alone, this FIRST builds a repeatable structure — priorities, focus blocks, and a weekly review — so effort turns into visible progress instead of busyness.",
    whyItMatters:
      "Without a system, students plan vaguely, work reactively, and confuse busyness with progress. With one, they build structured execution, focus discipline, and recovery resilience — the difference between a semester that feels productive and one that just feels exhausting.",
    whenWhoWhere: [
      { label: "When", body: "Most useful once you're carrying real academic or work responsibilities — and worth rebuilding at the start of any new season, semester, or role." },
      { label: "Who", body: "Primarily self-designed and self-audited, though a mentor or accountability partner can help you notice patterns you're too close to see." },
      { label: "Where", body: "Wherever you actually work day to day — logged in real time, since a productivity system built on guesswork rarely survives contact with a real week." },
    ],
    howItWorks: [
      "Track your time and distractions honestly for one full week.",
      "Summarize peak focus periods, common distractions, and overcommitment patterns.",
      "Define a weekly outcome rule — how many major goals you'll realistically advance per week.",
      "Design your focus-block architecture — length, environment, and phone/distraction policy.",
      "Set a progress-tracking method and a weekly review ritual to keep the system honest.",
    ],
    tools: ["Time and distraction log", "Written planner or digital task manager", "Habit tracker", "Weekly review template"],
    scenario: {
      title: "The distraction that wasn't the phone",
      body: "A student assumed their phone was the main distraction derailing their focus. A full week of honest tracking revealed the real culprit was constant context-switching between browser tabs — a habit no screen-time app would have caught. The fix was a simple tab-limit rule, not a blocking app.",
    },
    pitfalls: [
      "Logging an idealized day instead of what actually happened",
      "Designing focus blocks around when you think you should be productive, not when your real data shows you are",
      "Skipping the weekly review, so the system quietly decays after week one",
    ],
    successSignal:
      "You can name your single biggest real distraction from a week of honest data, and you have a weekly review slot already on your calendar to keep adjusting the system.",
    milestoneTies: [15, 6, 16],
  },
};
