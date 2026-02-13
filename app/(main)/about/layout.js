export const metadata = {
  title: "About Apollo Medical Billing | Our Mission & Security",
  description: "Learn about Apollo's mission to provide integrity-driven RCM services. 100% US-based support, HIPAA-compliant billing, and clinical-grade data security.",
  keywords: [
    "HIPAA compliant medical billing",
    "US based medical billing company",
    "Apollo Medical Billing mission",
    "Healthcare data security",
    "Certified medical billing specialists"
  ],
  openGraph: {
    title: "Integrity In Revenue | About Apollo Medical Billing",
    description: "Bridging the gap between complex insurance systems and healthcare providers with 25+ years of experience.",
    images: [
      {
        url: "/Human-Centric-Financial.jpg",
        width: 1200,
        height: 630,
        alt: "Apollo Executive Team",
      },
    ],
  },
};

export default function AboutLayout({ children }) {
  return <>{children}</>;
}