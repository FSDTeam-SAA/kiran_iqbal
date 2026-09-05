"use client";

import { FormEvent, InputHTMLAttributes, useState } from "react";
import Link from "next/link";
import { ChevronDown, Phone } from "lucide-react";
import { toast } from "sonner";
import Button from "@/components/ui/button";
import { approvedClaims, business } from "@/lib/business";
import {
  makeOptions as referenceMakeOptions,
  modelsByMake as referenceModelsByMake,
} from "@/data/vehicleOptions";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

interface QuoteFormProps {
  title?: string;
  badge?: string;
  description?: string;
  initialMake?: string;
  initialPart?: string;
  onSubmit?: (data: QuoteFormData) => void;
  className?: string;
}

export interface QuoteFormData {
  year: string;
  make: string;
  model: string;
  part: string;
  name: string;
  phone: string;
  email: string;
  consent: boolean;
  website?: string;
}

const yearOptions = [
  "2027",
  "2026",
  "2025",
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2014",
  "2013",
  "2012",
  "2011",
  "2010",
  "2009",
  "2008",
  "2007",
  "2006",
  "2005",
  "2004",
  "2003",
  "2002",
  "2001",
  "2000",
  "1999",
  "1998",
  "1997",
  "1996",
  "1995",
  "1994",
  "1993",
  "1992",
  "1991",
  "1990",
];

const partOptions = [
  "Engine",
  "Transmission",
];

export default function QuoteForm({
  title = "Find Your Part",
  badge = "Fast & Easy",
  description = "Tell us about your vehicle and our specialists will locate the right engine or transmission for you.",
  initialMake = "",
  initialPart = "",
  onSubmit,
  className = "",
}: QuoteFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState<QuoteFormData>({
    year: "",
    make: initialMake,
    model: "",
    part: initialPart,
    name: "",
    phone: "",
    email: "",
    consent: false,
    website: "",
  });

  const updateField = <K extends keyof QuoteFormData>(
    field: K,
    value: QuoteFormData[K],
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  const submitQuote = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState("loading");
    setMessage("");
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok)
        throw new Error(result.message ?? "Unable to send your request.");
      onSubmit?.(formData);
      const {
        year,
        make,
        model: mode,
        part: parts,
      } = formData;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        "event": "generate_lead",
        "form_name": "Inbound Lead Form",
        "user_data": {
          "email": formData.email.trim(),
          "phone_number": formData.phone.trim(),
          "address": {
            year,
            make,
            mode,
            parts,
            "country": "US",
          },
        },
      });
      setIsSubmitted(true);
      setSubmitState("success");
      const successMessage =
        result.message ?? "Thanks. Your request was sent successfully.";
      setMessage(successMessage);
      toast.success("Quote request submitted", {
        description: successMessage,
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unable to send your request.";
      setSubmitState("error");
      setMessage(errorMessage);
      toast.error("Quote request failed", {
        description: errorMessage,
      });
    }
  };
  const [submitState, setSubmitState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  return (
    <form
      id="quote"
      onSubmit={submitQuote}
      className={`w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_15px_rgba(0,0,0,0.08)] sm:p-7 ${className}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-['Barlow_Condensed'] text-4xl font-extrabold uppercase leading-none tracking-wide text-gray-900">
          {title}
        </h2>

        {badge === "Fast & Easy" ? (
          <a
            href={`tel:${business.phone}`}
            aria-label={`Call A&R Auto Parts at ${business.phone}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-green-600 px-4 py-2 font-['Barlow_Condensed'] text-sm font-bold uppercase tracking-wide text-white shadow-sm transition hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            <Phone aria-hidden className="size-4" />
            Call {business.phone}
          </a>
        ) : (
          <span className="shrink-0 rounded-full border border-green-700 px-3 py-1 font-['Barlow_Condensed'] text-[11px] font-bold uppercase tracking-wide text-green-700">
            {badge}
          </span>
        )}
      </div>

      <p className="mt-2 text-sm leading-6 text-neutral-600">
        {description} {approvedClaims.availability}
      </p>
      <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-emerald-700">
        All fields are required
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <SelectField
          id="quote-year"
          label="Year"
          value={formData.year}
          options={yearOptions}
          placeholder="Select Year"
          onChange={(value) => updateField("year", value)}
        />

        <SelectField
          id="quote-make"
          label="Make"
          value={formData.make}
          options={referenceMakeOptions}
          placeholder="Select Make"
          onChange={(value) =>
            setFormData((previous) => ({
              ...previous,
              make: value,
              model: "",
              part: initialPart,
            }))
          }
        />

        <SelectField
          id="quote-model"
          label="Model"
          value={formData.model}
          options={referenceModelsByMake[formData.make] ?? []}
          placeholder={formData.make ? "Select Model" : "Select Make First"}
          disabled={!formData.make}
          onChange={(value) =>
            setFormData((previous) => ({
              ...previous,
              model: value,
              part: initialPart,
            }))
          }
        />

        <SelectField
          id="quote-part"
          label="Part"
          value={formData.part}
          options={partOptions}
          placeholder={formData.model ? "Select Part" : "Select Model First"}
          disabled={!formData.model}
          onChange={(value) => updateField("part", value)}
        />
      </div>

      <div className="mt-3 grid gap-3">
        <InputField
          id="quote-name"
          label="Full Name"
          type="text"
          placeholder="Full Name"
          value={formData.name}
          autoComplete="name"
          onChange={(value) => updateField("name", value)}
        />

        <div className="grid gap-3 sm:grid-cols-2">
          <InputField
            id="quote-phone"
            label="Phone Number"
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            autoComplete="tel"
            onChange={(value) => updateField("phone", value)}
          />

          <InputField
            id="quote-email"
            label="Email Address"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            autoComplete="email"
            onChange={(value) => updateField("email", value)}
          />
        </div>

        <input
          aria-hidden="true"
          tabIndex={-1}
          autoComplete="off"
          name="website"
          value={formData.website}
          onChange={(event) => updateField("website", event.target.value)}
          className="hidden"
        />
      </div>

      <label className="mt-4 flex cursor-pointer items-start gap-3 text-xs leading-5 text-neutral-600">
        <input
          type="checkbox"
          required
          checked={formData.consent}
          onChange={(event) => updateField("consent", event.target.checked)}
          className="mt-0.5 size-4 shrink-0 cursor-pointer accent-green-600"
        />

        <span>
          By checking this box, you are agreeing to receive SMS messages from
          A&amp;R AUTO PARTS LLC. This includes SMS messages for conversations
          (external). Message frequency varies. Message and data rates may
          apply. See privacy policy at{" "}
          <Link className="text-green-700 underline" href="/privacy-policy">
            https://www.arautoparts.com/privacy-policy
          </Link>
          . Message HELP for help. Reply STOP to any message to opt out.
        </span>
      </label>

      <div className="mt-5">
        <Button
          variant="primary"
          showIcon={false}
          type="submit"
          className="w-full"
          disabled={submitState === "loading"}
        >
          {submitState === "loading"
            ? "Sending Request…"
            : isSubmitted
              ? "Part Request Sent"
              : "Find My Part"}
        </Button>
      </div>

      <p
        aria-live="polite"
        className={`mt-4 text-center text-xs font-semibold ${submitState === "error" ? "text-red-700" : submitState === "success" ? "text-green-700" : "text-neutral-500"}`}
      >
        {message}
      </p>
    </form>
  );
}

