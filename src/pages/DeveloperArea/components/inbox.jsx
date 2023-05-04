import React from 'react'
import ListenContact from '../../../components/ListenContact'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import ListenAnalysis from '../../../components/ListenAnalysis'

export default function Inbox({ isOpen, onClose }) {

    if (isOpen === true) {
        return (
            <div className='fixed left-0 top-0 w-full h-screen backdrop-blur-lg  flex items-center justify-center'>

                <div className='relative flex flex-col items-center gap-y-4 justify-center max-w-5xl w-full max-h-[calc(100%-5rem)] h-full bg-gray-400 rounded-xl shadow-2xl bg-opacity-90'>
                    <div onClick={onClose} className="absolute top-2 right-3 cursor-pointer" >
                        <AiOutlineCloseCircle size={28} className='text-gray-600 hover:scale-105 hover:text-gray-900 transition-all' ></AiOutlineCloseCircle>
                    </div>
                    <strong className='basis-[10%] flex text-gray-100 items-center'>Gelen Kutusu</strong>
                    <div className='flex items-start justify-around basis-[90%] w-full h-full'>
                        <div className='w-full gap-y-2 h-full basis-[50%] border-r border-gray-100 border-opacity-40 flex flex-col items-center justify-center'>
                            <header className='text-gray-100 basis-[5%]'>İletişim</header>
                            <div className=' justify-center overflow-auto  w-[calc(100%-2rem)]  basis-[95%]'>
                                <ListenContact></ListenContact>
                            </div>

                        </div>
                        <div className='w-full gap-y-2 h-full basis-[50%] border-r border-gray-100 border-opacity-40 flex flex-col items-center justify-center'>
                            <header className='text-gray-100'>Analiz</header>
                            <div  className=' justify-center overflow-auto  w-[calc(100%-2rem)]  basis-[95%]'>
                                <ListenAnalysis></ListenAnalysis>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
