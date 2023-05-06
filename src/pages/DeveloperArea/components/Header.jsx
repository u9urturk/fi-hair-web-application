import React from 'react'
import { ImWhatsapp } from 'react-icons/im'
import Button from '../../../components/Button'
import Icon from '../../../components/Icon'

export default function Header() {

  return (
    <div className='w-full h-auto flex items-center justify-center py-6'>
      <div className='flex items-center gap-x-96'>
        <div className='flex items-center justify-center gap-x-3'>
          <Icon name={'fihair-logo-new'} title={'logo'} width={90}></Icon>
          <div className='space-x-1'>
            <strong className='text-2xl font-medium font-serif tracking-widest'>Fi</strong>
            <strong className='text-2xl font-medium text-brand-color font-serif tracking-widest'>Hair</strong>

          </div>
        </div>
        <div className='hidden md:flex items-center justify-center gap-x-4'>
          <div className='flex items-center gap-x-2  cursor-pointer text-brand-color hover:text-black transition-colors'>
            <ImWhatsapp size={34} ></ImWhatsapp>
            <strong>0 504 404 44 44</strong>
          </div>
          <Button>ONLINE RANDEVU</Button>
        </div>
      </div>  
    </div>
  )
}
