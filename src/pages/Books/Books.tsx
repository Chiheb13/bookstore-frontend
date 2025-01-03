import React from 'react'
import Navbar from '../../components/Navbar'
import SquishyCard from './Cartbook'
import Footer from '../../components/Footer'

const Books = () => {
  return (
    <div className='min-h-screen bg-[#F5FFFF]'>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Books Collection
        </h2>
        <SquishyCard />
      </div>
      <Footer />
    </div>
  )
}

export default Books