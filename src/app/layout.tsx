import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { meta } from "@/SEO";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = meta

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${outfit.className} bg-secundary text-grayMain min-h-dvh bg-gradient-to-b from-transparent to-[#8e3bf418]`}>{children}</body>
    </html>
  );
}
