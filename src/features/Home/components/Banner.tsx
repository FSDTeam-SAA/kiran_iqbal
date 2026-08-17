import { FiPhone, FiShield, FiTruck, FiCheckCircle, FiCreditCard } from "react-icons/fi";
import Button from "@/components/ui/button";
import QuoteForm from "@/components/sheard/QuoteForm";

const Hero = () => {
  const trustItems = [
    { label: "3-Year Warranty", icon: FiShield },
    { label: "Tested & Inspected", icon: FiCheckCircle },
    { label: "Nationwide Shipping", icon: FiTruck },
    { label: "Financing Available", icon: FiCreditCard },
  ];

  return (
    <section className="w-full overflow-hidden bg-[radial-gradient(circle_at_85%_-14%,rgba(33,159,33,.11),transparent_27%),linear-gradient(180deg,#fff_0%,#f3f5f3_100%)]">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-8 px-5 py-10 lg:grid-cols-[1fr_1fr] lg:gap-12 lg:py-16">
        <QuoteForm />

        <div className="flex min-w-0 flex-col items-start pt-1 lg:pt-5">
          <div className="mb-3 rounded-full bg-white px-3 py-1 outline outline-1 outline-offset-[-1px] outline-green-600">
            <span className="text-[11px] font-semibold uppercase leading-5 tracking-[.08em] text-green-600 font-['Barlow_Condensed']">
              ● Trusted U.S. Used-Parts Supplier
            </span>
          </div>

          <h1 className="max-w-[590px] text-[42px] font-extrabold uppercase leading-[.92] tracking-[.015em] text-zinc-900 font-['Barlow_Condensed'] sm:text-[52px] lg:text-[64px]">
            Quality Used{" "}
            <span className="text-green-600">Engines</span>  & {" "}
            <span className="text-green-600">Transmissions</span>, <br /> Shipped Fast
          </h1>

          <p className="mt-5 max-w-[590px] text-[15px] leading-6 text-slate-600 font-['Inter'] sm:text-base">
            Low-mileage, Tested & Inspected Units Backed by a{" "}
            <span className="font-semibold">3-year Unlimited</span>-mileage
            Warranty. Get a Firm Quote in Minutes Most Orders Ship in 5–7
            Business Days.
          </p>

          <div className="mt-5 flex max-w-[620px] flex-wrap items-center gap-2">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 outline outline-1 outline-offset-[-1px] outline-green-600">
                  <Icon className="size-3.5 text-green-600" />
                  <span className="text-[11px] font-semibold leading-5 text-green-600 font-['Inter']">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a href="#quote"><Button variant="primary" showIcon={false}>Get My Free Quote</Button></a>
            <a href="tel:2815550142"><Button variant="secondary">(281) 555-0142</Button></a>
          </div>

          <div className="mt-5 flex items-center gap-2.5">
            <span className="text-xs tracking-[.15em] text-green-600">
              ★★★★★
            </span>
            <span className="text-sm leading-6 text-slate-600 font-['Inter']">
              Rated by hundreds of shops & DIY buyers nationwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
