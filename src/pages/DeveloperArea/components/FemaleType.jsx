import React from 'react'
import Icon from '../../../components/Icon'

export default function FemaleType() {
    const femaletype = process.env.PUBLIC_URL + `/femaletype.png`
    return (
        <div className='relative w-auto h-96 xl:h-screen bg-cover bg-no-repeat' style={{ backgroundImage: `url(${femaletype}` }} >
            <div className='absolute left-8 top-48 md:top-32 text-sm md:text-3xl font-serif md:font-semibold text-gray-800 max-w-[30%] w-full'>Kadınlarda da Erkek Tipi Saç Dökülmesi Olabilir</div>
            <div className='absolute flex flex-col top-4 -right- md:right-20 md:top-32 gap-y-6 md:gap-y-12 '>
                <div className='flex items-center justify-center gap-x-3 pl-2'>
                    <Icon name={'fihair-logo-new'} title={'logo'} width={90}></Icon>
                    <div>
                        <strong className='text-2xl font-medium font-serif tracking-widest'>Fi</strong>
                        <strong className='text-2xl font-medium text-brand-color font-serif tracking-widest'>Hair</strong>

                    </div>
                </div>
                
                <a href="https://wa.me/905387088040" target="_blank"><button className='h-12 w-auto ml-2 px-8 text-white font-semibold tracking-wider hover:text-gray-800 cursor-pointer bg-brand-color rounded-lg'>Bize Ulaşın</button></a>
            </div>

        </div>
    )
}
