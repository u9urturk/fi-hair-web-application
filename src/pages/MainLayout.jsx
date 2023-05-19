import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './DeveloperArea/components/Header'
import Navbar from './DeveloperArea/components/Navbar'
import Footer from './DeveloperArea/components/Footer'
import FooterDeveloper from './DeveloperArea/components/FooterDeveloper'
import Contact from './DeveloperArea/components/Contact'
import Directions from '../components/Directions'

export default function MainLayout() {
  return (
    <div className='overflow-hidden relative' >
      <Directions></Directions>
      <Header></Header>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Contact></Contact>
      <Footer></Footer>
      <FooterDeveloper></FooterDeveloper>
    </div>
  )
}
