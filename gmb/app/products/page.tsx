'use client';

import { useState, useEffect, Suspense, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import Footer from '@/components/Footer';
import Image from 'next/image';

function ProductsContent() {
   const searchParams = useSearchParams();
   const categoryParam = searchParams.get('category');

   const [data, setData] = useState<{
      tabs: string[];
      categoryMetadata: Record<string, string>;
      styles: string[];
      rooms: string[];
      products: any[];
   }>({
      tabs: [],
      categoryMetadata: {},
      styles: [],
      rooms: [],
      products: []
   });

   const [activeTab, setActiveTab] = useState('');
   const [activeStyle, setActiveStyle] = useState('All');
   const [activeRoom, setActiveRoom] = useState('All');
   const [searchQuery, setSearchQuery] = useState('');
   const [isRoomDropdownOpen, setIsRoomDropdownOpen] = useState(false);
   const [isStyleDropdownOpen, setIsStyleDropdownOpen] = useState(false);
   const [loading, setLoading] = useState(true);
   const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
   const [isSecondaryNavVisible, setIsSecondaryNavVisible] = useState(false);
   const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

   const handleMouseEnter = () => {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      setIsSecondaryNavVisible(true);
   };

   const handleMouseLeave = () => {
      hideTimeoutRef.current = setTimeout(() => {
         setIsSecondaryNavVisible(false);
      }, 300);
   };

   useEffect(() => {
      async function fetchProducts() {
         try {
            const res = await fetch('/api/public/products');
            const d = await res.json();
            setData(d);

            // Check for category filter from URL
            if (categoryParam && d.tabs?.includes(categoryParam)) {
               setActiveTab(categoryParam);
            } else if (d.tabs?.length > 0) {
               setActiveTab(d.tabs[0]);
            }
         } catch (err) {
            console.error('Failed to fetch products:', err);
         } finally {
            setLoading(false);
         }
      }
      fetchProducts();
   }, [categoryParam]);

   const filteredProducts = data.products.filter(p => {
      const matchesTab = p.category === activeTab;
      const matchesStyle = activeStyle === 'All' || p.style === activeStyle;
      const matchesRoom = activeRoom === 'All' || p.room === activeRoom;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
         p.style.toLowerCase().includes(searchQuery.toLowerCase()) ||
         p.room.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesStyle && matchesRoom && matchesSearch;
   });

   if (loading) {
      return (
         <div className="min-h-[70vh] bg-white flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-[#4CAF50]/20 border-t-[#4CAF50] rounded-full animate-spin" />
         </div>
      );
   }

   return (
      <main className="min-h-[70vh] bg-transparent">
         <Navbar onProductHover={handleMouseEnter} onProductLeave={handleMouseLeave} />

         <ScrollReveal delay={0.1}>
            <div className="pt-16 pb-6 mt-8">
               {/* --- SECONDARY NAVBAR: CATEGORY SELECTOR --- */}
               <div 
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className={`transition-all duration-500 ease-in-out ${isSecondaryNavVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
               >
                  <div className="max-w-7xl mx-auto px-6 mb-8">
                     <div className="glassmorphism rounded-xl p-4 border-white/40 shadow-xl shadow-slate-200/50 backdrop-blur-2xl">
                        <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
                           {data.tabs.map((tab) => (
                              <button
                                 key={tab}
                                 onClick={() => { setActiveTab(tab); setActiveStyle('All'); setActiveRoom('All'); setSearchQuery(''); }}
                                 className={`group relative py-2 px-4 transition-all duration-300 ${activeTab === tab ? 'text-[#1F2E5A]' : 'text-slate-400 hover:text-[#1F2E5A]'}`}
                              >
                                 <span className="text-sm font-bold uppercase tracking-widest z-10 relative">{tab}</span>
                                 {activeTab === tab && (
                                    <div className="absolute inset-x-0 bottom-0 h-1 bg-[#4CAF50] rounded-full animate-in fade-in slide-in-from-bottom-2" />
                                 )}
                              </button>
                           ))}
                        </nav>
                     </div>
                  </div>
               </div>

               {/* --- GALLERY HEADER --- */}
               <div className="max-w-7xl mx-auto px-6 mb-12 mt-6 text-center">
                  <div className="inline-flex items-center gap-3 mb-2">
                     <div className="w-12 h-px bg-[#4CAF50]" />
                     <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#4CAF50]">Curated Collection</span>
                     <div className="w-12 h-px bg-[#4CAF50]" />
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                     <span className="gradient-text italic">{activeStyle !== 'All' ? activeStyle : activeTab || "Collection"}</span>
                  </h1>
                  <p className="max-w-2xl mx-auto text-slate-500 text-sm leading-relaxed font-medium">
                     {activeStyle !== 'All' ? `Explore our signature ${activeStyle.toLowerCase()} collection.` : (data.categoryMetadata[activeTab] || "Explore our exclusive collection of architectural window treatments.")}
                  </p>
               </div>

               {/* --- MAIN CONTENT SECTON --- */}
               <section className="max-w-[1600px] mx-auto px-6 py-2 md:px-8 md:py-4">

                  {/* STYLE FILTERS AS CARDS (Matching ProductCategories.tsx) */}
                  {/* MAIN PORTFOLIO GRID SECTION */}
                     <>
                        {/* Tiered Filters + Search (Floating UI) */}
                        <div className="sticky top-20 z-30 mb-10 rounded-xl py-4 px-2 border-transparent transition-all">
                           <div className="flex flex-col gap-4">

                              {/* Top Row: Search (Style tabs were moved to cards above) */}
                              <div className="flex flex-col xl:flex-row items-center gap-3 justify-between">
                                 <div className="relative w-full xl:w-72 group">
                                     <input
                                        type="text"
                                        placeholder="Search over all active styles..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full bg-transparent border border-slate-200 rounded-xl py-2 pl-12 pr-4 text-xs font-bold tracking-widest focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/20 transition-all"
                                     />
                                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[#4CAF50] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                 </div>
                                 {/* We add an "All Styles" reset button here to act as the 'All' pill */}
                                 <div className="flex flex-wrap gap-4 justify-center items-center">
                                    {/* Style Dropdown */}
                                    <div className="flex items-center gap-3 relative">
                                       <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest hidden sm:block">Filter By Style:</span>
                                       <div className="relative">
                                          <button
                                             onClick={() => { setIsStyleDropdownOpen(!isStyleDropdownOpen); setIsRoomDropdownOpen(false); }}
                                             className="flex items-center gap-3 px-6 py-2 bg-transparent border border-slate-200 rounded-xl text-[9px] font-bold uppercase tracking-widest text-slate-600 hover:border-[#4CAF50]/30 transition-all"
                                          >
                                             <span>{activeStyle === 'All' ? 'All Styles' : activeStyle}</span>
                                             <svg className={`w-3 h-3 text-slate-400 transition-transform duration-300 ${isStyleDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                             </svg>
                                          </button>

                                          {isStyleDropdownOpen && (
                                             <>
                                                <div className="fixed inset-0 z-40" onClick={() => setIsStyleDropdownOpen(false)} />
                                                <div className="absolute top-full right-0 mt-2 w-56 bg-white/95 backdrop-blur-xl border border-slate-100 rounded-2xl shadow-2xl py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                                                   <div className="px-5 py-2 mb-1 border-b border-slate-50">
                                                      <span className="text-[8px] font-bold text-slate-300 uppercase tracking-[0.2em]">Select Style</span>
                                                   </div>
                                                   {['All', ...data.styles].map(style => (
                                                      <button
                                                         key={style}
                                                         onClick={() => { setActiveStyle(style); setIsStyleDropdownOpen(false); }}
                                                         className={`w-full text-left px-5 py-2.5 text-[9px] font-bold uppercase tracking-widest transition-all ${activeStyle === style
                                                            ? 'text-[#4CAF50] bg-[#4CAF50]/5'
                                                            : 'text-slate-500 hover:bg-slate-50 hover:text-[#4CAF50]'
                                                            }`}
                                                      >
                                                         {style === 'All' ? 'All Styles' : style}
                                                      </button>
                                                   ))}
                                                </div>
                                             </>
                                          )}
                                       </div>
                                    </div>

                                    {/* Room Dropdown Moved Here */}
                                    <div className="flex items-center gap-3 relative">
                                       <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest hidden sm:block">Filter By Room:</span>
                                       <div className="relative">
                                          <button
                                             onClick={() => { setIsRoomDropdownOpen(!isRoomDropdownOpen); setIsStyleDropdownOpen(false); }}
                                             className="flex items-center gap-3 px-6 py-2 bg-transparent border border-slate-200 rounded-xl text-[9px] font-bold uppercase tracking-widest text-slate-600 hover:border-[#4CAF50]/30 transition-all"
                                          >
                                             <span>{activeRoom === 'All' ? 'All Rooms' : activeRoom}</span>
                                             <svg className={`w-3 h-3 text-slate-400 transition-transform duration-300 ${isRoomDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                             </svg>
                                          </button>

                                          {isRoomDropdownOpen && (
                                             <>
                                                <div className="fixed inset-0 z-40" onClick={() => setIsRoomDropdownOpen(false)} />
                                                <div className="absolute top-full right-0 mt-2 w-56 bg-white/95 backdrop-blur-xl border border-slate-100 rounded-2xl shadow-2xl py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                                                   <div className="px-5 py-2 mb-1 border-b border-slate-50">
                                                      <span className="text-[8px] font-bold text-slate-300 uppercase tracking-[0.2em]">Select Room</span>
                                                   </div>
                                                   {['All', ...data.rooms].map(room => (
                                                      <button
                                                         key={room}
                                                         onClick={() => { setActiveRoom(room); setIsRoomDropdownOpen(false); }}
                                                         className={`w-full text-left px-5 py-2.5 text-[9px] font-bold uppercase tracking-widest transition-all ${activeRoom === room
                                                            ? 'text-[#4CAF50] bg-[#4CAF50]/5'
                                                            : 'text-slate-500 hover:bg-slate-50 hover:text-[#4CAF50]'
                                                            }`}
                                                      >
                                                         {room === 'All' ? 'All Rooms' : room}
                                                      </button>
                                                   ))}
                                                </div>
                                             </>
                                          )}
                                       </div>
                                    </div>
                                 </div>
                              </div>



                           </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8 mt-8">
                           {filteredProducts.map((p, idx) => (
                              <div
                                 key={p.id}
                                 className="group relative cursor-pointer"
                                 style={{ animationDelay: `${idx * 50}ms` }}
                                 onClick={() => setLightboxIndex(idx)}
                              >
                                 <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-sm transition-all duration-700 hover:shadow-2xl hover:-translate-y-1">
                                    <Image
                                       src={p.image}
                                       alt={p.name}
                                       fill
                                       className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Details Overlay Inside Image */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent flex flex-col justify-end p-4">
                                       <h3 className="text-white text-sm font-bold mb-2 truncate">{p.name}</h3>
                                       <div className="flex items-center gap-2">
                                          <span className="px-2 py-1 rounded-md bg-white/20 text-white text-[8px] font-bold uppercase tracking-widest backdrop-blur-sm truncate">
                                             {p.category}
                                          </span>
                                          <span className="px-2 py-1 rounded-md bg-[#4CAF50]/80 text-white text-[8px] font-bold uppercase tracking-widest backdrop-blur-sm truncate">
                                             {p.room}
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>

                        {/* Empty State */}
                        {filteredProducts.length === 0 && (
                           <div className="py-16 text-center">
                              <span className="text-4xl font-bold text-slate-100 select-none block mb-6 px-10">Empty</span>
                              <p className="text-slate-400 italic mb-10">No masterpieces found in this collection.</p>
                              <button
                                 onClick={() => { setActiveTab(data.tabs[0] || ''); setActiveStyle('All'); setActiveRoom('All'); setSearchQuery(''); }}
                                 className="px-10 py-4 bg-[#4CAF50] text-white rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-2xl shadow-[#4CAF50]/20 hover:bg-[#1F2E5A] transition-all"
                              >
                                 Reset Gallery
                              </button>
                           </div>
                        )}
                     </>
               </section>
            </div>
         </ScrollReveal>

         {/* FULLSCREEN LIGHTBOX MODAL */}
         {lightboxIndex !== null && (
            <div
               className="fixed inset-0 z-50 bg-white/80 backdrop-blur-2xl flex flex-col items-center justify-center animate-in fade-in duration-300"
            >
               {/* CLOSE BUTTON */}
               <button
                  onClick={() => setLightboxIndex(null)}
                  className="absolute top-6 right-6 text-slate-500 hover:text-slate-900 transition-all z-50 p-2 hover:scale-110"
               >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
               </button>

               {/* LEFT ARROW */}
               <button
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev! - 1 + filteredProducts.length) % filteredProducts.length); }}
                  className="absolute left-2 sm:left-10 top-1/2 -translate-y-1/2 z-50 text-slate-400 hover:text-slate-900 transition-all hover:scale-125 p-4"
               >
                  <svg className="w-12 h-12 md:w-16 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
               </button>

               {/* IMAGE FLOATING (NO BG) */}
               <div className="relative w-full max-w-6xl h-[65vh] flex items-center justify-center pointer-events-none px-20">
                  <Image
                     src={filteredProducts[lightboxIndex].image}
                     alt={filteredProducts[lightboxIndex].name}
                     fill
                     className="object-contain"
                  />
               </div>

               {/* RIGHT ARROW */}
               <button
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev! + 1) % filteredProducts.length); }}
                  className="absolute right-2 sm:right-10 top-1/2 -translate-y-1/2 z-50 text-slate-400 hover:text-slate-900 transition-all hover:scale-125 p-4"
               >
                  <svg className="w-12 h-12 md:w-16 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
               </button>

               {/* IMAGE TEXT */}
               <div className="absolute bottom-10 text-center animate-in slide-in-from-bottom-4 duration-500 w-full px-6">
                  <h2 className="text-slate-900 text-3xl font-bold mb-2">{filteredProducts[lightboxIndex].name}</h2>
                  <p className="text-slate-500 tracking-widest uppercase text-xs md:text-sm font-bold flex items-center justify-center gap-3">
                     <span>{filteredProducts[lightboxIndex].category}</span>
                     <span className="w-1 h-1 rounded-full bg-[#4CAF50]"></span>
                     <span>{filteredProducts[lightboxIndex].style}</span>
                     <span className="w-1 h-1 rounded-full bg-[#4CAF50]"></span>
                     <span>{filteredProducts[lightboxIndex].room}</span>
                  </p>
               </div>
            </div>
         )}

         <Footer />
      </main>
   );
}

export default function ProductsPage() {
   return (
      <Suspense fallback={
         <div className="min-h-[70vh] bg-white flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-[#4CAF50]/20 border-t-[#4CAF50] rounded-full animate-spin" />
         </div>
      }>
         <ProductsContent />
      </Suspense>
   );
}
