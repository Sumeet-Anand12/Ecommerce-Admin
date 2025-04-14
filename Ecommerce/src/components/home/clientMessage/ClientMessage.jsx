import React from 'react'


import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';
import CateCard from '../categoryTab/CateCard';
import ClientCard from './ClientCard';

const ClientMessage = () => {
    return (
        <div className='container-fluid'>

            <div className='mt-5 client-card '>
                <h5 className='fw-bold'>What Our client Says</h5>
                <div>
                    <Swiper
                        navigation={true}
                        slidesPerView={3}
                        spaceBetween={20}
                        modules={[Navigation]}
                        className="mySwiper client-wrapper"
                    >
                        <SwiperSlide>
                            <ClientCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ClientCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ClientCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ClientCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ClientCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ClientCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ClientCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ClientCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ClientCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ClientCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ClientCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ClientCard />
                        </SwiperSlide>
                    </Swiper>
                </div>
                    <hr className='mt-5' />
            </div>

        </div>
    )
}

export default ClientMessage