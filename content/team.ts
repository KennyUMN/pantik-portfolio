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
    bio: "Membangun produk dari nol sampai rilis. Bisasinema, platform belajar bergaya Coursera dengan pembayaran Midtrans, telah menjual tiket lebih dari Rp20 juta. Brako Trace OS mendigitalkan alur kopi dari cherry sampai gudang. Tera adalah SaaS multi-tenant untuk ekspor kopi specialty. Kini menjabat Tech Lead dan Associate PM di dua perusahaan yang berjalan.",
    skills: ["Next.js", "FastAPI", "TypeScript", "PostgreSQL", "React", "NestJS", "Python", "Docker"],
    photo: "",
    github: "https://github.com/codezeros18",
    linkedin: "https://linkedin.com/in/lintangbalakosa",
  },
  {
    name: "Kenny Valent Winalda Sembiring",
    role: "AI Engineer",
    bio: "Membangun infrastruktur AI yang berjalan mandiri. FinRAG-ID adalah pipeline RAG hibrida BM25 dan BGE-M3 untuk dokumen keuangan Indonesia. PPE Detection System memakai YOLOv9c dengan pendekatan semi-supervised. Ia juga menjalankan homeserver AI sendiri berbasis Ollama, OpenRouter, dan Tailscale, dengan fokus pada infrastruktur LLM yang local-first.",
    skills: ["Python", "LlamaIndex", "RAG", "YOLOv9", "Ollama", "Docker", "FastAPI", "RAGAS"],
    photo: "",
    github: "https://github.com/KennyUMN",
    linkedin: "[linkedin.com/in/kenny-valent]",
  },
  {
    name: "Nanda Valeri",
    role: "PM / Business Strategist",
    bio: "Menggerakkan sisi bisnis dan eksekusi. Sebagai Koordinator Divisi Sponsorship Fikom Night, ia memenangkan pendanaan lebih dari Rp20 juta. Ia menjadi Liaison Officer Garuda Hacks 6.0, salah satu hackathon terbesar di Asia Tenggara, dan pembicara workshop AI Lab untuk lebih dari 50 siswa SMA. Penerima KAMI UMN Scholarship atas prestasi akademik dan kontribusi organisasi.",
    skills: ["Public Speaking", "Negotiation", "Event Management", "UX Design", "React", "React Native"],
    photo: "",
    github: "https://github.com/alestuff404",
    linkedin: "[linkedin.com/in/nanda-valeri]",
  },
];
