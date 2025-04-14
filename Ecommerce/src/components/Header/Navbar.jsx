import React, { useCallback, useState } from 'react'
import amberg from '../../assets/Image/Banner/hemberg.svg'
import Button from '@mui/material/Button';
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import CategoryPanel from '../home/sidebarPanel/CategoryPanel';
import DropDown from './DropDown';
const Navbar = () => {
   const [openCategoryPanel, setCategoryPanel] = useState(false)
   const [state, setState] = React.useState(false);



   const handleCategory = useCallback(() => {
      setCategoryPanel((prev) => !prev);
   }, []); // No dependencies, so the function is memoized

   const handleDrawer = () => {
      console.log(open, 'open')
      // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      //    return;
      // }

      setState(!state);
   };

   return (
      <nav>
         <div>
            <div className='container-fluid'>
               <div className='row pb-2'>
                  <div className='hemberg col-12 col-md-5  col-lg-4'>

                     <Button variant="text" className='text-white ms-2 pe-2 pt-3' onClick={handleCategory}>  <img src={amberg} alt="" className='me-2' /> SELECT BY CATEGORIES  <IoIosArrowDown className='ms-5' /></Button>
                  </div>

                  <ul className=' col-12 col-md-6  col-lg-8 d-flex align-items-center gap-3 lg:gap-4 justify-content-start pt-2'>
                     <li>
                        <NavLink className="text-decoration-none text-light fw-bold" to={"/"}> Home</NavLink>
                     </li>
                     <li>
                        <NavLink className={({ isActive }) =>
                           isActive ? 'text-decoration-none text-white fw-bold active' : 'text-decoration-none text-white fw-bold'
                        }
                           to={"#"}
                           onMouseEnter={handleDrawer}  // Open drawer on hover
                        // onMouseLeave={handleDrawer}  
                        // Close drawer when mouse leaves
                        > Fashion</NavLink>
                     </li>
                     <li>
                        <NavLink className="text-decoration-none  text-white fw-bold" to={"/"}> New Arrivals</NavLink>
                     </li>
                     <li>
                        <NavLink className="text-decoration-none text-white fw-bold" to={"/"}> All Brands</NavLink>
                     </li>
                     <li>
                        <NavLink className="text-decoration-none text-white fw-bold" to={"/"}> Best Deals</NavLink>
                     </li>
                     <li>
                        <NavLink className="text-decoration-none text-white fw-bold" to={"/"}> Blogs</NavLink>
                     </li>
                  </ul>
               </div>
               <DropDown state={state} handleDrawer={handleDrawer} />
               <CategoryPanel openCategoryPanel={openCategoryPanel} handleCategory={handleCategory} />
            </div>
         </div>
      </nav>

   )
}

export default Navbar