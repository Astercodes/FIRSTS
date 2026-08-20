export type Institution = {
  name: string;
  domain: string;
  sso: boolean;
  /** Approximate total enrolled student body, for FIRSTS-penetration context. Not exact. */
  enrollment: number;
};

// Demo partner roster, stands in for the real institution directory /
// SSO config service until that backend exists.
export const PARTNER_INSTITUTIONS: Institution[] = [
  { name: "Stanford University", domain: "stanford.edu", sso: true, enrollment: 17500 },
  { name: "University of Michigan", domain: "umich.edu", sso: true, enrollment: 51000 },
  { name: "New York University", domain: "nyu.edu", sso: true, enrollment: 51000 },
  { name: "Howard University", domain: "howard.edu", sso: false, enrollment: 13000 },
  { name: "Georgia State University", domain: "gsu.edu", sso: false, enrollment: 52000 },
  { name: "University of Lagos", domain: "unilag.edu.ng", sso: false, enrollment: 57000 },
];

export function domainOf(email: string): string {
  const at = email.lastIndexOf("@");
  return at === -1 ? "" : email.slice(at + 1).trim().toLowerCase();
}

export function findInstitutionByDomain(email: string): Institution | undefined {
  const domain = domainOf(email);
  if (!domain) return undefined;
  return PARTNER_INSTITUTIONS.find(
    (inst) => domain === inst.domain || domain.endsWith(`.${inst.domain}`)
  );
}

export function getInstitutionByName(name: string): Institution | undefined {
  return PARTNER_INSTITUTIONS.find((inst) => inst.name === name);
}

export function searchInstitutions(query: string): Institution[] {
  const q = query.trim().toLowerCase();
  if (!q) return PARTNER_INSTITUTIONS;
  return PARTNER_INSTITUTIONS.filter((inst) =>
    inst.name.toLowerCase().includes(q)
  );
}
