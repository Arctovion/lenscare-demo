"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LOOKS } from "@/components/glasses";
import { AnimatePresence, EASE_EDITORIAL, motion, useReducedMotion } from "@/components/motion";
import { POWER_LOOKS } from "@/lib/optics";
import { SITE } from "@/lib/site";

const ROTATE_MS = 4800;
const HOLD_MS = 9000;

export function HeroShowcase() {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [held, setHeld] = useState(false);
  const [manualPause, setManualPause] = useState(false);
  const [mode, setMode] = useState<"coolers" | "power">("power");

  const catalog = mode === "power" ? POWER_LOOKS : LOOKS;
  const look = catalog[index] ?? catalog[0];
  const running = !reduced && !hovering && !hidden && !held && !manualPause;

  useEffect(() => {
    const onVisibility = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    if (!held) return;
    const timer = window.setTimeout(() => setHeld(false), HOLD_MS);
    return () => window.clearTimeout(timer);
  }, [held, index]);

  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % catalog.length);
    }, ROTATE_MS);
    return () => window.clearTimeout(timer);
  }, [running, index, catalog.length]);

  const selectLook = (next: number) => {
    setIndex(next);
    setHeld(true);
  };

  return (
    <section className="relative isolate flex min-h-[calc(100svh-5rem)] items-end bg-[#1b040a] text-ivory sm:items-center">
      <motion.div
        className="absolute inset-0 -z-10 overflow-hidden"
        initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3, ease: EASE_EDITORIAL }}
      >
        <motion.div
          className="absolute inset-0"
          animate={reduced ? undefined : { scale: [1, 1.045] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          {catalog.map((item) => (
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
                    ? `The same man wearing clear ${item.name.toLowerCase()} ${mode === "power" ? "prescription glasses" : "sunglasses"}`
                    : ""
                }
                fill
                priority={item.id === "square" || item.id === look.id}
                sizes="100vw"
                className="object-cover object-[72%_18%] sm:object-[72%_center]"
              />
            </motion.div>
          ))}
        </motion.div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#190308]/88 via-[#24050d]/35 to-[#190308]/10 sm:bg-gradient-to-r sm:from-[#190308]/92 sm:via-[#24050d]/45 sm:to-transparent"
        />
        <AnimatePresence>
          <motion.div
            key={look.id}
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 22% 72%, ${look.lens[0]}46, transparent 34%)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          />
        </AnimatePresence>
      </motion.div>

      <div className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 sm:py-16 lg:px-12">
        <div className="max-w-xl">
            <motion.p
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: EASE_EDITORIAL }}
              className="font-serif text-5xl font-semibold tracking-[0.06em] text-ivory sm:text-6xl lg:text-7xl"
            >
              LENSKARE<span className="lowercase text-[#ff4d5e]">i</span>
            </motion.p>

            <motion.h1
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.14, ease: EASE_EDITORIAL }}
              className="mt-4 font-serif text-2xl font-medium leading-snug text-ivory/92 sm:text-4xl"
            >
              Find eyewear that fits your everyday.
            </motion.h1>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.24, ease: EASE_EDITORIAL }}
              className="mt-4 min-h-[4.25rem] sm:mt-5 sm:min-h-[4.75rem]"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={look.id}
                  initial={reduced ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? { opacity: 1 } : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.38, ease: EASE_EDITORIAL }}
                  className="max-w-xl text-base leading-relaxed text-ivory/85 sm:text-lg"
                >
                  <span className="font-medium text-ivory">{look.name}.</span>{" "}
                  {look.line}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            <motion.p
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.32, ease: EASE_EDITORIAL }}
              className="mt-4 max-w-xl text-sm leading-relaxed text-ivory/70 sm:text-base"
            >
              {mode === "power"
                ? "Power glasses with a clear lens, at our optical store in Virugambakkam. The frame on him changes live — then we match the number in the lens."
                : "Coolers and sunglasses at the same store. The silhouette on him changes live — ask about the shape, then try the fit in person."}
            </motion.p>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.4, ease: EASE_EDITORIAL }}
              className="mt-5 flex flex-wrap items-center gap-4 sm:mt-7"
            >
              <Link
                href={mode === "power" ? "/power" : "/coolers"}
                className="inline-flex items-center justify-center bg-accent px-7 py-3.5 text-sm font-medium tracking-wide text-ivory transition-all duration-200 hover:-translate-y-0.5 hover:bg-ivory hover:text-maroon"
              >
                {mode === "power" ? "Explore power optics" : "Explore coolers"}
              </Link>
              <a
                href={SITE.whatsappHrefWithTopic(
                  mode === "power"
                    ? `Hello Lenskarei Opticals, I would like to see ${look.name} power glasses at your Virugambakkam store.`
                    : `Hello Lenskarei Opticals, I would like to see ${look.name} coolers at your Virugambakkam store.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-ivory/45 bg-ivory/8 px-7 py-3.5 text-sm font-medium tracking-wide text-ivory backdrop-blur-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-ivory hover:bg-ivory/18"
              >
                Ask about {look.name}
              </a>
            </motion.div>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.48, ease: EASE_EDITORIAL }}
              className="mt-5 max-sm:pr-16 sm:mt-8"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              onFocus={() => setHovering(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setHovering(false);
                }
              }}
            >
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <div className="flex border border-ivory/25">
                  {(["power", "coolers"] as const).map((item) => (
                    <button
                      key={item}
                      type="button"
                      aria-pressed={mode === item}
                      onClick={() => {
                        setMode(item);
                        setIndex(0);
                        setHeld(true);
                      }}
                      className={`px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] ${
                        mode === item ? "bg-ivory text-maroon" : "text-ivory/75"
                      }`}
                    >
                      {item === "power" ? "Power optics" : "Coolers"}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ivory/60">
                  {running ? "Live on him" : "Style held"}
                </p>
                <button
                  type="button"
                  onClick={() => setManualPause((value) => !value)}
                  aria-pressed={manualPause}
                  className="text-[11px] font-medium uppercase tracking-[0.16em] text-ivory/80 underline decoration-ivory/30 underline-offset-4 transition-colors hover:text-ivory"
                >
                  {manualPause ? "Play styles" : "Pause"}
                </button>
              </div>
              <div role="group" aria-label="Glasses styles worn in the hero" className="flex flex-wrap gap-2">
                {catalog.map((item, itemIndex) => {
                  const active = item.id === look.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={active}
                      onClick={() => selectLook(itemIndex)}
                      className={`relative overflow-hidden px-3 py-2 text-xs font-medium tracking-wide transition-colors ${
                        active
                          ? "bg-ivory text-maroon"
                          : "bg-ivory/10 text-ivory/80 hover:bg-ivory/18 hover:text-ivory"
                      }`}
                    >
                      {item.name}
                      {active && running ? (
                        <motion.span
                          key={`${item.id}-${index}`}
                          aria-hidden="true"
                          className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-accent"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: ROTATE_MS / 1000, ease: "linear" }}
                        />
                      ) : null}
                    </button>
                  );
                })}
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
