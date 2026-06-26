import { projects } from "@/content/projects";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { ExternalLink, Zap, AlertCircle, CheckCircle, TrendingUp, Users } from "lucide-react";

export function FlagshipPantik() {
  const pantik = projects.find((p) => p.isFlagship);
  if (!pantik) return null;

  return (
    <section
      id="flagship"
      aria-labelledby="flagship-heading"
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--color-ink) 0%, #0d1008 50%, var(--color-ink) 100%)",
      }}
    >
      {/* Ambient ember glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, color-mix(in oklch, var(--color-amber) 8%, transparent) 0%, transparent 70%)",
        }}
      />

      <Container>
        <Reveal>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber/30 bg-amber/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber">
              <Zap size={11} />
              Proyek Unggulan
            </span>
            <span className="rounded-full border border-line-dark px-3 py-1 text-xs font-medium text-muted-dark">
              Hackathon Digital Cooperatives Expo 2026
            </span>
          </div>

          <h2 id="flagship-heading" className="font-heading text-3xl font-bold text-text-dark sm:text-4xl lg:text-6xl leading-[1.02] mb-6">
            {pantik.judul}
          </h2>
          <p className="text-base text-muted-dark max-w-3xl mb-12 leading-relaxed sm:text-lg lg:mb-16">
            {pantik.ringkas}
          </p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left column — problem + solution */}
          <div className="lg:col-span-2 space-y-6">
            <Reveal delay={0.05}>
              <div className="rounded-2xl border border-line-dark bg-surface p-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle size={16} className="text-ember shrink-0" />
                  <h3 className="font-heading font-semibold text-text-dark">Masalah</h3>
                </div>
                <p className="text-sm text-muted-dark leading-relaxed">{pantik.problem}</p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-amber/30 bg-amber/5 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle size={16} className="text-amber shrink-0" />
                  <h3 className="font-heading font-semibold text-text-dark">Solusi</h3>
                </div>
                <p className="text-sm text-muted-dark leading-relaxed">{pantik.solusi}</p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-line-dark bg-surface p-6">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp size={16} className="text-spark shrink-0" />
                  <h3 className="font-heading font-semibold text-text-dark">
                    Dampak{" "}
                    <span className="text-xs font-normal text-muted-dark">(estimasi)</span>
                  </h3>
                </div>
                <p className="text-sm text-muted-dark leading-relaxed">{pantik.dampak}</p>
              </div>
            </Reveal>
          </div>

          {/* Right column — mechanism + roles + stack */}
          <div className="lg:col-span-3 space-y-6">
            <Reveal delay={0.05}>
              <div className="rounded-2xl border border-line-dark bg-surface p-6">
                <h3 className="font-heading font-semibold text-text-dark mb-5">
                  Mekanisme Inti
                </h3>
                <ol className="space-y-4">
                  {pantik.mekanisme?.map((m, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber/15 text-xs font-bold text-amber tabular-nums">
                        {i + 1}
                      </span>
                      <p className="text-sm text-muted-dark leading-relaxed pt-1">{m}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-line-dark bg-surface p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Users size={16} className="text-muted-dark shrink-0" />
                  <h3 className="font-heading font-semibold text-text-dark">Peran Tim</h3>
                </div>
                <p className="text-sm text-muted-dark leading-relaxed">{pantik.peranTim}</p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-line-dark bg-surface p-6">
                <h3 className="font-heading font-semibold text-text-dark mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {pantik.stack.map((s) => (
                    <Tag key={s} variant="amber">{s}</Tag>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 pt-4 border-t border-line-dark">
                  <Button href={pantik.demo} size="sm">
                    <ExternalLink size={13} />
                    Lihat Demo
                  </Button>
                  <Button href={pantik.github} variant="secondary" size="sm">
                    <ExternalLink size={13} />
                    Repositori
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
