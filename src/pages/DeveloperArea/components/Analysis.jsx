import React, {useState } from 'react'

export default function Analysis() {
    const imagesUrl = process.env.PUBLIC_URL + `/SDTG/`
    const [isOpen, setisOpen] = useState(false)
    const modalActive = () => {
        if (isOpen) {
            return (
                <div className='fixed left-0 top-0 w-full h-screen backdrop-blur-sm flex items-center justify-center'>

                    <div onClick={() => { setisOpen(false) }} className='absolute cursor-pointer text-2xl font-bold right-8 top-8'>X</div>

                    <div >
                        <strong className='text-brand-color text-4xl'>TEST MODAL </strong>
                    </div>
                </div>
            )
        }
    }


    return (
        <div className='w-full h-screen bg-gray-100 flex flex-col pt-1 pl-8 justify-start gap-y-10 '>
            <h1 className='font-bold text-2xl'>Saç Analiz Formu : </h1>
            <div className='flex flex-col gap-y-2 '>
                <div className=' flex flex-col gap-y-2 p-2 w-20' >
                    <p className='font-semibold '>Cinsiyet</p>
                    <div className='border-t-[1px] border-brand-color w-full'></div>
                </div>
                <div className='flex items-center pt-4 transition-all justify-center gap-x-24'>
                    <div onClick={() => { setisOpen(true) }} className='flex flex-col items-center justify-center'>
                        <img className='h-auto w-96 bg-white rounded-xl transition-all cursor-pointer hover:border active:scale-95 ' src={`${imagesUrl}erkekderece1.png`} alt="" />
                        <p className=' text-xs md:text-base font-medium md:-translate-y-10 -translate-y-5'>Erkek</p>
                    </div>
                    <div onClick={() => { setisOpen(true) }} className='flex flex-col items-center justify-center' >
                        <img className='h-auto w-96 bg-white rounded-xl cursor-pointer hover:border active:scale-95 ' src={`${imagesUrl}kadinderece1.png`} alt="" />
                        <p className=' text-xs md:text-base font-medium md:-translate-y-10 -translate-y-5'>Kadın</p>

                    </div>
                </div>
            </div>
            {isOpen && modalActive()}

        </div>
    )
}
