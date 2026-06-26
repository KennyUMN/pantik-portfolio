import { capabilities } from "@/content/capabilities";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/Reveal";
import { Code2, Cpu, Paintbrush, BarChart2, Wifi } from "lucide-react";

const groupIcons: Record<string, React.ElementType> = {
  Fullstack: Code2,
  "AI / ML": Cpu,
  Design: Paintbrush,
  Data: BarChart2,
  IoT: Wifi,
};

export function Capabilities() {
  return (
    <Section id="capabilities" className="bg-surface/20">
      <Reveal>
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-amber">
          Kapabilitas Teknis
        </p>
        <h2 className="font-heading text-3xl font-bold text-text-dark lg:text-4xl mb-4">
          Eksekusi end-to-end, dari produk ke infrastruktur.
        </h2>
        <p className="text-muted-dark max-w-2xl mb-16">
          Juri teknis menilai apakah hero loop Pantik realistis dibangun tim ini. Berikut buktinya.
        </p>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((group, i) => {
          const Icon = groupIcons[group.nama] ?? Code2;
          return (
            <Reveal key={group.nama} delay={i * 0.07}>
              <div className="group h-full rounded-2xl border border-line-dark bg-surface p-6 transition-colors hover:border-amber/40">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber/10 text-amber group-hover:bg-amber/20 transition-colors">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-heading font-semibold text-text-dark">{group.nama}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
