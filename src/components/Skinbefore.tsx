// 'use client'

// import React, { useEffect, useState, useRef, useCallback } from "react";

// const cards = [
//   {
//     image: "/images/pimple.jpeg",
//     title: "Pigmentation & Dark Spots",
//     desc: "Uneven skin tone, melasma, and sun-induced pigmentation.",
//     btn: "Reduce Pigmentation",
//     icon: "🎯",
//   },
//   {
//     image: "/images/pimples.jpeg",
//     title: "Anti-Aging & Wrinkles",
//     desc: "Fine lines, wrinkles, and sagging skin due to ageing.",
//     btn: "Anti-Aging Treatment",
//     icon: "⏳",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
//     title: "Skin Rejuvenation",
//     desc: "Dull and tired skin needing hydration and glow restoration.",
//     btn: "Rejuvenate Skin",
//     icon: "✨",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
//     title: "Scars & Acne Marks",
//     desc: "Acne scars, surgical scars, and uneven skin texture.",
//     btn: "Reduce Scars",
//     icon: "🩹",
//   },
//   {
//     image: "/images/download.jpeg",
//     title: "Dark Circles",
//     desc: "Under-eye pigmentation, puffiness, and tired-looking eyes.",
//     btn: "Brighten Eyes",
//     icon: "👁️",
//   },
// ];


// const HairConcernsAutoCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const [visibleCardsCount, setVisibleCardsCount] = useState(3);
//   const [touchStart, setTouchStart] = useState(null);
//   const [touchEnd, setTouchEnd] = useState(null);
//   const carouselRef = useRef(null);

//   // Calculate visible cards based on screen size
//   useEffect(() => {
//     const updateVisibleCards = () => {
//       const width = window.innerWidth;
//       if (width >= 1280) return 4; // Extra large screens
//       if (width >= 1024) return 3; // Desktop
//       if (width >= 768) return 2;  // Tablet
//       return 1;                    // Mobile
//     };
    
//     setVisibleCardsCount(updateVisibleCards());
    
//     const handleResize = () => {
//       setVisibleCardsCount(updateVisibleCards());
//     };
    
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Auto slide with smooth infinite scroll
//   useEffect(() => {
//     if (isPaused) return;
    
//     const interval = setInterval(() => {
//       setCurrentIndex(prev => {
//         if (prev >= cards.length - visibleCardsCount) {
//           return 0; // Reset to start for infinite effect
//         }
//         return prev + 1;
//       });
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [isPaused, visibleCardsCount]);

//   const nextSlide = useCallback(() => {
//     setCurrentIndex(prev => {
//       if (prev >= cards.length - visibleCardsCount) {
//         return 0; // Loop back to start
//       }
//       return prev + 1;
//     });
//   }, [visibleCardsCount]);

//   const prevSlide = useCallback(() => {
//     setCurrentIndex(prev => {
//       if (prev === 0) {
//         return cards.length - visibleCardsCount; // Loop to end
//       }
//       return prev - 1;
//     });
//   }, [visibleCardsCount]);

//   const goToSlide = (index) => {
//     setCurrentIndex(Math.min(index, cards.length - visibleCardsCount));
//   };

//   // Touch/swipe handling for mobile
//   const handleTouchStart = (e) => {
//     setTouchStart(e.touches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     setTouchEnd(e.touches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (!touchStart || !touchEnd) return;
    
//     const distance = touchStart - touchEnd;
//     const minSwipeDistance = 50;
    
//     if (distance > minSwipeDistance) {
//       nextSlide(); // Swipe left
//     } else if (distance < -minSwipeDistance) {
//       prevSlide(); // Swipe right
//     }
    
//     setTouchStart(null);
//     setTouchEnd(null);
//   };

//   // Calculate total slides
//   const totalSlides = Math.max(1, cards.length - visibleCardsCount + 1);

//   return (
//     <section 
//       className="py-20 max-sm:py-10 overflow-hidden max-sm:pb-5"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       {/* Decorative elements */}
//       <div className="absolute top-10 left-10 w-32 h-32 bg-orange-100 rounded-full opacity-20 blur-3xl"></div>
//       <div className="absolute bottom-10 right-10 w-40 h-40 bg-amber-100 rounded-full opacity-20 blur-3xl"></div>

//       {/* Heading with animation */}
//       <div className="text-center max-w-5xl mx-auto mb-16 max-sm:mb-6 px-4 relative">
//         {/* <div className="inline-block mb-4">
//           <span className="text-5xl animate-bounce">👨‍⚕️</span>
//         </div> */}
//         <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black max-sm:mb-1">
//           Skin Concerns <span className="bg-gradient-to-r from-[#B964DD] to-[#F849C1] bg-clip-text text-transparent">We Treat at</span>
//         </h2>
//         <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
//             From acne and pigmentation to advanced skin concerns, we provide safe, doctor-led solutions for healthy and glowing skin.
//         </p>
//       </div>

