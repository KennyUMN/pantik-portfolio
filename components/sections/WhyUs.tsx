import { whyus } from "@/content/whyus";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { Compass, Code2, Landmark } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  compass: Compass,
  code: Code2,
  landmark: Landmark,
};

export function WhyUs() {
  return (
    <Section id="why-us" subtle>
      <Reveal>
        <SectionHeader
          eyebrow="Mengapa Tim Ini"
          heading="Tiga hal yang jarang berkumpul dalam satu tim."
          lead="Juri menilai apakah tim ini yang paling layak membangun dan menyerahkan solusi ini. Inilah jawabannya."
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {whyus.map((point, i) => {
          const Icon = iconMap[point.icon] ?? Landmark;
          return (
            <Reveal key={point.no} delay={i * 0.08}>
              <div className="group relative h-full rounded-xl border border-line bg-white p-8 transition-all duration-200 hover:border-primary/30 hover:shadow-sm">
                <div className="absolute right-6 top-6 font-heading text-5xl font-bold text-line select-none transition-colors group-hover:text-primary/10">
                  {point.no}
                </div>
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-tint text-primary transition-colors group-hover:bg-primary/15">
                  <Icon size={20} />
                </div>
                <h3 className="font-heading text-[17px] font-semibold text-ink mb-3">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-secondary">{point.body}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
