'use client';

import { useModal } from '@/lib/ModalContext';
import Link from 'next/link';

const Navbar = () => {
  const { openTrackModal } = useModal();

  return (
    <nav className="fixed top-0 w-full z-50 glassmorphism border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold gradient-text">
              CurtainMaster
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-slate-300 hover:text-primary transition-colors font-medium">Home</Link>
              <Link href="/about" className="text-slate-300 hover:text-primary transition-colors font-medium">About</Link>
              <Link href="/contact" className="text-slate-300 hover:text-primary transition-colors font-medium">Contact</Link>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={openTrackModal}
              className="bg-primary text-white px-5 py-2 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Track Order
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
