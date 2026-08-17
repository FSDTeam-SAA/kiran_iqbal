import Image from "next/image";
import { FiCheckCircle, FiShield, FiTarget } from "react-icons/fi";
import QuoteForm from "@/components/sheard/QuoteForm";
import Button from "@/components/ui/button";

const proofPoints = [
  { label: "3-Year Warranty", icon: FiShield },
  { label: "Tested & Inspected", icon: FiCheckCircle },
  { label: "Nationwide Shipping", icon: FiTarget },
  { label: "Financing Available", icon: FiShield },
];

const UsedEnginesHero = () => {
  return (
    <section className="overflow-hidden bg-[radial-gradient(circle_at_85%_-10%,rgba(33,159,33,0.1),transparent_26rem),linear-gradient(180deg,#ffffff_0%,#f3f5f3_100%)]">
      <div className="mx-auto flex container flex-col gap-10 px-5 py-12 sm:py-14 lg:flex-row lg:items-center lg:gap-12 lg:py-16">
        {/* Quote Form */}
        <div className="w-full lg:flex-1">
          <QuoteForm title="GET YOUR QUOTE" />
        </div>

        {/* Hero Content */}
        <div className="flex w-full flex-1 flex-col items-start gap-5">
          {/* Eyebrow */}
          <div className="inline-flex items-center rounded-full border border-green-600 bg-white px-3.5 py-1.5">
            <span className="font-['Barlow_Condensed'] text-sm font-semibold uppercase tracking-[0.18em] text-green-600 sm:text-base">
              ● Quality Used Engines
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-[650px] font-['Barlow_Condensed'] text-5xl font-extrabold uppercase leading-[0.92] tracking-wide text-zinc-900 sm:text-6xl lg:text-[64px] lg:leading-[0.96]">
            Quality <span className="text-green-600">Used Engines</span>
            <br />
            Built To Get You Back On The Road.
          </h1>

          {/* Description */}
          <p className="max-w-[620px] font-['Inter'] text-base leading-7 text-gray-600 sm:text-lg">
            Find quality used engines for your car, truck, or SUV. We help match
            you with a reliable replacement based on your vehicle details,
            engine size, and compatibility.
          </p>

          {/* Proof Points */}
          <div className="flex max-w-[620px] flex-wrap gap-2.5">
            {proofPoints.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-green-600 bg-white px-3.5 py-1.5 font-['Inter'] text-xs font-semibold text-green-600 transition-all duration-300 hover:bg-green-50 sm:text-sm"
              >
                <Icon aria-hidden className="size-3.5 shrink-0" />
                {label}
              </span>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a href="#quote">
              <Button variant="primary" showIcon={false}>
                Get My Free Quote
              </Button>
            </a>
            <a href="tel:2815550142">
              <Button variant="secondary">(281) 555-0142</Button>
            </a>
          </div>

          {/* Rating */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-['Inter'] text-base tracking-widest text-green-600">
              ★★★★★
            </span>

            <span className="font-['Inter'] text-sm leading-6 text-slate-600">
              Rated by hundreds of shops & DIY buyers nationwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsedEnginesHero;
