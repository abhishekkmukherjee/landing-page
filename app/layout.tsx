import "./globals.css";
import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  title: "ScaleX Growth Systems | Performance Marketing for Educators",
  description:
    "ScaleX Growth Systems helps coaches, creators, and ed-tech brands grow revenue with paid media, high-converting funnels, and lifecycle systems built for measurable ROI.",
  metadataBase: new URL("https://www.scalexgrowth.com"),
  openGraph: {
    title: "ScaleX Growth Systems",
    description:
      "Performance marketing for coaches, creators, and ed-tech brands. Paid media, funnels, and growth systems with measurable ROI.",
    url: "https://www.scalexgrowth.com",
    siteName: "ScaleX Growth Systems",
    images: [
      {
        url: "/images/og-scalex.webp",
        width: 1200,
        height: 630,
        alt: "ScaleX Growth Systems"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "ScaleX Growth Systems",
    description:
      "Performance marketing for coaches, creators, and ed-tech brands. Paid media, funnels, and growth systems with measurable ROI.",
    images: ["/images/og-scalex.webp"]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" className={`${sora.variable} ${manrope.variable}`} suppressHydrationWarning>
      <body className="overflow-x-hidden">
        <div aria-hidden className="fireflies" />
        {children}
      </body>
    </html>
  );
}
