'use client'

import React, { useEffect, useState, useRef, useCallback } from "react";

const cards = [
  {
    video: "/images/Befor_Video.mp4",
    btn: "Anti-Aging Treatment",
  },
  {
    video: "/images/BeforVideo.mp4",
    btn: "Rejuvenate Skin",
  },
];

const VideoPlayer = ({ src, index }: { src: string; index: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showControls, setShowControls] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handlePlaybackRate = (rate: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
      setPlaybackRate(rate);
      setShowSpeedMenu(false);
      setShowMenu(false);
    }
  };

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = src;
    a.download = `video-${index + 1}.mp4`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setShowMenu(false);
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      className="relative w-full h-full group"
      onMouseEnter={() => !isMobile && setShowControls(true)}
      onMouseLeave={() => {
        if (!isMobile) {
          setShowControls(false);
          setShowMenu(false);
          setShowSpeedMenu(false);
        }
      }}
      onTouchStart={() => isMobile && setShowControls(true)}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        onClick={togglePlay}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        loop
        playsInline
      />

      {/* Play/Pause Overlay */}
      {!isPlaying && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
          onClick={togglePlay}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 sm:p-4 hover:scale-110 transition-transform">
            <svg className="w-8 h-8 sm:w-12 sm:h-12 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}

      {/* Video Controls */}
      <div 
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-3 transition-opacity duration-300 ${
          showControls || isMobile ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Progress Bar */}
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
          className="w-full h-1 mb-1 sm:mb-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
          style={{
            background: `linear-gradient(to right, #B964DD ${(currentTime / duration) * 100}%, #4B5563 ${(currentTime / duration) * 100}%)`
          }}
        />

        <div className="flex items-center justify-between text-white text-xs sm:text-sm">
          {/* Left Controls */}
          <div className="flex items-center space-x-1.5 sm:space-x-3">
            {/* Play/Pause */}
            <button onClick={togglePlay} className="hover:scale-110 transition-transform p-1 sm:p-0">
              {isPlaying ? (
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Volume - Hide on mobile */}
            {!isMobile && (
              <div className="flex items-center space-x-2 group/volume">
                <button onClick={toggleMute} className="hover:scale-110 transition-transform">
                  {isMuted || volume === 0 ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                    </svg>
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-16 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer opacity-0 group-hover/volume:opacity-100 transition-opacity"
                />
              </div>
            )}

            {/* Time */}
            <span className="text-[10px] sm:text-xs whitespace-nowrap">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-1.5 sm:space-x-3">
            {/* Volume button for mobile only */}
            {isMobile && (
              <button onClick={toggleMute} className="hover:scale-110 transition-transform p-1">
                {isMuted || volume === 0 ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                  </svg>
                )}
              </button>
            )}

            {/* Three Dots Menu */}
            <div className="relative">
              <button 
                onClick={() => setShowMenu(!showMenu)}
                className="hover:scale-110 transition-transform p-1 sm:p-0"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {showMenu && (
                <div className="absolute bottom-full right-0 mb-2 bg-gray-900 rounded-lg shadow-xl py-1 sm:py-2 min-w-[120px] sm:min-w-[150px] z-50">
                  {/* Playback Speed */}
                  <div className="relative">
                    <button
                      onClick={() => setShowSpeedMenu(!showSpeedMenu)}
                      className="w-full px-2 sm:px-4 py-1.5 sm:py-2 text-left hover:bg-gray-800 flex items-center justify-between text-xs sm:text-sm"
                    >
                      <span>Speed: {playbackRate}x</span>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                      </svg>
                    </button>

                    {showSpeedMenu && (
                      <div className="absolute right-full top-0 mr-2 bg-gray-900 rounded-lg shadow-xl py-1 sm:py-2 min-w-[80px] sm:min-w-[100px]">
                        {[0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2].map(rate => (
                          <button
                            key={rate}
                            onClick={() => handlePlaybackRate(rate)}
                            className={`w-full px-2 sm:px-4 py-1.5 sm:py-2 text-left hover:bg-gray-800 text-xs sm:text-sm ${
                              playbackRate === rate ? 'text-purple-400' : ''
                            }`}
                          >
                            {rate}x
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Download */}
                  <button
                    onClick={handleDownload}
                    className="w-full px-2 sm:px-4 py-1.5 sm:py-2 text-left hover:bg-gray-800 flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm"
                  >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                    </svg>
                    <span>Download</span>
                  </button>
                </div>
              )}
            </div>

            {/* Fullscreen */}
            <button onClick={toggleFullscreen} className="hover:scale-110 transition-transform p-1 sm:p-0">
              <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          background: #B964DD;
          cursor: pointer;
          border-radius: 50%;
        }
        .slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          background: #B964DD;
          cursor: pointer;
          border-radius: 50%;
          border: none;
        }
        @media (max-width: 640px) {
          .slider::-webkit-slider-thumb {
            width: 10px;
            height: 10px;
          }
          .slider::-moz-range-thumb {
            width: 10px;
            height: 10px;
          }
        }
      `}</style>
    </div>
  );
};

const SkinConcernsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateView = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsPerView(1);
      else if (width < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };

    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev =>
        prev + 1 > cards.length - itemsPerView ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [itemsPerView, isPaused]);

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => 
      prev + 1 > cards.length - itemsPerView ? 0 : prev + 1
    );
  }, [itemsPerView]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => 
      prev === 0 ? cards.length - itemsPerView : prev - 1
    );
  }, [itemsPerView]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const totalSlides = Math.max(1, cards.length - itemsPerView + 1);

  return (
    <section 
      className="py-10 pb-0 max-sm:py-8 overflow-hidden bg-gradient-to-b from-white to-orange-50/10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
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

      <div className="relative max-w-6xl mx-auto px-4">
        <button
          onClick={prevSlide}
          className="absolute left-1 sm:left-0 md:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm shadow-xl w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:bg-purple-50 group border border-gray-200"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-800 group-hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-1 sm:right-0 md:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm shadow-xl w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:bg-purple-50 group border border-gray-200"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-800 group-hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="overflow-hidden">
          <div
            className={`flex transition-transform duration-500 ease-out ${
              itemsPerView === 1 ? '' : 'justify-center'
            }`}
            style={{
              transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
            }}
          >
            {cards.map((card, i) => (
              <div
                key={i}
                className={`flex-shrink-0 ${
                  itemsPerView === 1 ? 'w-full' :
                  itemsPerView === 2 ? 'w-1/2' :
                  'w-1/3'
                } px-2 sm:px-3`}
              >
                <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100">
                  <div className="relative w-full h-[400px] sm:h-96 md:h-[480px] lg:h-[500px]">
                    <VideoPlayer src={card.video} index={i} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center space-x-2 md:space-x-3 mt-6 sm:mt-8 md:mt-10 pb-4 sm:pb-0">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "bg-gradient-to-br from-[#B964DD] to-[#F849C1] w-6 h-2 sm:w-8 sm:h-2 md:w-10 md:h-3"
                  : "bg-gray-300 hover:bg-gray-400 w-2 h-2 md:w-3 md:h-3"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkinConcernsCarousel;