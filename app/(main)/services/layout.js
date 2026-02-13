export const metadata = {
  title: "Professional Medical Billing Services",
  description: "Explore Apollo's comprehensive billing solutions: Full-Stack RCM, Denial Management, DME billing, and patient eligibility verification for US healthcare providers.",
  keywords: [
    "Full-Stack RCM",
    "Medical Denial Management",
    "Specialty Billing Solutions",
    "DME Billing Services",
    "Physician Credentialing"
  ],
  openGraph: {
    title: "Enterprise Medical Billing Solutions | Apollo RCM",
    description: "Personalized RCM services designed to eliminate revenue leakage and optimize clinical operations.",
    images: [
      {
        url: "/servicespage.png",
        width: 1200,
        height: 630,
        alt: "Apollo Medical Billing Services Overview",
      },
    ],
  },
};

export default function ServicesLayout({ children }) {
  return <>{children}</>;
}