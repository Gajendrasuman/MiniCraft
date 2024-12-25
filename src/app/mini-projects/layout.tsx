import type { Metadata } from "next";
import "@/styles/globals.css";
import { StoreProvider } from "@/store/StoreProvider";

export const metadata: Metadata = {
  title: "Mini Projects",
  description: "MiniCraft is my personal portfolio platform designed to showcase my collection of mini projects. It serves as a digital space where I can organize, display, and reflect on the creative journey of my development work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`antialiased`}>
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
