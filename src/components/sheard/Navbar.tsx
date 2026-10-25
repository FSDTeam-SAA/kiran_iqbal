"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown, FiMenu, FiPhone, FiX } from "react-icons/fi";
import Button from "@/components/ui/button";
import { navItems } from "@/Content/data";
import { business } from "@/lib/business";
import { useHalloween } from "./HalloweenContext";

const logo = "/logo1.png";
const policyLinks = [
  { label: "Shipping & Warranty", href: "/shipping-warranty" },
  { label: "Refunds & Returns", href: "/refunds-returns" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openHalloweenModal, timeRemaining } = useHalloween();

  const navLinkClass = (isActive: boolean) =>
    `font-['Inter'] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-600 ${
      isActive
        ? "font-bold text-green-600"
        : "font-normal text-gray-700 hover:text-green-600"
    }`;

  return (
    <>
      {/* Halloween Deal Ticker */}
      <div
        onClick={openHalloweenModal}
        className="w-full overflow-hidden bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 cursor-pointer hover:brightness-105 transition-all"
        title="Click to view Free Halloween Gift offer"
      >
        <div className="flex w-max animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="flex items-center gap-6 py-2.5 pr-6 sm:gap-8 sm:py-3 sm:pr-8">
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg">🎃</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-['Barlow_Condensed'] text-sm font-bold uppercase tracking-wider text-white sm:text-base">
                  Free Halloween Gift for Everyone ! Now with Every Engine or Transmission Purchase Get whole Car Cleaning Bucket For Free - Use Coupon Code :{" "}
                  <span className="mx-1 inline-block rounded bg-black/25 px-2 py-0.5 font-mono text-xs font-black tracking-widest text-amber-300 sm:text-sm">
                    *HALO-2026 *
                  </span>{" "}
                  on booking your Part - OFFER is Valid Till 31st October 2026 . For More Information Dial Toll Free :{" "}
                  <span className="font-extrabold text-amber-100">
                    888-290 4476
                  </span>
                  .
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b-4 border-green-600 bg-white shadow-[0px_2px_12px_0px_rgba(8,42,84,0.1)]">
        <div className="container relative mx-auto flex h-16 w-full items-center justify-between px-4 sm:px-5 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 rounded-sm focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-green-600"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src={logo}
              alt="A&R Auto Parts home"
              width={200}
              height={62}
              priority
              className="h-12 w-36 object-contain sm:h-14 sm:w-44 lg:h-16 lg:w-48"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-2.5 lg:flex xl:gap-5 2xl:gap-7"
          >
            {navItems.filter((item) => item.href !== "/contact").map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`whitespace-nowrap text-xs leading-4 xl:text-sm ${navLinkClass(
                    isActive,
                  )}`}
                >
                  {item.label.toUpperCase()}
                </Link>
              );
            })}

            <details className="group relative">
              <summary className="flex cursor-pointer list-none items-center gap-1 whitespace-nowrap font-['Inter'] text-xs font-normal leading-4 text-gray-700 transition-colors hover:text-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-600 xl:text-sm [&::-webkit-details-marker]:hidden">
                POLICIES
                <FiChevronDown
                  aria-hidden
                  className="size-4 transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="absolute right-0 top-full z-50 mt-4 w-60 overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                {policyLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-4 py-3 font-['Inter'] text-sm font-medium text-gray-700 transition hover:bg-green-50 hover:text-green-700"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>

            <Link
              href="/contact"
              className={`whitespace-nowrap text-xs leading-4 xl:text-sm ${navLinkClass(
                pathname === "/contact",
              )}`}
            >
              CONTACT
            </Link>

            {/* Compact Halloween Gift Box 🎁 */}
            {!timeRemaining.isExpired && (
              <motion.button
                type="button"
                onClick={openHalloweenModal}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                title="Click box to claim your Free Halloween Gift"
                aria-label="Click box to claim your Free Halloween Gift"
                className="group relative flex items-center gap-1.5 rounded-full border border-amber-400/80 bg-gradient-to-r from-[#210e30] via-[#351547] to-[#1c0c29] px-3 py-1.5 shadow-sm hover:shadow transition-all cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-500 shrink-0"
              >
                <motion.span
                  animate={{
                    rotate: [0, -12, 12, -8, 8, -4, 0],
                    scale: [1, 1.15, 1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeInOut",
                  }}
                  className="text-lg xl:text-xl"
                >
                  🎁
                </motion.span>
                <div className="flex items-center gap-1.5 text-left">
                  <span className="font-['Barlow_Condensed'] text-xs font-black uppercase tracking-wider text-amber-300 whitespace-nowrap">
                    FREE GIFT 🎃
                  </span>
                  <span className="rounded bg-orange-500 px-1.5 py-0.5 font-['Inter'] text-[10px] font-black uppercase text-gray-950 whitespace-nowrap">
                    Bucket
                  </span>
                </div>
              </motion.button>
            )}

            <Button
              variant="primary"
              href={`tel:${business.phone}`}
              className="px-3.5 py-2 text-xs xl:px-4 xl:py-2.5 xl:text-sm whitespace-nowrap shrink-0"
            >
              {business.phone}
            </Button>
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Moving Gift Box 🎁 */}
            {!timeRemaining.isExpired && (
              <motion.button
                type="button"
                onClick={openHalloweenModal}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                title="Click box to claim your Free Halloween Gift"
                aria-label="Click box to claim your Free Halloween Gift"
                className="relative inline-flex size-10 sm:size-11 items-center justify-center rounded-lg border border-amber-400/80 bg-gradient-to-br from-[#210e30] via-[#351547] to-[#160822] text-white shadow-sm transition hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-500 cursor-pointer shrink-0"
              >
                <motion.span
                  animate={{
                    rotate: [0, -12, 12, -8, 8, -4, 0],
                    scale: [1, 1.15, 1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeInOut",
                  }}
                  className="text-xl sm:text-2xl"
                >
                  🎁
                </motion.span>
                <span className="absolute -top-1 -right-1 flex size-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-amber-400 border border-[#210e30]" />
                </span>
              </motion.button>
            )}

            <a
              href={`tel:${business.phone}`}
              aria-label="Call A&R Auto Parts"
              className="inline-flex size-10 sm:size-11 items-center justify-center rounded-lg border border-green-600 text-green-700 transition hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 shrink-0"
            >
              <FiPhone aria-hidden className="size-5" />
            </a>

            <button
              type="button"
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-controls="mobile-navigation"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex size-10 sm:size-11 items-center justify-center rounded-lg bg-green-600 text-white transition hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 shrink-0"
            >
              {isMenuOpen ? (
                <FiX aria-hidden className="size-6" />
              ) : (
                <FiMenu aria-hidden className="size-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className="absolute left-0 top-full w-full border-b border-slate-200 bg-white px-4 py-3 shadow-xl lg:hidden"
            >
              <div className="mx-auto flex max-w-2xl flex-col gap-1">
                {/* Mobile Menu Halloween Offer Banner */}
                {!timeRemaining.isExpired && (
                  <button
                    type="button"
                    onClick={() => {
                      setIsMenuOpen(false);
                      openHalloweenModal();
                    }}
                    className="mb-2 flex items-center justify-between rounded-xl border-2 border-amber-400/80 bg-gradient-to-r from-[#210e30] via-[#351547] to-[#1c0c29] p-3 text-left text-white shadow-md cursor-pointer transition hover:brightness-110"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl animate-bounce">🎁</span>
                      <div>
                        <div className="font-['Barlow_Condensed'] text-sm font-extrabold uppercase tracking-wide text-amber-300">
                          Claim Your Free Halloween Gift
                        </div>
                        <div className="text-xs text-slate-200">
                          Free whole car cleaning bucket with code <strong className="text-amber-200 font-mono">HALO-2026</strong>
                        </div>
                      </div>
                    </div>
                    <span className="rounded-lg bg-orange-500 px-2.5 py-1 text-xs font-black text-gray-950 uppercase">
                      Claim
                    </span>
                  </button>
                )}
                {navItems.filter((item) => item.href !== "/contact").map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex min-h-11 items-center rounded-lg px-4 text-sm uppercase tracking-wide ${navLinkClass(
                        isActive,
                      )} ${isActive ? "bg-green-50" : "hover:bg-slate-50"}`}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <details className="group">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between rounded-lg px-4 font-['Inter'] text-sm font-normal uppercase tracking-wide text-gray-700 transition hover:bg-slate-50 hover:text-green-600 [&::-webkit-details-marker]:hidden">
                    Policies
                    <FiChevronDown
                      aria-hidden
                      className="size-4 transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <div className="ml-4 border-l-2 border-green-100 pl-2">
                    {policyLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex min-h-11 items-center rounded-lg px-4 font-['Inter'] text-sm font-medium text-gray-700 transition hover:bg-green-50 hover:text-green-700"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </details>

                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex min-h-11 items-center rounded-lg px-4 text-sm uppercase tracking-wide ${navLinkClass(
                    pathname === "/contact",
                  )} ${
                    pathname === "/contact"
                      ? "bg-green-50"
                      : "hover:bg-slate-50"
                  }`}
                >
                  Contact
                </Link>

                <Button
                  variant="primary"
                  href={`tel:${business.phone}`}
                  className="mt-2 w-full"
                >
                  Call {business.phone}
                </Button>
              </div>
            </nav>
          )}

        </div>
      </header>
    </>
  );
};

export default Navbar;
