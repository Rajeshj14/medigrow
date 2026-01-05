'use client'

import React, { useEffect, useState, useRef, useCallback } from "react";

const cards = [
  {
    image: "/images/pimple.jpeg",
    title: "Pigmentation & Dark Spots",
    btn: "Reduce Pigmentation",
  },
  {
    image: "/images/pimples.jpeg",
    title: "Anti-Aging & Wrinkles",
    btn: "Anti-Aging Treatment",
  },
  {
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    title: "Skin Rejuvenation",
    btn: "Rejuvenate Skin",
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    title: "Scars & Acne Marks",
    btn: "Reduce Scars",
  },
  {
    image: "/images/download.jpeg",
    title: "Dark Circles",
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
      className="relative py-8 sm:py-12 md:py-16 lg:py-12 xl:py-10 overflow-hidden bg-gradient-to-b from-white to-orange-50/30"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Heading with responsive text */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 md:mb-16 lg:mb-5 max-sm:mb-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center max-sm:mb-1 mb-4 sm:mb-6 text-gray-900">
          Skin Concerns <span className="bg-gradient-to-r from-[#B964DD] to-[#F849C1] bg-clip-text text-transparent">
            We Treat
          </span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4">
          From acne and pigmentation to advanced skin concerns, we provide safe, doctor-led solutions for healthy and glowing skin.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* Navigation Buttons */}
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
              >
                {/* Simple Card - Image only, full height */}
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 group h-[380px] sm:h-[420px] md:h-[450px] lg:h-[480px] border border-gray-100 hover:border-orange-200 overflow-hidden">
                  {/* Image takes full card */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center space-x-1.5 sm:space-x-2 md:space-x-3 mt-6 sm:mt-8 md:mt-10 px-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-to-br from-[#B964DD] to-[#F849C1] w-6 h-2 sm:w-8 sm:h-2 md:w-10 md:h-3"
                  : "bg-gray-300 hover:bg-gray-400 w-2 h-2 sm:w-3 sm:h-3"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HairConcernsAutoCarousel;