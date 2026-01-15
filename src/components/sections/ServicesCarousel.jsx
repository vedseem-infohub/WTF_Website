"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);

  const services = [
    {
      id: 1,
      name: "Franchise Model",
      description: "Partner with us and start your own WTF outlet",
      icon: "🏪",
      color: "from-red-900 via-red-800 to-red-900",
    },
    {
      id: 2,
      name: "Catering Services",
      description: "Premium catering for events and occasions",
      icon: "🍽️",
      color: "from-orange-900 via-orange-800 to-orange-900",
    },
    {
      id: 3,
      name: "Food Delivery",
      description: "Delicious food delivered to your doorstep",
      icon: "🚚",
      color: "from-blue-900 via-blue-800 to-blue-900",
    },
    {
      id: 4,
      name: "Dining",
      description: "Experience the best in-house dining",
      icon: "🍴",
      color: "from-purple-900 via-purple-800 to-purple-900",
    },
  ];

  // Auto-slide every 3 seconds with progress bar
  useEffect(() => {
    // Reset progress when slide changes
    setProgress(0);

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / 30); // 30 updates over 3 seconds (100ms each)
      });
    }, 100);

    // Auto-slide timer
    intervalRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, [currentIndex, services.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setProgress(0);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setProgress(0);
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-950 via-black to-gray-950 py-20 px-4">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-yellow-400 text-lg md:text-xl font-semibold mb-3 mt-12 tracking-wider uppercase"
        >
          What We Offer
        </motion.h2>
        <h1
          className="text-white text-4xl md:text-6xl font-bold mb-4"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Our <span className="text-red-500">Services</span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto" />
      </motion.div>

      {/* Carousel Container */}
      <div className="relative max-w-5xl mx-auto">
        {/* Main Carousel */}
        <div className="relative h-80 md:h-96 overflow-hidden rounded-3xl shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className={`absolute inset-0 bg-gradient-to-br ${services[currentIndex].color} rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center text-center relative`}
            >
              {/* Progress Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-black/20 rounded-t-3xl overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 shadow-lg"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                />
              </div>

              {/* Service Icon with Animation */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="text-7xl md:text-9xl mb-6 filter drop-shadow-2xl"
              >
                {services[currentIndex].icon}
              </motion.div>

              {/* Service Name */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-white text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {services[currentIndex].name}
              </motion.h3>

              {/* Service Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-100 text-lg md:text-xl max-w-lg leading-relaxed"
              >
                {services[currentIndex].description}
              </motion.p>

              {/* Decorative Border */}
              <div className="absolute inset-3 border-2 border-yellow-400/40 rounded-2xl pointer-events-none" />
              <div className="absolute inset-4 border border-white/10 rounded-xl pointer-events-none" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Enhanced Navigation Arrows */}
        <motion.button
          onClick={goToPrevious}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-4 md:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 z-10"
        >
          <svg
            className="w-6 h-6 md:w-7 md:h-7 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.button>

        <motion.button
          onClick={goToNext}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-4 md:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 z-10"
        >
          <svg
            className="w-6 h-6 md:w-7 md:h-7 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>

        {/* Enhanced Dot Indicators with Progress */}
        <div className="flex justify-center gap-3 mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="relative group"
            >
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-yellow-400 scale-125 shadow-lg shadow-yellow-400/50"
                    : "bg-gray-600 hover:bg-gray-400"
                }`}
              />
              {index === currentIndex && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-yellow-400"
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Enhanced Service Cards Preview */}
      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.button
            key={service.id}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className={`p-6 rounded-2xl transition-all duration-300 relative overflow-hidden ${
              index === currentIndex
                ? "bg-gradient-to-br from-red-800 to-red-900 border-2 border-yellow-400 shadow-xl shadow-yellow-400/30"
                : "bg-gray-800/60 border-2 border-transparent hover:border-gray-600 hover:bg-gray-800/80"
            }`}
          >
            {/* Background gradient effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-300 ${
              index === currentIndex ? "opacity-20" : "group-hover:opacity-10"
            }`} />
            
            <div className="relative z-10">
              <div className="text-4xl mb-3 filter drop-shadow-lg">
                {service.icon}
              </div>
              <p className={`text-sm md:text-base font-semibold ${
                index === currentIndex ? "text-yellow-300" : "text-white"
              }`}>
                {service.name}
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default ServicesCarousel;
