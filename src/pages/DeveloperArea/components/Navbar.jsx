import React, { useState } from 'react'
import {FiMenu} from "react-icons/fi"
import Dropdown from '../../../components/Dropdown'
import MobileFooter from './MobileNavi'
export default function Navbar() {
    const [isOpen, setisOpen] = useState(false);
    return (
        <div className=' w-full h-16 bg-brand-color flex items-center justify-center  '>
            <div className='hidden md:flex  container mx-auto px-28 py-1  items-center justify-center gap-x-16 text-white font-semibold '>
                <Dropdown name={"Anasayfa"} link={"/"}></Dropdown>
                <Dropdown name={"Fi Hair"} link={"/hakkimizda"} ></Dropdown>
                <Dropdown name={"Saç Ekimi"} link={"/sac-ekimi"} ></Dropdown>
                <Dropdown name={"Teknikler"} 
                options={[
                    {name:"DHI Tekniği",link:"/teknikler/dhi"},
                    {name:"Safir FUE Tekniği",link:"/teknikler/safir-fue"}
                ]} ></Dropdown>
                <Dropdown name={"Hizmetlerimiz"} 
                options={[
                    {name:"Saç Transplantasyonu",link:"/hizmetler/sac-ekimi"},
                    {name:"Saç Analizi",link:"/hizmetler/sac-analizi"},
                    {name:"Mezoterapi Uygulaması",link:"/hizmetler/mezoterapi"},
                    {name:"PRP Uygulaması",link:"/hizmetler/prp"},
                    {name:"Saç Simülasyonu",link:"hizmetler/sac-simulasyonu"}
                ]} ></Dropdown>
                <Dropdown name={"İletişim"} link={"/contact"} ></Dropdown>
            </div>
            <div className='md:hidden p-3 rounded-tl-3xl rounded-br-3xl rounded-md  bg-gradient-to-t from-transparent  to-blue-200 '>
                <FiMenu size={30} onClick={()=>{setisOpen(true)}} className='cursor-pointer text-gray-100'></FiMenu>
                <MobileFooter isOpen={isOpen} close={()=>{setisOpen(false)}}></MobileFooter>
            </div>
        </div>
    )
}
