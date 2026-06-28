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
        <h2 className="font-heading text-3xl font-bold text-ink lg:text-4xl mb-12">
          Jam terbang di luar kampus.
        </h2>
      </Reveal>

      <div className="space-y-12">
        {Object.entries(byMember).map(([anggota, entries], gi) => (
          <Reveal key={anggota} delay={gi * 0.06}>
            <p className="font-heading font-semibold text-primary text-sm mb-5">{anggota}</p>
            <div className="relative space-y-0 pl-6 border-l border-line">
              {entries.map((exp, i) => (
                <div key={i} className="relative pb-8 last:pb-0">
                  <div className="absolute -left-[25px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white border border-line">
                    <Briefcase size={9} className="text-primary" />
                  </div>
                  <div className="rounded-xl border border-line bg-white p-5 ml-2">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <p className="font-heading font-semibold text-ink">{exp.perusahaan}</p>
                        <p className="text-sm text-primary">{exp.peran}</p>
                      </div>
                      <span className="shrink-0 text-xs text-muted-dark tabular-nums">{exp.periode}</span>
                    </div>
                    <p className="text-sm text-secondary leading-relaxed">{exp.highlight}</p>
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
