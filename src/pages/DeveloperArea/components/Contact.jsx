import React from 'react'
import { GrLocation, GrPhone } from 'react-icons/gr'
import { MdAlternateEmail } from 'react-icons/md'


export default function Contact() {
  return (
    <div className='bg-gray-100 w-full h-[400px] flex items-center justify-around'>
      <div className='flex flex-col items-start justify-center gap-y-8'>
        <div className='flex items-center text-sm text-brand-color font-semibold justify-center gap-x-2'><div className='w-10 h-[2px] bg-brand-color'></div><h1>BİZE ULAŞIN</h1></div>
        <div><strong className='tracking-wider text-2xl font-serif text-gray-600'>İletişim Bilgilerimiz</strong></div>
        <div className='grid grid-cols-2 gap-24 justify-items-start'>
          <div className='flex flex-col items-center justify-center gap-y-2'><div className='flex items-center justify-center gap-x-2'><GrLocation></GrLocation><strong className='text-gray-600'>Adres</strong></div><p className='text-gray-500'>Test 1</p></div>
          <div className='flex flex-col items-center justify-center gap-y-2'><div className='flex items-center justify-center gap-x-2'><GrPhone></GrPhone><strong className='text-gray-600'>Telefon</strong></div><p className='text-gray-500'>Test 2</p></div>
          <div className='flex flex-col items-center justify-center gap-y-2'><div className='flex items-center justify-center gap-x-2'><MdAlternateEmail></MdAlternateEmail><strong className='text-gray-600'>E-posta</strong><p className='text-gray-500'>Test 3</p></div></div>
        </div>
      </div>
      <div>
        <iframe className='rounded-2xl shadow-2xl hover:shadow-brand-color transition-shadow' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95682.64397605402!2d31.717758967915866!3d41.45912325330366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409c7c43e91296e7%3A0x24080dea6d843794!2sZonguldak%2C%20Zonguldak%20Merkez%2FZonguldak!5e0!3m2!1str!2str!4v1681635623169!5m2!1str!2str" width="500" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}
