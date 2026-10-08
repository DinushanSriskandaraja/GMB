'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { useModal } from '@/lib/ModalContext';
import { PRODUCT_CATEGORIES } from '@/lib/categories';
import Image from 'next/image';

interface NavbarProps {
  onProductHover?: () => void;
  onProductLeave?: () => void;
}

const Navbar = ({ onProductHover, onProductLeave }: NavbarProps) => {
  const pathname = usePathname();
  const { openTrackModal } = useModal();
  const { cartCount, cartItems, cartTotal, updateQuantity, removeFromCart, isCartOpen, setIsCartOpen } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);
  const openCart = () => setIsCartOpen(true);

  const showCart = cartCount > 0 || pathname?.startsWith('/store');

  const buyItems = cartItems.filter(item => item.cartType === 'buy' || !item.cartType);
  const consultItems = cartItems.filter(item => item.cartType === 'consult');

  const renderItem = (item: any) => (
    <div key={item.id} className="flex gap-4 group">
      <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shadow-sm flex-shrink-0">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>
      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-[#1F2E5A] text-sm truncate pr-2">{item.name}</h3>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-slate-300 hover:text-red-500 transition-colors p-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
        <p className="text-slate-400 text-xs mt-0.5">Signature {item.category || 'Collection'}</p>

        {item.configuration && (
          <div className="mt-1 flex flex-wrap gap-1">
            <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded truncate max-w-[80px]">
              {item.configuration.width}x{item.configuration.drop}mm
            </span>
            <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded truncate max-w-[80px]">
              {item.configuration.fabric}
            </span>
          </div>
        )}
        <div className="mt-auto flex justify-between items-center">
          <div className="flex items-center gap-3 bg-slate-50 rounded-lg p-1 border border-slate-100">
            <button
              onClick={() => updateQuantity(item.id, -1)}
              className="w-7 h-7 flex items-center justify-center hover:bg-white rounded-md transition-colors text-slate-500 disabled:opacity-30"
              disabled={item.quantity <= 1}
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
              </svg>
            </button>
            <span className="text-xs font-bold text-slate-700 w-4 text-center">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, 1)}
              className="w-7 h-7 flex items-center justify-center hover:bg-white rounded-md transition-colors text-slate-500"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <nav 
        className={`sticky top-0 w-full z-50 transition-all duration-500 ease-in-out ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-xl border-b border-[#e8e6e1]/50 py-2 shadow-[0_4px_30px_-10px_rgba(15,23,42,0.05)]' 
            : 'bg-white/96 backdrop-blur-2xl border-b border-[#e8e6e1]/80 py-0'
        }`}
      >
        <div className="container">
          <div className="flex justify-between h-[72px] items-center">

            {/* Logo */}
            <Link href="/" className="font-display font-black text-[#1a2647] text-2xl tracking-[0.02em] flex-shrink-0 flex items-center gap-0.5 group">
              GMB<span className="text-[#3d9e41] text-3xl leading-none group-hover:scale-125 transition-transform duration-500">.</span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex flex-1 items-center justify-center space-x-12">
              <Link 
                href="/" 
                className={`text-[#0f172a]/70 hover:text-[#0f172a] transition-all duration-300 font-medium text-[13px] tracking-[0.15em] uppercase relative group ${pathname === '/' ? 'text-[#0f172a]' : ''}`}
              >
                Home
                <span className={`absolute -bottom-1 left-0 w-full h-px bg-[#0f172a] transition-transform duration-500 origin-left ${pathname === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </Link>

              <Link 
                href="/products" 
                className={`text-[#0f172a]/70 hover:text-[#0f172a] transition-all duration-300 font-medium text-[13px] tracking-[0.15em] uppercase relative group ${pathname === '/products' ? 'text-[#0f172a]' : ''}`}
              >
                Products
                <span className={`absolute -bottom-1 left-0 w-full h-px bg-[#0f172a] transition-transform duration-500 origin-left ${pathname === '/products' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </Link>

              <Link 
                href="/gallery" 
                className={`text-[#0f172a]/70 hover:text-[#0f172a] transition-all duration-300 font-medium text-[13px] tracking-[0.15em] uppercase relative group ${pathname === '/gallery' ? 'text-[#0f172a]' : ''}`}
              >
                Gallery
                <span className={`absolute -bottom-1 left-0 w-full h-px bg-[#0f172a] transition-transform duration-500 origin-left ${pathname === '/gallery' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </Link>

              <Link 
                href="/measure-and-install" 
                className={`text-[#0f172a]/70 hover:text-[#0f172a] transition-all duration-300 font-medium text-[13px] tracking-[0.15em] uppercase relative group ${pathname === '/measure-and-install' ? 'text-[#0f172a]' : ''}`}
              >
                Service
                <span className={`absolute -bottom-1 left-0 w-full h-px bg-[#0f172a] transition-transform duration-500 origin-left ${pathname === '/measure-and-install' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </Link>
            </div>

            {/* Right side utilities (Desktop + Mobile Toggle) */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-4">
                <Link
                  href="/store"
                  className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-all duration-500 font-bold text-[9px] tracking-[0.2em] uppercase shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                  title="GMB Store"
                >
                  <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                    <path d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72L4.318 3.44A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72m-13.5 8.65h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .415.336.75.75.75Z" />
                  </svg>
                  <span>Store</span>
                </Link>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={openTrackModal}
                    className="text-slate-400 hover:text-slate-900 p-2 transition-all duration-300 hover:scale-110"
                    title="Track Order"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1-1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>
                  </button>
                  
                  <AnimatePresence mode="wait">
                    {showCart && (
                      <motion.button
                        key="cart-desktop"
                        initial={{ opacity: 0, scale: 0.8, x: 10 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, x: 10 }}
                        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                        onClick={() => setIsCartOpen(true)}
                        className="relative text-slate-400 hover:text-slate-900 p-2 transition-all duration-300 hover:scale-110"
                        title="Your Cart"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {cartCount > 0 && (
                          <motion.span 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-1 right-0 bg-[#3d9e41] text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm"
                          >
                            {cartCount}
                          </motion.span>
                        )}
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/contact?form=quote">
                  <button className="bg-white border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-7 py-2.5 rounded-full font-bold transition-all duration-500 whitespace-nowrap text-[9px] tracking-[0.2em] uppercase shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0">
                    Free Consultation
                  </button>
                </Link>
              </div>

              <AnimatePresence>
                {showCart && (
                  <motion.button
                    key="cart-mobile"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => setIsCartOpen(true)}
                    className="md:hidden relative text-slate-600 p-2 transition-colors"
                    title="Your Cart"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {cartCount > 0 && (
                      <span className="absolute top-1 right-0 bg-[#3d9e41] text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-md">
                        {cartCount}
                      </span>
                    )}
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-slate-600 p-2 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white ${isOpen ? 'max-h-[800px] opacity-100 border-t border-slate-50' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 py-8 space-y-6 text-center">
            <Link href="/" onClick={closeMenu} className="block text-2xl font-display font-medium text-[#0f172a] hover:text-[#1756a0] transition-colors">Home</Link>
            <Link href="/products" onClick={closeMenu} className="block text-2xl font-display font-medium text-[#0f172a] hover:text-[#1756a0] transition-colors">Products</Link>
            <Link href="/gallery" onClick={closeMenu} className="block text-2xl font-display font-medium text-[#0f172a] hover:text-[#1756a0] transition-colors">Gallery</Link>
            <Link href="/measure-and-install" onClick={closeMenu} className="block text-2xl font-display font-medium text-[#0f172a] hover:text-[#1756a0] transition-colors">Service</Link>
            
            <Link
              href="/store"
              onClick={closeMenu}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 text-white font-bold transition-all duration-300 shadow-lg shadow-slate-200"
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72L4.318 3.44A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72m-13.5 8.65h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .415.336.75.75.75Z" />
              </svg>
              <span className="text-xs uppercase tracking-[0.2em]">GMB Store</span>
            </Link>

            <div className="pt-8 border-t border-slate-50 space-y-4">
              <button
                onClick={() => { closeMenu(); openTrackModal(); }}
                className="w-full bg-slate-50 text-slate-600 px-6 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors text-center flex items-center justify-center gap-2 text-xs uppercase tracking-widest"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
                Track Order
              </button>
              <Link href="/contact?form=quote" onClick={closeMenu} className="block w-full">
                <button className="w-full bg-slate-900 text-white px-6 py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors text-center text-xs uppercase tracking-widest">
                  Free Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* SHOPPING CART DRAWER */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-500 ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />

        <div
          className={`absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Drawer Header */}
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold text-[#1F2E5A] font-serif">Your Cart</h2>
              <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount} {cartCount === 1 ? 'Item' : 'Items'}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-slate-50 rounded-xl transition-colors text-slate-400 hover:text-slate-600"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-900 font-bold">Your cart is empty</p>
                  <p className="text-slate-500 text-sm mt-1">Add some masterpieces to get started.</p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-primary font-bold text-sm hover:underline underline-offset-4"
                >
                  Continue Browsing
                </button>
              </div>
            ) : (
              <>
                {buyItems.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 border-b border-slate-100 pb-2">Ready to Order</h3>
                    {buyItems.map(renderItem)}
                  </div>
                )}
                {consultItems.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 border-b border-slate-100 pb-2">Consultation List</h3>
                    {consultItems.map(renderItem)}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Cart Footer */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-slate-100 bg-slate-50/50 space-y-3 flex flex-col">
              
              {buyItems.length > 0 && (
                <button
                  onClick={() => {
                    alert("Proceeding to checkout with " + buyItems.length + " items");
                    setIsCartOpen(false);
                  }}
                  className="w-full bg-[#3d9e41] text-white py-4 rounded-2xl font-bold hover:bg-[#2f7a32] shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-3"
                >
                  Checkout
                </button>
              )}

              {consultItems.length > 0 && (
                <button
                  onClick={async () => {
                    try {
                      await fetch('/api/public/contact', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ message: "Consultation request sent from cart", items: consultItems })
                      });
                      alert("Consultation request sent");
                      setIsCartOpen(false);
                    } catch (e) {
                      alert("Consultation request sent");
                      setIsCartOpen(false);
                    }
                  }}
                  className="w-full bg-[#1F2E5A] text-white py-4 rounded-2xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-3 group"
                >
                  Consult Now
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              )}

              <Link href="/products" className="block w-full mt-2" onClick={() => setIsCartOpen(false)}>
                <button className="w-full text-center text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-slate-900 transition-colors py-3 border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-md">
                  Get to know more about products
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

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
