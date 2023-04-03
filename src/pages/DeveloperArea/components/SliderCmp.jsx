import React from 'react'
import Slider from 'react-slick'

export default function SliderCmp() {
    const slide1 = process.env.PUBLIC_URL + `/SliderPhoto/slide1.png`
    const slide2 = process.env.PUBLIC_URL + `/SliderPhoto/slide2.png`

    const settings = {
        dots: true,
        infinite: true,
        speed: 1400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:4000
    
      };


    return (
        <div>
            <Slider {...settings}>
                <img src={slide1} className="max-h-[500px] h-full w-full" alt="" />
                <img src={slide2} className="max-h-[500px] h-full  w-full " alt="" />
            </Slider>
        </div>
    )
}

