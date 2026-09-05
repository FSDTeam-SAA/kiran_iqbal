type PolicySection = {
  title: string;
  paragraphs: string[];
  items?: string[];
};

const policySections: PolicySection[] = [
  {
    title: "Our Commitment to Your Privacy",
    paragraphs: [
      "Privacy is a key component in our business. We want you to know exactly how we collect, use, and protect your information. This Privacy Policy explains the information we may collect when you use our website and services, how we use it, and the choices available to you.",
    ],
  },
  {
    title: "The Personal Data We Collect",
    paragraphs: [
      "We may collect information you provide directly to us, including your name, mailing address, email address, telephone number, vehicle information, and order details. We may also collect information automatically when you use our website, such as device, browser, and usage information.",
    ],
    items: [
      "Name and contact details",
      "Vehicle, fitment, and order information",
      "Payment and transaction details",
      "Website and device usage information",
    ],
  },
  {
    title: "How We Use Your Data",
    paragraphs: [
      "We use personal information to operate our business, provide our services, communicate with you, and improve the customer experience.",
    ],
    items: [
      "Fulfilling orders",
      "Delivering packages",
      "Sending A&R Auto Parts marketing communications",
      "Conducting research and analysis",
      "Processing credit card payments",
      "Providing chat functions",
    ],
  },
  {
    title: "Automated Processing",
    paragraphs: [
      "We may use automated processes to help prevent fraud, improve site performance, personalize communications, and provide efficient customer support. These processes are designed to support our services and do not replace appropriate human review where required.",
    ],
  },
  {
    title: "Cookies & Similar Technologies",
    paragraphs: [
      "We use cookies and similar technologies to make our website work, remember preferences, understand site usage, and improve performance. You can control cookies through your browser settings, though some site features may not work correctly if cookies are disabled.",
    ],
  },
  {
    title: "Your Privacy Choices",
    paragraphs: [
      "You have choices regarding your personal information and communications preferences.",
    ],
    items: [
      "Request access to the personal information we hold about you",
      "Opt out of marketing communications at any time",
      "Request information about how your data is used",
      "Contact the company with any privacy questions or concerns",
    ],
  },
  {
    title: "How We Share Your Information",
    paragraphs: [
      "We may share information with service providers that help us operate our business, including payment processors, shipping carriers, analytics providers, and customer-support tools. We may also disclose information when required by law or to protect the rights, property, or safety of A&R Auto Parts, our customers, or others.",
      "SMS consent is not shared with third parties.",
    ],
  },
  {
    title: "SMS Communications",
    paragraphs: [
      "If you provide consent to receive SMS messages from A&R Auto Parts LLC, we may use your telephone number to communicate with you regarding conversations, inquiries, customer service, and other communications you have requested or agreed to receive.",
      "Message frequency may vary. Message and data rates may apply. You may reply HELP for help or reply STOP to any message to opt out.",
      "Your decision to provide SMS consent is voluntary, and SMS consent is not shared with third parties.",
    ],
  },
  {
    title: "Third-Party Service Providers",
    paragraphs: [
      "Third-party providers may process information on our behalf only as necessary to provide their services. They are expected to protect information in accordance with applicable requirements and their contractual obligations.",
      "For clarity, SMS consent is not shared with third parties.",
    ],
  },
  {
    title: "Legal Requests",
    paragraphs: [
      "A&R Auto Parts cooperates with law enforcement inquiries and other lawful requests. We may disclose information when we believe it is necessary or appropriate in connection with an investigation of fraud, intellectual property infringement, or other unlawful activity.",
    ],
  },
  {
    title: "Children's Privacy",
    paragraphs: [
      "Our website is intended for general consumers and is not directed to children. A&R Auto Parts does not knowingly collect personal information from children in violation of applicable law. If you believe a child has provided us with personal information, please contact us and we will take appropriate steps to remove the information.",
    ],
  },
  {
    title: "Third-Party Services",
    paragraphs: [
      "Our website may contain links to third-party websites and may use third-party services such as analytics providers, payment processors, and shipping services. These third parties have their own privacy policies, and we are not responsible for their practices.",
    ],
  },
  {
    title: "Changes to This Privacy Policy",
    paragraphs: [
      "This Privacy Policy may be updated from time to time to reflect changes in our practices, services, or legal requirements. The updated version will be posted on this page with a revised effective date.",
    ],
  },
];

const PrivacyPolicyContent = () => {
  return (
    <section className="bg-white px-5 py-16 sm:py-20">
      <div className="container mx-auto max-w-6xl space-y-12">
        {policySections.map((section) => (
          <article
            key={section.title}
            className="border-l-4 border-green-600 pl-4 sm:pl-5"
          >
            <h2 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase tracking-tight text-gray-900">
              {section.title}
            </h2>

            <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              {section.items && (
                <ul className="space-y-1.5">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-green-600"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PrivacyPolicyContent;
