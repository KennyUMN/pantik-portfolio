import { domain } from "@/content/domain";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { Landmark, Map, Microscope, Scale, Scroll, Handshake } from "lucide-react";

const regulasiItems = [
  {
    icon: Scroll,
    label: "Perpres 115/2025",
    desc: "Kerangka transformasi digital koperasi — fondasi kebijakan yang Pantik dirancang untuk memperkuat, bukan menyaingi.",
  },
  {
    icon: Scale,
    label: "Permenkop 2/2024",
    desc: "Regulasi operasional koperasi digital — Pantik memastikan setiap artefak dan mekanismenya selaras dengan ketentuan ini.",
  },
  {
    icon: Handshake,
    label: "Lane Technology Provider Member",
    desc: "Jalur masuk ekosistem resmi Kemenkop — tim memahami implikasi pengalihan HAKI dan persyaratan lane TPM.",
  },
];

const evidenceIcons: Record<string, React.ElementType> = {
  "Observasi Koperasi Lapangan": Microscope,
  "Pemahaman Regulasi": Landmark,
  "Rencana Grounding": Map,
};

export function DomainFit() {
  return (
    <Section id="domain">
      <Reveal>
        <SectionHeader
          eyebrow="Keselarasan Domain"
          heading="Kami berbicara bahasa Kemenkop."
          lead={domain.ringkasan}
        />
        <p className="mb-12 text-sm italic text-secondary">
          Sinyal paling membedakan di mata juri kementerian dan akademisi adalah tim yang paham regulasi, bukan sekadar tim yang bisa koding.
        </p>
      </Reveal>

      {/* Bukti riset */}
      <div className="grid gap-5 md:grid-cols-3 mb-12">
        {domain.buktiRiset.map((poin, i) => {
          const Icon = evidenceIcons[poin.judul] ?? Landmark;
          return (
            <Reveal key={poin.judul} delay={i * 0.08}>
              <div className="h-full rounded-xl border border-primary/20 bg-primary-tint/30 p-6 transition-all duration-200 hover:border-primary/40 hover:bg-primary-tint/50">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-tint text-primary">
                  <Icon size={18} />
                </div>
                <h3 className="font-heading font-semibold text-ink mb-2">{poin.judul}</h3>
                <p className="text-sm text-secondary leading-relaxed">{poin.deskripsi}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Regulasi */}
      <Reveal>
        <h3 className="font-heading text-[17px] font-semibold text-ink mb-5">
          Regulasi yang kami pahami
        </h3>
      </Reveal>
      <div className="grid gap-4 md:grid-cols-3">
        {regulasiItems.map((reg, i) => {
          const Icon = reg.icon;
          return (
            <Reveal key={reg.label} delay={i * 0.07}>
              <div className="rounded-xl border border-line bg-bg-subtle p-5">
                <div className="flex items-center gap-3 mb-3">
                  <Icon size={15} className="text-primary shrink-0" />
                  <span className="text-xs font-semibold text-primary">{reg.label}</span>
                </div>
                <p className="text-xs text-secondary leading-relaxed">{reg.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
