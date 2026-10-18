"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiChevronDown, FiMenu, FiPhone, FiX } from "react-icons/fi";
import Button from "@/components/ui/button";
import { navItems } from "@/Content/data";
import { business } from "@/lib/business";

const logo = "/logo1.png";
const policyLinks = [
  { label: "Shipping & Warranty", href: "/shipping-warranty" },
  { label: "Refunds & Returns", href: "/refunds-returns" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClass = (isActive: boolean) =>
    `font-['Inter'] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-600 ${
      isActive
        ? "font-bold text-green-600"
        : "font-normal text-gray-700 hover:text-green-600"
    }`;

  return (
    <>
      {/* Shipping Ticker */}
      <div className="w-full overflow-hidden bg-green-600">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="flex items-center gap-10 py-2 pr-10">
              <div className="flex items-center gap-2">
                <span className="size-1.5 shrink-0 rounded-full bg-stone-50/70" />

                {/* <span className="font-['Barlow_Condensed'] text-sm font-bold uppercase leading-5 tracking-wide text-stone-50 sm:text-base">
                  Home delivery • 20% Off Engines & Transmissions
                </span> */}
              </div>

              <div className="flex items-center gap-2">
                {/* <span className="size-1.5 shrink-0 rounded-full bg-stone-50/70" /> */}

                <span className="font-['Barlow_Condensed'] text-sm font-bold uppercase leading-5 tracking-wide text-stone-50 sm:text-base">
                  {/* A-Grade Quality • 3-Year Limited Warranty • Extra $100 Off with Cash App or Zelle */}
                  {/* Exciting News! Let’s  celebrate our launch, Avail  free shipping on all orders -Both Commercial and Residential. Use Promo Code LAUNCH-18 when booking your order over the phone. */}
                  50% less Dealers Price With Free Shipping - Extented warranty up to 3 years  and In house Financing Options . Call For quick Quote - 888 290 4476 .
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
            className="hidden items-center gap-4 lg:flex xl:gap-7"
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

            <Button
              variant="primary"
              href={`tel:${business.phone}`}
              className="px-4 py-2.5"
            >
              {business.phone}
            </Button>
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${business.phone}`}
              aria-label="Call A&R Auto Parts"
              className="inline-flex size-11 items-center justify-center rounded-lg border border-green-600 text-green-700 transition hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
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
              className="inline-flex size-11 items-center justify-center rounded-lg bg-green-600 text-white transition hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
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
