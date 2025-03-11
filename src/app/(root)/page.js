import React from 'react'
import Hero from './_components/Hero'
import Event from './_components/Event'
import NoticeSection from './_components/NoticeSection'
import Sponsers from './_components/Sponsers'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Event/>
      <NoticeSection/>
      <Sponsers/>
    </div>
  )
}

export default Home