import React from 'react'
import Icon from '../../../components/Icon'
import ContactComponent from '../components/ContactComponent'
export default function ContactPage() {


  return (
    <div className='w-full h-auto'>
      <div className='relative flex items-center justify-center py-20 bg-gradient-to-tr from-brand-color to-gray-100'>
        <ContactComponent ></ContactComponent>

        <div className='absolute md:bottom-5 md:right-5 flex items-center justify-center gap-x-3'>
          <Icon name={'fihair-logo-new'} title={'logo'} width={150}></Icon>
          <div className='space-x-1'>
            <strong className='text-2xl font-medium font-serif tracking-widest'>Fi</strong>
            <strong className='text-2xl font-medium text-brand-color font-serif tracking-widest'>Hair</strong>

          </div>
        </div>
      </div>
    </div>
  )
}
