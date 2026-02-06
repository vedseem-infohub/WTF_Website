'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

function Banner() {
  const [bannerImage, setBannerImage] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        // Fetch all banners (Admin API doesn't support public filtering yet, so we filter client-side)
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/banner?limit=100`);
        if (response.ok) {
          const result = await response.json();
          // Access data.data as per pagination structure
          const bannerData = result.data || [];
          // Filter only active banners for public view
          const activeBanners = bannerData.filter(item => item.active);
          setBannerImage(activeBanners);
        }
      } catch (error) {
        console.error("Failed to fetch banner:", error);
      }
    };
    fetchBanner();
  }, []);

  if (!bannerImage || bannerImage.length === 0) return null;

  return (
    <section className="w-full py-12 md:py-20 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-8">
          {bannerImage.map((item, index) => (
            <div key={index} className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <Image
                src={item.image}
                alt={`Banner ${index + 1}`}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Banner