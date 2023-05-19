import React, { useState } from 'react'
import { AiOutlineFacebook } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'
import{MdForwardToInbox}from 'react-icons/md'
import store from '../../../store'
import { logout } from '../../../store/auth'
import Analysis from '../components/Analysis'
import Communication from '../components/Communication'
import SliderCmp from '../components/SliderCmp'
import Welcome from '../components/Welcome'
import FemaleType from '../components/FemaleType'
import BeforeAfter from '../components/BeforeAfter'
import WhyFihair from '../components/WhyFihair'
import Inbox from '../components/inbox.jsx'
import { useSelector } from 'react-redux'




export default function Layout() {
 
  return (
    <div >
      <SliderCmp></SliderCmp>
      <Communication></Communication>
      <Analysis></Analysis>
      <Welcome></Welcome>
      <FemaleType></FemaleType>
      <BeforeAfter></BeforeAfter>
      <WhyFihair></WhyFihair>          
    </div>
  )
}
