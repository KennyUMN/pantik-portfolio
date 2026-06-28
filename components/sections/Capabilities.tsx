import { capabilities } from "@/content/capabilities";
import { Section } from "@/components/ui/Section";
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
    <Section id="capabilities">
      <Reveal>
        <h2 className="font-heading text-3xl font-bold text-ink lg:text-4xl mb-2">
          Eksekusi end-to-end, dari produk ke infrastruktur.
        </h2>
        <p className="text-[17px] text-secondary max-w-2xl mb-10 leading-relaxed">
          Juri teknis menilai apakah hero loop Pantik realistis dibangun tim ini. Berikut buktinya.
        </p>
      </Reveal>

      <div className="space-y-6">
        {capabilities.map((group, gi) => {
          const Icon = groupIcons[group.nama] ?? Code2;
          return (
            <Reveal key={group.nama} delay={gi * 0.06}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
                {/* Group label — fixed width, left-aligned */}
                <div className="flex shrink-0 items-center gap-2 sm:w-44 sm:pt-1">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary-tint text-primary">
                    <Icon size={14} />
                  </div>
                  <span className="text-sm font-semibold text-ink">{group.nama}</span>
                </div>

                {/* Chips — wrapping row */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line bg-bg-subtle px-3.5 py-1.5 text-[13px] font-medium text-secondary transition-colors hover:border-primary/30 hover:bg-primary-tint hover:text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              {gi < capabilities.length - 1 && (
                <div className="mt-6 border-t border-line" />
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
