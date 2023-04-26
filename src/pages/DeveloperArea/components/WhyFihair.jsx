import React, { useState } from 'react'
import Icon from '../../../components/Icon'
import { addFormContact } from '../../../firebase'

export default function WhyFihair() {

    const whyFihair = process.env.PUBLIC_URL + `/whyFihair.png`
    const [isActive, setisActive] = useState(false)
    const [formData, setFormData] = useState({
        fullName:"",
        phoneNumber:""
    })
    const addFormContact_ = (formData)=>{
        addFormContact(formData)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        addFormContact_(formData);
    }


    const modalActive = () => {
        if (isActive) {
            return (
                <div className='fixed  left-0 text-gray-800  top-0 w-full h-screen backdrop-blur-sm flex items-center justify-center'>
                    <form onSubmit={handleSubmit} id='name' className=' relative flex flex-col items-center justify-center gap-y-8 bg-brand-color bg-opacity-30 p-8 rounded-xl '>
                        <strong className='text-white'>Formu Doldurun Sizi Arayalım</strong>
                        <div className='flex  flex-col items-center  justify-center w-full h-auto   gap-y-4'>
                            <input onChange={(e)=>{setFormData({...formData , fullName:e.target.value})}} value={formData.fullName} className='w-full rounded-md h-[44px] px-2 outline-none focus:placeholder:text-xs focus:placeholder:-translate-y-2' type="text" placeholder='   Adınız Soyadınız' />
                            <div className='flex items-center justify-center gap-x-2 '>
                                <input onChange={(e)=>{setFormData({...formData , phoneNumber:e.target.value})}} value={formData.phoneNumber} type="text" className='h-[44px] rounded-md px-2 outline-none focus:placeholder:text-xs focus:placeholder:-translate-y-2' placeholder='   Telefon numaranız' />
                            </div>
                        </div>
                        
                        <div className=' active:scale-95 hover:scale-105 transition-all'><button type='submit' className='h-10 font-medium tracking-widest text-gray-900 w-auto bg-brand-color rounded-md px-8'>Gönder</button></div>

                        <button onClick={()=>{setisActive(false)}} className=' absolute cursor-pointer text-xl top-1 font-bold text-gray-800 hover:text-gray-100 active:scale-90 right-3'>X</button>

                    </form>
                </div>
            );
        }
    }

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

            <div className='absolute top-16 right-14'>
                <button onClick={() => { setisActive(true) }} className='bg-brand-color text-xl hover:text-black active:scale-95 transition-transform
                 text-white h-8 w-auto px-12 py-8 flex rounded-xl items-center justify-center'>Sorularınız Mı Var ?</button>
            </div>

            {modalActive()}

        </div>
    )
}
