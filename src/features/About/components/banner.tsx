import Button from "@/components/ui/button";
import { aboutData } from "@/Content/data";

const AboutHero = () => {
  const { eyebrow, title, description, badges, rating } = aboutData;

  return (
    <section className="min-h-[69vh] w-full  flex items-center">
      <div className="mx-auto flex w-full container flex-col items-center gap-6 text-center">
        <div className="flex w-full flex-col items-center gap-5">
          <span className="font-['Barlow_Condensed'] text-base font-bold uppercase leading-5 tracking-widest text-green-600">
            {eyebrow}
          </span>

          <h2 className="font-['Barlow_Condensed'] text-5xl font-extrabold uppercase leading-tight tracking-wide text-zinc-900 md:text-6xl">
            {title.normal1} <span className="text-green-600">{title.highlight1}</span> {title.normal2} <span className="text-green-600">{title.highlight2}</span>
          </h2>

          <p className="max-w-3xl font-['Inter'] text-base font-normal leading-6 text-slate-600">
            {description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {badges.map((badge) => (
              <span key={badge} className="rounded-full border border-green-600 bg-white px-4 py-2 font-['Inter'] text-sm font-semibold leading-4 text-green-600">
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
          <Button variant="primary" showIcon={false}>
            Get My Free Quote
          </Button>

          <Button variant="secondary">
            (281) 555-0142
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
          <span className="font-['Segoe_UI_Symbol'] text-base tracking-widest text-green-600">
            {"★".repeat(rating.stars)}
          </span>

          <span className="font-['Inter'] text-sm leading-5 text-slate-600 md:text-base">
            {rating.text}
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;