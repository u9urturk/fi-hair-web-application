import React, { useState } from 'react'
import Icon from '../../../components/Icon'

import ContactComponent from './ContactComponent'


export default function WhyFihair() {

    const whyFihair = process.env.PUBLIC_URL + `/whyFihair.png`  
    const [isActive, setisActive] = useState(false)
   



    const modalActive = () => {
        if (isActive) {
            return (
                <div className='fixed  left-0 text-gray-800  top-0 w-full h-screen backdrop-blur-sm flex items-center justify-center'>
                   <ContactComponent isModal={true} onClose={()=> {setisActive(false)}}></ContactComponent>
                </div>
            );
        }
    }

    return (
        <div className='relative flex  items-end md:items-start justify-end w-auto h-96 xl:h-screen bg-cover bg-no-repeat' style={{ backgroundImage: `url(${whyFihair}` }}>

            <div className='absolute flex flex-col  left-[2%] top-[5%] gap-y-12 '>
                <div className='flex items-center justify-center gap-x-3'>
                    <Icon name={'fihair-logo-new'} title={'logo'} width={90}></Icon>
                    <div>
                        <strong className='text-2xl font-medium font-serif tracking-widest'>Fi</strong>
                        <strong className='text-2xl font-medium text-brand-color font-serif tracking-widest'>Hair</strong>

                    </div>
                </div>
            </div>

            <div className='md:pt-32 md:pr-16'>
                <button onClick={() => { setisActive(true) }} className='bg-brand-color text-xl hover:text-black active:scale-95 transition-transform
                 text-white h-8 w-auto px-12 py-8 flex md:rounded-xl items-center justify-center'>Sorularınız Mı Var ? , Formu Doldurun Sizi Arayalım.</button>
            </div>

            {modalActive()}

        </div>
    )
}
