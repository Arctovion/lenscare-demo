"use client";

import { EASE_EDITORIAL, motion, useReducedMotion } from "@/components/motion";
import { SITE } from "@/lib/site";

export function FloatActions() {
  const reduced = useReducedMotion();

  return (
    <div
      aria-label="Quick contact"
      className="fixed right-4 bottom-[max(1.15rem,env(safe-area-inset-bottom))] z-40 flex flex-col items-end gap-3 print:hidden sm:right-7 sm:bottom-7"
    >
      <motion.a
        href={SITE.telHref}
        aria-label={`Call Lenskarei Opticals at ${SITE.phoneDisplay}`}
        initial={reduced ? false : { opacity: 0, x: 18, y: 8 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.55, delay: 0.85, ease: EASE_EDITORIAL }}
        whileHover={reduced ? undefined : { y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-maroon text-ivory shadow-[0_16px_40px_-14px_rgba(25,3,8,0.7)] transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ivory sm:h-auto sm:w-auto sm:justify-start sm:gap-2.5 sm:py-3 sm:pr-5 sm:pl-3.5 sm:text-sm sm:font-medium"
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-ivory/12">
          <PhoneIcon />
        </span>
        <span className="hidden sm:inline">Call</span>
      </motion.a>

      <motion.a
        href={SITE.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Lenskarei Opticals on WhatsApp"
        initial={reduced ? false : { opacity: 0, x: 18, y: 8 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.55, delay: 0.98, ease: EASE_EDITORIAL }}
        whileHover={reduced ? undefined : { y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#128C7E] text-ivory shadow-[0_16px_40px_-14px_rgba(18,140,126,0.75)] transition-colors hover:bg-[#0e7468] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ivory sm:h-auto sm:w-auto sm:justify-start sm:gap-2.5 sm:py-3 sm:pr-5 sm:pl-3.5 sm:text-sm sm:font-medium"
      >
        <span className="relative grid h-8 w-8 place-items-center">
          {!reduced ? (
            <span
              aria-hidden="true"
              className="float-ring absolute inset-0 rounded-full bg-[#7dffe8]"
            />
          ) : null}
          <span className="relative grid h-8 w-8 place-items-center rounded-full bg-white/15">
            <WhatsAppIcon />
          </span>
        </span>
        <span className="hidden sm:inline">WhatsApp</span>
      </motion.a>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.2 3.8h2.1l1.1 2.8-1.5 1a11.2 11.2 0 0 0 5.5 5.5l1-1.5 2.8 1.1v2.1a1.4 1.4 0 0 1-1.5 1.4A14.6 14.6 0 0 1 4.3 6.8a1.4 1.4 0 0 1 1.4-1.5l2.5-1.5Z"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M12.04 3.2A8.7 8.7 0 0 0 4.5 16.7L3.6 20.4l3.8-.9a8.7 8.7 0 0 0 4.64 1.3 8.76 8.76 0 0 0 0-17.5Zm0 15.9a7.2 7.2 0 0 1-3.66-1l-.26-.15-2.25.6.6-2.2-.17-.28a7.16 7.16 0 1 1 5.74 3.03Zm3.94-5.36c-.22-.11-1.28-.63-1.48-.7-.2-.08-.34-.11-.48.11-.14.22-.55.7-.68.84-.12.14-.25.16-.47.05-.22-.11-.92-.34-1.75-1.08a6.6 6.6 0 0 1-1.21-1.5c-.13-.22 0-.33.1-.44.1-.1.22-.25.33-.38.11-.12.14-.22.22-.36.07-.14.04-.27-.02-.38-.06-.11-.48-1.16-.66-1.59-.17-.41-.35-.36-.48-.36h-.41c-.14 0-.36.05-.55.27-.19.22-.72.7-.72 1.71s.74 1.98.84 2.12c.1.14 1.46 2.23 3.54 3.13.5.21.88.34 1.18.43.5.16.95.14 1.3.08.4-.06 1.28-.52 1.46-1.03.18-.5.18-.94.13-1.03-.05-.08-.2-.13-.42-.24Z" />
    </svg>
  );
}
