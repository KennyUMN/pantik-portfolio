import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";

const steps = [
  {
    number: "01",
    title: "Riset",
    desc: "Sebelum menulis satu baris kode, kami pergi ke lapangan. Observasi konteks nyata, validasi asumsi paling awal.",
  },
  {
    number: "02",
    title: "Prototipe",
    desc: "Hipotesis diujikan secepat mungkin dalam bentuk konkret. Prototipe fungsional lebih jujur daripada mockup sempurna.",
  },
  {
    number: "03",
    title: "Validasi",
    desc: "Prototipe kembali ke pengguna nyata. Umpan balik mentah lebih berharga daripada pendapat siapa pun di ruang rapat.",
  },
  {
    number: "04",
    title: "Iterasi",
    desc: "Tidak ada produk yang jadi setelah satu putaran. Kami ulang siklusnya sampai sinyal validasi cukup kuat.",
  },
];

export function HowWeWork() {
  return (
    <Section id="how-we-work">
      <Reveal>
        <h2 className="font-heading text-3xl font-bold text-ink lg:text-4xl mb-2">
          Cara kami menuntaskan.
        </h2>
        <p className="text-[17px] text-secondary max-w-xl mb-14 leading-relaxed">
          Proses yang berulang dan terukur. Beginilah cara kami memastikan setiap yang dimulai benar benar selesai.
        </p>
      </Reveal>

      {/* Strip layout — border box, internal dividers via pseudo-grid */}
      <div className="grid grid-cols-1 divide-y divide-line rounded-xl border border-line overflow-hidden sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
        {steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.07}>
            <div className={`p-6 lg:p-8 h-full ${i < steps.length - 1 ? "sm:border-r sm:border-line" : ""}`}>
              <p className="font-heading text-3xl font-bold text-line mb-4 select-none tabular-nums">
                {step.number}
              </p>
              <h3 className="font-heading font-semibold text-ink mb-2">{step.title}</h3>
              <p className="text-sm text-secondary leading-relaxed">{step.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
