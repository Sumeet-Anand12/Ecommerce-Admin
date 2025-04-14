import React, { useState,forwardRef, memo  } from 'react'
import { IoClose } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import UseDropdown from '../../hooks/useDropdown';
import UseSidebar from '../../hooks/useSidebar';


const ResponsiveNav = memo(forwardRef(({closeSidebar, isOpenSidebar}, ref) => {
    
   
 
  console.log(ref, "ref")

    return (
        <div className={`responsive-nav ${isOpenSidebar ?"sidebar":"sidebar-none"}`} ref={ref}>
            <div className='d-flex align-items-center gap-5 px-4 py-3'>
                <IoClose size={30} onClick={closeSidebar} />
                <h4>Menu</h4>
            </div>
            <nav>
                <ul className='d-flex flex-column gap-3 '>
                    <li>
                        <NavLink className="text-decoration-none text-black fw-bold" to={"/"}> Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-decoration-none text-black fw-bold active' : 'text-decoration-none text-black fw-bold'
                        }
                            to={"#"}

                        > Fashion</NavLink>
                    </li>
                    <li>
                        <NavLink className="text-decoration-none  text-black fw-bold" to={"/"}> New Arrivals</NavLink>
                    </li>
                    <li>
                        <NavLink className="text-decoration-none text-black fw-bold" to={"/"}> All Brands</NavLink>
                    </li>
                    <li>
                        <NavLink className="text-decoration-none text-black fw-bold" to={"/"}> Best Deals</NavLink>
                    </li>
                    <li>
                        <NavLink className="text-decoration-none text-black fw-bold" to={"/"}> Blogs</NavLink>
                    </li>
                </ul>
            </nav>

        </div>
    )
}
))

export default ResponsiveNav