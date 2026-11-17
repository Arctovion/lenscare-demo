"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  EASE_EDITORIAL,
  motion,
  useReducedMotion,
} from "@/components/motion";
import { POWER_LOOKS } from "@/lib/optics";
import { SITE } from "@/lib/site";

const ROTATE_MS = 4600;

export function PowerStudio() {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const look = POWER_LOOKS[index];

  useEffect(() => {
    if (paused || reduced || document.hidden) return;
    const timer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % POWER_LOOKS.length);
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
        <div className="relative aspect-[16/10] overflow-hidden bg-mist lg:col-span-7">
          {POWER_LOOKS.map((item) => (
            <motion.div
              key={item.id}
              className="absolute inset-0"
              animate={{ opacity: item.id === look.id ? 1 : 0 }}
              transition={{ duration: reduced ? 0 : 0.7, ease: EASE_EDITORIAL }}
            >
              <Image
                src={item.image}
                alt={
                  item.id === look.id
                    ? `Clear ${item.name.toLowerCase()} prescription glasses`
                    : ""
                }
                fill
                priority={item.id === "square"}
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-[70%_center]"
              />
            </motion.div>
          ))}
        </div>

        <div className="lg:col-span-5">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-maroon">
            {look.kicker}
          </p>
          <div className="relative mt-3 min-h-[8.5rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={look.id}
                initial={reduced ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: EASE_EDITORIAL }}
              >
                <h2 className="font-serif text-4xl font-semibold text-maroon sm:text-5xl">
                  {look.name}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {look.line}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-maroon/70">
            {look.finish} · clear lens
            {paused ? " · Held" : " · Playing"}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={SITE.whatsappHrefWithTopic(
                `Hello Lenskarei Opticals, I would like to ask about ${look.name.toLowerCase()} power glasses at your Virugambakkam store.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-maroon px-6 py-3.5 text-sm font-medium tracking-wide text-ivory transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent"
            >
              Ask about this power frame
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-b border-maroon/40 py-2 text-sm font-medium text-maroon"
            >
              Plan a store visit
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {POWER_LOOKS.map((item, itemIndex) => {
          const selected = item.id === look.id;
          return (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setIndex(itemIndex)}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: itemIndex * 0.06, ease: EASE_EDITORIAL }}
              whileHover={reduced ? undefined : { y: -4 }}
              aria-pressed={selected}
              className={`group overflow-hidden border text-left ${
                selected ? "border-maroon" : "border-maroon/15 hover:border-maroon/45"
              }`}
            >
              <span className="relative block aspect-[4/3] overflow-hidden bg-mist">
                <Image
                  src={item.product}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 30vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </span>
              <span className="flex items-center justify-between px-3 py-2.5">
                <span className="font-serif text-lg font-semibold text-maroon">
                  {item.name}
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
                  {item.finish}
                </span>
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
