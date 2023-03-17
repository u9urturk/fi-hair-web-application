import React from 'react'
import{BiAnalyse} from 'react-icons/bi'

export default function Home() {
  const bgImage = require("../tools/home-bg.PNG")
  return (
    <div style={{backgroundImage:`url(${bgImage})`}} className='max-w-[1400px] p-4 mx-auto w-full h-screen bg-center bg-cover '>
        <button type='button' className='flex gap-x-2 items-center justify-center   rounded-lg w-48 h-10 bg-[#507BB7]'disabled={true}>
          <BiAnalyse className='text-gray-300 animate-spin' size={20}></BiAnalyse>
          <p className='  text-gray-300 font-light'   >Yapım aşamasında ...</p>
        </button>
    </div>
  )
}
