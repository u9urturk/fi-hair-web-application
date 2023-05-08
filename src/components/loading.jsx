import Icon from './Icon'


export default function Loading() {
    



    return (
        <div className="fixed flex flex-col items-center  bg-gradient-to-b  from-[#507BB7]  to-gray-100 justify-center h-full w-full  backdrop-blur-sm ">
            <div className='transition-all animate-pulse relative flex flex-col items-center justify-center gap-y-5' id='icon'>
                <div><Icon name={'fihair-logo-new'} title={'logo'} width={250}></Icon></div>
                <div className='flex items-center justify-center gap-x-2'>
                    <strong className='text-3xl font-medium font-serif tracking-widest'>Fi</strong>
                    <strong className='text-3xl font-medium text-brand-color font-serif tracking-widest'>Hair</strong>
                </div>
            </div>
        </div>
    )
} 