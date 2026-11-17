export const LOOKS = [
  {
    id: "square",
    name: "Square",
    kicker: "Structured everyday",
    line: "Balanced corners and a steady brow line — a frame that looks decided, not loud.",
    lens: ["#8d3048", "#3a1020"],
    metal: false,
    finish: "Acetate",
    image: "/images/looks/square.jpg",
    product: "/images/coolers/square.jpg",
  },
  {
    id: "aviator",
    name: "Aviator",
    kicker: "Open sky",
    line: "A teardrop lens and double bridge. Light on the nose, generous across the face.",
    lens: ["#e0b15a", "#7a5420"],
    metal: true,
    finish: "Metal",
    image: "/images/looks/aviator.jpg",
    product: "/images/coolers/aviator.jpg",
  },
  {
    id: "round",
    name: "Round",
    kicker: "Quiet classic",
    line: "Circular rims that soften the brow and stay timeless in acetate or fine metal.",
    lens: ["#8fafa4", "#243833"],
    metal: true,
    finish: "Metal",
    image: "/images/looks/round.jpg",
    product: "/images/coolers/round.jpg",
  },
  {
    id: "cateye",
    name: "Cat-eye",
    kicker: "Lifted line",
    line: "Outer corners rise toward the brow — a sharper finish when the day asks for it.",
    lens: ["#e07a88", "#6a2434"],
    metal: false,
    finish: "Acetate",
    image: "/images/looks/cateye.jpg",
    product: "/images/coolers/cateye.jpg",
  },
  {
    id: "rectangle",
    name: "Rectangle",
    kicker: "Low and wide",
    line: "A longer lens with a lower profile. Easy from a morning commute to late light.",
    lens: ["#9a96a2", "#2a2830"],
    metal: false,
    finish: "Acetate",
    image: "/images/looks/rectangle.jpg",
    product: "/images/coolers/rectangle.jpg",
  },
  {
    id: "geometric",
    name: "Geometric",
    kicker: "Cut with intent",
    line: "Faceted rims for someone who wants the frame itself to be the detail.",
    lens: ["#7ea4c0", "#1a3040"],
    metal: true,
    finish: "Metal",
    image: "/images/looks/geometric.jpg",
    product: "/images/coolers/geometric.jpg",
  },
] as const;

export type GlassesId = (typeof LOOKS)[number]["id"];

type GlyphProps = {
  type: GlassesId;
  uid: string;
  className?: string;
  tone?: "onDark" | "onLight";
};

function octagon(cx: number, cy: number, r: number) {
  return Array.from({ length: 8 }, (_, index) => {
    const angle = -Math.PI / 8 + (index * Math.PI) / 4;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
}

export function GlassesGlyph({
  type,
  uid,
  className,
  tone = "onDark",
}: GlyphProps) {
  const look = LOOKS.find((item) => item.id === type) ?? LOOKS[0];
  const gradId = `lens-${uid}-${type}`;
  const lensOpacity = tone === "onLight" ? 0.5 : 0.92;
  const lensEnd = tone === "onLight" ? 0.28 : 0.62;

  return (
    <svg
      viewBox="0 0 360 150"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="18%" y1="0%" x2="82%" y2="100%">
          <stop offset="0%" stopColor={look.lens[0]} stopOpacity={lensOpacity} />
          <stop offset="100%" stopColor={look.lens[1]} stopOpacity={lensEnd} />
        </linearGradient>
      </defs>
      <Frames type={type} gradId={gradId} metal={look.metal} />
    </svg>
  );
}

function Frames({
  type,
  gradId,
  metal,
}: {
  type: GlassesId;
  gradId: string;
  metal: boolean;
}) {
  const lens = `url(#${gradId})`;
  const stroke = "currentColor";

  if (type === "round") {
    return (
      <g stroke={stroke} strokeWidth="3.4" strokeLinecap="round">
        <circle cx="108" cy="78" r="46" fill={lens} />
        <circle cx="252" cy="78" r="46" fill={lens} />
        <path d="M154 74h52" />
        <path d="M154 88c16 10 36 10 52 0" />
        <path d="M62 70 18 58M298 70l44-12" />
        <circle cx="62" cy="70" r="2.2" fill="currentColor" stroke="none" />
        <circle cx="298" cy="70" r="2.2" fill="currentColor" stroke="none" />
      </g>
    );
  }

  if (type === "aviator") {
    return (
      <g stroke={stroke} strokeWidth="3.2" strokeLinejoin="round" strokeLinecap="round">
        <path
          d="M62 56c34-18 78-12 92 22 8 36-18 62-58 54-36-8-48-46-34-76Z"
          fill={lens}
        />
        <path
          d="M298 56c-34-18-78-12-92 22-8 36 18 62 58 54 36-8 48-46 34-76Z"
          fill={lens}
        />
        <path d="M154 70h52M154 86c18 14 34 14 52 0" />
        <path d="M70 58c22-10 48-12 70-4M290 58c-22-10-48-12-70-4" />
        <path d="M58 64 18 52M302 64l40-12" />
      </g>
    );
  }

  if (type === "cateye") {
    return (
      <g stroke={stroke} strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round">
        <path
          d="M156 66c6 22-4 46-42 52-40 6-70-12-74-38-4-28 22-46 58-40 28 5 50 12 58 26Z"
          fill={lens}
        />
        <path
          d="M204 66c-6 22 4 46 42 52 40 6 70-12 74-38 4-28-22-46-58-40-28 5-50 12-58 26Z"
          fill={lens}
        />
        <path d="M156 78h48" strokeWidth="5" />
        <path d="M40 62 16 50M320 62l24-12" />
      </g>
    );
  }

  if (type === "rectangle") {
    return (
      <g stroke={stroke} strokeWidth="3.4" strokeLinejoin="round">
        <rect x="28" y="56" width="130" height="54" rx="8" fill={lens} />
        <rect x="202" y="56" width="130" height="54" rx="8" fill={lens} />
        <path d="M158 82h44" stroke={stroke} strokeWidth="5" strokeLinecap="round" />
        <path d="M28 72 10 62M332 72l18-10" stroke={stroke} strokeWidth="3.2" strokeLinecap="round" />
      </g>
    );
  }

  if (type === "geometric") {
    return (
      <g stroke={stroke} strokeWidth="3.3" strokeLinejoin="round" strokeLinecap="round">
        <polygon points={octagon(104, 78, 50)} fill={lens} />
        <polygon points={octagon(256, 78, 50)} fill={lens} />
        <path d="M154 74h52" />
        <path d="M158 90c14 10 30 10 44 0" />
        <path d="M58 68 20 56M302 68l38-12" />
      </g>
    );
  }

  return (
    <g stroke={stroke} strokeWidth="3.5" strokeLinejoin="round">
      <rect x="40" y="40" width="112" height="80" rx="12" fill={lens} />
      <rect x="208" y="40" width="112" height="80" rx="12" fill={lens} />
      <path
        d="M152 78h56"
        stroke={stroke}
        strokeWidth={metal ? 3 : 5.5}
        strokeLinecap="round"
      />
      <path d="M40 62 12 50M320 62l28-12" stroke={stroke} strokeWidth="3.2" strokeLinecap="round" />
    </g>
  );
}
