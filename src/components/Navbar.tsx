
'use client'

import { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar } from 'lucide-react';
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
        <div className="flex items-center justify-between py-4">
          {/* Left Logo */}
          <div className="flex items-center">
            <div className="relative w-36 md:w-44 h-10 md:h-12 transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/image.png"
                alt="Swetika Skin Clinic"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4 absolute left-1/2 transform -translate-x-1/2">
            <a
              href="#services"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 relative group px-3 py-1"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#offers"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 relative group px-3 py-1"
            >
              Offers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
             <a
              href="#about"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 relative group px-3 py-1"
            >
              contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Right Buttons - Pushed to end */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 ml-auto">
            <a
              href="tel:+917829868135"
              className="flex items-center gap-2 px-4 py-2 rounded-full
              bg-gradient-to-r from-[#B964DD] to-[#F849C1]
              hover:bg-gradient-to-r hover:from-[#F849C1] hover:to-[#B964DD]
              text-white font-semibold shadow-lg
              transition-all duration-300 whitespace-nowrap text-sm lg:text-base"
            >
              <Phone className="w-3 h-3 lg:w-4 lg:h-4 flex-shrink-0" />
              <span>+91 9600004085</span>
            </a>
            <a
              href="#about"
              className="flex items-center gap-2 px-4 py-2 rounded-full
              bg-gradient-to-r from-[#B964DD] to-[#F849C1]
              hover:bg-gradient-to-r hover:from-[#F849C1] hover:to-[#B964DD]
              text-white font-semibold shadow-lg
              transition-all duration-300 whitespace-nowrap text-sm lg:text-base"
            >
              <Calendar className="w-3 h-3 lg:w-4 lg:h-4 flex-shrink-0" />
              <span>Book Consultation</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
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
          <div className="md:hidden py-4 space-y-3 border-t border-gray-100 animate-in slide-in-from-top">
            <a
              href="#services"
              className="block py-2 px-3 text-gray-700 hover:text-cyan-600 font-medium transition-colors rounded-lg hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#offers"
              className="block py-2 px-3 text-gray-700 hover:text-cyan-600 font-medium transition-colors rounded-lg hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Offers
            </a>
             <a
              href="#about"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 relative group px-3 py-1"
            >
              contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <div className="pt-3 space-y-3">
              <a
                href="tel:+917829868135"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-full
                bg-gradient-to-r from-[#B964DD] to-[#F849C1]
                hover:bg-gradient-to-r hover:from-[#F849C1] hover:to-[#B964DD]
                text-white font-semibold shadow-lg
                transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Call +91 9600004085</span>
              </a>
              <a
                href="#about"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-full
                bg-gradient-to-r from-[#B964DD] to-[#F849C1]
                hover:bg-gradient-to-r hover:from-[#F849C1] hover:to-[#B964DD]
                text-white font-semibold shadow-lg
                transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}