export type Institution = {
  name: string;
  domain: string;
  sso: boolean;
};

// Demo partner roster, stands in for the real institution directory /
// SSO config service until that backend exists.
export const PARTNER_INSTITUTIONS: Institution[] = [
  { name: "Stanford University", domain: "stanford.edu", sso: true },
  { name: "University of Michigan", domain: "umich.edu", sso: true },
  { name: "New York University", domain: "nyu.edu", sso: true },
  { name: "Howard University", domain: "howard.edu", sso: false },
  { name: "Georgia State University", domain: "gsu.edu", sso: false },
  { name: "University of Lagos", domain: "unilag.edu.ng", sso: false },
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

export function searchInstitutions(query: string): Institution[] {
  const q = query.trim().toLowerCase();
  if (!q) return PARTNER_INSTITUTIONS;
  return PARTNER_INSTITUTIONS.filter((inst) =>
    inst.name.toLowerCase().includes(q)
  );
}
