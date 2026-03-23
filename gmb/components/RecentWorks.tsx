'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Gallery = () => {
  const [allGalleryItems, setAllGalleryItems] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
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

  useEffect(() => {
    if (allGalleryItems.length === 0) return;

    // Cycle the displayed images automatically
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % Math.min(allGalleryItems.length, 5));
    }, 4000);

    return () => clearInterval(interval);
  }, [allGalleryItems]);

  // Display the 5 items for the Accordion
  const displayedItems = allGalleryItems.slice(0, 5);

  if (loading) {
    return <div className="py-12 animate-pulse bg-slate-50/50 rounded-xl h-[400px] flex flex-col items-center justify-center text-slate-400 font-bold uppercase tracking-widest text-sm">Loading Recent Works...</div>;
  }

  return (
    <section className="py-8 md:py-12 bg-transparent relative overflow-hidden" id="recent-works">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-2">
              <div className="w-6 h-px bg-primary" />
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-primary">Portfolio</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter leading-tight text-slate-900">
              Our <span className="gradient-text">Recent Works</span>
            </h2>
            <p className="mt-2 text-slate-500 text-sm leading-relaxed font-medium">
              Explore our latest bespoke window treatments.
            </p>
          </div>

          <div className="shrink-0 pb-1">
            <Link
              href="/gallery"
              className="flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-primary transition-all shadow-lg shadow-slate-900/10 hover:shadow-primary/20 group whitespace-nowrap"
            >
              View Gallery
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Premium Expanding Cards (Horizontal Accordion) Layout */}
        <div className="flex w-full h-[300px] md:h-[350px] gap-2 lg:gap-3 overflow-hidden rounded-xl md:rounded-xl mt-6 bg-slate-50/20 p-1.5 backdrop-blur-sm shadow-inner">
          {displayedItems.map((item: any, index: number) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={`${item.id}-${index}`}
                onMouseEnter={() => setActiveIndex(index)}
                className={`relative h-full rounded-[14px] md:rounded-xl overflow-hidden cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'flex-[4] md:flex-[5] shadow-xl shadow-primary/10' : 'flex-[1] shadow-sm hover:flex-[1.2]'}`}
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes={isActive ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 20vw, 10vw"}
                  className={`object-cover transition-transform duration-[4000ms] ease-out origin-center ${isActive ? 'scale-105' : 'scale-100'}`}
                />

                {/* Gradient Overlays */}
                <div className={`absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/10 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-80'}`} />
                <div className={`absolute inset-0 bg-primary/20 mix-blend-overlay transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-100'}`} />

                {/* Vertical Category Badge (When Inactive) */}
                <div className={`absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center pointer-events-none transition-all duration-500 ${isActive ? 'opacity-0 scale-90' : 'opacity-100 scale-100 delay-200'}`}>
                  <h4 className="text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase whitespace-nowrap -rotate-90 origin-center drop-shadow-md">
                    {item.title}
                  </h4>
                </div>

                {/* Bottom Content Area (When Active) */}
                <div className={`absolute bottom-0 left-0 w-full p-4 md:p-6 flex flex-col justify-end pointer-events-none transition-all duration-500 ease-out transform ${isActive ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-6'}`}>

                  {/* Category Pill */}
                  <div className="mb-2 pointer-events-auto">
                    <span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold uppercase tracking-[0.2em] inline-block">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-wide drop-shadow-md leading-tight">
                    {item.title}
                  </h3>

                  <div className={`overflow-hidden transition-all duration-500 ease-in-out hidden sm:block ${isActive ? 'max-h-20 opacity-100 mb-4' : 'max-h-0 opacity-0 mb-0'}`}>
                    <p className="text-white/80 text-[11px] md:text-xs leading-relaxed max-w-lg line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="pointer-events-auto mt-1">
                    <Link
                      href={`/products?category=${item.category}`}
                      className="inline-flex items-center gap-3 text-white font-bold text-[9px] md:text-[10px] tracking-[0.2em] uppercase origin-left transition-all hover:text-primary group/link"
                    >
                      <span className="w-6 h-px bg-current transition-all group-hover/link:w-10" />
                      View Details
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
