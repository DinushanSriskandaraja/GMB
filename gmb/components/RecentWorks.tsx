'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Gallery = () => {
  const [allGalleryItems, setAllGalleryItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const res = await fetch('/api/public/gallery');
        const data = await res.json();
        if (data.gallery && data.gallery.length > 0) {
          setAllGalleryItems(data.gallery);
        }
      } catch (error) {
        console.error('Failed to fetch gallery:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchGallery();
  }, []);

  // Display exactly 5 items for the Bento Grid layout
  const displayedItems = allGalleryItems.slice(0, 5);

  if (loading) {
    return <div className="py-12 animate-pulse bg-slate-50/50 rounded-xl h-[500px] flex flex-col items-center justify-center text-slate-400 font-bold uppercase tracking-widest text-sm">Loading Recent Works...</div>;
  }

  const getBentoClass = (index: number) => {
    switch(index) {
      case 0: return 'col-span-2 row-span-2 md:col-span-2 md:row-span-2'; // Large 2x2
      case 1: return 'col-span-1 row-span-1 md:col-span-1 md:row-span-1'; // Small 1x1
      case 2: return 'col-span-1 row-span-1 md:col-span-1 md:row-span-1'; // Small 1x1
      case 3: return 'col-span-1 row-span-1 md:col-span-1 md:row-span-1'; // Small 1x1
      case 4: return 'col-span-1 row-span-1 md:col-span-1 md:row-span-1'; // Small 1x1
      default: return 'col-span-1 row-span-1 md:col-span-1 md:row-span-1';
    }
  };

  return (
    <section className="py-12 md:py-20 bg-transparent relative overflow-hidden" id="recent-works">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-2">
              <div className="w-6 h-px bg-primary" />
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-primary">Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-2">
              Our <span className="gradient-text"><span className="italic">Recent</span> Works</span>
            </h2>
            <p className="mt-2 text-slate-500 text-base md:text-lg leading-relaxed font-light">
              Explore our latest bespoke window treatments.
            </p>
          </div>

          <div className="shrink-0 pb-1">
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 text-slate-900 font-bold text-sm uppercase tracking-widest hover:text-primary transition-colors whitespace-nowrap"
            >
              <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-right group-hover:after:origin-left group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                View All Projects
              </span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3 md:gap-4 h-auto md:h-[320px] lg:h-[400px]">
          {displayedItems.map((item: any, index: number) => (
             <Link 
               href={`/gallery`}
               key={`${item.id}-${index}`} 
               className={`group relative rounded-3xl overflow-hidden block bg-slate-100 shadow-md hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 ${getBentoClass(index)}`}
               style={{ minHeight: '200px' }}
             >
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className={`absolute bottom-0 left-0 w-full flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ${index === 0 ? 'p-6 md:p-8' : 'p-4 md:p-5'}`}>
                   <div className="mb-3">
                     <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold uppercase tracking-[0.2em] shadow-sm">
                       {item.category}
                     </span>
                   </div>
                   <h3 className={`${index === 0 ? 'text-2xl md:text-4xl' : 'text-lg md:text-xl'} font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300 drop-shadow-md`}>
                     {item.title}
                   </h3>
                   
                   {/* Description */}
                   <div className={`overflow-hidden ${index === 0 ? 'min-h-[3rem]' : 'hidden sm:block'}`}>
                     <p className={`text-white/80 line-clamp-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 font-light ${index === 0 ? 'text-base' : 'text-xs'}`}>
                       {item.description}
                     </p>
                   </div>
                   
                   {/* Click icon */}
                   <div className={`absolute backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform transition-all duration-500 delay-200 ${index === 0 ? 'right-10 bottom-10 w-12 h-12 rounded-full bg-white/10 translate-x-4 group-hover:translate-x-0' : 'right-4 bottom-4 w-8 h-8 rounded-full bg-white/10 scale-0 group-hover:scale-100'}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                   </div>
                </div>
             </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
