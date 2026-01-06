'use client';

import React from "react";

const SkinOfferSection = () => {
  return (
    <section id="offers" className="py-12 max-sm:pb-0 max-sm:py-4 px-4 bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        {/* OFFER HEADER */}
        <div className="text-center mb-10 max-sm:mb-3">
          <span className="inline-block max-sm:mb-0 mb-3 px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
            Flat 60% OFF
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 max-sm:mt-2">
            Skin Care Special Offer
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg max-sm:mt-2">
            Book your <span className="font-semibold text-purple-600">FREE consultation</span> today and transform your skin with our advanced treatments.
          </p>
        </div>

        {/* OFFER CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* CARD 1 */}
          <div className="relative bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              50% OFF
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Full Body Skin Whitening
            </h3>

            <p className="text-gray-600 mb-4">
              Choose any one premium treatment:
            </p>

            <ul className="space-y-2 text-gray-700 mb-6">
              <li>✨ Radiance White Veil Therapy</li>
              <li>✨ Hydrafacial</li>
            </ul>

            <div className="flex items-end gap-3 mb-6">
              <span className="text-gray-400 line-through text-lg">
                ₹1,00,000
              </span>
              <span className="text-3xl font-extrabold text-purple-600">
                ₹50,000
              </span>
              <span className="text-gray-500 text-sm">only</span>
            </div>

            <a href="#about" className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              Book Free Consultation
            </a>
          </div>

          {/* CARD 2 */}
          <div className="relative bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              Starting @ ₹1999
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Laser Hair Removal
            </h3>

            <p className="text-gray-600 mb-4">
              Safe, effective and long-lasting hair reduction.
            </p>

            <ul className="space-y-2 text-gray-700 mb-6">
              <li>✨ Advanced laser technology</li>
              <li>✨ Suitable for all skin types</li>
              <li>✨ T & C apply</li>
            </ul>

            <div className="mb-6">
              <span className="text-3xl font-extrabold text-green-600">
                ₹1,999
              </span>
              <span className="text-gray-500 text-sm ml-1">onwards</span>
            </div>

            <a href="#about" className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              Book Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkinOfferSection;
