import Image from "next/image";
import Link from "next/link";
import { BrandRail } from "@/components/brand-rail";
import { LOOKS } from "@/components/glasses";
import { HeroShowcase } from "@/components/hero-showcase";
import { LensCare } from "@/components/lens-care";
import { ImageFrameReveal, Reveal } from "@/components/motion";
import { FACE_SHAPES, POWER_LOOKS } from "@/lib/optics";
import { SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <main>
      <HeroShowcase />
      <BrandRail />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-maroon">
                Power optics
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-maroon sm:text-4xl lg:text-5xl">
                Clear lenses for the number you need
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5">
              <p className="text-base leading-relaxed text-muted">
                Distance, reading, or one pair that does both. The frame is
                chosen here. The power is confirmed on the lens before you leave.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            <ImageFrameReveal className="lg:col-span-7">
              <Link href="/power" className="group relative block aspect-[16/10] overflow-hidden bg-mist">
                <Image
                  src="/images/power/square.jpg"
                  alt="Clear burgundy prescription glasses"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-[70%_center] transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </Link>
            </ImageFrameReveal>
            <div className="grid gap-4 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
              {POWER_LOOKS.map((look, index) => (
                <ImageFrameReveal key={look.id} delay={index * 0.06}>
                  <Link
                    href="/power"
                    className="group grid grid-cols-[7rem_1fr] items-center gap-4 border border-maroon/12 bg-ivory sm:grid-cols-1 lg:grid-cols-[7.5rem_1fr]"
                  >
                    <span className="relative block aspect-[4/3] overflow-hidden bg-mist">
                      <Image
                        src={look.product}
                        alt=""
                        fill
                        sizes="160px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </span>
                    <span className="pr-3">
                      <span className="block font-serif text-xl font-semibold text-maroon">
                        {look.name}
                      </span>
                      <span className="mt-1 block text-xs uppercase tracking-[0.14em] text-muted">
                        {look.finish} · clear
                      </span>
                    </span>
                  </Link>
                </ImageFrameReveal>
              ))}
            </div>
          </div>

          <Reveal className="mt-8">
            <Link
              href="/power"
              className="inline-flex items-center justify-center bg-maroon px-6 py-3.5 text-sm font-medium tracking-wide text-ivory transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent"
            >
              Open power optics
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-maroon">
                Coolers &amp; Sunglasses
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-maroon sm:text-4xl lg:text-5xl">
                Coolers for your kind of day
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5">
              <p className="text-base leading-relaxed text-muted">
                Six silhouettes in acetate and metal. Open the collection to
                watch each pair, then ask what is in stock at Virugambakkam.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4">
            {LOOKS.map((look, index) => (
              <ImageFrameReveal key={look.id} delay={index * 0.05}>
                <Link
                  href="/coolers"
                  className="group block overflow-hidden border border-maroon/12 bg-ivory"
                >
                  <span className="relative block aspect-[4/3] overflow-hidden bg-mist">
                    <Image
                      src={look.product}
                      alt={`${look.name} sunglasses in ${look.finish.toLowerCase()}`}
                      fill
                      sizes="(max-width: 640px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </span>
                  <span className="flex items-center justify-between px-3 py-3 sm:px-4">
                    <span className="font-serif text-xl font-semibold text-maroon">
                      {look.name}
                    </span>
                    <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
                      {look.finish}
                    </span>
                  </span>
                </Link>
              </ImageFrameReveal>
            ))}
          </div>

          <Reveal className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/coolers"
              className="inline-flex items-center justify-center bg-maroon px-6 py-3.5 text-sm font-medium tracking-wide text-ivory transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent"
            >
              Open the collection
            </Link>
            <a
              href={SITE.whatsappHrefWithTopic(
                "Hello Lenskarei Opticals, I would like to check the coolers and sunglasses currently available at your Virugambakkam store."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-maroon/30 px-6 py-3.5 text-sm font-medium tracking-wide text-maroon transition-colors hover:border-maroon hover:bg-mist"
            >
              Enquire on WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-maroon/12 bg-mist/45 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-maroon">
                Frames for the face
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-maroon sm:text-4xl lg:text-5xl">
                A shape that sits with the face
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-5">
              <p className="text-base leading-relaxed text-muted">
                Oval, round, square, heart and oblong. Each reference shows a
                frame that usually balances that face. The final choice is the
                fit on you.
              </p>
            </Reveal>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {FACE_SHAPES.map((face, index) => (
              <ImageFrameReveal key={face.id} delay={index * 0.05}>
                <Link href="/eyewear-guide#faces" className="group block bg-ivory">
                  <span className="relative block aspect-[3/4] overflow-hidden">
                    <Image
                      src={face.image}
                      alt={`${face.name} face in ${face.frame.toLowerCase()} glasses`}
                      fill
                      sizes="(max-width: 640px) 50vw, 20vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </span>
                  <span className="block px-1 py-3">
                    <span className="block font-serif text-xl font-semibold text-maroon">
                      {face.name}
                    </span>
                    <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
                      {face.frame}
                    </span>
                  </span>
                </Link>
              </ImageFrameReveal>
            ))}
          </div>
        </div>
      </section>

      <LensCare />

      {/* 03 Eyewear Guide Tease */}
      <section className="border-y border-maroon/12 bg-mist/65 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-maroon">
                Eyewear Guide
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-maroon sm:text-4xl">
                A little detail makes choosing easier
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                Learn what the three numbers inside a temple mean and how frame
                shape, bridge width and material affect everyday comfort.
              </p>
              <div className="mt-7">
                <Link
                  href="/eyewear-guide"
                  className="inline-flex items-center justify-center border border-maroon px-6 py-3 text-sm font-medium tracking-wide text-maroon transition-colors hover:bg-maroon hover:text-ivory"
                >
                  Read the Eyewear Guide
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.14} className="lg:col-span-6">
              <div className="border-l-2 border-maroon/35 pl-6 sm:pl-10">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                  Example Temple Marking
                </p>
                <div className="mt-4 flex flex-wrap items-baseline gap-x-6 gap-y-4 font-serif text-5xl font-semibold text-maroon sm:text-6xl">
                  <div>
                    <span>52</span>
                    <span className="mt-1 block font-sans text-xs font-normal tracking-wide text-muted">
                      Lens width (mm)
                    </span>
                  </div>
                  <span className="text-3xl text-maroon/35" aria-hidden="true">
                    —
                  </span>
                  <div>
                    <span>18</span>
                    <span className="mt-1 block font-sans text-xs font-normal tracking-wide text-muted">
                      Bridge width (mm)
                    </span>
                  </div>
                  <span className="text-3xl text-maroon/35" aria-hidden="true">
                    —
                  </span>
                  <div>
                    <span>140</span>
                    <span className="mt-1 block font-sans text-xs font-normal tracking-wide text-muted">
                      Temple length (mm)
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 04 Store Presence Strip */}
      <section className="relative isolate overflow-hidden bg-maroon py-20 text-ivory sm:py-24">
        <div
          aria-hidden="true"
          className="store-glow pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_20%,rgba(200,0,24,0.38),transparent_55%)]"
        />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-ivory/70">
              Chennai · 600092
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Visit Lenskarei in Virugambakkam
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ivory/82 sm:text-lg">
              {SITE.address.full}. Call or WhatsApp {SITE.phoneRaw} for product
              enquiries, current timings and directions.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={SITE.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-ivory px-6 py-3.5 text-sm font-medium tracking-wide text-maroon transition-colors hover:bg-mist"
              >
                Get Directions
              </a>
              <a
                href={SITE.telHref}
                className="inline-flex items-center justify-center border border-ivory/40 px-6 py-3.5 text-sm font-medium tracking-wide text-ivory transition-colors hover:border-ivory hover:bg-ivory/10"
              >
                Call Now
              </a>
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-ivory/40 px-6 py-3.5 text-sm font-medium tracking-wide text-ivory transition-colors hover:border-ivory hover:bg-ivory/10"
              >
                WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
