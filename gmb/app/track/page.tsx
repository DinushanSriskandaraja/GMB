'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useModal } from '@/lib/ModalContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TrackOrderPage() {
  const { openTrackModal } = useModal();
  const router = useRouter();

  useEffect(() => {
    // Open the modal automatically when visiting the page
    openTrackModal();
  }, [openTrackModal]);

  return (
    <main className="min-h-[70vh] bg-transparent">
      <Navbar />
      <div className="pt-48 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold mb-6 text-slate-900">Track Your <span className="gradient-text">Order</span></h1>
        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
          Our new simplified tracking system is now available as a convenient popup!
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <button 
            onClick={openTrackModal}
            className="bg-primary text-white px-12 py-5 rounded-xl font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-primary/20"
          >
            Open Order Tracker
          </button>
          
          <button 
            onClick={() => router.push('/')}
            className="text-slate-600 font-bold hover:text-primary transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
