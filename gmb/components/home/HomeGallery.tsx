'use client';

import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { AnimatePresence } from 'framer-motion';

import GalleryFilters from '@/components/gallery/GalleryFilters';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import GalleryLightbox from '@/components/gallery/GalleryLightbox';

export default function HomeGallery() {
  const [galleryItems, setGalleryItems] = useState<any[]>([]);
  const [activeLocation, setActiveLocation] = useState('All');
  const [loading, setLoading] = useState(true);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const { addToCart, cartItems } = useCart();

  const isSaved = (id: string) => cartItems.some(item => item.id === id);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const res = await fetch('/api/public/products');
        const data = await res.json();
        if (data.gallery?.length > 0) {
            setGalleryItems(data.gallery);
        }
      } catch (error) {
        console.error('Failed to fetch gallery:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchGallery();
  }, []);

  const availableLocations = Array.from(
    new Set(galleryItems.map(item => item.location || item.room).filter(Boolean))
  ) as string[];

  const filteredItems = galleryItems.filter(item => {
    const itemLocation = item.location || item.room || 'Unknown';
    const matchesLocation = activeLocation === 'All' || itemLocation === activeLocation;
    return matchesLocation;
  });

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % filteredItems.length);
    }
  };

  const handleSave = (item: any) => {
    if (isSaved(item.id)) return;
    addToCart({
      id: item.id,
      name: item.title,
      price: 0,
      image: item.image,
      category: item.category || 'Portfolio',
      cartType: 'consult'
    });
  };

  if (loading) {
    return (
      <div className="py-32 flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-slate-100 border-t-[#1F2E5A] rounded-full animate-spin"></div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Loading Portfolio...</span>
        </div>
      </div>
    );
  }

  // Use a truncated version for Home by default to preserve the bento feel, or let the user see all via categories?
  // Let's show up to 8 items on the home page initially if "All" is selected, unless we want the full gallery.
  // The user says "make it visible keep it on home page", so we just show the whole gallery grid!
  const displayedItems = filteredItems.slice(0, 12); // limit to 12 on home page so it doesn't take forever to scroll

  return (
    <section className="bg-white py-24 md:py-32" id="gallery">
      {/* Header for home page */}
      <div className="container max-w-7xl mx-auto px-6 mb-12">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-[#1F2E5A]" />
            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#1F2E5A]">Our Portfolio</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-medium tracking-tight text-[#0f172a] mb-6 leading-[1.1]">
            Featured masterpieces.
          </h2>
          <p className="text-slate-600 leading-relaxed font-light text-sm md:text-base">
            A curated selection of our finest installations — precision crafted and immaculately installed.
          </p>
        </div>
      </div>
      
      <GalleryFilters 
        locations={availableLocations} 
        activeLocation={activeLocation} 
        onFilterChange={(loc) => {
          setActiveLocation(loc);
          setSelectedIdx(null);
        }}
      />

      <GalleryGrid 
        items={displayedItems}
        isSaved={isSaved}
        onSelect={(idx) => setSelectedIdx(idx)}
        onSave={handleSave}
        onClearFilters={() => setActiveLocation('All')}
      />

      {displayedItems.length < filteredItems.length && (
         <div className="flex justify-center mt-12 mb-8 container max-w-7xl mx-auto px-6 relative z-10">
            <a href="/gallery" className="px-8 py-3 bg-[#1F2E5A] text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl flex items-center justify-center gap-2">
               View Complete Gallery
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
               </svg>
            </a>
         </div>
      )}

      <AnimatePresence>
        {selectedIdx !== null && (
          <GalleryLightbox 
            item={displayedItems[selectedIdx]}
            currentIndex={selectedIdx}
            totalItems={displayedItems.length}
            isSaved={isSaved(displayedItems[selectedIdx].id)}
            onClose={() => setSelectedIdx(null)}
            onPrev={handlePrev}
            onNext={handleNext}
            onSave={handleSave}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
