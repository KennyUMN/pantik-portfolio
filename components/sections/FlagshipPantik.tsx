import { projects } from "@/content/projects";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { ExternalLink, AlertCircle, CheckCircle, TrendingUp, Users, Zap } from "lucide-react";

function ActivationLegend() {
  const states = [
    { label: "Dorman", color: "bg-state-dormant", text: "text-state-dormant" },
    { label: "Denyut", color: "bg-state-denyut", text: "text-state-denyut" },
    { label: "Nyala", color: "bg-state-nyala", text: "text-state-nyala" },
    { label: "Sehat", color: "bg-state-sehat", text: "text-state-sehat" },
  ];
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-xl border border-line bg-bg-subtle px-4 py-3">
      <span className="text-[12px] font-semibold uppercase tracking-wider text-muted-dark">
        Indeks Nyala
      </span>
      <div className="flex items-center gap-2">
        {states.map((s, i) => (
          <span key={s.label} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-line-dark">&#8594;</span>}
            <span className={`h-2.5 w-2.5 rounded-full ${s.color}`} />
            <span className={`text-[12px] font-medium ${s.text}`}>{s.label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function FlagshipPantik() {
  const pantik = projects.find((p) => p.isFlagship);
  if (!pantik) return null;

  const hasDemo = pantik.demo && !pantik.demo.includes("[");
  const hasGithub = pantik.github && !pantik.github.includes("[");

  return (
    <section
      id="flagship"
      aria-labelledby="flagship-heading"
      className="py-24 lg:py-28 bg-bg-subtle"
    >
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary-tint px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Zap size={11} />
              Proyek Unggulan
            </span>
            <span className="rounded-full border border-line px-3 py-1 text-xs font-medium text-secondary">
              Hackathon Digital Cooperatives Expo 2026
            </span>
          </div>

          <h2
            id="flagship-heading"
            className="font-heading text-3xl font-bold text-ink sm:text-4xl lg:text-5xl leading-[1.08] mb-4"
          >
            {pantik.judul}
          </h2>
          <p className="text-[17px] text-secondary max-w-3xl mb-8 leading-relaxed">
            {pantik.ringkas}
          </p>
          <div className="mb-12">
            <ActivationLegend />
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-5">
            <Reveal delay={0.05}>
              <div className="rounded-xl border border-line bg-white p-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle size={15} className="text-danger shrink-0" />
                  <h3 className="font-heading font-semibold text-ink text-sm">Masalah</h3>
                </div>
                <p className="text-sm text-secondary leading-relaxed">{pantik.problem}</p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-xl border border-primary/20 bg-primary-tint/40 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle size={15} className="text-primary shrink-0" />
                  <h3 className="font-heading font-semibold text-ink text-sm">Solusi</h3>
                </div>
                <p className="text-sm text-secondary leading-relaxed">{pantik.solusi}</p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-xl border border-line bg-white p-6">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp size={15} className="text-state-sehat shrink-0" />
                  <h3 className="font-heading font-semibold text-ink text-sm">
                    Dampak{" "}
                    <span className="text-xs font-normal text-muted-dark">(estimasi)</span>
                  </h3>
                </div>
                <p className="text-sm text-secondary leading-relaxed">{pantik.dampak}</p>
              </div>
            </Reveal>
          </div>

          {/* Right column */}
          <div className="lg:col-span-3 space-y-5">
            <Reveal delay={0.05}>
              <div className="rounded-xl border border-line bg-white p-6">
                <h3 className="font-heading font-semibold text-ink mb-5">Mekanisme Inti</h3>
                <ol className="space-y-4">
                  {pantik.mekanisme?.map((m, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-tint text-xs font-bold text-primary tabular-nums">
                        {i + 1}
                      </span>
                      <p className="text-sm text-secondary leading-relaxed pt-0.5">{m}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-xl border border-line bg-white p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Users size={15} className="text-muted-dark shrink-0" />
                  <h3 className="font-heading font-semibold text-ink text-sm">Peran Tim</h3>
                </div>
                <p className="text-sm text-secondary leading-relaxed">{pantik.peranTim}</p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-xl border border-line bg-white p-6">
                <h3 className="font-heading font-semibold text-ink mb-4 text-sm">Tech Stack</h3>
                <div className="flex flex-wrap gap-2 mb-5">
                  {pantik.stack.filter((s) => !s.includes("[")).map((s) => (
                    <Tag key={s} variant="primary">{s}</Tag>
                  ))}
                </div>
                {(hasDemo || hasGithub) && (
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-line">
                    {hasDemo && (
                      <Button href={pantik.demo} size="sm">
                        <ExternalLink size={13} />
                        Lihat Demo
                      </Button>
                    )}
                    {hasGithub && (
                      <Button href={pantik.github} variant="secondary" size="sm">
                        <ExternalLink size={13} />
                        Repositori
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
