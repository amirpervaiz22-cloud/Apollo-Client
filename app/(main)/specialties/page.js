import SectionHeading from '@/app/Components/SectionHeading';
import VirtualConsultant from '@/app/Components/VirtualConsultant';
import { Activity, CheckCircle2, ClipboardCheck, Clock, FileText, Heart, Stethoscope, TrendingUp, UserCheck, Users, Zap } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const page = () => {
    return (
  <div className="animate-in fade-in duration-1000">
    <section className="pt-40 pb-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <SectionHeading
          centered
          title="Clinical-Specific Intelligence"
          subtitle="Medical billing isn’t one-size-fits-all. Apollo provides specialty-specific medical billing and coding services with certified coders, custom rulesets, and workflows designed for over 40 medical specialties.

           Whether your clinic handles cardiology billing services, OB/GYN, DME providers, or pediatrics, our team ensures accurate CPT & ICD-10 coding, denial reduction, and maximized reimbursements."
        />

        <div className="max-w-4xl mx-auto mb-20">

          <section className="py-10  bg-blue-900 relative overflow-hidden">
          <iframe
            src="https://player.mux.com/7VhFqi401c5YF4qFeG5zWEVGvVuDvQ4JCCDoFJW2pUmE"
            className="w-[65%] mx-auto rounded-lg aspect-video"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen
          ></iframe>
        </section>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            { title: "", name: "Primary Care", icon: <UserCheck /> },
            { title: "", name: "Cardiology", icon: <Activity /> },
            { title: "", name: "Neurology", icon: <Zap /> },
            { title: "", name: "Ophthalmology", icon: <Stethoscope /> },
            { title: "", name: "Orthopedics", icon: <CheckCircle2 /> },
            { title: "", name: "Internal Medicine", icon: <FileText /> },
            { title: "", name: "Pediatrics", icon: <Heart /> },
            { title: "", name: "Psychiatry", icon: <Users /> },
            { title: "", name: "Dermatology", icon: <Activity /> },
            { title: "", name: "Urgent Care", icon: <Clock /> },
            { title: "", name: "Surgery Center", icon: <ClipboardCheck /> },
            { title: "dme", name: "DME Providers", icon: <TrendingUp /> },
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

}

export default page