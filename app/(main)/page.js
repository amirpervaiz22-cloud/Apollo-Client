"use client";
import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  TrendingUp,
  Clock,
  FileText,
  CheckCircle2,
  ArrowRight,
  Activity,
  Zap,
  ClipboardCheck,
  Award,
} from "lucide-react";

import TestimonialCard from "../Components/TestimonialCard";
import Image from "next/image";
import VirtualConsultant from "../Components/VirtualConsultant";
import SectionHeading from "../Components/SectionHeading";
import Link from "next/link";
import ApolloMainSchema from "../SEOSchema/LandingPageSchema";
import FaqAccordion from "../Components/FAQLanding";

const App = () => {
  return (
    <div className=" font-sans text-slate-900 bg-white selection:bg-blue-100 selection:text-blue-900 antialiased">
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-1000">
        <section className="relative pt-32 pb-10 md:pb-20 bg-[#f8fafc] overflow-hidden">
          {/* <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/40 -skew-x-12 translate-x-1/4 pointer-events-none"></div> */}

          <div className="relative h-fit">
            <Image
              src={"/Medical Billings.png"}
              fill
              quality={100}
              alt="Medical Professional using RCM tools"
              className="object-cover z-1"
            />
            <div className="absolute inset-0 bg-slate-800/60 z-1"></div>
            <div className="z-1 text-white p-10 relative">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-blue-50 text-blue-700 rounded-full text-xs font-black mb-8 tracking-widest border border-blue-100 uppercase">
                <ShieldCheck size={16} className="text-blue-600" />
                HIPAA Compliant • Certified Healthcare Billing • Advanced RCM
                Software
              </div>
              <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tight">
                End-to-End Billing That{" "}
                <span className="text-emerald-400">Captures Every Dollar</span>
              </h1>
              <p className=" text-white  mb-10 max-w-2xl leading-relaxed font-semibold">
                Apollo is a leading medical billing company in California
                delivering enterprise-grade medical billing and coding services
                through intelligent revenue cycle management software. <br />
                We eliminate revenue leakage, reduce denials, and stabilize cash
                flow so your providers can stay focused on patient care. We
                integrate seamlessly with electronic medical record systems, EHR
                systems, EMR software, and practice management software used by
                small practices and large healthcare organizations across the
                USA.
                <br />
                No more denials. Just predictable reimbursements
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <Link
                  href={"/contact"}
                  className="px-10 py-5 font-semibold rounded-lg text-lg bg-emerald-400 text-white hover:bg-emerald-600 shadow-md transition-all active:scale-95"
                >
                  Schedule A Free Consultation
                </Link>
                <Link
                  href={"/services"}
                  className="px-10 rounded-lg font-semibold py-5 text-lg bg-white text-blue-700 border border-blue-200 hover:bg-blue-50 shadow-sm transition-all"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
            <div className="lg:w-2/5 relative">
              {/* <div className="relative z-10 rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] overflow-hidden border-12 border-white bg-white">
                  
                </div> */}
            </div>
          </div>
        </section>

        {/* Partners Logos */}
        {/* <div className="bg-white py-12 border-y border-slate-100">
          <div className="container mx-auto px-6">
            <p className="text-center text-slate-400 text-sm font-bold uppercase tracking-[0.2em] mb-8">
              Trusted by practices nationwide
            </p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale contrast-125">
              <span className="text-2xl font-black">HEALTHLINK</span>
              <span className="text-2xl font-black">ORTHO+</span>
              <span className="text-2xl font-black">MEDCORE</span>
              <span className="text-2xl font-black">SURGICARE</span>
              <span className="text-2xl font-black">PRIORITY HEALTH</span>
            </div>
          </div>
        </div> */}

        {/* Trusted Partner Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-20">
              <div className="md:w-1/2 relative">
                <Image
                  src="/Enterprise_Billing.jpeg"
                  alt="Medical Team Discussion"
                  height={500}
                  width={500}
                  className="rounded-3xl  shadow-xl w-full"
                />
              </div>
              <div className="md:w-1/2">
                <SectionHeading
                  title="Your Enterprise Medical Billing Partner"
                  subtitle="Apollo delivers enterprise-level medical billing services in California and across the US, integrating directly with your EHR practice management software, patient management system, and electronic health record systems (EHRs) to automate coding accuracy, reduce denial rates, and deliver 100% financial transparency.
                  Our platform supports leading EHR companies, EMR systems list, patient portal, and advanced practice management software systems used by primary care, specialty, and DME providers."
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              {[
                {
                  icon: <ShieldCheck />,
                  title: "Full Compliance",
                  desc: "Strict adherence to HIPAA, MACRA, payer policies, and state-level registry requirements. Our workflows are designed for healthcare payment compliance and audit readiness.",
                },
                {
                  icon: <CheckCircle2 />,
                  title: "98% Clean Claim Rate",
                  desc: "Our multi-pass scrubbing engine validates CPT codes, ICD-10 diagnosis codes, POS 11, entity codes on claims, and payer rules before submission.",
                },
                {
                  icon: <Activity />,
                  title: "Forensic AR Recovery",
                  desc: "Our multi-pass scrubbing engine validates CPT codes, ICD-10 diagnosis codes, POS 11, entity codes on claims, and payer rules—before submission.",
                },
                {
                  icon: <Award />,
                  title: "Certified Expertise",
                  desc: "Certified CPC, CCS-P, and CPB professionals from one of the most trusted medical coding companies in the USA.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex border-slate-200 hover:bg-blue-50 border-2 p-3 rounded-lg gap-5 group transition-all"
                >
                  <div className="shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-24 md:py-32 bg-slate-50">
          <div className="container mx-auto px-6">
            <SectionHeading
              title="Revenue Cycle Intelligence"
              subtitle="Apollo’s modular RCM software adapts to your workflow supporting medical billing services for small practices, enterprise clinics, and multi-location healthcare organizations."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <FileText size={32} />,
                  domain: "services",
                  title: "Certified Medical Coding",
                  desc: "Expert CPT/ICD-10 coding to ensure your services are fully reimbursed without compliance risk.",
                },
                {
                  icon: <TrendingUp size={32} />,
                  domain: "services",
                  title: "Total RCM Management",
                  desc: "End-to-end revenue cycle management services covering scheduling, eligibility verification, coding, billing, denial recovery, patient payments, and final reconciliation.",
                },
                {
                  icon: <Zap size={32} />,
                  domain: "services",
                  title: "Aggressive Denial Pursuit",
                  desc: "We don't “follow up.” We appeal, escalate, and resolve complex payer denials using advanced RCM billing analytics.",
                },
                {
                  icon: <Clock size={32} />,
                  domain: "services",
                  title: "Aging AR Resolution",
                  desc: "Dedicated teams liquidate old balances, reduce AR days, and stabilize cash flow using forensic billing techniques.",
                },
                {
                  icon: <ClipboardCheck size={32} />,
                  domain: "services",
                  title: "Eligibility Verification",
                  desc: "Proactive front-end verification using practice management software to prevent front-desk and authorization errors.",
                },
                {
                  icon: <Activity size={32} />,
                  domain: "dme",
                  title: "DME Billing Solutions",
                  desc: "Specialized DME billing services for high-volume claims, rentals, compliance tracking, and payer-specific workflows.",
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white p-10 Frounded-2xl shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all group duration-300"
                >
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                    {service.desc}
                  </p>
                  <Link
                    href={`/${service.domain}`}
                    className="text-blue-700 font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-wider text-xs"
                  >
                    Explore Solution <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href={"/services"}
                className="text-sm px-12 py-4 rounded-lg font-semibold shadow-lg bg-white text-blue-700 border border-blue-200 hover:bg-blue-50  transition-all"
              >
                View Detailed Service Catalog
              </Link>
            </div>
          </div>
        </section>

        {/* Virtual Consultant Intro */}
        <section className="py-10  bg-blue-900 relative overflow-hidden">
          <h1 className="text-4xl font-bold text-white px-10 pb-10">
            Introduction to{" "}
            <span className="text-emerald-400">Apollo Medical</span>
          </h1>
          <iframe
            src="https://player.mux.com/E02a01SNszbzfa5x2M6YHi01J4JRNznqrSwMh2V00FSv9lY?accent-color=%23094ac"
            className="w-[65%] mx-auto rounded-lg aspect-video"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen
          ></iframe>
        </section>

        {/* How It Works */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6">
            <SectionHeading
              title="Onboarding Done Right"
              subtitle="We guarantee a zero-interruption transition. Your collections remain active while we build your new revenue engine."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative mt-16">
              <div className="hidden md:block absolute top-14 left-0 w-full h-1 bg-blue-50 -z-10 rounded-full"></div>
              {[
                {
                  step: "01",
                  title: "Free Practice Audit",
                  desc: "Identify revenue leakage, denial trends, and underpayments.",
                },
                {
                  step: "02",
                  title: "Custom Roadmap",
                  desc: "Tailored integration plan aligned with your EHR system and practice management software.",
                },
                {
                  step: "03",
                  title: "Parallel Sync",
                  desc: "Claims processed alongside your existing workflow.",
                },
                {
                  step: "04",
                  title: "Performance Lift",
                  desc: "AAggressive AR recovery and denial reduction begins.",
                },
                {
                  step: "05",
                  title: "Ongoing Growth",
                  desc: "Monthly KPI reviews, billing metrics, and optimization.",
                },
              ].map((item, idx) => (
                <div key={idx} className="text-center group px-4">
                  <div className="w-20 h-20 bg-white border-2 border-blue-600 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 text-2xl font-black group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl
                   group-hover:rotate-6 duration-300">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-4 text-lg leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 md:py-32 bg-slate-900 text-white h-fit overflow-hidden relative">
          <div className="container mx-auto px-6 relative z-10">
            <SectionHeading
              title="Client Success Profiles"
              subtitle="Hear from the providers who have transformed their clinical operations with Apollo's RCM tools."
              centered
              dark
            />
            <div className="grid h-fit grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  quote:
                    "Shazana Medical Products is pleased to share our experience working with Apollo Medical Billing System LLC. Their billing services have consistently exceeded our expectations, demonstrating professionalism, accuracy, and efficiency in managing our revenue cycle. Apollo Medical Billing’s dedicated team has streamlined our billing processes, resulting in improved cash flow and reduced claim denials. Their attention to detail and proactive approach to resolving issues have made a significant impact on our financial operations. We appreciate Apollo Medical Billing System LLC for their commitment to excellence and for providing us with reliable support in revenue cycle management. Their expertise and responsiveness have been invaluable to our organization, and we highly recommend their services to other healthcare providers seeking outstanding solutions.",
                  author: "Chaz Yaqoot President",
                  role: "Shazana Medical Products",
                  metric: "30% Reduction in Claim Denials",
                },
                {
                  quote:
                    "Dear Apollo, Medical Billing System LLC Team, On behalf of Advance Medical Supplies, I would like to extend our deepest gratitude for your outstanding support in streamlining our revenue cycle management processes. Your expertise and dedication have made a significant impact on our business, especially regarding insurance claims and the swift processing of reimbursements. Since partnering with Apollo Medical Billing System LLC, we have experienced notable improvements in our claim submission accuracy and turnaround times. Your team’s comprehensive understanding of billing procedures and proactive approach to resolving issues have alleviated many of the challenges we previously faced. Enhanced efficiency has allowed us to focus more on delivering quality care to our patients, knowing that our billing operations are in capable hands. We especially appreciate your commitment to keeping us informed and educated on regulatory updates and best practices in the industry. Your responsiveness and professionalism have set a new standard for our expectations of a billing partner. Thank you again for your invaluable contribution to our business success. We look forward to a continued partnership and further achievements together. Sincerely,.",
                  author: "Juan Carlos",
                  role: "Advance Medical Supply, Van Nuys California",
                  metric: "+15% Net Collections",
                },
                {
                  quote:
                    "To Whom It May Concern, I am pleased to recommend Apollo Medical Billing System LLC, a distinguished leader in revenue cycle management services for medical professionals across a wide array of disciplines. Having closely observed their operations and results, I can confidently attest to the exceptional quality and reliability of their services. The impact of partnering with Apollo Medical Billing System LLC is evident in improved cash flow, minimized claim denials, and a significant reduction in billing errors. Their commitment to continuous improvement and client education further ensures that practices remain up to date with industry changes and can focus on delivering exceptional patient care. I highly recommend Apollo Medical Billing System LLC to active DME organizations seeking a reliable, efficient, and client-centered revenue cycle management partner. Their excellent track record and reputation for service excellence make them a valuable asset to any healthcare operation  Sincerely,.",
                  author: "Raza Ali",
                  role: "Provecta Medical Supplies, Los Angeles, Cas",
                  metric: "2.4M Recovered AR",
                },
              ].map((t, idx) => (
                <TestimonialCard key={idx} t={t} />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="py-24 bg-blue-700 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-125 h-125 bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-6xl font-black text-white mb-10 tracking-tight">
              Stop Settling For Partial Reimbursements.
            </h2>
            <p className="text-xl md:text-lg text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Get a free, no-obligation revenue audit from one of the best
              medical billing services companies in the USA.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href={"/contact"}
                className="bg-white text-blue-700 px-12 py-5 rounded-2xl font-black text-xl hover:bg-blue-50 shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all active:scale-95"
              >
                Claim My Free Revenue Audit
              </Link>
              <Link
                href={"/services"}
                className="bg-transparent text-white border-2 border-white/40 px-12 py-5 rounded-2xl font-black text-xl hover:bg-white/10 transition-all"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Floating Virtual Consultant */}
      <VirtualConsultant />
      <FaqAccordion />
      <ApolloMainSchema />
    </div>
  );
};

export default App;
