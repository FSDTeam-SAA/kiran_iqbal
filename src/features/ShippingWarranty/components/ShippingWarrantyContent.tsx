"use client";

import { useState } from "react";
import {
  FiCheckCircle,
  FiChevronDown,
  FiClock,
  FiMapPin,
  FiPackage,
  FiShield,
  FiTruck,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import { RxCrossCircled } from "react-icons/rx";

const process = [
  {
    number: "01",
    title: "Reservation & Payment",
    text: "Your unit is reserved and prepared as soon as payment is confirmed.",
  },
  {
    number: "02",
    title: "Confirmed Delivery",
    text: "Our team verifies the order and coordinates the shipment.",
  },
  {
    number: "03",
    title: "Tracking Information",
    text: "You receive shipment details as your order moves through delivery.",
  },
];
const deliverySteps = [
  "Confirm Your Order",
  "Parts Preparation",
  "Shipment",
  "Delivery",
];
const deliveryExpectations: { title: string; text: string; icon: IconType }[] =
  [
    {
      title: "Shipping Time",
      text: "Timing is confirmed in the written quote for your part and destination.",
      icon: FiClock,
    },
    {
      title: "Freight Delivery",
      text: "Multiple shipping methods ensure our delivery process runs efficiently.",
      icon: FiTruck,
    },
    {
      title: "Delivery Location",
      text: "Eligible delivery locations and freight requirements are identified in your quote.",
      icon: FiMapPin,
    },
    {
      title: "Inspection At Delivery",
      text: "Inspect freight before signing, and record visible damage on the delivery receipt.",
      icon: FiPackage,
    },
    {
      title: "Safe Handling",
      text: "Keep the packaging and delivery records until the part has been inspected.",
      icon: FiShield,
    },
    {
      title: "Professional Service",
      text: "Use the reporting instructions in your order documentation if you have a concern.",
      icon: FiCheckCircle,
    },
  ];
const exclusions = [
  "The exact coverage and duration shown in the written quote",
  "Required installation or maintenance conditions",
  "Any exclusions that apply to the specific quoted part",
  "The claim-reporting process and deadlines",
];
const questions = [
  "How do I place an order?",
  "Do you ship nationwide?",
  "Can I pick up parts in person?",
  "What's included with a used engine?",
  "Can you ship to a business address?",
  "Can you ship to a residential address?",
  "What if my order is damaged, incorrect, or defective?",
  "Do you offer a warranty on used engines & transmissions?",
  "What if my engine or transmission fails?",
];

const policySections = [
  {
    title: "Coverage and Exclusions",
    items: [
      "Engine coverage applies to the supplied block, cylinder heads, and covered internal components. The block and heads are covered only when damaged by a covered internal component.",
      "Turbochargers are separate components. Bolt-on accessories, wiring, sensors, electronics, belts, hoses, pumps, manifolds, harnesses, covers, brackets, flywheels, injectors, and high-pressure fuel or oil components are not covered unless expressly listed in writing.",
      "Leaks from seals or gaskets, appearance, mileage, and damage caused by seals, gaskets, filters, lubrication, or cooling-system issues are not warranted.",
      "Any attached accessories are supplied for convenience and are not part of the covered engine assembly.",
    ],
  },
  {
    title: "Activation and Duration",
    items: [
      "The part must be installed and coverage activated within 10 business days after delivery.",
      "Unless a different written option was purchased, engines receive a 6-month parts-only limited warranty and other parts receive a 3-month parts-only limited warranty, measured from purchase and installation.",
      "Available written options may include 60 months/50,000 miles, 36 months/36,000 miles, or 12 months/12,000 miles, whichever limit occurs first. The option shown on the order controls.",
      "Coverage is parts-only. Labor and customer-arranged labor are not reimbursed.",
    ],
  },
  {
    title: "Mandatory Installation and Maintenance",
    items: [
      "Installation must be completed by an ASE-certified mechanic or licensed professional repair facility, with commercial service records retained.",
      "Install a new thermostat and applicable timing belt, replace required seals, gaskets, filters, fluids, and service components, and follow the vehicle manufacturer’s procedures.",
      "Change the engine oil and filter after the first 1,000 miles, then follow the manufacturer’s maintenance schedule.",
      "The oil-pressure and temperature warning systems and speedometer must operate correctly. Handwritten maintenance records are not accepted for claims.",
    ],
  },
  {
    title: "Claims and Conditions That Void Coverage",
    items: [
      "Stop operating the vehicle after a problem is identified and contact A&R Auto Parts before authorizing diagnosis, repair, or disassembly.",
      "A diagnostic report from an ASE-certified facility and all requested documents must be submitted within 5 business days after a claim begins.",
      "Unauthorized disassembly, improper installation, racing use, overheating, insufficient lubrication or cooling, missing or melted heat tabs, continued operation, or false information voids coverage.",
      "Returned units must remain assembled in the condition received unless A&R Auto Parts gives prior written authorization.",
    ],
  },
  {
    title: "Shipping, Damage, and Delivery",
    items: [
      "Orders ordinarily ship within 7–14 business days, subject to availability, preparation, carrier schedules, and destination.",
      "Residential delivery carries a $150 charge unless a different written agreement applies. Freight-collect shipments are not accepted.",
      "Shipping damage or broken items must be reported to A&R Auto Parts and the freight carrier within 48 hours. Visible damage must be written on the delivery receipt or bill of lading.",
      "Returns, defective-item pickups, and core pickups must originate from the original shipping address.",
    ],
  },
  {
    title: "Core Returns and Limited Liability",
    items: [
      "When a core charge applies, the customer is responsible for return freight and the core must be returned within 30 days.",
      "No core refund is available for a disassembled core or a block/head with cracks or holes.",
      "Liability is limited to the available policy remedy. Labor, fluids, towing, freight, lost time or profit, rental transportation, and consequential or incidental losses are not covered.",
    ],
  },
];

const ShippingWarrantyContent = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);
  return (
    <>
      <section className="bg-slate-50 px-5 py-16 sm:py-20">
        <div className="container mx-auto text-center">
          <p className="font-['Barlow_Condensed'] text-sm font-bold uppercase tracking-[0.18em] text-green-600">
            Our Shipping Process
          </p>
          <h2 className="mt-3 font-['Barlow_Condensed'] text-4xl font-extrabold uppercase leading-none text-gray-900 sm:text-5xl">
            From Order To Delivery In{" "}
            <span className="text-green-600">4 Simple Steps</span>
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {deliverySteps.map((step, index) => (
              <article
                key={step}
                className="rounded-xl bg-white p-6 text-left shadow-sm"
              >
                <span className="font-['Barlow_Condensed'] text-3xl font-extrabold text-green-600">
                  0{index + 1}
                </span>
                <h3 className="mt-3 font-['Barlow_Condensed'] text-xl font-bold uppercase text-gray-900">
                  {step}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  We keep the process clear and send updates as your order
                  progresses.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full border-t border-b border-gray-200 bg-gray-50 px-6 py-16 lg:px-20 lg:py-20">
        <div className="container mx-auto flex w-full flex-col items-center gap-10">
          {/* Header */}
          <div className="flex w-full flex-col items-center gap-3 text-center">
            <span className="font-['Barlow_Condensed'] text-base font-bold uppercase leading-5 tracking-widest text-green-600">
              SHIPPING DETAILS
            </span>

            <h2 className="font-['Barlow_Condensed'] text-4xl font-extrabold uppercase leading-tight text-gray-900 md:text-5xl">
              WHAT TO EXPECT WITH{" "}
              <span className="text-green-600">YOUR DELIVERY</span>
            </h2>
          </div>

          {/* Cards */}
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deliveryExpectations.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="group flex flex-col items-start gap-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-600/40 hover:shadow-[0_8px_20px_rgba(22,163,74,0.06)]"
              >
                {/* Icon */}
                <div className="flex size-10 shrink-0 items-center justify-center rounded-[10px] bg-green-100 text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white group-hover:shadow-[0_4px_12px_rgba(22,163,74,0.15)]">
                  <Icon aria-hidden className="size-5 stroke-2" />
                </div>

                {/* Content */}
                <div className="flex flex-col items-start gap-2">
                  <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase leading-5 text-gray-900 transition-colors duration-200 group-hover:text-green-600">
                    {title}
                  </h3>

                  <p className="font-['Inter'] text-base font-normal leading-5 text-gray-600">
                    {text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full border-t border-b border-gray-200 bg-white px-6 py-16 lg:px-20 lg:py-20">
        <div className="mx-auto flex w-full max-w-300 flex-col items-center gap-6">
          {/* Header */}
          <div className="flex w-full flex-col items-center gap-5 text-center">
            <p className="font-['Barlow_Condensed'] text-base font-bold uppercase leading-5 tracking-widest text-green-600">
              Warranty Exclusions
            </p>

            <h2 className="font-['Barlow_Condensed'] text-4xl font-bold uppercase leading-tight text-gray-900 sm:text-5xl">
              Know What Is <span className="text-green-600">Not Covered</span>
            </h2>
          </div>

          {/* Exclusions Card */}
          <div className="w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_4px_12px_rgba(0,0,0,0.03)] sm:p-8">
            <div className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
              {exclusions.map((item) => (
                <div
                  key={item}
                  className="group flex items-start gap-2 transition-colors duration-300"
                >
                  <RxCrossCircled
                    aria-hidden
                    className="mt-0.5 size-4 shrink-0 text-green-600 transition-transform duration-300 group-hover:scale-110"
                  />

                  <span className="font-['Inter'] text-base font-normal leading-5 text-slate-900">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Note */}
          <p className="text-center font-['Inter'] text-base font-normal leading-5 text-gray-600">
            Warranty availability, coverage, exclusions, and claim steps vary by part. Refer to the written documentation associated with your quote and order.
          </p>
        </div>
      </section>
      <section className="bg-slate-50 px-5 py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-['Barlow_Condensed'] text-sm font-bold uppercase tracking-[0.18em] text-green-600">
              Complete Policy Terms
            </p>
            <h2 className="mt-3 font-['Barlow_Condensed'] text-4xl font-extrabold uppercase text-gray-900 sm:text-5xl">
              Shipping &amp; Warranty Requirements
            </h2>
          </div>
          <div className="mt-10 space-y-5">
            {policySections.map((section) => (
              <article key={section.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase text-gray-900">
                  {section.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 font-['Inter'] text-sm leading-6 text-slate-600 sm:text-base">
                      <FiCheckCircle aria-hidden className="mt-1 size-4 shrink-0 text-green-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center font-['Inter'] text-sm leading-6 text-slate-500">
            The written quote, invoice, selected coverage option, and order documentation govern the specific transaction if they differ from this general summary.
          </p>
        </div>
      </section>
    </>
  );
};

export default ShippingWarrantyContent;
