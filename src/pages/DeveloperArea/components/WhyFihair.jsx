import React, { useRef, useState } from 'react'
import Icon from '../../../components/Icon'
import { addFormContact } from '../../../firebase'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { toast } from 'react-toastify'
import ReCAPTCHA from 'react-google-recaptcha'


export default function WhyFihair() {

    const whyFihair = process.env.PUBLIC_URL + `/whyFihair.png`

    const [isActive, setisActive] = useState(false)
    const [isVerified, setIsVerified] = useState(false);
    const captchaRef = useRef(null)
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: ""
    })

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


    const modalActive = () => {
        if (isActive) {
            return (
                <div className='fixed  left-0 text-gray-800  top-0 w-full h-screen backdrop-blur-sm flex items-center justify-center'>
                    <form onSubmit={handleSubmit} id='name' className=' relative flex flex-col items-center justify-center gap-y-8 bg-brand-color bg-opacity-30 p-8 rounded-xl '>
                        <strong className='text-white'>Formu Doldurun Sizi Arayalım</strong>
                        <div className='flex  flex-col items-center  justify-center w-full h-auto   gap-y-4'>
                            <input onChange={(e) => { setFormData({ ...formData, fullName: e.target.value }) }} value={formData.fullName} className='w-full rounded-md h-[44px] px-2 outline-none focus:placeholder:text-xs focus:placeholder:-translate-y-2' type="text" placeholder='   Adınız Soyadınız' />
                            <div className='flex items-center justify-center gap-x-2 '>
                                <input onChange={(e) => { setFormData({ ...formData, phoneNumber: e.target.value }) }} value={formData.phoneNumber} type="text" className='h-[44px] rounded-md px-2 outline-none focus:placeholder:text-xs focus:placeholder:-translate-y-2' placeholder='   Telefon numaranız' />
                            </div>
                            <ReCAPTCHA
                                sitekey="6LdzflYmAAAAANsANpl_tkcndr5ZoPX3uG2sgM49"
                                onChange={handleRecaptchaChange}
                                ref={captchaRef}
                            />
                        </div>


                        <div className=' active:scale-95 hover:scale-105 transition-all'><button type='submit' className='h-10 font-medium tracking-widest text-gray-100 w-auto bg-brand-color rounded-md px-8'>Gönder</button></div>

                        <button onClick={() => { setisActive(false) }} className=' absolute cursor-pointer text-xl pt-1 top-1 font-bold text-gray-100 md:text-gray-800 hover:text-gray-100 active:scale-90 right-3'>
                            <AiOutlineCloseCircle size={24}></AiOutlineCloseCircle>
                        </button>

                    </form>
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
