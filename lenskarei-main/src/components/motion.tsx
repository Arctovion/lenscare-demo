"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import type { ReactNode } from "react";

const EASE_EDITORIAL = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "children">;

export function Reveal({
  children,
  delay = 0,
  y = 22,
  className,
  ...rest
}: RevealProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.72, delay, ease: EASE_EDITORIAL }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function HeroMediaMotion({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 1 } : { opacity: 0.85, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.35, ease: EASE_EDITORIAL }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HeroCopyItem({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.78, delay, ease: EASE_EDITORIAL }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ImageFrameReveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={
        prefersReduced
          ? { opacity: 1 }
          : { opacity: 0, clipPath: "inset(6% 0% 6% 0%)" }
      }
      whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: EASE_EDITORIAL }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export { AnimatePresence, motion, useReducedMotion, EASE_EDITORIAL };
