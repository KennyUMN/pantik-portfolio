import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { SparkBackground } from "@/components/SparkBackground";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-svh items-center overflow-hidden pt-16"
    >
      <SparkBackground />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-amber sm:text-sm">
          Hackathon Digital Cooperatives Expo 2026
        </p>
        <h1
          id="hero-heading"
          className="font-heading text-4xl font-bold leading-[1.06] text-text-dark sm:text-5xl lg:text-7xl"
        >
          {site.headline}
        </h1>
        <p className="mt-5 max-w-xl text-base text-muted-dark sm:mt-6 sm:max-w-2xl sm:text-lg lg:text-xl">
          {site.subheadline}
        </p>
        <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
          <Button href="#flagship" size="lg">
            Lihat Pantik
          </Button>
          <Button href="#contact" variant="secondary" size="lg">
            Hubungi Kami
          </Button>
        </div>
      </div>
    </section>
  );
}
