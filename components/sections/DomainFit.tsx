import { domain } from "@/content/domain";
import { Container } from "@/components/ui/Container";
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
    <section
      id="domain"
      className="relative py-24 lg:py-32 overflow-hidden border-t border-teal/20"
      style={{
        background:
          "linear-gradient(180deg, var(--color-ink) 0%, color-mix(in oklch, var(--color-teal) 6%, var(--color-ink)) 50%, var(--color-ink) 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 0%, color-mix(in oklch, var(--color-teal) 12%, transparent) 0%, transparent 70%)",
        }}
      />

      <Container>
        <Reveal>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-teal">
            Keselarasan Domain
          </p>
          <h2 className="font-heading text-3xl font-bold text-text-dark lg:text-4xl mb-4">
            Kami berbicara bahasa Kemenkop.
          </h2>
          <p className="text-muted-dark max-w-2xl mb-6 leading-relaxed">
            {domain.ringkasan}
          </p>
          <p className="text-sm text-muted-dark max-w-2xl mb-16 italic">
            Sinyal paling membedakan di mata juri kementerian dan akademisi adalah tim yang paham regulasi, bukan sekadar tim yang bisa koding.
          </p>
        </Reveal>

        {/* Bukti riset */}
        <div className="grid gap-5 md:grid-cols-3 mb-14">
          {domain.buktiRiset.map((poin, i) => {
            const Icon = evidenceIcons[poin.judul] ?? Landmark;
            return (
              <Reveal key={poin.judul} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-teal/30 bg-teal/5 p-6 transition-colors hover:border-teal/60 hover:bg-teal/10">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-teal/20 text-teal">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-heading font-semibold text-text-dark mb-2">
                    {poin.judul}
                  </h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{poin.deskripsi}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Regulasi yang dipahami */}
        <Reveal>
          <h3 className="font-heading text-lg font-semibold text-text-dark mb-6">
            Regulasi yang kami pahami
          </h3>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {regulasiItems.map((reg, i) => {
            const Icon = reg.icon;
            return (
              <Reveal key={reg.label} delay={i * 0.07}>
                <div className="rounded-xl border border-line-dark bg-surface/60 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon size={16} className="text-teal shrink-0" />
                    <span className="text-xs font-semibold text-teal">{reg.label}</span>
                  </div>
                  <p className="text-xs text-muted-dark leading-relaxed">{reg.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
