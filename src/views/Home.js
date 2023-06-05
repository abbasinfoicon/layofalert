import React from 'react'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Slider from '../components/Slider'
import Agents from '../components/Agents'

const Home = () => {
  return (
    <div className="site-content bg-white overflow-hidden">
        <Slider />
        <Features />
        <Testimonials />
        <Agents />
      </div>
  )
}

export default Home