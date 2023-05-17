import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './DeveloperArea/components/Header'
import Navbar from './DeveloperArea/components/Navbar'
import Footer from './DeveloperArea/components/Footer'
import FooterDeveloper from './DeveloperArea/components/FooterDeveloper'
import Contact from './DeveloperArea/components/Contact'
import MobileFooter from './DeveloperArea/components/MobileFooter'

export default function MainLayout() {
  return (
    <div className='overflow-hidden'>
      <Header></Header>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Contact></Contact>
      <Footer></Footer>
      <FooterDeveloper></FooterDeveloper>
    </div>
  )
}
