"use client"
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    expertise: [],
    summary: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle checkbox
  const handleCheckbox = (value) => {
    setFormData((prev) => {
      const exists = prev.expertise.includes(value);
      return {
        ...prev,
        expertise: exists
          ? prev.expertise.filter((item) => item !== value)
          : [...prev.expertise, value],
      };
    });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.experience ||
      !formData.summary ||
      formData.expertise.length === 0
    ) {
      toast.error("Please fill out all fields before submitting.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/jobApplication", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      toast.success("Your inquiry has been sent!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        experience: "",
        expertise: [],
        summary: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={4000} />

      <section
        className="relative min-h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/cf/d5/8e/cfd58ec52156c7161f46dd27edf9a7c9.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
          {/* Header */}
          <div className="text-center mb-12 text-white">
            <h1 className="text-3xl md:text-6xl font-semibold">
              Apollo Medical Careers
            </h1>
            <p className="mt-4 md:text-lg text-slate-100 font-semibold text-left max-w-3xl mx-auto">
              We are seeking experienced medical billing professionals with
              expertise in insurance claim handling, medical coding, and revenue
              cycle management.
              <br />
              Join our HIPAA-compliant medical billing team supporting healthcare
              providers across the United States.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Fill Out the Form
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full h-12 rounded-lg border border-slate-300 px-4 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-12 rounded-lg border border-slate-300 px-4 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Contact Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full h-12 rounded-lg border border-slate-300 px-4 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
              />

              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full h-12 rounded-lg border border-slate-300 px-4 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
              >
                <option value="">Years of Experience</option>
                <option>0 – 1 Years</option>
                <option>1 – 3 Years</option>
                <option>3 – 5 Years</option>
                <option>5+ Years</option>
              </select>

              {/* Expertise */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-600">
                {[
                  "Insurance Claim Handling",
                  "Medical Coding (CPT / ICD-10 / HCPCS)",
                  "Denial Management",
                  "Revenue Cycle Management (RCM)",
                ].map((item) => (
                  <label key={item} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.expertise.includes(item)}
                      onChange={() => handleCheckbox(item)}
                      className="text-blue-600"
                    />
                    {item}
                  </label>
                ))}
              </div>

              <textarea
                name="summary"
                rows="4"
                placeholder="Professional Summary"
                value={formData.summary}
                onChange={handleChange}
                className="w-full min-h-[120px] rounded-lg border border-slate-300 px-4 py-3 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>

          <p className="text-center text-sm text-slate-100 mt-6">
            All applications are handled confidentially. Equal opportunity
            employer.
          </p>
        </div>
      </section>
    </>
  );
};

export default page;
