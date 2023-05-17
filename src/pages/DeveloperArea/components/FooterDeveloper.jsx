import React, { useEffect } from 'react'
import {AiOutlineGithub} from 'react-icons/ai'
export default function FooterDeveloper() {

  useEffect(() => {
    
  }, [])
  


  return (
    <div className='bg-brand-color w-full h-20  py-28 md:py-0  bg-gradient-to-b from-brand-color to-gray-100 flex items-center justify-center'>
        <div>
            <a className='flex items-center justify-center gap-x-2' href="https://github.com/u9urturk" target="_blank" rel="noopener noreferrer">Developed By <AiOutlineGithub size={32}></AiOutlineGithub>Uğur Türk &#169; 2023.FiHair</a>
            
        </div>
    </div>
  )
}
