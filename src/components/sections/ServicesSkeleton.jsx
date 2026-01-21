"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function ServicesSkeleton() {
  const services = [
    {
      id: 1,
      name: "Franchise Model",
      image: "/block-1.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      bgColor: "bg-[#2A2A2A]",
      imagePos: "left",
    },
    {
      id: 2,
      name: "Catering Services",
      image: "/block-2.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      bgColor: "bg-[#351515]",
      imagePos: "right",
    },
    {
      id: 3,
      name: "Food Delivery",
      image: "/block-3.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      bgColor: "bg-[#2A2A2A]",
      imagePos: "left",
    },
    {
      id: 4,
      name: "Dining",
      image: "/block-4.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      bgColor: "bg-[#351515]",
      imagePos: "right",
    },
  ];

  return (
    <div className="min-h-screen bg-black py-20 px-4 md:px-8 lg:px-16 flex flex-col items-center">
      {/* Header Badge - Styled exactly like the image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="z-10 bg-[#f8f0f0] px-10 py-3 rounded-2xl border-2 border-red-800/20 shadow-xl mb-[-30px]"
      >
        <h2 className="text-red-700 text-2xl font-bold tracking-tight">
          Our Multiple Services
        </h2>
      </motion.div>

      {/* Main Container - Rounded box with thin border */}
      <div className="w-full max-w-4xl bg-[#151515] rounded-[2rem] p-4 md:p-6 border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col gap-0 mt-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`w-full ${service.bgColor} py-8 px-6 md:px-10 flex flex-col md:flex-row items-center gap-10 ${
                service.imagePos === "right" ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section - With thick red border */}
              <div className="relative w-full md:w-[180px] h-[180px] flex-shrink-0">
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-[3px] border-red-600 shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                    unoptimized
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.background = 'linear-gradient(135deg, #333, #111)';
                    }}
                  />
                </div>
              </div>

              {/* Text content section */}
              <div className={`flex flex-col gap-4 flex-grow ${
                service.imagePos === "right" ? "text-right" : "text-left"
              }`}>
                <h3 className="text-[#f1c40f] text-3xl font-bold tracking-tight uppercase">
                  {service.name}
                </h3>
                <p className="text-white text-base leading-relaxed opacity-90 max-w-2xl">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesSkeleton;
