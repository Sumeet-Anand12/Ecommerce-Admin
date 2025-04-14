import React from 'react'
import logo from "../../assets/banner/image/logo.jpg"
import { GiHamburgerMenu } from "react-icons/gi";
import user from "../../assets/user/user1.jpg"
import Notification from '../badge/Notification';
import { useToggle } from '../../context/Provider';

const Header = () => {
     const {toggle, setToggle} =useToggle();
    
  return (
    <div className='w-full h-20 shadow-md px-5 lg:px-14 overflow-x-hidden'>
      <div className='w-full h-full flex justify-between items-center '>
        <div className=' flex lg:justify-between items-center gap-20  '>
          <img src={logo} alt="" className='object-cover h-8 hidden md:block' />
          <GiHamburgerMenu className='text-2xl' onClick={()=>setToggle(!toggle)} />
        </div>
         
        <ul className='flex  items-center gap-10'>
       
          <li>
            <Notification />
          </li>
          <li>
            <img src={user} alt="" className='shadow-sm rounded-full h-10' />
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Header