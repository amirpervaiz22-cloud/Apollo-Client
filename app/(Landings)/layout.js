import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ToastContainer } from "react-toastify";

// 2. Import the CSS (crucial!)
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Specialized Medical Billing Solutions | Apollo",
    template: "%s | Apollo Medical Billing"
  },
  description: "Customized revenue cycle management and medical billing solutions for high-growth healthcare practices and DME providers.",
  metadataBase: new URL('https://www.apollomedbilling.com'),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Apollo Medical Billing",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>

        {children}
        </main>
        <ToastContainer position="top-right" />
      </body>
    </html>
  );
}
