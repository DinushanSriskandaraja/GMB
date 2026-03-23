'use client';

import { useModal } from '@/lib/ModalContext';
import Link from 'next/link';
import { useState } from 'react';

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
              <Link href="/" className="text-2xl font-bold gradient-text" onClick={closeMenu}>
                GMB
              </Link>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-slate-700 hover:text-primary transition-colors font-medium">Home</Link>
                <Link
                  href="/products"
                  className="text-slate-700 hover:text-primary transition-colors font-medium"
                  onMouseEnter={onProductHover}
                  onMouseLeave={onProductLeave}
                >
                  Products
                </Link>
                <Link href="/about" className="text-slate-700 hover:text-primary transition-colors font-medium">About</Link>
                <Link href="/contact" className="text-slate-700 hover:text-primary transition-colors font-medium">Contact</Link>
              </div>
            </div>

            {/* Desktop Right Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Link href="/contact?form=quote">
                <button className="bg-primary text-white px-6 py-2 rounded-xl font-bold hover:opacity-90 transition-opacity whitespace-nowrap">
                  Request Quote
                </button>
              </Link>
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
            </div>

            {/* Mobile: Track + Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={openTrackModal}
                className="bg-slate-100 text-slate-600 p-2 rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center"
                title="Track Order"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-slate-100 text-slate-700 p-2 rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } bg-white border-t border-slate-100`}
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
            <div className="pt-2 pb-1">
              <Link href="/contact?form=quote" onClick={closeMenu}>
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
