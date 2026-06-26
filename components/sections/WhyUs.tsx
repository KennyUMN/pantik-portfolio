import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";
import { Target, Layers, Globe } from "lucide-react";

const pillars = [
  {
    icon: Target,
    label: "Kemudi Bisnis dan Produk",
    desc: "[BUKTI_BISNIS — mis. juara nasional lomba X, pengalaman membangun produk Y yang dipakai Z pengguna]",
    number: "01",
  },
  {
    icon: Layers,
    label: "Kedalaman Fullstack dan AI",
    desc: "[BUKTI_TEKNIS — mis. pengalaman membangun sistem fullstack dan model AI untuk kasus nyata]",
    number: "02",
  },
  {
    icon: Globe,
    label: "Kesadaran Domain Koperasi",
    desc: "[BUKTI_DOMAIN — mis. observasi langsung di koperasi X, riset Perpres 115/2025 dan Permenkop 2/2024]",
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
