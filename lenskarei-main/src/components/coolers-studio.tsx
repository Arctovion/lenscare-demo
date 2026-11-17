"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LOOKS } from "@/components/glasses";
import {
  AnimatePresence,
  EASE_EDITORIAL,
  motion,
  useReducedMotion,
} from "@/components/motion";
import { SITE } from "@/lib/site";

const ROTATE_MS = 4600;

export function CoolersStudio() {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const look = LOOKS[index];

  useEffect(() => {
    if (paused || reduced || document.hidden) return;
    const timer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % LOOKS.length);
    }, ROTATE_MS);
    return () => window.clearTimeout(timer);
  }, [index, paused, reduced]);

  return (
    <div>
      <div
        className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="lg:col-span-5">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-maroon">
            {look.kicker}
          </p>
          <div className="relative mt-3 min-h-[9.5rem] sm:min-h-[11rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={look.id}
                initial={reduced ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: EASE_EDITORIAL }}
              >
                <h2 className="font-serif text-4xl font-semibold leading-tight text-maroon sm:text-5xl">
                  {look.name}
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                  {look.line}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-maroon/70">
            {look.finish}
            {paused ? " · Held" : " · Playing"}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={SITE.whatsappHrefWithTopic(
                `Hello Lenskarei Opticals, I am interested in ${look.name} coolers in ${look.finish.toLowerCase()} at your Virugambakkam store.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-maroon px-6 py-3.5 text-sm font-medium tracking-wide text-ivory transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent"
            >
              Ask about {look.name}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-b border-maroon/40 py-2 text-sm font-medium text-maroon transition-colors hover:border-accent hover:text-accent"
            >
              Plan a store visit
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden bg-mist lg:col-span-7">
          {LOOKS.map((item) => (
            <motion.div
              key={item.id}
              className="absolute inset-0"
              animate={{
                opacity: item.id === look.id ? 1 : 0,
                scale: item.id === look.id ? 1 : 1.04,
              }}
              transition={{ duration: reduced ? 0 : 0.7, ease: EASE_EDITORIAL }}
            >
              <Image
                src={item.product}
                alt={
                  item.id === look.id
                    ? `${item.name} sunglasses in ${item.finish.toLowerCase()}`
                    : ""
                }
                fill
                priority={item.id === "square"}
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {LOOKS.map((item, itemIndex) => {
          const selected = item.id === look.id;
          return (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setIndex(itemIndex)}
              initial={reduced ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.55,
                delay: itemIndex * 0.06,
                ease: EASE_EDITORIAL,
              }}
              whileHover={reduced ? undefined : { y: -4 }}
              aria-pressed={selected}
              className={`group overflow-hidden border text-left transition-colors duration-300 ${
                selected
                  ? "border-maroon"
                  : "border-maroon/15 hover:border-maroon/50"
              }`}
            >
              <span className="relative block aspect-[4/3] overflow-hidden bg-mist">
                <Image
                  src={item.product}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 50vw, 16vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </span>
              <span className="flex items-center justify-between gap-2 px-3 py-2.5">
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
