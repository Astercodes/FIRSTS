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
  { id: "st-1", name: "Priya Nandakumar", email: "priya@nyu.edu", role: "Institution Admin", title: "VP, Career Services", institution: "New York University", cohortIds: [], lastActive: "Today" },
  { id: "st-2", name: "Devon Marsh", email: "dmarsh@nyu.edu", role: "Advisor / Mentor", title: "Advisor, Marketing", institution: "New York University", cohortIds: ["marketing-2027"], lastActive: "Today" },
  { id: "st-3", name: "Renee Okafor", email: "rokafor@nyu.edu", role: "Advisor / Mentor", title: "Advisor, Business Analytics", institution: "New York University", cohortIds: ["business-analytics-2026"], lastActive: "1d ago" },
  { id: "st-4", name: "Alex Furman", email: "afurman@nyu.edu", role: "Advisor / Mentor", title: "Advisor, Computer Science", institution: "New York University", cohortIds: ["cs-2028"], lastActive: "2d ago" },

  { id: "st-5", name: "Miriam Osei", email: "mosei@stanford.edu", role: "Institution Admin", title: "Director, Career Education", institution: "Stanford University", cohortIds: [], lastActive: "Today" },
  { id: "st-6", name: "Trevor Lindqvist", email: "tlindqvist@stanford.edu", role: "Advisor / Mentor", title: "Advisor, Human-Computer Interaction", institution: "Stanford University", cohortIds: ["hci-2026"], lastActive: "Today" },
  { id: "st-7", name: "Nour Haddad", email: "nhaddad@stanford.edu", role: "Advisor / Mentor", title: "Advisor, Public Policy", institution: "Stanford University", cohortIds: ["public-policy-2027"], lastActive: "3d ago" },

  { id: "st-8", name: "Caroline Boyd", email: "cboyd@umich.edu", role: "Institution Admin", title: "Associate Dean, Career Services", institution: "University of Michigan", cohortIds: [], lastActive: "1d ago" },
  { id: "st-9", name: "Julian Adeyemi", email: "jadeyemi@umich.edu", role: "Advisor / Mentor", title: "Advisor, Mechanical Engineering", institution: "University of Michigan", cohortIds: ["meche-2026"], lastActive: "Today" },
  { id: "st-10", name: "Petra Kowalski", email: "pkowalski@umich.edu", role: "Advisor / Mentor", title: "Advisor, Ross School of Business", institution: "University of Michigan", cohortIds: ["ross-2027"], lastActive: "2d ago" },

  { id: "st-11", name: "Kendra Ashworth", email: "kashworth@howard.edu", role: "Institution Admin", title: "Director, Career Center", institution: "Howard University", cohortIds: [], lastActive: "Today" },
  { id: "st-12", name: "Malik Freeman", email: "mfreeman@howard.edu", role: "Advisor / Mentor", title: "Advisor, Communications & Media Studies", institution: "Howard University", cohortIds: ["comms-2026"], lastActive: "1d ago" },

  { id: "st-13", name: "Sherry Douglas", email: "sdouglas@gsu.edu", role: "Institution Admin", title: "Director, Career Services", institution: "Georgia State University", cohortIds: [], lastActive: "4d ago" },
  { id: "st-14", name: "Andre Willoughby", email: "awilloughby@gsu.edu", role: "Advisor / Mentor", title: "Advisor, Public Health", institution: "Georgia State University", cohortIds: ["public-health-2027"], lastActive: "Today" },

  { id: "st-15", name: "Chiamaka Nwankwo", email: "cnwankwo@unilag.edu.ng", role: "Institution Admin", title: "Head, Career Services Unit", institution: "University of Lagos", cohortIds: [], lastActive: "Today" },
  { id: "st-16", name: "Segun Adebayo", email: "sadebayo@unilag.edu.ng", role: "Advisor / Mentor", title: "Advisor, Economics", institution: "University of Lagos", cohortIds: ["econ-2026"], lastActive: "2d ago" },
];

export function staffForInstitution(institution: string): StaffMember[] {
  return STAFF.filter((s) => s.institution === institution);
}
