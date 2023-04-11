import React from 'react'
import Icon from '../../../components/Icon'

export default function FemaleType() {
    const femaletype = process.env.PUBLIC_URL + `/femaletype.png`
    return (
        <div className='relative w-auto h-screen bg-cover bg-no-repeat' style={{ backgroundImage: `url(${femaletype}` }} >
            <div className='absolute left-5 top-32 text-3xl font-serif font-semibold text-gray-800 max-w-[30%] w-full'>Kadınlarda Erkek Tipi Saç Dökülmesi Olabilir</div>
            <div className='absolute flex flex-col  right-20 top-32 gap-y-12 '>
                <div className='flex items-center justify-center gap-x-3'>
                    <Icon name={'fihair-logo-new'} title={'logo'} width={90}></Icon>
                    <div>
                        <strong className='text-2xl font-medium font-serif tracking-widest'>Fi</strong>
                        <strong className='text-2xl font-medium text-brand-color font-serif tracking-widest'>Hair</strong>

                    </div>
                </div>
                <button className='h-12 w-auto px-8 text-white font-semibold tracking-wider hover:text-gray-800 cursor-pointer bg-brand-color rounded-lg'>Bize Ulaşın</button>
            </div>

        </div>
    )
}
