import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import store from '../store'
import { logout } from '../store/auth'
import { FiTwitter } from 'react-icons/fi'
import { AiOutlineFacebook } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { MdForwardToInbox } from 'react-icons/md'
import Inbox from '../pages/DeveloperArea/components/inbox'

export default function Directions() {

    const logoutLy = () => store.dispatch(logout())
    const user = useSelector(state => state.auth.user)
    const [isOpen, setIsOpen] = useState(false)
    const whatsapp = process.env.PUBLIC_URL + `/whatsapp.png`
    return (
        <>
            <div className='fixed z-10 flex item-center justify-center group  -left-8 bottom-2 h-auto w-auto '>
                <a href="https://wa.me/905387088040" target="_blank"> <img className='w-40 h-auto transition-all active:scale-95 cursor-pointer hover:scale-105' src={whatsapp} alt="" /></a>
                <p className='hidden border border-spacing-3 h-12 py-2 px-4 text-center  rounded-full bg-[#35c52c] bg-opacity-70 -translate-x-10 translate-y-5 text-gray-100 md:group-hover:block'>Size nasıl yardımcı olabiliriz ?</p>
            </div>
            <div className='fixed  z-10 flex justify-center items-end  md:justify-end md:pr-2 md:items-center md:h-screen md:w-[30px] w-screen h-[50px] md:right-0 md:top-0 bottom-0'>
                <div className='transition-all  flex md:flex-col md:justify-center md:items-center gap-x-3 text-2xl md:text-2xl pb-3 md:gap-y-3 '>
                    <a href="https://www.instagram.com/fihairclinic/" target={'_blank'}><BsInstagram className='text-gray-800  hover:scale-105'></BsInstagram></a>
                    <a href=""><FiTwitter className='hover:scale-105 text-gray-800 '></FiTwitter></a>
                    <a href=""><AiOutlineFacebook className='hover:scale-105 text-gray-800 '></AiOutlineFacebook></a>
                    {user && <button onClick={() => { setIsOpen(true) }}><MdForwardToInbox></MdForwardToInbox></button>}
                    {/* <button onClick={logoutLy}><RiLogoutCircleRLine></RiLogoutCircleRLine></button> */}
                </div>
            </div>
            <Inbox isOpen={isOpen} onClose={() => { setIsOpen(false) }}></Inbox>
        </>
    )
}
