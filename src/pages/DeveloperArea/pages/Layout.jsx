import React from 'react'
import { AiOutlineFacebook } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'
import Button from '../../../components/Button'
import store from '../../../store'
import { logout } from '../../../store/auth'
import Analysis from '../components/Analysis'
import Communication from '../components/Communication'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import SliderCmp from '../components/SliderCmp'




export default function Layout() {
  const logoutLy = () => store.dispatch(logout())
  const whatsapp = process.env.PUBLIC_URL + `/whatsapp.png`
  return (
    <div className='relative'>
      <Header></Header>
      <Navbar></Navbar>
      <SliderCmp></SliderCmp>
      <Communication></Communication>
      <Analysis></Analysis>
      <div className='my-10'><Button onClick={logoutLy}>Logout</Button></div>
      <div className='fixed -left-8 bottom-2 h-auto w-auto'>
        <img className='w-40 h-auto transition-all active:scale-95 cursor-pointer hover:scale-105' src={whatsapp} alt="" />
      </div>
      <div className='fixed -z-10  flex justify-center items-end  md:justify-end md:pr-2 md:items-center h-screen w-full left-0 top-0'>
        <div className='transition-all  flex md:flex-col md:justify-center md:items-center gap-x-3 text-xl md:text-2xl pb-3 md:gap-y-3 '>
          <a href="https://www.instagram.com/fi.hairkaradeniz/?igshid=YmMyMTA2M2Y%3D" target={'_blank'}><BsInstagram className='hover:scale-105'></BsInstagram></a>
          <a href=""><FiTwitter className='hover:scale-105'></FiTwitter></a>
          <a href=""><AiOutlineFacebook className='hover:scale-105'></AiOutlineFacebook></a>
        </div>
      </div>
    </div>
  )
}
