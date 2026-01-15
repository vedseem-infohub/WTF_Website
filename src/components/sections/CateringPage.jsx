"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function CateringPage() {
  const [selectedOccasion, setSelectedOccasion] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const occasions = [
    { id: 1, name: "Birthday", icon: "🎂" },
    { id: 2, name: "Wedding", icon: "💒" },
    { id: 3, name: "Corporate", icon: "💼" },
    { id: 4, name: "Anniversary", icon: "🎉" },
    { id: 5, name: "Graduation", icon: "🎓" },
    { id: 6, name: "Festival", icon: "🎊" },
    { id: 7, name: "Other", icon: "🎈" },
  ];

  const services = [
    { id: 1, name: "Full Service", icon: "🍽️" },
    { id: 2, name: "Buffet", icon: "🥘" },
    { id: 3, name: "Plated", icon: "🍴" },
    { id: 4, name: "Cocktail", icon: "🥂" },
    { id: 5, name: "BBQ", icon: "🔥" },
    { id: 6, name: "Dessert", icon: "🍰" },
    { id: 7, name: "Beverages", icon: "🥤" },
  ];

  const categories = [
    { id: 1, name: "Delivery only", icon: "🚚" },
    { id: 2, name: "Delivery + Services", icon: "📦" },
    { id: 3, name: "Live Service", icon: "👨‍🍳" },
    { id: 4, name: "Snack Box", icon: "🍪" },
    { id: 5, name: "Meal Box", icon: "🍱" },
  ];

  const packages = [
    { id: 1, name: "Multiplex", image: "/block-1.png" },
    { id: 2, name: "Premium", image: "/block-2.png" },
    { id: 3, name: "Standard", image: "/block-3.png" },
    { id: 4, name: "Basic", image: "/block-4.png" },
  ];

  const banners = [
    "/corousel-1.png",
    "/corousel-2.png",
    "/block-1.png",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-white pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <p className="text-gray-600 text-sm md:text-base mb-2 uppercase tracking-wider">
              catering
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-12"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Best Catering Services
            </h1>
          </motion.div>
        </div>

        {/* Banner Carousel - Full Width Scrollable */}
        <div className="w-full mb-16 overflow-hidden">
          <div className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory scroll-smooth px-4 md:px-6 lg:px-8">
            {banners.map((banner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[95vw] md:w-[92vw] lg:w-[90vw] h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden snap-center shadow-lg"
              >
                <Image
                  src={banner}
                  alt={`Banner ${index + 1}`}
                  width={1200}
                  height={600}
                  className="w-full h-full object-cover rounded-2xl"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Your Occasion Section */}
      <section className="bg-gray-50 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-6">
            Choose Your Occasion
          </h2>
          
          {/* Scrollable Occasions Row */}
          <div className="relative">
            <div className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide pb-6 pt-2 px-2 snap-x snap-mandatory scroll-smooth">
              {occasions.map((occasion) => (
                <motion.button
                  key={occasion.id}
                  onClick={() => setSelectedOccasion(occasion.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex-shrink-0 w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 rounded-xl border-2 flex flex-col items-center justify-center transition-all duration-300 snap-center ${
                    selectedOccasion === occasion.id
                      ? "border-red-800 bg-red-50 shadow-lg"
                      : "border-red-800 bg-white hover:bg-red-50"
                  }`}
                >
                  <span className="text-5xl md:text-6xl lg:text-7xl mb-3">{occasion.icon}</span>
                  <span className="text-base md:text-lg lg:text-xl font-semibold text-gray-800 text-center">
                    {occasion.name}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Services Section */}
      <section className="bg-white py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-6">
            Choose Your Services
          </h2>
          
          {/* Scrollable Services Row */}
          <div className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide pb-6 pt-2 px-2 snap-x snap-mandatory scroll-smooth">
            {services.map((service) => (
              <motion.button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex-shrink-0 w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 rounded-xl border-2 flex flex-col items-center justify-center transition-all duration-300 snap-center ${
                  selectedService === service.id
                    ? "border-red-800 bg-red-50 shadow-lg"
                    : "border-red-800 bg-white hover:bg-red-50"
                }`}
              >
                <span className="text-5xl md:text-6xl lg:text-7xl mb-3">{service.icon}</span>
                <span className="text-base md:text-lg lg:text-xl font-semibold text-gray-800 text-center px-2">
                  {service.name}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* SELECT & CUSTOMIZED Package Section */}
      <section className="bg-gray-50 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-gray-600 text-sm md:text-base mb-2 uppercase tracking-wider">
              SELECT & CUSTOMIZED
            </p>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px bg-red-800 flex-1 max-w-32"></div>
              <h2 className="text-3xl md:text-5xl font-bold text-red-800">
                Package
              </h2>
              <div className="h-px bg-red-800 flex-1 max-w-32"></div>
            </div>
          </motion.div>

          {/* Categories Section */}
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-red-800 mb-6 border-b-2 border-red-800 pb-2 inline-block">
              Categories
            </h3>
            
            {/* Scrollable Categories Row */}
            <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory scroll-smooth">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex-shrink-0 flex flex-col items-center snap-center ${
                    selectedCategory === category.id ? "opacity-100" : "opacity-80"
                  }`}
                >
                  <div
                    onMouseEnter={() => setHoveredCategory(category.id)}
                    onMouseLeave={() => setHoveredCategory(null)}
                    className={`
                      w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40
                      flex items-center justify-center mb-4 border-2
                      transition-[border-radius,background-color,box-shadow]
                      duration-500 ease-in-out
                      ${
                        hoveredCategory === category.id
                          ? "rounded-xl"
                          : "rounded-full"
                      }
                      ${
                        selectedCategory === category.id
                          ? "border-red-800 bg-red-50 shadow-lg"
                          : "border-red-800 bg-white hover:bg-red-50"
                      }
                    `}
                  >
                    <span className="text-4xl md:text-5xl lg:text-6xl">
                      {category.icon}
                    </span>
                  </div>
                  <span className="text-base md:text-lg lg:text-xl font-semibold text-gray-800 text-center">
                    {category.name}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Packages Grid - Scrollable */}
          <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory scroll-smooth">
            {packages.map((pkg) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="flex-shrink-0 w-64 md:w-72 snap-center"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  {/* Image Section */}
                  <div className="relative h-48 lg:h-64 bg-gray-200">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  {/* Footer Section */}
                  <div className="bg-red-800 h-14 md:h-16 flex items-center justify-center">
                    <span className="text-white font-bold text-base md:text-lg">{pkg.name}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CateringPage;
