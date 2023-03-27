import React from 'react'
import Button from '../../../components/Button'
import store from '../../../store'
import {logout} from '../../../store/auth'
import Navbar from '../components/Navbar'




export default function Layout() {
  const logoutLy = ()=>store.dispatch(logout())
  return (
    <div>
      <div><Navbar></Navbar></div>
      <div><Button onClick={logoutLy}>Logout</Button></div>
    </div>
  )
}
