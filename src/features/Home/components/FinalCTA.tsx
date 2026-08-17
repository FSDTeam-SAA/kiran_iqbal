import Button from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(90deg,#009900_0%,#003300_100%)]">

      <div className="relative mx-auto flex w-full max-w-[1160px] items-center justify-center px-5 py-11">
        <div className="flex w-full flex-col items-center justify-center gap-7">
          <div className="flex w-full flex-col items-center justify-center gap-2 text-center">
            <h2 className="text-4xl font-extrabold uppercase leading-10 tracking-wide text-white font-['Barlow_Condensed']">
              Get Your Firm Price Today
            </h2>

            <p className="text-base font-normal leading-6 text-slate-200 font-['Inter']">
              Tell us your year, make and model we'll do the rest.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" showIcon={false} className="bg-white shadow-[0px_6px_0px_0px_rgba(0,0,0,0.18)]">
              <span className="text-green-600">
                Get My Free Quote
              </span>
            </Button>

            <Button variant="secondary" className="!border-2 !border-white/60 !bg-transparent !text-white !outline-none">
              <span className="text-white">
                Call (281) 555-0142
              </span>
            </Button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-16 -top-16 size-72 rounded-full bg-[#003300]/30" />
    </section>
  );
};

export default FinalCTA;