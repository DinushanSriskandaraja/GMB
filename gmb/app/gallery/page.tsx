'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const res = await fetch('/api/public/gallery');
        const data = await res.json();
        setGalleryItems(data.gallery || []);
        setCategories(data.categories || []);
      } catch (error) {
        console.error('Failed to fetch gallery:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchGallery();
  }, []);

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  if (loading) {
     return (
       <div className="min-h-[70vh] flex items-center justify-center bg-slate-50">
         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
       </div>
     );
  }

  return (
    <main className="min-h-[70vh] bg-slate-50">
      <Navbar />
      
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-4xl font-serif font-medium text-slate-900 mb-6">
              Our Full <span className="text-primary italic">Portfolio</span>
            </h1>
            <p className="text-slate-500 text-xl max-w-3xl mx-auto leading-relaxed">
              Discover our complete range of bespoke window treatments, designed and installed with meticulous care.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {['All', ...categories].map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-2 rounded-full font-bold uppercase tracking-widest text-[10px] transition-all duration-300 ${
                  activeCategory === cat 
                  ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-105' 
                  : 'bg-white text-slate-400 border border-slate-100 hover:border-primary/50 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, idx) => (
              <div 
                key={item.id} 
                className="group relative"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(31,46,90,0.08)] transition-all duration-700 hover:shadow-[0_30px_60px_rgba(31,46,90,0.15)] hover:-translate-y-2">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Details Below Image */}
                <div className="mt-6 px-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-[#1F2E5A] tracking-tight">{item.title}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-[#4CAF50] uppercase tracking-[0.2em]">{item.category}</span>
                    <div className="h-px flex-grow bg-slate-100" />
                    <span className="text-[9px] font-medium text-slate-300 uppercase tracking-[0.1em]">Signature Project</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-10">
              <p className="text-slate-400 font-serif italic text-xl">No projects found in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
