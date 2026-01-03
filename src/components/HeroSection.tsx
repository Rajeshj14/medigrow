'use client' 

import { Star, Sparkles, TrendingUp } from 'lucide-react';
import Image from 'next/image';


const images = [
  "/images/81.jpg",
  "/images/83.jpg",
  "/images/85.jpg",
  "/images/86.jpg",
];
export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-white">
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: '1000ms' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: '2000ms' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg border border-cyan-100">
              <Sparkles className="w-4 h-4 text-[#B964DD]" />
              <span className="text-sm font-bold bg-gradient-to-r from-[#B964DD] to-[#F849C1] bg-clip-text text-transparent">
                #1 Skin Clinic
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Get Unparalleled{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#B964DD] to-[#F849C1] bg-clip-text text-transparent">
                  Skin Results
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 200 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 6 Q50 0, 100 6 T200 6"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                  />
                  <defs>
                    <linearGradient id="gradient">
                      <stop offset="0%" stopColor="#B964DD" />
                      <stop offset="100%" stopColor="#F849C1" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{' '}
              That You Actually Dream Of
            </h1>

            <p className="text-xl md:text-xl text-gray-600 leading-relaxed">
              Advanced Dermatology Solutions for Radiant, Confident Skin
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#about"
                className="flex items-center gap-2 px-5 py-2 rounded-full
                bg-gradient-to-r from-[#B964DD] to-[#F849C1]
                hover:bg-gradient-to-r hover:from-[#F849C1] hover:to-[#B964DD]
                text-white font-semibold shadow-lg
                transition-all duration-300"
              >
                <span>Book Your Consultation</span>
                <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+917829868135"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200"
              >
                <span>Call Now</span>
              </a>
            </div>

            <div className="flex items-center gap-4 bg-white/90 backdrop-blur-md pt-2 pl-5 pr-5 pb-2 rounded-2xl shadow-xl border border-cyan-100 w-fit">
              <div className="flex -space-x-3">
                {images.map((src, index) => (
                  <div
                    key={index}
                   className="relative w-12 h-12 rounded-full overflow-hidden"

                  >
                    <Image
                      src={src}
                      alt={`Clinic image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div className="flex gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm font-bold text-gray-800">
                  9000+ Happy Clients
                </p>
                <p className="text-xs text-gray-500">Trusted by thousands</p>
              </div>
            </div>
          </div>

          <div className="relative animate-in slide-in-from-right duration-700 delay-300">
            <div className="absolute inset-0 bg-gradient-to-r from-[#B964DD] to-[#F849C1] rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-white to-cyan-50 rounded-3xl p-3 shadow-2xl">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-100 via-blue-50 to-cyan-100 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/30 to-blue-200/30"></div>
                  <Image
                    src="https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg"
                    alt="Beautiful skin results"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-cyan-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#B964DD] rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">92%</p>
                    <p className="text-xs text-gray-500">Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
