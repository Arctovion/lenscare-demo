import type { Metadata } from "next";
import Image from "next/image";
import { FaqAccordion, type FaqGroup } from "@/components/faq-accordion";
import { ImageFrameReveal, Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: {
    absolute: "Eyewear and Store FAQs | Lenskarei Opticals Chennai",
  },
  description:
    "Find answers about frame fit, coolers and sunglasses, and visiting Lenskarei Opticals in Virugambakkam, Chennai.",
};

const FAQ_GROUPS: FaqGroup[] = [
  {
    id: "frames-and-fit",
    title: "Frames and Fit",
    items: [
      {
        id: "compare-sizes",
        question: "How can I compare frame sizes?",
        answer:
          "Compare the lens width, bridge width and temple length with a pair you already find comfortable, and message us on WhatsApp if you need help locating the measurements.",
      },
      {
        id: "frame-numbers",
        question: "What do the numbers inside a frame mean?",
        answer:
          "A marking such as 52–18–140 usually gives the lens width, bridge width and temple length in millimetres. The example is for explanation; each frame design has its own measurements.",
      },
      {
        id: "same-size-label",
        question: "Will the same size label fit the same across every design?",
        answer:
          "Not always. Shape, bridge design and dimensions can change how a frame feels. Use the millimetre measurements—and try the fit in person where possible—when comparing pairs.",
      },
      {
        id: "reference-frame",
        question: "Can I ask about a frame style I saw somewhere else?",
        answer:
          "Yes. Send a reference photograph to 9884468233 on WhatsApp and ask about available styles at our store. A reference image helps us suggest close silhouettes, though the exact model may vary.",
      },
    ],
  },
  {
    id: "power-optics",
    title: "Power Optics",
    items: [
      {
        id: "power-glasses",
        question: "Do you make power glasses as well as coolers?",
        answer:
          "Yes. Ask about clear frames for distance, reading, or a lens that covers both. Visit the Virugambakkam store or message 9884468233 with your written power.",
      },
      {
        id: "bring-power",
        question: "What should I bring if I already have a prescription?",
        answer:
          "A written power, or an older pair you can see through, is enough to start. We confirm the lens on the frame you choose. If you need an eye check, ask the store what is available before you travel.",
      },
      {
        id: "face-shape",
        question: "Can you suggest a frame for my face?",
        answer:
          "Yes. The eyewear guide shows oval, round, square, heart and oblong references. Send a front-facing photo on WhatsApp and we will suggest silhouettes that are in stock. The fit on your nose and temples still has to be tried.",
      },
    ],
  },
  {
    id: "coolers-and-sunglasses",
    title: "Coolers and Sunglasses",
    items: [
      {
        id: "sell-coolers",
        question: "Do you sell coolers and sunglasses?",
        answer:
          "Yes. Visit our Virugambakkam store or reach out on WhatsApp for current designs, colours, prices and availability.",
      },
      {
        id: "polarised-features",
        question: "Are all sunglasses in the store polarised?",
        answer:
          "Lens features vary by model. Please ask our store team to confirm polarisation and UV protection for the specific pair you are considering.",
      },
    ],
  },
  {
    id: "store-and-enquiries",
    title: "Store and Enquiries",
    items: [
      {
        id: "where-is-store",
        question: "Where is Lenskarei Opticals located?",
        answer:
          "Our store is at No. 83, Kaliamman Koil Street, Virugambakkam, Chennai – 600092. You can call or WhatsApp 9884468233 for directions.",
      },
      {
        id: "opening-hours",
        question: "What time is the store open?",
        answer:
          "Indicative hours are Monday to Saturday, 10:00 AM – 9:00 PM, and Sunday, 10:30 AM – 8:30 PM. Please call or WhatsApp 9884468233 to confirm current opening hours before visiting.",
      },
      {
        id: "check-before-visit",
        question: "Can I check availability before travelling to the store?",
        answer:
          "Yes. Send the style, colour or a reference photograph on WhatsApp to 9884468233 and our team will let you know what is available.",
      },
    ],
  },
];

export default function FaqsPage() {
  return (
    <main>
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-maroon">
              Help &amp; Information
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-maroon sm:text-5xl lg:text-6xl">
              Questions about your next pair?
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              Find answers about power glasses, frames, coolers and store
              enquiries. For anything else, call or WhatsApp 9884468233.
            </p>
          </Reveal>

          <ImageFrameReveal delay={0.08} className="mt-10">
            <div className="group relative aspect-[16/7] w-full overflow-hidden bg-mist">
              <Image
                src="/images/faq-still.jpg"
                alt="A burgundy frame, brass caliper and notebook laid out for a size check"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 960px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </ImageFrameReveal>

          <Reveal delay={0.1} className="mt-12">
            <FaqAccordion groups={FAQ_GROUPS} />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
