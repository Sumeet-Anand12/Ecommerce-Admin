import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';
import "./Style.css"
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import baner1 from "../../../assets/Image/Banner/sample-1.jpg"
import baner2 from "../../../assets/Image/Banner/sample-2.jpg"
import BannerRight from './BannerRight';



const Banner = () => {
    const [activeSlide, setActiveSlide] = useState("");
    const handleSlideChange = (swiper) => {
        // console.log(swiper.activeIndex,'active')

        setActiveSlide(swiper.activeIndex);  // Update active slide index
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveSlide(0)

        }, 500);
        return () => clearTimeout(timer)
    }, [])

    return (

        <div className='container-fluid'>
            <div className='row banner pt-4'>
                {/* For all screen sizes, use col-12 */}
                <div className='col-12 col-lg-9'>
                    <Swiper
                        navigation={true}
                        spaceBetween={30}
                        effect={'fade'}
                        onSlideChange={handleSlideChange}
                        modules={[EffectFade, Navigation]}
                        className="mySwiper my-banner"
                    >
                        <SwiperSlide>
                            {/* <div >

                            </div> */}
                            {/* <img src={baner1} alt="" /> */}
                            <div className={` banner-img `}>
                                <div className={` banner-content ${activeSlide === 0 ? 'banner-content-active' : ''}`}>
                                    <span>Big Saving Days Sale</span>
                                    <div className='content' >
                                        <h2>Women Solid Round Green T-Shirt</h2>
                                        <li>
                                            <span>Starting At Only</span>
                                            <span>$59.00</span>
                                        </li>
                                        <button className='content-btn btn btn-danger px-4 py-2 text-uppercase'>Shop Now</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`banner-img2`}>
                                <div className={`banner-content ${activeSlide === 1 ? 'banner-content-active' : ''}`}>
                                    <span>Big Saving Days Sale</span>
                                    <div className='content'>
                                        <h2>Buy Modern Chair In Black Color</h2>
                                        <li>
                                            <span>Starting At Only</span>
                                            <span>$99.00</span>
                                        </li>
                                        <button className='content-btn btn btn-danger px-4 py-2 text-uppercase'>Shop Now</button>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='col-12 col-lg-3'>
                    <BannerRight />
                </div>
            </div>
        </div>

    )
}

export default Banner