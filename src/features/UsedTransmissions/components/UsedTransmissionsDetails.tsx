import Image from "next/image";
import Link from "next/link";
import { FiActivity, FiCheckCircle, FiCpu, FiHeadphones, FiSettings, FiSliders, FiTarget, FiTruck } from "react-icons/fi";
import type { IconType } from "react-icons";
import Button from "@/components/ui/button";

const transmissionTypes: { title: string; description: string; icon: IconType }[] = [
  { title: "Automatic Transmissions", description: "Smooth, dependable replacements for everyday driving.", icon: FiSettings },
  { title: "Manual Transmissions", description: "Reliable options for drivers who prefer full control.", icon: FiSliders },
  { title: "CVT Transmissions", description: "Continuously variable units for modern efficiency-focused vehicles.", icon: FiActivity },
  { title: "Truck Transmissions", description: "Replacement transmission options for pickup and work trucks.", icon: FiTruck },
  { title: "SUV Transmissions", description: "Transmission options for SUVs and larger vehicles.", icon: FiTarget },
  { title: "Specialty Transmissions", description: "Options for select specialty and performance applications.", icon: FiCpu },
];

const brands = ["Ford", "Chevrolet", "GMC", "Toyota", "Honda", "Dodge", "Chrysler", "Kia", "Hyundai", "Nissan", "BMW", "Mercedes-Benz", "Audi", "Volkswagen", "Lexus", "Jeep", "Land Rover", "Volvo"];

const UsedTransmissionsDetails = () => (
  <>
    <section className="w-full border-t border-b border-gray-200 bg-white px-6 py-16 lg:px-20 lg:py-20">
      <div className="container mx-auto grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Content */}
        <div className="order-2 flex flex-col items-start lg:order-1">
          <span className="font-['Barlow_Condensed'] text-base font-bold uppercase leading-5 tracking-widest text-green-600">
            QUALITY YOU CAN TRUST
          </span>

          <h2 className="mt-3 max-w-xl font-['Barlow_Condensed'] text-4xl font-extrabold uppercase leading-[0.95] text-gray-900 transition-colors duration-300 sm:text-5xl">
            A BETTER WAY TO SOURCE YOUR{" "}
            <span className="text-green-600">REPLACEMENT TRANSMISSION</span>
          </h2>

          <p className="mt-5 max-w-xl font-['Inter'] text-base font-normal leading-7 text-gray-600">
            Finding the right transmission shouldn’t mean taking a chance. We
            help identify the correct unit for your vehicle, check availability,
            and confirm fitment before it ships.
          </p>

          {/* Feature Cards */}
          <div className="mt-7 grid w-full gap-3 sm:grid-cols-2">
            {[
              "Tested & inspected inventory",
              "VIN-matched fitment",
              "Nationwide freight delivery",
              "Warranty in writing",
            ].map((item) => (
              <div
                key={item}
                className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-green-600/40 hover:bg-white hover:shadow-md"
              >
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                  <FiCheckCircle aria-hidden className="size-4 stroke-[2.5]" />
                </div>

                <span className="font-['Inter'] text-sm font-semibold leading-5 text-gray-700 transition-colors duration-300 group-hover:text-gray-900">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link href="#quote" className=" mt-8">
            <Button
              variant="primary"
              showIcon={false}
              className="!rounded-[10px] !border-green-600 !bg-green-600 !px-6 !py-3.5 !font-['Barlow_Condensed'] !text-xl !font-bold !uppercase !tracking-wide !text-white !shadow-[0px_6px_0px_0px_rgba(6,120,6,1)] hover:!border-green-700 hover:!bg-green-700"
            >
              Get My Free Quote
            </Button>

            {/* Shine */}
            <span className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[200%]" />
          </Link>
        </div>

        {/* Image */}
        <div className="group relative order-1 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-green-600/30 hover:shadow-xl lg:order-2">
          <div className="relative aspect-[1.18] w-full overflow-hidden">
            <Image
              src="/used-transmissions-workshop.jpg"
              alt="Mechanic inspecting a used transmission at a workbench"
              fill
              sizes="(min-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />

            {/* Image overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        </div>
      </div>
    </section>

    <section className="w-full border-t border-b border-gray-200 bg-[#f4f8f4] px-6 py-16 lg:px-20 lg:py-20">
      <div className="mx-auto flex w-full container flex-col items-center gap-10">
        {/* Header */}
        <div className="flex w-full flex-col items-center gap-3 text-center">
          <span className="font-['Barlow_Condensed'] text-base font-bold uppercase leading-5 tracking-widest text-green-600">
            WHAT WE SUPPLY
          </span>

          <h2 className="font-['Barlow_Condensed'] text-4xl font-extrabold uppercase leading-tight text-gray-900 md:text-5xl">
            USED <span className="text-green-600">TRANSMISSIONS</span> FOR CARS,
            TRUCKS &amp; SUVs
          </h2>

          <p className="max-w-4xl font-['Inter'] text-base font-normal leading-5 text-gray-600">
            The right replacement transmission for the vehicle you depend on.
          </p>
        </div>

        {/* Transmission Cards */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {transmissionTypes.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group flex flex-col items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-600/40 hover:shadow-md"
            >
              {/* Icon */}
              <div className="flex size-10 shrink-0 items-center justify-center rounded-[10px] bg-green-100 text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white group-hover:shadow-[0_6px_16px_rgba(22,163,74,0.18)]">
                <Icon
                  aria-hidden
                  className="size-5 stroke-[2] transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col items-start gap-1.5">
                <h3 className="font-['Barlow_Condensed'] text-base font-bold uppercase leading-5 text-gray-900 transition-colors duration-200 group-hover:text-green-600">
                  {title}
                </h3>

                <p className="font-['Inter'] text-base font-normal leading-5 text-gray-600">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-5 text-center">
        <p className="font-['Barlow_Condensed'] text-sm font-bold uppercase tracking-[0.18em] text-green-600">
          Transmission Options
        </p>
        <h2 className="mt-3 font-['Barlow_Condensed'] text-4xl font-extrabold uppercase leading-none text-slate-950 sm:text-5xl">
          Transmissions For <span className="text-green-600">The Brands</span>{" "}
          You Drive
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <div
              key={brand}
              className="group flex min-h-[70px] cursor-default items-center justify-center rounded-lg border border-slate-200 bg-white px-3 font-['Barlow_Condensed'] text-xl font-bold text-slate-900 shadow-sm transition-all duration-300 ease-out hover:border-green-600/40 hover:bg-green-50/30 hover:text-green-700 hover:shadow-[0_4px_12px_rgba(22,163,74,0.08)]"
            >
              <span className="transition-transform duration-300 group-hover:scale-[1.03]">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default UsedTransmissionsDetails;
