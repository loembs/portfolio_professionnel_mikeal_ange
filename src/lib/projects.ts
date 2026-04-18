import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  image: string;
  aspect: "portrait" | "landscape";
};

export const projects: Project[] = [
  { slug: "maison-teranga", title: "Maison Teranga", client: "Hôtellerie", category: "Entreprise", year: "2025", image: work1, aspect: "portrait" },
  { slug: "atelier-baobab", title: "Atelier Baobab", client: "Mode & lifestyle", category: "Présentation", year: "2025", image: work2, aspect: "portrait" },
  { slug: "saveurs-dakar", title: "Saveurs de Dakar", client: "Restauration", category: "Produit", year: "2024", image: work3, aspect: "landscape" },
  { slug: "nuit-blanche", title: "Nuit Blanche", client: "Festival", category: "Event", year: "2024", image: work4, aspect: "portrait" },
  { slug: "perles-sahel", title: "Perles du Sahel", client: "Bijoux artisanaux", category: "Produit", year: "2024", image: work5, aspect: "landscape" },
  { slug: "voix-de-la-medina", title: "Voix de la Médina", client: "Personnel", category: "Influence", year: "2023", image: work6, aspect: "portrait" },
];
