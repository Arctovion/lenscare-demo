import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Suspense } from "react";
import { FloatActions } from "@/components/float-actions";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lenskarei Opticals | Optical Store in Virugambakkam Chennai",
    template: "%s | Lenskarei Opticals Chennai",
  },
  description:
    "Power glasses and coolers at Lenskarei Opticals, Virugambakkam, Chennai 600092. Call or WhatsApp 9884468233 for product enquiries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} antialiased`}
    >
      <body className="flex min-h-svh flex-col bg-ivory text-charcoal">
        <Suspense
          fallback={
            <div className="h-20 border-b border-maroon/12 bg-ivory/92" />
          }
        >
          <Header />
        </Suspense>
        <div className="flex-1">{children}</div>
        <Footer />
        <FloatActions />
      </body>
    </html>
  );
}
