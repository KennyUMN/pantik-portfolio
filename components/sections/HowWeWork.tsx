import { Section } from "@/components/ui/Section";
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
    <Section id="how-we-work" className="border-t border-line-dark">
      <Reveal>
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-amber">
          Cara Kami Bekerja
        </p>
        <h2 className="font-heading text-3xl font-bold text-text-dark lg:text-4xl mb-4">
          Disiplin eksekusi, bukan retorika.
        </h2>
        <p className="text-muted-dark max-w-2xl mb-16">
          Proses yang berulang dan terukur adalah yang membuat juri percaya tim bisa menyelesaikan, bukan hanya memulai.
        </p>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="group relative h-full rounded-2xl border border-line-dark bg-surface p-6 transition-colors hover:border-amber/40">
                <div className="absolute top-5 right-5 font-heading text-4xl font-bold text-line-dark/50 select-none group-hover:text-amber/15 transition-colors">
                  {step.number}
                </div>
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber/10 text-amber group-hover:bg-amber/20 transition-colors">
                  <Icon size={18} />
                </div>
                <h3 className="font-heading font-semibold text-text-dark mb-3">{step.title}</h3>
                <p className="text-sm text-muted-dark leading-relaxed">{step.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
