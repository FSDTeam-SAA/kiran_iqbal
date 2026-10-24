"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { FiX, FiPhone, FiCopy, FiCheck, FiArrowRight } from "react-icons/fi";
import { useHalloween } from "./HalloweenContext";
import { useQuoteModal } from "./QuoteModal";
import HalloweenArt from "./HalloweenArt";
import { business } from "@/lib/business";

export default function HalloweenModal() {
  const {
    isOpen,
    closeHalloweenModal,
    timeRemaining,
    couponCode,
    copyCouponCode,
    isCopied,
  } = useHalloween();

  const { openModal } = useQuoteModal();
  const modalRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  // Completely pause background Lenis scroll and lock body/html scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen, lenis]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeHalloweenModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeHalloweenModal]);

  const handleClaimQuote = () => {
    closeHalloweenModal();
    // Scroll to #find-your-part if on page or open quote modal
    const element = document.getElementById("find-your-part");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      openModal();
    }
  };

  const pad = (num: number) => String(num).padStart(2, "0");

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          data-lenis-prevent
          role="dialog"
          aria-modal="true"
          aria-labelledby="hw-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-5 overflow-hidden"
        >
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeHalloweenModal}
            className="fixed inset-0 bg-[#0c0614]/85 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            data-lenis-prevent
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="relative z-10 w-full max-w-4xl my-auto overflow-hidden rounded-2xl sm:rounded-3xl border border-orange-500/25 bg-gradient-to-b from-[#1a0c26] via-[#12071c] to-[#0c0514] text-white shadow-2xl shadow-black/80 flex flex-col max-h-[90vh] sm:max-h-[86vh]"
          >
            {/* Corner Spiderweb SVG */}
            <svg
              className="pointer-events-none absolute top-0 left-0 size-24 sm:size-32 opacity-20"
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

            {/* Close Button */}
            <button
              type="button"
              onClick={closeHalloweenModal}
              aria-label="Close Halloween offer popup"
              className="absolute right-3.5 top-3.5 z-30 inline-flex size-9 sm:size-10 items-center justify-center rounded-full border border-white/15 bg-black/60 text-gray-300 transition-all hover:scale-105 hover:bg-orange-600 hover:text-white hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer shadow-sm"
            >
              <FiX className="size-5" />
            </button>

            {/* Modal Scrollable Body */}
            <div
              data-lenis-prevent
              className="hw-custom-scrollbar flex-1 min-h-0 overflow-y-auto overflow-x-hidden px-4 py-5 sm:px-8 sm:py-7 overscroll-contain touch-pan-y scroll-smooth"
            >
              {/* Top Banner Tag */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-300">
                  <span className="animate-pulse">🎃</span> A&R Halloween Special · Ends Oct 31
                </span>
                <span className="text-xs font-semibold text-orange-400/90 hidden sm:inline">
                  • Limited Stock Free Kits
                </span>
              </div>

              {/* Grid Content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                {/* Left Column: Details, Timer, Coupon, CTAs */}
                <div className="lg:col-span-7 flex flex-col">
                  <p className="font-['Barlow_Condensed'] text-lg sm:text-xl font-bold italic tracking-wide text-amber-300">
                    No tricks. Just a treat.
                  </p>

                  <h2
                    id="hw-modal-title"
                    className="mt-1 font-['Barlow_Condensed'] text-3xl sm:text-5xl font-extrabold uppercase leading-[0.95] tracking-tight"
                  >
                    <span className="block bg-gradient-to-r from-amber-200 via-orange-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_2px_18px_rgba(255,140,0,0.5)]">
                      Free Car Care Kit
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-gray-100 normal-case font-['Inter'] block mt-1">
                      with every eligible engine or transmission
                    </span>
                  </h2>

                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300 font-['Inter']">
                    Order a <strong className="text-white">tested, VIN-matched used engine or transmission</strong> from A&R Auto Parts by Halloween night, and we’ll ship a premium car cleaning kit right along with your part. On us.
                  </p>

                  {/* Countdown Timer */}
                  <div className="mt-4 p-3.5 sm:p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-orange-300 flex items-center gap-1.5">
                        <span className="size-2 rounded-full bg-orange-500 animate-ping" />
                        Offer Countdown
                      </span>
                      <span className="text-[11px] text-gray-400">Ends Oct 31, 11:59 PM CT</span>
                    </div>

                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div className="rounded-lg bg-black/40 border border-orange-500/30 p-2">
                        <span className="block font-mono text-2xl sm:text-3xl font-extrabold text-amber-200">
                          {timeRemaining.days}
                        </span>
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400">
                          Days
                        </span>
                      </div>
                      <div className="rounded-lg bg-black/40 border border-orange-500/30 p-2">
                        <span className="block font-mono text-2xl sm:text-3xl font-extrabold text-amber-200">
                          {pad(timeRemaining.hours)}
                        </span>
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400">
                          Hours
                        </span>
                      </div>
                      <div className="rounded-lg bg-black/40 border border-orange-500/30 p-2">
                        <span className="block font-mono text-2xl sm:text-3xl font-extrabold text-amber-200">
                          {pad(timeRemaining.minutes)}
                        </span>
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400">
                          Mins
                        </span>
                      </div>
                      <div className="rounded-lg bg-black/40 border border-orange-500/30 p-2">
                        <span className="block font-mono text-2xl sm:text-3xl font-extrabold text-amber-200">
                          {pad(timeRemaining.seconds)}
                        </span>
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400">
                          Secs
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Coupon Code Box */}
                  <div className="mt-4 rounded-xl border-2 border-dashed border-amber-400/70 bg-gradient-to-r from-orange-500/20 via-purple-500/15 to-orange-500/20 p-3 sm:p-4">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-amber-300">
                      Your Halloween Promo Code
                    </div>
                    <div className="mt-1 flex items-center justify-between gap-3">
                      <span className="font-mono text-2xl sm:text-3xl font-extrabold tracking-wider text-amber-200 drop-shadow-[0_0_12px_rgba(255,200,60,0.6)]">
                        {couponCode}
                      </span>
                      <button
                        type="button"
                        onClick={copyCouponCode}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-amber-400 px-4 py-2 font-['Inter'] text-xs sm:text-sm font-bold text-gray-950 shadow-sm transition-all hover:bg-amber-300 hover:scale-105 active:scale-95 cursor-pointer"
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
                    <p className="mt-1 text-xs text-slate-300">
                      Mention this code over phone or in your quote request.
                    </p>
                  </div>

                  {/* CTAs */}
                  <div className="mt-5 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                    <a
                      href={`tel:${business.phone}`}
                      className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 px-5 font-['Inter'] text-base font-extrabold text-gray-950 shadow-sm transition hover:scale-[1.01] hover:shadow-md hover:brightness-105 active:scale-[0.98]"
                    >
                      <FiPhone className="size-5" />
                      Call {business.phone}
                    </a>
                    <button
                      type="button"
                      onClick={handleClaimQuote}
                      className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 font-['Inter'] text-base font-bold text-white transition hover:bg-white/20 hover:border-white/40 active:scale-[0.98] cursor-pointer shadow-sm"
                    >
                      <span>Claim With Quote</span>
                      <FiArrowRight className="size-4" />
                    </button>
                  </div>

                  <p className="mt-3 text-[11px] leading-relaxed text-gray-400">
                    * Offer valid on eligible used engine & transmission orders placed by Oct 31, 2026. One kit per order. Terms apply.
                  </p>
                </div>

                {/* Right Column: Illustration Art */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center">
                  <HalloweenArt className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-none" />
                </div>
              </div>

              {/* 3 Steps To Claim Section */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <h3 className="text-center font-['Barlow_Condensed'] text-xl sm:text-2xl font-bold uppercase tracking-wide text-white">
                  How To Claim Your <span className="text-orange-400">Free Halloween Kit</span>
                </h3>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3.5">
                  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 font-bold text-gray-950 shadow-md">
                      1
                    </div>
                    <div>
                      <strong className="block text-sm font-bold text-white">Find Your Part</strong>
                      <p className="text-xs text-gray-300 mt-0.5">
                        Call our specialists or submit an instant quote for your engine or transmission.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 font-bold text-gray-950 shadow-md">
                      2
                    </div>
                    <div>
                      <strong className="block text-sm font-bold text-white">
                        Use Code <span className="font-mono text-amber-300">{couponCode}</span>
                      </strong>
                      <p className="text-xs text-gray-300 mt-0.5">
                        Give this coupon code over the phone or enter it when booking your order.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 font-bold text-gray-950 shadow-md">
                      3
                    </div>
                    <div>
                      <strong className="block text-sm font-bold text-white">Free Kit Ships With Order</strong>
                      <p className="text-xs text-gray-300 mt-0.5">
                        Our team adds your complimentary car care kit to the shipment at zero extra charge!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badges Bar */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center text-xs text-gray-300">
                <div className="rounded-lg bg-black/30 border border-white/5 px-2.5 py-2">
                  🛡️ 3-Year Warranty
                </div>
                <div className="rounded-lg bg-black/30 border border-white/5 px-2.5 py-2">
                  🚚 Free Nationwide Shipping
                </div>
                <div className="rounded-lg bg-black/30 border border-white/5 px-2.5 py-2">
                  ⚡ Ships in 2-3 Days
                </div>
                <div className="rounded-lg bg-black/30 border border-white/5 px-2.5 py-2">
                  🔍 VIN-Matched & Tested
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
