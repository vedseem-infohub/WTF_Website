'use client'
import React from 'react'
import Image from 'next/image'

function Carousel() {
  const images = [
    '/corousel-1.png',
    '/corousel-2.png',
    '/corousel-1.png',
    '/corousel-2.png',
    '/corousel-1.png',
    '/corousel-2.png',
  ]

  return (
    <div className="w-full bg-black py-8 overflow-hidden">
      <div className="flex animate-scroll">
        {/* First set of images */}
        {images.map((src, index) => (
          <div key={`first-${index}`} className="shrink-0 mx-4">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={src}
                alt={`carousel-${index + 1}`}
                width={300}
                height={200}
                className="object-cover block"
                unoptimized
              />
            </div>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {images.map((src, index) => (
          <div key={`second-${index}`} className="shrink-0 mx-4">
            <div className="border-4 border-red-500 rounded-lg overflow-hidden">
              <Image
                src={src}
                alt={`carousel-${index + 1}`}
                width={300}
                height={200}
                className="object-cover block"
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
