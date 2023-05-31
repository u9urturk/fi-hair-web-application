import React from 'react'
import { addFormContact } from '../../../firebase'
import { useState } from 'react'
import Icon from '../../../components/Icon'
import { useRef } from 'react'
import { toast } from 'react-toastify'
import ReCAPTCHA from 'react-google-recaptcha'

export default function ContactPage() {

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: ""
  })
  const [isVerified, setIsVerified] = useState(false);
  const captchaRef = useRef(null)

  const handleRecaptchaChange = (response) => {
    if (response) {
        setIsVerified(true);
    } else {
        setIsVerified(false);
    }
};

const addFormContact_ = (formData) => {
    addFormContact(formData)
}

const handleSubmit = (e) => {
    e.preventDefault()
    captchaRef.current.reset();
    if (isVerified) {
        addFormContact_(formData);
        toast.success("En Kısa Sürede Dönüş Yapacağız , Sağlıcakla Kalın...")
    } else {
        // reCAPTCHA doğrulaması başarısız
        toast.warning("Gerçek bir kişimi yoksa robot mu olduğunuzu anlayamadık. Lütfen tekrar deneyiniz... ")
    }

}
  return (
    <div className='w-full h-auto'>
      <div className='relative flex items-center justify-center py-20 bg-gradient-to-tr from-brand-color to-gray-100'>
        <form onSubmit={handleSubmit} id='name' className=' relative md:z-0 z-[1] flex flex-col items-center justify-center gap-y-8 shadow-xl shadow-brand-color drop-shadow-2xl bg-brand-color bg-opacity-30 p-8 rounded-xl '>
          <strong className='text-white'>Formu Doldurun Sizi Arayalım</strong>
          <div className='flex  flex-col items-center  justify-center w-full h-auto   gap-y-4'>
            <input onChange={(e) => { setFormData({ ...formData, fullName: e.target.value }) }} value={formData.fullName} className='w-full rounded-md h-[44px] px-2 outline-none focus:placeholder:text-xs focus:placeholder:-translate-y-2' type="text" placeholder='   Adınız Soyadınız' />
            <div className='flex items-center justify-center gap-x-2 '>
              <input onChange={(e) => { setFormData({ ...formData, phoneNumber: e.target.value }) }} value={formData.phoneNumber} type="text" className='w-full h-[44px]  rounded-md px-6 outline-none focus:placeholder:text-xs focus:placeholder:-translate-y-2' placeholder='Telefon numaranız' />
            </div>
            <ReCAPTCHA
                                sitekey="6LdzflYmAAAAANsANpl_tkcndr5ZoPX3uG2sgM49"
                                onChange={handleRecaptchaChange}
                                ref={captchaRef}
                            />
          </div>  

          <div className=' active:scale-95 hover:scale-105 transition-all'><button type='submit' className='h-10 font-medium tracking-widest text-gray-100 w-auto bg-brand-color rounded-md px-8'>Gönder</button></div>
        </form>
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
