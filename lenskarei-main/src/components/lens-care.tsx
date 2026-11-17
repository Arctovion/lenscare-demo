"use client";

import { EASE_EDITORIAL, motion, useReducedMotion } from "@/components/motion";
import { SITE } from "@/lib/site";

const CARE = [
  {
    title: "Fit on the face",
    text: "Bridge, temples and alignment are checked on you. Two frames with the same size label can still sit differently.",
    icon: FitIcon,
  },
  {
    title: "Coatings and clarity",
    text: "Ask what is in the store — anti-reflective, blue-light comfort and tints change by lens, and we confirm the pair before you decide.",
    icon: CoatIcon,
  },
  {
    title: "Sun and UV",
    text: "Polarisation and UV protection are not the same on every cooler. We check the exact pair you are holding.",
    icon: UvIcon,
  },
  {
    title: "Care after you leave",
    text: "Bring a frame back for a clean, a tighten or a small alignment. Everyday wear should not mean living with a crooked bridge.",
    icon: CareIcon,
  },
] as const;

export function LensCare() {
  const reduced = useReducedMotion();

  return (
    <section id="lens-care" className="scroll-mt-24 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            className="lg:col-span-4"
            initial={reduced ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE_EDITORIAL }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-maroon">
              Lens care
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-maroon sm:text-4xl lg:text-5xl">
              Clarity is a kind of care.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              The frame is only half the pair. Fitting, the coat on the lens
              and a later adjustment decide how the day actually feels.
            </p>
            <a
              href={SITE.whatsappHrefWithTopic(
                "Hello Lenskarei Opticals, I would like to ask about lens care, coatings and a frame fitting at your Virugambakkam store."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center bg-maroon px-6 py-3.5 text-sm font-medium tracking-wide text-ivory transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent"
            >
              Ask about lens care
            </a>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {CARE.map((item, index) => (
              <motion.article
                key={item.title}
                initial={reduced ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: EASE_EDITORIAL,
                }}
                whileHover={reduced ? undefined : { y: -4 }}
                className="group border border-maroon/12 bg-mist/55 p-6 transition-colors duration-300 hover:border-maroon/35 hover:bg-mist"
              >
                <item.icon />
                <h3 className="mt-5 font-serif text-2xl font-semibold text-maroon">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function iconMotion(reduced: boolean | null, delay = 0) {
  return {
    initial: reduced ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0.2 },
    whileInView: { pathLength: 1, opacity: 1 },
    viewport: { once: true, amount: 0.6 },
    transition: { duration: 1.05, delay, ease: EASE_EDITORIAL },
  } as const;
}

function FitIcon() {
  const reduced = useReducedMotion();
  const draw = iconMotion(reduced);
  return (
    <svg viewBox="0 0 48 48" className="h-11 w-11 text-maroon" fill="none" aria-hidden="true">
      <motion.rect x="6" y="16" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.7" {...draw} />
      <motion.rect x="28" y="16" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.7" {...iconMotion(reduced, 0.12)} />
      <motion.path d="M20 22h8M6 20H3M42 20h3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" {...iconMotion(reduced, 0.2)} />
      <motion.path d="M16 34h16M24 31v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" {...iconMotion(reduced, 0.28)} />
    </svg>
  );
}

function CoatIcon() {
  const reduced = useReducedMotion();
  return (
    <svg viewBox="0 0 48 48" className="h-11 w-11 text-maroon" fill="none" aria-hidden="true">
      <motion.path d="M10 30c6-12 22-12 28 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" {...iconMotion(reduced)} />
      <motion.path d="M14 30c4.2-8 15.8-8 20 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" {...iconMotion(reduced, 0.15)} />
      <motion.path d="M18 30c2.4-4.2 9.6-4.2 12 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" {...iconMotion(reduced, 0.28)} />
      <motion.path d="M8 34h32" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" {...iconMotion(reduced, 0.36)} />
    </svg>
  );
}

function UvIcon() {
  const reduced = useReducedMotion();
  return (
    <svg viewBox="0 0 48 48" className="h-11 w-11 text-maroon" fill="none" aria-hidden="true">
      <motion.circle cx="18" cy="18" r="6" stroke="currentColor" strokeWidth="1.7" {...iconMotion(reduced)} />
      <motion.path d="M18 6v3M18 27v3M6 18h3M27 18h3M9.5 9.5l2 2M24.5 24.5l2 2M9.5 26.5l2-2M24.5 11.5l2-2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" {...iconMotion(reduced, 0.12)} />
      <motion.path d="M26 28h12l-2 12H28L26 28Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" {...iconMotion(reduced, 0.24)} />
    </svg>
  );
}

function CareIcon() {
  const reduced = useReducedMotion();
  return (
    <svg viewBox="0 0 48 48" className="h-11 w-11 text-maroon" fill="none" aria-hidden="true">
      <motion.path d="M16 14a12 12 0 1 0 12 8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" {...iconMotion(reduced)} />
      <motion.path d="M28 10v8h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...iconMotion(reduced, 0.16)} />
      <motion.path d="M22 24.5l2.2 2.2 4.6-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...iconMotion(reduced, 0.28)} />
    </svg>
  );
}
