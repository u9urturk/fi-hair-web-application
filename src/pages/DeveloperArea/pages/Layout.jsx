import React, { useState } from 'react'
import { AiOutlineFacebook } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'
import{RiLogoutCircleRLine} from 'react-icons/ri'
import{MdForwardToInbox}from 'react-icons/md'
import store from '../../../store'
import { logout } from '../../../store/auth'
import Analysis from '../components/Analysis'
import Communication from '../components/Communication'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import SliderCmp from '../components/SliderCmp'
import Welcome from '../components/Welcome'
import FemaleType from '../components/FemaleType'
import BeforeAfter from '../components/BeforeAfter'
import WhyFihair from '../components/WhyFihair'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FooterDeveloper from '../components/FooterDeveloper'
import Inbox from '../components/inbox.jsx'
import { useSelector } from 'react-redux'




export default function Layout() {
  const logoutLy = () => store.dispatch(logout())
  const user = useSelector(state => state.auth.user)
  const [isOpen, setIsOpen] = useState(false)
  const whatsapp = process.env.PUBLIC_URL + `/whatsapp.png`
  return (
    <div className='relative '>
      <Header></Header>
      <Navbar></Navbar>
      <SliderCmp></SliderCmp>
      <Communication></Communication>
      <Analysis></Analysis>
      <Welcome></Welcome>
      <FemaleType></FemaleType>
      <BeforeAfter></BeforeAfter>
      <WhyFihair></WhyFihair>
      <Contact></Contact>
      <Footer></Footer>
      <FooterDeveloper></FooterDeveloper>
      <div className='fixed -left-8 bottom-2 h-auto w-auto'>
        <img className='w-40 h-auto transition-all active:scale-95 cursor-pointer hover:scale-105' src={whatsapp} alt="" />
      </div>
      <div className='fixed  flex justify-center items-end  md:justify-end md:pr-2 md:items-center md:h-screen md:w-[30px] w-screen h-[50px] md:right-0 md:top-0 bottom-0'>
        <div className='transition-all  flex md:flex-col md:justify-center md:items-center gap-x-3 text-2xl md:text-2xl pb-3 md:gap-y-3 '>
          <a href="https://www.instagram.com/fihairclinic/" target={'_blank'}><BsInstagram className='text-gray-800  hover:scale-105'></BsInstagram></a>
          <a href=""><FiTwitter className='hover:scale-105 text-gray-800 '></FiTwitter></a>
          <a href=""><AiOutlineFacebook className='hover:scale-105 text-gray-800 '></AiOutlineFacebook></a>
          {user&&<button onClick={()=>{setIsOpen(true)}}><MdForwardToInbox></MdForwardToInbox></button>}
          {/* <button onClick={logoutLy}><RiLogoutCircleRLine></RiLogoutCircleRLine></button> */}
        </div>
      </div>
      <Inbox isOpen={isOpen} onClose={()=>{setIsOpen(false)}}></Inbox>
    </div>
  )
}
