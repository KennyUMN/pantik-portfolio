export interface CapabilityGroup {
  nama: string;
  items: string[];
}

export const capabilities: CapabilityGroup[] = [
  {
    nama: "Fullstack",
    items: ["React", "Next.js", "Node.js", "TypeScript", "FastAPI", "PostgreSQL"],
  },
  {
    nama: "AI / ML",
    items: ["Python", "NetworkX", "Scoring Model", "Counterparty Graph", "NLP"],
  },
  {
    nama: "Design",
    items: ["Figma", "UI/UX", "TailwindCSS", "Design System", "Leaflet.js"],
  },
  {
    nama: "Data",
    items: ["SQLite", "PostgreSQL", "Data Pipeline", "CSV/JSON Export", "Analytics"],
  },
  {
    nama: "Integrasi & API",
    items: ["QRIS Integration", "Webhook", "REST API", "PDF Generator"],
  },
];
