"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const stats = [
  { label: "Completed Projects", value: "5,000+" },
  { label: "Exclusive Fabrics", value: "200+" },
  { label: "Years in Industry", value: "20+" },
  { label: "Team Members", value: "50+" }
];

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
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
      <div className="absolute inset-0 z-0 bg-[#1F2E5A]/60 lg:bg-gradient-to-r lg:from-[#1F2E5A]/60 lg:to-transparent" />
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
      {/* Background decoration. */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-xl blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-primary/10 rounded-xl blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 relative z-20">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-white drop-shadow-2xl">
              Elevate Your Space with <span className="text-primary drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]">Premium Curtains</span>
            </h1>
            <p className="text-base sm:text-xl text-white/90 max-w-lg leading-relaxed drop-shadow-lg">
              Discover our exclusive collection of window treatments designed to bring elegance and comfort to your home.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-[var(--accent-yellow)] text-slate-900 px-6 py-3 rounded-xl font-bold shadow-lg shadow-[#F4A300]/25 hover:scale-105 transition-transform">
                Browse Collection
              </button>
              <Link href="https://wa.me/917397223388" target="_blank" rel="noopener noreferrer">
                <button className="bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold text-lg hover:scale-105 transition-transform w-full sm:w-auto flex items-center justify-center gap-2 shadow-xl shadow-green-500/20">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp
                </button>
              </Link>
            </div>

            {/* Compact Stats Grid - Right under buttons */}
            <div className="pt-4 lg:pt-8 grid grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-4 lg:gap-y-6 w-fit">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-start space-y-1 group">
                  <div className="text-2xl lg:text-3xl font-black text-primary tracking-tighter drop-shadow-sm group-hover:scale-105 transition-transform duration-300 origin-left">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[8px] lg:text-[10px] italic leading-tight opacity-70 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:ml-auto w-full max-w-[380px] mx-auto lg:mx-0">
            <div className="premium-card-dark bg-secondary p-6 glassmorphism-dark border-white/10 rounded-xl">
              <h2 className="text-xl font-bold mb-5 text-white">Get a Free Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-3.5 py-1.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                    placeholder="John Doe"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full px-3.5 py-1.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                    placeholder="john@example.com"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-3.5 py-1.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                    placeholder="+1 234 567 890"
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">House Address</label>
                  <input
                    type="text"
                    required
                    className="w-full px-3.5 py-1.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                    placeholder="123 Luxury Ave, Suite 456"
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                  <textarea
                    rows={3}
                    className="w-full px-3.5 py-1.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
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
