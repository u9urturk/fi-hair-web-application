import React from 'react'
import { GrLocation, GrPhone } from 'react-icons/gr'
import { MdAlternateEmail } from 'react-icons/md'


export default function Contact() {
  return (
    <div className='bg-gray-100 w-full h-auto md:h-[400px] flex flex-col md:flex-row 2xl:gap-x-24 items-center justify-center '>
      <div className='flex flex-col md:items-start items-center pt-8 md:pt-0 pb-8  md:pb-0 justify-center gap-y-8'>
        <div className='flex items-center text-sm text-brand-color font-semibold justify-center gap-x-2 '><div className='w-10 h-[2px] bg-brand-color'></div><h1>BİZE ULAŞIN</h1></div>
        <div><strong className='tracking-wider text-2xl font-serif text-gray-600'>İletişim Bilgilerimiz</strong></div>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-24 md:justify-items-start'>
          <div className='flex flex-col items-center justify-center gap-y-2'><div className='flex items-center justify-center gap-x-2'><GrLocation></GrLocation><strong className='text-gray-600'>Adres</strong></div><p className='text-gray-500 text-center w-[250px] px-2'>Meşrutiyet, Şükrü Usman Sk. No:1/4, 67030 Zonguldak Merkez/Zonguldak</p></div>
          <div className='flex flex-col items-center justify-center gap-y-2'><div className='flex items-center justify-center gap-x-2'><GrPhone></GrPhone><strong className='text-gray-600'>Telefon</strong></div><p className='text-gray-500'>+90 538 708 80 40</p></div>
          <div className='flex flex-col items-center justify-center gap-y-2'><div className='flex items-center justify-center gap-x-2'><div className='flex items-center justify-center gap-x-2'><MdAlternateEmail></MdAlternateEmail><strong className='text-gray-600'>E-posta</strong></div><a className='text-gray-500'>fihairlife@gmail.com</a></div></div>
        </div>
      </div>
      <div >
        <iframe className='rounded-2xl  w-auto mb-4 md:w-[500px] md:h-[300px] md:mb-0 h-auto  shadow-2xl shadow-brand-color md:shadow-transparent md:hover:shadow-brand-color transition-shadow' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.301336852184!2d31.789471199999998!3d41.454379200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409c7da0a09ddb77%3A0x22f7d81c552762af!2sFi%20Hair%20Clinic!5e0!3m2!1str!2str!4v1683572299248!5m2!1str!2str" width="500" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}
