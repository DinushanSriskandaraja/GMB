'use client';

import { useState } from 'react';
import { useModal } from '@/lib/ModalContext';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCT_CATEGORIES } from '@/lib/categories';

interface NavbarProps {
  onProductHover?: () => void;
  onProductLeave?: () => void;
}

const Navbar = ({ onProductHover, onProductLeave }: NavbarProps) => {
  const { openTrackModal } = useModal();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold gradient-text">
                GMB
              </Link>
            </div>

            {/* Desktop Center Links */}
            <div className="hidden md:flex flex-1 items-center justify-center space-x-8">
              <Link href="/" className="text-slate-700 hover:text-primary transition-colors font-medium">Home</Link>
              
              {/* Products Mega Menu Dropdown */}
              <div className="relative group h-full flex items-center">
                <Link href="/products" className="text-slate-700 hover:text-primary transition-colors font-medium flex items-center gap-1">
                  Products
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                {/* Dropdown Container */}
                <div className="absolute top-full left-1/2 -translate-x-[45%] pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 w-[950px]">
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 grid grid-cols-3 gap-x-10 gap-y-8">
                    {PRODUCT_CATEGORIES.map((group) => (
                      <div key={group.title} className="space-y-5">
                        <h3 className="text-sm font-bold text-primary tracking-wider uppercase border-b border-slate-100 pb-2">{group.title}</h3>
                        <div className="space-y-4">
                          {group.items.map((item) => (
                            <Link key={item.slug} href={`/products/${item.slug}`} className="flex items-center gap-4 group/item">
                              <div className={`relative w-12 h-12 rounded-xl overflow-hidden shrink-0 shadow-sm border border-slate-100 ${item.isNew ? 'ring-2 ring-[#F4A300]/50' : ''}`}>
                                <Image src={item.image} alt={item.title} fill sizes="48px" className="object-cover group-hover/item:scale-110 transition-transform duration-500" />
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <div className="text-slate-700 font-bold group-hover/item:text-primary transition-colors text-sm">{item.title}</div>
                                  {item.isNew && (
                                    <span className="bg-[#F4A300]/10 text-[#F4A300] text-[9px] px-1.5 py-0.5 rounded-full font-bold">NEW</span>
                                  )}
                                </div>
                                <p className="text-slate-500 text-[11px] mt-0.5 leading-tight">{item.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/gallery" className="text-slate-700 hover:text-primary transition-colors font-medium">Gallery</Link>
              <Link href="/about" className="text-slate-700 hover:text-primary transition-colors font-medium">About</Link>
              <Link href="/contact" className="text-slate-700 hover:text-primary transition-colors font-medium">Contact</Link>
            </div>

            {/* Right side utilities (Desktop + Mobile Toggle) */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-3">
                 <button
                   onClick={openTrackModal}
                   className="bg-slate-100 text-slate-600 p-2.5 rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center"
                   title="Track Order"
                 >
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                   </svg>
                 </button>
                 <Link href="/contact?form=quote">
                   <button className="bg-primary text-white px-5 py-2 rounded-xl font-bold hover:opacity-90 transition-opacity whitespace-nowrap text-sm">
                     Request Quote
                   </button>
                 </Link>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden bg-slate-100 text-slate-600 p-2.5 rounded-xl hover:bg-slate-200 transition-colors"
                aria-expanded={isOpen}
              >
                 <span className="sr-only">Open main menu</span>
                 {!isOpen ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                 ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                 )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0'} bg-white`}
        >
          <div className="px-4 py-3 space-y-1">
            <Link
              href="/"
              onClick={closeMenu}
              className="block px-4 py-3 rounded-xl text-slate-700 font-medium hover:bg-slate-50 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              onClick={closeMenu}
              className="block px-4 py-3 rounded-xl text-slate-700 font-medium hover:bg-slate-50 hover:text-primary transition-colors"
            >
              Products
            </Link>
            <Link
              href="/gallery"
              onClick={closeMenu}
              className="block px-4 py-3 rounded-xl text-slate-700 font-medium hover:bg-slate-50 hover:text-primary transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className="block px-4 py-3 rounded-xl text-slate-700 font-medium hover:bg-slate-50 hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="block px-4 py-3 rounded-xl text-slate-700 font-medium hover:bg-slate-50 hover:text-primary transition-colors"
            >
              Contact
            </Link>
            
            <div className="pt-2 pb-2 space-y-2">
               <button
                  onClick={() => { closeMenu(); openTrackModal(); }}
                  className="w-full bg-slate-100 text-slate-600 px-6 py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors text-center flex items-center justify-center gap-2"
               >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                  Track Order
               </button>
              <Link href="/contact?form=quote" onClick={closeMenu} className="block w-full">
                <button className="w-full bg-primary text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity text-center">
                  Request Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 md:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Navbar;
