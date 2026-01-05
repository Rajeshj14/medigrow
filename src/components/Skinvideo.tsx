'use client';

import React, { useEffect, useState } from "react";

const videos = [
  "https://cdn.coverr.co/videos/coverr-woman-with-facial-mask-3815/1080p.mp4",
  "https://cdn.coverr.co/videos/coverr-skin-care-routine-6766/1080p.mp4",
  "https://cdn.coverr.co/videos/coverr-applying-face-cream-9510/1080p.mp4",
  "https://cdn.coverr.co/videos/coverr-woman-relaxing-at-spa-9175/1080p.mp4",
  "https://cdn.coverr.co/videos/coverr-beauty-treatment-4996/1080p.mp4",
  "https://cdn.coverr.co/videos/coverr-skin-care-close-up-1585/1080p.mp4",
];

const SkinBeforeAfterCarousel = () => {
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Handle responsiveness
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
      setIndex((prev) =>
        prev + 1 > videos.length - itemsPerView ? 0 : prev + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [itemsPerView]);

  return (
    <section className="py-5 max-sm:py-6 overflow-hidden">

      {/* TITLE */}
      <div className="text-center max-w-3xl mx-auto mb-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Skin Treatment <span className="bg-gradient-to-r from-[#B964DD] to-[#F849C1] bg-clip-text text-transparent">Before & After</span>
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Real skin transformations through advanced dermatology care.
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
          {videos.map((video, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3"
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <video
                  src={video}
                  className="w-full h-56 sm:h-60 lg:h-64 object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
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
