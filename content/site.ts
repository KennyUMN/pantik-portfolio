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
    "Tim Bara, peserta Hackathon Digital Cooperatives Expo 2026 (Kemenkop RI x PEBS FEB UI), membangun Pantik sebagai activation layer bagi 83.363 koperasi merah putih.",
  email: "kennyvws1@gmail.com",
  meta: {
    title: "Bara — Portofolio Teknis Tim",
    description:
      "Tim yang memadukan strategi produk dan rekayasa teknis untuk ekonomi kerakyatan. Pembangun Pantik, lapisan aktivasi koperasi desa.",
    url: "https://pantik-portfolio.vercel.app",
    ogImage: "/og.png",
  },
  heroStats: [
    { value: "MVP", label: "Pantik siap demo" },
    { value: "3", label: "Anggota, peran seimbang" },
    { value: "83k+", label: "Koperasi yang bisa dijangkau" },
    { value: "2", label: "Tier aktivasi terbukti" },
  ] satisfies StatItem[],
  nav: [
    { label: "Mengapa Kami", href: "#why-us" },
    { label: "Tim", href: "#team" },
    { label: "Pantik", href: "#flagship" },
    { label: "Kapabilitas", href: "#capabilities" },
    { label: "Kontak", href: "#contact" },
  ] satisfies NavItem[],
  social: [
    { platform: "github", url: "https://github.com/KennyUMN/pantik-portfolio" },
    { platform: "email", url: "mailto:kennyvws1@gmail.com" },
  ] satisfies SocialLink[],
};
