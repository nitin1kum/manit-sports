import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <Image src={"/images/logo.svg"} width={200} height={60} alt='khg'/>
  )
}

export default Logo