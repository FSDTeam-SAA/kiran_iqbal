import { FiShield, FiCreditCard, FiTruck, FiHeadphones } from "react-icons/fi";

const MissionSection = () => {
  return (
    <section className="w-full bg-gray-50 px-6 py-16 lg:px-20 lg:py-20">
      <div className="mx-auto flex w-full container flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <span className="font-['Barlow_Condensed'] text-base font-bold uppercase leading-5 tracking-widest text-green-600">
            OUR MISSION
          </span>

          <div className="flex flex-col items-center gap-2">
            <h2 className="text-center font-['Barlow_Condensed'] text-4xl font-extrabold uppercase leading-tight tracking-wide text-slate-900 sm:text-5xl">
              Quality <span className="text-green-600">Parts.</span> Honest Service. Fast <span className="text-green-600">Support.</span>
            </h2>

            <p className="text-center font-['Inter'] text-base font-normal leading-5 text-gray-600">
              Our mission is to make the process of finding a replacement engine or transmission simple, transparent, and reliable.
            </p>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="group flex flex-col justify-between h-full rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0px_8px_24px_0px_rgba(8,42,84,0.06)] transition-all duration-300 hover:border-green-600/40 hover:shadow-[0px_14px_32px_0px_rgba(0,153,0,0.10)] hover:-translate-y-1">
            <div className="flex flex-col items-start gap-6">
              <div className="flex size-12 items-center justify-center rounded-xl bg-green-600/10 border border-green-600/20 transition-all duration-300 group-hover:bg-green-600 group-hover:border-green-600">
                <FiShield className="size-5 text-green-600 stroke-[2] transition-colors duration-300 group-hover:text-white" />
              </div>

              <div className="flex flex-col items-start gap-2">
                <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase tracking-wide text-zinc-900 group-hover:text-green-600 transition-colors duration-200">
                  QUALITY USED PARTS
                </h3>

                <p className="font-['Inter'] text-sm font-normal leading-relaxed text-slate-600">
                  Carefully selected replacement components.
                </p>
              </div>
            </div>
          </div>

          <div className="group flex flex-col justify-between h-full rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0px_8px_24px_0px_rgba(8,42,84,0.06)] transition-all duration-300 hover:border-green-600/40 hover:shadow-[0px_14px_32px_0px_rgba(0,153,0,0.10)] hover:-translate-y-1">
            <div className="flex flex-col items-start gap-6">
              <div className="flex size-12 items-center justify-center rounded-xl bg-green-600/10 border border-green-600/20 transition-all duration-300 group-hover:bg-green-600 group-hover:border-green-600">
                <FiCreditCard className="size-5 text-green-600 stroke-[2] transition-colors duration-300 group-hover:text-white" />
              </div>

              <div className="flex flex-col items-start gap-2">
                <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase tracking-wide text-zinc-900 group-hover:text-green-600 transition-colors duration-200">
                  HONEST PRICING
                </h3>

                <p className="font-['Inter'] text-sm font-normal leading-relaxed text-slate-600">
                  Clear and competitive pricing.
                </p>
              </div>
            </div>
          </div>

          <div className="group flex flex-col justify-between h-full rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0px_8px_24px_0px_rgba(8,42,84,0.06)] transition-all duration-300 hover:border-green-600/40 hover:shadow-[0px_14px_32px_0px_rgba(0,153,0,0.10)] hover:-translate-y-1">
            <div className="flex flex-col items-start gap-6">
              <div className="flex size-12 items-center justify-center rounded-xl bg-green-600/10 border border-green-600/20 transition-all duration-300 group-hover:bg-green-600 group-hover:border-green-600">
                <FiTruck className="size-5 text-green-600 stroke-[2] transition-colors duration-300 group-hover:text-white" />
              </div>

              <div className="flex flex-col items-start gap-2">
                <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase tracking-wide text-zinc-900 group-hover:text-green-600 transition-colors duration-200">
                  FAST SHIPPING
                </h3>

                <p className="font-['Inter'] text-sm font-normal leading-relaxed text-slate-600">
                  Nationwide delivery options.
                </p>
              </div>
            </div>
          </div>

          <div className="group flex flex-col justify-between h-full rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0px_8px_24px_0px_rgba(8,42,84,0.06)] transition-all duration-300 hover:border-green-600/40 hover:shadow-[0px_14px_32px_0px_rgba(0,153,0,0.10)] hover:-translate-y-1">
            <div className="flex flex-col items-start gap-6">
              <div className="flex size-12 items-center justify-center rounded-xl bg-green-600/10 border border-green-600/20 transition-all duration-300 group-hover:bg-green-600 group-hover:border-green-600">
                <FiHeadphones className="size-5 text-green-600 stroke-[2] transition-colors duration-300 group-hover:text-white" />
              </div>

              <div className="flex flex-col items-start gap-2">
                <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase tracking-wide text-zinc-900 group-hover:text-green-600 transition-colors duration-200">
                  DEDICATED SUPPORT
                </h3>

                <p className="font-['Inter'] text-sm font-normal leading-relaxed text-slate-600">
                  Real people ready to help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;