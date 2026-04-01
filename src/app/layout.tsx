import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elmar Haneveld — Design System Specialist & Art Director",
  description:
    "Independent design thinker bridging technology and people. 20+ years of experience in design systems, art direction, and UI/UX design.",
  openGraph: {
    title: "Elmar Haneveld — Designdenker",
    description:
      "Design System Specialist & Art Director. Working with brands like Polestar, TomTom, Air France KLM, and more.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-white text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
