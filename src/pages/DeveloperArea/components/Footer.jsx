import React from 'react'
import Icon from '../../../components/Icon'

export default function Footer() {
    return (
        <div className='flex flex-col md:flex-row gap-y-8 pt-8 pb-8 md:pt-4 items-center font-serif font-medium text-gray-800 justify-center md:justify-around w-full h-auto md:h-[300px] bg-gradient-to-t from-brand-color to-gray-100 border-t-[1px] border-white'>
            <div>
                <div className='flex items-center justify-center gap-x-3'>
                    <Icon name={'fihair-logo-new'} title={'logo'} width={90}></Icon>
                    <div>
                        <strong className='text-2xl font-medium font-serif tracking-widest'>Fi</strong>
                        <strong className='text-2xl font-medium text-brand-color font-serif tracking-widest'>Hair</strong>

                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-y-8 md:flex-row items-center md:items-start justify-center md:justify-around md:w-[calc(100%-30%)]'>
                <div className='flex flex-col gap-y-2 items-center  justify-center'>
                    <strong>Fi Hair</strong>
                    <ul className='flex flex-col gap-y-3'>
                        <li className='border-t-[2px] border-r-[2px] p-2 transition-transform  cursor-pointer hover:scale-105 border-brand-color flex items-center justify-center rounded-lg '>Hakkımızda</li>
                        <li className='border-t-[2px] border-r-[2px] p-2 transition-transform hover:scale-105  cursor-pointer border-brand-color flex items-center justify-center rounded-lg '>İletişim</li>
                        
                    </ul>
                </div>
                <div className='flex flex-col gap-y-2 items-center justify-center'>
                    <strong>Hizmetlerimiz</strong>
                    <ul className='flex flex-col gap-y-3'>
                        <li className='border-t-[2px] border-r-[2px] transition-transform  hover:scale-105  p-2 cursor-pointer border-brand-color flex items-center justify-center rounded-lg '>Saç Ekimi</li>
                        <li className='border-t-[2px] border-r-[2px]  transition-transform  hover:scale-105 p-2 cursor-pointer border-brand-color flex items-center justify-center rounded-lg '>Saç Analizi</li>
                        <li className='border-t-[2px] border-r-[2px]  transition-transform  hover:scale-105 p-2 cursor-pointer border-brand-color flex items-center justify-center rounded-lg '>Mezoterapi</li>
                        <li className='border-t-[2px] border-r-[2px] transition-transform  hover:scale-105  p-2 cursor-pointer border-brand-color flex items-center justify-center rounded-lg '>PRP(Plateletten Zengin Plazma)</li>

                    </ul>
                </div>
                <div className='flex flex-col gap-y-2 items-center justify-center' >
                    <strong>Politikalar</strong>
                    <ul className='flex flex-col gap-y-3'>
                        <li className='border-t-[2px] border-r-[2px] transition-transform hover:scale-105  p-2 cursor-pointer border-brand-color flex items-center justify-center rounded-lg '>Gizlilik Politikası</li>

                    </ul>
                </div>
            </div>

        </div>
    )
}
