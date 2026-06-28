export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: "github" | "linkedin" | "email";
  url: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export const site = {
  name: "Bara",
  tagline: "Kami menyalakan yang sudah dibangun.",
  taglineDefault: "Kami menyalakan yang sudah dibangun.",
  headline: "Kami menyalakan koperasi yang sudah dibangun negara.",
  subheadline:
    "Bara adalah tim peserta Hackathon Digital Cooperatives Expo 2026 bersama Kemenkop RI dan PEBS FEB UI. Kami membangun Pantik, lapisan aktivasi yang menyalakan koperasi desa merah putih yang sudah terdaftar namun belum bergerak.",
  email: "kennyvws1@gmail.com",
  meta: {
    title: "Bara · Portofolio Teknis Tim",
    description:
      "Bara membangun Pantik, lapisan aktivasi yang menyalakan koperasi desa merah putih pada Hackathon Digital Cooperatives Expo 2026.",
    url: "https://pantik-portfolio.vercel.app",
    ogImage: "/og.png",
  },
  heroStats: [
    { value: "Juara 1", label: "Web Development nasional, I/O Festival 2026" },
    { value: "MVP", label: "Pantik siap didemokan" },
    { value: "3", label: "Peran yang saling melengkapi" },
    { value: "83.363", label: "Koperasi merah putih yang disasar" },
  ] satisfies StatItem[],
  nav: [
    { label: "Mengapa Kami", href: "#why-us" },
    { label: "Tim", href: "#team" },
    { label: "Prestasi", href: "#awards" },
    { label: "Pantik", href: "#flagship" },
    { label: "Kapabilitas", href: "#capabilities" },
    { label: "Kontak", href: "#contact" },
  ] satisfies NavItem[],
  social: [
    { platform: "github", url: "https://github.com/KennyUMN/pantik-portfolio" },
    { platform: "email", url: "mailto:kennyvws1@gmail.com" },
  ] satisfies SocialLink[],
};
