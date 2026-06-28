import { capabilities } from "@/content/capabilities";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/Reveal";
import { Code2, Cpu, Paintbrush, BarChart2, Plug } from "lucide-react";

const groupIcons: Record<string, React.ElementType> = {
  Fullstack: Code2,
  "AI / ML": Cpu,
  Design: Paintbrush,
  Data: BarChart2,
  "Integrasi & API": Plug,
};

export function Capabilities() {
  return (
    <Section id="capabilities" subtle>
      <Reveal>
        <SectionHeader
          eyebrow="Kapabilitas Teknis"
          heading="Eksekusi end-to-end, dari produk ke infrastruktur."
          lead="Juri teknis menilai apakah hero loop Pantik realistis dibangun tim ini. Berikut buktinya."
        />
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((group, i) => {
          const Icon = groupIcons[group.nama] ?? Code2;
          return (
            <Reveal key={group.nama} delay={i * 0.07}>
              <div className="group h-full rounded-xl border border-line bg-white p-6 transition-all duration-200 hover:border-primary/30 hover:shadow-sm">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-tint text-primary transition-colors group-hover:bg-primary/15">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-heading font-semibold text-ink">{group.nama}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
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
