import { FiShield, FiTruck, FiCheckCircle, FiCreditCard, FiTarget, FiHeadphones, FiClock, FiPackage } from "react-icons/fi";



export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Used Engines", href: "/used-engines" },
  { label: "Used Transmissions", href: "/used-transmissions" },
  // { label: "Buying Guides", href: "/guides/how-to-buy-a-used-engine" },
  { label: "Contact", href: "/contact" },
];


export const trustBarItems = [
  {
    title: "Free Nationwide Shipping on All Orders",
    subtitle: "Delivery across the United States",
    icon: FiTruck,
  },
  {
    title: "Tested, Inspected & Guaranteed to Fit",
    subtitle: "Quality checked for vehicle compatibility",
    icon: FiShield,
  },
  {
    title: "Quote in Just 10 Minutes",
    subtitle: "Fast response from a parts specialist",
    icon: FiClock,
  },
  {
    title: "Ship Out  Within 2-3 Days of Order booked.",
    subtitle: "Prompt processing and dispatch updates",
    icon: FiPackage,
  },
];

export const howItWorksData = {
  eyebrow: "Easy & Secure",
  title: "Get The Right Part In 3 Easy Steps",
  description:
    "",
  steps: [
    {
      number: "01",
      title: "Tell Us What You Need",
      description:
        "Share your vehicle year, make, model, VIN, and the part you need so our team can locate the right match.",
    },
    {
      number: "02",
      title: "Confirm & Pay",
      description:
        "We match your vehicle with an A-grade engine or transmission and provide clear pricing and warranty details.",
    },
    {
      number: "03",
      title: "Fast Ship-Out",
      description:
        "Complete your order and we will prepare your engine or transmission for free nationwide shipping.",
    },
  ],
};

export const howItWorksData2 = {
  eyebrow: "FAST & CONVENIENT",
  title: "GET THE RIGHT TRANSMISSION IN 3 STEPS",
  description:
    "Skip the junkyard hassle and let our specialists find the right transmission for your vehicle.",
  steps: [
    {
      number: "01",
      title: "SUBMIT VEHICLE DETAILS",
      description:
        "Share the year, make, model, VIN, and transmission type so we can locate the right match.",
    },
    {
      number: "02",
      title: "CONFIRM & PAY",
      description:
        "We confirm your A-grade transmission, promotional price, delivery, and 3-year limited warranty details.",
    },
    {
      number: "03",
      title: "FAST SHIP-OUT",
      description:
        "Complete your order and we prepare your transmission for fast, free nationwide shipping.",
    },
  ],
};

export const HowitWork2 = {
  eyebrow: "FREE NATIONWIDE SHIPPING",
  title: "FROM OUR NETWORK TO YOUR DOOR",
  description:
    "We make delivery simple, convenient, and cost-effective from order confirmation to arrival.",
  steps: [
    {
      number: "01",
      title: "CHOOSE YOUR LOCATION",
      description:
        "We deliver to eligible homes, repair shops, businesses, and freight terminals nationwide.",
    },
    {
      number: "02",
      title: "SECURE PREPARATION",
      description:
        "Your replacement part is prepared and secured for dependable freight transportation.",
    },
    {
      number: "03",
      title: "TRACK YOUR ORDER",
      description:
        "Receive available carrier and tracking updates as your order moves toward delivery.",
    },
  ],
};

export const whyChooseUsData = {
  eyebrow: "Why Choose Us",
  title: "Quality You Can Trust",
  description: "",
  features: [
    {
      title: "A-Grade Quality",
      description: "Every engine and transmission is inspected and tested to meet our quality standards before shipping.",
      icon: FiShield,
    },
    {
      title: "Large Selection",
      description: "We source used engines and transmissions for a wide range of domestic, Asian, and European vehicles.",
      icon: FiCheckCircle,
    },
    {
      title: "Fitment Support",
      description: "Vehicle details and the VIN help our specialists identify the correct configuration for your replacement part.",
      icon: FiTarget,
    },
    {
      title: "Free Nationwide Shipping",
      description: "Get your replacement engine or transmission delivered nationwide without the junkyard hassle.",
      icon: FiTruck,
    },
    {
      title: "3-Year Limited Warranty",
      description: "Eligible replacement parts include long-term limited warranty protection, subject to the written warranty terms.",
      icon: FiCreditCard,
    },
    {
      title: "Dedicated Support",
      description: "Our parts specialists are ready to answer questions and help throughout your purchase process.",
      icon: FiHeadphones,
    },
  ],
};