interface SelectFieldProps {
  id: string;
  label: string;
  value: string;
  options: string[];
  placeholder: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}

function SelectField({
  id,
  label,
  value,
  options,
  placeholder,
  disabled = false,
  onChange,
}: SelectFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-700"
      >
        {label}
      </label>

      <div className="relative">
        <select
          id={id}
          required
          disabled={disabled}
          value={value}
          aria-label={label}
          onChange={(event) => onChange(event.target.value)}
          className={`h-12 w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 px-4 pr-11 text-sm outline-none transition-all duration-200 focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400 ${disabled ? "cursor-not-allowed" : "cursor-pointer hover:border-green-600/40"} ${value ? "text-neutral-800" : "text-neutral-500"}`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option} className="text-neutral-800">
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-neutral-500"
        />
      </div>
    </div>
  );
}

interface InputFieldProps {
  id: string;
  label: string;
  type: InputHTMLAttributes<HTMLInputElement>["type"];
  placeholder: string;
  value: string;
  autoComplete?: string;
  onChange: (value: string) => void;
}

function InputField({
  id,
  label,
  type,
  placeholder,
  value,
  autoComplete,
  onChange,
}: InputFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-700"
      >
        {label}
      </label>

      <input
        id={id}
        required
        type={type}
        value={value}
        autoComplete={autoComplete}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 text-sm text-neutral-800 outline-none transition-all duration-200 placeholder:text-neutral-500 hover:border-green-600/40 focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100"
      />
    </div>
  );
}
