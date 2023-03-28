import React from 'react'
import Slider from 'react-slick';

const slide1 = process.env.PUBLIC_URL + `/SliderPhoto/slide1.png`
const slide2 = process.env.PUBLIC_URL + `/SliderPhoto/slide2.png`


const photos = [
    {
        id: 1,
        url: slide1
    },
    {
        id: 2,
        url: slide2
    }
]
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const PhotoSlider = () => {


    return (
        <div className='relative'>
            <div >
                <Slider {...settings}>
                    {photos.map((photo, index) => (
                        <div key={index}>
                            <img className='w-full h-[500px]'  src={photo.url} alt={`Photo ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default PhotoSlider;
