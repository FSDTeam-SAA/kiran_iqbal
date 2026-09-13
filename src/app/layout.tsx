import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";
import "./globals.css";
import Navbar from "@/components/sheard/Navbar";
import Footer from "@/components/sheard/Footer";
import WhatsAppButton from "@/components/sheard/WhatsAppButton";
import FloatingCallButton from "@/components/sheard/FloatingCallButton";
import SiteMotion from "@/components/sheard/SiteMotion";
import SmoothScroll from "@/components/sheard/SmoothScroll";
import { QuoteModalProvider } from "@/components/sheard/QuoteModal";
import { JsonLd, organizationSchema } from "@/components/seo/JsonLd";
import { business } from "@/lib/business";
import { siteUrl } from "@/lib/seo";

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
  metadataBase: siteUrl,
  title: {
    default: "Quality Used Engines & Transmissions | A&R Auto Parts",
    template: "%s | A&R Auto Parts",
  },
  description: business.description,
  applicationName: business.name,
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TPH8JSHV');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className={`${barlowCondensed.variable} ${inter.variable}`}>
        <Toaster position="top-right" richColors closeButton />
        <JsonLd data={organizationSchema} />
        <QuoteModalProvider>
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
            <FloatingCallButton />
            <WhatsAppButton />
            <SiteMotion />
          </SmoothScroll>
        </QuoteModalProvider>
      </body>
    </html>
  );
}
