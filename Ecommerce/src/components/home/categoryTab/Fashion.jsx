import React from 'react'
import watch from "../../../assets/Image/Product/watch.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';
import CateCard from './CateCard';

const Fashion = () => {
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
          <CateCard img="https://www.indianterrain.com/cdn/shop/files/ITPMW00001_White_20Tan_01.jpg?v=1707686613" />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard img="https://www.indianterrain.com/cdn/shop/files/ITPMW00001_White_20Tan_01.jpg?v=1707686613" />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard img="https://www.indianterrain.com/cdn/shop/files/ITPMW00001_White_20Tan_01.jpg?v=1707686613" />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard img="https://www.indianterrain.com/cdn/shop/files/ITPMW00001_White_20Tan_01.jpg?v=1707686613" />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard img="https://www.indianterrain.com/cdn/shop/files/ITPMW00001_White_20Tan_01.jpg?v=1707686613" />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard img="https://www.indianterrain.com/cdn/shop/files/ITPMW00001_White_20Tan_01.jpg?v=1707686613" />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard img="https://www.indianterrain.com/cdn/shop/files/ITPMW00001_White_20Tan_01.jpg?v=1707686613" />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard img="https://www.indianterrain.com/cdn/shop/files/ITPMW00001_White_20Tan_01.jpg?v=1707686613" />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard img="https://www.indianterrain.com/cdn/shop/files/ITPMW00001_White_20Tan_01.jpg?v=1707686613"/>
        </SwiperSlide>
        <SwiperSlide>
          <CateCard img="https://www.indianterrain.com/cdn/shop/files/ITPMW00001_White_20Tan_01.jpg?v=1707686613" />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard  img="https://www.indianterrain.com/cdn/shop/files/ITPMW00001_White_20Tan_01.jpg?v=1707686613" />
        </SwiperSlide>
      </Swiper>


    </div>
  )
}

export default Fashion