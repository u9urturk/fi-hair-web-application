import React, { useEffect, useState } from 'react'
import { GoTools } from 'react-icons/go'
import { AiOutlineCloseCircle } from 'react-icons/ai'


export default function Models({ isActive = false, onClose }) {

    if (isActive == true) {
        return (
            <div className='fixed top-0 left-0 h-screen w-full  backdrop-blur-sm'>
                <div className='h-full w-full flex items-center justify-center'>
                    <div className='relative flex flex-col items-center bg-[#507BB7] rounded-3xl bg-opacity-20 justify-center gap-y-16 min-w-[300px] min-h-[400px] w-auto h-auto border-2 '>
                        <div onClick={onClose}><AiOutlineCloseCircle className='absolute top-4 right-4 text-white transition-all cursor-pointer hover:scale-75' size={34}></AiOutlineCloseCircle></div>
                        <GoTools className='text-white animate-spin-slow' size={80}></GoTools>
                        <form className='flex flex-col items-center justify-center gap-y-3' action="">
                            <input type="text" className='p-2 rounded-md w-48  transition-all h-10 outline-none hover:text-sm ' placeholder='Kullanıcı adı' />
                            <input type="password" className='p-2 rounded-md w-48  h-10 transition-all outline-none hover:text-sm ' placeholder='Şifre' />
                            <button className='flex gap-x-2 items-center justify-center text-white transition-all hover:scale-110  rounded-lg w-48 h-10 bg-[#507BB7]'>Giriş Yap</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
