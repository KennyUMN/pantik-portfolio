"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Transparent → solid on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape key closes menu
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setMenuOpen(false);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.addEventListener("keydown", onKeyDown);
    // Move focus to first menu item
    firstLinkRef.current?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, onKeyDown]);

  const closeMenu = () => setMenuOpen(false);
  const teamName = site.name.includes("[") ? "Tim" : site.name;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled || menuOpen
            ? "border-b border-line-dark bg-ink/95 backdrop-blur-md shadow-lg shadow-ink/20"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <nav
          aria-label="Navigasi utama"
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8"
        >
          {/* Wordmark */}
          <a
            href="/"
            className="font-heading text-lg font-bold text-text-dark transition-colors hover:text-amber focus-visible:outline-amber"
            onClick={closeMenu}
          >
            {teamName}
          </a>

          {/* Desktop nav links */}
          <ul
            className="hidden items-center gap-1 lg:flex"
            role="list"
          >
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-dark transition-colors hover:bg-surface hover:text-text-dark"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 rounded-md bg-amber px-4 py-2 text-sm font-semibold text-ink transition-all duration-150 hover:bg-spark active:scale-[0.97]"
          >
            Hubungi Kami
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-md text-text-dark transition-colors hover:bg-surface hover:text-amber lg:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile menu panel */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-label="Menu navigasi"
          aria-modal="false"
          hidden={!menuOpen}
          className={cn(
            "border-t border-line-dark bg-ink/98 backdrop-blur-md lg:hidden",
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
                  className="flex w-full items-center border-b border-line-dark/40 py-4 text-base font-medium text-text-dark transition-colors hover:text-amber last:border-0"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pb-4 pt-2">
              <a
                href="#contact"
                onClick={closeMenu}
                className="flex w-full items-center justify-center rounded-md bg-amber py-3 text-sm font-semibold text-ink transition-all hover:bg-spark active:scale-[0.97]"
              >
                Hubungi Kami
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* Backdrop — closes menu when tapping outside on mobile */}
      {menuOpen && (
        <div
          aria-hidden
          className="fixed inset-0 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
}
