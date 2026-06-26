import { organizations } from "@/content/organizations";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/Reveal";
import { Users } from "lucide-react";

export function Organizations() {
  if (organizations.length === 0) return null;

  return (
    <Section id="organizations">
      <Reveal>
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-amber">
          Organisasi dan Komunitas
        </p>
        <h2 className="font-heading text-3xl font-bold text-text-dark lg:text-4xl mb-16">
          Aktif di luar pekerjaan.
        </h2>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {organizations.map((org, i) => (
          <Reveal key={org.nama} delay={i * 0.07}>
            <Card className="flex flex-col gap-3 h-full">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber/10 text-amber">
                  <Users size={16} />
                </div>
                <p className="font-heading font-semibold text-text-dark">{org.nama}</p>
              </div>
              <p className="text-xs font-medium text-amber">{org.peran}</p>
              <p className="text-sm text-muted-dark leading-relaxed">{org.kontribusi}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
