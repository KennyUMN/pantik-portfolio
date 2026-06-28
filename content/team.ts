export type MemberRole = "PM / Business Strategist" | "Fullstack Developer" | "AI Engineer";

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
    role: "Fullstack Developer",
    bio: "Membangun platform dari nol: Bisasinema (Coursera-style LMS + Midtrans, Rp20M+ tiket terjual), Brako Trace OS (digitalisasi pipeline kopi cherry-to-warehouse), dan SaaS multi-tenant Tera untuk ekspor specialty coffee. Tech Lead & APM di dua perusahaan aktif.",
    skills: ["Next.js", "FastAPI", "TypeScript", "PostgreSQL", "React", "NestJS", "Python", "Docker"],
    photo: "",
    github: "https://github.com/codezeros18",
    linkedin: "https://linkedin.com/in/lintangbalakosa",
  },
  {
    name: "Kenny Valent Winalda Sembiring",
    role: "AI Engineer",
    bio: "Membangun infrastruktur AI lokal: FinRAG-ID (RAG pipeline hybrid BM25 + BGE-M3 untuk dokumen keuangan Indonesia), PPE Detection System (YOLOv9c semi-supervised), dan self-hosted AI homeserver (Ollama + OpenRouter + Tailscale). Fokus di LLM infrastructure dan local-first AI.",
    skills: ["Python", "LlamaIndex", "RAG", "YOLOv9", "Ollama", "Docker", "FastAPI", "RAGAS"],
    photo: "",
    github: "https://github.com/KennyUMN",
    linkedin: "[linkedin.com/in/kenny-valent]",
  },
  {
    name: "Nanda Valeri",
    role: "PM / Business Strategist",
    bio: "Memimpin riset ekosistem yang menemukan posisi unik Pantik sebagai activation layer. Menganalisis 83.363 profil SIMKOPDES kosong, membangun narasi 'raknya kosong, kami yang ngisi', dan merancang Two-Tier Activation Model serta logika Indeks Nyala anti-gaming.",
    skills: ["Product Strategy", "Market Research", "Business Analysis", "UX Research", "Figma"],
    photo: "",
    github: "[github.com/nanda-valeri]",
    linkedin: "[linkedin.com/in/nanda-valeri]",
  },
];
