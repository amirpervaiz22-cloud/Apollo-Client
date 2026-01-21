import VirtualConsultant from "@/app/Components/VirtualConsultant";
import { Award } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      <section className="pt-40 pb-24 bg-white text-black relative">
        <div className="absolute text-blue-500 top-0 right-0 p-24 opacity-20 hidden lg:block">
          <Award size={300} />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-black mb-10 tracking-tight leading-[1.1]">
            Integrity In <span className="text-blue-400">Revenue.</span>
          </h1>
          <p className="text-xl font-semibold text-gray-600 max-w-4xl leading-relaxed">
            Apollo Medical Billing (AMB) was founded to bridge the gap between
            complex insurance payer systems and the healthcare providers who
            serve our communities. We are committed to delivering accurate,
            transparent, and compliant medical billing services across the
            United States, ensuring your practice maximizes revenue without
            administrative headaches.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2">
              <div className="h-1.5 w-20 bg-blue-600 mb-10 rounded-full"></div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-10 tracking-tight leading-tight">
                Human-Centric Financial Tech.
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
                In a world dominated by automated call centers and impersonal
                portals, Apollo stands out as a human-first medical billing
                company. We don’t just process claims—we manage your financial
                legacy with clinical-grade revenue cycle management services,
                certified medical coding, and patient payment solutions that
                improve cash flow and patient satisfaction.
              </p>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                100% US-Based Support: Our team of senior billing strategists,
                clinical coders, and data analysts is dedicated to one mission:
                making your practice more profitable while ensuring compliance
                with HIPAA, MACRA, and state regulations.
              </p>
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <p className="text-5xl font-black text-blue-700 mb-2">25+</p>
                  <p className="text-sm font-black text-slate-400 uppercase tracking-widest">
                    Years Experience
                  </p>
                </div>
                <div>
                  <p className="text-5xl font-black text-blue-700 mb-2">
                    99.2%
                  </p>
                  <p className="text-sm font-black text-slate-400 uppercase tracking-widest">
                    Accuracy Rate
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute w-[73%] inset-0 bg-blue-600 rounded-[40px] translate-x-16 translate-y-10 opacity-5"></div>
              <Image
                src="/Human-Centric Financial.jpg"
                height={500}
                width={500}
                alt="Apollo Executive Team Meeting"
                className="rounded-[40px] shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 md:py-32 bg-white">
        <div className="container  mx-auto md:px-6 px-3 flex flex-row md:gap-24 gap-6 items-center text-left">
          <div className="w-[50%] relative">
            <Image
              src="/Mission.jpg"
              height={500}
              width={500}
              alt="Apollo Mission"
              className="rounded-xl absolute -top-20 h-52 w-100 shadow-2xl"
            />
          </div>
          <div className="w-[50%]">
            <div className="h-1.5 w-20 bg-blue-600 mb-10 rounded-full"></div>
            <h2 className="text-xl md:text-5xl font-black text-slate-900 md:mb-10 tracking-tight">
              Mission
            </h2>
            <p className="text-xs md:text-xl text-slate-600 mb-8 leading-relaxed font-medium">
              At Apollo Medical Billing, our mission is to provide comprehensive
              revenue cycle management services for physician practices, Durable
              Medical Equipment (DME) suppliers, and other clinical providers
              across the USA, including California-based healthcare practices.
            </p>
          </div>
        </div>
        <p className="text-xs md:text-xl text-slate-600 px-10 mb-12">
          <ul>
            <li>
              <strong>Integrity and transparency</strong> in all medical claim
              processing
            </li>
            <li>
              <strong>Accurate CPT &amp; ICD-10 coding</strong> tailored to each
              specialty, including Cardiology, OB/GYN, Pediatrics, Neurology,
              and more
            </li>
            <li>
              <strong>Full compliance</strong> with all federal and state
              healthcare regulations
            </li>
            <li>
              <strong>Real-time claim monitoring</strong> from initial
              submission through final reimbursement
            </li>
          </ul>

          <p>
            By staying <strong>vigilant, ethical, and transparent</strong>,
            Apollo helps healthcare providers streamline claim submissions,
            reduce denial rates, and improve
            <strong>patient financial engagement</strong> across the entire
            revenue cycle.
          </p>
        </p>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="container  mx-auto md:px-6 px-3 flex flex-row md:gap-24 gap-6 items-center text-left">
          <div className="w-1/2">
            <div className="h-1.5 w-20 bg-blue-600 mb-10 rounded-full"></div>
            <h2 className="text-xl md:text-5xl font-black text-slate-900 md:mb-10 tracking-tight">
              Vision
            </h2>
            <p className="text-xs md:text-xl text-slate-600 mb-8 leading-relaxed font-medium">
              Apollo Medical Billing aims to be the leading medical billing
              services company in the USA
            </p>
          </div>
          <div className="w-1/2 relative pb-[10%]">
            <Image
              src="/Vision.jpg"
              height={500}
              width={500}
              alt="Apollo Vision"
              className="rounded-xl absolute md:-top-30 -top-16 md:h-72 h-32 md:w-full shadow-2xl"
            />
          </div>
        </div>
        <p className="text-xs md:text-xl text-slate-600 pl-4 mb-12 md:mx-16">
          <ul>
            <li>
              <strong>Specialty-specific medical billing</strong> for
              Cardiology, OB/GYN, Mental Health, DME, Pediatrics, and other
              clinical specialties
            </li>
            <li>
              <strong>High-volume DME billing solutions</strong> designed for
              suppliers and multi-location clinics managing complex payer
              requirements
            </li>
            <li>
              <strong>Seamless integration</strong> with EMR systems, practice
              management software, and patient management software to eliminate
              workflow disruption
            </li>
            <li>
              <strong>Advanced revenue cycle analytics</strong> delivering
              real-time insights through denial management services, AR
              performance tracking, and patient payment solutions
            </li>
          </ul>
          By staying vigilant, ethical, and transparent, we help providers
          streamline claim submissions, reduce denials, and improve patient
          financial engagement.
        </p>
      </section>
      <VirtualConsultant />
    </div>
  );
};

export default page;
