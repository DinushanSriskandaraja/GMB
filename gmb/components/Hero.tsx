"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const stats = [
  { label: "Projects Completed", value: "5,000+", icon: "✦" },
  { label: "Premium Fabrics", value: "200+", icon: "✦" },
  { label: "Years Experience", value: "20+", icon: "✦" },
  { label: "Happy Families", value: "4,800+", icon: "✦" },
];

const trustBadges = [
  "Free In-Home Measurement",
  "Expert Installation",
  "3-Year Warranty",
];

const backgroundImages = [
  '/images/curtain1.png',
  '/images/curtain2.png',
  '/images/curtain3.png',
  '/images/curtain4.png',
  '/images/curtain5.png',
];

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    roomType: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [formError, setFormError] = useState('');
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setFormError('Name and phone are required.');
      return;
    }
    setFormError('');
    setSubmitting(true);
    await new Promise(res => setTimeout(res, 900));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#0a1628]">

      {/* Background images with crossfade */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((img, idx) => (
          <div
            key={img}
            className="absolute inset-0 transition-opacity duration-[2500ms] ease-in-out"
            style={{ opacity: idx === currentImage ? 1 : 0 }}
          >
            <Image
              src={img}
              alt=""
              fill
              className="object-cover"
              priority={idx === 0}
              sizes="100vw"
            />
          </div>
        ))}
        {/* Layered overlays for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/80 to-[#0a1628]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/70 via-transparent to-[#0a1628]/30" />
      </div>

      {/* Ambient glow accents */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#F4A300]/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Dot-grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      {/* Progress dot nav for slides */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {backgroundImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={`transition-all duration-500 rounded-full ${idx === currentImage
              ? 'w-6 h-2 bg-primary'
              : 'w-2 h-2 bg-white/30 hover:bg-white/60'
              }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT: Copy */}
          <div className="space-y-7">

            {/* Eyebrow badge */}
            {/* <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 backdrop-blur-sm text-primary px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Premium Window Treatments</span>
            </div> */}

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.07] text-white">
              Transform Your{' '}
              <span
                className="relative inline-block"
                style={{
                  background: 'linear-gradient(135deg, #4CAF50 0%, #a5f3b4 60%, #F4A300 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Dream Home
              </span>
              <br />with Bespoke Curtains
            </h1>

            {/* Sub-headline */}
            <p className="text-lg text-white/75 max-w-lg leading-relaxed">
              Handcrafted window treatments tailored to your exact dimensions. <strong className="text-white/90 font-semibold">Free measurement. Expert installation. Delivered on time.</strong>
            </p>

            {/* Trust badges row */}
            <div className="flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-1.5 bg-white/8 border border-white/12 backdrop-blur-sm text-white/80 px-3 py-1.5 rounded-lg text-xs font-semibold"
                >
                  <svg className="w-3.5 h-3.5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {badge}
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/gallery">
                <button
                  className="group relative overflow-hidden text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: 'linear-gradient(135deg, #166534 0%, #16a34a 55%, #22c55e 100%)',
                    boxShadow: '0 8px 24px -4px rgba(22,163,74,0.55), inset 0 1px 0 rgba(255,255,255,0.15)'
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Portfolio
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                    style={{ background: 'linear-gradient(135deg, #15803d 0%, #4ade80 100%)' }}
                  />
                </button>
              </Link>
              <Link href="https://wa.me/917397223388" target="_blank" rel="noopener noreferrer">
                <button
                  className="group flex items-center gap-2.5 text-white px-7 py-3.5 rounded-xl font-bold text-sm hover:-translate-y-0.5 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #075e54 0%, #128c7e 50%, #25D366 100%)',
                    boxShadow: '0 8px 24px -4px rgba(37,211,102,0.45), inset 0 1px 0 rgba(255,255,255,0.12)'
                  }}
                >
                  <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Chat on WhatsApp
                </button>
              </Link>
            </div>

            {/* Stats row */}
            <div className="pt-2 grid grid-cols-4 gap-2 border-t border-white/10">
              {stats.map((stat, i) => (
                <div key={i} className="text-center py-3 group">
                  <div
                    className="text-2xl lg:text-3xl font-black"
                    style={{
                      background: 'linear-gradient(135deg, #4CAF50, #a5f3b4)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-[10px] font-bold uppercase tracking-widest mt-0.5 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Lead-gen Form */}
          <div className="lg:ml-auto w-full max-w-[420px] mx-auto lg:mx-0">
            <div className="relative rounded-2xl overflow-hidden">
              {/* Card glow border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/40 via-transparent to-[#F4A300]/20 p-px">
                <div className="absolute inset-0 rounded-2xl" />
              </div>

              <div
                className="relative rounded-2xl p-7"
                style={{
                  background: 'rgba(10, 20, 45, 0.85)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(76,175,80,0.25)',
                  boxShadow: '0 32px 64px -16px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)'
                }}
              >
                {/* Form header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex -space-x-2">
                      {['/images/curtain5.png', '/images/curtain2.png', '/images/curtain3.png'].map((src, i) => (
                        <div key={i} className="w-7 h-7 rounded-full border-2 border-[#0a1628] overflow-hidden relative">
                          <Image src={src} alt="" fill className="object-cover" sizes="28px" />
                        </div>
                      ))}
                    </div>
                    <span className="text-white/60 text-xs font-semibold">4,800+ happy customers</span>
                  </div>
                  <h2 className="text-xl font-black text-white leading-tight mt-3">
                    Get a Free Quote &amp; <br />
                    <span className="text-primary">In-Home Consultation</span>
                  </h2>
                  <p className="text-white/50 text-xs mt-1.5">No obligation · Expert advice · 24h response</p>
                </div>

                {submitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">Thank you, {formData.name || 'friend'}!</p>
                      <p className="text-white/55 text-sm mt-1">Our team will call you within 24 hours to schedule your free consultation.</p>
                    </div>
                    <Link href="https://wa.me/917397223388" target="_blank" rel="noopener noreferrer">
                      <button className="mt-2 w-full bg-[#25D366] text-white py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                        Also Chat on WhatsApp
                      </button>
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-white/60 mb-1.5 uppercase tracking-widest">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-primary/60 focus:bg-white/8 focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-white/60 mb-1.5 uppercase tracking-widest">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-primary/60 focus:bg-white/8 focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-white/60 mb-1.5 uppercase tracking-widest">Room / Project Type</label>
                      <select
                        value={formData.roomType}
                        onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer"
                        style={{ colorScheme: 'dark' }}
                      >
                        <option value="" disabled style={{ background: '#0a1628' }}>Select room type…</option>
                        <option value="Living Room" style={{ background: '#0a1628' }}>Living Room</option>
                        <option value="Bedroom" style={{ background: '#0a1628' }}>Bedroom</option>
                        <option value="Office" style={{ background: '#0a1628' }}>Office / Commercial</option>
                        <option value="Kitchen" style={{ background: '#0a1628' }}>Kitchen</option>
                        <option value="Dining Area" style={{ background: '#0a1628' }}>Dining Area</option>
                        <option value="Balcony" style={{ background: '#0a1628' }}>Balcony</option>
                        <option value="Full Home" style={{ background: '#0a1628' }}>Full Home Package</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-white/60 mb-1.5 uppercase tracking-widest">Address / Area</label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="Your city or area"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-primary/60 focus:bg-white/8 focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>

                    {formError && (
                      <p className="text-red-400 text-xs font-semibold">{formError}</p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full relative overflow-hidden py-3.5 rounded-xl font-black text-sm tracking-wide transition-all duration-300 disabled:opacity-60 mt-2 hover:-translate-y-0.5"
                      style={{
                        background: 'linear-gradient(135deg, #b45309 0%, #d97706 30%, #F4A300 65%, #fbbf24 100%)',
                        color: '#1a0a00',
                        boxShadow: '0 10px 36px -4px rgba(244,163,0,0.55), 0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.25)'
                      }}
                    >
                      {submitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending…
                        </span>
                      ) : (
                        '🎯 Book My Free Consultation'
                      )}
                    </button>

                    {/* Micro trust text */}
                    <p className="text-center text-white/30 text-[11px] leading-snug">
                      🔒 Your details are 100% private. No spam, ever.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Social proof below card */}
            <div className="mt-4 flex items-center justify-center gap-4 text-white/40 text-xs">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                4.9/5 Rating
              </span>
              <span>·</span>
              <span>Trusted by 4,800+ Families</span>
              <span>·</span>
              <span>Since 2004</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
