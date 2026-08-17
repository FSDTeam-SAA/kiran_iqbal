import Button from "@/components/ui/button";
import Link from "next/link";
import { FiCheckCircle, FiPhone } from "react-icons/fi";

const ShippingWarrantyHero = () => (
  <section className="bg-[radial-gradient(circle_at_85%_0%,rgba(33,159,33,0.12),transparent_24rem),linear-gradient(180deg,#ffffff_0%,#f3f5f3_100%)] px-5 py-20 text-center sm:py-28">
    <p className="font-['Barlow_Condensed'] text-sm font-bold uppercase tracking-[0.18em] text-green-600">
      24/7 Customer Support
    </p>
    <h1 className="mx-auto mt-4 max-w-4xl font-['Barlow_Condensed'] text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
      Shipping Made Simple.
      <br />
      <span className="text-green-600">Warranty</span> You Can Trust.
    </h1>
    <p className="mx-auto mt-5 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
      We make it easy to understand how your engine or transmission is shipped,
      what warranty options are available, and what to do if you need support
      after delivery.
    </p>
    <ul className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-bold text-slate-900">
      {["Nationwide Shipping", "Warranty Options", "Dedicated Support"].map(
        (item) => (
          <li key={item} className="flex items-center gap-2">
            <FiCheckCircle aria-hidden className="size-4 text-green-600" />
            {item}
          </li>
        ),
      )}
    </ul>
    <div className="mt-7 flex flex-wrap justify-center gap-3">
      <Button
        href="/contact"
        variant="primary"
        className="!rounded-lg !px-6 !py-3 !text-lg"
      >
        Get My Free Quote
      </Button>

      <Button
        href="tel:+12815550142"
        variant="secondary"
        className="!rounded-lg !px-6 !py-3 !text-lg"
      >
        (281) 555-0142
      </Button>
    </div>
  </section>
);

export default ShippingWarrantyHero;
