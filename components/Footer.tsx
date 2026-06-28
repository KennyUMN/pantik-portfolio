import { site } from "@/content/site";
import { ExternalLink, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const teamName = site.name.includes("[") ? "Bara" : site.name;
  const hasEmail = !site.email.includes("[");

  return (
    <footer className="border-t border-line bg-bg-sunken">
      <div className="mx-auto max-w-[1120px] px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="font-heading text-lg font-bold text-ink">
              {teamName}
              <span className="ml-1 inline-block h-1.5 w-1.5 translate-y-[-3px] rounded-full bg-amber align-middle" aria-hidden />
            </p>
            <p className="mt-2 text-sm leading-relaxed text-secondary">{site.taglineDefault}</p>
          </div>

          {/* Quick links */}
          <nav aria-label="Tautan cepat" className="flex flex-col gap-2">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-muted-dark">
              Navigasi
            </p>
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-secondary transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-muted-dark">
              Kontak
            </p>
            {hasEmail && (
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-sm text-secondary transition-colors hover:text-primary"
              >
                <Mail size={14} />
                {site.email}
              </a>
            )}
            {site.social.map((s) => {
              if (s.url.includes("[")) return null;
              return (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-secondary transition-colors hover:text-primary"
                >
                  <ExternalLink size={14} />
                  {s.platform === "github" ? "GitHub" : s.platform === "email" ? "Email" : "LinkedIn"}
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 border-t border-line pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-dark">
            &copy; {year} {teamName}. Dibuat untuk Hackathon Digital Cooperatives Expo 2026.
          </p>
          <p className="text-xs text-muted-dark">
            Kemenkop RI &times; PEBS FEB UI
          </p>
        </div>
      </div>
    </footer>
  );
}
