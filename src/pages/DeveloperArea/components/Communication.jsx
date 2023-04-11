import React from 'react'
import { ImWhatsapp } from 'react-icons/im'

export default function Communication() {
  return (
    <div className='w-full flex items-center justify-between px-16 bg-gray-300 h-28'>
      <div className='flex items-center justify-center gap-x-6'>
        <div className='font-bold tracking-widest text-xl text-gray-800'>Saç Ekimi İle Saçlarınıza Yeniden Kavuşun !</div>
        <div className='flex items-center gap-x-2  cursor-pointer text-brand-color hover:text-black transition-colors'>
          <ImWhatsapp size={34} ></ImWhatsapp>
          <strong>0 504 404 44 44</strong>
        </div>
      </div>
      <div>
        <button className='h-12 w-auto px-8 text-white hover:text-gray-800 transition-colors bg-brand-color rounded-md font-semibold '>Bize Ulaşın</button>
      </div>
    </div>
  )
}
