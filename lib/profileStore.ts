export type Profile = {
  name: string;
  headline: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  photo: string | null;
};

const KEY = "firsts:profile";

export function loadProfile(): Partial<Profile> | null {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Partial<Profile>) : null;
  } catch {
    return null;
  }
}

export function saveProfile(profile: Partial<Profile>) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(profile));
  } catch {
    // localStorage unavailable (private browsing, quota), profile just won't persist
  }
}
