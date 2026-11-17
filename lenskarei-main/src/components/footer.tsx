import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-maroon/15 bg-mist/75 pb-28 text-charcoal sm:pb-24">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="inline-block">
              <Image
                src="/brand/logo-mark.png"
                alt="Lenskarei Optical Store"
                width={180}
                height={76}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Optical store in Virugambakkam, Chennai. Explore power glasses
              and coolers in person, compare frame fit and details, and reach
              our store directly on WhatsApp or phone.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium uppercase tracking-[0.14em] text-maroon/85">
              {SITE.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-maroon/30 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h2 className="font-serif text-xl font-semibold text-maroon">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SITE.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-charcoal/85 transition-colors hover:text-maroon"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h2 className="font-serif text-xl font-semibold text-maroon">
              Virugambakkam Store
            </h2>
            <address className="mt-4 not-italic text-sm leading-relaxed text-charcoal/85">
              <p>{SITE.address.line1}</p>
              <p>{SITE.address.locality}</p>
            </address>
            <p className="mt-3 text-xs leading-relaxed text-muted">
              {SITE.hours.regular} · {SITE.hours.sunday}
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium">
              <a
                href={SITE.telHref}
                className="text-maroon underline decoration-maroon/35 underline-offset-4 hover:text-accent"
              >
                {SITE.phoneDisplay}
              </a>
              <span className="text-maroon/30" aria-hidden="true">
                |
              </span>
              <a
                href={SITE.mailtoHref}
                className="text-charcoal/85 underline decoration-charcoal/25 underline-offset-4 hover:text-maroon"
              >
                {SITE.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-maroon/12 pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <p>© {year} Lenskarei Opticals. Virugambakkam, Chennai – 600092.</p>
          <p>Browse online · Enquire on WhatsApp · Visit in store</p>
        </div>
      </div>
    </footer>
  );
}
