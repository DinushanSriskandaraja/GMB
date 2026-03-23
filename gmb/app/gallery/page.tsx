'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [rooms, setRooms] = useState<string[]>([]);
  const [styles, setStyles] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeRoom, setActiveRoom] = useState('All');
  const [activeStyle, setActiveStyle] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isRoomOpen, setIsRoomOpen] = useState(false);
  const [isStyleOpen, setIsStyleOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const res = await fetch('/api/public/products'); // Using products API for rich data
        const data = await res.json();
        setGalleryItems(data.products || []);
        setCategories(data.tabs || []);
        setRooms(data.rooms || []);
        setStyles(data.styles || []);
      } catch (error) {
        console.error('Failed to fetch gallery:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchGallery();
  }, []);

  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesRoom = activeRoom === 'All' || item.room === activeRoom;
    const matchesStyle = activeStyle === 'All' || item.style === activeStyle;
    const matchesSearch = item.name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.style?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesRoom && matchesStyle && matchesSearch;
  });

  if (loading) {
     return (
       <div className="min-h-[70vh] flex items-center justify-center bg-slate-50">
         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1F2E5A]"></div>
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Our Full <span className="text-primary italic">Portfolio</span>
            </h1>
            <p className="text-slate-500 text-xl max-w-3xl mx-auto leading-relaxed">
              Discover our complete range of bespoke window treatments, designed and installed with meticulous care.
            </p>
          </div>

          {/* Filters Bar */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10 w-full z-30 relative">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full lg:w-auto">
              
              {/* Category Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => { setIsCategoryOpen(!isCategoryOpen); setIsRoomOpen(false); setIsStyleOpen(false); }}
                  className="flex items-center justify-between gap-3 w-40 px-5 py-3 bg-white border border-slate-200 rounded-xl text-[10px] font-bold uppercase tracking-widest text-[#1F2E5A] hover:border-[#1F2E5A]/30 hover:shadow-md transition-all"
                >
                  <span className="truncate">{activeCategory === 'All' ? 'Categories' : activeCategory}</span>
                  <svg className={`w-4 h-4 shrink-0 text-slate-400 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {isCategoryOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsCategoryOpen(false)} />
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl border border-slate-100 rounded-2xl shadow-2xl py-3 z-50 animate-in fade-in slide-in-from-top-2">
                       <div className="px-5 py-2 mb-1 border-b border-slate-50"><span className="text-[8px] font-bold text-slate-300 uppercase tracking-[0.2em]">Select Category</span></div>
                       {['All', ...categories].map(cat => (
                         <button key={cat} onClick={() => { setActiveCategory(cat); setIsCategoryOpen(false); }} className={`w-full text-left px-5 py-2.5 text-[9px] font-bold uppercase tracking-widest transition-all ${activeCategory === cat ? 'text-[#1F2E5A] bg-[#1F2E5A]/5' : 'text-slate-500 hover:bg-slate-50 hover:text-[#1F2E5A]'}`}>
                           {cat === 'All' ? 'All Categories' : cat}
                         </button>
                       ))}
                    </div>
                  </>
                )}
              </div>

              {/* Room Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => { setIsRoomOpen(!isRoomOpen); setIsCategoryOpen(false); setIsStyleOpen(false); }}
                  className="flex items-center justify-between gap-3 w-40 px-5 py-3 bg-white border border-slate-200 rounded-xl text-[10px] font-bold uppercase tracking-widest text-[#1F2E5A] hover:border-[#1F2E5A]/30 hover:shadow-md transition-all"
                >
                  <span className="truncate">{activeRoom === 'All' ? 'Rooms' : activeRoom}</span>
                  <svg className={`w-4 h-4 shrink-0 text-slate-400 transition-transform ${isRoomOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {isRoomOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsRoomOpen(false)} />
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl border border-slate-100 rounded-2xl shadow-2xl py-3 z-50 animate-in fade-in slide-in-from-top-2">
                       <div className="px-5 py-2 mb-1 border-b border-slate-50"><span className="text-[8px] font-bold text-slate-300 uppercase tracking-[0.2em]">Select Room</span></div>
                       {['All', ...rooms].map(room => (
                         <button key={room} onClick={() => { setActiveRoom(room); setIsRoomOpen(false); }} className={`w-full text-left px-5 py-2.5 text-[9px] font-bold uppercase tracking-widest transition-all ${activeRoom === room ? 'text-[#1F2E5A] bg-[#1F2E5A]/5' : 'text-slate-500 hover:bg-slate-50 hover:text-[#1F2E5A]'}`}>
                           {room === 'All' ? 'All Rooms' : room}
                         </button>
                       ))}
                    </div>
                  </>
                )}
              </div>

              {/* Style Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => { setIsStyleOpen(!isStyleOpen); setIsCategoryOpen(false); setIsRoomOpen(false); }}
                  className="flex items-center justify-between gap-3 w-40 px-5 py-3 bg-white border border-slate-200 rounded-xl text-[10px] font-bold uppercase tracking-widest text-[#1F2E5A] hover:border-[#1F2E5A]/30 hover:shadow-md transition-all"
                >
                  <span className="truncate">{activeStyle === 'All' ? 'Styles' : activeStyle}</span>
                  <svg className={`w-4 h-4 shrink-0 text-slate-400 transition-transform ${isStyleOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {isStyleOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsStyleOpen(false)} />
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl border border-slate-100 rounded-2xl shadow-2xl py-3 z-50 animate-in fade-in slide-in-from-top-2">
                       <div className="px-5 py-2 mb-1 border-b border-slate-50"><span className="text-[8px] font-bold text-slate-300 uppercase tracking-[0.2em]">Select Style</span></div>
                       {['All', ...styles].map(style => (
                         <button key={style} onClick={() => { setActiveStyle(style); setIsStyleOpen(false); }} className={`w-full text-left px-5 py-2.5 text-[9px] font-bold uppercase tracking-widest transition-all ${activeStyle === style ? 'text-[#1F2E5A] bg-[#1F2E5A]/5' : 'text-slate-500 hover:bg-slate-50 hover:text-[#1F2E5A]'}`}>
                           {style === 'All' ? 'All Styles' : style}
                         </button>
                       ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="w-full lg:w-72 shrink-0 relative group">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-xs font-bold tracking-widest focus:outline-none focus:ring-2 focus:ring-[#1F2E5A]/20 hover:border-[#1F2E5A]/30 transition-all shadow-sm"
                />
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[#1F2E5A] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredItems.map((item, idx) => (
              <div 
                key={item.id} 
                className="group relative cursor-pointer"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                 <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-sm transition-all duration-700 hover:shadow-2xl hover:-translate-y-1">
                    <Image
                       src={item.image}
                       alt={item.name || item.title}
                       fill
                       className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Details Overlay Inside Image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex flex-col justify-end p-5">
                       <h3 className="text-white text-base md:text-lg font-bold mb-3 truncate group-hover:text-primary transition-colors">{item.name || item.title}</h3>
                       <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2 py-1 rounded-md bg-white/20 text-white text-[9px] font-bold uppercase tracking-widest backdrop-blur-sm truncate border border-white/10">
                             {item.category}
                          </span>
                          <span className="px-2 py-1 rounded-md bg-primary/80 text-white text-[9px] font-bold uppercase tracking-widest backdrop-blur-sm truncate">
                             {item.room}
                          </span>
                       </div>
                    </div>
                 </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
             <div className="py-16 text-center">
                <span className="text-4xl font-bold text-slate-200 select-none block mb-6 px-10">Empty</span>
                <p className="text-slate-400 italic mb-10">No projects found matching your criteria.</p>
                <button
                   onClick={() => { setActiveCategory('All'); setActiveRoom('All'); setActiveStyle('All'); setSearchQuery(''); }}
                   className="px-10 py-4 bg-[#1F2E5A] text-white rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-xl shadow-[#1F2E5A]/20 hover:bg-primary transition-all"
                >
                   Reset Filters
                </button>
             </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
