import React from 'react'
import subBanner from '../../../assets/Image/Banner/sub-banner-1.jpg'
import subBanner2 from '../../../assets/Image/Banner/sub-banner-2.jpg'
import { NavLink } from 'react-router-dom';

const BannerRight = () => {
    return (
        <div className=' banner-Right'>
            <div className='img-container'>
                <div className='sub-banner-first'>

                    <div className='banner-right-content'>
                        <ul>
                            <li>Samsung Gear
                                VR Camera</li>
                            <span className='fs-2 text-danger fw-bold'>$129.00</span>
                            <button className='border-0  bg-transparent'><NavLink to={""} className="text-dark fw-base fs-5"> Shop Now </NavLink></button>
                        </ul>

                    </div>
                </div>

            </div>
            <div className='img-container'>
                <div className='sub-banner-second'>

                    <div className='banner-right-down-content'>
                        <ul>
                            <li>Marcel Dining
                            Room Chair</li>
                            <span className='fs-2 text-danger fw-bold'>$129.00</span>
                            <button className='border-0 bg-transparent  text-bold'><NavLink to={""} className="text-dark fw-bold fs-5"> Shop Now </NavLink></button>
                        </ul>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default BannerRight