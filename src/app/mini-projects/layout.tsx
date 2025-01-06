import type { Metadata } from "next";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react"
import Navbar from "@/components/ui/global/navbar";

export const metadata: Metadata = {
  title: "Mini Projects",
  description: "MiniCraft is my personal portfolio platform designed to showcase my collection of mini projects. It serves as a digital space where I can organize, display, and reflect on the creative journey of my development work.",
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
