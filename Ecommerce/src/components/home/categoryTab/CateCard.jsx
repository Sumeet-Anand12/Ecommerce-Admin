import React, { useState } from 'react'
import Rating from '@mui/material/Rating';
import { MdOutlineZoomOutMap } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";

import ToolTip from '../../tooltip/ToolTip';

const CateCard = ({img}) => {

    const [showIcon, setShowIcon] = useState(false)

    const handleShowIcon = () => {
        setShowIcon(true)
    }
    const handleShowIconLeave = () => {
        setShowIcon(false)
    }



    return (
        <div className=''>
            <div className='card ' onMouseEnter={handleShowIcon} onMouseLeave={handleShowIconLeave}>
                <div className=' fashion-card'>
                    <div className='fashion-img'>
                        <img src={img} alt="" />

                        {
                            showIcon && (

                                <div className='fashion-icon'>

                                    <ToolTip title="Zoom out">

                                        <MdOutlineZoomOutMap size={"25px"} />

                                    </ToolTip>
                                    <ToolTip title={"Faveroutes"}>

                                        <FaRegHeart size={"25px"} />

                                    </ToolTip>
                                    <ToolTip title={"details-page"}>
                                        <CiShare1 size={"25px"} />
                                    </ToolTip>

                                </div>

                            )
                        }
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                        <span>Initech space</span>
                        <h6 className='ps-4'>Apple Smart Watch / Midnight Aluminum
                        </h6>
                        <Rating name="size-medium" defaultValue={4} readOnly />
                        <div className='pb-4'>
                            <span className='text-decoration-line-through'> $58</span>
                            <span className='px-2 '> $58</span>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CateCard