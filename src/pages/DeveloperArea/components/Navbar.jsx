import React from 'react'

export default function Navbar() {
    return (
        <div className=' w-full h-16 bg-brand-color flex items-center justify-center  '>
            <div className='  container mx-auto px-28 py-1 flex items-center justify-center gap-x-16 text-white font-semibold '>
                <div className='cursor-pointer hover:border-b transition-all active:scale-95'>AnaSayfa</div>
                <div className='cursor-pointer hover:border-b transition-all active:scale-95'>Fi Hair</div>
                <div className='cursor-pointer hover:border-b transition-all active:scale-95'>Saç Ekimi</div>
                <div className='cursor-pointer hover:border-b transition-all active:scale-95'>Teknikler</div>
                <div className='cursor-pointer hover:border-b transition-all active:scale-95'>Hizmetlerimiz</div>
                <div className='cursor-pointer hover:border-b transition-all active:scale-95'>SSS</div>
                <div className='cursor-pointer hover:border-b transition-all active:scale-95'>İletişim</div>
            </div>
        </div>
    )
}
