"use client";
import React from "react";
import { motion } from "framer-motion";

function ServicesSkeleton() {
  const services = [
    { id: 1, name: "Franchise Model", position: "left" },
    { id: 2, name: "Catering Services", position: "right" },
    { id: 3, name: "Food Delivery", position: "left" },
    { id: 4, name: "Dining", position: "right" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const ServiceCard = ({ service, position }) => (
    <motion.div
      variants={cardVariants}
      className={`flex flex-col items-center ${
        position === "left"
          ? "self-start ml-8 md:ml-16"
          : "self-end mr-8 md:mr-16"
      }`}
    >
      {/* Circular Image Container */}
      <div className="relative pb-4">
        <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 border-[6px] border-yellow-400 flex items-center justify-center overflow-hidden">
          {/* Placeholder for service image */}
          <div className="w-full h-full bg-gray-200" />
        </div>

        {/* Brush Stroke Banner - Pure CSS/SVG */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center">
          <svg
            viewBox="0 0 200 50"
            className="w-48 md:w-60 h-12 md:h-14"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id={`brushGradient-${service.id}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#5c1515" />
                <stop offset="50%" stopColor="#8B1A1A" />
                <stop offset="100%" stopColor="#6b1818" />
              </linearGradient>
            </defs>
            <path
              d="M5,25 
                 Q0,20 3,15 
                 Q8,5 25,8 
                 L175,6 
                 Q192,4 197,15 
                 Q202,25 197,35 
                 Q192,46 175,44 
                 L25,42 
                 Q8,44 3,35 
                 Q0,30 5,25 Z"
              fill={`url(#brushGradient-${service.id})`}
              style={{
                filter: "drop-shadow(2px 3px 3px rgba(0,0,0,0.4))",
              }}
            />
            {/* Brush texture strokes */}
            <path
              d="M15,20 Q50,18 90,22 Q130,19 180,21"
              stroke="rgba(0,0,0,0.15)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M20,30 Q60,33 100,29 Q150,32 185,30"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          <span className="absolute text-white font-bold text-sm md:text-base whitespace-nowrap drop-shadow-lg">
            {service.name}
          </span>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-black py-20 px-4">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-white text-3xl md:text-5xl font-bold">
          Our Multiple Services
        </h1>
      </motion.div>

      {/* Services Grid with Staggered Layout */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto flex flex-col gap-16 md:gap-24"
      >
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            position={service.position}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default ServicesSkeleton;