export const paymentOptionsData = {
  eyebrow: "Save On Your Order",
  title: "Get More Value From Your Purchase",
  description: "Take advantage of limited-time savings on quality used engines and transmissions.",
  options: [
    {
      title: "20% Off All Powertrain Parts",
      description: "Save 20% on used engine and transmission purchases during our limited-time promotion.",
    },
    {
      title: "Extra $100 Off",
      description: "Save an additional $100 when you complete your purchase through Cash App or Zelle.",
    },
    {
      title: "Free Nationwide Shipping",
      description: "Enjoy Home delivery and dependable delivery for your replacement engine or transmission.",
    },
  ],
};

export const testimonialsData = {
  eyebrow: "Before You Purchase",
  title: "Review The Details That Matter",
  testimonials: [],
};

export const faqData = {
  eyebrow: "Good To Know",
  title: "Questions, Answered",
  faqs: [
    {
      question: "How Do I Place an Order?",
      answer: `You can order in two ways:

- Call our Sales Team at 888 290-4476 — our parts specialists will help you check availability, pricing, and shipping details.
- Order Online (Coming Soon) — We’re launching a secure online ordering system soon.

Accepted Payment Methods:
- All major credit cards: VISA, MasterCard, American Express, Discover
- Cashier’s Check or Money Order (via mail)

Note: Orders paid by check or money order take longer to process.`
    },
    {
      question: "Do You Offer Financing?",
      answer: "Yes, we offer Afterpay, Pay Tomorrow, Acima, and in-house financing options too."
    },
    {
      question: "Can I Pick Up My Parts In Person?",
      answer: `Unfortunately, local pickup is not available.
Our inventory ships from multiple warehouse partners across the U.S.

Good news: All orders ship free anywhere in the U.S.`
    },
    {
      question: "What’s Included with a Used Engine?",
      answer: `Each used engine assembly includes:
- Engine block
- Cylinder head(s)
- Pistons
- Camshaft
- Crankshaft

Bonus parts like sensors or manifolds may be included but are not guaranteed or covered under warranty.`
    },
    {
      question: "How Long Does Shipping Take?",
      answer: `Most orders are delivered within 7–10 business days.
You’ll receive tracking updates after shipment.

Note: Delays may occur due to weather or holidays.`
    },
    {
      question: "Can You Deliver to a Residential Address?",
      answer: `Yes — we deliver to both residential and business addresses nationwide at no extra charge.

Note: $100 surcharge applies if liftgate service is needed.`
    },
    {
      question: "What If My Order Is Damaged, Incorrect, or Defective?",
      answer: `We offer a 30-Day Return & Refund Guarantee.
If your part is:
- Damaged
- Incorrect
- Defective

We’ll cover return shipping and offer a replacement or full refund.
See Returns & Refund Policy page for details.`
    },
    {
      question: "Do You Offer a Warranty on Used Engines & Transmissions?",
      answer: `Yes — all engines and transmissions include up to a 6-month to 3-year warranty. Warranty coverage may vary depending on the part and vehicle.

Call 888 290-4476 to confirm coverage before purchase.`
    },
    {
      question: "What If My Engine or Transmission Fails?",
      answer: `If failure occurs during the warranty period:
1. Call 888 290-4476 immediately.
2. Our technical team will assist with diagnostics.
3. If unresolved, we’ll guide you through the warranty replacement process.

See our Warranty Policy page for details.`
    }
  ]
};

