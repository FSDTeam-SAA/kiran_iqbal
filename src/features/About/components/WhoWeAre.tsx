import { WHOWEARE } from "@/Content/data";

const WhoWeAre = () => {
  const { eyebrow, title, description, steps } = WHOWEARE;

  return (
    <section className="w-full px-6 py-20 lg:px-36">
      <div className="mx-auto flex w-full container flex-col items-center gap-8">
        <div className="flex w-full flex-col items-center justify-center gap-1">
          <span className="text-center text-base font-bold uppercase tracking-widest text-green-600 font-['Barlow_Condensed']">
            {eyebrow}
          </span>

          <div className="flex w-full flex-col items-center justify-center gap-2">
            <h2 className="text-center text-5xl font-extrabold uppercase tracking-wider text-zinc-900 font-['Barlow_Condensed']">
              {title}
            </h2>

            <p className="text-center text-base font-normal leading-6 text-slate-600 font-['Inter']">
              {description}
            </p>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative flex flex-col justify-between gap-6 rounded-2xl bg-white p-7 border border-slate-200/90 shadow-[0px_10px_30px_0px_rgba(8,42,84,0.08)] transition-all duration-300 hover:border-green-600/40 hover:shadow-[0px_16px_36px_0px_rgba(0,153,0,0.12)] hover:-translate-y-1"
            >
              <div className="flex items-end justify-end">
                <span className="absolute top-3 text-6xl font-extrabold text-slate-300/60 font-['Barlow_Condensed'] transition-colors duration-300 group-hover:text-green-600/30">
                  {step.number}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-2.5">
                <h3 className="text-2xl font-bold uppercase tracking-wide text-zinc-900 font-['Barlow_Condensed'] group-hover:text-green-600 transition-colors duration-200">
                  {step.title}
                </h3>

                <p className="text-base font-normal leading-6 text-slate-600 font-['Inter']">
                  {step.description}
                </p>
              </div>

              <div className="h-1 w-12 rounded-full bg-slate-100 transition-all duration-300 group-hover:w-full group-hover:bg-green-600" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;