
import { ParticipatingColleges } from '@/data/ParticipatingColleges'
import React from 'react'

const Sponsers = () => {
    return (
        <div className='p-6 my-10'>
            <div className='text-primary text-4xl font-semibold text-center py-2'>Participating Colleges</div>
            <div className='grid xl:grid-cols-10 lg:grid-cols-7 sm:grid-cols-4 md:grid-cols-5 grid-cols-3 gap-3 sm:gap-8 mt-15'>
                {   
                    ParticipatingColleges.map((college) => (
                        <div className='relative w-full min-h-32 h-32 sm:w-32 group'>
                            <img src={college.image} alt=' college logo' className='w-full rounded-md h-full brightness-75 sm:brightness-100 group-hover:brightness-75 object-cover' />
                            <div className="absolute inset-0 text-lg flex sm:hidden text-white font-semibold group-hover:flex justify-center items-center h-full">{college.name}</div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Sponsers