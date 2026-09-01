import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sodirbek & Umidaxon — Wedding Invitation",
  description: "Sodirbek va Umidaxonning baxtli kuniga taklifnoma. 08 · 11 · 2026",
  openGraph: {
    title: "Sodirbek & Umidaxon — Wedding Invitation",
    description: "Sodirbek va Umidaxonning baxtli kuniga taklifnoma. 08 · 11 · 2026",
    url: "https://wedding.example.com",
    siteName: "Sodirbek & Umidaxon Wedding",
    images: [
      {
        url: "/images/wedding-hero.png",
        width: 1200,
        height: 630,
        alt: "Sodirbek & Umidaxon",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${inter.variable} font-sans antialiased bg-wedding-bg text-wedding-dark selection:bg-wedding-accent/30 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
