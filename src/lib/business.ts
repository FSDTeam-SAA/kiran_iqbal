export const business = {
  name: "A&R Auto Parts",
  description:
    "A&R Auto Parts supplies quality used engines and transmissions for cars, trucks, and SUVs across the United States.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kiran-iqbal.vercel.app",
  serviceArea: "United States",
  // Add verified values in the deployment environment before enabling ads.
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE ?? "888 290-4476",
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL ?? "Sales@arautoparts.com",
  emails: {
    parts: "Sales@arautoparts.com",
    tracking: "Shipping@arautoparts.com",
    support: "Support@arautoparts.com",
  },
  address:
    process.env.NEXT_PUBLIC_BUSINESS_ADDRESS ??
    " ST. PETERSBURG, FL. US 33702",
} as const;

export const approvedClaims = {
  availability: "Parts and delivery options are confirmed in your quote.",
  fitment:
    "Vehicle details, including VIN when available, help our team review compatibility before a quote is finalized.",
  warranty:
    "Warranty availability, duration, coverage, exclusions, and claim steps are provided in writing for the specific quoted part.",
  shipping:
    "Shipping timing, freight requirements, delivery location, and charges depend on the quoted part and destination.",
  pricing:
    "A quote identifies the part price and applicable shipping, taxes, fees, and any refundable core charge before payment.",
} as const;
