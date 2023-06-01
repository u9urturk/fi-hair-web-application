import React from 'react'
import Analysis from '../components/Analysis'
import Communication from '../components/Communication'
import SliderCmp from '../components/SliderCmp'
import Welcome from '../components/Welcome'
import FemaleType from '../components/FemaleType'
import BeforeAfter from '../components/BeforeAfter'
import WhyFihair from '../components/WhyFihair'


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
