import React, { useEffect, useRef } from 'react'
import Icon from '../../../components/Icon';
import Slider from 'react-slick';

export default function BeforeAfter() {

    const getBAImage = (imageId) => {
        return process.env.PUBLIC_URL + `/BAImages/before-after-${imageId}.JPG`;
    }

    const ref = useRef();

    useEffect(() => {
        let items = ref.current.querySelectorAll('#itm')

        const itemsSlider = () => {
            items.forEach(e => {
                e.classList.remove("translate-x-[100%]")
                e.classList.add("-translate-x-[100%]")

            });

            setTimeout(() => {
                items.forEach(e => {
                    e.classList.remove("-translate-x-[100%]")
                    e.classList.add("translate-x-[100%]")
                })
            }, 9000);
        }

        itemsSlider();
        let interval = setInterval(itemsSlider, 18000)
        return () => {
            clearInterval(interval)
        }

    }, [ref])


    const settings = {
        dots: true,
        infinite: true,
        speed: 1400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000

    };


    return (
        <div className='w-full h-auto '>
            <div className='relative hidden md:flex md:flex-col items-center justify-center gap-y-24 w-screen h-screen  bg-gradient-to-bl from-brand-color to-gray-100 '>
                <div className='flex absolute left-12 top-12 items-center justify-center gap-x-3 pl-2'>
                    <Icon name={'fihair-logo-new'} title={'logo'} width={90}></Icon>
                    <div>
                        <strong className='text-2xl font-medium font-serif tracking-widest'>Fi</strong>
                        <strong className='text-2xl font-medium text-brand-color font-serif tracking-widest'>Hair</strong>

                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-y-4'>
                    <div className='text-3xl font-serif font-semibold text-gray-800'><strong>Saç Ekimi</strong></div>
                    <div className='text-3xl font-serif font-semibold text-gray-800'><strong>Öncesi Ve Sonrası</strong></div>
                </div>
                <div ref={ref}>
                    <div className='relative snap-x  flex flex-row gap-x-8  items-center justify-center '>
                        <div id='itm' className='w-[640px]  h-72 shadow-2xl   transition-all duration-[8000ms]   translate-x-[100%] rounded-lg bg-gray-600 text-white flex items-center justify-center'>
                            <img className='max-w-[624px] w-full max-h-[276px] h-full ' src={getBAImage(1)} alt="bai-1" />
                        </div>
                        <div id='itm' className='w-[640px]  h-72 shadow-2xl   transition-all duration-[8000ms]   translate-x-[100%]  rounded-lg bg-gray-600 text-white flex items-center justify-center'>
                            <img className='max-w-[624px] w-full max-h-[276px] h-full ' src={getBAImage(2)} alt="bai-2" />
                        </div>
                        <div id='itm' className='w-[640px]  h-72 shadow-2xl   transition-all duration-[8000ms]   translate-x-[100%] rounded-lg bg-gray-600 text-white flex items-center justify-center'>
                            <img className='max-w-[624px] w-full max-h-[276px] h-full ' src={getBAImage(3)} alt="bai-3" />
                        </div>
                        <div id='itm' className='w-[640px]  h-72 shadow-2xl   transition-all duration-[8000ms]   translate-x-[100%]  rounded-lg bg-gray-600 text-white flex items-center justify-center'>
                            <img className='max-w-[624px] w-full max-h-[276px] h-full ' src={getBAImage(4)} alt="bai-1" />
                        </div>
                    </div>
                </div>
            </div>

            <div className=' md:hidden  border-8 rounded border-brand-color my-5 mx-2'>
                <h1 className='font-semibold text-2xl text-center py-5'>Bizi Tercih Edenler</h1>
                <Slider {...settings}>
                    <img src={getBAImage(1)} className="h-[300px]" alt="slide1" />
                    <img src={getBAImage(2)} className="h-[300px]" alt="slide2" />
                    <img src={getBAImage(3)} className="h-[300px]"  alt="slide3" />
                    <img src={getBAImage(4)} className="h-[300px]"  alt="slide4" />
                </Slider>
            </div>
        </div>
    )
}
