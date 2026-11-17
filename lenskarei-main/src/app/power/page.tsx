import type { Metadata } from "next";
import Link from "next/link";
import { BrandRail } from "@/components/brand-rail";
import { PowerStudio } from "@/components/power-studio";
import { Reveal } from "@/components/motion";
import { LENS_PATHS } from "@/lib/optics";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Power Optics | Prescription Glasses | Lenskarei Opticals",
  },
  description:
    "Power glasses at Lenskarei Opticals, Virugambakkam. Compare clear frames for distance, reading and everyday wear, then confirm the lens in store.",
};

export default function PowerPage() {
  return (
    <main>
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-maroon">
              Power optics
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-maroon sm:text-5xl lg:text-6xl">
              Glasses with a number in the lens
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Coolers cover the sun. Power glasses cover the day you need to
              see through. Bring a written power, an older pair, or ask what
              an eye check at the Virugambakkam store involves before you
              choose a frame.
            </p>
          </Reveal>

          <div className="mt-12 sm:mt-16">
            <PowerStudio />
          </div>
        </div>
      </section>

      <BrandRail />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-maroon">
              The lens, not only the rim
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-maroon sm:text-4xl">
              Three ways a power lens is used
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Names on the lens change with what is in stock. We confirm the
              power, the coat and the fit on the pair in your hands.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {LENS_PATHS.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="h-full border border-maroon/12 bg-mist/50 p-6">
                  <p className="font-serif text-5xl font-semibold text-maroon/25">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-semibold text-maroon">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.detail}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href={SITE.whatsappHrefWithTopic(
                "Hello Lenskarei Opticals, I would like to enquire about power glasses and the lens options at your Virugambakkam store."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-maroon px-6 py-3.5 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-accent"
            >
              Enquire about power glasses
            </a>
            <Link
              href="/eyewear-guide#faces"
              className="inline-flex items-center gap-2 border-b border-maroon/40 py-2 text-sm font-medium text-maroon"
            >
              See frames for face shapes
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
