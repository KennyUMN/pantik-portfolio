import { domain } from "@/content/domain";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";
import { Landmark, Map, Microscope, Scale, Scroll, Handshake } from "lucide-react";

const regulasiItems = [
  {
    icon: Scroll,
    label: "Perpres 115/2025",
    desc: "Kerangka transformasi digital koperasi. Fondasi kebijakan yang Pantik diperkuat, bukan disaingi.",
  },
  {
    icon: Scale,
    label: "Permenkop 2/2024",
    desc: "Regulasi operasional koperasi digital. Setiap mekanisme Pantik selaras dengan ketentuan ini.",
  },
  {
    icon: Handshake,
    label: "Lane TPM / HAKI",
    desc: "Jalur masuk ekosistem resmi Kemenkop. Tim memahami implikasi pengalihan HAKI dan persyaratan lane TPM.",
  },
];

const evidenceIcons: Record<string, React.ElementType> = {
  "Observasi Koperasi Lapangan": Microscope,
  "Pemahaman Regulasi": Landmark,
  "Rencana Grounding": Map,
};

export function DomainFit() {
  return (
    <Section id="domain" subtle>
      {/* Section heading — no eyebrow */}
      <Reveal>
        <h2 className="font-heading text-3xl font-bold text-ink lg:text-4xl mb-2">
          Kami berbicara bahasa Kemenkop.
        </h2>
        <p className="text-[17px] text-secondary max-w-2xl mb-12 leading-relaxed">
          {domain.ringkasan}
        </p>
      </Reveal>

      {/* Split: evidence left, regulations right */}
      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        {/* Left: evidence cards (stacked) */}
        <div className="space-y-4">
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-muted-dark mb-5">
            Riset Lapangan
          </p>
          {domain.buktiRiset.map((poin, i) => {
            const Icon = evidenceIcons[poin.judul] ?? Landmark;
            return (
              <Reveal key={poin.judul} delay={i * 0.07}>
                <div className="flex gap-4 rounded-xl border border-line bg-white p-5 transition-all duration-200 hover:border-primary/30 hover:shadow-sm">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-tint text-primary mt-0.5">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-ink text-sm mb-1">
                      {poin.judul}
                    </p>
                    <p className="text-sm text-secondary leading-relaxed">{poin.deskripsi}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
          <Reveal delay={0.25}>
            <p className="text-xs italic text-secondary pt-1 pl-1">
              Sinyal paling membedakan di mata juri kementerian adalah tim yang paham regulasi, bukan hanya yang bisa koding.
            </p>
          </Reveal>
        </div>

        {/* Right: regulation timeline */}
        <Reveal delay={0.1}>
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-muted-dark mb-5">
              Regulasi yang Kami Pahami
            </p>
            <div className="relative pl-5 border-l-2 border-line space-y-0">
              {regulasiItems.map((reg, i) => {
                const Icon = reg.icon;
                return (
                  <div key={reg.label} className="relative pb-7 last:pb-0">
                    <div className="absolute -left-[21px] top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary-tint border-2 border-white ring-1 ring-primary/20">
                      <Icon size={10} className="text-primary" />
                    </div>
                    <p className="font-heading font-semibold text-ink text-sm mb-1">
                      {reg.label}
                    </p>
                    <p className="text-xs text-secondary leading-relaxed">{reg.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
