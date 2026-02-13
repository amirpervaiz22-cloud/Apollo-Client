import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ToastContainer } from "react-toastify";

// 2. Import the CSS (crucial!)
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // Title template allows sub-pages to automatically append your brand name
  title: {
    default: "Apollo Medical Billing | Expert RCM & Billing Solutions",
    template: "%s | Apollo Medical Billing"
  },
  description: "Apollo Medical Billing LLC provides comprehensive RCM and medical billing services designed to maximize revenue and simplify practice management for healthcare providers.",
  metadataBase: new URL('https://www.apollomedbilling.com'),
  keywords: ["Medical Billing", "Revenue Cycle Management", "DME Billing", "Healthcare RCM", "Apollo Medical Billing"],
  authors: [{ name: "Apollo Medical Billing LLC" }],
  creator: "Apollo Medical Billing LLC",
  publisher: "Apollo Medical Billing LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Apollo Medical Billing | Expert RCM & Billing Solutions",
    description: "Streamline your practice's revenue cycle with Apollo's professional billing services.",
    url: "https://www.apollomedbilling.com",
    siteName: "Apollo Medical Billing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apollo Medical Billing",
    description: "Professional medical billing and RCM services.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>

        {children}
        </main>
        <Footer />
        <ToastContainer position="top-right" />
      </body>
    </html>
  );
}
