import { projects } from "@/content/projects";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/Reveal";
import { ExternalLink } from "lucide-react";

export function Projects() {
  const others = projects.filter((p) => !p.isFlagship);
  if (others.length === 0) return null;

  return (
    <Section id="projects">
      <Reveal>
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-amber">
          Proyek Lain
        </p>
        <h2 className="font-heading text-3xl font-bold text-text-dark lg:text-4xl mb-16">
          Bukti kemampuan lintas domain.
        </h2>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {others.map((p, i) => (
          <Reveal key={p.judul} delay={i * 0.07}>
            <Card className="flex h-full flex-col">
              <h3 className="font-heading font-semibold text-text-dark mb-2">{p.judul}</h3>
              <p className="mb-5 flex-1 text-sm text-muted-dark leading-relaxed">{p.ringkas}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
              {p.demo && !p.demo.startsWith("[") && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium text-amber hover:text-spark transition-colors"
                >
                  <ExternalLink size={12} />
                  Lihat Proyek
                </a>
              )}
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
