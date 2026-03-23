'use client';

import { useState, useEffect, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

function GalleryContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams?.get('category') || 'All';

  const [galleryItems, setGalleryItems] = useState<any[]>([]);
  const [activeLocation, setActiveLocation] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const res = await fetch('/api/public/products'); // Using products API for rich data
        const data = await res.json();
        setGalleryItems(data.gallery || []);
      } catch (error) {
        console.error('Failed to fetch gallery:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchGallery();
  }, [initialCategory]);

  // Extract all unique locations dynamically from the fetched gallery items
  const availableLocations = Array.from(
    new Set(galleryItems.map(item => item.location || item.room).filter(Boolean))
  );

  const filteredItems = galleryItems.filter(item => {
    // Determine category matching logic
    const categoryName = item.category || 'Unknown';
    const styleName = item.style || 'Unknown';
    const matchesCategory = initialCategory === 'All' || categoryName === initialCategory || styleName === initialCategory;

    // Determine location matching logic
    const itemLocation = item.location || item.room || 'Unknown';
    const matchesLocation = activeLocation === 'All' || itemLocation === activeLocation;

    return matchesCategory && matchesLocation;
  });

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  const headerTitle = initialCategory === 'All' ? 'Full' : initialCategory;

  return (
    <main className="min-h-[70vh] bg-slate-50">
      <Navbar />

      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 mt-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#1F2E5A] mb-4">
              Our <span className="gradient-text">{headerTitle}</span> Portfolio
            </h1>
            <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed">
              Discover our {initialCategory === 'All' ? 'complete range of' : `curated selection of ${initialCategory}`} bespoke window treatments, designed and installed with meticulous care.
            </p>
          </div>

          {/* Filter Tabs (Locations) */}
          {availableLocations.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {['All', ...availableLocations].map((loc) => (
                <button
                  key={loc as string}
                  onClick={() => setActiveLocation(loc as string)}
                  className={`px-6 py-2 rounded-full font-bold uppercase tracking-widest text-[9px] transition-all duration-300 shadow-sm ${activeLocation === loc
                    ? 'bg-[#4CAF50] text-white shadow-md scale-105'
                    : 'bg-white text-slate-500 border border-slate-200 hover:border-[#4CAF50]/50 hover:text-[#4CAF50]'
                    }`}
                >
                  {loc as string}
                </button>
              ))}
            </div>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className="group relative"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-sm transition-all duration-700 hover:shadow-2xl hover:-translate-y-2">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white text-lg font-bold tracking-tight mb-2">{item.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-[8px] font-bold bg-[#4CAF50]/90 text-white px-2 py-1 rounded-md uppercase tracking-[0.2em] backdrop-blur-md">
                        {item.location || item.room || 'Any Room'}
                      </span>
                      <span className="text-[8px] font-bold bg-white/20 text-white px-2 py-1 rounded-md uppercase tracking-[0.2em] backdrop-blur-md">
                        {item.category || item.style || initialCategory}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-24">
              <span className="text-4xl font-bold text-slate-200 select-none block mb-6 px-10">Empty Portfolio</span>
              <p className="text-slate-400 italic mb-10 max-w-sm mx-auto">No projects found matching the combined Category and Location filters.</p>
              <button
                onClick={() => setActiveLocation('All')}
                className="px-6 py-2 bg-slate-100 text-slate-500 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-slate-200 transition-all"
              >
                Clear Location Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function GalleryPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[70vh] flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4CAF50]"></div>
      </div>
    }>
      <GalleryContent />
    </Suspense>
  );
}
