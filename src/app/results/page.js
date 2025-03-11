import { ResultData } from '@/data/ResultData'
import Link from 'next/link';
import React from 'react'

const page = () => {
  const data = ResultData;
  return (
    <div className='mt-32 min-h-screen px-6'>
      <h1 className='text-center text-primary text-4xl font-semibold'>Events</h1>

      <div className='grid gap-5 md:grid-cols-3 my-10 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 mx-auto lg:w-[1024px] md:w-[700px] sm:w-[500px] w-full'>
        {(data && data.length > 0) ? data.map(sport => (

          <Link href={"/results/" + sport.sport} key={sport.sport} className='rounded-md shadow-lg group'>
            <div className='h-72 w-full overflow-hidden rounded-t-md'>
              <img src={sport.image} className='w-full h-full object-cover group-hover:scale-105 transition-all duration-200' alt="game logo" />
            </div>
            <h2 className='py-3 px-1 font-semibold text-xl text-center'>{sport.sport}</h2>
          </Link>
        )) : (
          <div className="flex items-center justify-center font-xl font-semibold h-48 px-10">
            No Data to show
          </div>
        )}
      </div>
    </div>
  )
}

export default page