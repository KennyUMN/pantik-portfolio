import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { Mail, ExternalLink } from "lucide-react";

export function Contact() {
  const isEmailPlaceholder = site.email.includes("[");

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-28 overflow-hidden border-t border-line bg-bg-sunken"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-primary">
              Kontak
            </p>
            <h2 className="font-heading text-3xl font-bold text-ink lg:text-4xl mb-4 leading-[1.1]">
              Mari bicara tentang koperasi yang menyala.
            </h2>
            <p className="text-[17px] text-secondary mb-2 leading-relaxed">
              Ada pertanyaan tentang Pantik, ingin berdiskusi lebih lanjut, atau ingin melihat demo secara langsung?
            </p>
            <p className="text-base text-secondary mb-10">
              Tim kami siap berbicara.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              <Button
                href={isEmailPlaceholder ? "#" : `mailto:${site.email}`}
                size="lg"
              >
                <Mail size={16} />
                Hubungi Kami
              </Button>
              {site.social
                .filter((s) => !s.url.includes("[") && s.platform !== "email")
                .map((s) => (
                  <Button
                    key={s.platform}
                    href={s.url}
                    variant="secondary"
                    size="lg"
                  >
                    <ExternalLink size={16} />
                    {s.platform === "github" ? "GitHub" : "LinkedIn"}
                  </Button>
                ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            {!isEmailPlaceholder && (
              <p className="text-sm text-secondary">
                atau kirim email langsung ke{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="text-primary hover:text-primary-hover transition-colors underline underline-offset-2"
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
