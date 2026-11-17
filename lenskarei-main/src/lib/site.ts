export const SITE = {
  name: "Lenskarei Opticals",
  brandWordmark: "LENSKAREi",
  tagline: "Optical Store · Virugambakkam, Chennai",
  phoneDisplay: "+91 98844 68233",
  phoneRaw: "9884468233",
  telHref: "tel:+919884468233",
  whatsappHref:
    "https://wa.me/919884468233?text=Hello%20Lenskarei%20Opticals%2C%20I%20would%20like%20to%20enquire%20about%20coolers%20and%20sunglasses%20at%20your%20Virugambakkam%20store.",
  whatsappHrefWithTopic: (topic: string) =>
    `https://wa.me/919884468233?text=${encodeURIComponent(topic)}`,
  email: "Lenskare2024@gmail.com",
  mailtoHref: "mailto:Lenskare2024@gmail.com",
  address: {
    line1: "No. 83, Kaliamman Koil Street",
    locality: "Virugambakkam, Chennai – 600092",
    full: "No. 83, Kaliamman Koil Street, Virugambakkam, Chennai – 600092",
  },
  // Dummy placeholders — easy to swap when confirmed by client
  hours: {
    regular: "Mon – Sat: 10:00 AM – 9:00 PM",
    sunday: "Sun: 10:30 AM – 8:30 PM",
    note: "Timings are indicative — please call or WhatsApp 98844 68233 to confirm before visiting.",
  },
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=No.+83+Kaliamman+Koil+Street+Virugambakkam+Chennai+600092",
  socials: [
    { label: "Instagram", href: "https://instagram.com", placeholder: true },
    { label: "Facebook", href: "https://facebook.com", placeholder: true },
    { label: "Google Business", href: "https://maps.google.com", placeholder: true },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "Power Optics", href: "/power" },
    { label: "Coolers", href: "/coolers" },
    { label: "Eyewear Guide", href: "/eyewear-guide" },
    { label: "About Us", href: "/about" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact Us", href: "/contact" },
  ],
} as const;
