"use client";

import { FiPhone, FiCopy, FiCheck, FiArrowRight } from "react-icons/fi";
import { useHalloween } from "@/components/sheard/HalloweenContext";
import { useQuoteModal } from "@/components/sheard/QuoteModal";
import HalloweenArt from "@/components/sheard/HalloweenArt";
import { business } from "@/lib/business";

export default function HalloweenSection() {
  const { timeRemaining, couponCode, copyCouponCode, isCopied } = useHalloween();
  const { openModal } = useQuoteModal();

  if (timeRemaining.isExpired) return null;

  const pad = (num: number) => String(num).padStart(2, "0");

  const handleClaim = () => {
    const formElement = document.getElementById("find-your-part");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    } else {
      openModal();
    }
  };

  return (
    <section
      id="halloween-offer"
      aria-labelledby="hw-section-title"
      className="relative overflow-hidden bg-gradient-to-b from-[#140821] via-[#1c0c29] to-[#12071d] px-4 py-16 sm:px-6 sm:py-24 text-white"
    >
      {/* Background Decorative Ambient Radial Glows */}
      <div
        className="pointer-events-none absolute -top-40 right-0 size-96 rounded-full bg-purple-600/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-0 size-96 rounded-full bg-orange-600/20 blur-3xl"
        aria-hidden="true"
      />

      {/* Spiderweb SVG */}
      <svg
        className="pointer-events-none absolute top-0 left-0 size-32 sm:size-48 opacity-20"
        viewBox="0 0 160 160"
        aria-hidden="true"
      >
        <path
          d="M0 0L160 18 M0 0L148 72 M0 0L118 118 M0 0L72 148 M0 0L18 160 M37.8 4.2Q32.4 9.4 34.2 16.6Q27.5 19.6 26.9 26.9Q19.6 27.5 16.6 34.2Q9.4 32.4 4.2 37.8 M73.5 8.3Q63.0 18.3 66.5 32.4Q53.5 38.1 52.3 52.3Q38.1 53.5 32.4 66.5Q18.3 63.0 8.3 73.5 M111.3 12.5Q95.4 27.7 100.7 49.0Q81.0 57.7 79.2 79.2Q57.7 81.0 49.0 100.7Q27.7 95.4 12.5 111.3"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.2"
        />
      </svg>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Copy & Offer Details */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/50 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-300">
              <span className="text-sm">🎃</span> A&R Halloween Special · Ends Oct 31
            </div>

            <p className="mt-5 font-['Barlow_Condensed'] text-xl sm:text-2xl font-bold italic tracking-wide text-amber-300">
              No tricks. Just a treat.
            </p>

            <h2
              id="hw-section-title"
              className="mt-1 font-['Barlow_Condensed'] text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase leading-[0.92] tracking-tight"
            >
              <span className="block bg-gradient-to-r from-amber-200 via-orange-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_2px_22px_rgba(255,140,0,0.55)]">
                Free Car Cleaning Bucket
              </span>
              <span className="text-xl sm:text-3xl font-bold text-gray-100 normal-case font-['Inter'] block mt-2">
                with every engine or transmission purchase
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-slate-300 font-['Inter']">
              Order a <strong className="text-white">tested, VIN-matched used engine or transmission</strong> from A&R Auto Parts by Halloween night, and we’ll ship a complimentary whole car cleaning bucket right along with your part. On us.
            </p>

            {/* Countdown Units */}
            <div className="mt-6 w-full max-w-lg rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-300 flex items-center gap-2">
                  <span className="size-2 rounded-full bg-orange-500 animate-ping" />
                  Limited Time Countdown
                </span>
                <span className="text-xs text-gray-400">Ends Oct 31 at 11:59 PM CT</span>
              </div>

              <div className="grid grid-cols-4 gap-2.5 sm:gap-3 text-center">
                <div className="rounded-xl bg-black/40 border border-orange-500/30 p-2.5 sm:p-3">
                  <span className="block font-mono text-3xl sm:text-4xl font-black text-amber-200">
                    {timeRemaining.days}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    Days
                  </span>
                </div>
                <div className="rounded-xl bg-black/40 border border-orange-500/30 p-2.5 sm:p-3">
                  <span className="block font-mono text-3xl sm:text-4xl font-black text-amber-200">
                    {pad(timeRemaining.hours)}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    Hours
                  </span>
                </div>
                <div className="rounded-xl bg-black/40 border border-orange-500/30 p-2.5 sm:p-3">
                  <span className="block font-mono text-3xl sm:text-4xl font-black text-amber-200">
                    {pad(timeRemaining.minutes)}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    Mins
                  </span>
                </div>
                <div className="rounded-xl bg-black/40 border border-orange-500/30 p-2.5 sm:p-3">
                  <span className="block font-mono text-3xl sm:text-4xl font-black text-amber-200">
                    {pad(timeRemaining.seconds)}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    Secs
                  </span>
                </div>
              </div>
            </div>

            {/* Coupon Code Strip */}
            <div className="mt-5 w-full max-w-lg rounded-2xl border-2 border-dashed border-amber-400/80 bg-gradient-to-r from-orange-500/20 via-purple-600/15 to-orange-500/20 p-4 sm:p-5">
              <div className="text-xs font-bold uppercase tracking-widest text-amber-300">
                Your Halloween coupon code
              </div>
              <div className="mt-1 flex items-center justify-between gap-3">
                <span className="font-mono text-2xl sm:text-3xl font-extrabold tracking-wider text-amber-200 drop-shadow-[0_0_15px_rgba(255,200,60,0.6)]">
                  {couponCode}
                </span>
                <button
                  type="button"
                  onClick={copyCouponCode}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-amber-400 px-5 py-2.5 font-['Inter'] text-sm font-bold text-gray-950 shadow-md transition-all hover:bg-amber-300 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  {isCopied ? (
                    <>
                      <FiCheck className="size-4 text-emerald-800" /> Copied!
                    </>
                  ) : (
                    <>
                      <FiCopy className="size-4" /> Copy Code
                    </>
                  )}
                </button>
              </div>
              <p className="mt-1.5 text-xs text-slate-300">
                Use it online or over the phone. We add it right to your order.
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-col sm:flex-row w-full max-w-lg gap-3">
              <a
                href={`tel:${business.phone}`}
                className="inline-flex min-h-14 flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 px-6 font-['Inter'] text-base font-extrabold text-gray-950 shadow-sm hover:shadow-md transition hover:scale-[1.01] hover:brightness-105 active:scale-[0.98]"
              >
                <FiPhone className="size-5" />
                Call {business.phone}
              </a>
              <button
                type="button"
                onClick={handleClaim}
                className="inline-flex min-h-14 flex-1 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 font-['Inter'] text-base font-bold text-white transition hover:bg-white/20 hover:border-white/60 active:scale-[0.98] cursor-pointer"
              >
                <span>Find My Part</span>
                <FiArrowRight className="size-5" />
              </button>
            </div>

            <p className="mt-3 max-w-lg text-xs leading-relaxed text-gray-400">
              Offer valid on eligible used engine and transmission orders placed by October 31, 2026, 11:59 PM CT with code HALO-2026. One kit per order. Ask your parts specialist which parts qualify.
            </p>
          </div>

          {/* Right Column: Custom Animated Artwork */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <HalloweenArt className="w-full max-w-[420px] lg:max-w-none" />
          </div>
        </div>

        {/* How to Claim Steps */}
        <div className="mt-16 sm:mt-20 border-t border-white/10 pt-10">
          <h3 className="text-center font-['Barlow_Condensed'] text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-white">
            How To Claim Your <span className="text-orange-400">Free Car Cleaning Bucket</span>
          </h3>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="relative flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 font-extrabold text-lg text-gray-950 shadow-lg">
                1
              </span>
              <div>
                <strong className="block text-lg font-bold text-white">Find Your Part</strong>
                <p className="mt-1 text-sm text-slate-300 leading-relaxed">
                  Call <a href={`tel:${business.phone}`} className="text-amber-300 font-bold hover:underline">{business.phone}</a> or submit your details in the quote form to find your engine or transmission.
                </p>
              </div>
            </div>

            <div className="relative flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 font-extrabold text-lg text-gray-950 shadow-lg">
                2
              </span>
              <div>
                <strong className="block text-lg font-bold text-white">
                  Use Code <span className="font-mono text-amber-300">{couponCode}</span>
                </strong>
                <p className="mt-1 text-sm text-slate-300 leading-relaxed">
                  Give the code when ordering online or over the phone with our specialists.
                </p>
              </div>
            </div>

            <div className="relative flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 font-extrabold text-lg text-gray-950 shadow-lg">
                3
              </span>
              <div>
                <strong className="block text-lg font-bold text-white">Your Bucket Ships Free</strong>
                <p className="mt-1 text-sm text-slate-300 leading-relaxed">
                  Our team adds the promo code right to your order, and your whole car cleaning bucket ships alongside your part!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3.5">
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5 text-sm font-bold text-white">
            <span className="text-xl">🛡️</span> 3-Year Unlimited-Mile Warranty
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5 text-sm font-bold text-white">
            <span className="text-xl">🚚</span> Free Nationwide Shipping
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5 text-sm font-bold text-white">
            <span className="text-xl">⚡</span> Ships in 2-3 Business Days
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5 text-sm font-bold text-white">
            <span className="text-xl">🔍</span> VIN-Matched & Tested Quality
          </div>
        </div>
      </div>
    </section>
  );
}
