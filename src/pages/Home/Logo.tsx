import React from 'react'
import logo from '../../images/Logo.png'
import frame from '../../images/Frame.png'
export default function Logo() {
  return (
    <div className='bg-[#C8DDFC] flex'>
      <img src={logo} alt="" />
      <img src={frame} alt="" />
      <span>Bookoe</span>
    </div>
  )
}
