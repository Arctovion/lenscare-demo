import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CoolersStudio } from "@/components/coolers-studio";
import { ImageFrameReveal, Reveal } from "@/components/motion";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Coolers and Sunglasses | Lenskarei Opticals Chennai",
  },
  description:
    "Compare square, aviator, round, cat-eye, rectangle and geometric coolers in acetate and metal at Lenskarei Opticals, Virugambakkam.",
};

export default function CoolersPage() {
  return (
    <main>
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-maroon">
              Coolers &amp; Sunglasses
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-maroon sm:text-5xl lg:text-6xl">
              Coolers for your kind of day
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Start with a shape you enjoy wearing. Compare colours, materials
              and fit at our Virugambakkam store, or send us a message on
              WhatsApp to ask about the styles currently in stock.
            </p>
          </Reveal>

          <div className="mt-12 sm:mt-16">
            <CoolersStudio />
          </div>
        </div>
      </section>

      <section className="border-t border-maroon/12 bg-mist/55 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-maroon">
              Acetate and metal
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-maroon sm:text-4xl">
              Two materials, the same careful fit
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Acetate holds colour and a thicker rim. Metal stays fine across
              the bridge. Both are in the Virugambakkam store — ask which
              finish is on the pair you like.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <ImageFrameReveal>
              <figure className="group">
                <div className="relative aspect-[4/3] overflow-hidden bg-ivory">
                  <Image
                    src="/images/coolers/square.jpg"
                    alt="Burgundy acetate square sunglasses"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="mt-4">
                  <p className="font-serif text-2xl font-semibold text-maroon">
                    Acetate
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    Square, cat-eye and rectangle sit in polished acetate, with
                    colour that reads from across the room.
                  </p>
                </figcaption>
              </figure>
            </ImageFrameReveal>
            <ImageFrameReveal delay={0.12}>
              <figure className="group">
                <div className="relative aspect-[4/3] overflow-hidden bg-ivory">
                  <Image
                    src="/images/coolers/aviator.jpg"
                    alt="Gold metal aviator sunglasses"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="mt-4">
                  <p className="font-serif text-2xl font-semibold text-maroon">
                    Metal
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    Aviator, round and geometric frames use a finer metal line
                    and a lighter bridge.
                  </p>
                </figcaption>
              </figure>
            </ImageFrameReveal>
          </div>

          <Reveal className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href={SITE.whatsappHrefWithTopic(
                "Hello Lenskarei Opticals, I would like to check the coolers and sunglasses currently available at your Virugambakkam store."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-maroon px-6 py-3.5 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-accent"
            >
              Enquire on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-b border-maroon/40 py-2 text-sm font-medium text-maroon transition-colors hover:border-accent hover:text-accent"
            >
              Plan a store visit
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