export const footerData = {
  description: "A&R Auto Parts is an online source for quality used engines and transmissions, helping customers find replacement powertrain parts for vehicles nationwide.",
  hours: "Submit your vehicle details online or contact our parts specialists for assistance.",
  emailInquiries: [
    { label: "For Part Inquiries", email: "sales@arautoparts.com" },
    { label: "For Order Tracking Details", email: "shipping@arautoparts.com" },
    { label: "For all other Inquiries", email: "support@arautoparts.com" },
  ],
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Used Engines", href: "/used-engines" },
    { label: "Used Transmissions", href: "/used-transmissions" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Shipping & Warranty", href: "/shipping-warranty" },
    { label: "Refunds & Returns", href: "/refunds-returns" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
  copyright: "© 2026 A&R Auto Parts. All rights reserved.",
  tagline: "Quality used engines and transmissions shipped nationwide.",
};

export const aboutData = {
  eyebrow: "ABOUT A&R AUTO PARTS",
  title: {
    normal1: "PERFORMANCE",
    highlight1: "YOU",
    normal2: "CAN",
    highlight2: "TRUST.",
  },
  description:
    "A&R Auto Parts is a team of used-parts specialists helping customers find quality replacement engines and transmissions. We focus on dependable inventory, honest service, competitive pricing, and a simple buying experience.",
  badges: ["A-grade quality", "Free nationwide shipping", "3-year limited warranty"],
  rating: { stars: 0, text: "Quality parts and dedicated support from search to delivery." },
};

export const trustBarData = [
  {
    title: "A-GRADE QUALITY",
    subtitle: "Tested and inspected",
    icon: "warranty",
  },
  {
    title: "Home delivery",
    subtitle: "Nationwide delivery",
    icon: "shipping",
  },
  {
    title: "3-YEAR LIMITED WARRANTY",
    subtitle: "Written terms apply",
    icon: "tested",
  },
  {
    title: "20% OFF",
    subtitle: "Limited-time savings",
    icon: "financing",
  },
];

export const WHOWEARE = {
  eyebrow: "WHO WE ARE",
  title: "YOUR TRUSTED POWERTRAIN PARTNER",
  description: "A&R Auto Parts makes it easy to find quality used engines and transmissions without searching multiple junkyards.",
  steps: [
    {
      number: "01",
      title: "EXPERT PART MATCHING",
      description: "Our specialists use your vehicle information to locate the right engine or transmission.",
    },
    {
      number: "02",
      title: "QUALITY & VALUE",
      description: "Get an A-grade replacement part at a competitive promotional price.",
    },
    {
      number: "03",
      title: "DELIVERY & PROTECTION",
      description: "Enjoy nationwide delivery and eligible 3-year limited warranty protection.",
    },
  ],
};

export const HowitWork1 = {
  eyebrow: "FAST & CONVENIENT",
  title: "GET THE RIGHT ENGINE IN 3 STEPS",
  description:
    "Skip the junkyard hassle and let our specialists find the right replacement engine for you.",
  steps: [
    {
      number: "01",
      title: "SUBMIT VEHICLE DETAILS",
      description:
        "Share the year, make, model, engine details, and VIN so we can locate the right match.",
    },
    {
      number: "02",
      title: "CONFIRM & PAY",
      description:
        "We confirm your A-grade engine, promotional price, delivery, and 3-year limited warranty details.",
    },
    {
      number: "03",
      title: "FAST SHIP-OUT",
      description:
        "Complete your order and we prepare your engine for fast, free nationwide shipping.",
    },
  ],
};

export const standards = [
  {
    title: "3-YEAR LIMITED WARRANTY",
    description: "Eligible replacement parts include long-term protection subject to the written warranty terms.",
    icon: FiShield,
  },
  {
    title: "A-GRADE QUALITY",
    description: "Our used engines and transmissions are inspected and tested before shipping.",
    icon: FiCheckCircle,
  },
  {
    title: "ACCURATE PART MATCHING",
    description: "Our specialists use your vehicle details and VIN to locate the right configuration.",
    icon: FiTarget,
  },
  {
    title: "Home delivery",
    description: "Convenient nationwide delivery saves you time, travel, and junkyard hassle.",
    icon: FiTruck,
  },
  {
    title: "FLEXIBLE PAYMENT OPTIONS",
    description: "Multiple payment options available.",
    icon: FiCreditCard,
  },
  {
    title: "EXPERIENCED PARTS SPECIALISTS",
    description: "Talk directly with knowledgeable specialists throughout your purchase.",
    icon: FiHeadphones,
  },
];
