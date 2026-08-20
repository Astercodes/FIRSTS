export type StaffRole = "Institution Admin" | "Advisor / Mentor";

export type StaffMember = {
  id: string;
  name: string;
  email: string;
  role: StaffRole;
  title: string;
  institution: string;
  cohortIds: string[];
  lastActive: string;
};

export const STAFF: StaffMember[] = [
  // New York University
  { id: "st-1", name: "Priya Nandakumar", email: "priya@nyu.edu", role: "Institution Admin", title: "VP, Career Services", institution: "New York University", cohortIds: [], lastActive: "Today" },
  { id: "st-2", name: "Devon Marsh", email: "dmarsh@nyu.edu", role: "Advisor / Mentor", title: "Advisor, Marketing", institution: "New York University", cohortIds: ["marketing-2027", "marketing-nyu-2026"], lastActive: "Today" },
  { id: "st-3", name: "Renee Okafor", email: "rokafor@nyu.edu", role: "Advisor / Mentor", title: "Advisor, Business Analytics", institution: "New York University", cohortIds: ["business-analytics-2026", "bizanalytics-nyu-2027"], lastActive: "1d ago" },
  { id: "st-4", name: "Alex Furman", email: "afurman@nyu.edu", role: "Advisor / Mentor", title: "Advisor, Computer Science", institution: "New York University", cohortIds: ["cs-2028", "cs-nyu-2027"], lastActive: "2d ago" },
  { id: "st-5", name: "Nadia Kessler", email: "nkessler@nyu.edu", role: "Advisor / Mentor", title: "Advisor, Finance", institution: "New York University", cohortIds: ["finance-nyu-2026", "finance-nyu-2027"], lastActive: "Today" },
  { id: "st-6", name: "Owen Blackwood", email: "oblackwood@nyu.edu", role: "Advisor / Mentor", title: "Advisor, Data Science", institution: "New York University", cohortIds: ["datasci-nyu-2027", "datasci-nyu-2028"], lastActive: "1d ago" },
  { id: "st-7", name: "Camille Torrance", email: "camtorrance@nyu.edu", role: "Advisor / Mentor", title: "Advisor, Psychology", institution: "New York University", cohortIds: ["psych-nyu-2026", "psych-nyu-2027"], lastActive: "3d ago" },
  { id: "st-8", name: "Marcus Prescott", email: "marprescott@nyu.edu", role: "Advisor / Mentor", title: "Advisor, Journalism", institution: "New York University", cohortIds: ["journalism-nyu-2027", "journalism-nyu-2028"], lastActive: "Today" },
  { id: "st-9", name: "Isabel Cortez", email: "icortez@nyu.edu", role: "Advisor / Mentor", title: "Advisor, Film & Television", institution: "New York University", cohortIds: ["filmtv-nyu-2026", "filmtv-nyu-2027"], lastActive: "2d ago" },

  // Stanford University
  { id: "st-10", name: "Miriam Osei", email: "mosei@stanford.edu", role: "Institution Admin", title: "Director, Career Education", institution: "Stanford University", cohortIds: [], lastActive: "Today" },
  { id: "st-11", name: "Trevor Lindqvist", email: "tlindqvist@stanford.edu", role: "Advisor / Mentor", title: "Advisor, Human-Computer Interaction", institution: "Stanford University", cohortIds: ["hci-2026", "hci-stan-2027"], lastActive: "Today" },
  { id: "st-12", name: "Nour Haddad", email: "nhaddad@stanford.edu", role: "Advisor / Mentor", title: "Advisor, Public Policy", institution: "Stanford University", cohortIds: ["public-policy-2027", "pubpolicy-stan-2028"], lastActive: "3d ago" },
  { id: "st-13", name: "Beckett Farrow", email: "bfarrow@stanford.edu", role: "Advisor / Mentor", title: "Advisor, Computer Science", institution: "Stanford University", cohortIds: ["cs-stan-2026", "cs-stan-2027"], lastActive: "Today" },
  { id: "st-14", name: "Rosalind Gallo", email: "rgallo@stanford.edu", role: "Advisor / Mentor", title: "Advisor, Economics", institution: "Stanford University", cohortIds: ["econ-stan-2026", "econ-stan-2027"], lastActive: "1d ago" },
  { id: "st-15", name: "Desmond Kalu", email: "dkalu@stanford.edu", role: "Advisor / Mentor", title: "Advisor, Biology", institution: "Stanford University", cohortIds: ["bio-stan-2027", "bio-stan-2028"], lastActive: "4d ago" },
  { id: "st-16", name: "Wren Sandoval", email: "wsandoval@stanford.edu", role: "Advisor / Mentor", title: "Advisor, Political Science", institution: "Stanford University", cohortIds: ["polisci-stan-2026", "polisci-stan-2027"], lastActive: "2d ago" },

  // University of Michigan
  { id: "st-17", name: "Caroline Boyd", email: "cboyd@umich.edu", role: "Institution Admin", title: "Associate Dean, Career Services", institution: "University of Michigan", cohortIds: [], lastActive: "1d ago" },
  { id: "st-18", name: "Julian Adeyemi", email: "jadeyemi@umich.edu", role: "Advisor / Mentor", title: "Advisor, Mechanical Engineering", institution: "University of Michigan", cohortIds: ["meche-2026", "meche-umich-2027"], lastActive: "Today" },
  { id: "st-19", name: "Petra Kowalski", email: "pkowalski@umich.edu", role: "Advisor / Mentor", title: "Advisor, Ross School of Business", institution: "University of Michigan", cohortIds: ["ross-2027", "ross-umich-2026"], lastActive: "2d ago" },
  { id: "st-20", name: "Harlan Rutherford", email: "hrutherford@umich.edu", role: "Advisor / Mentor", title: "Advisor, Computer Science", institution: "University of Michigan", cohortIds: ["cs-umich-2026", "cs-umich-2027"], lastActive: "Today" },
  { id: "st-21", name: "Sabrina Larsson", email: "slarsson@umich.edu", role: "Advisor / Mentor", title: "Advisor, Economics", institution: "University of Michigan", cohortIds: ["econ-umich-2026", "econ-umich-2027"], lastActive: "1d ago" },
  { id: "st-22", name: "Griffin Hendricks", email: "ghendricks@umich.edu", role: "Advisor / Mentor", title: "Advisor, Psychology", institution: "University of Michigan", cohortIds: ["psych-umich-2026", "psych-umich-2027"], lastActive: "5d ago" },
  { id: "st-23", name: "Odalys Marchetti", email: "odmarchetti@umich.edu", role: "Advisor / Mentor", title: "Advisor, Environmental Science", institution: "University of Michigan", cohortIds: ["envsci-umich-2027", "envsci-umich-2028"], lastActive: "3d ago" },

  // Howard University
  { id: "st-24", name: "Kendra Ashworth", email: "kashworth@howard.edu", role: "Institution Admin", title: "Director, Career Center", institution: "Howard University", cohortIds: [], lastActive: "Today" },
  { id: "st-25", name: "Malik Freeman", email: "mfreeman@howard.edu", role: "Advisor / Mentor", title: "Advisor, Communications & Media Studies", institution: "Howard University", cohortIds: ["comms-2026", "comms-how-2027"], lastActive: "1d ago" },
  { id: "st-26", name: "Jocelyn Umeh", email: "jumeh@howard.edu", role: "Advisor / Mentor", title: "Advisor, Political Science", institution: "Howard University", cohortIds: ["polisci-how-2026", "polisci-how-2027"], lastActive: "Today" },
  { id: "st-27", name: "Terrence Njoku", email: "tnjoku@howard.edu", role: "Advisor / Mentor", title: "Advisor, Computer Science", institution: "Howard University", cohortIds: ["cs-how-2026", "cs-how-2027"], lastActive: "2d ago" },
  { id: "st-28", name: "Simone Achebe", email: "sachebe@howard.edu", role: "Advisor / Mentor", title: "Advisor, Biology", institution: "Howard University", cohortIds: ["bio-how-2027", "bio-how-2028"], lastActive: "4d ago" },
  { id: "st-29", name: "Bryson Holbrook", email: "bholbrook@howard.edu", role: "Advisor / Mentor", title: "Advisor, Business Administration", institution: "Howard University", cohortIds: ["busadmin-how-2026", "busadmin-how-2027"], lastActive: "1d ago" },

  // Georgia State University
  { id: "st-30", name: "Sherry Douglas", email: "sdouglas@gsu.edu", role: "Institution Admin", title: "Director, Career Services", institution: "Georgia State University", cohortIds: [], lastActive: "4d ago" },
  { id: "st-31", name: "Andre Willoughby", email: "awilloughby@gsu.edu", role: "Advisor / Mentor", title: "Advisor, Public Health", institution: "Georgia State University", cohortIds: ["public-health-2027", "pubhealth-gsu-2028"], lastActive: "Today" },
  { id: "st-32", name: "Lorraine Diallo", email: "ldiallo@gsu.edu", role: "Advisor / Mentor", title: "Advisor, Computer Science", institution: "Georgia State University", cohortIds: ["cs-gsu-2026", "cs-gsu-2027"], lastActive: "2d ago" },
  { id: "st-33", name: "Weston Isikalu", email: "wisikalu@gsu.edu", role: "Advisor / Mentor", title: "Advisor, Psychology", institution: "Georgia State University", cohortIds: ["psych-gsu-2026", "psych-gsu-2027"], lastActive: "1d ago" },
  { id: "st-34", name: "Adaeze Garrick", email: "agarrick@gsu.edu", role: "Advisor / Mentor", title: "Advisor, Criminal Justice", institution: "Georgia State University", cohortIds: ["crimjustice-gsu-2026", "crimjustice-gsu-2027"], lastActive: "3d ago" },
  { id: "st-35", name: "Corbin Valdez", email: "cvaldez@gsu.edu", role: "Advisor / Mentor", title: "Advisor, Business Administration", institution: "Georgia State University", cohortIds: ["busadmin-gsu-2026", "busadmin-gsu-2027"], lastActive: "Today" },

  // University of Lagos
  { id: "st-36", name: "Chiamaka Nwankwo", email: "cnwankwo@unilag.edu.ng", role: "Institution Admin", title: "Head, Career Services Unit", institution: "University of Lagos", cohortIds: [], lastActive: "Today" },
  { id: "st-37", name: "Segun Adebayo", email: "sadebayo@unilag.edu.ng", role: "Advisor / Mentor", title: "Advisor, Economics", institution: "University of Lagos", cohortIds: ["econ-2026", "econ-unilag-2027"], lastActive: "2d ago" },
  { id: "st-38", name: "Funmilayo Achebe", email: "fachebe@unilag.edu.ng", role: "Advisor / Mentor", title: "Advisor, Computer Science", institution: "University of Lagos", cohortIds: ["cs-unilag-2026", "cs-unilag-2027"], lastActive: "Today" },
  { id: "st-39", name: "Emeka Okafor", email: "eokafor@unilag.edu.ng", role: "Advisor / Mentor", title: "Advisor, Business Administration", institution: "University of Lagos", cohortIds: ["busadmin-unilag-2026", "busadmin-unilag-2027"], lastActive: "1d ago" },
  { id: "st-40", name: "Nkechi Falade", email: "nfalade@unilag.edu.ng", role: "Advisor / Mentor", title: "Advisor, Mass Communication", institution: "University of Lagos", cohortIds: ["masscomm-unilag-2026", "masscomm-unilag-2027"], lastActive: "3d ago" },
  { id: "st-41", name: "Ibrahim Cisse", email: "icisse@unilag.edu.ng", role: "Advisor / Mentor", title: "Advisor, Law", institution: "University of Lagos", cohortIds: ["law-unilag-2026", "law-unilag-2027"], lastActive: "Today" },
];

export function staffForInstitution(institution: string): StaffMember[] {
  return STAFF.filter((s) => s.institution === institution);
}
