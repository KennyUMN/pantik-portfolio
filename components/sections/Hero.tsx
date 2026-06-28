import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { StatStrip } from "@/components/ui/StatStrip";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-white pt-16"
    >
      {/* Subtle dot grid pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #e3e8ef 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.5,
        }}
      />

      {/* Subtle teal glow top-right for brand warmth */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-[480px] w-[480px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at 100% 0%, rgba(14,79,110,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1120px] px-6 py-20 lg:px-8 lg:py-24">
        <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.08em] text-primary">
          Hackathon Digital Cooperatives Expo 2026
        </p>
        <h1
          id="hero-heading"
          className="font-heading max-w-3xl text-4xl font-bold leading-[1.1] text-ink sm:text-5xl lg:text-[52px]"
        >
          {site.headline}
        </h1>
        <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-secondary sm:mt-6">
          {site.subheadline}
        </p>
        <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
          <Button href="#flagship" size="lg">
            Lihat Pantik
          </Button>
          <Button href="#contact" variant="secondary" size="lg">
            Hubungi Kami
          </Button>
        </div>

        <StatStrip stats={site.heroStats} />
      </div>
    </section>
  );
}
