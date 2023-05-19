import React from 'react'
import { ImWhatsapp } from 'react-icons/im'

export default function Communication() {
  return (
    <div className='w-full flex gap-y-4 flex-col md:flex-row items-center justify-between px-16 py-6 md:py-12 bg-gradient-to-r from-brand-color to-gray-100 h-auto '>
      <div className='flex flex-col md:flex-row items-center justify-center gap-y-4 md:gap-x-6'>
        <div className='font-bold tracking-widest text-base pt-8 md:pt-0 text-center md:text-xl text-gray-100'>Saç Ekimi İle Saçlarınıza Yeniden Kavuşun !</div>
        <a href="https://wa.me/905387088040" target="_blank" className='flex items-center gap-x-2  cursor-pointer text-brand-color hover:text-black transition-colors'>
          <ImWhatsapp size={34} ></ImWhatsapp>
          <strong>+90 538 708 80 40</strong>
        </a>
      </div>
      <a href="https://wa.me/905387088040" target="_blank" className='flex items-center justify-center'>
        <button className='h-12 w-auto px-8  text-white hover:text-gray-800 transition-colors bg-brand-color rounded-md font-semibold '>Bize Ulaşın</button>
      </a>
    </div>
  )
}
