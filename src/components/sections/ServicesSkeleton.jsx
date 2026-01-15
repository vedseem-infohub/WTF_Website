"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

function ServicesSkeleton() {
  const [hoveredService, setHoveredService] = useState(null);
  const router = useRouter();

  const services = [
    {
      id: 1,
      name: "Franchise Model",
      image: "/block-1.png",
      borderColor: "border-yellow-400",
      description: "Partner with us and start your own WTF outlet. Join our successful franchise network and bring delicious food to your community.",
      features: ["Proven Business Model", "Marketing Support", "Training Programs"],
      route: "/services/franchise",
    },
    {
      id: 2,
      name: "Catering Services",
      image: "/block-2.png",
      borderColor: "border-yellow-400",
      hasTab: true,
      description: "Premium catering for events and occasions. From intimate gatherings to large celebrations, we deliver exceptional food experiences.",
      features: ["Custom Menus", "Event Planning", "Professional Service"],
      route: "/services/catering",
    },
    {
      id: 3,
      name: "Food Delivery",
      image: "/block-3.png",
      borderColor: "border-red-800",
      description: "Delicious food delivered to your doorstep. Fast, fresh, and flavorful meals right at your door.",
      features: ["Fast Delivery", "Fresh Ingredients", "Easy Ordering"],
      route: "/services/delivery",
    },
    {
      id: 4,
      name: "Dining",
      image: "/block-4.png",
      borderColor: "border-yellow-400",
      description: "Experience the best in-house dining. Enjoy our carefully crafted dishes in a warm and welcoming atmosphere.",
      features: ["Fine Dining", "Cozy Atmosphere", "Chef Specials"],
      route: "/services/dining",
    },
  ];

  const handleClick = (route) => {
    router.push(route);
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 30,
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

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.3, duration: 0.5 }
    },
  };

  const ServiceCard = ({ service }) => {
    const isHovered = hoveredService === service.id;

    return (
    <div
      onMouseEnter={() => setHoveredService(service.id)}
      onMouseLeave={() => setHoveredService(null)}
      onClick={() => handleClick(service.route)}
      className="relative w-full cursor-pointer flex flex-col items-center"
    >
      {/* Circle that expands to box on hover - Instant change */}
      <motion.div
        animate={{
          borderRadius: isHovered ? "1.5rem" : "50%",
          width: isHovered ? "100%" : "280px",
          height: isHovered ? "auto" : "280px",
          minHeight: isHovered ? "400px" : "280px",
        }}
        transition={{ duration: 0 }}
        className={`bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 border-[12px] ${service.borderColor} flex flex-col items-center justify-center overflow-hidden relative shadow-2xl ${
          service.borderColor === "border-yellow-400" 
            ? "shadow-yellow-400/30" 
            : "shadow-red-800/30"
        }`}
      >
        {/* Image - Shows when not hovered */}
        {!isHovered ? (
          <div className="absolute inset-0 z-0 bg-gray-300">
            <Image
              src={service.image}
              alt={service.name}
              fill
              className="object-cover"
              unoptimized
              priority
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.style.background = 'linear-gradient(135deg, #4a5568 0%, #2d3748 100%)';
              }}
            />
          </div>
        ) : (
          <div className="w-full h-full p-6 md:p-8 flex flex-col justify-center z-10">
              {/* Red accent dot */}
              <div className="absolute top-4 left-4 w-3 h-3 bg-red-600 rounded-full" />
              
              {/* Service Name */}
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 text-center" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                {service.name}
              </h3>
              
              {/* Description */}
              <p className="text-gray-200 text-sm md:text-base mb-6 leading-relaxed text-center">
                {service.description}
              </p>
              
              {/* Features List */}
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-yellow-400 text-sm md:text-base"
                  >
                    <span className="mr-3 text-yellow-400 text-lg">✓</span>
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* Click indicator */}
              <div className="mt-6 text-center">
                <span className="text-yellow-400 text-sm font-semibold">Click to learn more →</span>
              </div>
          </div>
        )}
        
        {/* Overlay gradient */}
        <div className={`absolute inset-0 z-5 ${
          isHovered 
            ? "bg-gradient-to-br from-black/80 via-black/70 to-black/90 rounded-3xl" 
            : "bg-gradient-to-br from-black/10 via-black/5 to-black/15 rounded-full"
        }`} />
        
        {/* Decorative rings - only show when circle */}
        {!isHovered && (
          <>
            <div className={`absolute inset-4 border-2 ${service.borderColor === "border-yellow-400" ? "border-yellow-300/60" : "border-red-700/60"} rounded-full z-30 pointer-events-none`} />
            <div className={`absolute inset-6 border ${service.borderColor === "border-yellow-400" ? "border-yellow-200/40" : "border-red-600/40"} rounded-full z-30 pointer-events-none`} />
          </>
        )}
        
        {/* Tab for Catering Services */}
        {service.hasTab && !isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 12 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="absolute -top-3 -right-3 w-18 h-18 md:w-20 md:h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg transform rotate-12 shadow-xl shadow-yellow-400/50 border-2 border-yellow-300 z-50"
          >
            <div className="w-full h-full flex items-center justify-center text-black font-bold text-xs md:text-sm z-50 drop-shadow-md">
              NEW
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Red Banner Label - Below circle, only visible when not hovered */}
      {!isHovered && (
        <div className="relative mt-4 z-40">
          <svg
            viewBox="0 0 200 50"
            className="w-48 md:w-64 h-12 md:h-16"
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
                <stop offset="0%" stopColor="#991b1b" />
                <stop offset="50%" stopColor="#dc2626" />
                <stop offset="100%" stopColor="#991b1b" />
              </linearGradient>
              <filter id={`glow-${service.id}`}>
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
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
              filter={`url(#glow-${service.id})`}
              style={{
                filter: "drop-shadow(4px 6px 8px rgba(0,0,0,0.6))",
              }}
            />
            {/* Enhanced brush texture strokes */}
            <path
              d="M15,20 Q50,18 90,22 Q130,19 180,21"
              stroke="rgba(0,0,0,0.2)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M20,30 Q60,33 100,29 Q150,32 185,30"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          {/* Name text over the red banner */}
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm md:text-base whitespace-nowrap drop-shadow-2xl tracking-wide z-50 pointer-events-none">
            {service.name}
          </span>
        </div>
      )}
    </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950 py-20 px-4">
      {/* Enhanced Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-yellow-400 text-lg md:text-xl font-semibold mb-3 tracking-wider uppercase"
        >
          Explore More
        </motion.h2>
        <h1
          className="text-white text-4xl md:text-6xl font-bold mb-4"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Our <span className="text-red-500">Multiple Services</span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto" />
      </motion.div>

      {/* Enhanced Services Grid - 2 circles per row */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2, margin: "0px" }}
              variants={cardVariants}
              className="flex justify-center min-h-[350px]"
            >
              <ServiceCard
                service={service}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesSkeleton;
