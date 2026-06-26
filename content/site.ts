export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: "github" | "linkedin" | "email";
  url: string;
}

export const site = {
  name: "[NAMA_TIM]",
  tagline: "[TAGLINE_TIM]",
  taglineDefault: "Kami menyalakan yang sudah dibangun.",
  headline: "Kami menyalakan koperasi yang sudah dibangun negara.",
  subheadline:
    "[NAMA_TIM], [PRESTASI_PUNCAK], membangun Pantik untuk Hackathon Digital Cooperatives Expo 2026.",
  email: "[EMAIL_KONTAK]",
  meta: {
    title: "[NAMA_TIM] — Portofolio Teknis Tim",
    description:
      "Tim yang memadukan strategi produk dan rekayasa teknis untuk ekonomi kerakyatan. Pembangun Pantik, lapisan aktivasi koperasi desa.",
    url: "https://[NAMA_TIM].vercel.app",
    ogImage: "/og.png",
  },
  nav: [
    { label: "Mengapa Kami", href: "#why-us" },
    { label: "Tim", href: "#team" },
    { label: "Pantik", href: "#flagship" },
    { label: "Kapabilitas", href: "#capabilities" },
    { label: "Kontak", href: "#contact" },
  ] satisfies NavItem[],
  social: [
    { platform: "github", url: "[LINK_GITHUB_TIM]" },
    { platform: "linkedin", url: "[LINK_LINKEDIN_TIM]" },
  ] satisfies SocialLink[],
};
