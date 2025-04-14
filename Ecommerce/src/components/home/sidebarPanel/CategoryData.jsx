import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const CategoryData = ({ data, handleCategory,handleDrawer }) => {
    
      const [expandFolder, setExpandFolder]=useState({})

    return (
        <div className=''>
            <div>
                {data?.map((item) => (
                    <ul key={item.id} className='mx-0 px-3 py-1 fs-4'>
                        <li className=''><NavLink className="text-decoration-none " to={"#"}>
                            <Button className="custom-button" variant="text" sx={{ padding: 1, textAlign: 'left', color: "#666" }}  onClick={handleCategory || handleDrawer}>{item.name}</Button>  </NavLink>
                           
                         {
                            item?.isFolder &&  <span className='sidebarIcon' onClick={()=>setExpandFolder((prev)=>({...prev, [item?.name]: !prev[item?.name]}))}>{ !expandFolder[item?.name] ?<FaPlus />:<FaMinus />}</span>
                         }
                        </li>

                        { expandFolder[item?.name] && item.children && (<CategoryData data={item.children} />)}

                    </ul>
                ))}


            </div>

        </div>
    )
}

export default CategoryData