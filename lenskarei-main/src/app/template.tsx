"use client";

import type { ReactNode } from "react";
import { EASE_EDITORIAL, motion, useReducedMotion } from "@/components/motion";

export default function Template({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE_EDITORIAL }}
    >
      {children}
    </motion.div>
  );
}
