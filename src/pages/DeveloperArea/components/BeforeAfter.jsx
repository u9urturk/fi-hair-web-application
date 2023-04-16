import React, { useEffect, useRef } from 'react'

export default function BeforeAfter() {
    const ref = useRef();

    useEffect(() => {
      let items =ref.current.querySelectorAll('#itm')
        
      const itemsSlider = ()=>{
        items.forEach(e => {
            e.classList.remove("translate-x-[100%]")
            e.classList.add("-translate-x-[100%]")

        });

        setTimeout(() => {
            items.forEach(e=>{
                e.classList.remove("-translate-x-[100%]")
                e.classList.add("translate-x-[100%]")
            })
        }, 9000);
      }

      itemsSlider();
      let interval = setInterval(itemsSlider,18000)
      return()=>{
        clearInterval(interval)
      }
      
    },[ref])
    

    return (
        <div className=' flex items-center justify-center w-screen h-screen  bg-gradient-to-bl from-brand-color to-gray-100 '>
            <div  ref={ref}>
                <div className='relative snap-x  flex flex-row gap-x-8  items-center justify-center '>
                    <div id='itm' className='w-[640px]  h-72 shadow-2xl   transition-all duration-[8000ms]   translate-x-[100%] rounded-xl bg-gray-600 text-white flex items-center justify-center'>X</div>
                    <div id='itm' className='w-[640px]  h-72 shadow-2xl   transition-all duration-[8000ms]   translate-x-[100%]  rounded-xl bg-gray-600 text-white flex items-center justify-center'>Y</div>
                    <div id='itm' className='w-[640px]  h-72 shadow-2xl   transition-all duration-[8000ms]   translate-x-[100%] rounded-xl bg-gray-600 text-white flex items-center justify-center'>Z</div>
                    <div id='itm' className='w-[640px]  h-72 shadow-2xl   transition-all duration-[8000ms]   translate-x-[100%]  rounded-xl bg-gray-600 text-white flex items-center justify-center'>P</div>
                </div>
            </div>
        </div>
    )
}
