import React from 'react'
import Icon from '../../../components/Icon'

export default function Navbar() {
  const logo = process.env.PUBLIC_URL + `fihair-logo-new.PNG`

  return (
    <div className='container py-10 px-20 min-w-[300px]'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-center gap-x-3'>
            <Icon name={'fihair-logo-new'} title={'logo'} width={90}></Icon>
            <div>
            <strong className='text-2xl font-medium font-serif tracking-widest'>Fi</strong>
            <strong className='text-2xl font-medium text-brand-color font-serif tracking-widest'>Hair</strong>

            </div>
          </div>
        </div>
    </div>
  )
}
