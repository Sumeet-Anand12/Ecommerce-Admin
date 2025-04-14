import React, { useEffect, useMemo, useState } from 'react'
import logo from "../../assets/banner/image/logo.jpg"
import { LuLayoutDashboard } from "react-icons/lu";
import { Navigate, NavLink } from 'react-router-dom';
import { useToggle } from '../../context/Provider';
import { IoClose } from "react-icons/io5";
import iconMap from '../iconcomponent/SidebarIcon';
import { RiArrowDropRightLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";


const Sidebar = ({ toggle, setToggle, data }) => {
    const [width, setWidth] = useState(window.innerWidth)
    const [openDropdown, setOpenDropdown] = useState({})

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setToggle(true)

            } else {
                setToggle(false)

            }
            setWidth(window.innerWidth);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener("resize", handleResize)
    }, [setToggle])

    const handleLinkClick = () => {
        if (window.innerWidth <= 768) {
            setToggle(false)
        }


    }

    const slugify = (text = '') =>
        text
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')        // Replace spaces (including multiple) with dash
            .replace(/[^\w-]+/g, '');    // Remove non-word characters (except dash)


    // console.log(toggle)

    return (
        <div className={`${width==768?"w-96 ":"w-70"} shadow-lg z-50  h-screen fixed top-0 bg-[#FFFFFF] transform transition-all duration-900 ease ${toggle ? ' lg:translate-x-0' : '-translate-x-96'}`}>
            <div className='flex justify-start flex-col items-start py-2 px-6'>
                <div className='w-full flex items-center justify-between' >
                    <img src={logo} alt="" className='h-17 py-4 ' />
                    {
                        width <= 768 && (

                            <IoClose onClick={() => setToggle(!toggle)} size={28} className='mb-4 ml-2 hover:bg-blue-500 hover:text-white rounded-full' />
                        )

                    }

                </div>
                <ul className='py-3 w-full'>
                    {data?.map((item, index) =>{
                     const slug = slugify(item.title);
                     const IconComponent = useMemo(() => iconMap[slug], [slug]);  
                    return (
                        
                        <React.Fragment key={item.id}>

                            <li  className=" group flex cursor-pointer justify-between py-2 items-center gap-2 px-2 rounded-sm  hover:bg-my-purple">

                                <NavLink
                                    to={`${slug}`}
                                    onClick={handleLinkClick}
                                    className={({ isActive }) => isActive ? " flex font-bold items-center group-hover:text-hover-text  text-blue-500 gap-3" : "flex items-center gap-3 text-gray-700 w-full group-hover:text-hover-text"}
                                >
                                   {IconComponent && <IconComponent />}
                                    {item.title}
                                </NavLink>
                                {item?.children && (<span onClick={() => setOpenDropdown((prev) => ({ ...prev, [item?.title]: !prev[item?.title] }))}>
                                    {
                                        !openDropdown[item?.title] ? (<RiArrowDropRightLine size={30} />) : (<RiArrowDropDownLine size={30} />)
                                    }

                                </span>
                                )}

                            </li>
                            {openDropdown[item?.title] && item.children && item.children.length > 0 && (
                                <ul className="ml-6 space-y-1">
                                    {item.children.map((child) => (
                                        <li  className="flex items-center gap-2 py-2 px-2 rounded-sm group hover:bg-child">

                                            <NavLink
                                                to={`${slugify(child?.title)}`}
                                                onClick={handleLinkClick}
                                                className={({ isActive }) =>
                                                    isActive ? "font-semibold text-blue-400 group-hover:text-hover-text" : "text-gray-600 group-hover:text-hover-text"
                                                }
                                            >
                                                {child.title}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </React.Fragment>
                    )})}
                    
                    
                </ul>


            </div>
        </div>
    )
}

export default Sidebar