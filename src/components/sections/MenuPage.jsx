"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Sample food items data with type (veg/nonveg)
const foodItems = [
  {
    id: 1,
    name: "Paneer Tikka",
    price: "₹299",
    image: "/block-1.png",
    type: "veg",
  },
  {
    id: 2,
    name: "Butter Chicken",
    price: "₹349",
    image: "/block-2.png",
    type: "nonveg",
  },
  {
    id: 3,
    name: "Veg Biryani",
    price: "₹249",
    image: "/block-3.png",
    type: "veg",
  },
  {
    id: 4,
    name: "Dal Makhani",
    price: "₹199",
    image: "/block-4.png",
    type: "veg",
  },
  {
    id: 5,
    name: "Garlic Naan",
    price: "₹49",
    image: "/block-1.png",
    type: "veg",
  },
  {
    id: 6,
    name: "Chicken Tikka",
    price: "₹329",
    image: "/block-2.png",
    type: "nonveg",
  },
  {
    id: 7,
    name: "Pasta Alfredo",
    price: "₹279",
    image: "/block-3.png",
    type: "veg",
  },
  {
    id: 8,
    name: "Veg Manchurian",
    price: "₹229",
    image: "/block-4.png",
    type: "veg",
  },
  {
    id: 9,
    name: "Fried Rice",
    price: "₹199",
    image: "/block-1.png",
    type: "veg",
  },
  {
    id: 10,
    name: "Chicken Wings",
    price: "₹299",
    image: "/block-2.png",
    type: "nonveg",
  },
  {
    id: 11,
    name: "Chilli Paneer",
    price: "₹269",
    image: "/block-3.png",
    type: "veg",
  },
  {
    id: 12,
    name: "Fish Curry",
    price: "₹389",
    image: "/block-4.png",
    type: "nonveg",
  },
];

// Scrolling banner images
const bannerImages = [
  "/corousel-1.png",
  "/corousel-2.png",
  "/block-1.png",
  "/block-2.png",
  "/block-3.png",
  "/block-4.png",
];

function MenuPage() {
  const [filter, setFilter] = useState("all"); // 'all', 'veg', 'nonveg'

  const filteredItems = foodItems.filter((item) => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  const toggleFilter = () => {
    if (filter === "all") {
      setFilter("veg");
    } else if (filter === "veg") {
      setFilter("all");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Enhanced Scrolling Image Banner */}
      <div className="w-full h-72 md:h-96 overflow-hidden relative bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="animate-scroll flex">
          {/* Duplicate images for seamless loop */}
          {[...bannerImages, ...bannerImages].map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 md:w-96 h-72 md:h-96 relative"
            >
              <Image
                src={img}
                alt={`Food ${index + 1}`}
                fill
                className="object-cover"
              />
              {/* Enhanced gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>
          ))}
        </div>

        {/* Enhanced overlay text with better styling */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 z-10">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mb-3 drop-shadow-2xl"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Our Delicious Menu
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-200 font-light"
            >
              Explore our culinary delights
            </motion.p>
          </div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
      </div>

      {/* Enhanced Food Items Section */}
      <section className="w-full bg-[#1a1a1a] py-16 px-4 md:px-8 -mt-16 relative">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Title with Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Centered Title Section */}
            <div className="text-center">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                <span className="text-white">Our </span>
                <span className="text-red-500">Food</span>
                <span className="text-white"> Items</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mt-4" />
            </div>
            
            {/* Enhanced Toggle Switch - Positioned absolutely on the right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="absolute top-0 right-0 flex items-center gap-3"
            >
              <span className={`text-sm md:text-base font-medium transition-colors hidden sm:inline ${
                filter === "all" ? "text-white" : "text-gray-500"
              }`}>
                All
              </span>
              <button
                onClick={toggleFilter}
                className={`relative w-20 h-10 rounded-full cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                  filter === "veg"
                    ? "bg-green-500 focus:ring-green-500"
                    : "bg-gray-700 focus:ring-gray-600"
                }`}
                aria-label="Toggle vegetarian filter"
              >
                {/* Toggle Circle */}
                <motion.div
                  className="absolute top-1 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center"
                  animate={{
                    x: filter === "veg" ? 40 : 4,
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  {/* Icon indicator */}
                  {filter === "veg" ? (
                    <span className="text-green-500 text-xs font-bold">✓</span>
                  ) : (
                    <span className="text-gray-400 text-xs">•</span>
                  )}
                </motion.div>
              </button>
              <span className={`text-sm md:text-base font-medium transition-colors hidden sm:inline ${
                filter === "veg" ? "text-green-400" : "text-gray-500"
              }`}>
                Veg Only
              </span>
            </motion.div>
          </motion.div>

          {/* Enhanced Food Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 md:gap-x-10 gap-y-14 md:gap-y-24 mt-[9rem]">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                {/* Enhanced Card with overlapping circle */}
                <div className="relative flex flex-col items-center">
                  {/* Enhanced Circle with better shadow */}
                  <div
                    className={`absolute -top-8 left-1/2 -translate-x-1/2 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-[6px] z-10 transition-all duration-300 ${
                      item.type === "veg"
                        ? "border-green-500 shadow-lg shadow-green-500/50 group-hover:shadow-xl group-hover:shadow-green-500/60"
                        : "border-red-500 shadow-lg shadow-red-500/50 group-hover:shadow-xl group-hover:shadow-red-500/60"
                    } group-hover:scale-105`}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Type badge */}
                    <div
                      className={`absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        item.type === "veg"
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {item.type === "veg" ? "V" : "NV"}
                    </div>
                  </div>

                  {/* Enhanced Rectangle Card */}
                  <div className="mt-28 md:mt-24 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl px-4 pt-28 pb-6 flex flex-col items-center w-40 md:w-62 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/50 group-hover:border-gray-600">
                    <h3 className="text-white font-bold text-base md:text-lg text-center mb-2 group-hover:text-red-400 transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-red-400 font-bold text-lg md:text-xl">
                        {item.price}
                      </span>
                    </div>
                    {/* Add to cart button */}
                    <button className="w-full py-2 px-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold text-sm hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/30">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced No items message */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🍽️</div>
              <p className="text-gray-400 text-xl mb-2">No items found</p>
              <p className="text-gray-500 text-sm">
                Try selecting a different category
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}

export default MenuPage;
