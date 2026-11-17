"use client";

import Image from "next/image";
import { LOOKS } from "@/components/glasses";
import { EASE_EDITORIAL, motion, useReducedMotion } from "@/components/motion";
import { SITE } from "@/lib/site";

const ORDER = [
  "square",
  "rectangle",
  "round",
  "cateye",
  "aviator",
  "geometric",
] as const;

const DETAILS: Record<(typeof ORDER)[number], string> = {
  square:
    "Angular outline with balanced height and width for a structured everyday look.",
  rectangle:
    "Wider horizontal outline with a lower lens profile—clean and understated.",
  round:
    "Circular or near-circular lens rims with timeless vintage character.",
  cateye: "Subtly upswept outer corners that lift the brow line.",
  aviator:
    "Pilot-inspired silhouette, often featuring a double bridge and teardrop lens.",
  geometric:
    "Distinctive multi-angled rims beyond classic square and round forms.",
};

export function ShapeStudio() {
  const reduced = useReducedMotion();
  const shapes = ORDER.map(
    (id) => LOOKS.find((look) => look.id === id) ?? LOOKS[0]
  );

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        {shapes.map((shape, index) => (
          <motion.article
            key={shape.id}
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.65,
              delay: (index % 2) * 0.08,
              ease: EASE_EDITORIAL,
            }}
            whileHover={reduced ? undefined : { y: -6 }}
            className="group overflow-hidden border border-maroon/14 bg-ivory"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-mist">
              <Image
                src={shape.image}
                alt={`${shape.name} frames on the face`}
                fill
                sizes="(max-width: 640px) 100vw, 40vw"
                className="object-cover object-[72%_center] transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
                {shape.finish}
              </p>
              <h3 className="mt-1 font-serif text-2xl font-semibold text-maroon">
                {shape.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {DETAILS[shape.id]}
              </p>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={reduced ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE_EDITORIAL }}
        className="mt-10"
      >
        <a
          href={SITE.whatsappHrefWithTopic(
            "Hello Lenskarei Opticals, I read your Eyewear Guide and would like help choosing a frame shape and size."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-maroon px-7 py-3.5 text-sm font-medium tracking-wide text-ivory transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent"
        >
          Ask About a Product
        </a>
      </motion.div>
    </div>
  );
}
