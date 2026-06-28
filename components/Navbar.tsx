"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setMenuOpen(false);
      toggleRef.current?.focus();
    }
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.addEventListener("keydown", onKeyDown);
    firstLinkRef.current?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, onKeyDown]);

  const closeMenu = () => {
    setMenuOpen(false);
    toggleRef.current?.focus();
  };
  const teamName = site.name.includes("[") ? "Bara" : site.name;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled || menuOpen
            ? "border-b border-line bg-white/95 backdrop-blur-md shadow-sm"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <nav
          aria-label="Navigasi utama"
          className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-6 lg:px-8"
        >
          {/* Wordmark */}
          <a
            href="/"
            className="font-heading text-lg font-bold text-ink transition-colors hover:text-primary focus-visible:outline-primary"
            onClick={closeMenu}
          >
            {teamName}
            <span className="ml-1 inline-block h-1.5 w-1.5 translate-y-[-4px] rounded-full bg-amber align-middle" aria-hidden />
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex" role="list">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-secondary transition-colors hover:bg-paper hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white transition-all duration-150 hover:bg-primary-hover active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
          >
            Hubungi Kami
          </a>

          {/* Mobile toggle */}
          <button
            ref={toggleRef}
            type="button"
            aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-secondary transition-colors hover:bg-paper hover:text-ink lg:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-label="Menu navigasi"
          aria-modal="false"
          hidden={!menuOpen}
          className={cn(
            "border-t border-line bg-white lg:hidden",
            !menuOpen && "hidden"
          )}
        >
          <ul className="flex flex-col px-6 py-3" role="list">
            {site.nav.map((item, i) => (
              <li key={item.href}>
                <a
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex w-full items-center border-b border-line py-4 text-base font-medium text-secondary transition-colors hover:text-primary last:border-0"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pb-4 pt-2">
              <a
                href="#contact"
                onClick={closeMenu}
                className="flex w-full items-center justify-center rounded-xl bg-primary py-3 text-sm font-semibold text-white transition-all hover:bg-primary-hover active:scale-[0.97]"
              >
                Hubungi Kami
              </a>
            </li>
          </ul>
        </div>
      </header>

      {menuOpen && (
        <div
          aria-hidden
          className="fixed inset-0 z-40 bg-ink/20 lg:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
}
