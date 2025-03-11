"use client"

import { ResultData } from '@/data/ResultData';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React, { useMemo } from 'react'

const page = () => {
    const { sport } = useParams();
    const data = useMemo(() => ResultData.find(data => data.sport === sport));
    return (
        <div className='mt-32 min-h-screen px-6'>
            <h1 className='text-center text-primary text-4xl font-semibold'>{sport}</h1>

            <div className='grid gap-5 md:grid-cols-3 my-10 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 mx-auto lg:w-[1024px] md:w-[700px] sm:w-[500px] w-full'>
                {data && data.types.length > 0 ? data.types.map(((type,index) => (
                    <Link href={"/results/" + sport + "/" + index} key={type.type} className='rounded-md shadow-lg group'>
                        <div className='h-72 w-full overflow-hidden rounded-t-md'>
                            <img src={type.image} className='w-full h-full group-hover:scale-105 transition-all duration-200 object-cover' alt="game logo" />
                        </div>
                        <div className='p-3'>
                            <h2 className=' font-semibold text-xl text-start'>{type.type}</h2>
                            <p className='text-sm text-primary'>{type.gender}</p>
                        </div>
                    </Link>
                ))) : (
                    <div className="flex items-center justify-center font-xl font-semibold h-48 px-10">
                        No Data to show
                    </div>
                )}
            </div>
        </div>
    )
}

export default page