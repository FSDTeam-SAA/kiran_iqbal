import Image from "next/image";
import Button from "@/components/ui/button";

const sectionBg = "/section-bg.png";

const WarrantyBanner = () => {
  return (
    <section className="relative w-full overflow-hidden ">
      <Image
        src={sectionBg}
        alt="Backed by a 3-Year Unlimited-Mileage Warranty"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="relative mx-auto flex w-full container flex-col md:flex-row items-center justify-between gap-6 px-5 py-10">
        <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          {/* Warranty Badge */}
          <div className="relative flex size-[110px] shrink-0 flex-col items-center justify-center rounded-full bg-white p-2 shadow-[0_0_0_8px_rgba(255,255,255,0.2)]">
            <span className="text-4xl font-extrabold text-green-600 font-['Barlow_Condensed']">
              3
            </span>
            <span className="text-sm font-bold uppercase text-green-600 font-['Barlow_Condensed']  text-center">
              Year Warranty
            </span>
          </div>

          {/* Banner Details */}
          <div className="flex flex-1 flex-col gap-1.5 w-full">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold uppercase tracking-wide text-white font-['Barlow_Condensed']">
              Backed by a 3-Year Unlimited-Mileage Warranty
            </h2>

            <p className="text-sm sm:text-base font-normal text-white/90 font-['Inter']">
              We stand behind every engine and transmission we ship. If a covered
              unit fails, we make it right that's why shops and DIY buyers keep
              coming back.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="shrink-0 mt-2 md:mt-0">
          <Button variant="secondary" showIcon={false}>
            Get My Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WarrantyBanner;
