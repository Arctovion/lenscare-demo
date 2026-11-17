export const POWER_LOOKS = [
  {
    id: "square",
    name: "Square",
    kicker: "Everyday power",
    line: "A clear square rim for distance or near. The lens stays open and the corners stay decided.",
    finish: "Acetate",
    lens: ["#8d3048", "#3a1020"],
    image: "/images/power/square.jpg",
    product: "/images/power/product-square.jpg",
  },
  {
    id: "round",
    name: "Round",
    kicker: "Light on the nose",
    line: "Fine metal circles with a clear lens. Easy for a full day of reading or distance.",
    finish: "Metal",
    lens: ["#e0b15a", "#7a5420"],
    image: "/images/power/round.jpg",
    product: "/images/power/product-round.jpg",
  },
  {
    id: "rectangle",
    name: "Rectangle",
    kicker: "Wide and quiet",
    line: "A lower, wider clear lens. Useful when you want the frame to stay out of the way.",
    finish: "Metal",
    lens: ["#9a96a2", "#2a2830"],
    image: "/images/power/rectangle.jpg",
    product: "/images/power/product-reading.jpg",
  },
] as const;

export const LENS_PATHS = [
  {
    title: "Distance",
    detail:
      "One power across the lens for far sight. Bring a written prescription, or ask us what an eye check at the store involves before you decide.",
  },
  {
    title: "Near and reading",
    detail:
      "A closer power for books, phones and the counter. We compare it with a pair you already find comfortable.",
  },
  {
    title: "One pair for both",
    detail:
      "Some lenses carry distance above and near below. The design changes by lens, so we confirm the exact pair you are holding.",
  },
] as const;

export const FACE_SHAPES = [
  {
    id: "oval",
    name: "Oval",
    frame: "Soft rectangle",
    line: "Forehead and chin sit in balance. Most rims work. A soft rectangle keeps that proportion without shouting.",
    image: "/images/faces/oval.jpg",
  },
  {
    id: "round",
    name: "Round",
    frame: "Rectangle",
    line: "A softer jaw likes a straighter rim. A rectangle adds width at the brow and a little structure.",
    image: "/images/faces/round.jpg",
  },
  {
    id: "square",
    name: "Square",
    frame: "Round metal",
    line: "A stronger jaw softens with a curve. Thin round metal takes the edge off the corners.",
    image: "/images/faces/square.jpg",
  },
  {
    id: "heart",
    name: "Heart",
    frame: "Light cat-eye",
    line: "Wider at the brow, narrower at the chin. A light upswept rim follows the forehead and stays fine below.",
    image: "/images/faces/heart.jpg",
  },
  {
    id: "oblong",
    name: "Oblong",
    frame: "Deeper square",
    line: "A longer face wants height in the lens. A deeper square lifts the eye line instead of stretching it.",
    image: "/images/faces/oblong.jpg",
  },
] as const;

export const QUALITY_MARKS = [
  { id: "power", name: "Power", detail: "The number in the lens" },
  { id: "clarity", name: "Clarity", detail: "Coat confirmed on the pair" },
  { id: "fit", name: "Fit", detail: "Bridge and temples on you" },
  { id: "acetate", name: "Acetate", detail: "Colour that holds" },
  { id: "metal", name: "Metal", detail: "A finer bridge" },
  { id: "coolers", name: "Coolers", detail: "Sun, checked per pair" },
  { id: "balance", name: "Balance", detail: "Even on both sides" },
  { id: "care", name: "Care", detail: "A tighten after you leave" },
] as const;
