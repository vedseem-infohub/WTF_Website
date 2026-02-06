'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

function Carousel() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Fetch all items (limit 100 to get a good loop set)
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/carousel?limit=100`);
        if (response.ok) {
          const result = await response.json();
          const carouselData = result.data || [];
          // Filter only active images
          const activeImages = carouselData
            .filter(item => item.active)
            .map(item => item.image);

          if (activeImages.length > 0) {
            setImages(activeImages);
          }
        }
      } catch (error) {
        console.error("Failed to fetch carousel images:", error);
      }
    };
    fetchImages();
  }, []);

  return (
    <div className="w-full bg-black py-16 overflow-hidden">
      <div
        className="flex animate-scroll items-center space-x-4 md:space-x-8"
        style={{ animationDuration: '5s' }}
      >
        {/* Render images twice to create seamless loop effect */}
        {[...images, ...images].map((src, idx) => (
          <div
            key={`carousel-item-${idx}`}
            className="shrink-0"
          >
            <div className="ring-1 ring-red-500 rounded-lg overflow-hidden relative">
              <Image
                src={src}
                alt={`carousel-${idx + 1}`}
                width={300}
                height={200}
                unoptimized
                className="
                  object-cover block
                  w-[180px] h-[180px]
                  md:w-[300px] md:h-[300px]
                "
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
