export type SectionArtDefinition = { kind: "photo" | "route" | "bridge" | "stack" | "loop" | "network" | "matrix" | "timeline" | "privacy"; title: string; caption: string; color: string; image?: string; alt?: string; items?: readonly string[]; center?: string };

export const SECTION_ART: Record<string, SectionArtDefinition> = {
  "ISIntro": {
    "kind": "photo",
    "image": "independent-focus",
    "title": "Your development, on your terms.",
    "caption": "Your development, on your terms.",
    "alt": "A learner making notes independently in a library",
    "color": "var(--neon-pink)"
  },
  "ISPortfolio": {
    "kind": "photo",
    "image": "student-archive",
    "title": "A growing collection of work that is yours.",
    "caption": "A growing collection of work that is yours.",
    "alt": "A folio of student projects, research and creative work",
    "color": "var(--sunshine-orange)"
  },
  "ISBringToSchool": {
    "kind": "photo",
    "image": "campus-initiative",
    "title": "Start with your own journey. Bring others into it.",
    "caption": "Start with your own journey. Bring others into it.",
    "alt": "Students discussing a campus initiative with a faculty partner",
    "color": "var(--lime-zest)"
  },
  "EPIdentity": {
    "kind": "photo",
    "image": "professional-identity",
    "title": "Give your work a clear introduction.",
    "caption": "Give your work a clear introduction.",
    "alt": "Project sheets, blank business cards and a jacket prepared for professional life",
    "color": "var(--neon-pink)"
  },
  "EPHabits": {
    "kind": "photo",
    "image": "working-rhythm",
    "title": "Make a little room for consistent progress.",
    "caption": "Make a little room for consistent progress.",
    "alt": "Hands arranging a task card beside a planning grid and timer",
    "color": "var(--sunshine-orange)"
  },
  "FCWorkshops": {
    "kind": "photo",
    "image": "career-workshop",
    "title": "The conversation continues after the session.",
    "caption": "The conversation continues after the session.",
    "alt": "Students taking part in an intimate career-readiness workshop",
    "color": "var(--lime-zest)"
  },
  "FIBusinessCenter": {
    "kind": "photo",
    "image": "founder-workbench",
    "title": "Make an idea tangible. Learn from the attempt.",
    "caption": "Make an idea tangible. Learn from the attempt.",
    "alt": "An incubator workbench with cardboard prototypes and testing tools",
    "color": "var(--neon-pink)"
  },
  "FIGraduates": {
    "kind": "photo",
    "image": "graduate-transition",
    "title": "The next chapter is another beginning.",
    "caption": "The next chapter is another beginning.",
    "alt": "A young professional arriving at a city workplace",
    "color": "var(--sunshine-orange)"
  },
  "FIPilot": {
    "kind": "photo",
    "image": "pilot-circle",
    "title": "A small cohort. Room for a meaningful beginning.",
    "caption": "A small cohort. Room for a meaningful beginning.",
    "alt": "A university workshop room prepared for a small cohort",
    "color": "var(--lime-zest)"
  },
  "FEEvidence": {
    "kind": "photo",
    "image": "hiring-evidence",
    "title": "See the thinking behind the finished work.",
    "caption": "See the thinking behind the finished work.",
    "alt": "A technical project journal with an assembled prototype and process photographs",
    "color": "var(--neon-pink)"
  },
  "FECareerExposure": {
    "kind": "photo",
    "image": "industry-visit",
    "title": "Let people discover what the work feels like.",
    "caption": "Let people discover what the work feels like.",
    "alt": "Students learning about craftsmanship during a workplace visit",
    "color": "var(--sunshine-orange)"
  },
  "FEMentors": {
    "kind": "photo",
    "image": "mentor-call",
    "title": "Experience becomes useful when it is shared.",
    "caption": "Experience becomes useful when it is shared.",
    "alt": "An experienced professional discussing a career map with a younger colleague",
    "color": "var(--lime-zest)"
  },
  "FESponsor": {
    "kind": "photo",
    "image": "access-workspace",
    "title": "Access begins with a place and the tools to start.",
    "caption": "Access begins with a place and the tools to start.",
    "alt": "An accessible desk prepared with books, headphones and learning tools",
    "color": "var(--neon-pink)"
  },
  "FFDayToDay": {
    "kind": "photo",
    "image": "session-preparation",
    "title": "Good sessions begin before anyone arrives.",
    "caption": "Good sessions begin before anyone arrives.",
    "alt": "A facilitator arranging discussion cards and tokens before a session",
    "color": "var(--sunshine-orange)"
  },
  "FFGroupFacilitation": {
    "kind": "photo",
    "image": "small-group-practice",
    "title": "Different perspectives. Space for every voice.",
    "caption": "Different perspectives. Space for every voice.",
    "alt": "Adult participants listening and reflecting in a small discussion circle",
    "color": "var(--lime-zest)"
  },
  "FLCareer": {
    "kind": "photo",
    "image": "career-shadow",
    "title": "Explore a profession from the inside.",
    "caption": "Explore a profession from the inside.",
    "alt": "A young adult exploring architecture with a working architect",
    "color": "var(--neon-pink)"
  },
  "FLPeople": {
    "kind": "photo",
    "image": "leap-mentoring",
    "title": "Direction grows through thoughtful conversations.",
    "caption": "Direction grows through thoughtful conversations.",
    "alt": "A mentor and students talking as they walk through a university courtyard",
    "color": "var(--sunshine-orange)"
  },
  "AudienceScenario": {
    "kind": "photo",
    "image": "campus-project",
    "title": "Your own work. A community around you.",
    "caption": "Your own work. A community around you.",
    "alt": "Two students collaborating on a research project in a campus library",
    "color": "var(--lime-zest)"
  },
  "ISNoPartner": {
    "kind": "route",
    "title": "An independent beginning",
    "items": [
      "Your account",
      "Your pace",
      "Your progress"
    ],
    "caption": "You can begin before your institution joins.",
    "color": "var(--neon-pink)"
  },
  "ISStartWhereYouAre": {
    "kind": "bridge",
    "title": "Two ways into development",
    "items": [
      "Follow a guided sequence",
      "Explore what matters now"
    ],
    "caption": "Structure when you need it. Choice when you want it.",
    "color": "var(--sunshine-orange)"
  },
  "ISNextFirst": {
    "kind": "stack",
    "title": "Small work, real value",
    "items": [
      "A reflection",
      "A clearer choice",
      "A useful next step"
    ],
    "caption": "Each first can help before the journey is finished.",
    "color": "var(--lime-zest)"
  },
  "ISCoach": {
    "kind": "loop",
    "title": "A reflective conversation",
    "items": [
      "Ask",
      "Explore",
      "Reflect",
      "Decide"
    ],
    "caption": "Use questions to move your own thinking forward.",
    "color": "var(--neon-pink)"
  },
  "ISCenters": {
    "kind": "bridge",
    "title": "Explore both possibilities",
    "items": [
      "A career to grow into",
      "A business to build"
    ],
    "caption": "Different directions. The same curiosity.",
    "color": "var(--sunshine-orange)"
  },
  "ISFirstLeap": {
    "kind": "network",
    "title": "Discover your direction",
    "items": [
      "Self-discovery",
      "Career exploration",
      "Business exploration",
      "Perspective"
    ],
    "caption": "Make room for possibilities you have not met yet.",
    "color": "var(--lime-zest)",
    "center": "You"
  },
  "ISIPFS": {
    "kind": "route",
    "title": "From direction to depth",
    "items": [
      "Find a direction",
      "Build capability",
      "Put it to work"
    ],
    "caption": "Turn an emerging interest into deeper practice.",
    "color": "var(--neon-pink)"
  },
  "EPShift": {
    "kind": "bridge",
    "title": "A new set of questions",
    "items": [
      "What matters to me?",
      "How do I move forward?"
    ],
    "caption": "The questions change. Development continues.",
    "color": "var(--sunshine-orange)"
  },
  "EPApplications": {
    "kind": "route",
    "title": "An intentional application",
    "items": [
      "Prepare your materials",
      "Practice your story",
      "Learn from the process"
    ],
    "caption": "Applications are a capability you can develop.",
    "color": "var(--lime-zest)"
  },
  "EPExperience": {
    "kind": "stack",
    "title": "Experience you can build",
    "items": [
      "A project",
      "A contribution",
      "A reflection"
    ],
    "caption": "Give yourself something concrete to learn from.",
    "color": "var(--neon-pink)"
  },
  "EPWorkWorks": {
    "kind": "network",
    "title": "Learn the workplace",
    "items": [
      "People",
      "Expectations",
      "Communication",
      "Decisions"
    ],
    "caption": "Understand the context around your work.",
    "color": "var(--sunshine-orange)",
    "center": "You"
  },
  "EPFirsts": {
    "kind": "timeline",
    "title": "Professional firsts",
    "items": [
      "Try something new",
      "Capture the experience",
      "Build on what changed"
    ],
    "caption": "Let each experience add to your professional story.",
    "color": "var(--lime-zest)"
  },
  "EPYourWay": {
    "kind": "bridge",
    "title": "Choose your approach",
    "items": [
      "A guided path",
      "Your immediate priority"
    ],
    "caption": "Meet the moment you are actually in.",
    "color": "var(--neon-pink)"
  },
  "EPPortfolio": {
    "kind": "stack",
    "title": "Work becomes evidence",
    "items": [
      "Projects and plans",
      "Reflections and feedback",
      "Achievements and milestones"
    ],
    "caption": "A portfolio built from what you actually do.",
    "color": "var(--sunshine-orange)"
  },
  "EPNextSteps": {
    "kind": "route",
    "title": "Keep your options open",
    "items": [
      "Explore a direction",
      "Consider what to build",
      "Develop capability"
    ],
    "caption": "Your next chapter can take more than one form.",
    "color": "var(--lime-zest)"
  },
  "FCJourney": {
    "kind": "timeline",
    "title": "An ongoing journey",
    "items": [
      "Explore",
      "Practice",
      "Reflect",
      "Return"
    ],
    "caption": "Connect the moments between career-center visits.",
    "color": "var(--neon-pink)"
  },
  "FCDashboard": {
    "kind": "network",
    "title": "Signals for support",
    "items": [
      "Participation",
      "Progress",
      "Engagement",
      "Next conversation"
    ],
    "caption": "A shared view to help your team focus attention.",
    "color": "var(--sunshine-orange)",
    "center": "Students"
  },
  "FCEngagement": {
    "kind": "route",
    "title": "From signal to support",
    "items": [
      "Notice inactivity",
      "Understand the context",
      "Offer a nudge"
    ],
    "caption": "A reason to reach out, not a judgment about the student.",
    "color": "var(--lime-zest)"
  },
  "FCAdvisors": {
    "kind": "bridge",
    "title": "Prepare the conversation",
    "items": [
      "Student reflection",
      "Advisor perspective"
    ],
    "caption": "Start with context. Make space for better questions.",
    "color": "var(--neon-pink)"
  },
  "FCCareerReadiness": {
    "kind": "matrix",
    "title": "More than the job search",
    "items": [
      "Self-awareness",
      "Professional skills",
      "Experience",
      "Readiness"
    ],
    "caption": "Development begins before an application.",
    "color": "var(--sunshine-orange)"
  },
  "FCExtend": {
    "kind": "network",
    "title": "A wider circle of support",
    "items": [
      "Students",
      "Facilitators",
      "Mentors",
      "Advisors"
    ],
    "caption": "Different roles contribute to the same journey.",
    "color": "var(--lime-zest)",
    "center": "Students"
  },
  "FCBusiness": {
    "kind": "loop",
    "title": "Explore entrepreneurship",
    "items": [
      "Notice a problem",
      "Explore an idea",
      "Test a possibility",
      "Reflect"
    ],
    "caption": "Help students investigate what they could build.",
    "color": "var(--neon-pink)"
  },
  "FCMentors": {
    "kind": "bridge",
    "title": "Connect perspective to progress",
    "items": [
      "What I am exploring",
      "What you have experienced"
    ],
    "caption": "Make a mentoring conversation part of the journey.",
    "color": "var(--sunshine-orange)"
  },
  "FCPrivacy": {
    "kind": "privacy",
    "title": "A purposeful boundary",
    "items": [
      "Developmental signals",
      "Personal reflections"
    ],
    "caption": "Useful visibility with respect for personal work.",
    "color": "var(--lime-zest)"
  },
  "FCPathways": {
    "kind": "timeline",
    "title": "Different starting points",
    "items": [
      "First-year discovery",
      "Developing interests",
      "Preparing for work",
      "Beyond graduation"
    ],
    "caption": "Meet students at their stage of development.",
    "color": "var(--neon-pink)"
  },
  "FCCampusWide": {
    "kind": "network",
    "title": "A common framework",
    "items": [
      "Faculty",
      "Career center",
      "Campus partners",
      "Students"
    ],
    "caption": "Connect support without making every role identical.",
    "color": "var(--sunshine-orange)",
    "center": "Students"
  },
  "FCReporting": {
    "kind": "stack",
    "title": "Evidence across the journey",
    "items": [
      "Activity",
      "Engagement",
      "Patterns"
    ],
    "caption": "Bring developmental participation into the conversation.",
    "color": "var(--lime-zest)"
  },
  "FCTools": {
    "kind": "route",
    "title": "A simpler arrival",
    "items": [
      "School sign-in",
      "Roster connection",
      "Cohort membership"
    ],
    "caption": "Connect the administrative steps around the student.",
    "color": "var(--neon-pink)"
  },
  "FCPartnership": {
    "kind": "network",
    "title": "Build on what is working",
    "items": [
      "Advisors",
      "Workshops",
      "Employer relationships",
      "Alumni"
    ],
    "caption": "Strengthen the human expertise already on campus.",
    "color": "var(--sunshine-orange)",
    "center": "Students"
  },
  "FIMoreThan": {
    "kind": "matrix",
    "title": "The whole student",
    "items": [
      "Knowledge",
      "Skills",
      "Habits",
      "Relationships"
    ],
    "caption": "Readiness grows from connected capabilities.",
    "color": "var(--lime-zest)"
  },
  "FICampusWide": {
    "kind": "network",
    "title": "A connected campus",
    "items": [
      "Academic programs",
      "Career services",
      "Student life",
      "Entrepreneurship"
    ],
    "caption": "Shared development across different parts of campus.",
    "color": "var(--neon-pink)",
    "center": "Students"
  },
  "FIPathways": {
    "kind": "bridge",
    "title": "One framework, many routes",
    "items": [
      "A common foundation",
      "Individual directions"
    ],
    "caption": "Consistency in the structure. Flexibility in the journey.",
    "color": "var(--sunshine-orange)"
  },
  "FIModes": {
    "kind": "bridge",
    "title": "Sequence or the moment",
    "items": [
      "Guided progression",
      "Free exploration"
    ],
    "caption": "Give students more than one way to begin.",
    "color": "var(--lime-zest)"
  },
  "FICareerCenter": {
    "kind": "route",
    "title": "Beyond a job posting",
    "items": [
      "Discover interests",
      "Build readiness",
      "Connect to opportunities"
    ],
    "caption": "Support the development behind the job search.",
    "color": "var(--neon-pink)"
  },
  "FIFirstLeap": {
    "kind": "loop",
    "title": "Discovery before decision",
    "items": [
      "Reflect",
      "Explore",
      "Experience",
      "Reconsider"
    ],
    "caption": "Make room to investigate before choosing a direction.",
    "color": "var(--sunshine-orange)"
  },
  "FIPeople": {
    "kind": "network",
    "title": "People make it personal",
    "items": [
      "Facilitators",
      "Mentors",
      "Advisors",
      "Peers"
    ],
    "caption": "Technology gives structure. People bring perspective.",
    "color": "var(--lime-zest)",
    "center": "Students"
  },
  "FIMilestones": {
    "kind": "timeline",
    "title": "Give progress a shape",
    "items": [
      "An activity",
      "A reflection",
      "A milestone"
    ],
    "caption": "Connect doing something with learning from it.",
    "color": "var(--neon-pink)"
  },
  "FIPortfolio": {
    "kind": "stack",
    "title": "A portable record",
    "items": [
      "Completed work",
      "Personal reflections",
      "Development milestones"
    ],
    "caption": "The evidence grows with the student.",
    "color": "var(--sunshine-orange)"
  },
  "FIPrivacy": {
    "kind": "privacy",
    "title": "Visibility with boundaries",
    "items": [
      "Participation and progress",
      "Personal work and reflection"
    ],
    "caption": "Institutional context and student ownership can coexist.",
    "color": "var(--lime-zest)"
  },
  "FIAnalytics": {
    "kind": "route",
    "title": "Turn attention into support",
    "items": [
      "Notice engagement",
      "Understand the pattern",
      "Focus support"
    ],
    "caption": "Use signals to ask more useful questions.",
    "color": "var(--neon-pink)"
  },
  "FIPatterns": {
    "kind": "matrix",
    "title": "Look across contexts",
    "items": [
      "Cohorts",
      "Programs",
      "Stages",
      "Participation"
    ],
    "caption": "See where experiences differ across the institution.",
    "color": "var(--sunshine-orange)"
  },
  "FIIntegration": {
    "kind": "timeline",
    "title": "Around the career fair",
    "items": [
      "Prepare before",
      "Participate during",
      "Reflect after"
    ],
    "caption": "Make the event part of a longer learning journey.",
    "color": "var(--lime-zest)"
  },
  "FICohorts": {
    "kind": "network",
    "title": "A shared experience",
    "items": [
      "Common purpose",
      "Individual work",
      "Group reflection",
      "Support"
    ],
    "caption": "Belong to a cohort. Keep your own path.",
    "color": "var(--neon-pink)",
    "center": "Students"
  },
  "FITechnology": {
    "kind": "route",
    "title": "Connect the essentials",
    "items": [
      "Identity",
      "Enrollment",
      "Development"
    ],
    "caption": "Fit the learning journey into the campus environment.",
    "color": "var(--sunshine-orange)"
  },
  "FIPartnerships": {
    "kind": "matrix",
    "title": "A shared language",
    "items": [
      "Programs",
      "Departments",
      "People",
      "Development"
    ],
    "caption": "Align the purpose while preserving each team’s role.",
    "color": "var(--lime-zest)"
  },
  "FIEmployers": {
    "kind": "bridge",
    "title": "Closer to the work",
    "items": [
      "Student development",
      "Employer perspective"
    ],
    "caption": "Invite industry into the journey before recruitment.",
    "color": "var(--neon-pink)"
  },
  "FIReporting": {
    "kind": "loop",
    "title": "Learn across semesters",
    "items": [
      "Observe",
      "Review",
      "Improve",
      "Repeat"
    ],
    "caption": "Use each term to inform the next.",
    "color": "var(--sunshine-orange)"
  },
  "FIImplementation": {
    "kind": "route",
    "title": "A thoughtful rollout",
    "items": [
      "Choose a starting point",
      "Prepare your people",
      "Learn and expand"
    ],
    "caption": "Build from a practical first step.",
    "color": "var(--lime-zest)"
  },
  "FIEcosystem": {
    "kind": "bridge",
    "title": "Direction into capability",
    "items": [
      "I know where to go",
      "I am building what it takes"
    ],
    "caption": "Continue the journey beyond the first decision.",
    "color": "var(--neon-pink)"
  },
  "FEInterviewPrep": {
    "kind": "bridge",
    "title": "A better conversation",
    "items": [
      "An experience to explain",
      "A question worth asking"
    ],
    "caption": "Preparation helps both sides get beyond the surface.",
    "color": "var(--sunshine-orange)"
  },
  "FEConsistentStructure": {
    "kind": "matrix",
    "title": "Structure without sameness",
    "items": [
      "A shared framework",
      "Different strengths",
      "Different experiences",
      "Individual evidence"
    ],
    "caption": "Compare the work without flattening the person.",
    "color": "var(--lime-zest)"
  },
  "FEEmergingTalent": {
    "kind": "stack",
    "title": "Potential with context",
    "items": [
      "How they think",
      "What they try",
      "What they learn"
    ],
    "caption": "Look for the development behind the claim.",
    "color": "var(--neon-pink)"
  },
  "FEBeforeRecruiting": {
    "kind": "timeline",
    "title": "Before the application",
    "items": [
      "Exposure",
      "Practice",
      "Connection",
      "Opportunity"
    ],
    "caption": "Help people prepare before a vacancy appears.",
    "color": "var(--sunshine-orange)"
  },
  "FEChallenges": {
    "kind": "loop",
    "title": "A real problem, a learning cycle",
    "items": [
      "Understand",
      "Attempt",
      "Get feedback",
      "Improve"
    ],
    "caption": "Turn a challenge into a developmental experience.",
    "color": "var(--lime-zest)"
  },
  "FEExperiences": {
    "kind": "matrix",
    "title": "Ways to experience work",
    "items": [
      "Projects",
      "Conversations",
      "Challenges",
      "Observation"
    ],
    "caption": "Build familiarity before the first role.",
    "color": "var(--neon-pink)"
  },
  "FEAdvisory": {
    "kind": "bridge",
    "title": "Shape the preparation",
    "items": [
      "Workplace perspective",
      "Development priorities"
    ],
    "caption": "Bring the realities of work into the conversation.",
    "color": "var(--sunshine-orange)"
  },
  "FEIpfs": {
    "kind": "route",
    "title": "Deepen the capability",
    "items": [
      "Explore a direction",
      "Practice the skills",
      "Build readiness"
    ],
    "caption": "Support the next stage of preparation.",
    "color": "var(--lime-zest)"
  },
  "FEPipeline": {
    "kind": "timeline",
    "title": "Relationships before recruiting",
    "items": [
      "Introduce the work",
      "Support development",
      "Recognize progress",
      "Stay connected"
    ],
    "caption": "A talent relationship can start long before hiring.",
    "color": "var(--neon-pink)"
  },
  "FEWorkforce": {
    "kind": "loop",
    "title": "Development inside the team",
    "items": [
      "Identify a need",
      "Practice",
      "Reflect",
      "Apply"
    ],
    "caption": "Keep building after someone joins.",
    "color": "var(--sunshine-orange)"
  },
  "FEBusiness": {
    "kind": "route",
    "title": "For people who build",
    "items": [
      "Discover a problem",
      "Explore a solution",
      "Test the idea"
    ],
    "caption": "Entrepreneurial development belongs in the picture too.",
    "color": "var(--lime-zest)"
  },
  "FEScenarios": {
    "kind": "bridge",
    "title": "Two useful moments",
    "items": [
      "Before hiring: exposure",
      "In hiring: evidence"
    ],
    "caption": "Contribute early. Understand more later.",
    "color": "var(--neon-pink)"
  },
  "FENoSetup": {
    "kind": "stack",
    "title": "The work, ready to review",
    "items": [
      "A shared portfolio",
      "Evidence and context",
      "A better conversation"
    ],
    "caption": "Focus on what the candidate has chosen to show.",
    "color": "var(--sunshine-orange)"
  },
  "FFRoleDefinition": {
    "kind": "network",
    "title": "Hold the space",
    "items": [
      "Ask questions",
      "Guide practice",
      "Invite reflection",
      "Support progress"
    ],
    "caption": "Facilitation creates conditions for development.",
    "color": "var(--lime-zest)",
    "center": "Growth"
  },
  "FFWhyFacilitate": {
    "kind": "bridge",
    "title": "A shared opportunity",
    "items": [
      "Help others develop",
      "Develop your own practice"
    ],
    "caption": "Your growth and their progress can happen together.",
    "color": "var(--neon-pink)"
  },
  "FFChooseTrack": {
    "kind": "bridge",
    "title": "Choose your practice",
    "items": [
      "FIRSTS facilitation",
      "First Leap facilitation"
    ],
    "caption": "Different formats. A shared developmental purpose.",
    "color": "var(--sunshine-orange)"
  },
  "FFWhoCanApply": {
    "kind": "matrix",
    "title": "Bring your perspective",
    "items": [
      "Experience",
      "Curiosity",
      "Care",
      "Willingness to learn"
    ],
    "caption": "A thoughtful facilitator begins as a learner too.",
    "color": "var(--lime-zest)"
  },
  "FFPathway": {
    "kind": "route",
    "title": "Preparation before practice",
    "items": [
      "Learn the approach",
      "Practice the delivery",
      "Receive support"
    ],
    "caption": "Build confidence before leading a room.",
    "color": "var(--neon-pink)"
  },
  "FFTrainingCurriculum": {
    "kind": "stack",
    "title": "A foundation for facilitation",
    "items": [
      "Developmental purpose",
      "Practical methods",
      "Supported practice"
    ],
    "caption": "Learn the why as well as the how.",
    "color": "var(--sunshine-orange)"
  },
  "FFCertification": {
    "kind": "timeline",
    "title": "A credential earned through practice",
    "items": [
      "Preparation",
      "Demonstration",
      "Feedback",
      "Development"
    ],
    "caption": "Make capability part of the credential.",
    "color": "var(--lime-zest)"
  },
  "FFSpecialize": {
    "kind": "network",
    "title": "Find your focus",
    "items": [
      "Your experience",
      "Your interests",
      "Participant needs",
      "The FIRSTS framework"
    ],
    "caption": "Facilitate where your perspective can be useful.",
    "color": "var(--neon-pink)",
    "center": "Growth"
  },
  "FFReflectBoundaries": {
    "kind": "privacy",
    "title": "A space for honest reflection",
    "items": [
      "Participant ownership",
      "Facilitator support"
    ],
    "caption": "Support discovery while respecting the limits of your role.",
    "color": "var(--sunshine-orange)"
  },
  "FFSettings": {
    "kind": "matrix",
    "title": "A flexible practice",
    "items": [
      "On campus",
      "In a community",
      "In a workplace",
      "Online"
    ],
    "caption": "Different rooms. The same care for development.",
    "color": "var(--lime-zest)"
  },
  "FFFirstTerm": {
    "kind": "timeline",
    "title": "Build your first term",
    "items": [
      "Prepare",
      "Lead",
      "Reflect",
      "Refine"
    ],
    "caption": "Let the practice develop one session at a time.",
    "color": "var(--neon-pink)"
  },
  "FFFeedbackCommunity": {
    "kind": "loop",
    "title": "Get better, together",
    "items": [
      "Share experience",
      "Receive feedback",
      "Try an adjustment",
      "Reflect"
    ],
    "caption": "A community can help you improve your practice.",
    "color": "var(--sunshine-orange)"
  },
  "FFImpact": {
    "kind": "stack",
    "title": "Notice the development",
    "items": [
      "A useful question",
      "A new perspective",
      "A meaningful next step"
    ],
    "caption": "Look for the changes that matter to participants.",
    "color": "var(--lime-zest)"
  },
  "FFJourney": {
    "kind": "route",
    "title": "Your own firsts continue",
    "items": [
      "First session",
      "New learning",
      "Stronger practice"
    ],
    "caption": "Facilitation is a developmental journey of its own.",
    "color": "var(--neon-pink)"
  },
  "FLQuestions": {
    "kind": "network",
    "title": "Begin with curiosity",
    "items": [
      "Who am I?",
      "What interests me?",
      "What could I try?",
      "Where could I grow?"
    ],
    "caption": "Better questions open up better possibilities.",
    "color": "var(--sunshine-orange)",
    "center": "You"
  },
  "FLStages": {
    "kind": "timeline",
    "title": "A guided discovery",
    "items": [
      "Self-discovery",
      "Exploration",
      "Experience",
      "Direction"
    ],
    "caption": "Let the program connect each part of the process.",
    "color": "var(--lime-zest)"
  },
  "FLOutcomes": {
    "kind": "stack",
    "title": "Leave with more clarity",
    "items": [
      "A deeper self-understanding",
      "Informed possibilities",
      "A direction to investigate"
    ],
    "caption": "Discovery gives you something to build on.",
    "color": "var(--neon-pink)"
  },
  "FLFirsts": {
    "kind": "stack",
    "title": "Keep what you discover",
    "items": [
      "Experiences",
      "Reflections",
      "Milestones"
    ],
    "caption": "Your firsts become part of your ongoing story.",
    "color": "var(--sunshine-orange)"
  },
  "FLNextStage": {
    "kind": "bridge",
    "title": "Clarity meets capability",
    "items": [
      "A direction worth pursuing",
      "The ability to pursue it"
    ],
    "caption": "A next stage begins where discovery leads.",
    "color": "var(--lime-zest)"
  },
  "FLPartners": {
    "kind": "network",
    "title": "Make discovery an experience",
    "items": [
      "Schools",
      "Mentors",
      "Facilitators",
      "Industry"
    ],
    "caption": "Give students more ways to encounter possibility.",
    "color": "var(--neon-pink)",
    "center": "You"
  },
  "FLGetInvolved": {
    "kind": "bridge",
    "title": "Share what you know",
    "items": [
      "Your experience",
      "Someone else’s exposure"
    ],
    "caption": "An introduction can change what someone imagines.",
    "color": "var(--sunshine-orange)"
  },
  "AudienceFeatures": {
    "kind": "privacy",
    "title": "Your work, your choice",
    "items": [
      "Progress for your advisor",
      "Reflections owned by you"
    ],
    "caption": "Support and personal ownership, built into the journey.",
    "color": "var(--lime-zest)"
  },
  "DAThinking": {
    "kind": "photo",
    "image": "thinking-tools",
    "title": "Thinking made tangible",
    "caption": "Build better ways to reason, question, and solve.",
    "alt": "A physical puzzle, magnifying glass and folded paper representing problem-solving tools",
    "color": "var(--lime-zest)"
  },
  "DACommunication": {
    "kind": "photo",
    "image": "communication-practice",
    "title": "Ideas become clearer through practice",
    "caption": "Communication is a skill you can keep developing.",
    "alt": "A professional practicing a presentation with attentive colleagues",
    "color": "var(--neon-pink)"
  }
};
