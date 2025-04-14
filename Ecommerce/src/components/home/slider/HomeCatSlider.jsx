
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import "./homeCat.css"
import iphone from "../../../assets/Image/Product/iphone-blue.jpg"
import { NavLink } from 'react-router-dom';

const HomeCatSlider = () => {
    return (
        <div className='container-fluid'>
            <Swiper spaceBetween={40}
                slidesPerView={6}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 50,
                    },
                  }}
                className="mySwiper homeCat-wrapper">
                <SwiperSlide>
                    <NavLink to={""} className="text-decoration-none ">
                        <div className='homeCat'>
                            <img src={iphone} alt="" />
                            <span className='text-black'>Smart Talets</span>
                        </div>
                        <div className='home-cat-sapan'>

                        </div>

                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink to={""} className="text-decoration-none ">
                        <div className='homeCat'>
                            <img src={iphone} alt="" />
                            <span className='text-black'>Smart Talets</span>
                        </div>
                        <div className='home-cat-sapan'>

                        </div>

                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink to={""} className="text-decoration-none ">
                        <div className='homeCat'>
                            <img src={iphone} alt="" />
                            <span className='text-black'>Smart Talets</span>
                        </div>
                        <div className='home-cat-sapan'>

                        </div>

                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink to={""} className="text-decoration-none ">
                        <div className='homeCat'>
                            <img src={iphone} alt="" />
                            <span className='text-black'>Smart Talets</span>
                        </div>
                        <div className='home-cat-sapan'>

                        </div>

                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink to={""} className="text-decoration-none ">
                        <div className='homeCat'>
                            <img src={iphone} alt="" />
                            <span className='text-black'>Smart Talets</span>
                        </div>
                        <div className='home-cat-sapan'>

                        </div>

                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink to={""} className="text-decoration-none ">
                        <div className='homeCat'>
                            <img src={iphone} alt="" />
                            <span className='text-black'>Smart Talets</span>
                        </div>
                        <div className='home-cat-sapan'>

                        </div>

                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink to={""} className="text-decoration-none ">
                        <div className='homeCat'>
                            <img src={iphone} alt="" />
                            <span className='text-black'>Smart Talets</span>
                        </div>
                        <div className='home-cat-sapan'>

                        </div>

                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink to={""} className="text-decoration-none ">
                        <div className='homeCat'>
                            <img src={iphone} alt="" />
                            <span className='text-black'>Smart Talets</span>
                        </div>
                        <div className='home-cat-sapan'>

                        </div>

                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink to={""} className="text-decoration-none ">
                        <div className='homeCat'>
                            <img src={iphone} alt="" />
                            <span className='text-black'>Smart Talets</span>
                        </div>
                        <div className='home-cat-sapan'>

                        </div>

                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink to={""} className="text-decoration-none ">
                        <div className='homeCat'>
                            <img src={iphone} alt="" />
                            <span className='text-black'>Smart Talets</span>
                        </div>
                        <div className='home-cat-sapan'>

                        </div>

                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink to={""} className="text-decoration-none ">
                        <div className='homeCat'>
                            <img src={iphone} alt="" />
                            <span className='text-black'>Smart Talets</span>
                        </div>
                        <div className='home-cat-sapan'>

                        </div>

                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink to={""} className="text-decoration-none ">
                        <div className='homeCat'>
                            <img src={iphone} alt="" />
                            <span className='text-black'>Smart Talets</span>
                        </div>
                        <div className='home-cat-sapan'>

                        </div>

                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink to={""} className="text-decoration-none ">
                        <div className='homeCat'>
                            <img src={iphone} alt="" />
                            <span className='text-black'>Smart Talets</span>
                        </div>
                        <div className='home-cat-sapan'>

                        </div>

                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink to={""} className="text-decoration-none ">
                        <div className='homeCat'>
                            <img src={iphone} alt="" />
                            <span className='text-black'>Smart Talets</span>
                        </div>
                        <div className='home-cat-sapan'>

                        </div>

                    </NavLink>
                </SwiperSlide>
               
               
            </Swiper>
           Sumit Anand
        </div>
    )
}

export default HomeCatSlider