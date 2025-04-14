import React from 'react'

const FeaturedBanner = () => {
    return (
        <section className='container-fluid '>
            <div className='banner-card'>
                <div className='card-container'>
                    <div className='featuredcard-img'>
                    </div>
                    <div className='banner-card-content'>
                        <div>
                            <span className='fs-5 text-black'>20 Days Return Products</span>
                            <p className='pt-3 text-black fs-3 fw-bold w-75'>Mobile Shope-Smart
                            Watch T-55</p>
                        </div>
                        <button className='text-uppercase btn btn-danger my-3'>shop now</button>

                    </div>
                </div>
                <div className='card-container2'>
                    <div className='featuredcard-img2'>
                    </div>
                    <div className='banner-card-content2'>
                        <div>
                            <span className='fs-5 text-black'>Save Up To 30% Off</span>
                            <p className='pt-3 text-black fs-3 fw-bold w-75'>Decoration Design
                            Lamp Light</p>
                        </div>
                        <button className='text-uppercase btn btn-danger my-3'>shop now</button>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default FeaturedBanner;