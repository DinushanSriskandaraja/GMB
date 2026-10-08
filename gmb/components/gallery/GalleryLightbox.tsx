'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

interface GalleryLightboxProps {
  item: any;
  onClose: () => void;
  onPrev: (e?: React.MouseEvent) => void;
  onNext: (e?: React.MouseEvent) => void;
  currentIndex: number;
  totalItems: number;
  isSaved: boolean;
  onSave: (item: any) => void;
}

const GalleryLightbox = ({
  item,
  onClose,
  onPrev,
  onNext,
  currentIndex,
  totalItems,
  isSaved,
  onSave
}: GalleryLightboxProps) => {

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 backdrop-blur-xl p-4 md:p-8"
        onClick={onClose}
      >
        <div className="absolute top-6 right-6 flex items-center gap-4">
           {/* Pagination */}
           <div className="text-white/40 text-[10px] uppercase font-bold tracking-[0.4em] mr-4">
            {currentIndex + 1} <span className="text-white/20">/</span> {totalItems}
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-slate-900 transition-all flex items-center justify-center"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(e); }}
          className="absolute left-4 md:left-8 z-[110] w-14 h-14 rounded-full bg-white/5 hover:bg-white text-white hover:text-slate-900 transition-all flex items-center justify-center group"
        >
          <svg className="w-8 h-8 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); onNext(e); }}
          className="absolute right-4 md:right-8 z-[110] w-14 h-14 rounded-full bg-white/5 hover:bg-white text-white hover:text-slate-900 transition-all flex items-center justify-center group"
        >
          <svg className="w-8 h-8 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl h-full max-h-[85vh] bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image Side */}
          <div className="relative flex-grow h-full bg-slate-100">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Info Side */}
          <div className="w-full md:w-[350px] p-8 md:p-12 flex flex-col justify-between bg-white">
            <div className="space-y-8">
              <div>
                <span className="text-[#1F2E5A] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Project Detail</span>
                <h2 className="text-3xl font-medium text-slate-900 leading-tight mb-4">{item.title}</h2>
                <div className="h-1 w-12 bg-[#1F2E5A]/10 rounded-full" />
              </div>

              <div className="grid gap-6">
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest block mb-2">Location</span>
                  <span className="text-slate-900 font-medium">{item.location || item.room || 'Not Specified'}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest block mb-2">Style</span>
                  <span className="text-slate-900 font-medium">{item.category || item.style || 'Bespoke'}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 w-full">
              <button
                onClick={() => onSave(item)}
                className="flex-1 py-4 rounded-2xl font-bold text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 bg-[#1F2E5A] text-white hover:bg-slate-900 shadow-xl"
              >
                Consult Now
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  let matchSlug = 'tranquil-blockout'; // default
                  let styleQuery = '';
                  const cat = (item.category || item.style || '').toLowerCase();
                  
                  if (cat.includes('sheer')) matchSlug = 'catalina-sheer';
                  else if (cat.includes('curtain') || cat.includes('drape')) matchSlug = 'eclipse-blockout';
                  else if (cat.includes('blind')) matchSlug = 'tranquil-blockout';

                  if (cat.includes('s-fold') || cat.includes('s fold') || cat.includes('wave fold')) {
                    styleQuery = '?style=S%20Fold';
                  } else if (cat.includes('pinch')) {
                    styleQuery = '?style=Triple%20Pinch%20Pleat';
                  } else if (cat.includes('pencil') || cat.includes('pocket')) {
                    styleQuery = '?style=Pencil%20Pleat';
                  }

                  window.location.href = `/store/${matchSlug}${styleQuery}`;
                }}
                className="flex-1 py-4 rounded-2xl font-bold text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 bg-[#3d9e41] text-white hover:bg-[#2f7a32] shadow-xl"
              >
                Buy Now
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GalleryLightbox;
