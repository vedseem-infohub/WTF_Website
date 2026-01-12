import React from 'react'
import Image from 'next/image'

function Banner() {
  return (
    <div className='w-full bg-white pt-24 overflow-hidden'>
        {/* Banner Image - Full Width */}
        <div className='relative w-full h-auto'>
            <Image 
                src="/banner-1.png" 
                alt="banner" 
                width={1920} 
                height={600} 
                className="w-full h-auto object-cover"
                unoptimized
            />
        </div>
        
        {/* Blocks Section - Full Width */}
        <div className='w-full py-8 md:py-12 overflow-hidden'>
            <div className='w-full flex justify-center md:justify-between items-center gap-4 md:gap-4 px-4 md:px-8'>
                <div>
                    <Image src="/block-1.png" alt="block-1" width={600} height={300} className="w-64 h-40 md:w-80 md:h-52 lg:w-96 lg:h-64 object-contain" unoptimized />
                </div>
                <div>
                    <Image src="/block-2.png" alt="block-2" width={600} height={300} className="w-64 h-40 md:w-80 md:h-52 lg:w-96 lg:h-64 object-contain" unoptimized />
                </div>
                <div>
                    <Image src="/block-3.png" alt="block-3" width={600} height={300} className="w-64 h-40 md:w-80 md:h-52 lg:w-96 lg:h-64 object-contain" unoptimized />
                </div>
                <div>
                    <Image src="/block-4.png" alt="block-4" width={600} height={300} className="w-64 h-40 md:w-80 md:h-52 lg:w-96 lg:h-64 object-contain" unoptimized />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner