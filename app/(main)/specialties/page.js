import VirtualConsultant from "../../Components/VirtualConsultant";
import {
  Activity,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  FileText,
  Heart,
  Stethoscope,
  TrendingUp,
  UserCheck,
  Users,
  Zap,
  Ribbon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      <section className="pt-40 pb-24 bg-slate-50">
        <div className="container">
          <div className="mb-10">
            <div className={`mb-5 p-10 bg-red-200 text-black`}>
              <h2
                className={`text-4xl md:text-7xl font-bold tracking-tight mb-6 `}
              >
                Clinical-Specific{" "}
                <span className="text-blue-400">Intelligence</span>
              </h2>
              <div className="flex w-full">
                <div className="w-[80%]">
                  <p
                    className={`text-xs md:text-lg max-w-3xl leading-relaxed `}
                  >
                    Medical billing isn’t one-size-fits-all. Apollo provides
                    specialty-specific medical billing and coding services with
                    certified coders, custom rulesets, and workflows designed
                    for over 40 medical specialties. <br />
                    Whether your clinic handles cardiology billing services,
                    OB/GYN, DME providers, or pediatrics, our team ensures
                    accurate CPT & ICD-10 coding, denial reduction, and
                    maximized reimbursements.
                  </p>
                </div>
                <div className="w-[20%] rotate-12 p-4  rounded-xl">
                  <Ribbon
                    className="h-full w-full text-pink-400/90 hidden md:block"
                    style={{
                      // The magic happens here:
                      filter: `
                        
                        drop-shadow(-1px -1px 1px rgba(0, 0, 0, 0.25)) 
                        
                        drop-shadow(1px 1px 1px rgba(255, 255, 255, 0.4))
                      `,
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              className={`h-1.5 w-24 bg-blue-600 mt-8 rounded-full mx-auto`}
            ></div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <section className="py-10 rounded-lg  bg-blue-900 relative overflow-hidden">
              <h1 className="text-3xl text-white font-bold px-10 pb-5">
                Have a look at our{" "}
                <span className="text-emerald-400">Specialties</span>
              </h1>
              <iframe
                src="https://player.mux.com/01zPzT01IBoK6J02702DoY00ot8YAJ5YQmNEQeC1ZCWGlQrc?accent-color=%23094acc"
                className="w-[65%] mx-auto rounded-lg aspect-video"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowFullScreen
              ></iframe>
            </section>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-2">
            {[
              { title: "contact", name: "Cardiology", icon: <Activity /> },
              { title: "contact", name: "Dermatology", icon: <Activity /> },
              { title: "dme", name: "DME Providers", icon: <TrendingUp /> },
              { title: "contact", name: "Internal Medicine", icon: <FileText /> },
              { title: "contact", name: "Neurology", icon: <Zap /> },
              { title: "contact", name: "Ophthalmology", icon: <Stethoscope /> },
              { title: "contact", name: "Orthopedics", icon: <CheckCircle2 /> },
              { title: "contact", name: "Primary Care", icon: <UserCheck /> },
              { title: "contact", name: "Pediatrics", icon: <Heart /> },
              { title: "contact", name: "Psychiatry", icon: <Users /> },
              { title: "contact", name: "Surgery Center", icon: <ClipboardCheck /> },
              { title: "contact", name: "Urgent Care", icon: <Clock /> },
            ].map((spec, idx) => (
              <Link
                key={idx}
                href={`/${spec.title}`}
                className="bg-white p-10 rounded-2xl border-2 border-slate-100 hover:border-blue-500 hover:shadow-2xl transition-all text-center group cursor-default duration-300"
              >
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 rotate-3 group-hover:rotate-0">
                  {React.cloneElement(spec.icon, { size: 32 })}
                </div>
                <h4 className="font-black text-slate-800 text-lg uppercase tracking-wider">
                  {spec.name}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <VirtualConsultant />
    </div>
  );
};

export default page;
