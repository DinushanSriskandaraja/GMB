'use client';

import { useModal } from '@/lib/ModalContext';
import Link from 'next/link';

const Footer = () => {
  const { openTrackModal, openTermsModal, openPrivacyModal } = useModal();

  return (
    <footer className="bg-gradient-to-br from-[#0F172A] via-[#1F2E5A] to-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">

        {/* Main Grid: Brand | Links | Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold block mb-3">
              <span className="text-primary">G</span><span className="text-white">M</span><span className="text-[#F4A300]">B</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed">
              Premium window treatments for modern homes and offices.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-primary hover:text-white hover:border-primary transition-all">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-primary hover:text-white hover:border-primary transition-all">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.063-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.28.058-2.153.262-2.918.558-.792.308-1.465.72-2.134 1.39-.67.67-1.082 1.342-1.39 2.134-.296.765-.5 1.638-.558 2.918-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.28.262 2.153.558 2.918.308.792.72 1.465 1.39 2.134.67.67 1.342 1.082 2.134 1.39.765.296 1.638.5 2.918.558 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.28-.058 2.153-.262 2.918-.558.792-.308 1.465-.72 2.134-1.39.67-.67 1.082-1.342 1.39-2.134.296-.765.5-1.638.558-2.918.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.28-.262-2.153-.558-2.918-.308-.792-.72-1.465-1.39-2.134-.67-.67-1.342-1.082-2.134-1.39-.765-.296-1.638-.5-2.918-.558-1.28-.058-1.688-.072-4.947-.072z" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/40 hover:text-primary text-sm transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-white/40 hover:text-primary text-sm transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-white/40 hover:text-primary text-sm transition-colors">Products</Link></li>
              <li><Link href="/contact" className="text-white/40 hover:text-primary text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@curtainmaster.com" className="text-white/40 hover:text-primary text-sm transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  info@curtainmaster.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-white/40 hover:text-primary text-sm transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="h-px bg-white/10 mb-5" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs">&copy; 2026 GMB. All rights reserved to TribeTek.</p>
          <div className="flex items-center gap-4">
            <button onClick={openTermsModal} className="text-white/30 hover:text-primary text-[10px] uppercase tracking-widest font-bold transition-colors bg-transparent border-none p-0 cursor-pointer">Terms</button>
            <button onClick={openPrivacyModal} className="text-white/30 hover:text-primary text-[10px] uppercase tracking-widest font-bold transition-colors bg-transparent border-none p-0 cursor-pointer">Privacy</button>
            <button onClick={openTrackModal} className="text-white/30 hover:text-primary text-[10px] uppercase tracking-widest font-bold transition-colors bg-transparent border-none p-0 cursor-pointer">Track Order</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
