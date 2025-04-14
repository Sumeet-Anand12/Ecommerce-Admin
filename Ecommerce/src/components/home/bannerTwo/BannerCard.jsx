import React from 'react'

const BannerCard = () => {
    return (
        <section className='container-fluid '>
            <div className='banner-card'>
                <div className='card-container'>
                    <div className='bannercard-img'>
                    </div>
                    <div className='banner-card-content'>
                        <div>
                            <span className='fs-5 text-black'>Save Up To 20% Off</span>
                            <p className='pt-3 text-black fs-3 fw-bold w-75'>Santa Lucia Three
                                Seater Sofa</p>
                        </div>
                        <button className='text-uppercase btn btn-danger my-3'>shop now</button>

                    </div>
                </div>
                <div className='card-container2'>
                    <div className='bannercard-img2'>
                    </div>
                    <div className='banner-card-content2'>
                        <div>
                            <span className='fs-5 text-black'>Best Online Discount</span>
                            <p className='pt-3 text-black fs-3 fw-bold w-75'>Woman In Red Crew
                                Neck T-shirt</p>
                        </div>
                        <button className='text-uppercase btn btn-danger my-3'>shop now</button>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default BannerCard