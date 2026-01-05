// 'use client';

// import React, { useEffect, useState } from "react";

// const images = [
//   "/images/BA.jpg", 
//   "/images/BA1.jpg",
//   "/images/BA2.jpg", 
//   "/images/BA3.jpg", 
//   "/images/BA4.jpg",
//   "/images/BA5.jpg", 
// ];


// const SkinBeforeAfterCarousel = () => {
//   const [index, setIndex] = useState(0);
//   const [itemsPerView, setItemsPerView] = useState(3);

//   // Responsive control
//   useEffect(() => {
//     const updateView = () => {
//       if (window.innerWidth < 768) setItemsPerView(1);
//       else if (window.innerWidth < 1024) setItemsPerView(2);
//       else setItemsPerView(3);
//     };

//     updateView();
//     window.addEventListener("resize", updateView);
//     return () => window.removeEventListener("resize", updateView);
//   }, []);

//   // Auto slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex(prev =>
//         prev + 1 > images.length - itemsPerView ? 0 : prev + 1
//       );
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [itemsPerView]);

//   return (
//     <section className="py-5  max-sm:py-3 overflow-hidden">

//       {/* HEADING */}
//       <div className="text-center max-w-3xl mx-auto mb-8 px-4">
//         <h2 className="text-3xl md:text-4xl font-bold mb-2">
//           Skin Treatment{" "}
//           <span className="bg-gradient-to-r from-[#B964DD] to-[#F849C1] bg-clip-text text-transparent">
//             Before & After
//           </span>
//         </h2>
//         <p className="text-gray-600 text-sm md:text-lg  max-sm:mb-2">
//           Visible skin transformation with advanced care
//         </p>
//       </div>

//       {/* CAROUSEL */}  
//       <div className="relative max-w-7xl mx-auto px-4">
//         <div
//           className="flex transition-transform duration-700 ease-in-out"
//           style={{
//             transform: `translateX(-${(index * 100) / itemsPerView}%)`,
//           }}
//         >
//           {images.map((img, i) => (
//             <div
//               key={i}
//               className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3"
//             >
//               <div className="rounded-3xl overflow-hidden shadow-xl bg-white">
//                 <img
//                   src={img}
//                   alt="Skin treatment result"
//                   className="w-full h-56 sm:h-60 lg:h-64 object-cover hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//     </section>
//   );
// };

// export default SkinBeforeAfterCarousel;

'use client';

import React, { useEffect, useState, useRef, useCallback } from "react";

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
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Responsive control
  useEffect(() => {
    const updateView = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsPerView(1);      // Mobile
      else if (width < 1024) setItemsPerView(2); // Tablet
      else setItemsPerView(3);                   // Desktop (default)
    };

    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  // Auto slide
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setIndex(prev =>
        prev + 1 > images.length - itemsPerView ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [itemsPerView, isPaused]);

  const nextSlide = useCallback(() => {
    setIndex(prev => 
      prev + 1 > images.length - itemsPerView ? 0 : prev + 1
    );
  }, [itemsPerView]);

  const prevSlide = useCallback(() => {
    setIndex(prev => 
      prev === 0 ? images.length - itemsPerView : prev - 1
    );
  }, [itemsPerView]);

  const goToSlide = (slideIndex: number) => {
    setIndex(slideIndex);
  };

  // Calculate total slides
  const totalSlides = Math.max(1, images.length - itemsPerView + 1);

  return (
    <section 
      className="py-10 pb-0 max-sm:py-8 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* HEADING */}
      <div className="text-center max-w-3xl mx-auto mb-10 px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-gray-900">
          Skin Treatment{" "}
          <span className="bg-gradient-to-r from-[#B964DD] to-[#F849C1] bg-clip-text text-transparent">
            Before & After
          </span>
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Visible skin transformation with advanced care
        </p>
      </div>

      {/* CAROUSEL CONTAINER */}
      <div className="relative max-w-6xl mx-auto px-4">
        {/* NAVIGATION BUTTONS */}
        <button
          onClick={prevSlide}
          className="absolute -left-[0] max-sm:ml-2 md:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm shadow-xl w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:bg-purple-50 group border border-gray-200"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-800 group-hover:text-purple-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute -right-2 md:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm shadow-xl w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:bg-purple-50 group border border-gray-200"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-800 group-hover:text-purple-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* CAROUSEL TRACK */}
        <div 
          ref={carouselRef}
          className="overflow-hidden"
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${(index * 100) / itemsPerView}%)`,
            }}
          >
            {images.map((img, i) => (
              <div
                key={i}
                className={`flex-shrink-0 transition-all duration-300 ${
                  itemsPerView === 1 ? 'w-full' :
                  itemsPerView === 2 ? 'w-1/2' :
                  'w-1/3'
                } px-3`}
              >
                <div className="rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100">
                  <img
                    src={img}
                    alt={`Skin treatment result ${i + 1}`}
                    className="w-full h-64 md:h-72 lg:h-80 object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DOTS INDICATOR */}
        <div className="flex justify-center items-center space-x-2 md:space-x-3 mt-8 md:mt-10">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-gradient-to-br from-[#B964DD] to-[#F849C1] w-8 h-2 md:w-10 md:h-3"
                  : "bg-gray-300 hover:bg-gray-400 w-2 h-2 md:w-3 md:h-3"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkinBeforeAfterCarousel;
