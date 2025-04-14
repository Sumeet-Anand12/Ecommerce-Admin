import React from 'react'
import Band from './Band'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';
import CateCard from '../categoryTab/CateCard';

const LatestProduct = () => {
  return (
    <div className='container-fluid'>
        <Band />
        <div className='mt-5 '>
            <h5 className='fw-bold'>Latest Product</h5>
            <div>
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
        </div>
        
    </div>
  )
}

export default LatestProduct