import Script from "next/script";

export default function ApolloMainSchema() {
  return (
    <Script
      id="apollo-medicalbilling-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["MedicalBusiness", "LocalBusiness", "Organization"],
          "name": "Apollo Medical Billing Systems",
          "url": "https://www.apollomedbilling.com",
          "logo": "https://www.apollomedbilling.com/logo.png",
          "description":
            "Apollo Medical Billing Systems provides end-to-end medical billing and revenue cycle management services for healthcare providers, DME suppliers, and specialty practices across California and the United States.",
          "foundingDate": "2000",
          "slogan": "End-to-End Billing That Captures Every Dollar",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "9567 Arrow Route, Suite A",
            "addressLocality": "Rancho Cucamonga",
            "addressRegion": "CA",
            "postalCode": "91730",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 34.0922,
            "longitude": -117.5931
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
          },
          "telephone": "+1-909-460-8170",
          "email": "info@apollomedbilling.com",
          "areaServed": [
            {
              "@type": "AdministrativeArea",
              "name": "California"
            },
            {
              "@type": "Country",
              "name": "United States"
            }
          ],
          "sameAs": [],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Medical Billing & Revenue Cycle Services",
            "itemListElement": [
              {
                "@type": "Service",
                "name": "Medical Billing Services",
                "description": "Certified medical billing and coding services for small practices and enterprise healthcare organizations."
              },
              {
                "@type": "Service",
                "name": "Revenue Cycle Management (RCM)",
                "description": "End-to-end revenue cycle management services including eligibility, coding, billing, denial management, and payment posting."
              },
              {
                "@type": "Service",
                "name": "DME Billing Services",
                "description": "California-focused DME billing services with expertise in Medicare, Medi-Cal, HCPCS Level II coding, and CMNs."
              },
              {
                "@type": "Service",
                "name": "Denial Management Services",
                "description": "Aggressive denial management, forensic AR recovery, and payer appeals to reduce revenue leakage."
              },
              {
                "@type": "Service",
                "name": "Medical Coding Services",
                "description": "Accurate CPT, ICD-10, and HCPCS coding performed by CPC, CCS, and CPB certified professionals."
              },
              {
                "@type": "Service",
                "name": "Provider Credentialing Services",
                "description": "Physician and facility credentialing services with Medicare, Medi-Cal, and commercial payers."
              },
              {
                "@type": "Service",
                "name": "Patient Payment Solutions",
                "description": "Patient-focused billing and payment solutions designed to improve patient financial engagement and collections."
              }
            ]
          },
          "knowsAbout": [
            "HIPAA Compliance",
            "Revenue Cycle Management Software",
            "Medical Billing Software",
            "Electronic Medical Record Systems",
            "EHR Systems",
            "Practice Management Software",
            "DME Billing",
            "Medical Coding Services",
            "Denial Management",
            "Patient Financial Engagement"
          ],
          "medicalSpecialty": [
            "Cardiology",
            "OB/GYN",
            "Mental Health",
            "Pediatrics",
            "Neurology",
            "Orthopedics",
            "Primary Care",
            "DME"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-909-460-8170",
            "contactType": "sales",
            "areaServed": "US",
            "availableLanguage": ["English"]
          },
          "priceRange": "$$",
          "makesOffer": {
            "@type": "Offer",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "USD",
              "description":
                "Success-based pricing model with no upfront fees. Fees are based on collections."
            }
          }
        })
      }}
    />
  );
}
