"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      id: 1,
      name: "Franchise Model",
      description: "Partner with us and start your own WTF outlet",
      icon: "🏪",
    },
    {
      id: 2,
      name: "Catering Services",
      description: "Premium catering for events and occasions",
      icon: "🍽️",
    },
    {
      id: 3,
      name: "Food Delivery",
      description: "Delicious food delivered to your doorstep",
      icon: "🚚",
    },
    {
      id: 4,
      name: "Dining",
      description: "Experience the best in-house dining",
      icon: "🍴",
    },
  ];

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [services.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  return (
    <div className="w-full bg-gradient-to-b from-black via-gray-900 to-black py-16 px-4">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-yellow-400 text-lg md:text-xl font-semibold mb-2">
          What We Offer
        </h2>
        <h1 className="text-white text-3xl md:text-5xl font-bold">
          Our Services
        </h1>
      </motion.div>

      {/* Carousel Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Main Carousel */}
        <div className="relative h-72 md:h-80 overflow-hidden rounded-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-red-900 rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center text-center"
            >
              {/* Service Icon */}
              <div className="text-6xl md:text-8xl mb-4">
                {services[currentIndex].icon}
              </div>

              {/* Service Name */}
              <h3 className="text-white text-2xl md:text-4xl font-bold mb-3">
                {services[currentIndex].name}
              </h3>

              {/* Service Description */}
              <p className="text-gray-200 text-base md:text-lg max-w-md">
                {services[currentIndex].description}
              </p>

              {/* Decorative Border */}
              <div className="absolute inset-2 border-2 border-yellow-400/30 rounded-xl pointer-events-none" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-yellow-400 hover:bg-yellow-300 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-yellow-400 hover:bg-yellow-300 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 mt-6">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-yellow-400 scale-125"
                  : "bg-gray-600 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Service Cards Preview */}
      <div className="max-w-4xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <motion.button
            key={service.id}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-4 rounded-xl transition-all duration-300 ${
              index === currentIndex
                ? "bg-red-800 border-2 border-yellow-400"
                : "bg-gray-800/50 border-2 border-transparent hover:border-gray-600"
            }`}
          >
            <div className="text-3xl mb-2">{service.icon}</div>
            <p className="text-white text-sm font-medium">{service.name}</p>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default ServicesCarousel;
