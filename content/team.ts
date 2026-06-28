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
    bio: "Memenangkan Rp20M+ sponsorship sebagai Koordinator Divisi Sponsorship Fikom Night. Liaison Officer Garuda Hacks 6.0 (hackathon terbesar Asia Tenggara). Workshop Speaker AI Lab untuk 50+ siswa SMA. KAMI UMN Scholarship Awardee — dipilih berdasarkan prestasi akademik dan kontribusi organisasi.",
    skills: ["Public Speaking", "Negotiation", "Event Management", "UX Design", "React", "React Native"],
    photo: "",
    github: "https://github.com/alestuff404",
    linkedin: "[linkedin.com/in/nanda-valeri]",
  },
];
