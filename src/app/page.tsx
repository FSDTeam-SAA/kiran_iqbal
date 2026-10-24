import QuoteFocusedHome from "@/features/Home/components/QuoteFocusedHome";
import FAQ from "@/features/Home/components/FAQ";
import FinalCTA from "@/features/Home/components/FinalCTA";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { JsonLd, faqSchema } from "@/components/seo/JsonLd";
import { faqData } from "@/Content/data";
import Banner from "@/features/Home/components/Banner";
import HowItWorks from "@/features/Home/components/HowItWorks";
import WhyChooseUs from "@/features/Home/components/WhyChooseUs";
import PaymentOptions from "@/features/Home/components/PaymentOptions";
import TrustBar from "@/features/Home/components/FeatureBar";
import HalloweenSection from "@/features/Home/components/HalloweenSection";
import WarrantyBanner from "@/features/Home/components/WarrantyBanner";
import Brands from "@/features/Home/components/Brands";
import FindParts from "@/features/Home/components/FindParts";
import Testimonials from "@/features/Home/components/Testimonials";
import CallUs from "@/features/Home/components/CallUs";
import OurProcess from "@/features/Home/components/OurProcess";
import Number from "@/features/Home/components/Number";

export const metadata: Metadata = pageMetadata(
  "Quality Used Engines & Transmissions",
  "Find A-grade used engines and transmissions with nationwide delivery, promotional savings, eligible 3-year limited warranty protection, and expert support.",
);

export default function Home() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={faqSchema(
          faqData.faqs.map(({ question, answer }) => ({ question, answer })),
        )}
      />
      {/* <QuoteFocusedHome /> */}
      <Banner />
      <TrustBar />
      <HowItWorks />
      <Number />
      <FindParts />
      {/* <Number /> */}
      <OurProcess />
      <WhyChooseUs />
      <WarrantyBanner />
      {/* <PaymentOptions /> */}
      <Brands />
      <Testimonials />

      <FAQ />
      <CallUs />
      {/* <FinalCTA/> */}
    </main>
  );
}
