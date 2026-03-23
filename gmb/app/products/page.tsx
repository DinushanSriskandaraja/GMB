import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCT_CATEGORIES } from '@/lib/categories';

export default function ProductsOverviewPage() {
   return (
      <main className="min-h-screen bg-transparent">
         <Navbar />
         <ScrollReveal delay={0.1}>
            <div className="pt-24 pb-16 max-w-7xl mx-auto px-6 mt-8">
               <div className="text-center mb-20 mt-6">
                  <div className="inline-flex items-center gap-3 mb-2">
                     <div className="w-12 h-px bg-[#4CAF50]" />
                     <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#4CAF50]">Collections</span>
                     <div className="w-12 h-px bg-[#4CAF50]" />
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight text-[#1F2E5A] mb-4">
                     Our <span className="gradient-text">Masterpieces</span>
                  </h1>
                  <p className="max-w-2xl mx-auto text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                     Explore our complete collection of premium window treatments, expertly curated to elevate modern architectural spaces.
                  </p>
               </div>

               <div className="space-y-20">
                  {PRODUCT_CATEGORIES.map((group, groupIdx) => (
                     <div key={groupIdx} className="space-y-10">
                        {/* Group Header */}
                        <div className="flex items-center gap-6">
                           <h2 className="text-3xl font-bold text-[#1F2E5A] whitespace-nowrap">{group.title}</h2>
                           <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent" />
                        </div>

                        {/* Categories Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                           {group.items.map((item, itemIdx) => (
                              <Link
                                 href={`/products/${item.slug}`}
                                 key={itemIdx}
                                 className="group block relative cursor-pointer"
                              >
                                 <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-sm transition-all duration-700 hover:shadow-2xl hover:-translate-y-2">
                                    <Image
                                       src={item.image}
                                       alt={item.title}
                                       fill
                                       className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 transition-opacity duration-500">

                                       {item.isNew && (
                                          <span className="absolute top-6 right-6 px-4 py-1.5 bg-[#4CAF50] text-white text-[9px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                                             New Arrival
                                          </span>
                                       )}

                                       <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#4CAF50]/90 mb-3 block transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                          {group.title}
                                       </span>

                                       <h3 className="text-white text-2xl font-bold mb-3 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-75">{item.title}</h3>

                                       <p className="text-white/70 text-sm leading-relaxed mb-6 line-clamp-2 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100 opacity-80 group-hover:opacity-100">
                                          {item.description}
                                       </p>

                                       <div className="inline-flex items-center gap-3 text-white font-bold text-[10px] uppercase tracking-[0.2em] transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-150">
                                          <span>Explore Collection</span>
                                          <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                       </div>
                                    </div>
                                 </div>
                              </Link>
                           ))}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </ScrollReveal>
         <Footer />
      </main>
   );
}
