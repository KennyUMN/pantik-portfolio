import Image from "next/image";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { StatStrip } from "@/components/ui/StatStrip";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-white pt-16"
    >
      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #e3e8ef 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.45,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1120px] px-6 lg:px-8">
        <div className="grid items-center gap-12 py-20 lg:grid-cols-[1fr_420px] lg:gap-16 lg:py-0 lg:min-h-[calc(100dvh-64px)]">
          {/* Left: copy */}
          <div>
            <h1
              id="hero-heading"
              className="font-heading text-4xl font-bold leading-[1.08] text-ink sm:text-5xl lg:text-[52px]"
            >
              {site.headline}
            </h1>
            <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-secondary">
              {site.subheadline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#flagship" size="lg">
                Lihat Pantik
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                Hubungi Kami
              </Button>
            </div>
            <StatStrip stats={site.heroStats} />
          </div>

          {/* Right: editorial image */}
          <div className="relative hidden lg:block">
            <div className="relative h-[480px] w-full overflow-hidden rounded-2xl">
              <Image
                src="https://picsum.photos/seed/cooperative-village-indonesia/840/960"
                alt="Koperasi desa merah putih"
                fill
                className="object-cover"
                priority
                sizes="420px"
              />
              {/* Overlay tint for brand cohesion */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(14,79,110,0.12) 0%, transparent 60%)",
                }}
              />
            </div>
            {/* Floating stat chip */}
            <div className="absolute -bottom-4 -left-6 rounded-xl border border-line bg-white px-5 py-4 shadow-sm">
              <p className="font-heading text-2xl font-bold text-ink">83.363</p>
              <p className="mt-0.5 text-[12px] text-secondary">koperasi terdaftar SIMKOPDES</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
