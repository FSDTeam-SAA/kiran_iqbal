import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/button";

const BetterWaySection = () => {
  return (
    <section className="border-y border-gray-200 bg-gray-50 px-6 py-16 sm:px-8 lg:px-36 lg:py-20">
      <div className="mx-auto flex container flex-col items-center gap-10 lg:flex-row lg:gap-10">
        {/* Image */}
        <div className="w-full flex-1 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]">
          <div className="relative aspect-[559/408] w-full">
            <Image
              src="/used-engines-workshop.jpg"
              alt="Quality used replacement engine"
              fill
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full flex-1">
          <div className="flex flex-col gap-4">
            {/* Eyebrow */}
            <p className="font-['Barlow_Condensed'] text-base font-bold uppercase leading-5 tracking-[0.2em] text-green-600">
              Quality Used Engines
            </p>

            {/* Heading */}
            <h2 className="max-w-[550px] font-['Barlow_Condensed'] text-4xl font-extrabold uppercase leading-[1.05] text-slate-900 sm:text-5xl">
              A Better Way To <span className="text-green-600">Source</span>
              <br />
              Your <span className="text-green-600">Replacement</span> Engine
            </h2>

            {/* Description */}
            <div className="mt-2 flex max-w-[600px] flex-col gap-2 font-['Inter'] text-base leading-6 text-gray-600">
              <p>
                Finding the right used engine doesn&apos;t have to mean
                searching through endless listings or calling multiple
                junkyards.
              </p>

              <p>
                Our team works with a broad network of yards and suppliers to
                help locate the right replacement for your vehicle.
              </p>

              <p>
                We focus on vehicle compatibility, engine details, quality
                checks, and dependable delivery.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-2">
              <Link href="#quote">
                <Button
                  variant="primary"
                  showIcon={false}
                  className="!rounded-[10px] !border-green-600 !bg-green-600 !px-6 !py-3.5 !font-['Barlow_Condensed'] !text-xl !font-bold !uppercase !tracking-wide !text-white !shadow-[0px_6px_0px_0px_rgba(6,120,6,1)] hover:!border-green-700 hover:!bg-green-700"
                >
                  Get My Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BetterWaySection;
