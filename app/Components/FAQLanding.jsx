"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What medical billing services do you provide?",
    answer:
      "Apollo Medical Billing Systems provides end-to-end medical billing services including charge entry, claim submission, payment posting, denial management, AR follow-ups, and revenue cycle optimization for healthcare providers."
  },
  {
    question: "Which medical specialties do you support?",
    answer:
      "We support a wide range of medical specialties including primary care, cardiology, neurology, orthopedics, pediatrics, psychiatry, dermatology, urgent care, surgery centers, and DME providers."
  },
  {
    question: "How do you reduce claim denials?",
    answer:
      "We proactively scrub claims, ensure coding accuracy, verify insurance eligibility, and continuously follow up on rejected or denied claims to maximize first-pass acceptance rates."
  },
  {
    question: "Are you HIPAA compliant?",
    answer:
      "Yes. Apollo Medical Billing Systems follows strict HIPAA compliance protocols, ensuring patient data security, confidentiality, and regulatory adherence at every stage of the billing process."
  },
  {
    question: "How do you improve accounts receivable (AR)?",
    answer:
      "Our dedicated AR team tracks unpaid claims, communicates with payers, resolves discrepancies, and accelerates reimbursements to keep your cash flow healthy."
  },
  {
    question: "Do you work with small practices and large groups?",
    answer:
      "Yes. We work with solo providers, small practices, multi-location clinics, and large physician groups, offering scalable medical billing solutions."
  },
  {
    question: "How long does onboarding take?",
    answer:
      "Onboarding typically takes 1–2 weeks, depending on practice size and payer setup. Our team ensures a smooth transition with minimal disruption to your operations."
  },
  {
    question: "How does your pricing work?",
    answer:
      "We operate on a success-based pricing model. Our compensation is tied directly to collections, meaning we only succeed when your practice gets paid. There are no hidden fees, long-term lock-ins, or incentives to inflate volumes our focus is maximizing compliant reimbursements."
  }
];

export default function MedicalBillingFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-blue-600/30 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex text-lg justify-between items-center px-6 py-4 text-left bg-white hover:bg-blue-600/5 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`h-5 w-5 text-emerald-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid text-lg transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0 "
                }`}
              >
                <div className="overflow-hidden px-6 pb-4 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
