import { awards } from "@/content/awards";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";
import { Trophy } from "lucide-react";

export function Awards() {
  if (awards.length === 0) return null;

  return (
    <Section id="awards">
      <Reveal>
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-amber">
          Prestasi
        </p>
        <h2 className="font-heading text-3xl font-bold text-text-dark lg:text-4xl mb-16">
          Track record yang dapat diperiksa.
        </h2>
      </Reveal>

      <div className="space-y-4">
        {awards.map((award, i) => (
          <Reveal key={i} delay={i * 0.07}>
            <div className="group flex flex-col gap-4 rounded-2xl border border-line-dark bg-surface p-6 transition-colors hover:border-amber/40 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber/10 text-amber group-hover:bg-amber/20 transition-colors">
                  <Trophy size={18} />
                </div>
                <div>
                  <p className="font-heading font-semibold text-text-dark">{award.namaLomba}</p>
                  <p className="mt-1 text-sm text-muted-dark">
                    {award.peran} — {award.dampak}
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-3 pl-14 sm:pl-0">
                <span className="rounded-full bg-amber/15 px-3 py-1 text-xs font-semibold text-amber">
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
