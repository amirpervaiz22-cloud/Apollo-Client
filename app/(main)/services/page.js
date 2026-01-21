import VirtualConsultant from '@/app/Components/VirtualConsultant';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import React from 'react'

const page = () => {
  return (
  <div className="animate-in fade-in duration-1000">
    <section className="pt-40 pb-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl text-black md:text-7xl font-black mb-8 tracking-tight">
          Enterprise Solutions.{" "}<span className='text-blue-700'>Personal Touch.</span> 
        </h1>
        <p className="text-2xl font-bold md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Our enterprise-grade medical billing services combine revenue cycle management software, medical coding services, and hands-on expertise to maximize profitability across the entire care continuum—from patient intake to final payment posting.

           Apollo supports practices using EHR systems, EMR software, practice management software, and patient management systems, delivering scalable RCM services for both small practices in USA and high-volume enterprise clinics in California.
        </p>
      </div>
    </section>

    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">

        <section className="py-10  bg-blue-900 relative overflow-hidden">
          
          <iframe
            src="https://player.mux.com/NhIw3fSXZH8jSXRZSwC5WHPI029UK6ZnJYo6FJBVX02Ss"
            className="w-[65%] mx-auto rounded-lg aspect-video"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen
          ></iframe>
        </section>
      
        <div className="space-y-40 mt-32">
          {[
            {
              title: "Full-Stack Revenue Cycle Management",
              desc: "The ultimate solution for clinics looking to outsource the entire financial operation. Apollo acts as your off-site medical billing company, managing every step of your revenue cycle with accuracy, compliance, and full transparency.",
              benefits: [
                "End-to-end claim management",
                "Real-time dashboard reporting",
                "Real-time RCM dashboards & reporting",
                "Physician credentialing services included",
                "Support for medical billing services for small practices in USA and enterprise providers",
              ],
              img: "Full-Stack Revenue Cycle Management1.jpg",
              reverse: false,
            },
            {
              title: "Forensic Denial & AR Management",
              desc: "Forensic Denial & AR Services our denial management services target unpaid or underpaid claims. Using certified coding and medical billing audit services, we recover revenue that other companies ignore.",
              benefits: [
                "Aggressive appeal strategies",
                "Forensic claim scrubbers (CPT & ICD-10 coding, POS 11 validation)",
                "Payer contract negotiation",
                "Aging AR recovery and liquidation",
              ],
              img: "forenic denial.png",
              reverse: true,
            },
            {
              title: "DME & Specialty Billing Solutions",
              desc: "Apollo delivers high-volume DME billing services, podiatry billing services, and specialty billing solutions for clinics across California and USA.",
              benefits: [
                "Durable Medical Equipment claims & coding",
                "Podiatry EMR integration & podiatry electronic medical records",
                "Payer contract negotiation",
                "Credentialing & payer enrollment",
              ],
              img: "Human-Centric Financial.jpg",
              reverse: false,
            },
            {
              title: "Eligibility & Patient Experience",
              desc: "We optimize the revenue cycle at the front desk. Apollo’s tools reduce errors, increase collections, and deliver a patient-focused billing experience.",
              benefits: [
                "Real-time insurance verification",
                "Estimated patient responsibility",
                "Patient statement management",
                "Secure digital & mobile payment portals",
              ],
              img: "Eligibility & Patient Experience.jpg",
              reverse: true,
            },
          ].map((s, idx) => (
            <div
              key={idx}
              className={`flex flex-col lg:flex-row items-center gap-20 ${s.reverse ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-blue-600 rounded-3xl translate-x-4 translate-y-4 -z-10 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <Image
                  src={`/${s.img}`}
                  height={500}
                  width={500}
                  alt={s.title}
                  className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
              <div className="lg:w-1/2">
                <div className="h-1.5 w-20 bg-blue-600 mb-8 rounded-full"></div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
                  {s.title}
                </h2>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                  {s.desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  {s.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-slate-800 font-bold">{b}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href={"/contact"}
                  className="px-10 py-5 rounded-lg font-semibold shadow-xl bg-blue-700 text-white hover:bg-blue-800 transition-all active:scale-95"
                >
                  Inquire About This Service
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <VirtualConsultant />
  </div>
);}

export default page