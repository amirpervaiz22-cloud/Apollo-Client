export const metadata = {
  title: "DME Billing Services in Rancho Cucamonga, CA",
  description: "Top-rated DME billing company in California. We specialize in Medicare, Medi-Cal, and HCPCS coding for wheelchairs, respiratory products, and urological supplies.",
  keywords: [
    "DME billing services California",
    "Medical billing for DME providers",
    "Rancho Cucamonga medical billing",
    "HCPCS Level II coding services",
    "Durable Medical Equipment RCM"
  ],
  openGraph: {
    title: "#1 DME Billing Services in Rancho Cucamonga | Apollo",
    description: "Maximize your DME reimbursements with our 100% US-based specialist team. HIPAA & CCR Title 22 compliant.",
    images: [
      {
        url: "/Wheelchair.png",
        width: 1200,
        height: 630,
        alt: "DME Billing Services Specialists",
      },
    ],
  },
};

export default function DmeLayout({ children }) {
  return <>{children}</>;
}