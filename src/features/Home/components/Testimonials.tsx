import { FiStar } from "react-icons/fi";
import { testimonialsData } from "@/Content/data";

const Testimonials = () => {
  const { eyebrow, title, note, testimonials } = testimonialsData;

  return (
    <section className="w-full bg-[#e8f7ea] px-5 py-12 sm:py-14">
      <div className="mx-auto flex w-full container flex-col items-center">
        <div className="flex w-full flex-col items-center gap-2 text-center">
          <span className="text-sm font-bold uppercase leading-6 tracking-[0.2em] text-green-600 font-['Barlow_Condensed']">
            {eyebrow}
          </span>

          <h2 className="text-center text-3xl font-extrabold uppercase leading-[.95] tracking-wide text-zinc-900 font-['Barlow_Condensed'] sm:text-[36px]">
            {title}
          </h2>
        </div>

        <div className="grid w-full grid-cols-1 items-stretch gap-3 pt-7 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="group relative flex flex-col justify-between rounded-md border border-slate-200/90 bg-white p-5 shadow-[0px_6px_14px_rgba(0,0,0,0.06)] transition-all duration-300 hover:border-green-600/40 hover:-translate-y-1"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, index) => (
                      <FiStar key={index} className="size-4 fill-green-600 text-green-600" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-600/10 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-green-600 border border-green-600/20 font-['Barlow_Condensed']">
                    ✓ Verified Buyer
                  </span>
                </div>

                <div className="py-2">
                  <p className="text-[13px] font-normal leading-5 text-slate-700 font-['Inter'] italic">
                    “{testimonial.review}”
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 border-t border-slate-100 pt-5 mt-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-green-600 border border-green-700/20 shadow-xs group-hover:scale-105 transition-transform duration-300">
                  <span className="text-lg font-extrabold text-white font-['Barlow_Condensed']">
                    {testimonial.initials}
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-sm font-bold leading-tight text-zinc-900 font-['Inter'] group-hover:text-green-600 transition-colors duration-200">
                    {testimonial.name}
                  </span>

                  <span className="text-xs leading-normal text-slate-500 font-['Inter']">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-7 text-center text-xs leading-5 text-slate-500 font-['Inter']">
          {note}
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
