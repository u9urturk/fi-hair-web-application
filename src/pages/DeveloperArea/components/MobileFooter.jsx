import React from 'react'
import Icon from '../../../components/Icon'
import Dropdown from '../../../components/Dropdown'


export default function MobileFooter({ isOpen, close }) {
    console.log(isOpen)

    if (isOpen) {
        return (
            <div className='fixed  z-10 bg-gradient-to-tr from-brand-color to-gray-100 w-full h-full top-0 left-0'>
                <div className='flex relative flex-col items-center pt-32 justify-start gap-y-20 w-full h-full'>
                    <div onClick={close} className='absolute top-5 right-5 text-black text-3xl'>X</div>
                    <div className='flex items-center justify-center gap-x-3'>
                        <Icon name={'fihair-logo-new'} title={'logo'} width={90}></Icon>
                        <div className='space-x-1'>
                            <strong className='text-2xl font-medium font-serif tracking-widest'>Fi</strong>
                            <strong className='text-2xl font-medium text-brand-color font-serif tracking-widest'>Hair</strong>

                        </div>
                    </div>
                    <div className='flex flex-col items-center  gap-y-4 text-xl'>
                        <Dropdown name={"Anasayfa"} link={"/"}></Dropdown>
                        <Dropdown name={"Fi Hair"} link={"/hakkimizda"} ></Dropdown>
                        <Dropdown name={"Saç Ekimi"} link={"/sac-ekimi"} ></Dropdown>
                        <Dropdown name={"Teknikler"}
                            options={[
                                { name: "DHI Tekniği", link: "/teknikler/dhi" },
                                { name: "Safir FUE Tekniği", link: "/teknikler/safir-fue" }
                            ]} ></Dropdown>
                        <Dropdown name={"Hizmetlerimiz"}
                            options={[
                                { name: "Saç Transplantasyonu", link: "/hizmetler/sac-ekimi" },
                                { name: "Saç Analizi", link: "/hizmetler/sac-analizi" },
                                { name: "Mezoterapi Uygulaması", link: "/hizmetler/mezoterapi" },
                                { name: "PRP Uygulaması", link: "/hizmetler/prp" }
                            ]} ></Dropdown>
                        <Dropdown name={"SSS"} link={"/sss"} ></Dropdown>
                        <Dropdown name={"İletişim"} link={"/contact"} ></Dropdown>
                    </div>
                </div>
            </div>
        )
    }
}
