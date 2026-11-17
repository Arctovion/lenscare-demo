import type { Metadata } from "next";
import Image from "next/image";
import { ImageFrameReveal, Reveal } from "@/components/motion";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Lenskarei Opticals | Chennai 600092",
  },
  description:
    "Visit Lenskarei Opticals at No. 83, Kaliamman Koil Street, Virugambakkam, Chennai – 600092, or message us directly on WhatsApp at 9884468233.",
};

const QUICK_TOPICS = [
  {
    title: "Enquire about Power Glasses",
    detail: "Ask about distance, reading and frames currently in the store.",
    message:
      "Hello Lenskarei Opticals, I would like to enquire about power glasses at your Virugambakkam store.",
  },
  {
    title: "Enquire about Coolers & Sunglasses",
    detail: "Ask about current shapes, tints and pricing at the store.",
    message:
      "Hello Lenskarei Opticals, I would like to enquire about coolers and sunglasses currently available at your Virugambakkam store.",
  },
  {
    title: "Share a Reference Style",
    detail: "Start a chat on WhatsApp, then attach a photo of a look you like.",
    message:
      "Hello Lenskarei Opticals, I would like to share a reference photo and check if similar styles are available in store.",
  },
  {
    title: "Confirm Store Visit & Timings",
    detail: "Verify today’s hours and directions before heading over.",
    message:
      "Hello Lenskarei Opticals, I am planning to visit your Virugambakkam store—please confirm today's opening hours and directions.",
  },
] as const;

export default function ContactPage() {
  return (
    <main>
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-maroon">
              Contact Us
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-maroon sm:text-5xl lg:text-6xl">
              Let us help with your eyewear enquiry
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Looking for a particular pair or planning a store visit? Chat with
              Lenskarei Opticals directly on WhatsApp, give us a call, or stop
              by Kaliamman Koil Street in Virugambakkam.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-maroon px-7 py-3.5 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-accent"
              >
                Chat on WhatsApp
              </a>
              <a
                href={SITE.telHref}
                className="inline-flex items-center justify-center border border-maroon/35 px-7 py-3.5 text-sm font-medium tracking-wide text-maroon transition-colors hover:border-maroon hover:bg-mist"
              >
                Call Now · {SITE.phoneRaw}
              </a>
              <a
                href={SITE.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-maroon/35 px-7 py-3.5 text-sm font-medium tracking-wide text-charcoal transition-colors hover:border-maroon hover:text-maroon"
              >
                Get Directions
              </a>
            </div>
          </Reveal>

          <ImageFrameReveal delay={0.1} className="mt-12">
            <div className="group relative aspect-[16/8] w-full overflow-hidden bg-mist">
              <Image
                src="/images/contact-store.jpg"
                alt="Optical shopfront with a maroon awning and sunglasses in the window"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </ImageFrameReveal>

          <div className="mt-16 grid gap-12 border-t border-maroon/15 pt-14 lg:grid-cols-12 lg:gap-16">
            {/* Store Details */}
            <Reveal className="space-y-10 lg:col-span-5">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-maroon">
                  Store Address
                </h2>
                <address className="mt-3 not-italic text-base leading-relaxed text-charcoal/88">
                  <p>{SITE.address.line1}</p>
                  <p>{SITE.address.locality}</p>
                </address>
                <a
                  href={SITE.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-maroon underline decoration-maroon/35 underline-offset-4 hover:text-accent"
                >
                  Open in Google Maps →
                </a>
              </div>

              <div className="border-t border-maroon/12 pt-8">
                <h2 className="font-serif text-2xl font-semibold text-maroon">
                  Direct Contact
                </h2>
                <dl className="mt-4 space-y-3 text-sm sm:text-base">
                  <div className="flex flex-col sm:flex-row sm:gap-3">
                    <dt className="w-36 font-medium text-muted">
                      Call &amp; WhatsApp
                    </dt>
                    <dd>
                      <a
                        href={SITE.telHref}
                        className="font-medium text-charcoal underline decoration-maroon/30 underline-offset-4 hover:text-maroon"
                      >
                        {SITE.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-3">
                    <dt className="w-36 font-medium text-muted">Email</dt>
                    <dd>
                      <a
                        href={SITE.mailtoHref}
                        className="text-charcoal underline decoration-maroon/30 underline-offset-4 hover:text-maroon"
                      >
                        {SITE.email}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="border-t border-maroon/12 pt-8">
                <h2 className="font-serif text-2xl font-semibold text-maroon">
                  Store Hours
                </h2>
                <p className="mt-3 text-base text-charcoal/88">
                  {SITE.hours.regular}
                </p>
                <p className="mt-1 text-base text-charcoal/88">
                  {SITE.hours.sunday}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-muted">
                  {SITE.hours.note}
                </p>
              </div>
            </Reveal>

            {/* Direct WhatsApp Enquiry Starters */}
            <Reveal delay={0.12} className="lg:col-span-7">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-maroon">
                Instant WhatsApp Enquiry
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-maroon sm:text-4xl">
                Start a conversation in one tap
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
                Select a topic below to open WhatsApp with a pre-filled message
                to {SITE.phoneRaw}. Review the text, attach any reference image,
                and send.
              </p>

              <div className="mt-8 space-y-3">
                {QUICK_TOPICS.map((topic) => (
                  <a
                    key={topic.title}
                    href={SITE.whatsappHrefWithTopic(topic.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 border border-maroon/16 bg-mist/60 px-6 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-maroon hover:bg-mist hover:shadow-[0_16px_40px_-28px_rgba(96,0,24,0.8)]"
                  >
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-maroon group-hover:text-accent">
                        {topic.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {topic.detail}
                      </p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-lg font-medium text-maroon transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent"
                    >
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
