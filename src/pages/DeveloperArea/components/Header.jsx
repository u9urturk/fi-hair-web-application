import React from 'react'
import { ImWhatsapp } from 'react-icons/im'
import Button from '../../../components/Button'
import Icon from '../../../components/Icon'

export default function Header() {

  return (
    <div className='w-full relative h-auto flex items-center justify-center py-6'>
      <div className='flex items-center gap-x-96'>
        <div className='flex items-center justify-center gap-x-3'>
          <Icon name={'fihair-logo-new'} title={'logo'} width={90}></Icon>
          <div className='space-x-1'>
            <strong className='text-2xl font-medium font-serif tracking-widest'>Fi</strong>
            <strong className='text-2xl font-medium text-brand-color font-serif tracking-widest'>Hair</strong>

          </div>
        </div>
        <div className='hidden md:flex items-center justify-center gap-x-4'>
          <a href="https://wa.me/905387088040" target="_blank" className='flex items-center gap-x-2  cursor-pointer text-brand-color hover:text-[#35c42b] transition-colors'>
            <ImWhatsapp size={34} ></ImWhatsapp>
            <strong>+90 538 708 80 40</strong>
          </a>
          <a href="https://wa.me/905387088040" target="_blank"><Button>ONLINE RANDEVU</Button></a>
        </div>
      </div>  
      <div className='absolute left-1 top-1 font-thin'><strong>Beta Version : 0.1.0v</strong></div>
    </div>
  )
}
