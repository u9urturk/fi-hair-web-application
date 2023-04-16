import React from 'react'
import Icon from '../../../components/Icon'

export default function Footer() {
    return (
        <div className='flex items-center justify-around w-full h-[300px] bg-gradient-to-t from-brand-color to-gray-100 border-t-[1px] border-white'>
            <div>
                <div className='flex items-center justify-center gap-x-3'>
                    <Icon name={'fihair-logo-new'} title={'logo'} width={90}></Icon>
                    <div>
                        <strong className='text-2xl font-medium font-serif tracking-widest'>Fi</strong>
                        <strong className='text-2xl font-medium text-brand-color font-serif tracking-widest'>Hair</strong>

                    </div>
                </div>
            </div>
            <div>
                <strong>Fi Hair</strong>
                <ul>
                    <li className='border-t-[2px] border-r-[2px] border-brand-color flex items-center justify-center rounded-lg '>x</li>
                    <li className='border-t-[2px] border-r-[2px] border-brand-color flex items-center justify-center rounded-lg '>y</li>
                    <li className='border-t-[2px] border-r-[2px] border-brand-color flex items-center justify-center rounded-lg '>z</li>
                </ul>
            </div>
            <div>
                <strong>Hizmetlerimiz</strong>
                <ul>
                    <li className='border-t-[2px] border-r-[2px] border-brand-color flex items-center justify-center rounded-lg '>x</li>
                    <li className='border-t-[2px] border-r-[2px] border-brand-color flex items-center justify-center rounded-lg '>y</li>
                    <li className='border-t-[2px] border-r-[2px] border-brand-color flex items-center justify-center rounded-lg '>z</li>
                </ul>
            </div>
            <div>
                <strong>Politikalar</strong>
                <ul>
                    <li className='border-t-[2px] border-r-[2px] border-brand-color flex items-center justify-center rounded-lg '>x</li>
                    <li className='border-t-[2px] border-r-[2px] border-brand-color flex items-center justify-center rounded-lg '>y</li>
                    <li className='border-t-[2px] border-r-[2px] border-brand-color flex items-center justify-center rounded-lg '>z</li>
                </ul>
            </div>
        </div>
    )
}
