import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';
import CateCard from './CateCard';


const Furniture = () => {
  return (
    <div className=' pt-4'>
      <Swiper
        navigation={true}
        slidesPerView={6}
        spaceBetween={0}
        modules={[Navigation]}
        className="mySwiper Category-wrapper"
      >
        <SwiperSlide>
          <CateCard img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/36-large_default/the-best-is-yet-to-come-framed-poster.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/36-large_default/the-best-is-yet-to-come-framed-poster.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/36-large_default/the-best-is-yet-to-come-framed-poster.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/36-large_default/the-best-is-yet-to-come-framed-poster.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/36-large_default/the-best-is-yet-to-come-framed-poster.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/36-large_default/the-best-is-yet-to-come-framed-poster.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/36-large_default/the-best-is-yet-to-come-framed-poster.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/36-large_default/the-best-is-yet-to-come-framed-poster.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/36-large_default/the-best-is-yet-to-come-framed-poster.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/36-large_default/the-best-is-yet-to-come-framed-poster.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/36-large_default/the-best-is-yet-to-come-framed-poster.jpg" />
        </SwiperSlide>
      </Swiper>


    </div>
  )
}

export default Furniture