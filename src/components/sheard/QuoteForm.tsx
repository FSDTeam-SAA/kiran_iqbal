"use client";

import { FormEvent, InputHTMLAttributes, useState } from "react";
import Button from "@/components/ui/button";

interface QuoteFormProps {
  title?: string;
  badge?: string;
  description?: string;
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
}

const yearOptions = [
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
];

const makeOptions = [
  "Ford",
  "Chevrolet",
  "GMC",
  "Dodge",
  "Ram",
  "Jeep",
  "Toyota",
  "Honda",
  "Nissan",
  "Hyundai",
  "Kia",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Other",
];

const modelOptions = [
  "F-150",
  "Silverado",
  "Sierra",
  "Ram 1500",
  "Wrangler",
  "Camry",
  "Civic",
  "Accord",
  "Altima",
  "Other",
];

const partOptions = [
  "Used Engine",
  "Used Transmission",
  "Engine",
  "Transmission",
  "Other Part",
];

export default function QuoteForm({
  title = "Get Your Quote",
  badge = "Under 2 Min",
  description = "Tell us about your vehicle and we’ll get you a firm price fast.",
  onSubmit,
  className = "",
}: QuoteFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState<QuoteFormData>({
    year: "",
    make: "",
    model: "",
    part: "",
    name: "",
    phone: "",
    email: "",
    consent: false,
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

  const submitQuote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit?.(formData);
    setIsSubmitted(true);
  };

  return (
    <form
      id="quote"
      onSubmit={submitQuote}
      className={`w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_15px_rgba(0,0,0,0.08)] sm:p-7 ${className}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-['Barlow_Condensed'] text-4xl font-extrabold uppercase leading-none tracking-wide text-neutral-950">
          {title}
        </h2>

        <span className="shrink-0 rounded-full border border-green-700 px-3 py-1 font-['Barlow_Condensed'] text-[11px] font-bold uppercase tracking-wide text-green-700">
          {badge}
        </span>
      </div>

      <p className="mt-2 text-sm leading-6 text-neutral-600">{description}</p>

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
          options={makeOptions}
          placeholder="Select Make"
          onChange={(value) => updateField("make", value)}
        />

        <SelectField
          id="quote-model"
          label="Model"
          value={formData.model}
          options={modelOptions}
          placeholder="Select Model"
          onChange={(value) => updateField("model", value)}
        />

        <SelectField
          id="quote-part"
          label="Part"
          value={formData.part}
          options={partOptions}
          placeholder="Select Part"
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
          By checking this box, I agree to receive text messages and calls from
          A&amp;R Auto Parts about my quote request. Message and data rates may
          apply. Reply STOP to opt out.
        </span>
      </label>

      <div className="mt-5">
        <Button variant="primary" type="submit" className="w-full">
          {isSubmitted ? "Quote Requested" : "Get My Free Quote"}
        </Button>
      </div>

      <p
        aria-live="polite"
        className={`mt-4 text-center text-xs font-semibold ${
          isSubmitted ? "text-green-700" : "text-neutral-500"
        }`}
      >
        {isSubmitted
          ? "Thanks — a parts specialist will contact you shortly."
          : "We respect your privacy and never share your information."}
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
  onChange: (value: string) => void;
}

function SelectField({
  id,
  label,
  value,
  options,
  placeholder,
  onChange,
}: SelectFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>

      <select
        id={id}
        value={value}
        required
        onChange={(event) => onChange(event.target.value)}
        className="min-h-12 w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 px-4 text-sm text-neutral-700 outline-none transition-all duration-200 hover:border-green-600/40 focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100"
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
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
      <label htmlFor={id} className="sr-only">
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
