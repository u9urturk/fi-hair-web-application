import React, { useState } from 'react'
import { BiAnalyse } from 'react-icons/bi'
import { BsInstagram } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'
import { AiOutlineFacebook } from 'react-icons/ai'

import Models from '../components/Models'

export default function Home() {
  const [isActive, setActive] = useState();
  const handleDeActive = () => {
    setActive(false)
  }
  const bgImage = require("../tools/home-bg.PNG")
  return (
    <div style={{ backgroundImage: `url(${bgImage})` }} className='max-w-[1400px] flex justify-between relative w-full h-screen  bg-blend-multiply p-4 mx-auto bg-center bg-cover'>
      <button type='button' className='flex gap-x-2 items-center justify-center   rounded-lg w-48 h-10 bg-[#507BB7]' disabled={true}>
        <BiAnalyse className='text-gray-300 animate-spin' size={20}></BiAnalyse>
        <p className='  text-gray-300 font-light'   >Yapım aşamasında ...</p>
      </button>
      <button onClick={() => { setActive(true) }} className='flex  items-center justify-center transition-all  hover:scale-105  text-white  rounded-lg w-48 h-10 bg-[#507BB7]'>Developer Area</button>
      <Models isActive={isActive} onClose={handleDeActive}></Models>
      <div className='absolute transition-all cursor-pointer flex flex-row gap-x-4 justify-center bottom-3 right-1/3  md:flex-col text-2xl md:top-1/3 md:right-2 md:gap-y-4'>
        <a href="https://www.instagram.com/fi.hairkaradeniz/?igshid=YmMyMTA2M2Y%3D" target={'_blank'}><BsInstagram className='hover:scale-105'></BsInstagram></a>
        <a href=""><FiTwitter className='hover:scale-105'></FiTwitter></a>
        <a href=""><AiOutlineFacebook className='hover:scale-105'></AiOutlineFacebook></a>
      </div>
    </div>
  )
}
