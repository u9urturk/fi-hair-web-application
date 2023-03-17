import React, { useEffect, useRef } from 'react'


export default function Loading() {
    const ref = useRef()
    const logo = process.env.PUBLIC_URL + `fihair-logo.PNG`

    useEffect(() => {
        let result = ref.current.querySelectorAll("#icon")
        const test = () => {
            result[0].classList.add('scale-125')
            setTimeout(() => {
                result[0].classList.remove('scale-125')
            }, 3000);
        }
        const test2 = () => {
            setTimeout(() => {
                result[0].classList.remove('scale-125')
            }, 1000);
        }
        test()
        test2()
        let interval = setInterval(test, 2000)
        return () => {
            clearInterval(interval)
        }

    }, [ref])


    return (
        <div ref={ref} className="fixed flex flex-col items-center  bg-gradient-to-b  from-[#507BB7]  to-lime-100 justify-center h-full w-full  backdrop-blur-sm ">
            <div className='transition-all flex flex-col items-center justify-center gap-y-5'  id='icon'>
                <img  width={100} height={100} src={logo} alt="" />
                <strong className='font-thin  text-6xl tracking-widest' >FiHair</strong>
            </div>
        </div>
    )
} 