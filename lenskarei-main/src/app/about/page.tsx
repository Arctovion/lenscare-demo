import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ImageFrameReveal, Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: {
    absolute: "About Us | Lenskarei Opticals Chennai",
  },
  description:
    "Meet Lenskarei Opticals on Kaliamman Koil Street in Virugambakkam, Chennai. Explore coolers and sunglasses and connect with our store.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-maroon">
              About Lenskarei Opticals
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-maroon sm:text-5xl lg:text-6xl">
              Meet Lenskarei Opticals
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-charcoal/88">
              Lenskarei Opticals is an optical store on Kaliamman Koil Street in
              Virugambakkam, Chennai. Explore power glasses and coolers at our
              store, and contact us by phone, WhatsApp or email for product
              information.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:mt-16 md:grid-cols-12">
            <ImageFrameReveal className="md:col-span-7">
              <div className="group relative aspect-[16/10] w-full overflow-hidden bg-mist">
                <Image
                  src="/images/about.jpg"
                  alt="Warm optical boutique interior with frames on display"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />
              </div>
            </ImageFrameReveal>
            <ImageFrameReveal delay={0.12} className="md:col-span-5">
              <div className="group relative aspect-[16/10] w-full overflow-hidden bg-mist md:aspect-auto md:h-full md:min-h-[16rem]">
                <Image
                  src="/images/about-fitting.jpg"
                  alt="Comparing an acetate cooler and a metal frame in natural light"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
            </ImageFrameReveal>
          </div>

          <div className="mt-16 grid gap-10 border-t border-maroon/15 pt-14 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <h2 className="font-serif text-3xl font-semibold leading-snug text-maroon sm:text-4xl">
                Choosing eyewear is personal.
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="md:col-span-7">
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                Take time to compare the style, fit and details before deciding.
                Two frames can look similar at a glance yet sit very differently
                on the bridge and temples. If you have a particular look in
                mind, send us a reference image on WhatsApp and ask about the
                options currently available at our Virugambakkam store.
              </p>

              <div className="mt-10 grid gap-8 border-t border-maroon/12 pt-8 sm:grid-cols-3">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-maroon">
                    Browse &amp; Compare
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Try classic shapes, tints and frame materials in natural
                    light before choosing.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-maroon">
                    Share a Reference
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Message a photo on WhatsApp to check similar silhouettes at
                    the store.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-maroon">
                    Local Presence
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Conveniently located at Kaliamman Koil Street,
                    Virugambakkam, Chennai.
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/power"
                  className="inline-flex items-center justify-center bg-maroon px-6 py-3.5 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-accent"
                >
                  Power Optics
                </Link>
                <Link
                  href="/coolers"
                  className="inline-flex items-center justify-center border border-maroon/35 px-6 py-3.5 text-sm font-medium tracking-wide text-maroon transition-colors hover:border-maroon hover:bg-mist"
                >
                  Coolers
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-maroon/35 px-6 py-3.5 text-sm font-medium tracking-wide text-maroon transition-colors hover:border-maroon hover:bg-mist"
                >
                  Visit Our Store
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
