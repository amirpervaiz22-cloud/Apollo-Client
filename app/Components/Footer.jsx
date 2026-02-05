import {
  Award,
  CheckCircle2,
  ExternalLink,
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-32 pb-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600 opacity-[0.02] -skew-x-12 translate-x-1/2"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mb-24 px-10">
          <div>
            <div className="flex items-center gap-3 mb-10 group">
              <div className="w-22 h-22  rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-900/40">
                <img className="rounded-full" src="./logo.jpeg" alt="Logo" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight leading-none uppercase">
                  APOLLO
                </span>
                <span className="text-[10px] tracking-[0.4em] text-emerald-400 font-extrabold uppercase">
                  Medical Billing
                </span>
              </div>
            </div>
            <p className="text-slate-400 mb-10 leading-relaxed font-semibold text-lg">
              The nation’s premier enterprise-grade revenue cycle management
              company for high-volume healthcare practices.
            </p>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-all duration-300 border border-white/10">
                <a href="mailto:info@apollomedbilling.com">
                  <Mail size={20} />
                </a>
              </div>
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-all duration-300 border border-white/10">
                <a href="tel:9094608170">
                  <Phone size={20} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-emerald-400 mb-10">
              Solutions
            </h4>
            <ul className="space-y-6 text-slate-400 font-bold text-lg">
              <Link
                className="hover:text-white block transition-colors cursor-pointer"
                href={"/services#RCM"}
              >
                Full-Stack RCM
              </Link>
              <Link
                className="hover:text-white block transition-colors cursor-pointer"
                href={"/services"}
              >
                Denial Recovery
              </Link>
              <Link
                className="hover:text-white block transition-colors cursor-pointer"
                href={"/services"}
              >
                Frequent Denials
              </Link>
              <Link
                className="hover:text-white block transition-colors cursor-pointer"
                href={"/dme"}
              >
                DME Billing
              </Link>
              {/* <Link
                className="hover:text-white block transition-colors cursor-pointer"
                href={"/services"}
              >
                Credentialing
              </Link> */}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-emerald-400 mb-10">
              Company
            </h4>
            <ul className="space-y-4 text-slate-400 font-bold text-lg">
              <Link
                className="hover:text-white block transition-colors cursor-pointer"
                href={"/about#Mission_Vision"}
              >
                Our Mission
              </Link>
              <Link
                className="hover:text-white block transition-colors cursor-pointer"
                href={"/specialties"}
              >
                Clinical Depth
              </Link>
              <Link
                className="hover:text-white block transition-colors cursor-pointer"
                href={"/careers"}
              >
                Careers
              </Link>
              <Link
                href={"/about#Privacy_Security"}
                className="hover:text-white block  transition-colors cursor-pointer"
              >
                HIPAA Standards
              </Link>
              <Link
                href={"/about#Privacy_Security"}
                className="hover:text-white block transition-colors cursor-pointer"
              >
                Privacy & Security
              </Link>
            </ul>
          </div>
        </div>
        <div className="bg-white/5 lg:w-1/2 mx-auto p-10 rounded-3xl border border-white/10 backdrop-blur-md">
          <h4 className="text-xl font-black mb-6">Partner With Apollo</h4>
          <p className="text-slate-400 mb-8 leading-relaxed font-medium">
            Schedule a consultation with our Business Development team for a
            free revenue analysis.
          </p>
          <div className="text-center">
            <Link
              className="block px-3 py-4 rounded-lg  text-sm font-semibold uppercase tracking-widest shadow-2xl bg-blue-700 text-white hover:bg-blue-800  transition-all active:scale-95"
              href={"/contact"}
            >
              Get Free Audit
            </Link>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 font-bold md:text-sm text-xs">
            © {new Date().getFullYear()} Apollo Medical Billing, LLC. All Rights
            Reserved.
          </p>
          <div className="flex flex-wrap justify-center items-center md:gap-10 gap-2 pb-12">
            <div className="flex items-center gap-3 text-slate-500 text-xs font-black uppercase tracking-widest">
              <ShieldCheck size={20} className="text-blue-600" />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center gap-3 text-slate-500 text-xs font-black uppercase tracking-widest">
              <CheckCircle2 size={20} className="text-blue-600" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-3 text-slate-500 text-xs font-black uppercase tracking-widest">
              <Award size={20} className="text-blue-600" />
              <span>US-Based Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
