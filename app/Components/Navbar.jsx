"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Specialties", href: "/specialties" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className=" font-sans text-slate-900 bg-blue selection:bg-blue-100 selection:text-white antialiased">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-100 transition-all duration-500 ${isScrolled ? "bg-blue-600 shadow-2xl py-3 border-b border-slate-100" : "bg-transparent py-6 md:py-8"}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link className="flex items-center gap-3 group" href={"/"}>
            <div className="w-22 h-22  rounded-full flex items-center justify-center text-white shadow-2xl group-hover:rotate-12 transition-trans<form duration-300">
              <img
                className="rounded-full"
                src="./logo.jpeg"
                alt="Apollo Logo"
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-black text-blue-600 tracking-tight leading-none ${isScrolled && "text-white"}`}>
                APOLLO
              </span>
              <span className={`text-xs font-black tracking-[0.4em] text-black uppercase ${isScrolled && "text-emerald-400"}`}>
                Medical Billing
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm select-none font-black uppercase tracking-[0.2em] transition-all relative group py-2 ${isActive ? "text-blue-700" : "text-slate-700 hover:text-blue-700"} ${isScrolled && "text-white hover:text-white"}`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-emerald-400 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  ></span>
                </Link>
              );
            })}
            <Link
              href="/contact"
              className={`bg-blue-700 px-3 select-none py-3 tracking-widest font-semibold rounded-lg text-white hover:bg-blue-800 shadow transition-all active:scale-95 ${isScrolled && "bg-emerald-600 hover:bg-emerald-700"}`}
            >
              Free Consultation
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-100 flex flex-col p-10 gap-8 animate-in slide-in-from-top-4 duration-300 h-[calc(100vh-80px)] overflow-y-auto z-100">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  href={link.href}
                  key={link.href}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left text-3xl font-black uppercase tracking-widest ${isActive ? "text-blue-700" : "text-slate-900"}`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="mt-[40%] text-center">
              <Link
                href="/contact"
                onClick={()=>{setIsMobileMenuOpen(false)}}
                className="bg-blue-700 px-2 items-center py-3 rounded-lg  text-white shadow-blue-200 hover:bg-blue-800 shadow-md transition-all active:scale-95"
              >
                Get Free Consultation
              </Link>
              <p className="text-center mt-6 text-slate-400 font-bold uppercase tracking-widest text-xs">
                Call Us: (909) 460-8170
              </p>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
