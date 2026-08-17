"use client";

import QuoteForm from "@/components/sheard/QuoteForm";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Image from "next/image";
import { Fullscreen } from "lucide-react";

const ContactContent = () => {
  return (
    <section className="bg-slate-50 px-5 py-16 sm:py-20 ">
      <div className="container mx-auto grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <QuoteForm />

        <aside className="flex w-full flex-col gap-4">
          <ContactCard icon={FiMapPin} title="Our Address">
            <address className="not-italic">
              9801 Westheimer Rd, Suite # 444, Houston TX 77042
            </address>
          </ContactCard>

          <ContactCard icon={FiMail} title="Email Us">
            <a
              href="mailto:info@yardsandparts.us"
              className="transition-colors duration-200 hover:text-green-600"
            >
              info@yardsandparts.us
            </a>
          </ContactCard>

          <ContactCard icon={FiPhone} title="Call Us">
            <a
              href="tel:+18554306250"
              className="transition-colors duration-200 hover:text-green-600"
            >
              855-430-6250
            </a>
          </ContactCard>
        </aside>
      </div>
    </section>
  );
};

type CardProps = {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  bordered?: boolean;
};

function ContactCard({
  icon: Icon,
  title,
  children,
  bordered = true,
}: CardProps) {
  return (
    <div
      className={`flex items-center gap-4 rounded-xl bg-[#F5F5F5] py-4 px-4 ${
        bordered
          ? "border border-slate-200 shadow-[0_2px_8px_rgba(15,23,42,0.04)]"
          : ""
      }`}
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-100">
        <Icon className="size-6 text-green-600" />
      </div>

      <div className="min-w-0">
        <p className="font-['Inter'] text-sm font-semibold text-slate-500">
          {title}
        </p>

        <div className="mt-1 font-['Barlow_Condensed'] text-2xl font-bold leading-7 text-slate-900">
          {children}
        </div>
      </div>
    </div>
  );
}

export default ContactContent;
