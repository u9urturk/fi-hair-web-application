import React from 'react'
import Icon from '../../../components/Icon'

export default function WhyFihair() {

    const whyFihair = process.env.PUBLIC_URL + `/whyFihair.png`

    return (
        <div className='relative w-auto h-screen bg-cover bg-no-repeat' style={{ backgroundImage: `url(${whyFihair}` }}>

            <div className='absolute flex flex-col  left-[2%] top-[5%] gap-y-12 '>
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
