"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, EASE_EDITORIAL, motion } from "@/components/motion";
import { SITE } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-maroon/12 bg-ivory/92 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_10px_30px_-18px_rgba(96,0,24,0.55)]" : ""
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="group flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-maroon"
          aria-label="Lenskarei Opticals — Home"
        >
          <Image
            src="/brand/logo-mark.png"
            alt="Lenskarei Optical Store"
            width={168}
            height={72}
            priority
            className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:h-12"
          />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {SITE.nav.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : !item.href.startsWith("/#") && pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-2 py-2 text-[13px] font-medium tracking-wide transition-colors xl:px-3 xl:text-sm ${
                  isActive
                    ? "text-maroon"
                    : "text-charcoal/80 hover:text-maroon"
                }`}
              >
                {item.label}
                {isActive ? (
                  <motion.span
                    layoutId="header-active-link"
                    transition={{ duration: 0.35, ease: EASE_EDITORIAL }}
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 bg-accent xl:inset-x-3"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <a
            href={SITE.telHref}
            className="hidden px-3 py-2 text-sm font-medium text-charcoal/85 transition-colors hover:text-maroon xl:inline"
          >
            Call {SITE.phoneRaw}
          </a>
          <a
            href={SITE.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-maroon px-5 py-2.5 text-sm font-medium tracking-wide text-ivory transition-colors duration-200 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon"
          >
            WhatsApp Us
          </a>
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <a
            href={SITE.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-maroon px-3.5 py-2 text-xs font-medium tracking-wide text-ivory transition-colors hover:bg-accent"
          >
            WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center border border-maroon/20 text-maroon transition-colors hover:bg-mist"
          >
            <span className="sr-only">Menu</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              className="h-5 w-5"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h11" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {mobileOpen ? (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: EASE_EDITORIAL }}
            className="overflow-hidden border-t border-maroon/12 bg-ivory lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-5">
              {SITE.nav.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : !item.href.startsWith("/#") &&
                      pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`border-b border-maroon/8 py-3 text-base font-medium ${
                      isActive ? "text-maroon" : "text-charcoal"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="mt-4 flex flex-wrap gap-3 pt-1">
                <a
                  href={SITE.telHref}
                  className="flex-1 border border-maroon/25 px-4 py-2.5 text-center text-sm font-medium text-maroon"
                >
                  Call {SITE.phoneRaw}
                </a>
                <a
                  href={SITE.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-maroon/25 px-4 py-2.5 text-center text-sm font-medium text-charcoal"
                >
                  Directions
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
