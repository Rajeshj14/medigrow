'use client'

import React, { useEffect, useState, useRef, useCallback } from "react";

const cards = [
  // {
  //   video: "https://cdn.coverr.co/videos/coverr-woman-with-facial-mask-3815/1080p.mp4",
  //   btn: "Reduce Pigmentation",
  // },
  {
    video: "/images/Befor_Video.mp4",

    btn: "Anti-Aging Treatment",
  },
  {
    video: "/images/BeforVideo.mp4",

    btn: "Rejuvenate Skin",
  },
  // {
  //   video: "https://cdn.coverr.co/videos/coverr-relaxing-facial-treatment-4106/1080p.mp4",

  //   btn: "Reduce Scars",
  // },
  // {
  //   video: "https://cdn.coverr.co/videos/coverr-woman-looking-at-mirror-9277/1080p.mp4",

  //   btn: "Brighten Eyes",
  // },
];

const SkinConcernsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

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
      setCurrentIndex(prev =>
        prev + 1 > cards.length - itemsPerView ? 0 : prev + 1
      );
    }, 4000); // Slightly longer interval for videos

    return () => clearInterval(interval);
  }, [itemsPerView, isPaused]);

  // Play/pause videos on hover
  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
    // Play current visible videos
    const start = currentIndex;
    const end = Math.min(currentIndex + itemsPerView, cards.length);
    for (let i = start; i < end; i++) {
      if (videoRefs.current[i]) {
        videoRefs.current[i]?.play();
      }
    }
  }, [currentIndex, itemsPerView]);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
    // Pause all videos
    videoRefs.current.forEach(video => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => {
      const next = prev + 1 > cards.length - itemsPerView ? 0 : prev + 1;
      // Reset and play new videos
      videoRefs.current.forEach(video => {
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
      return next;
    });
  }, [itemsPerView]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => {
      const next = prev === 0 ? cards.length - itemsPerView : prev - 1;
      // Reset and play new videos
      videoRefs.current.forEach(video => {
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
      return next;
    });
  }, [itemsPerView]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
    // Reset all videos
    videoRefs.current.forEach(video => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  // Calculate total slides
  const totalSlides = Math.max(1, cards.length - itemsPerView + 1);

  return (
    <section 
      className="py-10 pb-0  max-sm:py-8 overflow-hidden bg-gradient-to-b from-white to-orange-50/10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* HEADING */}
      <div className="text-center max-w-3xl mx-auto mb-10 px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-gray-900">
          Skin Concerns{" "}
          <span className="bg-gradient-to-r from-[#B964DD] to-[#F849C1] bg-clip-text text-transparent">
            We Treat
          </span>
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          From acne and pigmentation to advanced skin concerns, we provide safe, doctor-led solutions for healthy and glowing skin.
        </p>
      </div>

      {/* CAROUSEL CONTAINER */}
      <div className="relative max-w-6xl mx-auto px-4">
        {/* NAVIGATION BUTTONS */}
        <button
          onClick={prevSlide}
          className="absolute -left-0 max-sm:ml-2 md:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm shadow-xl w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:bg-purple-50 group border border-gray-200"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-800 group-hover:text-purple-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute -right-0 max-sm:mr-2 md:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm shadow-xl w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:bg-purple-50 group border border-gray-200"
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
              transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
            }}
          >
            {cards.map((card, i) => (
              <div
                key={i}
                className={`flex-shrink-0 transition-all duration-300 ${
                  itemsPerView === 1 ? 'w-full' :
                  itemsPerView === 2 ? 'w-1/2' :
                  'w-1/3'
                } px-3`}
              >
                <div className="rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100 group relative">
                  {/* Video Container */}
                  <div className="relative w-full h-100 md:h-120 lg:h-120 overflow-hidden">
                    <video
                      ref={el => {
                        if (el) videoRefs.current[i] = el;
                      }}
                      src={card.video}
                      className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                      loop
                      muted
                      playsInline
                      preload="auto"
                      poster={card.video.replace('.mp4', '.jpg')} // Optional: Add poster images
                    />
                    
                    {/* Video Play Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
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
                i === currentIndex
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

export default SkinConcernsCarousel;