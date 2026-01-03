'use client'

import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/80 backdrop-blur-sm shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <div className="relative w-44 h-12 transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/image.png"
                alt="Swetika Skin Clinic"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-cyan-600 font-medium transition-colors duration-300 relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-cyan-600 font-medium transition-colors duration-300 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#doctor"
              className="text-gray-700 hover:text-cyan-600 font-medium transition-colors duration-300 relative group"
            >
              Our Expert
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="tel:+917829868135"
              className="flex items-center gap-2 px-5 py-2 rounded-full
    bg-gradient-to-r from-[#B964DD] to-[#F849C1]
    hover:bg-gradient-to-r hover:from-[#F849C1] hover:to-[#B964DD]
    text-white font-semibold shadow-lg
    transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>+91 9600004085</span>
            </a>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-100 animate-in slide-in-from-top">
            <a
              href="#services"
              className="block py-2 text-gray-700 hover:text-cyan-600 font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="block py-2 text-gray-700 hover:text-cyan-600 font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#doctor"
              className="block py-2 text-gray-700 hover:text-cyan-600 font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Expert
            </a>
            <a
              href="tel:+917829868135"
              className="flex items-center gap-2 px-5 py-2 rounded-full
              bg-gradient-to-r from-[#B964DD] to-[#F849C1]
              hover:bg-gradient-to-r hover:from-[#F849C1] hover:to-[#B964DD]
              text-white font-semibold shadow-lg
              transition-all duration-300"
            >
              
              <span> Call +91 7829868135</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
