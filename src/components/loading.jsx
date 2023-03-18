import Icon from './Icon'


export default function Loading() {
    const logo = process.env.PUBLIC_URL + `fihair-logo.PNG`
    const frame = process.env.PUBLIC_URL + `fihair-frame.svg`
   


    return (
        <div  className="fixed flex flex-col items-center  bg-gradient-to-b  from-[#507BB7]  to-lime-100 justify-center h-full w-full  backdrop-blur-sm ">
            <div className='transition-all animate-pulse relative flex flex-col items-center justify-center gap-y-5'  id='icon'>
                <img  width={100} height={100} src={logo} alt="" />
                <div className='absolute mr-1 mt-8 '><Icon name="fihair-frame2" title={frame} width={1300}></Icon></div>
                <strong className='font-thin  text-6xl tracking-widest' >FiHair</strong>
            </div>
        </div>
    )
} 