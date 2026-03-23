"use client";

import { useState } from 'react';

const faqData = [
  {
    question: "Do you provide free on-site measurements?",
    answer: "Yes, we provide professional on-site measurements at no cost. Our experts will visit your space to ensure a perfect fit and provide a detailed consultation on styles and fabrics."
  },
  {
    question: "How long does the custom installation process take?",
    answer: "Typically, custom curtains and blinds are ready for installation within 2-3 weeks of the initial measurement. The actual installation usually takes only a few hours."
  },
  {
    question: "What is the warranty on motorized blinds?",
    answer: "Our smart motorized systems come with a comprehensive 5-year warranty on the motor and a 2-year warranty on the fabric and mounting hardware."
  },
  {
    question: "Are your fabrics child and pet safe?",
    answer: "Absolutely. We offer a wide range of cordless and motorized options that are safe for children and pets. All our fabrics also meet international safety and flame-retardant standards."
  },
  {
    question: "Can I request fabric samples before placing an order?",
    answer: "Yes! We encourage clients to see and feel the materials. You can request up to 5 fabric swatches to be delivered to your home for free."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Frequently Asked <span className="gradient-text italic">Questions</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Everything you need to know about our premium window treatments and services.
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="glassmorphism rounded-xl border border-white/40 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left focus:outline-none group"
              >
                <span className="text-base sm:text-lg font-bold text-slate-700 group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-primary text-white rotate-180' : 'bg-slate-100 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
              >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100/50 bg-white/30 backdrop-blur-sm">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
