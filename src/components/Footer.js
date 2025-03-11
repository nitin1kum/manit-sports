"use client"

import React, { useState } from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoLogoYoutube } from "react-icons/io5";
import Link from 'next/link';
import Logo from './Logo';

const Footer = () => {
  return (
    <div className='h-fit w-screen bg-footer px-6'>
      <div className="social-handles p-2 mt-10 flex justify-center sm:justify-between border-gray-600">
        <div className='hidden sm:block'>
          <Logo/>
        </div>
        <div className='flex flex-col sm:flex-row items-center gap-4'>
          <div className="social-logo flex gap-4">
            <IoLogoFacebook className='h-7 w-7 fill-sky-900' />
            <IoLogoYoutube className='h-7 w-7 fill-red-500' />
            <IoLogoInstagram className='h-7 w-7 text-pink-600 insta-logo' />
            <IoLogoLinkedin className='h-7 w-7 fill-sky-700' />
          </div>
        </div>
      </div>
      <div className="footer-end flex border-t border-border p-3 justify-between">
        <p className='sm:text-xs font-medium text-[10px]'>©2025 . MANIT Sports</p>
        <div>
          <Link className='text-xs' href={"/contact"}>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer