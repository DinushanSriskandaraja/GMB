'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

import GalleryFilters from '@/components/gallery/GalleryFilters';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import GalleryLightbox from '@/components/gallery/GalleryLightbox';
import Hero from '@/components/ui/Hero';

function GalleryContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams?.get('category') || 'All';
  const headerTitle = initialCategory === 'All' ? 'Portfolio' : initialCategory;

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
        setGalleryItems(data.gallery || []);
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
    if (!item.category && !item.style && !item.location && !item.room) return true;
    const categoryName = item.category || 'Unknown';
    const styleName = item.style || 'Unknown';
    const matchesCategory = initialCategory === 'All' || categoryName === initialCategory || styleName === initialCategory;
    const itemLocation = item.location || item.room || 'Unknown';
    const matchesLocation = activeLocation === 'All' || itemLocation === activeLocation;
    return matchesCategory && matchesLocation;
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
      <div className="min-h-[70vh] flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-slate-100 border-t-[#1756a0] rounded-full animate-spin"></div>
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-slate-400">Loading Portfolio</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white pb-20">
      <Hero
        compact
        withGlow
        eyebrow="Portfolio"
        title={<>Our {headerTitle}Collection.</>}
        description={`Discover our ${initialCategory === 'All' ? 'complete range of' : `curated selection of ${initialCategory}`} bespoke window treatments, designed and installed with meticulous care.`}
      // accentColor="#1756a0"
      />

      <GalleryFilters
        locations={availableLocations}
        activeLocation={activeLocation}
        onFilterChange={(loc) => {
          setActiveLocation(loc);
          setSelectedIdx(null);
        }}
      />

      <GalleryGrid
        items={filteredItems}
        isSaved={isSaved}
        onSelect={(idx) => setSelectedIdx(idx)}
        onSave={handleSave}
        onClearFilters={() => setActiveLocation('All')}
      />

      <AnimatePresence>
        {selectedIdx !== null && (
          <GalleryLightbox
            item={filteredItems[selectedIdx]}
            currentIndex={selectedIdx}
            totalItems={filteredItems.length}
            isSaved={isSaved(filteredItems[selectedIdx].id)}
            onClose={() => setSelectedIdx(null)}
            onPrev={handlePrev}
            onNext={handleNext}
            onSave={handleSave}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[70vh] flex items-center justify-center bg-white">
        <div className="w-12 h-12 border-4 border-slate-100 border-t-[#1756a0] rounded-full animate-spin"></div>
      </div>
    }>
      <GalleryContent />
    </Suspense>
  );
}
