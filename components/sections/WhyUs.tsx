import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";
import { Target, Layers, Globe } from "lucide-react";

const pillars = [
  {
    icon: Target,
    label: "Kemudi Bisnis dan Produk",
    desc: "Lintang memimpin riset ekosistem yang membongkar posisi unik Pantik: bukan platform baru, tapi activation layer. Narasi 'Lo udah bangun supermarket mewah, tapi raknya kosong — kami yang ngisi' lahir dari analisis mendalam CoopTrade, CorpU, dan 83k profil SIMKOPDES.",
    number: "01",
  },
  {
    icon: Layers,
    label: "Kedalaman Fullstack dan AI",
    desc: "Kenny membangun seluruh infrastruktur teknis Pantik — dari Indeks Nyala Engine berbasis Python/NetworkX, 1-Click SIMKOPDES Export, hingga PO Financing Dossier Generator. Nanda merancang counterparty graph anti-gaming yang belajar langsung dari kegagalan TaniFund dan eFishery.",
    number: "02",
  },
  {
    icon: Globe,
    label: "Kesadaran Domain Koperasi",
    desc: "Kami membuka langsung profil Koperasi Pengiringan (Pemalang, Jateng): 9 komoditas terdaftar, semua nilai 0, 0 anggota dari 12.944 penduduk. Bukan satu koperasi — ini pola. Kami memahami Perpres 115/2025, Permenkop 2/2024, dan logika lane TPM/HAKI yang membuka ruang Indeks Nyala.",
    number: "03",
  },
];

export function WhyUs() {
  return (
    <Section id="why-us">
      <Reveal>
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-amber">
          Mengapa Tim Ini
        </p>
        <h2 className="font-heading text-3xl font-bold text-text-dark lg:text-4xl mb-4">
          Tiga hal yang jarang berkumpul dalam satu tim.
        </h2>
        <p className="text-muted-dark max-w-2xl mb-16">
          Juri menilai apakah tim ini yang paling layak membangun dan menyerahkan solusi ini. Inilah jawabannya.
        </p>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map((pillar, i) => {
          const Icon = pillar.icon;
          return (
            <Reveal key={pillar.label} delay={i * 0.1}>
              <div className="group relative h-full rounded-2xl border border-line-dark bg-surface p-8 transition-all duration-300 hover:border-amber/50 hover:bg-surface/80">
                <div className="absolute top-6 right-6 font-heading text-5xl font-bold text-line-dark/60 select-none group-hover:text-amber/20 transition-colors">
                  {pillar.number}
                </div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber/10 text-amber group-hover:bg-amber/20 transition-colors">
                  <Icon size={22} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-text-dark mb-3">
                  {pillar.label}
                </h3>
                <p className="text-sm text-muted-dark leading-relaxed">{pillar.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
