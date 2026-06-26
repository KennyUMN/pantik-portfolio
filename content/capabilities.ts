export interface CapabilityGroup {
  nama: string;
  items: string[];
}

export const capabilities: CapabilityGroup[] = [
  {
    nama: "Fullstack",
    items: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "[DATABASE_LAIN]"],
  },
  {
    nama: "AI / ML",
    items: ["[NLP_TOOL]", "[ML_FRAMEWORK]", "Scoring Model", "[AI_TOOL_LAIN]"],
  },
  {
    nama: "Design",
    items: ["UI/UX", "Figma", "Design System", "[TOOL_DESIGN_LAIN]"],
  },
  {
    nama: "Data",
    items: ["[DATA_TOOL_1]", "[DATA_TOOL_2]", "[VISUALISASI_TOOL]"],
  },
  {
    nama: "IoT",
    items: ["[IOT_PLATFORM]", "[IOT_PROTOKOL]"],
  },
];
