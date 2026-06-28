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
        <h2 className="font-heading text-3xl font-bold text-ink lg:text-4xl mb-12">
          Aktif di luar pekerjaan.
        </h2>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {organizations.map((org, i) => (
          <Reveal key={org.nama} delay={i * 0.07}>
            <Card className="flex flex-col gap-3 h-full">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-tint text-primary">
                  <Users size={16} />
                </div>
                <p className="font-heading font-semibold text-ink">{org.nama}</p>
              </div>
              <p className="text-xs font-medium text-primary">{org.peran}</p>
              <p className="text-sm text-secondary leading-relaxed">{org.kontribusi}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
