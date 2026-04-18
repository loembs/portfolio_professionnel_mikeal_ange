export type VideoProject = {
  id: number;
  title: string;
  client: string;
  category: string;
  date: string;
  videoSrc: string;
  description: string;
  tags: string[];
  stats: {
    views: string;
    likes: string;
    comments: string;
    shares: string;
    saves: string;
    newFollowers: string;
    watchTime: string;
  };
};

export const videoProjects: VideoProject[] = [
  {
    id: 1,
    title: "event BRT",
    client: "BRT",
    category: "Presentation",
    date: "Oct. 2025",
    videoSrc: "https://res.cloudinary.com/df96r2sny/video/upload/q_auto/f_auto/v1770640119/copy_DBF00AC7-98D2-4419-8F6A-4DF1F7CD43D6_jeoc7x.mov",
    description:
      "Video de presentation automobile orientee impact visuel pour social media.",
    tags: ["Auto", "Brand", "Social"],
    stats: {
      views: "24K",
      likes: "1 790",
      comments: "43",
      shares: "35",
      saves: "145",
      newFollowers: "523",
      watchTime: "152h",
    },
  },
  {
    id: 2,
    title: "Green mobility",
    client: "Transport & Mobilite",
    category: "Entreprise",
    date: "Nov. 2025",
    videoSrc: "https://res.cloudinary.com/dlna2kuo1/video/upload/q_auto/f_auto/v1776447071/IMG_0332_fnz9n5.mov",
    description:
      "Contenu corporate court pour renforcer la presence de marque en ligne.",
    tags: ["Entreprise", "Story", "Reel"],
    stats: {
      views: "10.6K",
      likes: "854",
      comments: "17",
      shares: "24",
      saves: "115",
      newFollowers: "443",
      watchTime: "28h",
    },
  },
  {
    id: 3,
    title: "video promotionnelle",
    client: "Green mobility",
    category: "Presentation",
    date: "Fev. 2026",
    videoSrc: "https://res.cloudinary.com/df96r2sny/video/upload/q_auto/f_auto/v1775281810/copy_ABE629D3-35F4-4E25-AD3C-6D25254FF0D4_jzrzig.mov",
    description:
      "Capsule dynamique pour valoriser un vehicule utilitaire en contexte reel.",
    tags: ["Auto", "Produit", "Performance"],
    stats: {
      views: "15.7K",
      likes: "5 165",
      comments: "6",
      shares: "16",
      saves: "299",
      newFollowers: "381",
      watchTime: "33h",
    },
  },
  {
    id: 4,
    title: "Storytelling",
    client: "Own project",
    category: "Produit",
    date: "Mars 2026",
    videoSrc: "https://res.cloudinary.com/df96r2sny/video/upload/q_auto/f_auto/v1770640119/copy_DBF00AC7-98D2-4419-8F6A-4DF1F7CD43D6_jeoc7x.mov",
    description:
      "Montage showreel rythme pour presenter un univers de marque automobile.",
    tags: ["Showreel", "Marque", "Cinematique"],
    stats: {
      views: "10.9K",
      likes: "841",
      comments: "8",
      shares: "38",
      saves: "109",
      newFollowers: "102",
      watchTime: "36h",
    },
  },
  {
    id: 5,
    title: "Presentation produit",
    client: "UMY design",
    category: "Produit",
    date: "2025",
    videoSrc: "https://res.cloudinary.com/dlna2kuo1/video/upload/q_auto/f_auto/v1776446496/IMG_7088_dip6eg.mov",
    description:
      "Video culinaire orientee emotion, texture et desirabilite du produit.",
    tags: ["Food", "Culture", "Lifestyle"],
    stats: {
      views: "116.6K",
      likes: "8 200",
      comments: "120",
      shares: "450",
      saves: "980",
      newFollowers: "1 200",
      watchTime: "280h",
    },
  },
  {
    id: 6,
    title: "Alma Restaurant",
    client: "Restaurant",
    category: "Studio",
    date: "2025",
    videoSrc: "https://res.cloudinary.com/dlna2kuo1/video/upload/q_auto/f_auto/v1776446397/IMG_5785_r0i3fg.mov",
    description:
      "Format vertical social pour mettre en avant un storytelling local fort.",
    tags: ["Food", "Local", "Engagement"],
    stats: {
      views: "43.1K",
      likes: "3 500",
      comments: "85",
      shares: "210",
      saves: "520",
      newFollowers: "680",
      watchTime: "95h",
    },
  },
  {
    id: 7,
    title: "Production anniversaire ",
    client: "Andal Creative",
    category: "Event",
    date: "2025",
    videoSrc: "https://res.cloudinary.com/dlna2kuo1/video/upload/v1769532846/IMG_0111_ybl39i.mov",
    description:
      "Format vertical social pour mettre en avant un storytelling local fort.",
    tags: ["Food", "Local", "Engagement"],
    stats: {
      views: "7758",
      likes: "400",
      comments: "35",
      shares: "11",
      saves: "1",
      newFollowers: "0",
      watchTime: "1h",
    },
  },
];

