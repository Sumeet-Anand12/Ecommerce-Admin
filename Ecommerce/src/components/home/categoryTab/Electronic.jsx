import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';
import CateCard from './CateCard';

const Electronic = () => {
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
          <CateCard img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/103-large_default/pack-mug-framed-poster.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
          <CateCard img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/103-large_default/pack-mug-framed-poster.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/103-large_default/pack-mug-framed-poster.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/103-large_default/pack-mug-framed-poster.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
          <CateCard img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/103-large_default/pack-mug-framed-poster.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/103-large_default/pack-mug-framed-poster.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
          <CateCard img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/103-large_default/pack-mug-framed-poster.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/103-large_default/pack-mug-framed-poster.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
          <CateCard img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/103-large_default/pack-mug-framed-poster.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
          <CateCard img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/103-large_default/pack-mug-framed-poster.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/103-large_default/pack-mug-framed-poster.jpg"/>
        </SwiperSlide>
      </Swiper>


    </div>
  )
}

export default Electronic