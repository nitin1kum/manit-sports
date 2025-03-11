import { GalleryData } from '@/data/GalleryData'
import React from 'react'

const Page = () => {
  return (
    <div className='mt-32 px-4 min-h-screen'>
      <div className='text-4xl text-primary text-center my-10 font-bold'>Gallery</div>
      
      {/* Masonry Grid */}
      <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4'>
        {GalleryData.map((data, index) => (
          <div key={index} className='relative group overflow-hidden break-inside-avoid rounded-lg shadow-md'>
            <img 
              src={data.image} 
              alt={data.description} 
              className='w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-75'
            />
            <div className="absolute inset-0 flex items-center justify-center text-transparent text-xl font-semibold group-hover:text-white transition-all duration-300">
              {data.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page;
