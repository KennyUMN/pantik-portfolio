import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { Search, FlaskConical, Map, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Riset",
    desc: "Sebelum menulis satu baris kode, kami pergi ke lapangan. Wawancara pengguna, observasi konteks nyata, dan validasi asumsi paling awal.",
  },
  {
    icon: FlaskConical,
    number: "02",
    title: "Prototipe",
    desc: "Hipotesis diujikan secepat mungkin dalam bentuk konkret, bukan deck. Prototipe fungsional lebih jujur daripada mockup yang sempurna.",
  },
  {
    icon: Map,
    number: "03",
    title: "Validasi Lapangan",
    desc: "Prototipe kembali ke pengguna nyata. Umpan balik mentah lebih berharga dari pendapat siapapun di ruang rapat.",
  },
  {
    icon: RefreshCw,
    number: "04",
    title: "Iterasi",
    desc: "Tidak ada produk yang jadi setelah satu putaran. Kami ulang siklusnya sampai sinyal validasi cukup kuat untuk melanjutkan.",
  },
];

export function HowWeWork() {
  return (
    <Section id="how-we-work" subtle>
      <Reveal>
        <SectionHeader
          eyebrow="Cara Kami Bekerja"
          heading="Disiplin eksekusi, bukan retorika."
          lead="Proses yang berulang dan terukur adalah yang membuat juri percaya tim bisa menyelesaikan, bukan hanya memulai."
        />
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="group relative h-full rounded-xl border border-line bg-white p-6 transition-all duration-200 hover:border-primary/30 hover:shadow-sm">
                <div className="absolute right-5 top-5 font-heading text-4xl font-bold text-line select-none transition-colors group-hover:text-primary/10">
                  {step.number}
                </div>
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-tint text-primary transition-colors group-hover:bg-primary/15">
                  <Icon size={18} />
                </div>
                <h3 className="font-heading font-semibold text-ink mb-3">{step.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">{step.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
