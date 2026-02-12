import VirtualConsultant from "../../Components/VirtualConsultant";
import { Award } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      <section className="pt-40  bg-white text-black">
        <div className="flex flex-row-reverse">
          <div className="text-blue-500  opacity-20 hidden lg:block">
            <Award className="text-emerald-600" size={300} />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
            <h1 className="text-4xl md:text-7xl font-black mb-10 tracking-tight leading-[1.1]">
              Integrity In <span className="text-emerald-400">Revenue.</span>
            </h1>
            <p className="text-lg  text-gray-600 max-w-4xl leading-relaxed">
              Apollo Medical Billing (AMB) was founded to bridge the gap between
              complex insurance payer systems and the healthcare providers who
              serve our communities.
              <br /> We are committed to delivering accurate, transparent, and
              compliant medical billing services across the United States,
              ensuring your practice maximizes revenue without administrative
              headaches.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-24 md:pt-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="h-1.5 w-20 bg-blue-600 mb-10 rounded-full"></div>
          <div className="flex flex-col lg:flex-row gap-24 ">
            <div className="lg:w-1/2">
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
              <div className=" w-[73%] inset-0 bg-blue-600 rounded-[40px] translate-x-16 translate-y-10 opacity-5"></div>
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
      <section className="py-24 md:py-32 bg-white" id="Mission_Vision">
        <div className="container  mx-auto md:px-6 px-3 flex flex-col-reverse md:flex-row  md:gap-24 gap-6  text-left">
          <div className="md:w-[50%] md:mt-16">
            <Image
              src="/MissionAndVision.jpg"
              height={500}
              width={500}
              alt="Apollo Mission and Vision"
              className="rounded-xl h-fit w-fit shadow-2xl"
            />
          </div>
          <div className="md:w-[50%] mt-10 md:mt-0">
            <div className="h-1.5 w-20 bg-blue-600 mb-10 rounded-full"></div>
            <h2 className="text-xl md:text-5xl font-black text-slate-900 md:mb-10 tracking-tight">
              Our Mission & Vision
            </h2>
            <p className="text-xs md:text-xl text-slate-600 mb-8 leading-relaxed font-medium">
              Apollo Medical Billing aims to be the leading medical billing
              services company in the USA by providing comprehensive revenue
              cycle management for physician practices, Durable Medical
              Equipment (DME) suppliers, and clinical providers across
              California and the nation.
              <br /> We are committed to integrity, transparency, and full
              regulatory compliance, delivering accurate CPT and ICD-10 coding
              tailored to specialties including Cardiology, OB/GYN, Pediatrics,
              Neurology, and Mental Health. Through seamless integration with
              EMR and practice management systems, we provide high-volume
              billing solutions and advanced analytics for real-time insights
              into denial management, AR performance, and claim monitoring. By
              staying vigilant and ethical, we empower healthcare providers to
              streamline claim submissions, reduce denial rates, and improve
              patient financial engagement across the entire revenue cycle.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16" id="Privacy_Security">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
              Privacy & Security
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
              Our medical billing services prioritize HIPAA compliance,
              healthcare data security, and patient privacy. We protect
              sensitive medical and financial information using industry-leading
              security standards and compliant billing processes.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* HIPAA Compliance */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-semibold  mb-3">
                HIPAA-Compliant Medical Billing Services
              </h3>
              <p className="text-gray-600">
                We follow strict HIPAA regulations to ensure protected health
                information (PHI) is handled securely throughout the medical
                billing, coding, claims submission, and revenue cycle management
                process.
              </p>
            </div>

            {/* Data Security */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-semibold  mb-3">
                Secure Healthcare Data Protection
              </h3>
              <p className="text-gray-600">
                Our medical billing company uses encrypted data transmission,
                secure servers, and advanced cybersecurity measures to protect
                patient records, insurance data, and billing information.
              </p>
            </div>

            {/* Access Control */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-semibold  mb-3">
                Role-Based Access Control & PHI Security
              </h3>
              <p className="text-gray-600">
                Access to sensitive healthcare and billing data is restricted
                through role-based permissions, ensuring only authorized and
                trained medical billing professionals can access PHI.
              </p>
            </div>

            {/* Staff Training */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-semibold  mb-3">
                HIPAA-Trained Medical Billing Experts
              </h3>
              <p className="text-gray-600">
                Our certified medical billing and coding specialists receive
                continuous HIPAA training, compliance updates, and security
                awareness education to meet healthcare industry standards.
              </p>
            </div>

            {/* Secure Communication */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-semibold  mb-3">
                Encrypted Communication & Secure File Transfer
              </h3>
              <p className="text-gray-600">
                All communication, document sharing, and reporting are conducted
                using encrypted, HIPAA-compliant channels to prevent data
                breaches and unauthorized disclosure.
              </p>
            </div>

            {/* Compliance Commitment */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-semibold  mb-3">
                Healthcare Compliance & Regulatory Standards
              </h3>
              <p className="text-gray-600">
                We continuously monitor HIPAA, HITECH, and healthcare compliance
                requirements to ensure our medical billing services remain
                secure, compliant, and audit-ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      <VirtualConsultant />
    </div>
  );
};

export default page;
