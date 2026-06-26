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
    name: "[ANGGOTA_1_NAMA]",
    role: "PM / Business Strategist",
    bio: "[ANGGOTA_1_BIO]",
    skills: ["[SKILL_1]", "[SKILL_2]", "[SKILL_3]"],
    photo: "",
    github: "[ANGGOTA_1_GITHUB]",
    linkedin: "[ANGGOTA_1_LINKEDIN]",
  },
  {
    name: "[ANGGOTA_2_NAMA]",
    role: "Fullstack Developer",
    bio: "[ANGGOTA_2_BIO]",
    skills: ["[SKILL_1]", "[SKILL_2]", "[SKILL_3]"],
    photo: "",
    github: "[ANGGOTA_2_GITHUB]",
    linkedin: "[ANGGOTA_2_LINKEDIN]",
  },
  {
    name: "[ANGGOTA_3_NAMA]",
    role: "AI Engineer / Designer",
    bio: "[ANGGOTA_3_BIO]",
    skills: ["[SKILL_1]", "[SKILL_2]", "[SKILL_3]"],
    photo: "",
    github: "[ANGGOTA_3_GITHUB]",
    linkedin: "[ANGGOTA_3_LINKEDIN]",
  },
];
