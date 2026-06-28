import { awards } from "@/content/awards";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";
import { Trophy } from "lucide-react";

export function Awards() {
  if (awards.length === 0) return null;

  return (
    <Section id="awards" subtle>
      <Reveal>
        <h2 className="font-heading text-3xl font-bold text-ink lg:text-4xl mb-2">
          Rekam jejak yang dapat diperiksa.
        </h2>
        <p className="text-[17px] text-secondary max-w-2xl mb-12 leading-relaxed">
          Bukti bahwa tim ini terbiasa menuntaskan dan menang.
        </p>
      </Reveal>

      <div className="space-y-3">
        {awards.map((award, i) => (
          <Reveal key={i} delay={i * 0.07}>
            <div className="group flex flex-col gap-4 rounded-xl border border-line bg-white p-6 transition-all duration-200 hover:border-primary/30 hover:shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-tint text-amber transition-colors group-hover:bg-amber/20">
                  <Trophy size={18} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-ink">{award.namaLomba}</h3>
                  <p className="mt-1 text-sm text-secondary">
                    <span className="font-medium text-ink">{award.peran}.</span> {award.dampak}
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-3 pl-14 sm:pl-0">
                <span className="rounded-full bg-accent-tint px-3 py-1 text-xs font-semibold text-amber border border-amber/20">
                  {award.tingkat}
                </span>
                <span className="text-sm font-medium text-muted-dark tabular-nums">
                  {award.tahun}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
