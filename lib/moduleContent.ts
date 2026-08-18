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
  19: "reflective",
  20: "reflective",
  21: "reflective",
  22: "reflective",
  23: "reflective",
  24: "reflective",
  25: "reflective",
  26: "reflective",
  27: "reflective",
  28: "reflective",
  29: "reflective",
  30: "reflective",
  31: "reflective",
  32: "reflective",
  33: "reflective",
  34: "reflective",
  35: "reflective",
  36: "reflective",
  37: "reflective",
  38: "reflective",
  39: "reflective",
  40: "reflective",
  41: "reflective",
  42: "reflective",
  43: "reflective",
  44: "reflective",
  45: "reflective",
  46: "reflective",
  47: "reflective",
  48: "reflective",
  49: "reflective",
  50: "reflective",
  51: "hybrid",
  52: "reflective",
  53: "reflective",
  54: "reflective",
  55: "reflective",
  56: "reflective",
  57: "hybrid",
  58: "reflective",
  59: "reflective",
  60: "hybrid",
  61: "hybrid",
  62: "reflective",
  63: "research",
  64: "reflective",
  65: "reflective",
  66: "hybrid",
  67: "hybrid",
  68: "reflective",
  69: "research",
  70: "reflective",
  71: "hybrid",
  72: "reflective",
  73: "reflective",
  74: "reflective",
  75: "reflective",
  76: "research",
  77: "research",
  78: "synthesis",
};

