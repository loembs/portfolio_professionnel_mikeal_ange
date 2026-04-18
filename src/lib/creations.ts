import { videoProjects } from "@/data/videos";

export type Creation = (typeof videoProjects)[number];

export const creations: Creation[] = videoProjects;

/** Aggregated stats for the stats counter section */
export const globalStats = [
  { label: "Vues totales", value: "220K+", icon: "▶" },
  { label: "Likes cumulés", value: "20K+", icon: "♥" },
  { label: "Nouveaux followers", value: "3.3K+", icon: "★" },
  { label: "Heures de visionnage", value: "624h+", icon: "◉" },
];
