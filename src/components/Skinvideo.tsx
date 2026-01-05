'use client';

import React, { useEffect, useState } from "react";

const images = [
  "/images/BA.jpg", 
  "/images/BA1.jpg",
  "/images/BA2.jpg", 
  "/images/BA3.jpg", 
  "/images/BA4.jpg",
  "/images/BA5.jpg", 
];


const SkinBeforeAfterCarousel = () => {
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Responsive control
  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };

    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev =>
        prev + 1 > images.length - itemsPerView ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [itemsPerView]);

  return (
    <section className="py-5 overflow-hidden">

      {/* HEADING */}
      <div className="text-center max-w-3xl mx-auto mb-8 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Skin Treatment{" "}
          <span className="bg-gradient-to-r from-[#B964DD] to-[#F849C1] bg-clip-text text-transparent">
            Before & After
          </span>
        </h2>
        <p className="text-gray-600 text-sm md:text-lg">
          Visible skin transformation with advanced care
        </p>
      </div>

      {/* CAROUSEL */}
      <div className="relative max-w-7xl mx-auto px-4">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(index * 100) / itemsPerView}%)`,
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3"
            >
              <div className="rounded-3xl overflow-hidden shadow-xl bg-white">
                <img
                  src={img}
                  alt="Skin treatment result"
                  className="w-full h-56 sm:h-60 lg:h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default SkinBeforeAfterCarousel;
