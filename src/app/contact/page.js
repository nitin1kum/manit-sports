import React from 'react'
import { IoBus, IoCarSharp, IoLocation, IoMailOpen, IoPhonePortrait, IoPin } from 'react-icons/io5'
import { FaPersonChalkboard } from "react-icons/fa6";
import { RiDirectionFill } from 'react-icons/ri';
import { FacultyData } from '@/data/FacultyData';

const page = () => {
  return (
    <div className='my-32 px-6'>
      <h1 className='text-primary text-4xl font-semibold text-center my-10'>Contact Us</h1>
      {/* faculty list */}
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {
          FacultyData.map((faculty) => (
            <div key={faculty.name} className=' mx-auto sm:w-96 lg:w-84 xl:w-96 w-full rounded-sm shadow-md overflow-hidden p-6 group hover:shadow-xl transition-all duration-200'>
              <div className='flex flex-col items-center justify-center py-8'>
                <div className='w-20 h-20 rounded-full border-2 border-border overflow-hidden'>
                  <img className='h-full w-full object-cover rounded-full' src={faculty.image} alt="faculty image" />
                </div>
                <p className='text-2xl font-semibold my-2 text-center text-ellipsis whitespace-nowrap w-full'>{faculty.name}</p>
                <p className='bg-accent text-white rounded-full py-0.5 text-sm font-semibold px-2'>{faculty.position}</p>
              </div>

              <p className='flex gap-2 text-secondary items-center'><FaPersonChalkboard />{faculty.role}</p>
              <a className='flex gap-2 text-secondary items-center' href={"tel:" + faculty.mobile}><IoPhonePortrait /> {faculty.mobile}</a>
              <a className='flex gap-2 text-secondary items-center' href={"mailto:" + faculty.email}><IoMailOpen /> {faculty.email}</a>
            </div>
          ))
        }
      </div>

      <h1 className='text-primary text-4xl font-semibold text-center my-15'>Location</h1>

      <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
        <div className='grid lg:grid-rows-2 lg:grid-cols-1 sm:grid-cols-2 grid-rows-1 gap-10'>
          <div className='rounded-md shadow-lg p-6'>
            <h2 className='text-2xl font-semibold text-primary flex items-center gap-4'><IoLocation /> Address</h2>

            <p className='my-10'>MANIT Bhopal
              Maulana Azad National Institute of Technology,<br /> Bhopal, Madhya Pradesh<br /> 462007</p>

          </div>
          <div className='rounded-md shadow-lg p-6'>
            <h2 className='text-2xl font-semibold text-primary flex items-center gap-4'><RiDirectionFill /> Directions</h2>
            <div className='flex items-start gap-4 my-5'>
              <IoBus className='text-primary mt-2' />
              <div>
                <span className='bg-accent text-white font-medium text-sm px-2 rounded-full'>By Bus</span>
                <p>The campus is well-connected by public transport both from Railway station and Airport.</p>
              </div>
            </div>
            <div className='flex items-start gap-4 my-5'>
              <IoCarSharp className='text-primary mt-2' />
              <div>
                <span className='bg-accent text-white font-medium text-sm px-2 rounded-full'>By Car</span>
                <p>The campus can be reached via the Main Road 3 (refer to the map below).</p>
              </div>
            </div>
          </div>
        </div>
        <div className='rounded-md overflow-hidden shadow-lg'>
          <iframe className='w-full h-full min-h-[500px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.688315326551!2d77.4025977821093!3d23.218026854973974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42e6172cd895%3A0x4db3061b2d53709c!2sMANIT%20Bhopal!5e0!3m2!1sen!2sin!4v1741693416210!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

export default page