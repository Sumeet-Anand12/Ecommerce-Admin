import React from 'react'
import { FaStar } from "react-icons/fa";

const Rating = () => {
    return (
        <div className='d-flex'>
            {[...new Array(5)].map((_, index) => (
                <div>
                    <FaStar className='text-danger' />

                </div>
            ))}
        </div>
    )
}

export default Rating