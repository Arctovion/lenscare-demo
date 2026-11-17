"use client";

import { useReducedMotion } from "@/components/motion";
import { QUALITY_MARKS } from "@/lib/optics";

function Mark({ id }: { id: (typeof QUALITY_MARKS)[number]["id"] }) {
  const common = {
    viewBox: "0 0 48 48",
    className: "h-10 w-10 shrink-0 text-maroon",
    fill: "none",
    "aria-hidden": true as const,
  };

  if (id === "power") {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="42" height="42" stroke="currentColor" strokeWidth="1.4" />
        <path d="M14 32V16h8.5a6 6 0 0 1 0 12H14" stroke="currentColor" strokeWidth="1.6" />
        <path d="M27 20h8M31 16v16" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }
  if (id === "clarity") {
    return (
      <svg {...common}>
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="24" cy="24" r="7" stroke="currentColor" strokeWidth="1.6" />
        <path d="M24 6v5M24 37v5M6 24h5M37 24h5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }
  if (id === "fit") {
    return (
      <svg {...common}>
        <path d="M8 24c6-8 10-8 16 0s10 8 16 0" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16" cy="22" r="6" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="32" cy="22" r="6" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }
  if (id === "acetate") {
    return (
      <svg {...common}>
        <rect x="6" y="14" width="14" height="12" stroke="currentColor" strokeWidth="2.2" />
        <rect x="28" y="14" width="14" height="12" stroke="currentColor" strokeWidth="2.2" />
        <path d="M20 20h8" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }
  if (id === "metal") {
    return (
      <svg {...common}>
        <circle cx="16" cy="22" r="8" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="32" cy="22" r="8" stroke="currentColor" strokeWidth="1.2" />
        <path d="M24 22h0.1M8 22H4M44 22h-4" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    );
  }
  if (id === "coolers") {
    return (
      <svg {...common}>
        <path d="M24 8v6M12 14l-4-4M36 14l4-4" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 26c4-7 8-7 14 0s10 7 14 0" stroke="currentColor" strokeWidth="1.6" />
        <path d="M14 24h8M26 24h8" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }
  if (id === "balance") {
    return (
      <svg {...common}>
        <path d="M24 10v22M10 18h28" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 18l-4 10h8l-4-10M38 18l-4 10h8l-4-10" stroke="currentColor" strokeWidth="1.4" />
        <path d="M16 38h16" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M24 8l4 10h10l-8 6 3 10-9-6-9 6 3-10-8-6h10l4-10z" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function Logo({
  mark,
}: {
  mark: (typeof QUALITY_MARKS)[number];
}) {
  return (
    <span className="flex items-center gap-3 px-7 py-4">
      <Mark id={mark.id} />
      <span>
        <span className="block font-serif text-2xl font-semibold leading-none text-maroon">
          {mark.name}
        </span>
        <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
          {mark.detail}
        </span>
      </span>
    </span>
  );
}

export function BrandRail() {
  const reduced = useReducedMotion();
  const loop = reduced ? QUALITY_MARKS : [...QUALITY_MARKS, ...QUALITY_MARKS];

  return (
    <section
      aria-label="Brands and quality"
      className="brand-rail border-y border-maroon/12 bg-ivory"
    >
      <div
        className={
          reduced
            ? "mx-auto flex max-w-7xl flex-wrap justify-center"
            : "brand-track flex w-max"
        }
      >
        {loop.map((mark, index) => (
          <Logo key={`${mark.id}-${index}`} mark={mark} />
        ))}
      </div>
    </section>
  );
}
