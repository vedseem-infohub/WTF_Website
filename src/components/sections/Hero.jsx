import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
        <Image 
          src="/Hero.png" 
          alt="hero" 
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 flex items-center pl-8 md:pl-16 lg:pl-24 z-10">
          <div className="text-white">
            <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] leading-[0.9] tracking-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              <span className="text-white italic font-normal">Where</span>{' '}<br />
              <span className="text-red-500 italic font-bold">Food</span>{' '}<br />
              <span className="text-white italic font-normal">Begins</span>
            </h1>
          
          </div>
        </div>
    </div>
  )
}

export default Hero