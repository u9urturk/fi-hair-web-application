import React from 'react'
import Icon from '../../../components/Icon'
import Dropdown from '../../../components/Dropdown'
import { IoMdClose } from "react-icons/io"


export default function MobileFooter({ isOpen, close }) {

    if (isOpen) {
        return (
            <div className='fixed  z-10 bg-gradient-to-tr from-brand-color to-gray-100 w-full h-full top-0 left-0'>
                <div className='flex relative flex-col items-center pt-32 justify-start gap-y-20 w-full h-full'>
                    <div onClick={close} className='absolute top-5 right-5 text-black text-3xl cursor-pointer'><IoMdClose size={30}></IoMdClose></div>
                    <div className='flex items-center justify-center gap-x-3'>
                        <Icon name={'fihair-logo-new'} title={'logo'} width={90}></Icon>
                        <div className='space-x-1'>
                            <strong className='text-2xl font-medium font-serif tracking-widest'>Fi</strong>
                            <strong className='text-2xl font-medium text-brand-color font-serif tracking-widest'>Hair</strong>

                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-y-4   text-xl'>
                        <div onClick={close} className='flex flex-col items-center gap-y-4'>
                            <Dropdown name={"Anasayfa"} link={"/"}></Dropdown>
                            <Dropdown name={"Fi Hair"} link={"/hakkimizda"} ></Dropdown>
                            <Dropdown name={"Saç Ekimi"} link={"/sac-ekimi"} ></Dropdown>
                        </div>
                        <div className='flex flex-col items-center gap-y-4'>
                            <Dropdown name={"Hizmetlerimiz"}
                                close={close}

                                options={[
                                    { name: "Saç Transplantasyonu", link: "/hizmetler/sac-ekimi" },
                                    { name: "Saç Analizi", link: "/hizmetler/sac-analizi" },
                                    { name: "Mezoterapi Uygulaması", link: "/hizmetler/mezoterapi" },
                                    { name: "PRP Uygulaması", link: "/hizmetler/prp" }
                                ]} ></Dropdown>
                            <Dropdown name={"Teknikler"}
                                close={close}
                                options={[
                                    { name: "DHI Tekniği", link: "/teknikler/dhi" },
                                    { name: "Safir FUE Tekniği", link: "/teknikler/safir-fue" }
                                ]} ></Dropdown>

                        </div>
                        <div onClick={close} className='flex flex-col items-center gap-y-4'>
                            <Dropdown name={"İletişim"} link={"/contact"} ></Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
