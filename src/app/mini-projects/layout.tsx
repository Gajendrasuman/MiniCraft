import type { Metadata } from "next";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react"
import Navbar from "@/components/ui/global/navbar";

export const metadata: Metadata = {
  title: "MiniCraft | Mini Projects",
  description: "MiniCraft is a curated gallery of creative mini projects that inspire and amaze. Explore the possibilities of innovation.",
  keywords: "MiniCraft, mini projects, creative showcase, project gallery, tech innovation, portfolio platform",
  authors: [{ name: "Gajender", url: "https://www.minicraft.com/" }],
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "MiniCraft",
    description: "Discover inspiring mini projects crafted to showcase innovation and creativity. Explore now on MiniCraft!",
    url: "https://www.minicraft.com/",
    images: [
      {
        url: "/assets/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "MiniCraft Project Gallery",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "MiniCraft - Showcase Your Creativity",
    description: "Explore an inspiring collection of mini projects that highlight creativity and innovation. Dive in on MiniCraft!",
    images: ["/assets/images/og-image.png"],
  },
  icons: {
    icon: "/assets/logo/logo.png"
  }
};

export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className="bg-bg">
        <Analytics />
        <Navbar />
        <div className="h-[76px]"></div>
          {children}
        </body>
      </html>
  );
}
