"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  EASE_EDITORIAL,
  motion,
  useReducedMotion,
} from "@/components/motion";
import { FACE_SHAPES } from "@/lib/optics";
import { SITE } from "@/lib/site";

const ROTATE_MS = 4800;

export function FaceStudio() {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const face = FACE_SHAPES[index];

  useEffect(() => {
    if (paused || reduced || document.hidden) return;
    const timer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % FACE_SHAPES.length);
    }, ROTATE_MS);
    return () => window.clearTimeout(timer);
  }, [index, paused, reduced]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden bg-mist lg:col-span-5">
          {FACE_SHAPES.map((item) => (
            <motion.div
              key={item.id}
              className="absolute inset-0"
              animate={{ opacity: item.id === face.id ? 1 : 0, scale: item.id === face.id ? 1 : 1.03 }}
              transition={{ duration: reduced ? 0 : 0.65, ease: EASE_EDITORIAL }}
            >
              <Image
                src={item.image}
                alt={
                  item.id === face.id
                    ? `${item.name} face wearing ${item.frame.toLowerCase()} glasses`
                    : ""
                }
                fill
                sizes="(max-width: 1024px) 100vw, 36vw"
                className="object-cover object-top"
                priority={item.id === "oval"}
              />
            </motion.div>
          ))}
        </div>

        <div className="lg:col-span-7">
          <div className="min-h-[8rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={face.id}
                initial={reduced ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: EASE_EDITORIAL }}
              >
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-maroon">
                  Try {face.frame}
                </p>
                <h3 className="mt-2 font-serif text-4xl font-semibold text-maroon">
                  {face.name}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
                  {face.line}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div
            role="group"
            aria-label="Face shapes"
            className="mt-6 grid gap-2 sm:grid-cols-2"
          >
            {FACE_SHAPES.map((item, itemIndex) => {
              const selected = item.id === face.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setIndex(itemIndex)}
                  className={`flex items-center justify-between border px-4 py-3 text-left transition-colors ${
                    selected
                      ? "border-maroon bg-maroon text-ivory"
                      : "border-maroon/15 bg-ivory text-maroon hover:border-maroon/40"
                  }`}
                >
                  <span className="font-serif text-xl font-semibold">{item.name}</span>
                  <span
                    className={`text-[10px] font-medium uppercase tracking-[0.14em] ${
                      selected ? "text-ivory/75" : "text-muted"
                    }`}
                  >
                    {item.frame}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted">
            This is a starting point, not a rule. Nose bridge, temple length
            and the power in the lens decide the pair. Try it on at
            Virugambakkam, or send a front-facing photo on WhatsApp.
          </p>
          <a
            href={SITE.whatsappHrefWithTopic(
              `Hello Lenskarei Opticals, I have a ${face.name.toLowerCase()} face and would like help choosing ${face.frame.toLowerCase()} power glasses.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center bg-maroon px-6 py-3.5 text-sm font-medium tracking-wide text-ivory transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent"
          >
            Ask about {face.name.toLowerCase()} frames
          </a>
        </div>
      </div>
    </div>
  );
}
