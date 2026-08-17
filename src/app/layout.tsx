import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sheard/Navbar";
import Footer from "@/components/sheard/Footer";
import WhatsAppButton from "@/components/sheard/WhatsAppButton";
import SiteMotion from "@/components/sheard/SiteMotion";
import SmoothScroll from "@/components/sheard/SmoothScroll";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kiran Iqbal — Independent Designer",
  description: "A considered digital portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${barlowCondensed.variable} ${inter.variable}`}>
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
          <SiteMotion />
        </SmoothScroll>
      </body>
    </html>
  );
}
