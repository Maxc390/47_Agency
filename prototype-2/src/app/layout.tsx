import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import { ViewTransitions } from "next-view-transitions";

import { getSettings, asImageSrc } from "@/lib/content";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

const gambarino = localFont({
  src: "./gambarino.woff2",
  display: "swap",
  variable: "--font-gambarino",
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();

  return {
    title: settings.site_title || "TechX KE - Digital Agency",
    description:
      settings.meta_description ||
      "Building Web Products & Designs That Matter. TechX KE is a digital agency specializing in modern web applications, automation, and creative design.",
    openGraph: {
      images: settings.fallback_og_image && asImageSrc(settings.fallback_og_image)
        ? [settings.fallback_og_image.url]
        : ["/cote-royale-og-image.png"],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSettings();

  return (
    <ViewTransitions>
      <html
        lang="en"
        className={`${raleway.variable} ${gambarino.variable} antialiased`}
      >
        <body className="bg-neutral-900 text-white">
          <NavBar settings={settings} />
          <main className="pt-14 md:pt-16">{children}</main>
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
