import Script from "next/script";

export default function DmeFaqSchema() {
  return (
    <Script
      id="dme-faq-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What DME billing services does Apollo Medical Billing provide?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Apollo Medical Billing provides end-to-end DME billing services including HCPCS Level II coding, CMN management, Medi-Cal and Medicare compliance, denial management, payment posting, and full revenue cycle management for California DME providers."
              }
            },
            {
              "@type": "Question",
              "name": "Do you specialize in California DME billing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We specialize in California DME billing with deep expertise in Medi-Cal, CCR Title 22 compliance, CMS documentation standards, and California-specific modifiers such as KX, NU, and RR."
              }
            },
            {
              "@type": "Question",
              "name": "Which DME products do you bill for?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We bill for wheelchairs and mobility equipment, CPAP and sleep therapy devices, oxygen systems, and diabetic testing supplies."
              }
            },
            {
              "@type": "Question",
              "name": "How do you reduce DME claim denials?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We reduce denials through pre-bill audits using medical billing software, root-cause denial analysis, aggressive appeals, and continuous payer follow-ups—lowering the typical 20–30% initial denial rate."
              }
            },
            {
              "@type": "Question",
              "name": "Do you integrate with EMR and practice management systems?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We integrate with EMR systems, EHR platforms, practice management software, and patient management systems for seamless workflows and real-time claim tracking."
              }
            },
            {
              "@type": "Question",
              "name": "How is pricing structured at Apollo Medical Billing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our pricing is success-based, meaning we only earn when you collect revenue. Our incentives are fully aligned with maximizing your reimbursements."
              }
            },
            {
              "@type": "Question",
              "name": "Are there any upfront or hidden fees?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. We operate with complete transparency and do not charge hidden or unexpected fees."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer a free DME billing audit?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We provide a free DME revenue cycle audit to identify compliance gaps, denial risks, and missed revenue opportunities."
              }
            }
          ]
        })
      }}
    />
  );
}
