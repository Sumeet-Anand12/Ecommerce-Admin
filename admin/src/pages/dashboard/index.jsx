import React from 'react'
import Header from '../../component/header/Header'
import { Outlet } from 'react-router-dom'
import { useToggle } from '../../context/Provider'
import SidebarPage from '../sidebar'

const DasBoardPage = () => {
  const {toggle, setToggle} =useToggle();
  return (
    <div className={`overflow-x-hidden ${toggle?"backdrop-blur-lg bg-gray-500/30  md:backdrop-blur-none md:bg-transparent h-screen ":"backdrop-blur-none lg:bg-transparent"}`}>
        <Header />
         <SidebarPage toggle={toggle} setToggle={setToggle} />
         
         <div className={`w-full py-6 px-5 transform transition-all duration-500 ease-in-out ${toggle?"lg:translate-x-70 ":"lg:translate-x-5"}`}>
            <Outlet>
            </Outlet>
          
         </div>

    </div>
  )
}

export default DasBoardPage;