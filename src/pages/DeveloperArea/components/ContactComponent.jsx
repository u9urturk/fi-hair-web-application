import React, { useRef, useState } from 'react'
import PhoneNumber from './PhoneNumber';
import ReCAPTCHA from 'react-google-recaptcha';
import { addFormContact } from '../../../firebase';
import { toast } from 'react-toastify';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import classNames from 'classnames';

export default function ContactComponent(props) {
    const {onClose,isModal=false} = props;
    const [isVerified, setIsVerified] = useState(false);
    const captchaRef = useRef(null)
    const [phoneNumber, setPhoneNumber] = useState('');
    const [fullName, setFullName] = useState('');

    const handleFullNameChange = (e) => {
        const inputValue = e.target.value;
        setFullName(inputValue);
    }

    const getFullNumber = (fullNumber) => {
        setPhoneNumber(fullNumber)
    }



    const handleRecaptchaChange = (response) => {
        if (response) {
            setIsVerified(true);
        } else {
            setIsVerified(false);
        }
    };

    const addFormContact_ = (fullName, phoneNumber) => {
        addFormContact(fullName, phoneNumber)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        captchaRef.current.reset();
        if (isVerified && phoneNumber.length===16) {
            // console.log( (area.codeNo +"-"+phoneNumber).length)
            addFormContact_(fullName, phoneNumber);
            setFullName('')
            setIsVerified(false)
            onClose()
            toast.success(`Merhaba ${fullName} En Kısa Sürede Dönüş Yapacağız , Sağlıcakla Kalın...`)
        } else if (phoneNumber.length!==16) {
            toast.error("Telefon numarası eksik ya da yanlış girildi. Lütfen tekrar deneyiniz... ")
        } else {
            // reCAPTCHA doğrulaması başarısız
            toast.warning("Gerçek bir kişimi yoksa robot mu olduğunuzu anlayamadık. Lütfen tekrar deneyiniz... ")
        }

    }
    return (
        <form onSubmit={handleSubmit} id='name' className=' relative flex flex-col items-center justify-center gap-y-8 bg-brand-color bg-opacity-30 p-8 rounded-xl '>
            <strong className='text-white'>Formu Doldurun Sizi Arayalım</strong>
            <div className='flex  flex-col items-center  justify-center w-full h-auto   gap-y-4'>
                <input onChange={handleFullNameChange} value={fullName}
                    className='w-full rounded-md h-[44px] px-2 outline-none  border-[2px] border-solid transition-colors focus:border-brand-color 
                            focus:placeholder:text-xs focus:placeholder:-translate-y-2' type="text" placeholder='   Adınız Soyadınız' />
                <PhoneNumber data={phoneNumber} onDataChange={getFullNumber}></PhoneNumber>
                <ReCAPTCHA
                    sitekey="6LdzflYmAAAAANsANpl_tkcndr5ZoPX3uG2sgM49"
                    onChange={handleRecaptchaChange}
                    ref={captchaRef}
                />
            </div>


            <div className=' active:scale-95 hover:scale-105 transition-all'><button type='submit' className='h-10 font-medium tracking-widest text-gray-100 w-auto bg-brand-color rounded-md px-8'>Gönder</button></div>

            <button onClick={onClose} className={classNames({
                ' absolute cursor-pointer text-xl pt-1 top-1 font-bold text-gray-100 md:text-gray-800 hover:text-gray-100 active:scale-90 right-3':true,
                'hidden':isModal==false
            })}>
                <AiOutlineCloseCircle size={24}></AiOutlineCloseCircle>
            </button>

        </form>
    )
}
