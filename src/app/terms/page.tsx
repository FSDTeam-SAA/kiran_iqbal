import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { business } from "@/lib/business";

export const metadata: Metadata = pageMetadata(
  "Terms of Use",
  "Terms that govern quote requests and website use at A&R Auto Parts.",
  "/terms",
);

export default function TermsPage() {
  return (
    <main className="bg-slate-50 px-5 py-16 sm:py-20">
      <article className="container mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
          A&R Auto Parts
        </p>

        <h1 className="mt-3 font-['Barlow_Condensed'] text-5xl font-extrabold uppercase text-gray-900">
          Terms of Use
        </h1>

        <p className="mt-3 text-sm text-slate-600">
          Last updated: September 3, 2026
        </p>

        <div className="mt-8 space-y-7 text-slate-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Quote requests
            </h2>

            <p className="mt-2">
              A quote request is an inquiry, not an offer to sell or a
              reservation. Part availability, compatibility, condition, price,
              delivery options, fees, warranty terms, and taxes are confirmed
              in the written quote for the specific part.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Vehicle information
            </h2>

            <p className="mt-2">
              Provide accurate vehicle details. A VIN, part number, or other
              identifying information may be needed to review compatibility.
              You remain responsible for reviewing the written quote and
              fitment information before purchase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              SMS Communications
            </h2>

            <p className="mt-2">
              By opting into SMS from a web form, you are agreeing to receive
              SMS messages from A&R AUTO PARTS LLC. This includes SMS messages
              for conversations (external). Message frequency varies. Message
              and data rates may apply. See privacy policy at{" "}
              <Link
                href="/privacy-policy"
                className="text-green-700 underline"
              >
                https://www.arautoparts.com/privacy-policy
              </Link>
              . Message HELP for help. Reply STOP to any message to opt out.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Policies and questions
            </h2>

            <p className="mt-2">
              Warranty, delivery, inspection, return, and cancellation terms
              vary by quoted part and are governed by the applicable written
              documentation. Review our{" "}
              <Link
                className="text-green-700 underline"
                href="/shipping-warranty"
              >
                Shipping & Warranty
              </Link>
              ,{" "}
              <Link
                className="text-green-700 underline"
                href="/refunds-returns"
              >
                Refunds & Returns
              </Link>
              , and{" "}
              <Link
                className="text-green-700 underline"
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>{" "}
              before purchase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">Contact</h2>

            <p className="mt-2">
              Questions about these terms can be sent through our{" "}
              <Link className="text-green-700 underline" href="/contact">
                contact page
              </Link>
              {business.email ? ` or ${business.email}` : ""}.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
