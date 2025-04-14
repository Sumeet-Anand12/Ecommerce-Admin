import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';
import CateCard from '../categoryTab/CateCard';
import logo from "../../../assets/Image/Banner/sunshi.jpg"

const Logo = () => {
  return (
    <div className='container-fluid logo-component'>

      <div className='mt-5 '>

        <div className=''>
          <Swiper
            navigation={true}
            slidesPerView={6}
            spaceBetween={-50}
            modules={[Navigation]}
            className="mySwiper  logo"
          >
            <div>
              
            </div>
            <SwiperSlide>
              <img src={logo} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={logo} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={logo} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={logo} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={logo} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={logo} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={logo} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={logo} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={logo} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={logo} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={logo} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={logo} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={logo} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
  <hr />
    </div>
  )
}

export default Logo