import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Eye, Play, Pause } from 'lucide-react';

// Import carousel images
import carouselImage1 from '../assets/images/1st.webp';
import carouselImage2 from '../assets/images/2nd.webp';
import carouselImage3 from '../assets/images/3rd.webp';
import carouselImage4 from '../assets/images/principal.webp';
import carouselImage5 from '../assets/images/principal2.webp';

// Import carousel images from carousel folder
import yardBeforeImage from '../assets/images/carousel/yard_before.webp';
import yardAfterImage from '../assets/images/carousel/yard_after.webp';
import mowingBeforeImage from '../assets/images/carousel/mowing_before.webp';
import mowingAfterImage from '../assets/images/carousel/mowing_after.webp';
import mulchingBeforeImage from '../assets/images/carousel/mulching_before.webp';
import mulchingAfterImage from '../assets/images/carousel/mulching_after.webp';
import bushBeforeImage from '../assets/images/carousel/bush_before.webp';
import bushAfterImage from '../assets/images/carousel/bush_after.webp';
import hardscapingBeforeImage from '../assets/images/carousel/hard_before.webp';
import hardscapingAfterImage from '../assets/images/carousel/hard_after.webp';

const BeforeAfterCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isPausedByDrag, setIsPausedByDrag] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const beforeAfterProjects = [
    {
      title: 'Complete Lawn Transformation',
      description: 'From overgrown and patchy to lush, perfectly manicured lawn',
      before: mowingBeforeImage,
      after: mowingAfterImage,
      category: 'Lawn Care',
      duration: '2 weeks'
    },
    {
      title: 'Backyard Landscape Design',
      description: 'Transformed empty space into beautiful garden paradise',
      before: yardBeforeImage,
      after: yardAfterImage,
      category: 'Landscaping',
      duration: '3 weeks'
    },
    {
      title: 'Mulching & Garden Enhancement',
      description: 'Professional mulching service to enhance garden beds and retain moisture',
      before: mulchingBeforeImage,
      after: mulchingAfterImage,
      category: 'Mulching',
      duration: '1-2 days'
    },
    {
      title: 'Patio Installation',
      description: 'Custom stone patio with professional installation',
      before: hardscapingBeforeImage,
      after: hardscapingAfterImage,
      category: 'Hardscaping & Constructions',
      duration: '2 weeks'
    },
    {
      title: 'Bush Removal & Cleanup',
      description: 'Professional removal of overgrown bushes and vegetation cleanup',
      before: bushBeforeImage,
      after: bushAfterImage,
      category: 'Bush Removal',
      duration: '1-2 days'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && !isPausedByDrag) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % beforeAfterProjects.length);
        setSliderPosition(50); // Reset slider position when changing slides
      }, 12000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, isPausedByDrag, beforeAfterProjects.length]);

  const nextProject = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % beforeAfterProjects.length);
    setSliderPosition(50);
  }, [beforeAfterProjects.length]);

  const prevProject = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? beforeAfterProjects.length - 1 : prevIndex - 1
    );
    setSliderPosition(50);
  }, [beforeAfterProjects.length]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, [isDragging]);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, [isDragging]);

  const handleMouseDown = useCallback(() => {
    setIsDragging(true);
    setIsPausedByDrag(true);
  }, []);

  const handleTouchStart = useCallback(() => {
    setIsDragging(true);
    setIsPausedByDrag(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    // Resume auto-play after a short delay if it was playing before
    setTimeout(() => {
      setIsPausedByDrag(false);
    }, 1000);
  }, []);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    // Resume auto-play after a short delay if it was playing before
    setTimeout(() => {
      setIsPausedByDrag(false);
    }, 1000);
  }, []);

  const currentProject = beforeAfterProjects[currentIndex];

  return (
    <section className="py-20 bg-green-100 relative overflow-hidden">

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-4 sm:mb-6 px-4">
            Our <span className="text-emerald-600">Work</span> in Action
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-green-700 max-w-2xl mx-auto px-4">
            See the dramatic transformations we create. Drag the slider to reveal 
            the incredible before and after results of our professional services.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto px-4">
          {/* Navigation Buttons */}
          <button
            onClick={prevProject}
            className="absolute left-2 sm:left-0 top-1/2 transform -translate-y-1/2 sm:-translate-x-4 z-20 w-10 sm:w-12 h-10 sm:h-12 bg-white hover:bg-emerald-500 text-green-700 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg border border-green-200"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6" />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-2 sm:right-0 top-1/2 transform -translate-y-1/2 sm:translate-x-4 z-20 w-10 sm:w-12 h-10 sm:h-12 bg-white hover:bg-emerald-500 text-green-700 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg border border-green-200"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6" />
          </button>

          {/* Auto-play Control */}
          {/* Before/After Slider */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {/* Before/After Container */}
              <div
                ref={sliderRef}
                className="relative w-full h-full cursor-col-resize select-none"
                onMouseMove={handleMouseMove}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchMove={handleTouchMove}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {/* Before Image */}
                <div className="absolute inset-0">
                  <img
                    src={currentProject.before}
                    alt={`${currentProject.title} - Before`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    BEFORE
                  </div>
                </div>

                {/* After Image with Clip Path */}
                <div 
                  className="absolute inset-0"
                  style={{
                    clipPath: `polygon(${sliderPosition}% 0%, 100% 0%, 100% 100%, ${sliderPosition}% 100%)`
                  }}
                >
                  <img
                    src={currentProject.after}
                    alt={`${currentProject.title} - After`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    AFTER
                  </div>
                </div>

                {/* Slider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 sm:w-8 h-6 sm:h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-emerald-500">
                    <div className="flex space-x-1">
                      <div className="w-0.5 sm:w-1 h-3 sm:h-4 bg-emerald-500 rounded"></div>
                      <div className="w-0.5 sm:w-1 h-3 sm:h-4 bg-emerald-500 rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 lg:p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-2 sm:mb-3">
                      <span className="bg-emerald-400/20 text-emerald-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-emerald-400/30 mb-1 sm:mb-0 self-start">
                        {currentProject.category}
                      </span>
                      <span className="text-white/80 text-xs sm:text-sm">
                        Completed in {currentProject.duration}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-1 sm:mb-2">
                      {currentProject.title}
                    </h3>
                    <p className="text-green-100 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
                      {currentProject.description}
                    </p>
                  </motion.div>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                  <motion.div
                    className="h-full bg-gradient-to-r from-emerald-400 to-green-500"
                    initial={{ width: '0%' }}
                    animate={{ width: (isAutoPlaying && !isPausedByDrag) ? '100%' : '0%' }}
                    transition={{ duration: (isAutoPlaying && !isPausedByDrag) ? 12 : 0, ease: 'linear' }}
                    key={`progress-${currentIndex}`}
                  />
                </div>

                {/* Auto-play Control - Inside carousel */}
                {/* Auto-play Control - Responsive position */}
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="absolute top-4 left-1/2 transform -translate-x-1/2 sm:top-auto sm:bottom-4 sm:right-4 sm:left-auto sm:transform-none z-30 w-10 sm:w-12 h-10 sm:h-12 bg-white/90 hover:bg-white text-green-700 rounded-full flex items-center justify-center transition-all duration-150 hover:scale-105 shadow-lg border border-green-200"
                  aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
                >
                  {isAutoPlaying ? <Pause className="w-5 sm:w-6 h-5 sm:h-6" /> : <Play className="w-5 sm:w-6 h-5 sm:h-6" />}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Instructions */}
          <motion.div
            className="text-center mt-4 sm:mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <Eye className="w-4 h-4" />
              <span className="text-xs sm:text-sm font-medium">
                Drag the slider or click and hold to reveal the transformation
              </span>
            </div>
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
            {beforeAfterProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setSliderPosition(50);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-emerald-500 scale-110' 
                    : 'bg-green-300 hover:bg-green-400'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Project Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mt-6 sm:mt-8">
            {beforeAfterProjects.map((project, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setSliderPosition(50);
                }}
                className={`p-2 sm:p-3 rounded-lg border transition-all duration-300 text-center ${
                  index === currentIndex
                    ? 'bg-gradient-to-br from-emerald-500 to-green-600 border-emerald-500 text-white shadow-lg'
                    : 'bg-white border-green-200 text-green-700 hover:bg-green-50 hover:border-emerald-400/50 shadow-sm'
                }`}
              >
                <div className="text-xs sm:text-xs font-medium">{project.category}</div>
                <div className="text-xs sm:text-xs opacity-75 mt-1">{project.duration}</div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BeforeAfterCarousel;