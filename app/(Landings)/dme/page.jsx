import React from "react";
import {
  ShieldCheck,
  TrendingUp,
  MapPin,
  Calculator,
  Headphones,
} from "lucide-react";
import Link from "next/link";
import DmeFaqSchema from "../../SEOSchema/FAQ";
import Image from "next/image";
import ImageCard from "../../Components/ImageCard";

const page = () => {
  return (
    <div className="font-sans text-slate-900 bg-white">
      {/* --- HERO SECTION --- */}
      <header className="relative bg-linear-to-r from-blue-900 to-blue-700 text-white ">
        <div className="relative h-fit">
          <Image
            src={"/Wheelchair.png"}
            fill
            quality={100}
            alt="Medical Professional using RCM tools"
            className="object-cover z-1 hidden md:block"
          />
          <div className="absolute inset-0 bg-slate-800/40 z-1"></div>
          <div className="z-1 relative max-w-6xl py-20 px-6 mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                #1 DME Billing Services in{" "}
                <span className="text-blue-300">
                  Rancho Cucamonga, California
                </span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Maximize reimbursements with Apollo Medical Billing a
                California-based medical billing company specializing in DME
                revenue cycle management services, medical billing software
                workflows, and HCPCS Level II medical coding services for
                suppliers and clinics.
              </p>
              <div className="flex gap-4">
                <Link
                  href={"/contact"}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition"
                >
                  Get a Free Audit
                </Link>
                <Link
                  href={"/services"}
                  className="border-2 border-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded-lg transition"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- LOCAL AUTHORITY SECTION --- */}
      <section className="py-12 bg-slate-50 border-b">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-slate-500 font-medium">
          <div className="flex items-center gap-2">
            <MapPin size={20} /> Rancho Cucamonga Based
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={20} /> HIPAA & CCR Title 22 Compliant
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp size={20} /> 2026 Competitive Bidding Ready
          </div>
        </div>
      </section>

      <section className="py-10  bg-blue-900 relative overflow-hidden">
        <iframe
          src="https://player.mux.com/6B4HMldBb01prDcDy63OAi7H1LAlSj8uzOtnE8Oh5f00U?accent-color=%23094acc"
          className="w-[65%] mx-auto rounded-lg aspect-video"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen
        ></iframe>
      </section>

      {/* --- SERVICES / SEO CONTENT --- */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Specialized DME Revenue Cycle Management
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We don’t just provide billing — we deliver enterprise-grade DME
            revenue cycle management software and services built specifically
            for California’s regulatory environment.Apollo integrates seamlessly
            with leading electronic medical record systems (EMR systems),
            practice management software, and patient management software,
            eliminating workflow disruption while improving clean-claim
            performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-8 border group rounded-xl hover:shadow-lg hover:bg-blue-800 hover:text-white transition-all">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
              <Calculator size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">
              Medi-Cal & Medicare Expertise
            </h3>
            <p className="text-slate-600 group-hover:text-gray-100">
              Our certified DME billing specialists manage complex Medicare,
              Medi-Cal, and commercial payer rules, including:
            </p>
            <h1>
              <ul>
                <li>
                  <strong>HCPCS Level II coding accuracy</strong> to support
                  correct DME reimbursement
                </li>
                <li>
                  <strong>Certificates of Medical Necessity (CMNs)</strong>{" "}
                  properly validated and documented
                </li>
                <li>
                  <strong>California-specific modifiers</strong> including
                  <span>KX</span>, <span>NU</span>, and <span>RR</span>
                </li>
                <li>
                  <strong>Full compliance</strong> with CCR Title 22 and CMS
                  documentation standards
                </li>
              </ul>

              <p>
                We ensure every claim meets{" "}
                <strong>medical necessity guidelines</strong> for faster
                approvals, reduced denials, and{" "}
                <strong>maximum reimbursement</strong>.
              </p>
            </h1>
          </div>

          {/* Card 2 */}
          <div className="p-8 border group rounded-xl hover:shadow-lg hover:bg-blue-800 hover:text-white transition-all">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Denial Management</h3>
            <h1 className="text-slate-600 group-hover:text-gray-100">
              DME claims face some of the highest denial rates in healthcare.
              Our denial management services proactively eliminate common errors
              before submission.
              <ul>
                <li>
                  <strong>Pre-bill audits</strong> using advanced medical
                  billing software to prevent errors before submission
                </li>
                <li>
                  <strong>Root-cause denial analysis</strong> to identify and
                  eliminate recurring payer issues
                </li>
                <li>
                  <strong>Aggressive appeals</strong> and consistent payer
                  follow-ups to recover delayed or denied revenue
                </li>
                <li>
                  <strong>Proven reduction</strong> of the typical 20&ndash;30%
                  initial denial rate across DME claims
                </li>
              </ul>
            </h1>
          </div>

          {/* Card 3 */}
          <div className="p-8 border group rounded-xl hover:shadow-lg hover:bg-blue-800 hover:text-white transition-all">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
              <Headphones size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Real-Time Support</h3>
            <h1 className="text-slate-600 group-hover:text-gray-100">
              Unlike offshore billing companies, Apollo provides 100% US-based
              support from our Rancho Cucamonga headquarters.
              <ul>
                <li>
                  <strong>Local California payer expertise</strong> with deep
                  knowledge of Medi-Cal and regional insurance carriers
                </li>
                <li>
                  <strong>Real-time claim tracking and reporting</strong> for
                  complete visibility from submission to reimbursement
                </li>
                <li>
                  <strong>Direct access to billing strategists</strong> for
                  proactive issue resolution and revenue optimization
                </li>
                <li>
                  <strong>Support aligned with your time zone</strong> and payer
                  cycles to ensure faster responses and follow-ups
                </li>
              </ul>
            </h1>
          </div>
        </div>
      </section>

      {/* --- SEO KEYWORD RICH CONTENT BLOCK --- */}
      <section className="py-20 bg-blue-50 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">DME Billing Services</h2>
          <div className="text-left text-slate-700 space-y-4">
            <p>
              Apollo, a medical billing company in California, offers tailored
              services to DME providers across major cities across the nation.
              We ensure compliance and profitability under 2026 CMS and Medi-Cal
              rules.
            </p>
            <h1>
              <p>
                <strong>Our team specializes in billing for:</strong>
              </p>
              <ul className="list-disc">
                <li>Ambulatory devices</li>
                <li>Beds and Patient room accessories</li>
                <li>Compression Devices</li>
                <li>
                  Electrotherapy Products like TENS units and Muscle
                  stimulators
                </li>
                <li>High rehab customized wheelchairs.</li>
                <li>Mattress over lays (regular and low loss APM)</li>
                <li>Motorized Wheelchairs and scooters</li>
                <li>Orthotics (Off the shelf and customized braces)</li>
                <li>Respiratory Products</li>
                <li>Sleep Therapy devices</li>
                <li>Urological supplies</li>
              </ul>

              <p>
                All claims are precisely coded, audited, and tracked for
                adherence to <strong>National payer policies </strong>and
                <strong> California regulatory standards.</strong>
              </p>
            </h1>
          </div>
          <div className="container md:flex md:gap-10 ">
            <ImageCard
              src="/Wheelchairs & Mobility Equipment.png"
              title="Wheel Chair"
              alt="An Electric Wheelchair"
            />
            <ImageCard
              src="/BiPAP.png"
              title="BiPAP Device"
              alt="An BiPAP Device"
            />
            <ImageCard
              src="/CPAP.png"
              title="CPAP Machine"
              alt="A CPAP Device"
            />
          </div>
        </div>
      </section>
      <section>
        <DmeFaqSchema />
      </section>

      {/* --- FOOTER / CTA --- */}
      <footer className="bg-slate-900 text-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to optimize your DME revenue?
        </h2>
        <p className="mb-8 opacity-70">
          Visit us at apollomedbilling.com or call our California office today.
        </p>
        <Link
          href={"/contact"}
          className="bg-blue-600 hover:bg-blue-700 py-3 px-10 rounded-full font-bold"
        >
          Contact Us Now
        </Link>
      </footer>
    </div>
  );
};

export default page;
