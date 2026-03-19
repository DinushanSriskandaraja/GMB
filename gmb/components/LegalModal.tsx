'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: 'terms' | 'privacy';
}

const LegalModal = ({ isOpen, onClose, title, type }: LegalModalProps) => {
  const content = {
    terms: (
      <div className="space-y-6">
        <section>
          <h4 className="text-lg font-bold text-slate-800 mb-3">1. Introduction</h4>
          <p className="text-slate-600 leading-relaxed">
            Welcome to GMB. These Terms and Conditions govern your use of our website and services. By accessing our site, you agree to follow these rules.
          </p>
        </section>
        <section>
          <h4 className="text-lg font-bold text-slate-800 mb-3">2. Custom Orders</h4>
          <p className="text-slate-600 leading-relaxed">
            Our products are artisan-crafted and often made-to-measure. Once a custom order is confirmed and production has begun, changes or cancellations may not be possible. Please ensure all measurements are accurate before final submission.
          </p>
        </section>
        <section>
          <h4 className="text-lg font-bold text-slate-800 mb-3">3. Professional Measurement</h4>
          <p className="text-slate-600 leading-relaxed">
            For the best results, we recommend our "Request a Professional Measurement" service. GMB is not responsible for fitting issues arising from customer-provided measurements.
          </p>
        </section>
        <section>
          <h4 className="text-lg font-bold text-slate-800 mb-3">4. Payments</h4>
          <p className="text-slate-600 leading-relaxed">
            All prices are in USD unless stated otherwise. Full payment or a specified deposit is required before production on custom window treatments begins.
          </p>
        </section>
        <section>
          <h4 className="text-lg font-bold text-slate-800 mb-3">5. Intellectual Property</h4>
          <p className="text-slate-600 leading-relaxed">
            All designs, images, and content on this website are the property of GMB and TribeTek, protected by international copyright laws.
          </p>
        </section>
      </div>
    ),
    privacy: (
      <div className="space-y-6">
        <section>
          <h4 className="text-lg font-bold text-slate-800 mb-3">1. Information We Collect</h4>
          <p className="text-slate-600 leading-relaxed">
            We collect information that you provide directly to us, such as when you request a quote, create an account, or contact our support team. This may include your name, email, phone number, and house address.
          </p>
        </section>
        <section>
          <h4 className="text-lg font-bold text-slate-800 mb-3">2. How We Use Your Data</h4>
          <p className="text-slate-600 leading-relaxed">
            Your information is used to process orders, provide professional measurement services, and communicate updates about your project. We do not sell your personal data to third parties.
          </p>
        </section>
        <section>
          <h4 className="text-lg font-bold text-slate-800 mb-3">3. Data Security</h4>
          <p className="text-slate-600 leading-relaxed">
            We implement industry-standard security measures to protect your information. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>
        <section>
          <h4 className="text-lg font-bold text-slate-800 mb-3">4. Cookies</h4>
          <p className="text-slate-600 leading-relaxed">
            Our website uses cookies to enhance your browsing experience and analyze site traffic. You can manage your cookie preferences through your browser settings.
          </p>
        </section>
        <section>
          <h4 className="text-lg font-bold text-slate-800 mb-3">5. Your Rights</h4>
          <p className="text-slate-600 leading-relaxed">
            You have the right to access, correct, or delete your personal information held by GMB. Contact us at info@curtainmaster.com for any privacy-related inquiries.
          </p>
        </section>
      </div>
    )
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] border border-slate-100"
          >
            {/* Header */}
            <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <h3 className="text-2xl font-bold text-slate-800">{title}</h3>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-slate-200/50 flex items-center justify-center hover:bg-slate-200 transition-colors group"
              >
                <svg className="w-6 h-6 text-slate-500 group-hover:text-slate-800 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-8 overflow-y-auto custom-scrollbar flex-1">
              {content[type]}
              <div className="mt-12 pt-8 border-t border-slate-100 text-center text-sm text-slate-400">
                Last updated: March 2026 • © GMB Window Treatments
              </div>
            </div>

            {/* Footer Action */}
            <div className="p-6 bg-slate-50/50 border-t border-slate-100 flex justify-center">
              <button
                onClick={onClose}
                className="px-10 py-2 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-all"
              >
                I Understand
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LegalModal;
