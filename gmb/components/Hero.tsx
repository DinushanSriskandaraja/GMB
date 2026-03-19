"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [currentImage, setCurrentImage] = useState(0);
  const backgroundImages = [
    '/images/curtain1.png',
    '/images/curtain2.png',
    '/images/curtain3.png',
    '/images/curtain4.png',
    '/images/curtain5.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for form submission will be added with server actions
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
  };

  return (
    <div className="relative min-h-[70vh] flex items-center py-20 pt-24 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-[#0F172A]">
      {/* Background Image Swapper Overlay */}
      <div className="absolute inset-0 z-0 bg-[#1F2E5A]/60 lg:bg-gradient-to-r lg:from-[#1F2E5A]/90 lg:to-transparent" />
      <div className="absolute  inset-0 z-0 overflow-hidden pointer-events-none">
        {backgroundImages.map((img, idx) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${idx === currentImage ? 'opacity-30' : 'opacity-0'
              }`}
          >
            <Image
              src={img}
              alt="Background"
              fill
              className="object-cover"
              priority={idx === 0}
            />
          </div>
        ))}
      </div>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-xl blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-primary/10 rounded-xl blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-20">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-2xl">
              Elevate Your Space with <span className="text-primary drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">Premium Curtains</span>
            </h1>
            <p className="text-xl text-white/90 max-w-lg leading-relaxed drop-shadow-lg">
              Discover our exclusive collection of window treatments designed to bring elegance and comfort to your home.
            </p>
            <div className="flex space-x-4">
              <button className="bg-[var(--accent-yellow)] text-slate-900 px-6 py-3 rounded-xl font-bold shadow-lg shadow-[#F4A300]/25 hover:scale-105 transition-transform">
                Browse Collection
              </button>
              <Link
                href="/products"
                className="bg-transparent border-2 border-primary/50 text-white px-6 py-3 rounded-xl font-bold hover:bg-primary/20 transition-colors flex items-center justify-center"
              >
                View Gallery
              </Link>
            </div>
          </div>

          <div className="lg:ml-auto w-full max-w-md">
            <div className="premium-card-dark bg-secondary p-8 glassmorphism-dark border-white/10">
              <h2 className="text-2xl font-bold mb-6 text-white">Get a Free Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="John Doe"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="john@example.com"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="+1 234 567 890"
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Tell us what you're looking for..."
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[var(--accent-yellow)] text-slate-900 py-3 rounded-xl font-bold shadow-lg shadow-[#F4A300]/20 hover:opacity-90 transition-opacity mt-4"
                >
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
