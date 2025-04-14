import React from 'react'
import { NavLink } from "react-router-dom"

const BannerCard = ({ title, price }) => {
    return (

        <div className='banner-card'>
            <div className='card-img'>
                <div className='card-subcontent'>
                    <h4 className='fs-5 fw-bold'>{title}</h4>
                    <span className='text-danger fs-3 my-0 py-0'>{price}</span> <br />
                    <NavLink to={"#"} className="my-0 py-0"> <button className='border-0  my-0 py-0 bg-transparent text-decoration-underline fs-6 text-uppercase fw-bold'> Shop Now</button></NavLink>
                </div>
            </div>
        </div>



    )
}

export default BannerCard