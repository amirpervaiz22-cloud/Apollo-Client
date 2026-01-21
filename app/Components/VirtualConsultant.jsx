"use client";
import { Play, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
const VirtualConsultant = ({
  message,
  type = "floating",
  title = "Meet Your Apollo Consultant",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (type === "inline") {
    return (
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100 flex flex-col md:flex-row max-w-4xl mx-auto my-12">
        <div className="md:w-1/3 bg-blue-100 relative min-h-[300px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
            alt="Sarah Johnson - Business Development Manager"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <button className="z-20 bg-white/95 p-5 rounded-full shadow-2xl hover:scale-110 transition-transform text-blue-700">
            <Play fill="currentColor" size={28} />
          </button>
        </div>
        <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full w-fit uppercase tracking-wider">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Personalized Introduction
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
          <p className="text-lg text-slate-600 mb-8 italic leading-relaxed">
            "{message}"
          </p>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-blue-700 flex items-center justify-center text-white text-xl font-bold border-2 border-blue-50 shadow-inner">
              SJ
            </div>
            <div>
              <p className="font-bold text-slate-900 text-lg">Sarah Johnson</p>
              <p className="text-sm text-slate-500 font-medium">
                Business Development Manager, Apollo Medical
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${isOpen ? "translate-y-0 opacity-100" : "translate-y-4 md:translate-y-0"}`}
    >
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-80 md:w-96 overflow-hidden border border-blue-100 animate-in fade-in zoom-in-95 duration-200">
          <div className="p-4 bg-blue-800 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100"
                  className="w-8 h-8 rounded-full border border-white/20"
                  alt="Sarah"
                />
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 border-2 border-blue-800 rounded-full"></div>
              </div>
              <span className="font-semibold text-sm">Sarah Johnson, BDM</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/10 p-1.5 rounded-lg transition-colors"
            >
              <X size={18} />
            </button>
          </div>
          <div className="relative aspect-video bg-slate-900 flex items-center justify-center group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
              alt="Consultant Video"
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
            />
            <div className="z-10 bg-white p-4 rounded-full shadow-lg text-blue-700 group-hover:scale-110 transition-transform">
              <Play fill="currentColor" size={20} />
            </div>
          </div>
          <div className="p-5">
            <p className="text-slate-700 text-sm leading-relaxed mb-5">
              "Hi! I'm Sarah. I personally manage new client onboarding. Click
              the button below to schedule a 15-minute practice audit."
            </p>
            <div className="text-center">
              <Link
                variant="primary"
                href={"/contact"}
                className="w-full  py-3 px-2 rounded-lg text-sm font-bold bg-blue-700 text-white hover:bg-blue-800 shadow-md transition-all active:scale-95"
              >
                Book My Free Audit
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-4 bg-white p-2.5 pr-8 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-blue-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100"
              className="md:w-10 md:h-10 lg:w-10 lg:h-10 w-8 h-8 rounded-full object-cover border-2 border-blue-600 shadow-sm"
              alt="Sarah"
            />
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div className="text-left">
            <p className="md:text-sm  text-[10px]  font-black text-blue-700 uppercase tracking-[0.15em] mb-0.5">
              Assigned Guide
            </p>
            <p className="md:text-sm text-[9.8px] font-bold text-slate-800">Chat with Sarah</p>
          </div>
        </button>
      )}
    </div>
  );
};
export default VirtualConsultant;
