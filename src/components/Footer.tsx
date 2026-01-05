"use client"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram,} from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Expert', href: '#doctor' },
    { label: 'Book Appointment', href: '#about' },
  ];

  const services = [
    'HydraFacial',
    'Chemical Peels',
    'MNRF Treatment',
    'Laser Hair Reduction',
    'RF Cautery',
    'Mesotherapy',
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-13 max-sm:pt-10 lg:pb-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 max-sm:gap-6 gap-12 mb-12 max-sm:mb-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-40 h-12">
                <div className="absolute inset-0 bg-white rounded-lg"></div>
                <Image
                  src="/images/image.png"
                  alt="Swetika Skin Clinic"
                  fill
                  className="object-contain p-1"
                />
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Radiance Elite Skin Care Clinic offers science-backed, dermatologist-led skin treatments to restore healthy, glowing skin with care you can trust.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#B964DD] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#B964DD] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-[#B964DD] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#B964DD] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+917829868135"
                  className="flex items-start gap-3 text-gray-400 hover:text-[#B964DD] transition-colors group"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>+91 9600004085</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:theradianceelite@gmail.com"
                  className="flex items-start gap-3 text-gray-400 hover:text-[#B964DD] transition-colors group"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>theradianceelite@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  Plot No. 1, PC-2 Mogappair West Main Road Mogappair West, Nolambur Ambattur Industrial Estate Chennai, Tamil Nadu – 600037
                </span>
              </li>
              {/* <li className="flex items-start gap-3 text-gray-400">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p>Mon - Sat: 10:00 AM - 8:00 PM</p>
                  <p>Sunday: By Appointment</p>
                </div>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 Radiance Elite. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-[#B964DD] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#B964DD] transition-colors"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
