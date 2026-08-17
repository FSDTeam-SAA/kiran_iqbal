import Image from "next/image";
import Link from "next/link";
import { FiActivity, FiCheckCircle, FiCpu, FiHeadphones, FiSettings, FiShield, FiTarget, FiTruck } from "react-icons/fi";
import type { IconType } from "react-icons";

const engineTypes: { title: string; description: string; icon: IconType }[] = [
  { title: "Gas Engines", description: "Dependable replacements for the vehicles you drive every day.", icon: FiSettings },
  { title: "Diesel Engines", description: "Built for towing, hauling, and serious work-mile reliability.", icon: FiActivity },
  { title: "Car Engines", description: "Quality replacement engines for popular passenger vehicles.", icon: FiCpu },
  { title: "Truck Engines", description: "Engine options for pickups, fleets, and work trucks.", icon: FiTruck },
  { title: "SUV Engines", description: "Restore confidence for your family SUV or crossover.", icon: FiTarget },
  { title: "Performance Engines", description: "Talk with a specialist about the right performance fit.", icon: FiHeadphones },
];

const brands = ["Ford", "Chevrolet", "GMC", "Toyota", "Honda", "Dodge", "Chrysler", "Kia", "Hyundai", "Nissan", "BMW", "Mercedes-Benz", "Audi", "Volkswagen", "Lexus", "Jeep", "Land Rover", "Volvo"];

const UsedEnginesDetails = () => {
  return (
    <>
      <section className="w-full border-b border-gray-200 bg-white px-6 py-16 lg:px-20 lg:py-20">
        <div className="container mx-auto flex w-full flex-col items-center">
          {/* Header */}
          <div className="flex w-full max-w-3xl flex-col items-center gap-3 text-center">
            <span className="font-['Barlow_Condensed'] text-base font-bold uppercase leading-5 tracking-widest text-green-600">
              What We Supply
            </span>

            <h2 className="font-['Barlow_Condensed'] text-4xl font-extrabold uppercase leading-tight text-gray-900 md:text-5xl">
              Used Engines For Cars,{" "}
              <span className="text-green-600">Trucks &amp; SUVs</span>
            </h2>

            <p className="max-w-2xl font-['Inter'] text-base font-normal leading-6 text-gray-600">
              From daily drivers to hard-working trucks, we source the engine
              your vehicle needs.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {engineTypes.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="group flex flex-col items-start gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-600/40 hover:bg-white hover:shadow-md"
              >
                {/* Icon */}
                <div className="flex size-10 shrink-0 items-center justify-center rounded-[10px] bg-green-100 text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white group-hover:shadow-[0_6px_16px_rgba(22,163,74,0.2)]">
                  <Icon
                    aria-hidden
                    className="size-5 stroke-[2] transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col items-start gap-1.5">
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase leading-7 text-gray-900 transition-colors duration-200 group-hover:text-green-600">
                    {title}
                  </h3>

                  <p className="font-['Inter'] text-base font-normal leading-6 text-gray-600">
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
            Engine Options
          </p>
          <h2 className="mt-3 font-['Barlow_Condensed'] text-4xl font-extrabold uppercase leading-none text-slate-950 sm:text-5xl">
            Engines For <span className="text-green-600">The Brands</span> You
            Drive
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
};

export default UsedEnginesDetails;
