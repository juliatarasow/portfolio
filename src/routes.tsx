export const ROUTES = {
  HOME: "/",
  PROJECTS: "/projects",
  PROJECT_PARTICIPANTS: "/projects/participants",
  PROJECT_SNIPPY: "/projects/snippy",
  PROJECT_KSK: "/projects/ksk",
  CONTACT: "/contact"
};

export const PROJECT_IDS = [
  "PROJECT_PARTICIPANTS",
  "PROJECT_SNIPPY",
  "PROJECT_KSK",
] as const;

export type ProjectId = (typeof PROJECT_IDS)[number];