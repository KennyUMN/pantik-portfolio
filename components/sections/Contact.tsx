import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { Mail, ExternalLink } from "lucide-react";

export function Contact() {
  const isEmailPlaceholder = site.email.startsWith("[");

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden border-t border-line-dark"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, color-mix(in oklch, var(--color-ember) 7%, transparent) 0%, transparent 70%)",
        }}
      />

      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-amber">
              Kontak
            </p>
            <h2 className="font-heading text-4xl font-bold text-text-dark lg:text-5xl mb-6 leading-[1.05]">
              Mari bicara tentang<br />
              <span className="text-amber">koperasi yang menyala.</span>
            </h2>
            <p className="text-lg text-muted-dark mb-3 leading-relaxed">
              Ada pertanyaan tentang Pantik, ingin berdiskusi lebih lanjut, atau ingin melihat demo secara langsung?
            </p>
            <p className="text-base text-muted-dark mb-12">
              Tim kami siap berbicara.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <Button
                href={isEmailPlaceholder ? "#" : `mailto:${site.email}`}
                size="lg"
              >
                <Mail size={16} />
                Hubungi Kami
              </Button>
              {site.social.map((s) => {
                const isPlaceholder = s.url.startsWith("[");
                return (
                  <Button
                    key={s.platform}
                    href={isPlaceholder ? "#" : s.url}
                    variant="secondary"
                    size="lg"
                  >
                    <ExternalLink size={16} />
                    {s.platform === "github" ? "GitHub" : "LinkedIn"}
                  </Button>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            {!isEmailPlaceholder && (
              <p className="text-sm text-muted-dark">
                atau kirim email langsung ke{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="text-amber hover:text-spark transition-colors underline underline-offset-2"
                >
                  {site.email}
                </a>
              </p>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
