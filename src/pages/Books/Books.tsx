import React from 'react'
import Navbar from '../../components/Navbar'
import Cartbook from './Cartbook'
import Footer from '../../components/Footer'
import SquishyCard from './Cartbook'
const Books = () => {
  return (
    <div className='bg-[#F5FFFF]'>
            <div className="flex bg-[#F5FFFF]  items-center">
                <div className="p-4 bg-[#F5FFFF] text-white"><Navbar/></div>  
            </div>
            <h2 className="text-[40px] mt-[150px]  font-bold">
                    sheck our BOOKS <span className="text-[32px]"></span>
                </h2>
            
            <main className="back min-h-[100vh] text-white">
                <section className="relative "> {/* Add relative positioning */}
                    <SquishyCard />
                </section>
            </main>
            <div>
                <Footer/>
            </div>
        </div>
  )
}

export default Books