export const LEARN_CONTENT: Record<number, LearnContent> = {
  1: {
    definition:
      "Core Values Audit is the intentional process of identifying your non-negotiable principles, lifestyle priorities, and ethical boundaries that guide both your career and personal decisions. It transforms vague instincts about \"what matters\" into concrete statements that act as a decision filter, helping you evaluate opportunities, navigate ethical dilemmas, and maintain alignment with long-term goals.",
    whyItMatters:
      "Many career frustrations are not caused by a lack of skill or intelligence, but by misalignment between personal values and work environment. When your workplace conflicts with your core values, stress rises, motivation dwindles, and internal tension accumulates. Defining your values early prevents reactive decisions and regret, allowing you to approach internships, projects, and job offers with confidence.",
    whenWhoWhere: [
      { label: "When", body: "Before committing to internships, selecting industries, accepting long-term roles, or navigating relocation, high-pressure cultures, or ethical gray areas." },
      { label: "Who", body: "Primarily personal reflection, sharpened by discussing your values with mentors, family, or supervisors who understand your character and long-term aspirations." },
      { label: "Where", body: "Your core values are most visible in moments of stress, ethical tension, trade-offs between compensation and balance, or conflicts with authority." },
    ],
    howItWorks: [
      "Create a list of values that resonate with you: integrity, freedom, excellence, stability, impact, faith, balance, autonomy, service.",
      "Narrow this list down to five values.",
      "Refine further to three non-negotiable principles that define the foundation of your career and life decisions.",
      "For each of these core values, describe what it looks like in practice and what constitutes a violation.",
      "Examine your desired lifestyle conditions: work hours, income, flexibility, location, and long-term life goals.",
      "Define your ethical boundaries by deciding in advance which compromises you will never make, no matter the opportunity.",
    ],
    tools: ["Reflective journaling", "Value-sorting exercises", "Lifestyle vision mapping", "Past ethical dilemma review"],
    scenario: {
      title: "Two internship offers",
      body: "A student receives two internship offers: one offers significantly higher pay but requires constant availability and questionable sales tactics, while the other offers moderate compensation, strong mentorship, and alignment with their long-term purpose. Because they'd already completed a Core Values Audit and identified integrity and balanced living as non-negotiable, the decision becomes straightforward: no second-guessing, stress, or regret later.",
    },
    pitfalls: [
      "Confusing flexible preferences with foundational, non-negotiable values",
      "Adopting values based on family, culture, or peer expectations without internal conviction",
      "Failing to anticipate value conflicts, like the tension between income and work-life balance, and feeling surprised when friction occurs",
    ],
    successSignal:
      "You can clearly state your top three non-negotiable values, describe what constitutes a violation of each, and consistently use them as a decision-making filter, with opportunities and offers evaluated against these principles rather than reacted to.",
    milestoneTies: [2, 15, 16],
  },

  2: {
    definition:
      "Career Vision is your earliest attempt to map out a meaningful professional future, serving as a personal compass that integrates your passions, values, and the kind of life you want to live. It is not about perfection or certainty. It is about creating a north star that informs your decisions and provides clarity when faced with competing options.",
    whyItMatters:
      "Many people chase degrees, jobs, or titles without fully understanding why, leading to wasted effort and career drift. A clearly defined career vision connects your experiences, education, and relationships to a larger purpose, protecting against being pulled by societal expectations, prestige, or short-term gains that don't align with your long-term goals.",
    whenWhoWhere: [
      { label: "When", body: "The earlier the better (high school, university, or early professional experience) but it's never too late, and it should be treated as a living document revisited regularly." },
      { label: "Who", body: "You are the primary owner (no one else can authentically define it for you) but mentors, career coaches, and older peers can sharpen your clarity." },
      { label: "Where", body: "Quiet, focused spaces free from distraction (a long walk, a retreat setting) plus exposure to career workshops and networking events that broaden perspective." },
    ],
    howItWorks: [
      "Explore your passions: write down the activities, subjects, or problems that excite you.",
      "Clarify your values by identifying what matters most, whether impact, freedom, security, creativity, or balance.",
      "Craft a short personal mission statement capturing what you want to contribute to the world.",
      "Paint a detailed picture of your ideal career (role, industry, lifestyle, and impact) over the next five to ten years.",
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
      "You can clearly and confidently answer \"Where do I see myself in five to ten years, and why?\", and decisions about courses, internships, and relationships begin to align naturally, feeling intentional rather than reactive.",
    milestoneTies: [1, 15, 13],
  },

  3: {
    definition:
      "Personal Purpose Awareness is the intentional exploration and articulation of the deeper reason behind your ambitions, values, and long-term direction. It goes beyond \"What do I do?\" and focuses on \"Why does it matter?\", the thread of contribution that guides your choices and anchors your motivation even when external rewards are delayed.",
    whyItMatters:
      "Career identity tells you what your work is; purpose tells you why it matters. Without clarity of purpose, achievement can feel hollow, comparison becomes distracting, and setbacks feel destabilizing. Purpose provides internal stability during transitions, rejection, or redirection, and sustains motivation when external recognition lags behind effort.",
    whenWhoWhere: [
      { label: "When", body: "During seasons of reflection, transition, or questioning, particularly before committing long-term to a career path, graduate study, or leadership responsibility." },
      { label: "Who", body: "A deeply personal process, enriched through conversation with mentors, spiritual leaders, or trusted family who've observed your character over time." },
      { label: "Where", body: "At the intersection of identity, values, strengths, and conviction, surfacing through recurring interests, problems that move you, and moments you feel most alive." },
    ],
    howItWorks: [
      "Reflect on what problems consistently move you emotionally.",
      "Identify the kind of people you feel naturally drawn to support or serve.",
      "Look for themes that have repeatedly appeared in your interests, leadership, or curiosity over time.",
      "Use these insights to articulate your purpose as a statement of contribution rather than a title: \"to advocate for fairness,\" not \"to become a lawyer.\"",
      "Refine the statement until it expresses direction, motivation, and contribution rather than external pressure.",
    ],
    tools: ["Journaling defining life moments", "Peak-experience mapping", "Feedback pattern review", "Mind maps / contribution charts"],
    scenario: {
      title: "The thread underneath business",
      body: "A student initially pursues business solely for financial stability. Through reflection, they realize that throughout high school and college they've consistently mentored younger students and built resources to help others develop skills. Their purpose becomes clear: not merely to \"work in business,\" but to design systems that empower others to reach their potential.",
    },
    pitfalls: [
      "Equating purpose with prestige, recognition, or dramatic accomplishments",
      "Expecting a sudden, lightning-bolt moment of clarity instead of observing gradual patterns",
      "Overlooking consistent small contributions in favor of chasing highly visible achievements",
    ],
    successSignal:
      "You can articulate a clear statement describing the impact you're committed to making, independent of job title or external validation, and your motivation becomes internally anchored rather than reactive to trends or comparison.",
    milestoneTies: [2, 1, 4],
  },

  4: {
    definition:
      "Personal Brand Narrative is the intentional crafting of a concise and coherent identity statement (typically three to five sentences) that communicates who you are, what you are building, what you are skilled at, and the direction you're moving toward. It transforms internal self-awareness into an external articulation you can share confidently with peers, mentors, and recruiters.",
    whyItMatters:
      "Many students understand their strengths and aspirations internally, yet struggle to express them when asked \"Tell me about yourself.\" Without a structured narrative, responses feel scattered or unfocused. A strong narrative converts internal clarity into external credibility, making introductions, interviews, and networking conversations more effective and opportunity-driven.",
    whenWhoWhere: [
      { label: "When", body: "After completing your Strength Inventory, Career Vision, Personality Assessment, and Core Values Audit, and especially before networking events, internship applications, or interviews." },
      { label: "Who", body: "Drafted by you, since it reflects your journey, refined through feedback from mentors, career advisors, or professionals in your target industry." },
      { label: "Where", body: "Applied across LinkedIn summaries, interview introductions, internship bios, networking conversations, and portfolios, and internally shapes how you view and position yourself." },
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
      body: "A student at a networking event initially responds to questions about their work with just their major: vague, and it stalls conversation. After this FIRST, they develop: \"I'm a finance student focused on data-driven decision-making in corporate strategy. I enjoy analyzing market trends and building financial models that support growth decisions. I'm currently developing experience in valuation and long-term capital planning, with the goal of contributing to strategic investment teams.\" The conversation becomes focused and the opportunities become clearer.",
    },
    pitfalls: [
      "Writing something vague, like \"I'm passionate about success and growth,\" that fails to communicate specificity or value",
      "Exaggerating experience, overloading with buzzwords, or sounding rehearsed and inauthentic",
      "Minimizing your own strengths out of insecurity",
    ],
    successSignal:
      "You can confidently introduce yourself in under one minute, with clarity and direction: others immediately understand your focus area, strengths, and intended contribution without further clarification.",
    milestoneTies: [2, 5, 14],
  },

  5: {
    definition:
      "Strength Inventory is your initial personal audit: a deliberate process of identifying what you excel at, both in technical areas (hard skills) and personal qualities (soft skills). It captures the natural abilities you bring to every situation and frames them as tools for professional growth.",
    whyItMatters:
      "Many students underestimate their abilities, chasing opportunities they think they should want rather than ones aligned with what they're genuinely good at. Recognizing your strengths builds confidence, enhances your resume, and lets you strategically seek internships and projects that amplify your natural talents rather than fighting to fit where you don't.",
    whenWhoWhere: [
      { label: "When", body: "Most effective early in university or at the start of your career search, but revisit it at each new stage, after internships or major projects, not as a one-time exercise." },
      { label: "Who", body: "Primary responsibility is yours, through honest self-reflection: trusted friends, teammates, professors, and mentors often notice strengths you overlook or undervalue." },
      { label: "Where", body: "Quiet, reflective journaling sessions, plus group settings like team projects where feedback and observation reveal natural tendencies." },
    ],
    howItWorks: [
      "Conduct a comprehensive brain dump of everything you believe you're good at: academic, technical, creative, interpersonal.",
      "Categorize these into hard skills (coding, writing, analysis) and soft skills (leadership, empathy, communication).",
      "Seek external feedback from peers, mentors, or supervisors to validate and expand your list.",
      "Take skills assessments (CliftonStrengths, LinkedIn Skills) to catch patterns you missed.",
      "Rank your top five strengths in each category, considering consistency and impact.",
      "Link your strengths to potential career paths by asking: \"Where can these skills create the most value?\"",
    ],
    tools: ["Now, Discover Your Strengths (Buckingham)", "CliftonStrengths / Myers-Briggs / DISC", "LinkedIn Skill Quizzes", "Notion / Trello for tracking"],
    scenario: {
      title: "\"No real skills,\" until she wrote them down",
      body: "Chidinma, a first-year student, believed she had \"no real skills.\" Writing down everything she did naturally, she discovered she consistently organized group projects, explained complex topics to peers, and wrote clear, structured reports. These weren't trivial: they were soft skills employers actively seek, and acknowledging them positioned her as a team leader during her internship.",
    },
    pitfalls: [
      "Confusing interests or hobbies with actual strengths: enjoying a task doesn't mean proficiency",
      "Focusing exclusively on hard skills while neglecting equally valuable soft skills",
      "Creating a list of strengths but never testing, developing, or applying them",
    ],
    successSignal:
      "You can confidently answer \"What are your top three strengths, and how have you used them?\" without hesitation, and your resume, LinkedIn, and conversations begin to reflect these strengths consistently.",
    milestoneTies: [2, 6],
  },

  6: {
    definition:
      "Weakness Awareness is the intentional practice of identifying areas where you lack skills, confidence, or consistency. It is not self-criticism: it's a focused effort to illuminate blind spots that, once addressed, become sources of growth. Weaknesses are signals highlighting where structured effort, learning, or support can transform limitations into strengths.",
    whyItMatters:
      "While many students concentrate exclusively on their strengths, unacknowledged weaknesses can block promotions, strain relationships, or jeopardize job security. Early recognition lets you plan proactively: improve what's essential, manage what's less critical, or partner with colleagues whose strengths complement your gaps.",
    whenWhoWhere: [
      { label: "When", body: "Most effective after completing your Strength Inventory, revisited regularly, particularly before internships or after receiving performance feedback." },
      { label: "Who", body: "Starts with honest self-reflection; professors, mentors, and supervisors can offer insight into recurring patterns or skill gaps they observe in your work." },
      { label: "Where", body: "Often emerges in group projects, presentations, or tests, formal performance reviews and mentor check-ins offer structured opportunities to gain insight." },
    ],
    howItWorks: [
      "List recurring struggles or challenges, from procrastination and presentation anxiety to technical gaps.",
      "Seek external feedback by asking a focused question: \"What is one area where I can improve?\"",
      "Categorize weaknesses into fixable (skills you can learn) and manageable (traits requiring compensatory strategies).",
      "Identify your top two or three priority weaknesses that most limit your growth.",
      "Create a concrete improvement plan: courses, mentorship sessions, or dedicated practice routines.",
      "Track progress monthly, documenting improvements, challenges, and lessons learned.",
    ],
    tools: ["360-degree feedback", "So Good They Can't Ignore You (Newport)", "Atomic Habits (Clear)", "Coursera / Udemy / VirtualSpeech"],
    scenario: {
      title: "From freezing up to leading team pitches",
      body: "Samuel excelled academically in Computer Science but froze during presentations despite his technical competence. Recognizing his real weakness was communication, not knowledge, he joined a debate club and practiced short presentations weekly. Within six months he transformed the weakness into a professional advantage, confidently leading team pitches.",
    },
    pitfalls: [
      "Denial: pretending weaknesses don't exist or minimizing their impact",
      "Overgeneralizing (\"I'm bad at everything\") instead of naming the specific gap",
      "Identifying weaknesses but never following up with deliberate action",
    ],
    successSignal:
      "You can clearly state: \"My main weakness is [this], and here is how I am actively working on it\", owning gaps confidently instead of hiding or avoiding them.",
    milestoneTies: [5],
  },

  7: {
    definition:
      "Passion Alignment is the intentional process of connecting what excites you (the activities, topics, and causes that energize and motivate you) with real-world career opportunities. It's about identifying passions that can sustain long-term commitment, inspire excellence, and give purpose to your career journey, not chasing fleeting hobbies.",
    whyItMatters:
      "Many graduates pursue jobs solely for financial reward or prestige, only to become disengaged or burnt out. Aligning your passions with career paths keeps you motivated during challenging projects and helps you stand out in interviews. When passion meets opportunity, you perform with authenticity, creativity, and resilience.",
    whenWhoWhere: [
      { label: "When", body: "Most effective early in academic or career exploration, but also critical to revisit whenever you feel \"stuck\" or disconnected from your current path." },
      { label: "Who", body: "Begins with your own journaling and reflection; mentors and career advisors help map passions to realistic opportunities, and informational interviews reveal how passions translate into real roles." },
      { label: "Where", body: "Quiet, reflective spaces for journaling, plus career fairs, volunteering, and professional events that let you test interests firsthand." },
    ],
    howItWorks: [
      "List your passions: topics, activities, and causes that genuinely excite you.",
      "Identify career fields that could connect with those passions.",
      "Research each field by reviewing job descriptions, industry requirements, and professional pathways.",
      "Test your passions through small projects, volunteering, or short internships.",
      "Create a map linking passions to career roles: passions in one column, related roles in another, ranked High / Medium / Low fit.",
      "Select one \"anchor passion\" to guide your short-term internship and skill-development choices.",
    ],
    tools: ["What Color Is Your Parachute?", "Myers-Briggs / Holland Code tests", "O*NET, 16personalities.com", "Idealist.org / Catchafire.org"],
    scenario: {
      title: "From \"safe\" accounting to event coordination",
      body: "Chinwe always loved organizing campus events but assumed it could never be a career, pursuing accounting because it felt \"safe.\" After a passion alignment exercise, she realized event management and project coordination were legitimate paths that leveraged her natural enthusiasm. An internship at a local event-planning firm led to a project coordinator role at a consulting firm.",
    },
    pitfalls: [
      "Confusing hobbies or casual interests with sustainable career passions",
      "Ignoring financial realities: not every passion immediately provides economic sustainability",
      "Chasing someone else's dream (parents', peers', or society's) instead of your authentic interest",
    ],
    successSignal:
      "You can confidently say: \"I am passionate about X, and I have identified roles like Y and Z that let me live that passion daily\", with career choices increasingly feeling purposeful rather than arbitrary.",
    milestoneTies: [5, 6],
  },

  8: {
    definition:
      "Industry Insight is the intentional effort to understand how a specific field operates: trends, growth opportunities, challenges, and the distinctive cultures of companies within it. It goes beyond job titles or salary ranges, focusing on the forces that shape the field so your decisions are informed and strategic rather than speculative.",
    whyItMatters:
      "Entering a career without industry insight is like walking into a room blindfolded. Employers expect candidates to understand emerging technologies, market shifts, and operational challenges. Industry insight lets you ask insightful interview questions, identify overlooked opportunities, and assess whether an industry is stable, growing, or contracting.",
    whenWhoWhere: [
      { label: "When", body: "Most beneficial cultivated early, ideally while still in school, and revisited continuously since industries evolve rapidly, especially critical before internship or job applications." },
      { label: "Who", body: "Industry professionals via LinkedIn or alumni networks, professors and career advisors, thought leaders and analysts, and peers currently working in your field of interest." },
      { label: "Where", body: "Company websites, industry reports, and Glassdoor for foundational knowledge; networking events and webinars for direct exposure; internships or shadowing for firsthand experience." },
    ],
    howItWorks: [
      "Select your target industry: technology, healthcare, consulting, energy, or another field of interest.",
      "Research current trends and growth areas within it.",
      "Review company reports: mission statements, values, financial summaries.",
      "Study cultural indicators through employee reviews, social media presence, and leadership styles.",
      "Follow thought leaders and conduct informational interviews with industry insiders.",
      "Summarize your findings in a one-page industry profile.",
    ],
    tools: ["Glassdoor / Indeed / Blind", "LinkedIn industry reports", "Harvard Business Review", "O*NET"],
    scenario: {
      title: "Fintech was more than mobile banking",
      body: "Ada was fascinated by fintech but initially thought it only involved mobile banking. Through informational interviews, she learned about blockchain payments, fraud detection, and cross-border transfers. This insight reshaped her focus: instead of applying broadly, she targeted fraud-prevention startups, a fast-growing niche aligned with her skills.",
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
      { label: "When", body: "Ideally explored after clarifying your Career Vision, Strength Inventory, Weakness Awareness, Passion Alignment, and Industry Insight, before choosing specific internships." },
      { label: "Who", body: "Career counselors, industry professionals who've advanced within role families, alumni three to ten years ahead of you, and professional associations publishing role ladders." },
      { label: "Where", body: "Company career-progression charts, LinkedIn career journeys, O*NET role clusters, and salary/career reports like Glassdoor or Payscale." },
    ],
    howItWorks: [
      "Select one or two industries you're most interested in pursuing.",
      "Identify core role families within each, grouping positions that share similar skills.",
      "Map sample pathways tracing how professionals typically progress from entry-level to senior.",
      "Identify overlaps between families, recognizing that some skills transfer across functions.",
      "Mark growth opportunities by researching which families are expanding versus contracting.",
      "Draft a preliminary \"path hypothesis\" and validate it through conversations with mid-career professionals.",
    ],
    tools: ["O*NET Career Pathway Tool", "LinkedIn Career Explorer", "Glassdoor Career Path", "What Color Is Your Parachute?"],
    scenario: {
      title: "SOC Analyst as a strategic gateway",
      body: "Kwame wanted to become a cybersecurity consultant but wasn't sure where to begin. Researching role families, he found multiple entry points: SOC Analyst, Risk Analyst, IT Auditor. LinkedIn profiles showed many consultants started as SOC Analysts, moved into Threat Intelligence, then advisory roles. He targeted SOC internships as a deliberate gateway.",
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
      "Role Research is the intentional process of investigating specific internships and entry-level job titles to understand what employers expect, what daily work entails, and which roles align with your strengths and long-term plan. It goes beyond reading postings: decoding responsibilities, tools, and company signals into a usable picture of each role.",
    whyItMatters:
      "Many early-career professionals waste time chasing poorly matched roles, leading to frustration and slow progress. Role research saves time, reduces guesswork, and helps you tailor applications to what hiring managers actually care about, plan which skills you need, and spot high-demand niches.",
    whenWhoWhere: [
      { label: "When", body: "As early as possible, ideally your first year: becomes especially critical before applying to internships, and should be revisited quarterly." },
      { label: "Who", body: "Career services staff, alumni and current employees in the role, and (where possible) hiring managers or recruiters directly." },
      { label: "Where", body: "Job boards like LinkedIn Jobs, Indeed, and Handshake; company career pages; Glassdoor and Blind for culture insight; informational interviews for on-the-ground perspective." },
    ],
    howItWorks: [
      "Choose three to five target industries based on your Career Vision, Passion Alignment, and Strength Inventory.",
      "Collect five to ten job postings per role of interest from different companies.",
      "Deconstruct each posting: core responsibilities, must-have vs. nice-to-have skills, required tools, keywords.",
      "Map your fit by labeling each essential as \"have,\" \"partial,\" or \"missing,\" prioritizing roles at 60 to 80% match.",
      "Plan short-term actions to close gaps: courses, mini-projects, shadowing.",
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
      "Salary Benchmarking is the process of researching and comparing pay ranges for specific roles in your target industry, location, and experience level. It's not about chasing the highest possible number or undervaluing yourself: it's about clarity, preparation, and informed decision-making so you can negotiate confidently.",
    whyItMatters:
      "Salary benchmarking prevents you from underestimating your worth or accepting unfair compensation. Many early-career professionals are unaware of market rates, leading to being underpaid or discouraged by below-expectation offers. It also helps you factor in total compensation (benefits, bonuses, flexibility) not just base pay.",
    whenWhoWhere: [
      { label: "When", body: "Before applying to internships or your first full-time job, and updated again before negotiations or accepting an offer." },
      { label: "Who", body: "You are the primary researcher; career services staff, alumni in your target roles, and HR professionals can add real-world and negotiation context." },
      { label: "Where", body: "Glassdoor, Payscale, Levels.fyi, Salary.com, and LinkedIn Salary; cost-of-living calculators like Numbeo adjust figures for your target location." },
    ],
    howItWorks: [
      "Select a target role and geographic location.",
      "Use two to three salary research tools to gather and cross-check ranges: low, high, and median.",
      "Adjust figures for cost-of-living differences.",
      "Include benefits in your assessment: health insurance, bonuses, stipends, remote flexibility.",
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
      { label: "When", body: "Best done after writing your initial career vision and reflecting on strengths and weaknesses: especially useful before applying for internships, and revisited after any major milestone." },
      { label: "Who", body: "Belongs to you, but becomes more powerful shaped with a mentor, lecturer, career advisor, or trusted peer who can help you see patterns you might overlook." },
      { label: "Where", body: "A quiet, reflective space where you can think honestly without distraction, often the same journal or workspace where your other career reflections live." },
    ],
    howItWorks: [
      "Honestly describe what you already bring to the table: skills, experiences, behaviors, and mindsets that consistently show up as strengths.",
      "Reflect on areas where you feel less confident or where feedback has highlighted gaps.",
      "Widen your view to identify opportunities: growing industries, internships, mentors, programs, trends.",
      "Acknowledge external threats: competition, limited access, economic conditions, changing skill requirements.",
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
      "Your next steps feel clearer and more grounded: instead of feeling overwhelmed by options, you feel strategically focused, with a better understanding of where to invest your time and energy.",
    milestoneTies: [13, 5, 6],
  },

  13: {
    definition:
      "Skill Growth Plan is a deliberate, written roadmap that outlines which skills you'll intentionally develop over the next six to twelve months and the specific methods you'll use to grow them. It turns skill-building into a structured, actionable process connected to your broader career vision, rather than leaving it to chance.",
    whyItMatters:
      "Without a focused plan, people accumulate disconnected knowledge, courses and certifications without understanding how each contributes to long-term goals. A Skill Growth Plan builds capabilities that compound over time and directly support the roles and pathways you've identified elsewhere in the FIRSTS framework.",
    whenWhoWhere: [
      { label: "When", body: "Immediately after completing your Career SWOT analysis, while your strengths, weaknesses, and gaps are fresh, revisited quarterly as your goals evolve." },
      { label: "Who", body: "You own and execute it, but mentors, lecturers, and industry professionals help identify which skills are high-impact versus \"nice-to-have.\"" },
      { label: "Where", body: "Documented alongside your other FIRST exercises: a notebook or digital workspace like Notion, Trello, or Google Docs kept accessible in your primary workflow." },
    ],
    howItWorks: [
      "Review your Career Vision, Strength Inventory, Weakness Awareness, and Passion Alignment to identify the most critical skills for your next steps.",
      "Categorize skills into technical abilities, communication, critical thinking, or professional habits.",
      "Prioritize a small set (typically three to five skills) that will deliver the highest impact.",
      "Define what \"competence\" looks like for each skill in observable terms.",
      "Assign realistic timelines and identify the most effective learning methods.",
    ],
    tools: ["Coursera / Udemy / Skillshare", "Mentorship sessions", "Job descriptions and industry skill maps", "Hands-on practice projects"],
    scenario: {
      title: "Choosing three skills instead of everything",
      body: "During her final year, Tunde felt overwhelmed by the pressure to learn everything at once: coding, public speaking, design, leadership. Creating a Skill Growth Plan, she realized focusing on analytical tools, professional writing, and project coordination would provide the strongest foundation for her first role, letting her make measurable progress instead of burning out.",
    },
    pitfalls: [
      "Trying to learn too many skills simultaneously, resulting in shallow mastery everywhere",
      "Prioritizing trendy skills that don't align with your actual career goals",
      "Assuming course completion equals skill acquisition: real growth requires deliberate practice and application",
    ],
    successSignal:
      "Your learning is focused and purposeful, your confidence increases in targeted areas, and you can clearly articulate which skills you're developing, why they matter, and how they support your career path.",
    milestoneTies: [12, 6, 10],
  },

  14: {
    definition:
      "Personality Assessment is the intentional process of studying your innate tendencies (how you make decisions, respond to pressure, communicate, and approach work) using structured tools such as personality or behavioral assessments. It's a moment to observe yourself deliberately, not to assign rigid labels, but to gain clarity on the patterns that shape your behavior.",
    whyItMatters:
      "Many early-career challenges aren't about lacking skills but about poor fit, being in environments that clash with your natural approach. Personality awareness lets you identify settings where you thrive, select roles that amplify your strengths, and communicate your working style effectively instead of second-guessing yourself.",
    whenWhoWhere: [
      { label: "When", body: "Most effective early in your career foundation stage, ideally before or during internships or your first job, revisited as you gain experience and maturity." },
      { label: "Who", body: "Primarily completed on your own, with impact increasing when discussed with mentors, supervisors, or trusted peers who observe how you actually show up in real-world contexts." },
      { label: "Where", body: "Quiet, reflective settings such as your personal workspace, structured career planning sessions, or mentoring conversations." },
    ],
    howItWorks: [
      "Select one or two reputable personality or behavioral assessments: MBTI, DISC, or StrengthsFinder.",
      "Complete the assessments thoughtfully.",
      "Study the results as guides to tendencies rather than fixed labels.",
      "Compare the insights with your real experiences: school projects, internships, leadership roles.",
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
      "Work Style Awareness is the deliberate process of discovering how you naturally approach work: organizing tasks, processing information, collaborating, managing energy, and responding to structure, autonomy, pressure, and feedback. It's about observing your habitual patterns in real-world contexts so you understand not just what you can do, but how you do it best.",
    whyItMatters:
      "Many frustrations in early internships and jobs aren't caused by a lack of ability, but by being in situations that conflict with your natural workflow. Understanding your work style lets you choose roles wisely, communicate your needs effectively, and avoid unnecessary burnout or underperformance.",
    whenWhoWhere: [
      { label: "When", body: "Ideally completed before internships, team-based assignments, or your first full-time job, and revisited whenever your responsibilities or team dynamics change significantly." },
      { label: "Who", body: "Your own reflection, enriched by feedback from classmates, teammates, or supervisors who've observed your work habits in real situations." },
      { label: "Where", body: "Develops through lived experience: group projects, internships, volunteer roles, and independent projects, each offering clues about how you respond to structure and pressure." },
    ],
    howItWorks: [
      "Observe your natural approach to tasks: planning before acting, or learning through doing.",
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
      "You can clearly describe how you work best, where you struggle, and which conditions enhance or impede your performance, and you can adjust your approach when necessary.",
    milestoneTies: [14, 18],
  },

  16: {
    definition:
      "Thinking & Decision-Making Style is the intentional process of discovering how you naturally analyze information, interpret problems, weigh risks, and reach conclusions: whether analytical or intuitive, fast or deliberate, data-driven or principle-driven, independent or consultative.",
    whyItMatters:
      "In the early stages of a career, outcomes are shaped far more by the quality of your decisions under pressure than by raw talent. Awareness of your thinking style lets you leverage natural strengths (speed, intuition, analytical rigor) while addressing weaknesses like blind spots, reactive habits, or indecision.",
    whenWhoWhere: [
      { label: "When", body: "Most valuable after you've had exposure to real-world decision-making (choosing courses, leading projects, navigating internships) and especially before high-stakes choices." },
      { label: "Who", body: "Primarily personal reflection, deepened by feedback from mentors, supervisors, or peers who've observed your decision-making in complex or pressured situations." },
      { label: "Where", body: "Most visible in ambiguous situations, tight deadlines, conflict resolution, risk evaluation, and high-stakes decisions where outcomes carry real consequences." },
    ],
    howItWorks: [
      "Review recent decisions you've made, including both successes and mistakes.",
      "Ask: Did I rely on data or instinct? Did I decide independently or consult others? Did I act quickly or deliberate?",
      "Look for recurring patterns across multiple decisions rather than single events.",
      "Assess whether your default approach led to positive results or contributed to problems.",
      "Identify strategies to improve: personal rules to pause before high-impact decisions, structured evaluation frameworks.",
    ],
    tools: ["Decision journaling", "Post-project retrospectives", "Pros/cons lists, risk matrices", "Mentor and peer feedback"],
    scenario: {
      title: "A personal rule for high-stakes calls",
      body: "A student notices that under tight deadlines, they make rapid decisions without gathering sufficient data: fine for minor tasks, costly on complex projects. They implement a personal rule: for decisions affecting others or significant outcomes, pause to gather structured information before acting, building a balance between speed and accuracy.",
    },
    pitfalls: [
      "Assuming your natural thinking style is always correct",
      "Confusing speed with competence, or hesitation with wisdom",
      "Ignoring context: no single approach works for every decision",
    ],
    successSignal:
      "You can clearly articulate how you process information, recognize where you're prone to bias, and describe the safeguards you implement to improve decision quality.",
    milestoneTies: [14, 15],
  },

  17: {
    definition:
      "Learning Style Awareness is the intentional process of discovering how you best process new information, build understanding, retain knowledge, and convert theory into applied skill: whether through reading, listening, observing, practicing, teaching, or structured repetition.",
    whyItMatters:
      "Many students assume poor performance reflects a lack of ability, when it often results from misaligned learning methods. Understanding your learning style lets you design smarter study and practice systems, accelerate skill acquisition, and reduce frustration.",
    whenWhoWhere: [
      { label: "When", body: "Best completed early in your academic or career journey, and revisited whenever learning new material is taking longer than expected." },
      { label: "Who", body: "Primarily your own responsibility, validated by feedback from teachers, mentors, or peers who observe how you acquire and apply knowledge." },
      { label: "Where", body: "Revealed in classrooms, online courses, workshops, self-study sessions, and real project work: visible in the outcomes of your learning, not just your preferences." },
    ],
    howItWorks: [
      "Reflect on past situations where you learned material quickly and applied it effectively.",
      "Identify the methods used: reading, watching demonstrations, discussing, practicing, or teaching others.",
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
      "Productivity & Focus System is the intentional design of how you plan your time, protect your focus, and recover when things fall off track. Rather than leaving execution to willpower alone, this FIRST builds a repeatable structure (priorities, focus blocks, and a weekly review) so effort turns into visible progress instead of busyness.",
    whyItMatters:
      "Without a system, students plan vaguely, work reactively, and confuse busyness with progress. With one, they build structured execution, focus discipline, and recovery resilience, the difference between a semester that feels productive and one that just feels exhausting.",
    whenWhoWhere: [
      { label: "When", body: "Most useful once you're carrying real academic or work responsibilities, and worth rebuilding at the start of any new season, semester, or role." },
      { label: "Who", body: "Primarily self-designed and self-audited, though a mentor or accountability partner can help you notice patterns you're too close to see." },
      { label: "Where", body: "Wherever you actually work day to day: logged in real time, since a productivity system built on guesswork rarely survives contact with a real week." },
    ],
    howItWorks: [
      "Track your time and distractions honestly for one full week.",
      "Summarize peak focus periods, common distractions, and overcommitment patterns.",
      "Define a weekly outcome rule, how many major goals you'll realistically advance per week.",
      "Design your focus-block architecture: length, environment, and phone/distraction policy.",
      "Set a progress-tracking method and a weekly review ritual to keep the system honest.",
    ],
    tools: ["Time and distraction log", "Written planner or digital task manager", "Habit tracker", "Weekly review template"],
    scenario: {
      title: "The distraction that wasn't the phone",
      body: "A student assumed their phone was the main distraction derailing their focus. A full week of honest tracking revealed the real culprit was constant context-switching between browser tabs, a habit no screen-time app would have caught. The fix was a simple tab-limit rule, not a blocking app.",
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

  19: {
    definition:
      "A clear, natural 30-to-60-second self-description that explains who you are, what you study or do, and where you are headed professionally. It's the spoken version of your personal brand, used the moment someone asks \"tell me about yourself.\"",
    whyItMatters:
      "Most students either freeze or ramble when asked to introduce themselves, which costs them credibility in the first ten seconds of an interview, a networking event, or a career fair. A rehearsed, natural introduction lets you control the first impression instead of leaving it to chance.",
    whenWhoWhere: [
      { label: "When", body: "Build this before your first networking event, career fair, or interview, and revise it every semester as your experience grows." },
      { label: "Who", body: "A career center advisor, a trusted friend to rehearse with, and mentors or professors who can react honestly to how it lands." },
      { label: "Where", body: "Practiced in the mirror, recorded on your phone, tested at career fairs, and refined after every networking conversation." },
    ],
    howItWorks: [
      "Draft the three components: who you are (name, year, major).",
      "What you focus on (interests, direction, one credential).",
      "Where you are headed (the kind of opportunity you want).",
      "Say it out loud, time it, cut anything over 60 seconds.",
      "Practice until it sounds conversational rather than memorized.",
    ],
    tools: ["Voice memo app", "A mirror", "One-page cheat sheet"],
    scenario: {
      title: "\"I don't really know what I do yet\"",
      body: "A sophomore kept saying that when asked to introduce herself at a career fair. After drafting a 40-second introduction anchored on her marketing coursework and one class project, recruiters started asking productive follow-up questions instead of ending the conversation.",
    },
    pitfalls: [
      "Reciting a memorized script word for word",
      "Going over 60 seconds",
      "Listing every class and club instead of a focused story",
    ],
    successSignal:
      "You can deliver it naturally without sounding rehearsed, and the person you're speaking with asks a specific follow-up question afterward.",
    milestoneTies: [20, 32],
  },

  20: {
    definition:
      "A concise, persuasive explanation of who you are, what you study, and where you're headed, delivered in the time it takes to ride an elevator with someone important. It goes one step further than your introduction by including a clear ask or hook.",
    whyItMatters:
      "Opportunities often appear in short, unplanned windows: a chance encounter with an alum, a recruiter walking the career fair floor, a professor's guest speaker after class. Without a pitch ready, those windows close before you can use them.",
    whenWhoWhere: [
      { label: "When", body: "Have a version ready before any event where you might meet someone who can open a door for you, and update it each time your focus shifts." },
      { label: "Who", body: "Career services staff for structure feedback, and peers or mentors to practice the delivery and tone with." },
      { label: "Where", body: "Career fairs, alumni events, conferences, LinkedIn messages, and casual encounters on campus." },
    ],
    howItWorks: [
      "Start from your introduction.",
      "Add a specific hook: a project, a skill, or a goal.",
      "End with a light, low-pressure ask, such as a question or a request to connect.",
      "Practice adapting the pitch to different audiences: a recruiter, a professor, a stranger at a mixer.",
    ],
    tools: ["Notes app draft", "Business card or LinkedIn QR code"],
    scenario: {
      title: "The tailored hook that landed",
      body: "A student used the same flat pitch with every recruiter at a career fair and got no follow-ups. After tailoring the hook to each company's focus area beforehand, three of five conversations turned into actual interview invitations.",
    },
    pitfalls: [
      "Making the pitch too long or too generic",
      "Making it entirely about yourself with no natural close or ask",
    ],
    successSignal:
      "The listener responds with a next step, such as a business card exchange, a LinkedIn connection, or an invitation to follow up.",
    milestoneTies: [19, 52],
  },

  21: {
    definition:
      "A one-to-two-sentence positioning statement that captures who you are professionally, what you're known for, and the value you bring. It's the written anchor behind your introduction, resume, and LinkedIn profile.",
    whyItMatters:
      "Without a clear statement, your professional materials tend to drift and contradict each other. A single, well-crafted sentence keeps your resume, LinkedIn, and conversations consistent and memorable.",
    whenWhoWhere: [
      { label: "When", body: "Draft this after completing your Personal Brand Narrative worksheet in Stage One, since it depends on knowing your strengths and direction." },
      { label: "Who", body: "A mentor or career advisor to sanity-check that it sounds authentic rather than generic." },
      { label: "Where", body: "Written during a focused planning session, then placed at the top of your resume, LinkedIn About section, and personal website." },
    ],
    howItWorks: [
      "Combine your focus area, your signature strength, and the outcome you aim to create into one or two sentences.",
      "Test it by reading it aloud.",
      "If it could describe five other students equally well, sharpen it further.",
    ],
    tools: ["Your Stage One Personal Brand Narrative worksheet", "A document to draft and revise versions"],
    scenario: {
      title: "\"Hardworking student\" to a real sentence",
      body: "A computer science student's first draft read, \"I am a hardworking student who loves technology.\" After revision it became, \"I build accessible mobile tools that help small businesses reach customers they'd otherwise miss.\" The second version got noticeably more interview callbacks.",
    },
    pitfalls: [
      "Writing something so broad it applies to anyone",
      "Packing in every skill instead of picking one clear angle",
    ],
    successSignal:
      "People who read or hear it can accurately describe what you do and what makes you different, without you having to explain further.",
    milestoneTies: [53, 32, 33],
  },

  22: {
    definition:
      "The deliberate development of clarity, tone, and professionalism across how you speak and write in academic and workplace settings. It covers everything from email tone to how you phrase disagreement in a meeting.",
    whyItMatters:
      "Communication style is often judged faster than competence. A capable student who writes overly casual emails or interrupts in meetings can be overlooked for opportunities that a more polished communicator receives instead.",
    whenWhoWhere: [
      { label: "When", body: "Start developing this as soon as you begin emailing professors, applying for internships, or joining student organizations with real responsibilities." },
      { label: "Who", body: "Professors and internship supervisors, whose responses (or lack of response) are honest feedback on your communication clarity." },
      { label: "Where", body: "Email threads, class discussions, team meetings, and any written communication with someone outside your close friend group." },
    ],
    howItWorks: [
      "Audit a week of your own emails and messages for tone and clarity.",
      "Adopt a simple structure for professional emails: greeting, purpose, ask, closing.",
      "Practice pausing before responding in tense conversations rather than reacting immediately.",
    ],
    tools: ["Grammarly or a similar writing checker", "A saved folder of well-written professional emails"],
    scenario: {
      title: "From one-line lowercase to strategic conversations",
      body: "A student's early internship emails were one-line and lowercase, and her manager quietly stopped looping her into decisions. After adopting a clear three-part email structure, her manager began cc'ing her on more strategic conversations within a month.",
    },
    pitfalls: [
      "Writing emails too casual for the context",
      "Overcorrecting into stiff, jargon-heavy language that sounds unnatural",
    ],
    successSignal:
      "People respond to your messages promptly and take your questions and requests seriously without needing clarification.",
    milestoneTies: [54, 41, 47],
  },

  23: {
    definition:
      "The intentional practice of showing up in professional settings with self-assurance grounded in preparation, not bravado. It's less about eliminating nerves and more about acting effectively despite them.",
    whyItMatters:
      "Confidence, even more than raw qualifications, often determines who gets remembered after an interview or networking event. Students frequently underestimate themselves and let that show in body language, tone, and hesitation.",
    whenWhoWhere: [
      { label: "When", body: "Build this gradually, starting with low-stakes settings like class discussions before moving to higher-stakes ones like interviews." },
      { label: "Who", body: "A mock interview coach, a public speaking club, or a trusted peer who will give direct feedback on how you come across." },
      { label: "Where", body: "Classroom discussions, mock interviews, networking events, and any first-time professional interaction." },
    ],
    howItWorks: [
      "Prepare thoroughly for high-stakes moments so confidence has a real foundation.",
      "Practice power-posture and steady breathing before entering a room.",
      "Reframe nervousness as energy rather than a warning sign.",
      "Debrief after each event: what went well, what you'd adjust.",
    ],
    tools: ["Mock interview service or career center session", "A short pre-event routine"],
    scenario: {
      title: "One question per class",
      body: "A quiet engineering student used to avoid raising his hand in class discussions. After committing to answer one question per class for a month, he noticed both his classroom confidence and his interview performance improved together.",
    },
    pitfalls: [
      "Confusing confidence with overconfidence and dismissing feedback",
      "Avoiding practice opportunities because they feel uncomfortable",
    ],
    successSignal:
      "You walk into unfamiliar professional settings without visible hesitation, and recover smoothly when something doesn't go as planned.",
    milestoneTies: [20, 53],
  },

  24: {
    definition:
      "A clear articulation of the specific value you bring to a team, project, or organization, stated in terms of outcomes rather than traits. It answers the question every employer is silently asking: \"why should we want you?\"",
    whyItMatters:
      "Listing personality traits like \"hardworking\" or \"team player\" doesn't differentiate you, since nearly every candidate claims the same. A value statement grounded in real outcomes gives employers something concrete to remember.",
    whenWhoWhere: [
      { label: "When", body: "Draft this once you have at least one project, internship, or leadership experience to point to as evidence." },
      { label: "Who", body: "A mentor or supervisor who witnessed your actual contribution and can help you name it accurately." },
      { label: "Where", body: "Used in interviews, cover letters, and team introductions when a new group needs to understand your role quickly." },
    ],
    howItWorks: [
      "Identify one to three moments where your specific contribution changed an outcome.",
      "Translate each into a value statement: \"I bring [specific capability], which helped [team or project] achieve [result].\"",
    ],
    tools: ["Your Stage One Strength Inventory worksheet", "Notes from performance feedback"],
    scenario: {
      title: "From \"reliable\" to a remembered detail",
      body: "A student initially described herself as \"reliable and detail-oriented.\" Reworked, her value statement became, \"I catch scheduling conflicts before they become problems, which kept our club's four-event semester running without a single double-booking.\" Interviewers remembered the second version.",
    },
    pitfalls: [
      "Staying abstract (\"I'm a hard worker\") instead of naming a concrete, provable outcome",
    ],
    successSignal:
      "You can state your value in one sentence backed by a real example, and the listener remembers the specific detail afterward.",
    milestoneTies: [53, 54],
  },

  25: {
    definition:
      "A deliberate plan defining the strengths, themes, and reputation you want associated with your name across every professional context. It moves personal branding from an accidental byproduct to an intentional choice.",
    whyItMatters:
      "Without a strategy, your professional identity forms passively and inconsistently, shaped by whoever happens to interact with you rather than by your own intention. A defined strategy lets you build a reputation deliberately over time.",
    whenWhoWhere: [
      { label: "When", body: "Build this early in your professional development, ideally at the start of the academic year so you can apply it consistently across the months ahead." },
      { label: "Who", body: "A mentor who has watched your work over time, and peers whose perception of you can act as a reality check." },
      { label: "Where", body: "Developed in a private planning session, then applied across your resume, LinkedIn, class participation, and networking conversations." },
    ],
    howItWorks: [
      "List the three to five themes you want people to associate with you.",
      "Cross-check them against your actual strengths and values from Stage One.",
      "Identify the gap between how you want to be seen and how you're currently showing up.",
      "Name one action per theme to close that gap.",
    ],
    tools: ["Your Stage One Strength Inventory", "Your Stage One Core Values Audit", "A one-page brand strategy document"],
    scenario: {
      title: "From administrative tasks to strategic initiatives",
      body: "A student wanted to be known for strategic thinking, but her actual visible activity was mostly administrative club tasks. She restructured her involvement to lead one strategic initiative per semester, and within a year, professors and peers began describing her that way unprompted.",
    },
    pitfalls: [
      "Choosing themes that sound impressive but don't match your actual strengths or interests",
    ],
    successSignal:
      "When people describe you to others, their description matches the themes you intentionally chose.",
    milestoneTies: [1, 5, 31],
  },

  26: {
    definition:
      "Your unique professional angle: the specific intersection of skills, interests, and perspective that differentiates you from otherwise similar candidates.",
    whyItMatters:
      "In competitive fields, most candidates share similar coursework and credentials. Positioning is what makes a hiring manager remember you specifically instead of filing you under \"qualified but generic.\"",
    whenWhoWhere: [
      { label: "When", body: "Develop this after you've explored a few directions in Stage One and have enough experience to identify a genuine intersection, not a forced one." },
      { label: "Who", body: "Someone in your target industry who can tell you honestly whether your intended positioning is actually differentiated or just common." },
      { label: "Where", body: "Refined through informational interviews, competitor research on peers' LinkedIn profiles, and reflection on your own project history." },
    ],
    howItWorks: [
      "List your top two or three areas of genuine interest or skill.",
      "Identify where they intersect in a way most peers in your major don't combine.",
      "Test the positioning by describing it to someone outside your field and checking whether it's clear and distinct.",
    ],
    tools: ["LinkedIn search of peers in your target field, for contrast rather than imitation"],
    scenario: {
      title: "From \"general marketing\" to a specific niche",
      body: "A marketing student initially positioned herself as \"general marketing,\" identical to dozens of classmates. After noticing her consistent interest in sustainability, she repositioned as \"marketing for mission-driven consumer brands,\" which made her instantly more memorable to recruiters at values-aligned companies.",
    },
    pitfalls: [
      "Positioning yourself too narrowly around a trend that may fade",
      "Positioning too broadly so it fails to differentiate you at all",
    ],
    successSignal:
      "When you describe your positioning, people can name one or two specific types of roles or companies that would be a strong fit for you.",
    milestoneTies: [32, 53],
  },

  27: {
    definition:
      "An honest understanding of how your professional perception actually forms among peers, professors, and colleagues, based on patterns of behavior rather than intentions.",
    whyItMatters:
      "Reputation forms whether or not you're paying attention to it, and by the time you notice a negative pattern, it may already be shaping who recommends you and who doesn't.",
    whenWhoWhere: [
      { label: "When", body: "Check in on this each semester, especially after group projects, internships, or leadership roles where more people have observed your behavior." },
      { label: "Who", body: "A mentor or trusted peer willing to give you honest, sometimes uncomfortable feedback about how others perceive you." },
      { label: "Where", body: "Formed in classrooms, group projects, student organizations, and internships, often through small repeated behaviors rather than single events." },
    ],
    howItWorks: [
      "Ask two or three people you trust how they'd describe your reputation in three words.",
      "Compare their answers to your intended brand from Personal Brand Strategy.",
      "Identify any consistent gaps and name one behavior change to address the largest one.",
    ],
    tools: ["A short, direct feedback conversation: no special tool required"],
    scenario: {
      title: "The pattern he hadn't noticed",
      body: "A student assumed he was seen as reliable, but informal feedback revealed peers saw him as often late to group meetings. He hadn't noticed the pattern himself. After deliberately arriving early for a semester, his reputation among that same peer group visibly shifted.",
    },
    pitfalls: [
      "Only asking people who will tell you what you want to hear",
      "Becoming defensive instead of curious when the feedback is uncomfortable",
    ],
    successSignal:
      "The words people use to describe you match the reputation you're intentionally building, and that alignment holds up when you ask different people.",
    milestoneTies: [25],
  },

  28: {
    definition:
      "A structured evaluation of the signals you send through appearance, behavior, and communication in professional settings, checked against the standards of your target industry.",
    whyItMatters:
      "Image is one of the fastest signals people use to judge competence and fit, often before you've said a word. Misaligned signals, however unfair, can create doubt that takes far longer to undo through actual performance.",
    whenWhoWhere: [
      { label: "When", body: "Conduct this before a major event like a career fair or interview season, and revisit it whenever you're entering a new professional context." },
      { label: "Who", body: "A career advisor or someone already working in your target industry who can tell you what's actually expected there." },
      { label: "Where", body: "Assessed by reviewing recent photos, recalling recent professional interactions, and researching your specific target industry's norms." },
    ],
    howItWorks: [
      "Research the typical professional appearance and behavior norms in your target industry, they vary widely between fields.",
      "List your current signals (dress, punctuality, communication habits).",
      "Compare them honestly to that standard.",
      "Adjust the two or three signals with the largest gap.",
    ],
    tools: ["LinkedIn photos of professionals in your target field", "A trusted second opinion"],
    scenario: {
      title: "Noticing the mismatch before the next event",
      body: "A finance-track student showed up to a networking event in the same casual clothes he wore to class, while his peers wore business casual. He wasn't underdressed by his own standard, but he noticed the mismatch and adjusted before his next event, where conversations felt noticeably more natural.",
    },
    pitfalls: [
      "Assuming one universal standard exists across all industries",
      "Over-investing in appearance while neglecting behavioral signals like punctuality",
    ],
    successSignal:
      "You walk into a professional setting in your target field and blend in appropriately rather than standing out for the wrong reasons.",
    milestoneTies: [19, 41],
  },

  29: {
    definition:
      "A practice that identifies and strengthens the specific markers that communicate competence and reliability to others, such as follow-through, specificity in speech, and consistency between words and actions.",
    whyItMatters:
      "Credibility is built or eroded in small moments: whether you follow up when you say you will, whether your claims are specific or vague, whether your behavior matches your stated values. These signals accumulate into whether people trust you with real responsibility.",
    whenWhoWhere: [
      { label: "When", body: "Strengthen this continuously, but pay particular attention during your first internship or leadership role, when your credibility signals are evaluated closely for the first time." },
      { label: "Who", body: "A supervisor or team lead whose trust you're actively earning, and who will notice these signals whether or not you're conscious of them." },
      { label: "Where", body: "Demonstrated in every commitment you make: deadlines, follow-up emails, meeting attendance, and how specifically you speak about your own work." },
    ],
    howItWorks: [
      "Track your commitments for two weeks and note your completion rate.",
      "Replace vague language (\"I'll try to get to it\") with specific commitments (\"I'll send it by Thursday at noon\").",
      "Follow up proactively rather than waiting to be asked.",
    ],
    tools: ["A simple task tracker or calendar"],
    scenario: {
      title: "\"I'll have an answer by Wednesday\"",
      body: "An intern who said \"I'll look into it\" to every request was quietly given less responsibility over time. A peer who instead said \"I'll have an answer by Wednesday\" and delivered consistently was handed a client-facing task within a month.",
    },
    pitfalls: [
      "Overpromising to sound impressive in the moment, then under-delivering",
    ],
    successSignal:
      "People start giving you responsibility without double-checking your work, and your stated timelines are trusted at face value.",
    milestoneTies: [27, 41],
  },

  30: {
    definition:
      "The practice of communicating limits, especially around time, workload, and availability, clearly and respectfully in professional environments without damaging relationships.",
    whyItMatters:
      "Students who never set boundaries often become known as easy to overload rather than reliable, which leads to burnout and, ironically, less respect rather than more. Clear boundaries, communicated well, actually increase professional credibility.",
    whenWhoWhere: [
      { label: "When", body: "Practice this as soon as you take on your first real professional or leadership responsibility, before overcommitment becomes a habit." },
      { label: "Who", body: "A supervisor, team lead, or club officer you report to, since boundary conversations are primarily about managing that relationship well." },
      { label: "Where", body: "Group project negotiations, internship workload conversations, and any moment when a request exceeds your realistic capacity." },
    ],
    howItWorks: [
      "Before responding to a new request, check it against your actual current commitments.",
      "If it doesn't fit, respond with a clear alternative rather than a flat no.",
      "Propose a different deadline, a smaller scope, or someone else who might help.",
      "Practice saying this calmly and without over-apologizing.",
    ],
    tools: ["A visible calendar or task list you can reference honestly"],
    scenario: {
      title: "\"I can take that on if we move X to next week\"",
      body: "A club treasurer said yes to every additional task asked of her until she missed a filing deadline. The next semester, she began responding to new requests with, \"I can take that on if we move X to next week,\" and both her stress and her reputation for reliability improved.",
    },
    pitfalls: [
      "Setting boundaries too aggressively, which can read as inflexibility",
      "Not setting them at all out of fear of seeming difficult",
    ],
    successSignal:
      "You can decline or renegotiate a request without damaging the relationship, and people continue to respect and rely on you afterward.",
    milestoneTies: [29],
  },

  31: {
    definition:
      "A complete, professional profile that accurately represents your experience, skills, and direction, structured so recruiters and connections can quickly understand your value.",
    whyItMatters:
      "LinkedIn is often the first place a recruiter or potential connection looks after meeting you, and an incomplete or generic profile undercuts every other effort you make in networking and job searching.",
    whenWhoWhere: [
      { label: "When", body: "Build a complete profile before your first networking event or internship application season, then update it every semester." },
      { label: "Who", body: "A career advisor for structural feedback, and a few trusted peers or mentors for endorsements once the profile is live." },
      { label: "Where", body: "Built and maintained entirely on LinkedIn, with content drawn from your resume, brand statement, and project work." },
    ],
    howItWorks: [
      "Complete every section: professional photo, headline, About section, experience with quantified achievements, skills, and education.",
      "Request a small number of genuine recommendations rather than generic ones.",
      "Turn on \"open to work\" settings appropriately for your search stage.",
    ],
    tools: ["LinkedIn's profile strength indicator", "Your finalized resume and brand statement"],
    scenario: {
      title: "A complete profile out-performed an equally strong resume",
      body: "A student with a mostly blank LinkedIn profile got far fewer responses to connection requests than a classmate with a complete profile and two specific recommendations, even though their resumes were comparably strong.",
    },
    pitfalls: [
      "Leaving the profile half-finished",
      "Using a casual or outdated photo",
      "Copying resume bullet points verbatim without adapting them",
    ],
    successSignal:
      "LinkedIn shows your profile as \"all-star\" or fully complete, and people you message respond because your profile gave them enough context to trust the conversation.",
    milestoneTies: [32, 47, 36],
  },

  32: {
    definition:
      "The short text under your name on LinkedIn, crafted to communicate your focus and value at a glance, rather than defaulting to your current job or school title alone.",
    whyItMatters:
      "The headline is the single most visible piece of text on LinkedIn, appearing in every search result and comment you make. A generic headline like \"Student at University\" wastes that visibility.",
    whenWhoWhere: [
      { label: "When", body: "Update this as soon as your Personal Brand Statement is finalized, and revise it each time your focus shifts." },
      { label: "Who", body: "No formal collaborator needed, though a mentor can sanity-check whether the headline is clear to someone outside your field." },
      { label: "Where", body: "Edited directly in LinkedIn's profile settings, visible everywhere your name appears on the platform." },
    ],
    howItWorks: [
      "Combine your role or major with your specific focus and, if space allows, the value you bring.",
      "Follow a pattern like \"[Role] focused on [specific area]: [value or outcome].\"",
      "Keep it under LinkedIn's character limit and avoid buzzwords that don't say anything concrete.",
    ],
    tools: ["Your Personal Brand Statement draft as source material"],
    scenario: {
      title: "From default title to relevant connection requests",
      body: "A student changed her headline from \"Student at State University\" to \"Marketing Student Focused on Sustainable Consumer Brands | Ross School of Business,\" and began receiving significantly more relevant connection requests from recruiters in that niche.",
    },
    pitfalls: [
      "Stuffing the headline with unrelated keywords to game search",
      "Leaving the LinkedIn default title with no customization at all",
    ],
    successSignal:
      "People who view your profile understand your focus within three seconds, without needing to scroll to the About section.",
    milestoneTies: [21],
  },

  33: {
    definition:
      "A short, well-written biography, typically 3 to 5 sentences, used across LinkedIn, personal websites, speaker introductions, and professional applications.",
    whyItMatters:
      "A polished bio saves you from writing a rushed, inconsistent version each time one is requested, and ensures your story is told the way you intend across every platform.",
    whenWhoWhere: [
      { label: "When", body: "Draft this once your brand statement and value statement are finalized, since the bio expands on both." },
      { label: "Who", body: "A mentor or writing center advisor to review clarity and tone." },
      { label: "Where", body: "Used on LinkedIn About sections, personal websites, conference or club speaker bios, and application forms that request one." },
    ],
    howItWorks: [
      "Open with your current role or focus.",
      "Add one or two specific achievements or areas of expertise.",
      "Close with your direction or what you're currently building toward.",
      "Write in third person for formal use and first person for platforms like LinkedIn.",
    ],
    tools: ["Your Personal Brand Statement and Value Statement drafts"],
    scenario: {
      title: "Five minutes instead of an hour of scrambling",
      body: "A student was asked last-minute to submit a bio for a panel and sent a rushed, unfocused paragraph. After that experience, he kept a polished bio on hand, and the next request took five minutes instead of an hour of scrambling.",
    },
    pitfalls: [
      "Writing a bio that's just a list of activities with no throughline",
      "Making it so long that no one reads past the first sentence",
    ],
    successSignal:
      "You can submit a polished bio within minutes whenever one is requested, without needing to draft from scratch each time.",
    milestoneTies: [21, 24],
  },

  34: {
    definition:
      "A thorough review and cleanup of your online presence across search results and social platforms to ensure it supports, rather than undermines, your professional image.",
    whyItMatters:
      "The majority of employers now search candidates online before or after an interview. Content posted years ago in a different context can resurface and create doubt that outweighs a strong resume.",
    whenWhoWhere: [
      { label: "When", body: "Conduct this before your first serious job or internship search, and repeat it once a year." },
      { label: "Who", body: "No collaborator required, though a trusted friend can offer a second perspective on what an outsider would see." },
      { label: "Where", body: "Conducted by searching your own name across search engines and reviewing the privacy and content settings on every social platform you use." },
    ],
    howItWorks: [
      "Search your name in an incognito browser and review the first few pages of results.",
      "Check privacy settings on personal social accounts and consider making them private or curating them.",
      "Delete or archive posts that could be misread out of context.",
    ],
    tools: ["An incognito or private browser window", "Each platform's privacy and archive settings"],
    scenario: {
      title: "One afternoon before the next round of applications",
      body: "A student assumed her old social accounts were irrelevant to her job search until a recruiter mentioned finding an old post during a background check. She spent one afternoon auditing and privatizing her accounts before her next round of applications.",
    },
    pitfalls: [
      "Assuming privacy settings alone are enough without checking what's publicly indexed",
      "Auditing once and never revisiting it",
    ],
    successSignal:
      "Searching your own name returns results you'd be comfortable with an employer seeing, with no unpleasant surprises.",
    milestoneTies: [31, 53],
  },

  35: {
    definition:
      "A simple, self-owned site showcasing your resume, projects, and contact information in one place you fully control, independent of any single platform.",
    whyItMatters:
      "A personal website signals initiative and gives you a space to showcase work in more depth than LinkedIn or a resume allow, particularly valuable in creative, technical, or entrepreneurial fields.",
    whenWhoWhere: [
      { label: "When", body: "Build this once you have at least two or three projects worth showcasing, typically by your junior year." },
      { label: "Who", body: "A peer with basic web design experience if you want help, though many modern tools require no coding at all." },
      { label: "Where", body: "Hosted on a simple site builder, linked from your LinkedIn, resume, and email signature." },
    ],
    howItWorks: [
      "Choose a simple site builder.",
      "Include a homepage with your brand statement, a projects or portfolio page, a resume download, and a contact method.",
      "Keep the design clean and prioritize easy navigation over visual complexity.",
    ],
    tools: ["No-code site builder (Carrd, Wix, or Notion)", "A custom domain if budget allows"],
    scenario: {
      title: "The first link recruiters clicked",
      body: "A design student's personal website, built in an afternoon with a free site builder, became the first link recruiters clicked after her LinkedIn, and directly led to two interview requests that mentioned specific projects from the site.",
    },
    pitfalls: [
      "Over-engineering the site with unnecessary complexity",
      "Launching it and then never updating it as new projects come in",
    ],
    successSignal:
      "You can confidently share the link in any professional context, and it accurately reflects your most current work.",
    milestoneTies: [36, 33],
  },

  36: {
    definition:
      "A curated collection of your best projects and achievements, presented with enough context that someone unfamiliar with your work can understand what you did and why it mattered.",
    whyItMatters:
      "A resume tells an employer what you claim to have done; a portfolio shows them. For many fields, especially creative, technical, and project-based ones, a strong portfolio outweighs a resume in hiring decisions.",
    whenWhoWhere: [
      { label: "When", body: "Start collecting portfolio-worthy work as early as freshman year, and formally build the portfolio once you have three to five strong pieces." },
      { label: "Who", body: "A mentor or professor in your field to help you select which projects actually demonstrate the skills employers care about." },
      { label: "Where", body: "Hosted on your personal website or a platform suited to your field, such as Behance for design or GitHub for code." },
    ],
    howItWorks: [
      "Select three to five projects that best represent your range and strongest skills.",
      "For each, write a short case study: the problem, your specific role, your process, and the outcome.",
      "Prioritize depth on a few strong pieces over breadth across many weak ones.",
    ],
    tools: ["Field-appropriate hosting (Behance, GitHub, personal website)", "A simple case-study template"],
    scenario: {
      title: "Three strong pieces beat eight mediocre ones",
      body: "A student included eight mediocre projects in his first portfolio draft. After cutting it down to his three strongest, with a clear case study for each, feedback from mentors and interviewers noticeably improved.",
    },
    pitfalls: [
      "Including too many projects without context",
      "Presenting only the final output without explaining your role and process",
    ],
    successSignal:
      "Someone reviewing your portfolio can clearly explain what you did and why it was difficult or valuable, without you being in the room to narrate it.",
    milestoneTies: [53, 56],
  },

  37: {
    definition:
      "A strong, consistent visual identity across LinkedIn, your resume, and your personal website through one well-composed, professional photo.",
    whyItMatters:
      "Your photo is often the first thing people notice on your LinkedIn profile, and a casual or low-quality image can undercut an otherwise strong profile before anyone reads a word.",
    whenWhoWhere: [
      { label: "When", body: "Get this done before you begin actively networking or applying for internships, since it appears everywhere your professional identity does." },
      { label: "Who", body: "A campus photography service, a friend with a good camera, or a professional photographer if budget allows." },
      { label: "Where", body: "Taken against a simple, neutral background with good natural lighting, then used consistently across every platform." },
    ],
    howItWorks: [
      "Dress as you would for an interview in your target field.",
      "Use natural light facing a window if shooting yourself.",
      "Take several shots with slightly different expressions.",
      "Choose the one that looks approachable and confident, then use it everywhere for consistency.",
    ],
    tools: ["A smartphone camera and natural lighting", "Campus career center headshot sessions"],
    scenario: {
      title: "A window and a friend beats a cropped party photo",
      body: "A student replaced a blurry, cropped party photo on LinkedIn with a simple headshot taken by a friend near a window, and reported a noticeable increase in profile views within weeks.",
    },
    pitfalls: [
      "Using a cropped group photo or poor lighting",
      "An overly casual setting that doesn't match your target industry's norms",
    ],
    successSignal:
      "The same professional photo appears consistently across your LinkedIn, resume, and website, and it looks like a genuine, approachable version of you.",
    milestoneTies: [31, 35],
  },

  38: {
    definition:
      "An optional visual identity, a simple color palette and mark, used to create consistency across your personal website, portfolio, and presentation materials.",
    whyItMatters:
      "For students in creative, design, or entrepreneurial paths, a consistent visual identity signals professionalism and design sensibility even before someone reviews your actual work.",
    whenWhoWhere: [
      { label: "When", body: "Consider this only after your personal website and portfolio are functional, as a polish step rather than a starting point." },
      { label: "Who", body: "A design-savvy peer or a free design tool's built-in templates if you don't have design training yourself." },
      { label: "Where", body: "Applied across your personal website, portfolio headers, resume design accents, and any presentation materials." },
    ],
    howItWorks: [
      "Choose two to three colors that feel consistent with your personal brand themes.",
      "Add a simple wordmark or initials-based logo if you want one.",
      "Apply the palette consistently rather than using it once and abandoning it.",
    ],
    tools: ["Canva or a similar design tool with color palette generators"],
    scenario: {
      title: "A palette that made the whole application feel intentional",
      body: "A design student created a simple two-color palette and initials mark for her portfolio site, and used the same palette on her resume header. Reviewers specifically commented on how polished and intentional the whole application felt.",
    },
    pitfalls: [
      "Over-investing time in visual branding at the expense of actual portfolio content",
      "Choosing a look that doesn't match your target industry's norms",
    ],
    successSignal:
      "Your materials feel visually cohesive and intentional without the visual design distracting from the substance of your work.",
    milestoneTies: [35, 36],
  },

  39: {
    definition:
      "A structured, effective approach to email communication covering tone, clarity, and appropriate formality for academic and workplace contexts.",
    whyItMatters:
      "Email is often the first and most frequent written communication a professor, recruiter, or manager receives from you, and a poorly structured email can create a negative impression before any relationship is established.",
    whenWhoWhere: [
      { label: "When", body: "Establish this before your first email to a professor, internship contact, or recruiter, since first impressions in writing are hard to undo." },
      { label: "Who", body: "No collaborator required, though reviewing emails from professionals you respect can offer useful models." },
      { label: "Where", body: "Practiced in every email sent to professors, internship contacts, recruiters, and professional organizations." },
    ],
    howItWorks: [
      "Use a clear subject line, a proper greeting, a concise purpose statement in the first two sentences, a specific ask, and a professional closing.",
      "Proofread before sending.",
      "Match formality to the relationship without being overly stiff.",
    ],
    tools: ["Grammarly or a built-in spelling and grammar checker", "A saved template for common email types"],
    scenario: {
      title: "A response within a day instead of being ignored",
      body: "A student's first email to a potential mentor had no subject line and jumped straight into a request with no context. After restructuring with a clear subject and a two-sentence introduction before the ask, he received a response within a day instead of being ignored.",
    },
    pitfalls: [
      "Skipping the subject line",
      "Burying the actual request several paragraphs in",
      "Using an overly casual tone with someone you don't know well",
    ],
    successSignal:
      "Your emails get read and responded to promptly, without the recipient needing to ask for clarification on what you're requesting.",
    milestoneTies: [40],
  },

  40: {
    definition:
      "A set of reusable, adaptable formats for common professional emails, such as introductions, follow-ups, and thank-you notes, that save time while maintaining quality.",
    whyItMatters:
      "Writing every professional email from scratch is slow and increases the chance of forgetting a key element under time pressure. Templates ensure consistency and speed without sacrificing quality.",
    whenWhoWhere: [
      { label: "When", body: "Build these once your general email style is established, ideally before a busy season like internship application deadlines." },
      { label: "Who", body: "No collaborator required, though templates can be improved by studying well-written emails others have sent you." },
      { label: "Where", body: "Stored in a notes app or drafts folder for quick access whenever a relevant situation arises." },
    ],
    howItWorks: [
      "Draft templates for your three or four most common email types: a cold introduction, a follow-up after meeting someone, a thank-you after an interview, and a check-in with a mentor.",
      "Leave clear placeholders for personalization so each email still feels genuine.",
    ],
    tools: ["A notes app or email drafts folder"],
    scenario: {
      title: "Twenty minutes down to five",
      body: "A student who used to spend 20 minutes drafting each thank-you email built a simple template with placeholders, cutting that time to five minutes while actually improving consistency and never forgetting a key detail again.",
    },
    pitfalls: [
      "Sending a template without personalizing the placeholders, which reads as impersonal",
    ],
    successSignal:
      "You can send a polished, appropriate email within minutes for any common professional situation, and it never feels copy-pasted to the recipient.",
    milestoneTies: [39],
  },

  41: {
    definition:
      "The practiced skill of participating professionally and visibly in discussions and meetings, contributing meaningfully without dominating or disappearing into the background.",
    whyItMatters:
      "How you show up in meetings, whether you contribute, how you frame disagreement, whether you follow up, shapes your reputation as much as your actual output does, especially early in a career when your work product is less visible.",
    whenWhoWhere: [
      { label: "When", body: "Practice this in any group project, club meeting, or internship team meeting, starting as early as freshman year group work." },
      { label: "Who", body: "A team lead or supervisor whose meetings you attend regularly, since their observations of your presence directly shape their trust in you." },
      { label: "Where", body: "Group project meetings, club leadership meetings, and internship or job team meetings." },
    ],
    howItWorks: [
      "Prepare one specific point or question before each meeting so you have something concrete to contribute.",
      "Practice active listening by referencing what others said before adding your point.",
      "Follow up on action items you commit to during the meeting.",
    ],
    tools: ["A simple pre-meeting note with one question or contribution point"],
    scenario: {
      title: "From silent to sought-out",
      body: "A student who used to stay silent in team meetings began preparing one question in advance for each one. Within a few meetings, teammates started directing follow-up questions to her specifically, a clear signal her presence had shifted.",
    },
    pitfalls: [
      "Staying silent throughout, which reads as disengagement",
      "Dominating the conversation without leaving space for others",
    ],
    successSignal:
      "Team members reference your contributions afterward, and you leave meetings having actually influenced the direction of the conversation.",
    milestoneTies: [42, 43],
  },

  42: {
    definition:
      "The ability to ask thoughtful, well-timed questions that demonstrate genuine engagement and often reveal more insight than confident statements would.",
    whyItMatters:
      "Good questions are frequently remembered more than good answers, particularly in interviews, networking conversations, and classroom discussions, where they signal genuine curiosity rather than rehearsed performance.",
    whenWhoWhere: [
      { label: "When", body: "Practice this continuously, but pay particular attention before interviews and informational interviews, where the questions you ask are directly evaluated." },
      { label: "Who", body: "No specific collaborator required, though reviewing questions asked by strong interviewers or moderators can help you build a mental library." },
      { label: "Where", body: "Classroom discussions, interviews, informational interviews, and networking conversations." },
    ],
    howItWorks: [
      "Prepare two or three specific, researched questions before any important conversation.",
      "Avoid questions easily answered by a basic search, and favor ones that invite a real story or opinion.",
      "Practice active listening so follow-up questions build naturally on what the other person just said.",
    ],
    tools: ["A notes app to prepare questions in advance"],
    scenario: {
      title: "\"What's one thing that surprised you?\"",
      body: "A student asked a generic question in an informational interview (\"what's it like working there?\") and got a generic answer. In her next interview, she asked, \"what's one thing about this role that surprised you after you started?\" and the richer answer led to a genuine, memorable conversation.",
    },
    pitfalls: [
      "Asking questions that are easily searchable online",
      "Asking so many that the conversation feels like an interrogation",
    ],
    successSignal:
      "The person you're speaking with visibly pauses to think before answering, and the conversation goes somewhere neither of you expected.",
    milestoneTies: [41, 43],
  },

  43: {
    definition:
      "The deliberate development of active listening: fully attending to what someone says, reflecting it back, and responding to their actual point rather than to what you planned to say next.",
    whyItMatters:
      "Most people listen to respond rather than to understand, which shows in conversations that feel disjointed or self-focused. Genuine listening builds trust faster than almost any other communication skill.",
    whenWhoWhere: [
      { label: "When", body: "Practice this in every professional conversation, but it's especially important during feedback sessions, mentor meetings, and interviews." },
      { label: "Who", body: "A friend or mentor willing to give you honest feedback on whether you actually listen or just wait to talk." },
      { label: "Where", body: "One-on-one mentor meetings, feedback conversations, interviews, and team discussions." },
    ],
    howItWorks: [
      "In your next few conversations, practice paraphrasing what the other person said before adding your own point.",
      "Resist the urge to plan your response while they're still speaking.",
      "Ask a follow-up question based on their actual words rather than pivoting to your own agenda.",
    ],
    tools: ["No specific tool: a practiced behavior reinforced through deliberate attention"],
    scenario: {
      title: "From defending to receiving better feedback",
      body: "A student receiving critical feedback from a professor used to immediately explain or defend, which shut down the conversation. After practicing paraphrasing the feedback back before responding, professors began giving him more detailed, useful feedback over time.",
    },
    pitfalls: [
      "Interrupting to share your own related story",
      "Nodding along without actually processing what's being said",
    ],
    successSignal:
      "People comment that you're easy to talk to, and conversations with you tend to go deeper rather than staying surface-level.",
    milestoneTies: [41, 42],
  },

  44: {
    definition:
      "A practiced, recorded attempt at presenting ideas clearly out loud, used to identify and correct filler words, pacing issues, and unclear structure before a real audience sees them.",
    whyItMatters:
      "Most people underestimate how many filler words or unclear transitions they use until they watch themselves on video. A recording turns invisible habits into visible, fixable ones.",
    whenWhoWhere: [
      { label: "When", body: "Do this before any presentation, interview, or speaking opportunity with real stakes, and periodically even without a specific event coming up." },
      { label: "Who", body: "No collaborator required for the recording itself, though a mentor's feedback on the playback adds valuable outside perspective." },
      { label: "Where", body: "Recorded privately using your phone, ideally practicing the actual content you'll present in the real setting." },
    ],
    howItWorks: [
      "Choose a short topic, such as your elevator pitch or a class presentation.",
      "Record yourself delivering it without stopping.",
      "Watch it back and note filler words, pacing, and clarity.",
      "Re-record after adjusting, and compare the two versions.",
    ],
    tools: ["A smartphone camera or voice recorder"],
    scenario: {
      title: "Fourteen \"ums\" in ninety seconds",
      body: "A student preparing for a case competition recorded her pitch and was startled to count fourteen \"ums\" in ninety seconds. After three re-recorded attempts with conscious pausing instead of filler words, her final live pitch was noticeably more polished.",
    },
    pitfalls: [
      "Skipping the playback review, which is where the actual learning happens",
      "Recording once and assuming that's sufficient practice",
    ],
    successSignal:
      "Your filler word count drops noticeably between your first and final recorded attempt, and your delivery feels steadier under real pressure.",
    milestoneTies: [45, 56],
  },

  45: {
    definition:
      "A polished 60-second recorded self-introduction, increasingly requested by employers and useful for LinkedIn, applications, and virtual networking.",
    whyItMatters:
      "Video introductions are now a common part of applications for internships and remote roles, and having one prepared in advance prevents scrambling under a tight submission deadline.",
    whenWhoWhere: [
      { label: "When", body: "Prepare this once your professional introduction is solid, ideally before internship application season begins." },
      { label: "Who", body: "No collaborator required for recording, though feedback from a mentor or career advisor improves the final cut." },
      { label: "Where", body: "Recorded in a quiet, well-lit space with a simple, uncluttered background." },
    ],
    howItWorks: [
      "Adapt your 30-to-60-second introduction script for video delivery, slightly warmer and more expressive than a purely verbal pitch.",
      "Record in good natural lighting facing a window.",
      "Keep the background simple, and do two or three takes before selecting the strongest one.",
    ],
    tools: ["A smartphone camera, natural lighting", "A simple free video editor"],
    scenario: {
      title: "Twenty-four hours' notice, already prepared",
      body: "A student was asked to submit a video introduction with only 24 hours' notice for an internship application. Because she had already recorded and refined one months earlier, she simply updated the details and submitted a polished version instead of a rushed one.",
    },
    pitfalls: [
      "Recording in poor lighting or a cluttered background",
      "Reading visibly off a script instead of speaking naturally",
    ],
    successSignal:
      "You can submit a polished video introduction on short notice, and it comes across as natural rather than rehearsed or read.",
    milestoneTies: [19, 44],
  },

  46: {
    definition:
      "The intentional, professional use of social platforms to support your career direction rather than letting your online presence form passively or work against you.",
    whyItMatters:
      "Recruiters increasingly view public social profiles as part of a candidate's overall impression, and an intentional, professional presence can actively support your job search rather than merely avoiding harm.",
    whenWhoWhere: [
      { label: "When", body: "Begin developing this once your Digital Footprint Audit is complete and your accounts are already clean." },
      { label: "Who", body: "No collaborator required, though following professionals in your target field is a useful way to calibrate appropriate tone." },
      { label: "Where", body: "Applied across LinkedIn primarily, and selectively on other platforms depending on your industry's norms." },
    ],
    howItWorks: [
      "Decide which platforms will carry a professional presence versus stay fully private.",
      "On professional platforms, post or share content aligned with your brand themes at a sustainable, realistic frequency rather than forcing daily posts.",
    ],
    tools: ["A content calendar or simple reminder system"],
    scenario: {
      title: "One comment a week, recognized by name",
      body: "A student who previously used LinkedIn only to accept connection requests started sharing one thoughtful comment or repost per week related to her field. Within a semester, several recruiters mentioned recognizing her name from her consistent, relevant activity.",
    },
    pitfalls: [
      "Trying to maintain a posting frequency that isn't sustainable",
      "Posting content that doesn't connect to any clear professional theme",
    ],
    successSignal:
      "Your visible online activity, however modest, is recognizable as connected to a consistent professional direction rather than random or absent.",
    milestoneTies: [47],
  },

  47: {
    definition:
      "The practice of thoughtfully commenting on and engaging with others' posts in your field, building visibility and relationships before you're ready to post original content yourself.",
    whyItMatters:
      "Engaging thoughtfully with others' content is lower-pressure than posting original content and still builds real visibility, since your name and insight appear in front of that person's entire network.",
    whenWhoWhere: [
      { label: "When", body: "Start this as soon as your LinkedIn profile is complete, well before you're ready to publish original posts." },
      { label: "Who", body: "No collaborator required, though following a handful of active voices in your target field gives you consistent content to engage with." },
      { label: "Where", body: "Practiced directly in the comment sections of posts from professionals, companies, and organizations in your target field." },
    ],
    howItWorks: [
      "Follow ten to fifteen relevant accounts in your field.",
      "When something resonates, comment with a genuine, specific reaction or question rather than a generic \"great post.\"",
      "Aim for a small, sustainable number of thoughtful comments per week.",
    ],
    tools: ["LinkedIn's follow and notification features"],
    scenario: {
      title: "One comment, one direct message",
      body: "A student began leaving one specific, thoughtful comment per week on posts from professionals in her target industry. One comment led to a direct message from a hiring manager who remembered her insight weeks later during a recruiting push.",
    },
    pitfalls: [
      "Leaving generic comments like \"great post!\" that add no value",
      "Engaging so rarely that no pattern of visibility builds",
    ],
    successSignal:
      "People in your target field start recognizing your name in their notifications, and some respond directly to your comments.",
    milestoneTies: [48, 49],
  },

  48: {
    definition:
      "The practice of sharing an article, post, or resource relevant to your field along with your own brief, genuine reflection, rather than sharing with no added commentary.",
    whyItMatters:
      "Sharing content with your own perspective attached demonstrates that you engage critically with your field, not just passively consume it, which is a small but meaningful signal to anyone reviewing your profile.",
    whenWhoWhere: [
      { label: "When", body: "Begin this once you're comfortable with commenting, typically a few weeks into building that habit." },
      { label: "Who", body: "No collaborator required, though noticing what respected voices in your field choose to share can inform your own choices." },
      { label: "Where", body: "Shared on LinkedIn primarily, timed around content that's genuinely relevant to your specific brand themes." },
    ],
    howItWorks: [
      "When you read something genuinely interesting in your field, share it with two to three sentences explaining why it matters to you.",
      "Keep the reflection specific rather than a generic \"interesting read.\"",
    ],
    tools: ["A habit of saving interesting articles as you encounter them"],
    scenario: {
      title: "A two-sentence reflection that started a conversation",
      body: "A student shared an industry report with a two-sentence reflection connecting it to a project she'd worked on, and a professional in that field commented, leading to a genuine conversation and eventually an informational interview.",
    },
    pitfalls: [
      "Sharing content with no commentary at all, which reads as low-effort",
      "Sharing so frequently that it feels like noise rather than genuine insight",
    ],
    successSignal:
      "Your shares generate real comments or discussion rather than passing likes, showing your reflection actually resonated with your audience.",
    milestoneTies: [49, 50],
  },

  49: {
    definition:
      "Your first piece of original written content, typically 400 to 800 words, published to demonstrate genuine thinking and expertise in your area of focus.",
    whyItMatters:
      "Original writing demonstrates a level of thinking and initiative that sharing others' content cannot. It's also one of the most durable pieces of evidence you can point to in an interview or portfolio.",
    whenWhoWhere: [
      { label: "When", body: "Write your first post once you've built a habit of engagement and sharing, and have a specific idea worth developing." },
      { label: "Who", body: "A mentor or peer to review a draft before publishing, since a second set of eyes catches unclear reasoning you might miss." },
      { label: "Where", body: "Published on LinkedIn's article feature, Medium, or your personal website's blog section." },
    ],
    howItWorks: [
      "Choose a specific, narrow topic rather than a broad one, ideally something you have direct experience with.",
      "Draft an outline, write a full first draft without over-editing.",
      "Revise for clarity and cut anything that doesn't serve the main point.",
    ],
    tools: ["LinkedIn Articles, Medium, or your personal website's blog feature", "Grammarly or Hemingway"],
    scenario: {
      title: "The mistake post that outperformed the tips post",
      body: "A student wrote her first post about a specific mistake she made during her first internship and what she learned from it. It got more genuine engagement than any generic \"top 5 tips\" post, because it was specific and honest rather than generic advice.",
    },
    pitfalls: [
      "Choosing a topic so broad it says nothing new",
      "Over-polishing to the point where the piece loses your authentic voice",
    ],
    successSignal:
      "Readers leave substantive comments or reach out directly in response, indicating the piece actually resonated rather than being skimmed and forgotten.",
    milestoneTies: [50],
  },

  50: {
    definition:
      "A recurring, connected set of posts or content pieces around a consistent theme, building on a single published piece into an ongoing, recognizable body of insight.",
    whyItMatters:
      "A single post shows you can write; a series shows sustained expertise and commitment to a specific area, which is significantly more compelling to employers and networks over time.",
    whenWhoWhere: [
      { label: "When", body: "Start a series once you have two or three individual posts that share a common thread worth continuing intentionally." },
      { label: "Who", body: "No collaborator required, though feedback on your first post can help you refine the theme for the rest of the series." },
      { label: "Where", body: "Published consistently on the same platform where your first post lived, ideally on a predictable schedule." },
    ],
    howItWorks: [
      "Identify the common theme across your best individual posts.",
      "Outline three to five future topics that build on it.",
      "Commit to a realistic, sustainable publishing cadence, such as monthly rather than weekly.",
    ],
    tools: ["A simple content calendar"],
    scenario: {
      title: "A five-part series people started anticipating",
      body: "After one well-received post about internship mistakes, a student outlined a five-part series on \"things no one tells you about your first internship,\" publishing one per month. By the third post, classmates and even a few professionals were actively anticipating the next installment.",
    },
    pitfalls: [
      "Committing to an unsustainable publishing frequency and abandoning the series after one or two posts",
    ],
    successSignal:
      "You have a recognizable, connected body of content that people reference back to, and your publishing rhythm is sustainable rather than a one-time burst.",
    milestoneTies: [49, 51],
  },

  51: {
    definition:
      "A researched, well-organized summary and analysis of a current trend in your target industry, shared to demonstrate genuine market awareness beyond classroom material.",
    whyItMatters:
      "Employers value candidates who follow their industry proactively rather than only knowing what's covered in coursework. A trend report demonstrates that awareness concretely and shareably.",
    whenWhoWhere: [
      { label: "When", body: "Write this once you've completed your Industry Insight worksheet from Stage One and have a genuine trend worth analyzing." },
      { label: "Who", body: "A professional in your target industry to sanity-check your analysis before you share it publicly." },
      { label: "Where", body: "Researched using industry publications and reports, then shared as a LinkedIn post, article, or portfolio piece." },
    ],
    howItWorks: [
      "Choose one specific, current trend rather than a broad industry overview.",
      "Research it using two or three credible sources.",
      "Write your own analysis of why it matters and what it might mean for someone entering the field.",
      "Cite your sources.",
    ],
    tools: ["Industry publications", "LinkedIn's trend reports", "Google Alerts for key terms"],
    scenario: {
      title: "The piece a recruiter had already read",
      body: "A student wrote a short analysis of a shift she'd noticed in sustainable packaging regulations relevant to her target industry, citing two industry reports. A recruiter later referenced the piece specifically during her interview, having found it while researching her profile.",
    },
    pitfalls: [
      "Simply summarizing a single article without adding your own analysis",
      "Choosing a trend too broad or too outdated to feel current",
    ],
    successSignal:
      "The piece demonstrates genuine understanding beyond surface-level summary, and someone in the industry could learn something from your specific angle on it.",
    milestoneTies: [8, 41],
  },

  52: {
    definition:
      "A small set of prepared, genuine ways to initiate meaningful conversations with professionals, mentors, or peers in professional settings, rather than relying on small talk alone.",
    whyItMatters:
      "Many students avoid networking events because they don't know how to start conversations beyond surface-level small talk, which limits the actual value of attending.",
    whenWhoWhere: [
      { label: "When", body: "Prepare these before any networking event, career fair, or conference, refreshing them based on the specific event or audience." },
      { label: "Who", body: "No collaborator required, though observing skilled networkers' opening lines can inform your own approach." },
      { label: "Where", body: "Used at career fairs, conferences, alumni events, and any setting where you're meeting new professional contacts." },
    ],
    howItWorks: [
      "Prepare three or four openers tied to the specific event or shared context: a recent industry event, a company's latest project, a genuine question about someone's path into the field.",
      "Avoid generic openers like \"how's it going\" that don't invite a substantive answer.",
    ],
    tools: ["A short notes list to review right before the event"],
    scenario: {
      title: "From the snack table to three real conversations",
      body: "A student who used to hover awkwardly near the snack table at career fairs prepared three specific openers tied to each company's recent news before attending. He had three genuine conversations that event instead of his usual zero.",
    },
    pitfalls: [
      "Relying entirely on generic small talk",
      "Preparing openers so scripted they don't adapt naturally to the actual conversation",
    ],
    successSignal:
      "Your conversations move past small talk into a genuine exchange within the first minute or two, rather than staying surface-level throughout.",
    milestoneTies: [20],
  },

  53: {
    definition:
      "A tailored, impact-driven resume that communicates your strengths, achievements, and potential clearly, rather than simply listing responsibilities and course titles.",
    whyItMatters:
      "Without a strong resume, even the most talented candidate may never get noticed. Most resumes are skimmed for six to ten seconds, so clarity and impact in that window matter more than completeness.",
    whenWhoWhere: [
      { label: "When", body: "Build your first draft early in your academic career, not just before graduation, so you can keep strengthening it with each new experience." },
      { label: "Who", body: "A career center advisor, a mentor, or a peer for structural and content feedback before finalizing." },
      { label: "Where", body: "Refined at the career center, through LinkedIn examples for formatting ideas, and in feedback sessions with people further along in your field." },
    ],
    howItWorks: [
      "Choose a clean, ATS-friendly template, then draft your first version listing every relevant experience.",
      "Rewrite each bullet point to lead with an action verb and end with a measurable outcome wherever possible.",
      "Get feedback, then tailor the final version's keywords to each specific job posting.",
    ],
    tools: ["A clean resume template", "Canva or Google Docs", "The specific job posting for keyword tailoring"],
    scenario: {
      title: "Callbacks within the first ten applications",
      body: "A student's resume was a plain list of course titles and club memberships. After rewriting it around specific, measurable project outcomes, like \"increased club event attendance by 40 percent through a redesigned outreach strategy,\" she started getting callbacks within her first ten applications.",
    },
    pitfalls: [
      "Submitting the same generic resume to every job posting",
      "Listing responsibilities instead of quantified achievements",
    ],
    successSignal:
      "You start getting callbacks within your first ten applications, a sign the resume is clearing the initial screening bar.",
    milestoneTies: [21, 36],
  },

  54: {
    definition:
      "A compelling, story-driven letter that goes beyond restating your resume to explain specifically why you and this particular opportunity are a strong match.",
    whyItMatters:
      "Many candidates skip the cover letter or write a generic one that repeats the resume, missing a real opportunity to tell a specific story that a bullet-pointed resume can't capture.",
    whenWhoWhere: [
      { label: "When", body: "Write this whenever an application specifically requests one, and consider including a brief version even when it's optional for a strong-priority role." },
      { label: "Who", body: "A career advisor or mentor to review the draft, ideally someone who knows the target company or role." },
      { label: "Where", body: "Written specifically for each application, referencing the company's actual mission, product, or recent work." },
    ],
    howItWorks: [
      "Open with a specific hook connecting you to the company, not a generic \"I am writing to apply.\"",
      "Use the body to tell one concrete story that demonstrates a key qualification, rather than restating your whole resume.",
      "Close with genuine enthusiasm and a clear next step.",
    ],
    tools: ["The company's own website and recent news for specific details"],
    scenario: {
      title: "One sentence that got remembered in the interview",
      body: "A student's generic cover letter opener, \"I am excited to apply for this position,\" became, \"Your team's recent shift toward community-based marketing is exactly the kind of honest storytelling I built my capstone campaign around.\" The specific version got a noticeably better response rate.",
    },
    pitfalls: [
      "Restating the resume in paragraph form",
      "Using a generic template with no specific reference to the company or role",
    ],
    successSignal:
      "A recruiter or hiring manager mentions something specific from your cover letter during the interview, showing it actually got read and remembered.",
    milestoneTies: [53],
  },

  55: {
    definition:
      "A consistent, professional contact identity, whether a physical or digital business card, or a well-formatted email signature used across all your professional correspondence.",
    whyItMatters:
      "A polished contact identity makes it easy for people to remember and reach you after a conversation, and its absence can mean a promising connection is lost simply because no one wrote your information down.",
    whenWhoWhere: [
      { label: "When", body: "Set up an email signature immediately, since you send professional emails constantly; consider a business card before networking-heavy events like career fairs." },
      { label: "Who", body: "No collaborator required, though a design-savvy peer can help polish a physical card if you choose to have one made." },
      { label: "Where", body: "The email signature appears in every professional email you send; business cards are exchanged at networking events and career fairs." },
    ],
    howItWorks: [
      "Build an email signature including your name, program and expected graduation, and one professional link.",
      "For a business card, consider a simple digital option (a QR code linking to your LinkedIn) before investing in a printed one.",
    ],
    tools: ["Your email client's signature settings", "A free QR code generator"],
    scenario: {
      title: "From a napkin to a QR code",
      body: "A student who used to write her LinkedIn URL on a napkin at networking events switched to a QR code saved to her phone's home screen, making every exchange faster and more professional.",
    },
    pitfalls: [
      "An email signature cluttered with too many links and quotes",
      "Relying on verbally repeating your contact information instead of having something to hand over",
    ],
    successSignal:
      "People you meet at events can easily save your contact information on the spot, without you needing to spell out an email address aloud.",
    milestoneTies: [20],
  },

  56: {
    definition:
      "Presenting your key projects and case studies in a format suited for live presentation, such as an interview or a portfolio review, building on the written portfolio.",
    whyItMatters:
      "Being able to walk someone through your work verbally, clearly and confidently, is a distinct skill from writing a strong case study, and interviewers often specifically ask you to present a project live.",
    whenWhoWhere: [
      { label: "When", body: "Prepare this once your written portfolio exists, ideally before interview season when you may be asked to present live." },
      { label: "Who", body: "A mentor or peer to practice presenting to, since live delivery reveals gaps that a written case study doesn't." },
      { label: "Where", body: "Practiced in mock interviews, actual interviews, and portfolio review sessions with mentors or career advisors." },
    ],
    howItWorks: [
      "Choose your two strongest projects.",
      "Prepare a two-to-three-minute verbal walkthrough of each: the problem, your process, and the outcome.",
      "Practice out loud until you can present without reading from notes, and prepare for likely follow-up questions.",
    ],
    tools: ["Your written portfolio case studies, adapted for spoken delivery"],
    scenario: {
      title: "From freezing to flowing naturally",
      body: "A student who wrote strong portfolio case studies froze when asked to \"walk me through this project\" live in an interview. After practicing a timed verbal version with a mentor, her next interview presentation flowed naturally and led to a strong offer.",
    },
    pitfalls: [
      "Reading directly from written notes during a live presentation",
      "Going too long without checking whether the listener wants more detail",
    ],
    successSignal:
      "You can present any of your top projects clearly and confidently without notes, adapting the depth based on the listener's questions.",
    milestoneTies: [36],
  },

  57: {
    definition:
      "A structured session where you get direct feedback on your portfolio and application materials from mentors, professionals, or career advisors, before they reach a real employer.",
    whyItMatters:
      "It's easy to become blind to your own portfolio's weaknesses after staring at it for weeks. Outside feedback, especially from someone in your target industry, often catches gaps that would otherwise surface for the first time in a real interview.",
    whenWhoWhere: [
      { label: "When", body: "Schedule this once your portfolio, resume, and LinkedIn are all in a reasonably complete state, ideally a few weeks before you start actively applying." },
      { label: "Who", body: "A career advisor, a mentor in your target field, or a professional you've built a relationship with through earlier networking FIRSTS." },
      { label: "Where", body: "Conducted over a video call or in-person meeting where you can screen-share or walk through materials together." },
    ],
    howItWorks: [
      "Reach out to request a specific, time-bound review (30 minutes, not open-ended).",
      "Come with specific questions rather than just \"what do you think.\"",
      "Take notes and follow up with a thank-you and what you changed.",
    ],
    tools: ["Your completed portfolio, resume, and LinkedIn profile", "A specific list of prepared questions"],
    scenario: {
      title: "From vague \"looks good\" to actionable feedback",
      body: "A student asked a mentor for portfolio feedback with no specific questions and got a vague \"looks good.\" The next time, she asked three specific questions about project selection and got detailed, actionable feedback that led her to swap out a weaker piece.",
    },
    pitfalls: [
      "Asking for feedback too broadly, which tends to produce vague, unhelpful responses",
      "Not following up to show you actually applied the input",
    ],
    successSignal:
      "You leave the review with at least two or three specific, actionable changes, and your materials are noticeably stronger afterward.",
    milestoneTies: [36, 53],
  },

  58: {
    definition:
      "A final consistency check across your LinkedIn, personal website, and portfolio, verifying that your brand statement, photo, and story align everywhere someone might encounter you online.",
    whyItMatters:
      "Inconsistent information across platforms, an outdated photo on one, a different focus statement on another, creates doubt and makes you look less put-together than a candidate whose presence is fully aligned.",
    whenWhoWhere: [
      { label: "When", body: "Conduct this final check once every material in this stage is built, and repeat it each time you make a significant update to any single platform." },
      { label: "Who", body: "No collaborator required, though a second pair of eyes can catch inconsistencies you've become blind to." },
      { label: "Where", body: "Reviewed by opening your LinkedIn, personal website, portfolio, and resume side by side and comparing them directly." },
    ],
    howItWorks: [
      "Create a simple checklist covering your photo, brand statement or headline, key achievements, and contact information.",
      "Go through each platform and confirm all four are consistent.",
      "Update whichever platform is out of sync, and note a recurring reminder to repeat this check each semester.",
    ],
    tools: ["A simple checklist", "All of your platforms open simultaneously for comparison"],
    scenario: {
      title: "The mismatch a recruiter noticed",
      body: "A student updated her resume with a new internship but forgot to update her LinkedIn for three months. A recruiter noticed the mismatch and asked about it directly in an interview, an avoidable moment of doubt that a five-minute cross-check would have prevented.",
    },
    pitfalls: [
      "Updating one platform and assuming the others are automatically current",
      "Treating this as a one-time task instead of a recurring check",
    ],
    successSignal:
      "Anyone encountering you across LinkedIn, your website, your portfolio, and your resume gets the same clear, consistent story, no matter where they start.",
    milestoneTies: [31, 35, 53],
  },

  59: {
    definition:
      "A Job Application Tracker is a single organized system, usually a spreadsheet, that records every company, role, deadline, and response status across your job search. It replaces scattered memory and browser tabs with one reliable source of truth.",
    whyItMatters:
      "A serious search often means juggling fifteen, thirty, or more applications at once. Without a tracker it becomes impossible to remember which resume version went where, when you last followed up, or which deadlines are approaching, and missed follow-ups quietly cost real opportunities.",
    whenWhoWhere: [
      { label: "When", body: "Build this before you send your first application, not after you have already lost track of the first five." },
      { label: "Who", body: "No collaborator required, though a career advisor can suggest useful columns based on what they have seen students forget to track." },
      { label: "Where", body: "A spreadsheet tool like Google Sheets or Excel, kept open and updated in the same sitting you submit each application." },
    ],
    howItWorks: [
      "Create columns for company, role, date applied, resume and cover letter version used, application source, deadline, current status, and next action.",
      "Update it the moment you apply, not days later from memory.",
      "Review it weekly to catch anything that needs a follow-up.",
    ],
    tools: ["Google Sheets or Excel", "A dedicated job tracker app like Teal or Huntr"],
    scenario: {
      title: "The lost resume version",
      body: "A student applying to twenty roles across three weeks lost track of which resume version she had sent to a top-choice company. When they called for a follow-up interview, she could not remember which bullet points they would have seen. She started logging the exact file name and version with every entry, and never faced that confusion again.",
    },
    pitfalls: [
      "Only updating the tracker sporadically",
      "Tracking applications but never actually reviewing it to catch overdue follow-ups",
    ],
    successSignal:
      "You can answer, at a glance, exactly where every application stands without checking your email or memory.",
    milestoneTies: [60, 75],
  },

  60: {
    definition:
      "An Application Strategy is a deliberate plan for which roles you will target and how you will tailor each application, replacing a scattershot apply-to-everything approach with focused, higher-conversion effort.",
    whyItMatters:
      "Applying broadly to loosely matched roles with an identical resume typically produces a lower response rate than applying to fewer, well-matched roles with tailored materials. Strategy turns a stressful numbers game into a more controllable, confidence-building process.",
    whenWhoWhere: [
      { label: "When", body: "Build this before your first big application push of a season, and revisit it if your response rate stays low after 15 to 20 applications." },
      { label: "Who", body: "A career advisor to sanity check whether your target list is realistic given your current experience level." },
      { label: "Where", body: "Planned in a single focused session, then referenced every time you consider adding a new role to your list." },
    ],
    howItWorks: [
      "Define your must-have criteria (industry, location, role type) and your nice-to-have criteria separately.",
      "Build a target list of 15 to 25 companies that fit your must-haves.",
      "Decide your tailoring depth per tier: heavy customization for top-choice companies, moderate for the rest.",
    ],
    tools: ["Your Career Path and Role Research worksheets from Stage One"],
    scenario: {
      title: "Fewer applications, more responses",
      body: "A student applying broadly to fifty generic postings got almost no responses. After narrowing to twenty carefully chosen companies and tailoring each application specifically, her response rate roughly tripled, even with far fewer applications overall.",
    },
    pitfalls: [
      "Spreading effort so thin across too many applications that none gets a real chance",
      "Narrowing so much that too few opportunities remain in the pipeline",
    ],
    successSignal:
      "Your response rate noticeably improves compared to your untailored, unfocused applications.",
    milestoneTies: [9, 10],
  },

  61: {
    definition:
      "A Resume Version A/B Test compares two different resume formats or framings against each other by tracking which one produces more responses, replacing guesswork with actual evidence about what works for you specifically.",
    whyItMatters:
      "Advice about resume formatting varies widely and does not apply equally to every field or candidate. Testing two real versions against real employers gives you data specific to your situation instead of relying on generic rules that may not fit.",
    whenWhoWhere: [
      { label: "When", body: "Run this once you have at least two credible resume format options and a large enough application volume, typically 10 or more, to produce a meaningful comparison." },
      { label: "Who", body: "A career advisor to help design two genuinely different versions worth comparing, not two versions that are nearly identical." },
      { label: "Where", body: "Applied across your normal application pipeline, tracked in your Job Application Tracker (C1)." },
    ],
    howItWorks: [
      "Create two resume versions that differ in one meaningful way, such as a skills-first layout versus an experience-first layout.",
      "Alternate which version you send, and log which version went where.",
      "After 10 to 15 applications per version, compare response rates.",
    ],
    tools: ["Your Job Application Tracker (C1)", "A resume builder tool for creating both versions cleanly"],
    scenario: {
      title: "Skills-first won",
      body: "A student tested a traditional chronological resume against a skills-first format for the same batch of marketing roles. The skills-first version got noticeably more callbacks, showing her that leading with skills was more persuasive than leading with a thin work history.",
    },
    pitfalls: [
      "Testing two versions that are too similar to produce a meaningful difference",
      "Changing multiple variables at once so you cannot tell which change actually mattered",
    ],
    successSignal:
      "You can point to a real, evidence-based reason for choosing your final resume format, rather than a guess.",
    milestoneTies: [53, 59],
  },

  62: {
    definition:
      "Cover Letter Customization is the practiced skill of efficiently tweaking a strong base cover letter for each specific role and company, rather than sending an identical generic letter or rewriting one from scratch every time.",
    whyItMatters:
      "A fully generic cover letter is easy to spot and rarely persuasive, but rewriting one entirely for every application is not sustainable at real application volume. Efficient customization keeps quality high without burning out.",
    whenWhoWhere: [
      { label: "When", body: "Build your customization process once your base cover letter from Stage Two is finalized, before your main application push." },
      { label: "Who", body: "No collaborator required, though a mentor's read on two or three customized versions can confirm the tailoring reads as genuine." },
      { label: "Where", body: "Applied to every cover letter you send from your target list in Application Strategy (C2)." },
    ],
    howItWorks: [
      "Keep your strong base letter's structure fixed, but identify three swappable elements: the opening hook, the specific example you tell, and the closing detail about the company.",
      "For each application, spend 15 to 20 minutes updating just those three elements with something specific to that company.",
    ],
    tools: ["Your base cover letter from Stage Two", "The company's own website or recent news for specific details to swap in"],
    scenario: {
      title: "From an hour to twenty minutes",
      body: "A student initially spent over an hour rewriting each cover letter from scratch and burned out after five applications. After identifying the three swappable elements in her base letter, she cut her time to twenty minutes per letter while keeping the same level of genuine customization.",
    },
    pitfalls: [
      "Swapping in the company name but leaving generic language everywhere else",
      "Over-customizing to the point where it takes too long to sustain at volume",
    ],
    successSignal:
      "Each cover letter reads as genuinely written for that specific company, and you can produce one in under 30 minutes.",
    milestoneTies: [54],
  },

  63: {
    definition:
      "Job Listing Analysis is the practice of carefully reading a job posting to extract its actual priorities, repeated keywords, and required skills, rather than skimming it and applying based on the job title alone.",
    whyItMatters:
      "Job postings often reveal exactly what a hiring manager cares about most, through repeated language and the order requirements appear in, but most candidates skim past these signals. Reading closely lets you tailor your materials to what is actually being asked for.",
    whenWhoWhere: [
      { label: "When", body: "Do this for every role before you tailor your resume or cover letter to it, not after you have already submitted a generic version." },
      { label: "Who", body: "No collaborator required, though comparing notes with a peer applying to similar roles can reveal patterns you missed alone." },
      { label: "Where", body: "Done directly against the job posting itself, ideally saved or screenshotted since postings sometimes get taken down." },
    ],
    howItWorks: [
      "Read the posting twice. On the first pass, highlight every repeated word or phrase.",
      "On the second pass, separate requirements into must-have and nice-to-have based on the language used (required versus preferred).",
      "List the top five keywords you will make sure appear somewhere in your tailored resume.",
    ],
    tools: ["A highlighter tool if reading digitally", "A simple notes document to log keywords per posting"],
    scenario: {
      title: "The posting she almost skipped",
      body: "A student almost skipped a posting because the title sounded junior, but a close read revealed the company was actually looking for the exact consumer research experience she had built in a class project. Tailoring her resume around that overlap led to an interview she almost missed entirely.",
    },
    pitfalls: [
      "Skimming only the job title and first sentence",
      "Treating every listed skill as equally required when the posting's own language distinguishes must-haves from nice-to-haves",
    ],
    successSignal:
      "You can list the posting's top five priorities from memory after reading it once closely, and your tailored resume reflects them.",
    milestoneTies: [61, 62],
  },

  64: {
    definition:
      "STAR Answer Prep is the practice of building interview answers using the Situation, Task, Action, Result structure, which turns a vague personal anecdote into a clear, compelling, and easy-to-follow story.",
    whyItMatters:
      "Without a structure, candidates under interview pressure often ramble, bury the actual point, or forget to mention the outcome entirely. The STAR structure keeps answers concise and ensures the result does not get lost.",
    whenWhoWhere: [
      { label: "When", body: "Build your STAR bank before your first real interview, ideally as soon as you start applying, not the night before your first callback." },
      { label: "Who", body: "A mentor, career advisor, or peer to review your drafts for clarity and help you spot where the result is unclear or missing." },
      { label: "Where", body: "Drafted in a quiet planning session, then practiced out loud before any interview." },
    ],
    howItWorks: [
      "Choose five to seven of your strongest experiences.",
      "For each, write one to two sentences per STAR component: the Situation, the Task you were responsible for, the Action you specifically took, and the Result, ideally with a number attached.",
      "Practice saying each story out loud in under two minutes.",
    ],
    tools: ["A simple document or set of index cards, one per story, organized by which common interview themes each could answer"],
    scenario: {
      title: "From rambling to a tight 90 seconds",
      body: "A student used to answer tell me about a time you solved a problem with a rambling, unstructured story that trailed off. After rewriting it in STAR format, the same story became a tight 90-second answer that consistently landed well, because the interviewer could clearly hear the result.",
    },
    pitfalls: [
      "Spending most of the answer on the Situation and Task while rushing or forgetting the Result",
      "Memorizing the story so rigidly that it sounds robotic rather than conversational",
    ],
    successSignal:
      "You can tell any of your core stories in under two minutes with a clear, specific result, without sounding memorized.",
    milestoneTies: [65, 68],
  },

  65: {
    definition:
      "Behavioral Interview Prep is focused practice answering soft-skill interview questions, such as those about teamwork, conflict, and failure, using your STAR story bank to respond with clarity under pressure.",
    whyItMatters:
      "Behavioral questions appear in nearly every interview process regardless of industry, and candidates who have not practiced often freeze or default to generic, forgettable answers even when they have great real experiences to draw from.",
    whenWhoWhere: [
      { label: "When", body: "Practice this in the week before any interview, and refresh it whenever you add new stories to your STAR bank." },
      { label: "Who", body: "A peer, mentor, or career advisor to ask you questions cold, since practicing alone does not replicate the pressure of an unexpected question." },
      { label: "Where", body: "Practiced in mock settings: a career center session, a video call with a friend, or recorded solo." },
    ],
    howItWorks: [
      "Compile a list of the ten most common behavioral questions (teamwork, conflict, failure, leadership, a mistake you made).",
      "Match each to the strongest story from your STAR bank (C6), even if you have to adapt the same story for multiple questions.",
      "Practice answering out loud, timed, for each.",
    ],
    tools: ["A list of common behavioral questions from your career center or a reputable career site", "Your STAR bank from C6"],
    scenario: {
      title: "Adapting one story three ways",
      body: "A student froze when asked about a conflict with a teammate, even though she had a good story from a group project she had never practiced from that angle. After building out behavioral practice around her existing STAR bank, she adapted the same story confidently to conflict, teamwork, and leadership questions in her next three interviews.",
    },
    pitfalls: [
      "Preparing stories but never practicing them out loud under any time pressure",
      "Having only one story that gets awkwardly forced into every answer",
    ],
    successSignal:
      "You can answer an unexpected behavioral question smoothly using an adapted story from your bank, without long pauses or visible panic.",
    milestoneTies: [64],
  },

  66: {
    definition:
      "Technical Interview Prep is focused, deliberate practice on the coding, analytical, or role-specific skills your target roles will actually test, rather than generic studying disconnected from the real interview format.",
    whyItMatters:
      "Technical interviews test applied skill under time pressure and observation, a very different experience from solving the same problem alone with no time limit. Without simulated practice, even genuinely skilled candidates can underperform relative to their real ability.",
    whenWhoWhere: [
      { label: "When", body: "Start this well before your first technical interview, ideally 3 to 4 weeks ahead, since these skills build gradually rather than overnight." },
      { label: "Who", body: "A study group, mentor, or online practice community for review and accountability." },
      { label: "Where", body: "Practiced using dedicated platforms, then simulated in mock settings that replicate real time pressure and observation." },
    ],
    howItWorks: [
      "Identify the specific technical format your target roles use, such as coding challenges, Excel modeling, or analytics case questions.",
      "Practice a consistent volume of problems weekly, and review every mistake for the underlying concept rather than just the answer.",
      "Simulate timed, observed conditions at least once before a real interview.",
    ],
    tools: ["Field-specific practice platforms such as LeetCode for coding, or a case bank for analytics or consulting-style problems"],
    scenario: {
      title: "Practicing under real pressure",
      body: "A student preparing for data analyst interviews practiced SQL problems alone for weeks, always untimed and unobserved. In her first real technical interview, the added pressure of someone watching caused her to blank on syntax she knew well. After practicing several timed, observed mock sessions, her next interview went far more smoothly.",
    },
    pitfalls: [
      "Practicing only in comfortable, untimed, solo conditions that do not resemble the actual interview experience",
      "Reviewing answers without understanding the underlying concept",
    ],
    successSignal:
      "You can solve a representative practice problem correctly under time pressure while someone else watches, without your performance collapsing under the added stress.",
    milestoneTies: [68],
  },

  67: {
    definition:
      "Case/Problem-Solving Prep builds fluency with structured frameworks used to break down open-ended business problems, commonly required in consulting, strategy, and analytical interview processes.",
    whyItMatters:
      "Case interviews test how you think under ambiguity, not just whether you reach a correct answer, and candidates without a structured approach often either freeze or wander unproductively through the problem.",
    whenWhoWhere: [
      { label: "When", body: "Begin this 3 to 4 weeks before any case-interview-heavy process, such as consulting or strategy roles." },
      { label: "Who", body: "A case practice partner or club, since case interviews are inherently interactive and hard to practice realistically alone." },
      { label: "Where", body: "Practiced through structured case books and live practice sessions with a partner acting as interviewer." },
    ],
    howItWorks: [
      "Learn two or three core frameworks (such as profitability, market entry, and general problem structuring).",
      "Practice cases out loud with a partner, narrating your thinking rather than solving silently.",
      "After each practice case, get feedback specifically on your structure, not just your final answer.",
    ],
    tools: ["A case practice book or guide", "A case club or practice partner for live sessions"],
    scenario: {
      title: "Narrating her way to clearer structure",
      body: "A student trying case prep alone kept getting stuck jumping straight to answers without a clear structure. After joining a weekly case practice group and narrating her thinking out loud to a partner, her structure noticeably improved, and she started reaching more defensible conclusions under time pressure.",
    },
    pitfalls: [
      "Memorizing framework templates so rigidly that you apply them mechanically instead of adapting to the specific case",
      "Practicing only silently instead of narrating your thought process aloud",
    ],
    successSignal:
      "You can structure an unfamiliar business problem clearly within the first two minutes, and narrate your reasoning in a way a partner can follow.",
    milestoneTies: [68],
  },

  68: {
    definition:
      "A Mock Interview is a full, realistic practice interview conducted with a mentor, peer, or career advisor, simulating the actual format, pressure, and feedback loop of a real interview.",
    whyItMatters:
      "Reading about interview technique and actually performing under real conversational pressure are very different experiences, and mock interviews are the closest simulation available before the real thing.",
    whenWhoWhere: [
      { label: "When", body: "Schedule at least one mock interview before any high-stakes real interview, ideally with enough time left to act on the feedback." },
      { label: "Who", body: "A career advisor, mentor, or peer willing to ask realistic questions and give honest, specific feedback afterward." },
      { label: "Where", body: "Conducted over video call or in person, ideally in a similarly formal setting to the real interview." },
    ],
    howItWorks: [
      "Choose a mock partner unfamiliar with your prepared answers if possible, so their questions feel less predictable.",
      "Treat it as a real interview: dress accordingly, do not pause, and save all questions for the end.",
      "Ask for specific feedback on structure, filler words, and overall impression afterward.",
    ],
    tools: ["A video call platform", "A recording tool if your partner is comfortable being recorded", "A feedback template to structure the debrief"],
    scenario: {
      title: "Surfacing the gap safely",
      body: "A student who felt fully prepared on paper was caught off guard in her first mock interview by a follow-up question she had not anticipated. That stumble, safely surfaced in practice rather than in a real interview, led her to prepare a stronger response before her actual interview a week later.",
    },
    pitfalls: [
      "Choosing a mock partner who already knows all your answers, which removes the realistic unpredictability",
      "Skipping the honest feedback conversation afterward",
    ],
    successSignal:
      "You receive specific, actionable feedback that you can visibly apply and improve on in a follow-up practice round.",
    milestoneTies: [64, 73],
  },

  69: {
    definition:
      "Job Offer Negotiation Prep is the research and practice needed to negotiate salary, benefits, and perks confidently once you receive an offer, rather than accepting the first number presented out of uncertainty or discomfort.",
    whyItMatters:
      "Most first offers have room built in for negotiation, and candidates who do not negotiate, often out of fear of seeming ungrateful, can leave meaningful compensation on the table over the course of a career, not just one offer.",
    whenWhoWhere: [
      { label: "When", body: "Prepare this before you receive your first offer, not after, so you are not researching under time pressure with a deadline looming." },
      { label: "Who", body: "A mentor or someone in a similar role who can share realistic salary ranges, and a friend to practice the actual negotiation conversation with." },
      { label: "Where", body: "Research done using salary benchmarking tools, negotiation practiced over phone or video call role-play." },
    ],
    howItWorks: [
      "Research a realistic salary range for the specific role, location, and experience level using your Salary Benchmarking worksheet from Stage One.",
      "Decide your target number and your walk-away number in advance.",
      "Practice the actual negotiation conversation out loud, including how you will respond if they say no.",
    ],
    tools: ["Your Salary Benchmarking worksheet from Stage One", "Glassdoor or Levels.fyi for updated data", "A practice partner for role-play"],
    scenario: {
      title: "Asking without tension",
      body: "A student almost accepted her first offer immediately out of relief and gratitude. After a mentor encouraged her to research the range and simply ask, she requested a modest increase and received it without any tension, something she would not have gotten by staying silent.",
    },
    pitfalls: [
      "Not researching a realistic range beforehand and negotiating blind",
      "Being too aggressive without acknowledging genuine enthusiasm for the role",
    ],
    successSignal:
      "You can make a specific, well-reasoned counter-request without significant anxiety, and you know your walk-away point in advance.",
    milestoneTies: [11],
  },

  70: {
    definition:
      "A Follow-Up Email After Interview is a timely, professional, and specific message sent shortly after an interview, thanking the interviewer and reinforcing why you are a strong fit for the role.",
    whyItMatters:
      "A well-written follow-up email can reinforce a strong impression and occasionally tip a close decision in your favor, while a missing or generic one is a small, easily avoidable missed opportunity.",
    whenWhoWhere: [
      { label: "When", body: "Send this within 24 hours of every interview, without exception." },
      { label: "Who", body: "No collaborator required, though a mentor can review your draft the first few times until the format becomes second nature." },
      { label: "Where", body: "Sent directly to the interviewer's email, ideally to each person you spoke with if you interviewed with multiple people." },
    ],
    howItWorks: [
      "Thank them specifically for their time.",
      "Reference one particular detail from the actual conversation to prove you were engaged.",
      "Briefly reaffirm your interest and fit, keep it under 150 words, and send it the same day if possible.",
    ],
    tools: ["Your notes taken during or immediately after the interview"],
    scenario: {
      title: "The detail that made her memorable",
      body: "A student sent a generic thank you for your time email after every interview and rarely heard back further. After starting to reference a specific detail from each actual conversation, one interviewer mentioned in a later round that her follow-up was what made the team remember her distinctly from other candidates.",
    },
    pitfalls: [
      "Sending a generic template with no reference to the actual conversation",
      "Waiting several days to send it",
    ],
    successSignal:
      "You send a specific, well-timed follow-up after every single interview, without exception, regardless of how the interview felt.",
    milestoneTies: [74],
  },

  71: {
    definition:
      "Test/Assessment Prep is targeted practice for whatever aptitude, psychometric, or role-specific assessment your target companies use as part of their hiring process, so the format itself does not cost you points you would otherwise earn.",
    whyItMatters:
      "Many companies use standardized assessments as an early screening step, and candidates unfamiliar with the specific format, timing, or question style can underperform relative to their actual ability simply due to unfamiliarity.",
    whenWhoWhere: [
      { label: "When", body: "Prepare as soon as you know which companies in your pipeline use assessments, ideally with at least a week of practice time." },
      { label: "Who", body: "No collaborator required, though comparing notes with peers who have taken the same company's assessment can be valuable if available." },
      { label: "Where", body: "Practiced using official or reputable third-party practice platforms that mirror the real test format." },
    ],
    howItWorks: [
      "Identify which specific assessment type your target company uses, by researching candidate forums or asking your recruiter directly.",
      "Find practice materials in that exact format and timing.",
      "Take at least one full timed practice test under realistic conditions before the real one.",
    ],
    tools: ["Company-specific candidate forums", "Official practice platforms if the assessment provider offers them", "A timer for realistic practice conditions"],
    scenario: {
      title: "Beating the clock the second time",
      body: "A student was surprised by the strict time pressure of a numerical reasoning test she had not practiced under timed conditions, and ran out of time on the final section. Before her next assessment with a different company, she practiced under a strict timer and completed the real test with time to spare.",
    },
    pitfalls: [
      "Practicing only untimed",
      "Assuming all assessments from different companies are the same format",
    ],
    successSignal:
      "You finish a real timed practice test within the time limit with a reasonable accuracy rate before ever taking the actual assessment.",
    milestoneTies: [66],
  },

  72: {
    definition:
      "A Mock Presentation is practiced delivery of a structured idea presentation, of the kind increasingly used in interviews for roles that require presenting to clients, stakeholders, or leadership.",
    whyItMatters:
      "Some interview processes now include a presentation component specifically to evaluate how you organize and deliver ideas under time pressure, a different skill than answering conversational questions.",
    whenWhoWhere: [
      { label: "When", body: "Prepare this as soon as you know a presentation is part of an interview process, typically with one to two weeks' notice." },
      { label: "Who", body: "A mentor or peer to watch a full run-through and give feedback on both content and delivery." },
      { label: "Where", body: "Practiced in a space similar to where you will present, with any tools (slides, whiteboard) you will actually use in the real setting." },
    ],
    howItWorks: [
      "Structure your presentation with a clear opening, three main points, and a strong close.",
      "Time a full run-through and cut content until it comfortably fits the allotted time with a buffer.",
      "Practice handling likely follow-up questions after the formal presentation ends.",
    ],
    tools: ["Presentation software such as Google Slides or PowerPoint", "A timer for practice runs"],
    scenario: {
      title: "Cutting to the strongest three points",
      body: "A student preparing for a case-study presentation interview ran her first practice attempt 50% over the time limit. After cutting content down to her three strongest points and practicing twice more, she delivered confidently within time during the real interview and handled the follow-up questions smoothly.",
    },
    pitfalls: [
      "Cramming too much content into the time limit",
      "Never practicing the follow-up question portion that typically comes after a formal presentation",
    ],
    successSignal:
      "You can deliver your full presentation within the time limit, and field a follow-up question afterward without losing composure.",
    milestoneTies: [44, 56],
  },

  73: {
    definition:
      "An Interview Mindset Routine is a short, repeatable pre-interview practice combining confidence-building, visualization, and focus techniques, used to enter each interview in a calm, prepared state rather than a reactive, anxious one.",
    whyItMatters:
      "Even well-prepared candidates can underperform if nerves take over in the moments right before an interview. A consistent routine gives you something reliable to lean on regardless of how nervous you feel that day.",
    whenWhoWhere: [
      { label: "When", body: "Build this routine before your first real interview, and use it consistently every time afterward so it becomes automatic." },
      { label: "Who", body: "No collaborator required, though your Professional Confidence Mindset worksheet from Stage Two is a useful foundation to build from." },
      { label: "Where", body: "Practiced in the minutes immediately before any interview, wherever you happen to be waiting." },
    ],
    howItWorks: [
      "Design a routine combining three elements: a brief breathing exercise, a visualization of the interview going well, and a review of your one or two strongest talking points.",
      "Practice this same routine before lower-stakes situations first so it feels familiar by the time a real interview arrives.",
    ],
    tools: ["A short private space to run through the routine", "Your Professional Confidence Mindset worksheet from Stage Two"],
    scenario: {
      title: "Replacing anxious rereading with breathing",
      body: "A student used to spend the ten minutes before every interview anxiously rereading her resume, which left her more nervous, not less. After replacing that habit with a short breathing and visualization routine, she reported walking into interviews noticeably calmer and more present.",
    },
    pitfalls: [
      "Using cramming or last-minute rereading as your pre-interview routine instead of a calming, focus-building one",
    ],
    successSignal:
      "You can walk into an interview feeling grounded and prepared, even when nervous, because the routine itself is familiar and repeatable.",
    milestoneTies: [23],
  },

  74: {
    definition:
      "The Thank-You Email Habit is the consistent practice of sending a genuine thank-you message after every interview, without exception, building on the Follow-Up Email (C12) into a reliable, repeated professional habit.",
    whyItMatters:
      "A single good follow-up email is useful. A consistent habit of sending one after every interview, even ones that went poorly or ended in rejection, builds a reputation for professionalism that can pay off in unexpected ways, including referrals to other roles.",
    whenWhoWhere: [
      { label: "When", body: "Apply this after every single interview for the rest of your career, not just the ones you think went well." },
      { label: "Who", body: "No collaborator required, this is a personal consistency habit built on the template from C12." },
      { label: "Where", body: "Sent via email within 24 hours of any interview, interview stage, or informational conversation." },
    ],
    howItWorks: [
      "Treat this as a non-negotiable habit rather than a case-by-case decision.",
      "Keep your template from C12 easily accessible so there is no friction to sending it even when you are busy, tired, or discouraged after an interview that did not feel great.",
    ],
    tools: ["Your follow-up email template from C12, saved somewhere quick to access"],
    scenario: {
      title: "The referral, months later",
      body: "A student sent a genuine thank-you email even after an interview she was sure had gone badly. Months later, that same interviewer reached out with a referral to a different role at another company, remembering her professionalism even though the original role had not worked out.",
    },
    pitfalls: [
      "Only sending thank-you emails after interviews that felt successful, which misses the relationship-building value of the ones that did not",
    ],
    successSignal:
      "Sending a thank-you email becomes automatic, something you do without having to decide each time, regardless of how the interview felt.",
    milestoneTies: [70],
  },

  75: {
    definition:
      "An Application Deadline Calendar is a dedicated calendar system tracking every application deadline, interview date, and follow-up reminder, ensuring nothing slips through the cracks during a busy job search.",
    whyItMatters:
      "A job search often overlaps with a full course load or existing job, and deadlines can easily get lost among academic and personal commitments if they are not tracked somewhere separate and visible.",
    whenWhoWhere: [
      { label: "When", body: "Set this up alongside your Job Application Tracker (C1), before your search picks up real volume." },
      { label: "Who", body: "No collaborator required, though sharing key dates with a study partner or roommate can create helpful accountability." },
      { label: "Where", body: "A dedicated calendar, either a separate color in your existing calendar app or a fully separate tracking calendar." },
    ],
    howItWorks: [
      "Every time you find a role you plan to apply to, immediately add its deadline to your calendar, along with a reminder two to three days before.",
      "Add interview dates and follow-up reminders the moment they are scheduled, not after you get back to your desk.",
    ],
    tools: ["Google Calendar or a similar app with reminder functionality, color-coded separately from your academic calendar"],
    scenario: {
      title: "Never missing another deadline",
      body: "A student missed a strong-fit role's deadline entirely because she had only noted it in her tracker spreadsheet and did not check it during a particularly busy exam week. After that, she started adding every deadline directly to her phone's calendar with reminders, and never missed another one.",
    },
    pitfalls: [
      "Tracking deadlines only in a spreadsheet you do not check daily, rather than a calendar with active reminders",
    ],
    successSignal:
      "You have never missed an application deadline or interview because it was not on your calendar with enough advance warning.",
    milestoneTies: [59],
  },

  76: {
    definition:
      "A Career-Focused LinkedIn Application is the deliberate practice of applying to roles through warm network connections on LinkedIn rather than exclusively through cold online applications, since referred candidates are statistically more likely to get interviews.",
    whyItMatters:
      "Cold applications, especially at larger companies, often get filtered by automated systems before a human ever reads them. A referral or warm introduction through LinkedIn can route your application directly to a hiring manager instead.",
    whenWhoWhere: [
      { label: "When", body: "Use this approach for your top-priority target companies from your Application Strategy (C2), where a referral would meaningfully improve your odds." },
      { label: "Who", body: "Any first, second, or third-degree LinkedIn connection at your target company, even one you have not spoken to before." },
      { label: "Where", body: "Conducted entirely on LinkedIn, using the platform's search and messaging features." },
    ],
    howItWorks: [
      "Search your target company on LinkedIn and identify anyone in your network, even a distant connection, currently working there.",
      "Send a genuine, specific message explaining your interest and asking if they would be willing to refer you or share insight about the role, rather than immediately asking for a referral outright.",
    ],
    tools: ["LinkedIn's search and messaging features", "Your existing network built through Stage Two's visibility and engagement FIRSTS"],
    scenario: {
      title: "The distant connection who referred her",
      body: "A student applied cold to a competitive role and heard nothing for three weeks. She then found a distant LinkedIn connection at the same company, sent a genuine message about her interest, and was referred internally within days, leading to an interview her cold application never surfaced.",
    },
    pitfalls: [
      "Asking a stranger for a referral immediately with no context, which often gets ignored",
      "Only using this approach after already submitting many cold applications with no results",
    ],
    successSignal:
      "At least one of your target companies results in a warm introduction or referral instead of a purely cold application.",
    milestoneTies: [31, 48],
  },

  77: {
    definition:
      "A Job Research Sheet is a structured summary of a target company's values, culture, and key people, prepared before an interview so you can speak knowledgeably and ask genuinely informed questions.",
    whyItMatters:
      "Interviewers can easily tell the difference between a candidate who did real research and one who skimmed the homepage five minutes before the call, and the difference shows up directly in the quality of questions you ask.",
    whenWhoWhere: [
      { label: "When", body: "Complete this for every company before its first interview, not just the ones you are most excited about." },
      { label: "Who", body: "No collaborator required, though a current or former employee, if you can find one, is a valuable additional source beyond public information." },
      { label: "Where", body: "Researched using the company's website, recent news, Glassdoor, and LinkedIn profiles of your specific interviewers if known." },
    ],
    howItWorks: [
      "Fill in sections covering the company's mission and values, recent news or product launches, your interviewers' backgrounds if known, and the company's competitive position.",
      "Draft two or three specific, informed questions to ask based on what you find.",
    ],
    tools: ["The company's website and press page", "Glassdoor for culture insight", "LinkedIn for researching specific interviewers"],
    scenario: {
      title: "The connection that built instant rapport",
      body: "A student who researched her interviewer's LinkedIn background before a call noticed they had both attended the same regional case competition years apart, and mentioning it created an immediate, genuine rapport that carried through the rest of the conversation.",
    },
    pitfalls: [
      "Only reading the homepage about us page",
      "Preparing generic questions that could apply to any company rather than ones specific to what you actually found",
    ],
    successSignal:
      "You can ask at least one question during the interview that clearly reflects specific research, not something generic.",
    milestoneTies: [64],
  },

  78: {
    definition:
      "An Offer Comparison Matrix is a structured tool for comparing multiple job offers objectively across the factors that actually matter to you, rather than deciding based on gut feeling or salary number alone.",
    whyItMatters:
      "When real offers arrive, especially more than one at once, the pressure and excitement of the moment can make it hard to think clearly. A structured comparison keeps the decision grounded in your actual priorities from Stage One and Two rather than in the moment's emotion.",
    whenWhoWhere: [
      { label: "When", body: "Build the empty matrix before you have any offers in hand, so it is ready the moment you need it rather than assembled under decision pressure." },
      { label: "Who", body: "A mentor or trusted advisor to sanity check your weighting of different factors, since it is easy to overweight salary in the moment." },
      { label: "Where", body: "Built as a simple spreadsheet, referenced any time you are comparing two or more real offers." },
    ],
    howItWorks: [
      "List the factors that matter most to you: salary, benefits, growth potential, culture fit, location, and anything else from your Stage One Core Values Audit.",
      "Weight each factor by importance, then score each offer against every factor.",
      "Let the weighted totals inform, not dictate, your final decision.",
    ],
    tools: ["A spreadsheet template", "Your Core Values Audit and Career Vision worksheets from Stage One"],
    scenario: {
      title: "Choosing growth over the bigger number",
      body: "A student with two offers was initially drawn to the higher salary until she scored both offers against her actual priorities, including a value she had flagged in Stage One around mentorship and growth. The lower-salary offer scored higher overall, and she ultimately chose it, a decision she later said she would not have made under pure salary pressure alone.",
    },
    pitfalls: [
      "Building the matrix but then ignoring it in favor of the highest number anyway",
      "Forgetting to weight factors by actual importance to you specifically",
    ],
    successSignal:
      "You can explain your final decision with specific reference to your own weighted priorities, not just it felt right or it paid more.",
    milestoneTies: [1, 2],
  },
};
