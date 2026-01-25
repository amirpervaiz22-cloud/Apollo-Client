"use client"
import Button from '@/app/Components/Button';
import SectionHeading from '@/app/Components/SectionHeading';
import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
const page = () => {
 
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [practice, setPractice] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [billing, setBilling] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [goal, setGoal] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name,
      practice,
      email,
      phone,
      billing,
      goal,
      specialty,
    };
    console.log(payload);

    try {
      const response = await fetch("http://localhost:5000/newLead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        toast.success("Your inquiry has been sent!");
      } else {
        
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Something went wrong. Try later!");
    }
  };

  return (
    <div className="animate-in fade-in duration-1000">
      <section className="pt-40 pb-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-24">
            <div className="lg:w-1/2">
              <SectionHeading
                title="Speak With A Billing Strategist Today."
                subtitle="Ready to transform your practice revenue? Fill out the form below or call our onboarding department directly."
              />

              <div className="space-y-10 mt-16">
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm shadow-blue-200">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900  md:text-xl text-[17px] mb-1 uppercase tracking-wider">
                      Direct Line
                    </h4>
                    <p className="text-2xl font-medium text-slate-600">
                      (909) 460-8170
                    </p>
                    <p className="text-sm text-slate-400 mt-1 font-bold">
                      Mon - Fri • 8AM - 6PM EST
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm shadow-blue-200">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 md:text-xl text-[17px] mb-1 uppercase tracking-wider">
                      Email Us
                    </h4>
                    <p className="md:text-2xl text-sm font-medium text-slate-600">
                      info@apollomedbilling.com
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm shadow-blue-200">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 md:text-xl text-[17px] mb-1 uppercase tracking-wider">
                      Our HQ
                    </h4>
                    <p className="md:text-2xl text-sm font-medium text-slate-600 leading-tight">
                      9567 Arrow Route, Suite A
                      <br />
                      Rancho Cucamonga, CA 91730
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-20 p-8 bg-white border-2 border-blue-50 rounded-3xl flex flex-col md:flex-row items-center gap-8 shadow-2xl shadow-blue-900/5">
                <div className="w-24 h-24 rounded-full bg-blue-200 overflow-hidden shrink-0 border-4 border-blue-50 shadow-inner">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
                    alt="Sarah Johnson"
                  />
                </div>
                <div>
                  <p className="text-lg text-slate-700 italic font-medium leading-relaxed mb-4">
                    "I'll personally review your practice analysis and reach out
                    within 2 hours to discuss the next steps."
                  </p>
                  <p className="font-black text-blue-700 uppercase tracking-[0.2em] text-xs">
                    — Sarah Johnson, Virtual Assistant
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border border-slate-100 relative">
                <div className="absolute -top-6 left-12 px-6 py-2 bg-blue-700 text-white font-black uppercase text-xs tracking-[0.3em] rounded-full shadow-lg">
                  Talk to An Expert
                </div>
                {submitted ? (
                  <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner shadow-green-200">
                      <CheckCircle2 size={48} />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">
                      Lead Captured.
                    </h3>
                    <p className="text-xl text-slate-600 leading-relaxed mb-10">
                      Thank you for reaching out. Sarah Johnson will contact you
                      at the email provided within the next 2 business hours.
                    </p>
                    <div className="items-center">
                      <Button
                        className="mx-auto"
                        onClick={() => setSubmitted(false)}
                      >
                        Submit Another Inquiry
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="group">
                        <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3 group-focus-within:text-blue-600 transition-colors">
                          Full Name
                        </label>
                        <input
                          required
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          type="text"
                          className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium text-slate-800"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3 group-focus-within:text-blue-600 transition-colors">
                          Practice/Company
                        </label>
                        <input
                          required
                          type="text"
                          value={practice}
                          onChange={(e) => {
                            setPractice(e.target.value);
                          }}
                          className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium text-slate-800"
                          placeholder="MedLife Clinic"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3 group-focus-within:text-blue-600 transition-colors">
                        Work Email
                      </label>
                      <input
                        required
                        value={email}
                        type="email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium text-slate-800"
                        placeholder="john@medlife.com"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3 group-focus-within:text-blue-600 transition-colors">
                        Contact Phone
                      </label>
                      <input
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                        type="tel"
                        className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium text-slate-800"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3 group-focus-within:text-blue-600 transition-colors">
                        Current Billing Software (EHR)
                      </label>
                      <input
                        type="text"
                        value={billing}
                        onChange={(e) => {
                          setBilling(e.target.value);
                        }}
                        className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium text-slate-800"
                        placeholder="e.g. Epic, Athena, NextGen"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3 group-focus-within:text-blue-600 transition-colors">
                        Medical Specialty
                      </label>
                      <select
                        id="specialty"
                        value={specialty}
                        onChange={(e) => {
                          setSpecialty(e.target.value);
                        }}
                        required
                        className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl outline-none transition-all font-medium text-slate-800 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C/polyline%3E%3C/svg%3E')] bg-[length:1.25rem] bg-position-[right_1.25rem_center] bg-no-repeat"
                      >
                        <option value="" disabled defaultValue={true}>
                          Select your specialty
                        </option>
                        <option value="Primary Care">Primary Care</option>
                        <option value="Cardiology">Cardiology</option>
                        <option value="Neurology">Neurology</option>
                        <option value="Ophthalmology">Ophthalmology</option>
                        <option value="Orthopedics">Orthopedics</option>
                        <option value="Internal Medicine">
                          Internal Medicine
                        </option>
                        <option value="Pediatrics">Pediatrics</option>
                        <option value="Psychiatry">Psychiatry</option>
                        <option value="Dermatology">Dermatology</option>
                        <option value="Urgent Care">Urgent Care</option>
                        <option value="Surgery Center">Surgery Center</option>
                        <option value="DME Providers">DME Providers</option>
                        <option value="Other">Other Specialty</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3 group-focus-within:text-blue-600 transition-colors">
                        Challenges / Goals
                      </label>
                      <textarea
                        value={goal}
                        onChange={(e) => {
                          setGoal(e.target.value);
                        }}
                        className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all h-32 font-medium text-slate-800"
                        placeholder="Briefly describe your current billing issues..."
                      ></textarea>
                    </div>
                    <Button className="w-full py-5 text-xl font-black uppercase tracking-widest shadow-2xl">
                      Send Inquiry to Sarah
                    </Button>
                    <p className="text-xs text-center text-slate-400 font-bold leading-relaxed px-10">
                      By submitting, you consent to our HIPAA-compliant data
                      storage policies. We never share your data with third
                      parties.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default page