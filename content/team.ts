export type MemberRole = "PM / Business Strategist" | "Fullstack Developer" | "AI Engineer / Designer";

export interface TeamMember {
  name: string;
  role: MemberRole;
  bio: string;
  skills: string[];
  photo: string;
  github: string;
  linkedin: string;
}

export const team: TeamMember[] = [
  {
    name: "Lintang Balakosa Ardhana",
    role: "PM / Business Strategist",
    bio: "Menggabungkan riset ekosistem dan strategi produk untuk menemukan posisi unik Pantik. Memimpin analisis mendalam 83.363 profil SIMKOPDES yang kosong dan membangun narasi 'activation layer, bukan platform baru'.",
    skills: ["Product Strategy", "Market Research", "Business Analysis", "UX Research", "Competitive Intelligence"],
    photo: "",
    github: "[github.com/lintang-balakosa]",
    linkedin: "[linkedin.com/in/lintang-balakosa]",
  },
  {
    name: "Kenny Valent Winalda Sembiring",
    role: "Fullstack Developer",
    bio: "Membangun produk dari API hingga antarmuka. Merancang dan mengimplementasikan infrastruktur teknis Pantik — dari Indeks Nyala Engine, 1-Click SIMKOPDES Export, hingga PO Financing Dossier Generator.",
    skills: ["Next.js", "FastAPI", "TypeScript", "PostgreSQL", "Python"],
    photo: "",
    github: "https://github.com/KennyUMN",
    linkedin: "[linkedin.com/in/kenny-valent]",
  },
  {
    name: "Nanda Valeri",
    role: "AI Engineer / Designer",
    bio: "Membangun logika scoring Indeks Nyala dan counterparty graph anti-gaming yang belajar dari kegagalan TaniFund dan eFishery. Merancang visual flow Pantik dari peta panas hingga PO Dossier.",
    skills: ["Python", "NetworkX", "Scoring Model", "Figma", "Data Pipeline"],
    photo: "",
    github: "[github.com/nanda-valeri]",
    linkedin: "[linkedin.com/in/nanda-valeri]",
  },
];