//       {/* Carousel Container */}
//       <div className="relative max-w-7xl mx-auto px-4">
//         {/* Navigation Buttons with better styling */}
//         <button
//           onClick={prevSlide}
//           className="absolute -left-4 lg:-left-8 top-1/2 -translate-y-1/2 z-20 bg-white shadow-2xl w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:bg-orange-50 group"
//           aria-label="Previous slide"
//         >
//           <svg className="w-6 h-6 text-gray-800 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>

//         <button
//           onClick={nextSlide}
//           className="absolute -right-4 lg:-right-8 top-1/2 -translate-y-1/2 z-20 bg-white shadow-2xl w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:bg-orange-50 group"
//           aria-label="Next slide"
//         >
//           <svg className="w-6 h-6 text-gray-800 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>

//         {/* Carousel */}
//         <div 
//           ref={carouselRef}
//           className="overflow-hidden px-2 py-4"
//           onTouchStart={handleTouchStart}
//           onTouchMove={handleTouchMove}
//           onTouchEnd={handleTouchEnd}
//         >
//           <div
//             className="flex transition-transform duration-500 ease-out"
//             style={{
//               transform: `translateX(-${currentIndex * (100 / visibleCardsCount)}%)`,
//             }}
//           >
//             {cards.map((card, index) => (
//               <div
//                 key={index}
//                 className="min-w-full sm:min-w-[50%] lg:min-w-[33.333%] xl:min-w-[25%] px-3 transition-all duration-500"
//                 style={{
//                   opacity: Math.abs(currentIndex - index) > 2 ? 0.7 : 1,
//                   transform: `scale(${currentIndex === index ? 1.05 : currentIndex === index - 1 || currentIndex === index + 1 ? 1.02 : 1})`,
//                 }}
//               >
//                 <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group h-full border border-gray-100 hover:border-orange-200">
//                   {/* Image with gradient overlay */}
//                   <div className="relative overflow-hidden h-64">
//                     <img
//                       src={card.image}
//                       alt={card.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
//                     <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center text-2xl">
//                       {card.icon}
//                     </div>
//                     {/* Badge */}
//                     <div className="absolute top-4 left-4">
//                       <span className=" bg-gradient-to-br from-[#B964DD] to-[#F849C1] text-white px-3 py-1 rounded-full text-xs font-semibold">
//                         Treatment Available
//                       </span>
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="p-7">
//                     <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-purple-500 transition-colors">
//                       {card.title}
//                     </h3>
//                     <p className="text-gray-600 mb-6 leading-relaxed min-h-[60px]">
//                       {card.desc}
//                     </p>

//                     {/* Buttons */}
//                     <div className="space-y-3">
//                       <button className="w-full border-2 border-gray-200 py-3 rounded-xl font-medium hover:border-purple-400 hover:bg-purple-50 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
//                         <svg className="w-5 h-5 group-hover/btn:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                         </svg>
//                         Call Us Now
//                       </button>

//                       <button className="w-full  bg-gradient-to-br from-[#B964DD] to-[#F849C1] text-white py-3.5 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
//                         {card.btn}
//                         <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                         </svg>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Enhanced Dots Indicator */}
//         <div className="flex justify-center items-center space-x-3 mt-10">
//           {Array.from({ length: totalSlides }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`flex flex-col items-center transition-all duration-300 ${
//                 index === currentIndex ? 'scale-125' : ''
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             >
//               <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentIndex
//                   ? " bg-gradient-to-br from-[#B964DD] to-[#F849C1] w-10"
//                   : "bg-gray-300 hover:bg-gray-400"
//               }`} />
//               <span className={`text-xs mt-2 font-medium ${
//                 index === currentIndex ? 'text-purple-600' : 'text-gray-500'
//               }`}>
//                 {index + 1}
//               </span>
//             </button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HairConcernsAutoCarousel;

'use client'

import React, { useEffect, useState, useRef, useCallback } from "react";

const cards = [
  {
    image: "/images/pimple.jpeg",
    title: "Pigmentation & Dark Spots",
    desc: "Uneven skin tone, melasma, and sun-induced pigmentation.",
    btn: "Reduce Pigmentation",
  },
  {
    image: "/images/pimples.jpeg",
    title: "Anti-Aging & Wrinkles",
    desc: "Fine lines, wrinkles, and sagging skin due to ageing.",
    btn: "Anti-Aging Treatment",
  },
  {
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    title: "Skin Rejuvenation",
    desc: "Dull and tired skin needing hydration and glow restoration.",
    btn: "Rejuvenate Skin",
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    title: "Scars & Acne Marks",
    desc: "Acne scars, surgical scars, and uneven skin texture.",
    btn: "Reduce Scars",
  },
  {
    image: "/images/download.jpeg",
    title: "Dark Circles",
    desc: "Under-eye pigmentation, puffiness, and tired-looking eyes.",
    btn: "Brighten Eyes",
  },
];

const HairConcernsAutoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCardsCount, setVisibleCardsCount] = useState(1);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Calculate visible cards and detect mobile
  useEffect(() => {
    const updateView = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      
      if (width >= 1536) return 5; // 2xl screens - show all cards
      if (width >= 1280) return 4; // xl screens
      if (width >= 1024) return 3; // lg screens
      if (width >= 768) return 2;  // md screens
      return 1;                    // sm screens
    };
    
    setVisibleCardsCount(updateView());
    
    const handleResize = () => {
      setVisibleCardsCount(updateView());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto slide with smooth infinite scroll
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev >= cards.length - visibleCardsCount) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, visibleCardsCount]);

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => {
      if (prev >= cards.length - visibleCardsCount) {
        return 0;
      }
      return prev + 1;
    });
  }, [visibleCardsCount]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => {
      if (prev === 0) {
        return cards.length - visibleCardsCount;
      }
      return prev - 1;
    });
  }, [visibleCardsCount]);

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, Math.max(0, cards.length - visibleCardsCount)));
  };

  // Touch/swipe handling for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Calculate total slides
  const totalSlides = Math.max(1, cards.length - visibleCardsCount + 1);

  return (
    <section 
      className="relative max-sm:pb-4 py-8 sm:py-12 md:py-16 lg:py-12 xl:py-10 overflow-hidden bg-gradient-to-b from-white to-orange-50/30"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative elements - Responsive sizing */}
      <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-orange-100 rounded-full opacity-20 blur-2xl sm:blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-amber-100 rounded-full opacity-20 blur-2xl sm:blur-3xl"></div>

      {/* Heading with responsive text */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 md:mb-16 lg:mb-5 max-sm:mb-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center max-sm:mb-1 mb-4 sm:mb-6 text-gray-900">
          Skin Concerns We Treat at{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Your Clinic
          </span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4 ">
          From acne and pigmentation to advanced skin concerns, we provide safe, doctor-led solutions for healthy and glowing skin.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* Navigation Buttons - Hidden on very small screens, adjusted positioning */}
        {!isMobile && (
          <>
            <button
              onClick={prevSlide}
              className="absolute -left-2 sm:-left-3 md:-left-4 lg:-left-6 xl:-left-8 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm shadow-xl w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:bg-orange-50 group border border-gray-100"
              aria-label="Previous slide"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-800 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute -right-2 sm:-right-3 md:-right-4 lg:-right-6 xl:-right-8 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm shadow-xl w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:bg-orange-50 group border border-gray-100"
              aria-label="Next slide"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-800 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Carousel */}
        <div 
          ref={carouselRef}
          className="overflow-hidden px-1 sm:px-2 py-2 sm:py-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCardsCount)}%)`,
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className={`px-1.5 sm:px-2 md:px-3 transition-all duration-500 ${
                  visibleCardsCount === 1 ? 'min-w-full' :
                  visibleCardsCount === 2 ? 'min-w-1/2' :
                  visibleCardsCount === 3 ? 'min-w-1/3' :
                  visibleCardsCount === 4 ? 'min-w-1/4' :
                  'min-w-1/5'
                }`}
                style={{
                  opacity: Math.abs(currentIndex - index) > visibleCardsCount ? 0.7 : 1,
                  transform: `scale(${currentIndex === index ? 1.02 : currentIndex === index - 1 || currentIndex === index + 1 ? 1.01 : 1})`,
                }}
              >
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 group h-full border border-gray-100 hover:border-orange-200 flex flex-col">
                  {/* Image container with responsive height */}
                  <div className="relative overflow-hidden h-40 sm:h-48 md:h-56 lg:h-64">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                    {/* Badge - Responsive text */}
                    <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4">
                      <span className="bg-gradient-to-br from-[#B964DD] to-[#F849C1] text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                        Treatment
                      </span>
                    </div>
                  </div>

                  {/* Content - Responsive padding and text */}
                  <div className="p-3 sm:p-4 md:p-5 lg:p-7 flex-grow flex flex-col">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-800 group-hover:text-purple-500 transition-colors line-clamp-1">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed flex-grow line-clamp-3">
                      {card.desc}
                    </p>

                    {/* Buttons - Responsive sizing */}
                    <div className="space-y-2 sm:space-y-3">
                      <button className="w-full border border-gray-200 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-medium hover:border-purple-400 hover:bg-purple-50 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 group/btn text-xs sm:text-sm">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover/btn:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call Us Now
                      </button>

                      <button className="w-full bg-gradient-to-br from-[#B964DD] to-[#F849C1] text-white py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm">
                        {card.btn}
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Dots Indicator - Responsive */}
        <div className="flex justify-center items-center space-x-1.5 sm:space-x-2 md:space-x-3 mt-6 sm:mt-8 md:mt-10 px-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex flex-col items-center transition-all duration-300 ${
                index === currentIndex ? 'scale-110 sm:scale-125' : ''
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={`rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-to-br from-[#B964DD] to-[#F849C1] w-6 h-2 sm:w-8 sm:h-2 md:w-10 md:h-3"
                  : "bg-gray-300 hover:bg-gray-400 w-2 h-2 sm:w-3 sm:h-3"
              }`} />
              {!isMobile && (
                <span className={`text-xs mt-1 sm:mt-2 font-medium ${
                  index === currentIndex ? 'text-purple-600' : 'text-gray-500'
                }`}>
                  {index + 1}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile swipe hint - Only show on mobile */}
      {isMobile && (
        <div className="flex justify-center items-center mt-6">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
            <span>Swipe to navigate</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default HairConcernsAutoCarousel;