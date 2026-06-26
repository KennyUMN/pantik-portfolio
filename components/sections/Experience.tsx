import { experience } from "@/content/experience";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";
import { Briefcase } from "lucide-react";

export function Experience() {
  if (experience.length === 0) return null;

  const byMember = experience.reduce<Record<string, typeof experience>>(
    (acc, exp) => {
      if (!acc[exp.anggota]) acc[exp.anggota] = [];
      acc[exp.anggota].push(exp);
      return acc;
    },
    {}
  );

  return (
    <Section id="experience">
      <Reveal>
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-amber">
          Pengalaman Kerja
        </p>
        <h2 className="font-heading text-3xl font-bold text-text-dark lg:text-4xl mb-16">
          Jam terbang di luar kampus.
        </h2>
      </Reveal>

      <div className="space-y-12">
        {Object.entries(byMember).map(([anggota, entries], gi) => (
          <Reveal key={anggota} delay={gi * 0.06}>
            <p className="font-heading font-semibold text-amber text-sm mb-5">{anggota}</p>
            <div className="relative space-y-0 pl-6 border-l border-line-dark">
              {entries.map((exp, i) => (
                <div key={i} className="relative pb-8 last:pb-0">
                  <div className="absolute -left-[25px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-surface border border-line-dark">
                    <Briefcase size={9} className="text-amber" />
                  </div>
                  <div className="rounded-xl border border-line-dark bg-surface p-5 ml-2">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <p className="font-heading font-semibold text-text-dark">{exp.perusahaan}</p>
                        <p className="text-sm text-amber">{exp.peran}</p>
                      </div>
                      <span className="shrink-0 text-xs text-muted-dark tabular-nums">{exp.periode}</span>
                    </div>
                    <p className="text-sm text-muted-dark leading-relaxed">{exp.highlight}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
